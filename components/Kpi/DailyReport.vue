<script setup>
import accessPermission from '~/composables/usePermission';
import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
const { companyList, totalProjects } = storeToRefs(useActiveCompanyStore());
const readTask = ref(accessPermission('read_task'));
const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const toast = useToast();

const startDate = ref('');
const endDate = ref('');
const loading = ref(false);
const loading1 = ref(false);
const previewData = ref(null);
const selectedProject = ref('');

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
    if(employee.value == '' || !employee.value){
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Employee', group: 'br', life: 3000 });
    }
    if ((startDate.value && !endDate.value) || (!startDate.value && endDate.value)) {
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Start Date and End Date', group: 'br', life: 3000 });
    }
    const token = useCookie('token');
    loading.value = true;
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi-tracking/daily-report-view?start_date=${startDate.value ? formattedStartDate : ''}&end_date=${endDate.value ? formattedEndDate : ''}&user_id=${employee.value ? employee.value.id : ''}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    // if (error) {
    //     return (loading.value = false);
    // }
    if (data.value.code == 200) {
        previewData.value = data.value.data;
        console.log('Report Value', data.value.data);
        return (loading.value = false);
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to generate!', group: 'br', life: 3000 });
    }
};
const handleReportDownload = async () => {
    const token = useCookie('token');
    loading1.value = true;
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi-tracking/daily-report-download?start_date=${startDate.value ? formattedStartDate : ''}&end_date=${endDate.value ? formattedEndDate : ''}&user_id=${employee.value ? employee.value.id : ''}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
        loading1.value = false;
        return;
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

const employees = ref([]);
const employee = ref('');
const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
        $fetch(`${url.public.apiUrl}/users/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        employees.value = data.value?.data.map((e) => ({ name: e.name, id: e.id }));
    }
};
onMounted(() => {
    init();
    console.log('call');
});
</script>
<template>
    <div class="card" v-if="readTask">
        <div class="d-flex mr-2">
            <h5 class="mb-1">Daily KPI Report</h5>
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
</template>

<style lang="scss" scoped>
.select-emp{
    max-width: 250px;
    min-width: 250px;
}

</style>
