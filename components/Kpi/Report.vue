<script setup>
const url = useRuntimeConfig();
const toast = useToast();

const { employees, quater } = defineProps(['employees', 'quater']);
const loading = ref(false);
const loading1 = ref(false);
const employee = ref('');
const selectedQuarter = ref('');


const previewKpiReportData = ref(null);

const handleKpiReportGenerate = async () => {
    if (employee.value == '' || selectedQuarter.value == '') {
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Employee Date and Quarter', group: 'br', life: 3000 });
    }
    const token = useCookie('token');
    loading.value = true;

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/show/${employee.value.id}?quater_id=${selectedQuarter.value.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    // if (error) {
    //     return (loading.value = false);
    // }
    if (data.value.code == 200) {
        previewKpiReportData.value = data.value;
        console.log('Report Value', data.value);
        return loading.value = false;
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to show report', group: 'br', life: 3000 });
    }
};

const handleReportDownload = async () => {
    const token = useCookie('token');
    loading1.value = true;

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/report-download/${employee.value.id}?quater_id=${selectedQuarter.value.id}`, {
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
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <!-- <div class="d-flex mr-2">
            <h5 class="mb-1">KPI Report</h5>
        </div> -->
        <Toolbar class="border-0 px-0">
            <template #start>
                <div class="flex gap-2 flex-wrap">
                    <div class="user-selection w-full md:w-14rem w-full">
                        <label class="font-bold block mb-2">Employee:</label>
                        <!-- <pre>{{employee.id}}</pre> -->
                        <div class="flex justify-content-center">
                            <Dropdown v-model="employee" :options="employees" optionLabel="name" placeholder="Select/Search User" class="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div class="user-selection w-full md:w-14rem w-full">
                        <label class="font-bold block mb-2">Quarter:</label>
                        <div class="flex justify-content-center">
                            <Dropdown v-model="selectedQuarter" :options="quater" optionLabel="name" placeholder="Select/Search User" class="w-full md:w-14rem" />
                        </div>
                    </div>
                </div>
            </template>

            <template #end>
                <Button @click="handleKpiReportGenerate" class="w-full" label="Generate" :loading="loading" />
            </template>
        </Toolbar>
    </div>
    <div v-if="previewKpiReportData" class="card">
       
        <!-- <pre>{{previewKpiReportData}}</pre> -->
        <div>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2 mb-5">
                <h5 class="m-0">Preview</h5>
                <Button @click="handleReportDownload" class="w-fit" label="Download" :loading="loading1" />
            </div>
            <div class="flex align-items-center justify-content-between my-4">
                <h6 class="m-0 font-bold">Name: {{previewKpiReportData?.user_name}}</h6>
                <h6 class="m-0 font-bold">Section: {{previewKpiReportData?.data[0]?.section.name}}</h6>
                <h6 class="m-0 font-bold">Achieved: {{previewKpiReportData?.overAllKpi}}</h6>
            </div>
            <DataTable :value="previewKpiReportData?.data[0]?.sub_section_data" tableStyle="min-width: 50rem">
                <template #empty> <p class="text-center">No Data found...</p> </template>
                <Column field="achive_mark" header="Sub Section">
                 <template #body="slotProps">
                    <div>{{slotProps?.data?.sub_section.title}}</div>
                 </template>
                </Column>
                <Column field="achive_mark" header="Achieved Mark"></Column>
                <Column field="target_mark" header="Target Mark"></Column>
                <Column field="comment" header="Comment"></Column>
                <!-- <Column field="task_due_date" header="Due Date"></Column>
                <Column field="task_date_done" header="Completed Date"></Column>
                <Column field="formatted_time_tracked" header="Time Track"></Column>
                <Column field="overdue" header="Over Due"></Column>
                <Column field="bounce" header="Bounce"></Column> -->
            </DataTable>
        </div>
    </div>
</template>
