<script setup>
import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
import RadioButton from 'primevue/radiobutton';

const { totalProjectsforReport, totalSpaces } = storeToRefs(useActiveCompanyStore());

const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const startDate = ref('');

const endDate = ref('');
const selectedSpaces = ref();
const projectList = ref([]);
const selectedProjects = ref();
const previewData = ref(null);
const previewProjectWiseCount = ref(null);
const previewSprintTask = ref(null);
const loading = ref(false);
const loading1 = ref(false);
const toast = useToast();

onMounted(() => {
    if (!selectedSpaces.value || selectedSpaces.value.length === 0) {
        // Make sure the totalProjectsforReport has data before assigning
        if (totalProjectsforReport.value && totalProjectsforReport.value.length > 0) {
            projectList.value = [...totalProjectsforReport.value]; // Use spread to ensure reactivity
        } else {
            projectList.value = [];
        }
    }
});

watch(selectedSpaces, (newVal) => {
    if (newVal && newVal.length > 0) {
        // Concatenate all projects from selectedSpaces
        const concatenatedProjects = newVal.flatMap((space) => space.projects);
        projectList.value = concatenatedProjects;
    } else {
        // Reset projectList to totalProjectsforReport if no spaces are selected
        if (totalProjectsforReport.value && totalProjectsforReport.value.length > 0) {
            projectList.value = [...totalProjectsforReport.value]; // Ensure reactivity by using spread operator
        } else {
            projectList.value = [];
        }
    }
});

// Date Formatter
const dateFormatter = (data) => {
    const dateStr = data;
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const handleGenerate = async () => {
    if ((startDate.value && !endDate.value) || (!startDate.value && endDate.value)) {
        loading.value = false;
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Both Dates', group: 'br', life: 3000 });
    }
    const token = useCookie('token');
    loading.value = true;
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);
    let spaceIds;
    if (selectedSpaces.value && selectedSpaces.value.length > 0) {
        spaceIds = selectedSpaces.value?.map((item) => item.id);
        console.log('Space ID', spaceIds);
    }

    let projectIds;
    // Only append project IDs if there are valid projects selected
    if (selectedProjects.value && selectedProjects.value.length > 0) {
        projectIds = selectedProjects.value?.map((item) => item.id);
        console.log('Project ID', projectIds);
        // formData.append('project_id', projectIds);
        // if (projectIds.length > 0) {
        //     projectIds.forEach((id) => {
        //         formData.append('project_id[]', id);
        //     });
        // }
    }

    // if (startDate.value && endDate.value) {
    //     formData.append('start_date', formattedStartDate);
    //     formData.append('end_date', formattedEndDate);
    // }

    const { data, error } = await useFetch(
        `${url.public.apiUrl}/project-report/view?space_ids=${spaceIds ? spaceIds : ''}&project_ids=${projectIds ? projectIds : ''}&start_date=${startDate.value ? formattedStartDate : ''}&end_date=${endDate.value ? formattedEndDate : ''}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        }
    );

    if (data.value?.code == 200) {
        previewData.value = data.value.data?.overView.map((item, index) => ({ ...item, index: index + 1 }));
        previewProjectWiseCount.value = data.value.data?.projectWiseCount.map((item, index) => ({ ...item, index: index + 1 }));
        previewSprintTask.value = data.value.data?.sprintTask.map((item, index) => ({ ...item, index: index + 1 }));
        return (loading.value = false);
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to generate!', group: 'br', life: 3000 });
    }
};
const handleReportDownload = async () => {
    const token = useCookie('token');
    loading1.value = true;
    if ((startDate.value && !endDate.value) || (!startDate.value && endDate.value)) {
        loading.value = false;
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Both Dates', group: 'br', life: 3000 });
    }
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);
    let spaceIds;
    if (selectedSpaces.value && selectedSpaces.value.length > 0) {
        spaceIds = selectedSpaces.value?.map((item) => item.id);
        console.log('Space ID', spaceIds);
    }

    let projectIds;
    // Only append project IDs if there are valid projects selected
    if (selectedProjects.value && selectedProjects.value.length > 0) {
        projectIds = selectedProjects.value?.map((item) => item.id);
        console.log('Project ID', projectIds);
        // formData.append('project_id', projectIds);
        // if (projectIds.length > 0) {
        //     projectIds.forEach((id) => {
        //         formData.append('project_id[]', id);
        //     });
        // }
    }

    const { data, error } = await useFetch(
        `${url.public.apiUrl}/project-report/download?space_ids=${spaceIds ? spaceIds : ''}&project_ids=${projectIds ? projectIds : ''}&start_date=${startDate.value ? formattedStartDate : ''}&end_date=${endDate.value ? formattedEndDate : ''}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        }
    );
    if (error.value) {
        console.log(error);
        return (loading1.value = false);
    }
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
        return (loading1.value = false);
    } else {
        loading1.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', group: 'br', life: 3000 });
    }
};

