<script setup>
import accessPermission from '~/composables/usePermission';

const readQuarter = ref(accessPermission('read_quater'));
const createQuarter = ref(accessPermission('create_quater'));
const updateQuarter = ref(accessPermission('update_quater'));
const deleteQuarter = ref(accessPermission('delete_quater'));

const url = useRuntimeConfig();
const toast = useToast();
const quaterList = ref([]);
const editingRows = ref([]);
const modal = ref(false);
// Create Data
const quarterCreate = ref({
    name: '',
    start_date: '',
    end_date: '',
    year: ''
});
const errorMsg = ref('');
const init = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/list`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        quaterList.value = data.value.data;
    }
};
const formatDate = (data) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};
const onRowEditSave = async (event) => {
    console.log(event.newData);
    const updateData = new FormData();
    console.log(event.newData);
    updateData.append('name', event.newData.name);
    if (typeof event.newData.year == 'string') {
        updateData.append('year', `${event.newData.year}-01-01`);
    } else {
        updateData.append('year', formatDate(event.newData.year));
    }

    if (typeof event.newData.start_date == 'string') {
        updateData.append('start_date', `2024-${event.newData.start_date}`);
    } else {
        updateData.append('start_date', formatDate(event.newData.start_date));
    }

    if (typeof event.newData.end_date == 'string') {
        updateData.append('end_date', `2024-${event.newData.end_date}`);
    } else {
        updateData.append('end_date', formatDate(event.newData.end_date));
    }
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/update/${event.newData.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: updateData
    });
    if (data) {
        init();
        return toast.add({ severity: 'success', summary: 'Updated', detail: 'Successfully updated', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to update', group: 'br', life: 3000 });
    }
    // let { newData, index } = event;
    // this.products[index] = newData;
};

const onDelete = async (item) => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/delete/${item.id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        init();
        return toast.add({ severity: 'success', summary: 'Deleted', detail: 'Successfully deleted', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to delete', group: 'br', life: 3000 });
    }
};

const closeCreateModal = (event) => {
    console.log(event);
};
const handleKpiCreation = async () => {
    console.log(Object.keys(quarterCreate.value));
    console.log(quarterCreate.value);
    const formData = new FormData();
    if (quarterCreate.value.name != '') {
        formData.append('name', quarterCreate.value.name);
    } else {
        errorMsg.value = 'Please fill the required fields';
        return;
    }
    if (quarterCreate.value.start_date != '') {
        formData.append('start_date', formatDate(quarterCreate.value.start_date));
    } else {
        errorMsg.value = 'Please fill the required fields';
        return;
    }
    if (quarterCreate.value.end_date != '') {
        formData.append('end_date', formatDate(quarterCreate.value.end_date));
    } else {
        errorMsg.value = 'Please fill the required fields';
        return;
    }
    if (quarterCreate.value.year != '') {
        formData.append('year', formatDate(quarterCreate.value.year));
    } else {
        errorMsg.value = 'Please fill the required fields';
        return;
    }
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });
    if (data) {
        init();
        modal.value = false;
        quarterCreate.value = {
            name: '',
            start_date: '',
            end_date: '',
            year: ''
        };
        errorMsg.value = null;
        return toast.add({ severity: 'success', summary: 'Updated', detail: 'Successfully Created', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to update', group: 'br', life: 3000 });
    }
};

onMounted(() => {
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
            
                data: [540, 325],
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
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
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
    init();
});
</script>
<template>
    <TabView @tabChange="onTabChange" class="mt-3">
        <TabPanel header="Dashboard">
            <div v-if="readQuarter" class="grid">
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
            <Dialog v-model:visible="modal" modal header="Create Quarter" dismissableMask="true" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
                <form class="" action="" @submit.prevent="handleKpiCreation">
                    <div class="card">
                        <div class="kpi-form grid">
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Quarter Name:</label>
                                    <InputText type="text" v-model="quarterCreate.name" placeholder="Name" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Start Date:</label>
                                    <Calendar v-model="quarterCreate.start_date" dateFormat="mm-dd" fluid :manualInputs="false" class="w-full" required placeholder="MM-DD" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">End Date:</label>
                                    <Calendar v-model="quarterCreate.end_date" dateFormat="mm-dd" fluid :manualInputs="false" class="w-full" required placeholder="MM-DD" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Year:</label>
                                    <Calendar v-model="quarterCreate.year" view="year" dateFormat="yy" fluid :manualInputs="false" class="w-full" placeholder="YYYY" />
                                </div>
                            </div>
                            <p class="text-center w-full text-red-500">{{ errorMsg }}</p>
                            <div class="col-12 mx-auto flex justify-content-center">
                                <Button label="Create" severity="info" type="submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </TabPanel>
        <TabPanel header="Report">
            <div class="card">
                <div class="d-flex mr-2">
                    <h5 class="mb-1">Report</h5>
                </div>
                <Toolbar class="border-0 px-0">
                    <template #start>
                        <div class="flex gap-2">
                            <div class="flex-auto">
                                <!-- <pre>{{selectedProject.id}}</pre> -->
                                <label for="icondisplay" class="font-bold block mb-2">Employee: </label>
                                <Dropdown @change="filterTasks()" class="select-emp" v-model="employee" :options="employees"
                                optionLabel="name" placeholder="Select Employee" />
                            </div>
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2">Start Date: </label>
                                <Calendar v-model="startDate" @date-select="handleChange('startDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2"> End Date: </label>
                                <Calendar v-model="endDate" @date-select="handleChange('endtDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                        </div>
                    </template>
        
                    <template #end>
                        <Button @click="handleGenerate" class="w-full" label="Generate" :loading="loading" />
                    </template>
                </Toolbar>
            </div>
            <div v-if="previewData" class="card">
                <div>
                    <div class="flex align-items-center justify-content-between gap-2 mb-5">
                        <h5 class="m-0">Preview</h5>
                        <Button @click="handleReportDownload" class="w-fit" label="Download" :loading="loading1" />
                    </div>
                    <DataTable :value="previewData" tableStyle="min-width: 50rem">
                        <template #empty> <p class="text-center">No Data found...</p> </template>
                        <Column field="date" header="Date"></Column>
                        <Column field="scrum_meeting" header="Stand-up Meeting Attendance"></Column>
                        <Column field="bounce" header="Number of Bounces"></Column>
                        <Column field="update" header="Task Update Compliance"></Column>
                        <Column field="commit" header="Code Commit"></Column>
                        <Column field="projects" header="No. of Projects Worked"></Column>
                        <Column field="pull_request" header="Pull Request"></Column>
                        <Column field="bug" header="Bug Discovered"></Column>
                        <Column field="build_failed" header="Build Failed"></Column>
                        <Column field="completed" header="Timely Delivery"></Column>
                        <Column field="overdue" header="Missed Delivery"></Column>
                    </DataTable>
                </div>
            </div>
        </TabPanel>
    </TabView>

</template>
<style scoped>
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
</style>
