<script setup>
import { storeToRefs } from 'pinia';
import { attendanceStore } from '~/store/attendance';
// const { getAttendance, googleAttendance } = attendanceStore();
// const { attendanceD } = storeToRefs(attendanceStore());
import { ref } from 'vue';
const url = useRuntimeConfig();

const statusColor = ref({
    present: 'green',
    absent: 'red',
    late: 'orange'
});
// console.log('vueData', attendanceD);
const date = ref(null);

watch(date, () => console.log(date));

const attendanceData = ref([]);
const getAttendanceData = async (date, user = null) => {
    try {
        const token = useCookie('token');
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/attendance/list?user=${user ? user : ''}&month=${''}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        if (data.value) {
            attendanceData.value = data.value.data;
            console.log('attendanceData', attendanceData.value);
            console.log('attendanceData', data);
        }
    } catch (e) {
        console.log(e);
    }
};

getAttendanceData();
</script>
<template>
    <div>
        <div class="flex justify-content-between py-2">
            <!-- <Button label="Google Attendance" severity="primary" /> -->
            <div class="">
                <Calendar v-model="date" view="month" dateFormat="mm/yy" placeholder="Select Month" />
            </div>
        </div>
        <!-- <pre>{{attendanceData}}</pre> -->
        <!-- Add your table and other components here -->
        <DataTable
            class="table-st"
            :value="attendanceData"
            :rowHover="true"
            :paginator="false"
            :rows="30"
            stripedRows
            scrollable
            scrollHeight="62vh"
            tableStyle="min-width: 50rem"
            :rowsPerPageOptions="[5, 10, 20, 50]"
        >
            <template #empty> <p class="text-center">No Data found.</p> </template>
            <template #loading> Loading. Please wait... </template>
            <Column style="width: 2%" field="id" header="#" :body="(_, { rowIndex }) => rowIndex + 1"> </Column>
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