const handleChange = (field, event) => {
    const date = new Date(event);
    if (field == 'startDate') {
        startDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    } else {
        endDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
};

const formattedDuration = (duration) => {
    let timeTracked = duration;
    const hours = Math.floor(timeTracked / 3600);
    const minutes = Math.floor((timeTracked % 3600) / 60);
    const seconds = timeTracked % 60;

    if (hours > 0) {
        timeTracked = `${hours} hr ${minutes} min ${seconds} sec`;
    } else if (minutes > 0) {
        timeTracked = `${minutes} min ${seconds} sec`;
    } else {
        timeTracked = `${seconds} sec`;
    }
};

const handleReset = () => {
    startDate.value = '';
    endDate.value = '';
    selectedSpaces.value = [];
    selectedProjects.value = [];
    previewData.value = null;
    previewProjectWiseCount.value = null;
    previewSprintTask.value = null;
};
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">Project Reports</h5>
        </div>

        <!-- kpi tabs -->

        <TabView @tabChange="onTabChange" class="mt-3">
            <TabPanel class="file-upload" header="Project Report">
                <div class="card">
                    <!-- <pre>{{ usersListStore }}</pre> -->
                    <Toast position="bottom-right" group="br" />
                    <div class="d-flex mr-2">
                        <h5 class="mb-1">Task Reports</h5>
                    </div>
                    <Toolbar class="border-0 px-0">
                        <template #start>
                            <!-- <pre>{{totalProjectsforReport}}</pre>
                            <pre>{{selectedSpaces}}</pre> -->
                            <div class="flex gap-2 flex-wrap align-items-center">
                                <div class="user-selection w-full md:w-14rem w-full">
                                    <label class="font-bold block mb-2">Spaces:</label>
                                    <div class="flex justify-content-center">
                                        <MultiSelect display="chip" v-model="selectedSpaces" :options="totalSpaces" filter resetFilterOnHide optionLabel="name" placeholder="Select Spaces" class="w-full" />
                                    </div>
                                </div>
                                <div class="user-selection w-full md:w-14rem w-full">
                                    <label class="font-bold block mb-2">Projects:</label>
                                    <div class="flex justify-content-center">
                                        <MultiSelect display="chip" v-model="selectedProjects" :options="projectList" filter resetFilterOnHide optionLabel="name" placeholder="Select Projects" class="w-full" />
                                    </div>
                                </div>
                                <div class="flex-auto">
                                    <label for="icondisplay" class="font-bold block mb-2">From: </label>
                                    <Calendar v-model="startDate" showIcon iconDisplay="input" inputId="icondisplay" />
                                </div>
                                <div class="flex-auto">
                                    <label for="icondisplay" class="font-bold block mb-2">To: </label>
                                    <Calendar v-model="endDate" showIcon iconDisplay="input" inputId="icondisplay" />
                                </div>
                            </div>
                        </template>

                        <template #end>
                            <Button @click="handleReset" label="Reset" class="mr-2" />
                            <Button @click="handleGenerate" class="" label="Generate" :loading="loading" />
                        </template>
                    </Toolbar>
                </div>
                <div v-if="previewData || previewProjectWiseCount || previewSprintTask" class="card">
                    <div class="flex align-items-center justify-content-between gap-2 mb-5">
                        <h5 class="m-0" style="visibility: hidden">Overview</h5>
                        <Button @click="handleReportDownload" class="w-fit" label="Download" :loading="loading1" />
                    </div>
                    <div class="card">
                        <div class="flex align-items-center justify-content-between gap-2 mb-5">
                            <h5 class="m-0">Overview</h5>
                        </div>
                        <DataTable v-if="previewData" :value="previewData" tableStyle="min-width: 50rem">
                            <template #empty>
                                <p class="text-center">No Data found...</p>
                            </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column field="unit_name" header="Unit Name"></Column>
                            <Column field="total_iteration" header="Total Number of Iteration"></Column>
                            <Column field="total_missed_deadline" header="No. of Missed Deadlines"></Column>

                            <Column field="missed_deadline_percentage" header="% of Missed Deadlines"></Column>
                        </DataTable>
                    </div>
                    <br />
                    <div class="card">
                        <div class="flex align-items-center justify-content-between gap-2 mb-5">
                            <h5 class="m-0">Project Wise Count</h5>
                        </div>
                        <DataTable v-if="previewProjectWiseCount" :value="previewProjectWiseCount" tableStyle="min-width: 50rem">
                            <template #empty>
                                <p class="text-center">No Data found...</p>
                            </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column field="project_name" header="Project Name"></Column>
                            <Column field="unit_name" header="Unit Name"></Column>
                            <Column field="total_iteration" header="No. of Iteration"></Column>
                            <Column field="total_missed_deadline" header="No.of Missed Deadlines"></Column>
                        </DataTable>
                    </div>
                    <br />
                    <div class="card">
                        <div class="flex align-items-center justify-content-between gap-2 mb-5">
                            <h5 class="m-0">Sprint</h5>
                        </div>
                        <DataTable v-if="previewSprintTask" :value="previewSprintTask" tableStyle="min-width: 50rem">
                            <template #empty>
                                <p class="text-center">No Data found...</p>
                            </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column field="task_name" style="width: 40%" header="Task Name"></Column>
                            <Column field="project_name" header="Project Name"></Column>
                            <Column field="status" header="Status"></Column>
                            <Column field="due_date" header="Due Date"></Column>
                            <Column field="end_date" header="End Date"></Column>
                            <Column field="duration" header="Duration">
                         
                            </Column>
                            <Column field="unit_name" header="Unit Name"></Column>
                            <Column field="missed_deadline" header="Missed Deadlines"></Column>
                        </DataTable>
                    </div>
                </div>
            </TabPanel>
            <!-- <TabPanel header="Specific Monthly Summary">
                
            </TabPanel> -->
            <!-- <TabPanel header="Executive Summary">
                <Toolbar class="border-0 px-0">
                  
                </Toolbar>
            </TabPanel> -->
        </TabView>
    </div>
</template>

<style scoped>
.kpi-form {
    max-width: 60rem;
    margin: auto;
    border: 1px solid #ededed;
    border-radius: 10px;
    padding: 2rem;
}
.user-selection {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.close {
    position: absolute;
    top: 8px;
    right: 3px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: red;
}
</style>
