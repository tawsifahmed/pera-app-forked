<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch, onMounted } from 'vue';
import accessPermission from '~/composables/usePermission';
const filterAssignee = ref(accessPermission('all_user_attendance'));
const url = useRuntimeConfig();

const statusColor = ref({
    present: 'green',
    absent: 'red',
    late: 'orange'
});

// Month selection
const date = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

// Start and end date selection
const startDate = ref(null);
const endDate = ref(null);

const selectedUser = ref(null);
const usersLists = ref([]);
const formattedDate = ref(null);
const setUser = ref(null);
const attendanceData = ref([]);

// Initialize user list
const init = async (userTypes) => {
    const token = useCookie('token');
    const { data } = await useAsyncData('taskAssignModalData', () =>
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

// Format dates to YYYY-MM-DD
const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

// Fetch attendance data
const getAttendanceData = async (params) => {
    try {
        const token = useCookie('token');
        const { data, error } = await useFetch(`${url.public.apiUrl}/attendance/list?${params}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (error.value) {
            console.error('Error fetching attendance data:', error.value);
            return;
        }

        attendanceData.value = data.value?.data || [];
    } catch (e) {
        console.error('An unexpected error occurred:', e);
    }
};
let params = ref('')
// Call API based on selected month or start/end date
const handleFilter = async () => {
    if (startDate.value && endDate.value) {
        const formattedStartDate = formatDate(startDate.value);
        const formattedEndDate = formatDate(endDate.value);
        params.value = `start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
        date.value = null; // Reset month selection
    } else {
        const yearMonth = `${date.value.getFullYear()}-${String(date.value.getMonth() + 1).padStart(2, '0')}`;
        formattedDate.value = yearMonth;
        params.value = `month=${formattedDate.value}`;
    }

    // Set selected user
    setUser.value = selectedUser.value ? selectedUser.value.id : '';
    if (setUser.value) {
        params.value += `&user[]=${setUser.value}`;
    }

    // Make the API call
    await getAttendanceData(params.value);
};
// Reset filter
const handleFilterReset = () => {
    date.value = new Date(new Date().getFullYear(), new Date().getMonth(), 1); // Reset to current month
    startDate.value = null;
    endDate.value = null;
    selectedUser.value = null;
    setUser.value = null;
    handleFilter();
};

// Handle download
const handleDownload = async () => {
    const token = useCookie('token');
    let params = '';

    if (startDate.value && endDate.value) {
        const formattedStartDate = formatDate(startDate.value);
        const formattedEndDate = formatDate(endDate.value);
        params = `start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
    } else if (formattedDate.value) {
        params = `month=${formattedDate.value}`;
    }

    if (setUser.value) {
        params += `&user[]=${setUser.value}`;
    }

    const { data, error } = await useFetch(`${url.public.apiUrl}/attendance/download?${params}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (error.value) {
        console.error('Error downloading attendance data:', error.value);
        return;
    }

    if (data.value) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.setAttribute('download', `attendance-${formattedDate.value}.csv`);
        document.body.appendChild(link);
        link.click();
    }
};

// Watch for changes in startDate and endDate
watch([startDate, endDate], () => {
    if (startDate.value && endDate.value) {
        handleFilter();
    }
});

// Watch for changes in month selection
watch(date, (newDate) => {
    if ((startDate.value || endDate.value) && newDate !== null) {
        startDate.value = null;
        endDate.value = null;
    }
    if (!startDate.value && !endDate.value) {
        handleFilter();
    }
});

watch(selectedUser, () => {
    handleFilter(); // Call the filter whenever the user selection changes
});

// Initialize on page load
init();
onMounted(() => {
    handleFilter();
});
</script>

<template>
    <div>
        <div class="flex justify-content-between py-2">
            <div class="flex align-items-center justify-content-between w-full mx-2 mb-3">
                <div>
                    <!-- Month Selection -->
                    <Calendar v-model="date" view="month" dateFormat="mm/yy" class="mr-2" placeholder="Select Month" />

                    <!-- Start and End Date Selection -->
                    <Calendar v-model="startDate" dateFormat="yy-mm-dd" placeholder="Start Date" class="mr-2" />
                    <Calendar v-model="endDate" dateFormat="yy-mm-dd" placeholder="End Date" />

                    <!-- User Dropdown -->
                    <Dropdown v-if="filterAssignee" v-model="selectedUser" :options="usersLists" filter resetFilterOnHide optionLabel="name" placeholder="Select Employee" class="w-full md:w-17rem ml-2" />
                    
                    <!-- Reset Button -->
                    <Button @click="handleFilterReset" label="Reset" class="ml-2" severity="secondary" />
                </div>

                <!-- Download Button -->
                <Button @click="handleDownload" label="Download" class="ml-2" severity="primary" />
            </div>
        </div>

        <!-- Attendance Data Table -->
        <DataTable class="table-st" :value="attendanceData" :rowHover="true" :paginator="false" :rows="30" stripedRows scrollable scrollHeight="62vh" tableStyle="min-width: 50rem" :rowsPerPageOptions="[5, 10, 20, 50]">
            <template #empty><p class="text-center">No Data found.</p></template>
            <template #loading> Loading. Please wait... </template>
            <Column style="width: 12%" field="user_name" header="Name" />
            <Column style="width: 12%" field="date" header="Date" />
            <Column style="width: 12%" field="day" header="Day" />
            <Column style="width: 12%" field="start_time" header="IN" />
            <Column style="width: 12%" field="end_time" header="OUT" />
            <Column style="width: 12%" field="type" header="Type" />
            <Column style="width: 12%" field="status" header="Status">
                <template #body="slotProps">
                    <div>
                        <span :style="`color:${statusColor[slotProps.data.status.toLowerCase()]}; text-transform:capitalize`">{{ slotProps.data.status }}</span>
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
