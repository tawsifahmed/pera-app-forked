<script setup>
import { storeToRefs } from 'pinia';
import { attendanceStore } from '~/store/attendance';
// const { getAttendance, googleAttendance } = attendanceStore();
// const { attendanceD } = storeToRefs(attendanceStore());
import { ref } from 'vue';
import accessPermission from '~/composables/usePermission';
const filterAssignee = ref(accessPermission('all_user_attendance'));
const url = useRuntimeConfig();

const statusColor = ref({
    present: 'green',
    absent: 'red',
    late: 'orange'
});

const date = ref(null);
date.value = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

const selectedUser = ref(null);

const usersLists = ref([]);
const init = async (userTypes) => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
        $fetch(`${url.public.apiUrl}/users/list${userTypes ? `?role_id=${userTypes}` : ''}`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        usersLists.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const formattedDate = ref(null);

const setUser = ref(null);
watch(date, () => console.log(date));
const handleFilter = async () => {
    // console.log('date', date);
    const yearMonth = `${date.value.getFullYear()}-${String(date.value.getMonth() + 1).padStart(2, '0')}`;
    formattedDate.value = yearMonth;
    console.log('formattedDate', formattedDate.value);
    setUser.value = selectedUser.value ? selectedUser.value.id : '';

    await getAttendanceData(formattedDate.value, setUser.value);
};
const handleFilterReset = () => {
    date.value = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    selectedUser.value = null;
    setUser.value = null;
    handleFilter();
};
const attendanceData = ref([]);

const getAttendanceData = async (month = '', user = '') => {
    try {
        const token = useCookie('token');
        const monthParam = month ? `&month=${month}` : '';
        const userParam = user ? `&user[]=${user}` : '';
        const { data, error } = await useFetch(`${url.public.apiUrl}/attendance/list?${monthParam}${userParam}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (error.value) {
            console.error('Error fetching attendance data:', error.value);

            return;
        }

        if (data.value) {
            attendanceData.value = data.value.data;
        } else {
            attendanceData.value = [];
            console.warn('API returned no data. Check the server or parameters');
        }
    } catch (e) {
        console.error('An unexpected error occurred:', e);
    }
};

const handleDownload = async () => {
    const token = useCookie('token');
    const month = formattedDate.value;
    const user = setUser.value;
    const monthParam = month ? `month=${month}` : '';
    const userParam = user ? `&user[]=${user}` : '';
    const { data, error } = await useFetch(`${url.public.apiUrl}/attendance/download?${monthParam}${userParam}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (error.value) {
        console.error('Error fetching attendance data:', error.value);
        return;
    }

    if (data.value) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.setAttribute('download', `attendance-${month}.csv`);
        document.body.appendChild(link);
        link.click();
    } else {
        console.warn('API returned no data. Check the server or parameters');
    }
};

init();
onMounted(() => {
    handleFilter();
});
</script>
<template>
    <div>
        <div class="flex justify-content-between py-2">
            <!-- <Button label="Google Attendance" severity="primary" /> -->
            <div class="flex align-items-center justify-content-between w-full mx-2 mb-3">
                <div>
                    <Calendar @date-select="handleFilter($event, slotProps)" v-model="date" view="month" dateFormat="mm/yy" placeholder="Select Month" />
                    <Dropdown v-if="filterAssignee" @change="handleFilter()" v-model="selectedUser" :options="usersLists" filter resetFilterOnHide optionLabel="name" placeholder="Select Employee" class="w-full md:w-17rem ml-2" />
                    <Button @click="handleFilterReset" label="Reset" class="ml-2" severity="secondary" />
                </div>
                <Button @click="handleDownload" label="Download" class="ml-2" severity="primary" />
            </div>
        </div>
        <!-- <pre>{{attendanceData}}</pre> -->
        <!-- Add your table and other components here -->
        <DataTable class="table-st" :value="attendanceData" :rowHover="true" :paginator="false" :rows="30" stripedRows scrollable scrollHeight="62vh" tableStyle="min-width: 50rem" :rowsPerPageOptions="[5, 10, 20, 50]">
            <template #empty> <p class="text-center">No Data found.</p> </template>
            <template #loading> Loading. Please wait... </template>
            <!-- <Column style="width: 2%" field="id" header="#" :body="(_, { rowIndex }) => rowIndex + 1"> </Column> -->
            <Column style="width: 12%" field="user_name" header="Name"> </Column>
            <Column style="width: 12%" field="date" header="Date"></Column>
            <Column style="width: 12%" field="day" header="Day"></Column>
            <Column style="width: 12%" field="start_time" header="IN"> </Column>
            <Column style="width: 12%" field="end_time" header="OUT"> </Column>
            <Column style="width: 12%" field="type" header="Type"></Column>
            <Column style="width: 12%" field="status" header="Status">
                <template #body="slotProps">
                    <div>
                        <span :style="`color:${statusColor[slotProps.data.status.toLowerCase()]}; text-transform:capitalize `">{{ slotProps.data.status }}</span>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>
/* Add any custom styles here */

.description {
    width: 60%;
    display: block; /* Ensures the element behaves like a block for truncation */
    overflow: hidden; /* Hides overflowing content */
    white-space: nowrap; /* Prevents text wrapping */
    text-overflow: ellipsis; /* Adds "..." to indicate truncated content */
    line-height: 1.5; /* Adjusts the line height for better readability */
}
.table-st {
    border: inherit;
    border-radius: 10px;
    overflow: hidden;
}
.table-st thead tr {
    background: #ededed;
}
.title {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    /* font-weight: 500; */
}
.title p {
    margin: 0;
}
.perticipants {
    margin: 8px 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.participants p {
    font-size: 18px;
}
.details {
    padding: 16px;
    border: 1px solid #ededed;
    border-radius: 8px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-d);
}
.header h3 {
    margin: 0;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
