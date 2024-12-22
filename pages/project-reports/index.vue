<script setup>
import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
import RadioButton from 'primevue/radiobutton';

const { totalProjects } = storeToRefs(useActiveCompanyStore());

const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const startDate = ref('');

const endDate = ref('');
const selectedProject = ref();
const previewData = ref(null);
const loading = ref(false);
const loading1 = ref(false);
const toast = useToast();

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
    const formData = new FormData();
    // formData.append('user_id[]', userIds);

    // Only append project IDs if there are valid projects selected
    if (selectedProject.value && selectedProject.value.length > 0) {
        const projectIds = selectedProject.value?.map((item) => item.id);
        console.log('Project ID', projectIds);
        formData.append('project_id', projectIds);
        // if (projectIds.length > 0) {
        //     projectIds.forEach((id) => {
        //         formData.append('project_id[]', id);
        //     });
        // }
    }

    if (startDate.value && endDate.value) {
        formData.append('start_date', formattedStartDate);
        formData.append('end_date', formattedEndDate);
    }

    const { data, error } = await useFetch(`${url.public.apiUrl}/projects/report-view`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    }); 

    if (data.value?.code == 200) {
        previewData.value = data.value.data.map((item, index) => ({ ...item, index: index + 1 }));
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
    const formData = new FormData();

    if (selectedProject.value && selectedProject.value.length > 0) {
        const projectIds = selectedProject.value?.map((item) => item.id);
        console.log('Project ID', projectIds);
        if (projectIds.length > 0) {
            projectIds.forEach((id) => {
                formData.append('project_id[]', id);
            });
        }
    }

    if (startDate.value && endDate.value) {
        formData.append('start_due_date', formattedStartDate);
        formData.append('end_due_date', formattedEndDate);
    }

    const { data, error } = await useFetch(`${url.public.apiUrl}/project-wise-task-report-download`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });
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
                        <!-- <pre>
                            sp =>{{  selectedProject?.length }}
                        
                        </pre> -->
                    </div>
                    <Toolbar class="border-0 px-0">
                        <template #start>
                            <div class="flex gap-2 flex-wrap align-items-center">
                                <div class="user-selection w-full md:w-14rem w-full">
                                    <label class="font-bold block mb-2">Project:</label>
                                    <div class="flex justify-content-center">
                                        <MultiSelect display="chip" v-model="selectedProject" :options="totalProjects" filter resetFilterOnHide optionLabel="name" placeholder="Select Project" class="w-full" />
                                    </div>
                                </div>
                                <div class="flex-auto">
                                    <label for="icondisplay" class="font-bold block mb-2">From: </label>
                                    <Calendar v-model="startDate" @date-select="handleChange('startDate', $event)" clearButton="true" showIcon iconDisplay="input" inputId="icondisplay" />
                                </div>
                                <div class="flex-auto">
                                    <label for="icondisplay" class="font-bold block mb-2">To: </label>
                                    <Calendar v-model="endDate" @date-select="handleChange('endtDate', $event)" clearButton showIcon iconDisplay="input" inputId="icondisplay" />
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
                            <template #empty>
                                <p class="text-center">No Data found...</p>
                            </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column field="task_name" style="width: 40%" header="Task Name"></Column>
                            <Column field="project_name" header="Project Name"></Column>
                            <Column field="task_status" header="Status">
                                <!-- <template #body="slotProps">
                                <div v-for="(assignee, index) in slotProps.data.assignee_name">
                                  {{ assignee.name }}<span class="font-bold" v-if="index < slotProps.data.assignee_name.length - 1">, </span>
                                </div>
                              </template> -->
                            </Column>
                            <Column field="task_due_date" header="Due Date"></Column>
                            <Column field="task_date_done" header="Date Done"></Column>
                            <Column field="duration" header="Duration"></Column>
                            <Column field="unit" header="Unit"></Column>
                            <Column field="overdue" header="Missed Deadlines"></Column>
                            <!-- <Column field="bounce" header="Bounce"></Column> -->
                        </DataTable>
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Specific Monthly Summary">
                
            </TabPanel>
            <TabPanel header="Executive Summary">
                <Toolbar class="border-0 px-0">
                  
                </Toolbar>
            </TabPanel>
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
