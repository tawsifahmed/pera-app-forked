<script setup>
import accessPermission from '~/composables/usePermission';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const weekly_kpi_view = accessPermission('weekly_kpi_view');
const { type } = defineProps(['type']);
const url = useRuntimeConfig();
const toast = useToast();

const userNameAndId = ref(null);
async function getUserData() {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('use', () =>
        $fetch(`${url.public.apiUrl}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );

    userNameAndId.value = {
        name: data?.value?.data?.name,
        id: data?.value?.data?.id
    };
}

const usersLists = ref([]);
const getUsers = async (userTypes) => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData(`userLiist${type}`, () =>
        $fetch(`${url.public.apiUrl}/users/list${userTypes ? `?role_id=${userTypes}` : ''}`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        usersLists.value = data.value?.data.map((e) => ({ name: e.name, id: e.id }));
    }
};

const week = ref([]);
const getCurrentWeekRange = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    startOfWeek.setDate(today.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);

    endOfWeek.setDate(today.getDate() + (5 - dayOfWeek));
    endOfWeek.setHours(23, 59, 59, 999);

    return [startOfWeek.toISOString(), endOfWeek.toISOString()];
};

week.value = getCurrentWeekRange();

const currentDate = ref(new Date().toISOString().split('T')[0]);
const startDate = ref('');
const endDate = ref('');

const handleDateChange = async () => {
    if (type === 'daily') {
        startDate.value = currentDate.value;
        endDate.value = currentDate.value;
    } else if (type === 'weekly') {
        if (week.value.length === 2) {
            const start = new Date(week.value[0]); 
            let end = new Date(week.value[1]); 

            startDate.value = start.toISOString().split('T')[0]; 

            const dayOfEnd = end.getDay();
            if (dayOfEnd !== 5) {
                end.setDate(end.getDate() - (dayOfEnd - 5));
            }

            endDate.value = end.toISOString().split('T')[0];
        }
    }
};

const formatDate = (date, time) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day} ${time}`;
};

const overAllData = ref(null);
const previewData = ref([]);
const attendanceData =ref({});

const getKpiData = async () => {
    const token = useCookie('token');
    const formattedStartDate = formatDate(startDate.value, '00:00:00');
    const formattedEndDate = formatDate(endDate.value, '23:59:59');
    const userId = userNameAndId.value?.id;

    console.log('User ID =>', userNameAndId.value);

    let apiUrl = `${url.public.apiUrl}/kpi/dashboard?start_date=${formattedStartDate}&end_date=${formattedEndDate}${userId ? `&user_id=${userId}` : ''}`;
    apiUrl = decodeURIComponent(apiUrl);

    let asyncDataKey = 'getKpiData';

    if (type === 'daily') {
        asyncDataKey = 'getDailyKpiData';
    } else if (type === 'weekly') {
        asyncDataKey = 'getWeeklyKpiData';
    }

    const { data, pending, error } = await useAsyncData(asyncDataKey, () =>
        $fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );

    if (data.value?.data?.length > 0) {
        attendanceData.value = data.value?.attendanceData;
        overAllData.value = data.value?.overAllData;
        previewData.value = data.value?.data;
    }
};

const loading1 = ref(false);
const downloadKpiReport = async () => {
    loading1.value = true;
    const token = useCookie('token');
    const formattedStartDate = formatDate(startDate.value, '00:00:00');
    const formattedEndDate = formatDate(endDate.value, '23:59:59');
    const userId = userNameAndId.value?.id;

    let apiUrl = `${url.public.apiUrl}/kpi/dashboard-download?start_date=${formattedStartDate}&end_date=${formattedEndDate}${userId ? `&user_id=${userId}` : ''}`;
    apiUrl = decodeURIComponent(apiUrl);

    try {
        const { data, pending, error } = await useFetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (data.value) {
            const link = document.createElement('a');
            link.href = data.value.download_path;
            link.target = '_blank';
            link.click();
            loading1.value = false;
        }
    } catch (e) {
        console.error('Error downloading kpi report:', e);
        loading1.value = false;
    }
};

const isInitialized = ref(false);

watch([userNameAndId, currentDate, week], async () => {
    if (!isInitialized.value) return; // prevent watcher from running on mount
    tableLoader.value = true;
    await handleDateChange();
    await getKpiData();
    tableLoader.value = false;
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    vBarChartData.value = setVBarChartData();
    vBarChartOptions.value = setVBarChartOptions();
});
const tableLoader = ref(true);
onMounted(async () => {
    await handleDateChange();
    await getUserData();
    await getUsers();
    await getKpiData();
    tableLoader.value = false;
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    vBarChartData.value = setVBarChartData();
    vBarChartOptions.value = setVBarChartOptions();

    isInitialized.value = true; // set initialization complete
});

const vBarChartData = ref();
const vBarChartOptions = ref();

const setVBarChartData = () => {
    return {
        labels: ['Task Completed', 'Bugs Discovered'],
        datasets: [
            {
                data: [overAllData.value?.completeTaskCount ? overAllData.value?.completeTaskCount : 0, overAllData.value?.bugDiscovered ? overAllData.value?.bugDiscovered : 0],
                backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};

const setVBarChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
};

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['No. of Timely Deliver', 'No. of Missed Deadline'],
        datasets: [
            {
                data: [overAllData.value?.timlyDelivary ? overAllData.value?.timlyDelivary : 0, overAllData.value?.missDelivary ? overAllData.value?.missDelivary : 0],
                backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};

const tableModal = ref(false);
const modalData = ref(null);
const modalTitle = ref('');
const showModal = (data, title) => {
    if (data.length > 0) {
        console.log('data', data);
        modalData.value = data;
        modalTitle.value = title;
        tableModal.value = true;
    }
};

const handleRedirect = async (data) => {
    let url;
    if (modalTitle.value === 'Task Update Compliance') {
        url = `/companies/${data?.company_id}/spaces/${data?.space_id}/projects/${data?.project_id}?task_key=${data?.id}`;
    } else {
        url = `/companies/${data?.company_id}/spaces/${data?.space_id}/projects/${data?.id}`;
    }
    window.open(url, '_blank');
};
</script>
<template>
    <div class="grid">
        <!-- <pre>
            weekly_kpi_view {{ weekly_kpi_view }}
            week value {{ week }}
            start date {{ startDate }}
            end date {{ endDate }}
        </pre> -->
        <div class="col-12 flex justify-content-between align-items-center">
            <div>
                <div v-if="type === 'weekly'" class="flex gap-2 flex-wrap dash-inf-right">
                    <Button class="nwrp" :label="`Absent: ${attendanceData?.absent}`" severity="info" outlined />
                    <Button class="nwrp" :label="`Late: ${attendanceData?.late}`" severity="help" outlined />
                    <Button class="nwrp" :label="`Present: ${attendanceData?.present}`" severity="contrast" outlined />
                </div>
            </div>
            <div class="flex justify-content-end align-items-end gap-2">
                <div class=" ">
                    <label for="icondisplay" class="font-bold block mb-2">Employee: </label>
                    <Dropdown :disabled="!weekly_kpi_view " @change="filterTasks()" class="select-emp" v-model="userNameAndId" :options="usersLists" optionLabel="name" placeholder="Select Employee" />
                </div>
                <div class="">
                    <label for="icondisplay" class="font-bold block mb-2">
                        <!-- week value {{ week }} -->
                        {{ type === 'daily' ? 'Date:' : type === 'weekly' ? 'Week:' : 'Date:' }}
                    </label>
                    <Calendar v-if="type === 'daily'" v-model="currentDate" @date-select="handleChange('currentDate', $event)" weekLabel showIcon iconDisplay="input" inputId="icondisplay" />
                    <VueDatePicker v-if="type === 'weekly'" v-model="week" week-start="0" week-picker />
                </div>    
                <div>
                    <Button @click="downloadKpiReport" class="w-full" label="Download" :loading="loading1" />
                </div>
            </div>
        </div>
        <!-- <pre>{{overAllData}}</pre> -->
        <div class="col-12 card p-0 mt-2 mb-2" style="overflow: hidden">
            <div>
                <DataTable :value="previewData" tableStyle="min-width: 50rem" :loading="tableLoader">
                    <template #empty> <p class="text-center">No Data found...</p> </template>
                    <Column style="text-wrap: nowrap" field="date" header="Date"></Column>
                    <Column field="standUpMeetingAttendance" header="Stand-up Meeting Attendance"></Column>
                    <Column field="bounceCount" header="No. of Bounces"></Column>
                    <Column field="tasks" header="Task Update Compliance">
                        <template #body="slotProps">
                            <span @click="showModal(slotProps?.data?.tasks, 'Task Update Compliance')" class="cursor-pointer hover:text-primary font-semibold">{{ slotProps?.data?.tasks?.length }}</span>
                        </template>
                    </Column>
                    <Column field="codeCommit" header="Code Commit"></Column>
                    <Column field="projects" header="No. of Projects Worked">
                        <template #body="slotProps">
                            <span @click="showModal(slotProps?.data?.projects, 'No. of Projects Worked')" class="cursor-pointer hover:text-primary font-semibold">{{ slotProps?.data?.projects?.length }}</span>
                        </template>
                    </Column>
                    <Column field="pullRequest" header="Pull Request"></Column>
                    <Column field="bugDiscovered" header="Bug Discovered"></Column>
                    <Column field="buildFaild" header="Build Failed"></Column>
                    <Column field="timlyDelivary" header="Timely Delivery"></Column>
                    <Column field="missDelivary" header="Missed Delivery"></Column>
                </DataTable>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card h-full">
                <h5>Task Completed Vs. Bugs Discovered</h5>
                <div class="">
                    <Chart type="bar" :data="vBarChartData" :options="vBarChartOptions" class="h-30rem" />
                </div>

                <!-- <Chart type="pie" :data="pieData" :options="pieOptions" /> -->
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card h-full">
                <h5>Deliverable Status</h5>
                <div class="w-full flex justify-content-center">
                    <Chart type="doughnut" :data="chartData" :options="chartDataOptions" class="w-full md:w-30rem" />
                </div>

                <!-- <Chart type="pie" :data="pieData" :options="pieOptions" /> -->
            </div>
        </div>
        <Dialog v-model:visible="tableModal" modal :header="modalTitle" dismissableMask="true" :style="{ width: '60rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
            <!-- <pre>
                            {{ modalData }}
             </pre> -->
            <div v-for="(value, key) in modalData" :key="value">
                <div @click="handleRedirect(value)" class="card mb-2 cursor-pointer t-card" style="padding: 0.5rem 0.6rem">
                    <div>
                        <p class="mb-0" v-if="modalTitle === 'Task Update Compliance'"><span class="font-bold">Task Name:</span> {{ value?.name }}</p>
                        <p class="mb-0" v-else><span class="font-bold">Project:</span> {{ value?.name }}</p>
                        <p class="mb-0" v-if="value?.project_name"><span class="font-bold">Project:</span> {{ value?.project_name }}</p>
                        <p class="mb-0"><span class="font-bold">Space:</span> {{ value?.space_name }}</p>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>
<style>
.editButtonPosition {
    display: flex;
    justify-content: flex-end;
    align-items: end;
}
.headerPosition {
    display: flex;
    justify-content: flex-end;
    align-items: end;
}

.dp--clear-btn {
    display: none !important;
}

.t-card:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}
</style>
