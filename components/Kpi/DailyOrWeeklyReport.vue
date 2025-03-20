<script setup>
import accessPermission from '~/composables/usePermission';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

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
    const { data, pending, error } = await useAsyncData('userLiist', () =>
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

    endOfWeek.setDate(today.getDate() + (6 - dayOfWeek));
    endOfWeek.setHours(23, 59, 59, 999);

    return [startOfWeek.toISOString(), endOfWeek.toISOString()];
};
week.value = getCurrentWeekRange();

const currentDate = ref(new Date().toISOString().split('T')[0]);
const startDate = ref('');
const endDate = ref('');
if (type === 'daily') {
    startDate.value = currentDate.value;
    endDate.value = currentDate.value;
} else {
    startDate.value = week.value[0].split('T')[0];
    endDate.value = week.value[1].split('T')[0];
}

const overAllData = ref(null);
const getKpiData = async () => {
    const token = useCookie('token');
    const formattedStartDate = `${startDate.value} 00:00:00`;
    const formattedEndDate = `${endDate.value} 23:59:59`;

    const userId = userNameAndId.value?.id;
    console.log('User ID =>', userNameAndId.value);

    const apiUrl = `${url.public.apiUrl}/kpi/dashboard?start_date=${formattedStartDate}&end_date=${formattedEndDate}${userId ? `&user_id=${userId}` : ''}`;

    const { data, pending, error } = await useAsyncData('getKpiData', () =>
        $fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );

    if (data.value?.data?.length > 0) {
        overAllData.value = data.value.overAllData;
    }
};

watch([userNameAndId, currentDate, week], async () => {
    await getKpiData();
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    vBarChartData.value = setVBarChartData();
    vBarChartOptions.value = setVBarChartOptions();
});


onMounted(async () => {
    await getUserData();
    await getUsers();
    await getKpiData();
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

    vBarChartData.value = setVBarChartData();
    vBarChartOptions.value = setVBarChartOptions();
});

const vBarChartData = ref();
const vBarChartOptions = ref();

const setVBarChartData = () => {
    return {
        labels: ['Task Completed', 'Bugs Discovered'],
        datasets: [
            {
                data: [overAllData.value?.completeTaskCount, overAllData.value?.bugDiscovered],
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
                data: [overAllData.value?.timlyDelivary, overAllData.value?.missDelivary],
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

onMounted(() => {
    // init();
});
</script>
<template>
    <div class="grid">
        <div class="col-12 flex justify-content-end align-items-end gap-2">
            <div class=" ">
                <label for="icondisplay" class="font-bold block mb-2">Employee: </label>
                <Dropdown @change="filterTasks()" class="select-emp" v-model="userNameAndId" :options="usersLists" optionLabel="name" placeholder="Select Employee" />
            </div>
            <div class="">
                <label for="icondisplay" class="font-bold block mb-2">
                    <!-- week value {{ week }} -->
                    {{ type === 'daily' ? 'Date:' : type === 'weekly' ? 'Week:' : 'Date:' }}
                </label>
                <Calendar v-if="type === 'daily'" v-model="currentDate" @date-select="handleChange('currentDate', $event)" weekLabel showIcon iconDisplay="input" inputId="icondisplay" />
                <VueDatePicker v-if="type === 'weekly'" v-model="week" clearValue week-picker />
            </div>

            <div>
                <Button class="w-full" label="Download" />
            </div>
        </div>
        <!-- <pre>{{overAllData}}</pre> -->
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
</style>
