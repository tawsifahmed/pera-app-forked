<script setup>
const { employees, quater } = defineProps(['employees', 'quater']);
const employee = ref('');
const selectedQuarter = ref('');
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">KPI Report</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <div class="flex gap-2 flex-wrap">
                    <div class="user-selection w-full md:w-14rem w-full">
                        <label class="font-bold block mb-2">Employee:</label>
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
                <Column field="task_name" header="Task"></Column>
                <Column field="project_name" header="Project"></Column>
                <Column field="assignee_name" header="Assignee"></Column>
                <Column field="task_status" header="Status"></Column>
                <Column field="task_due_date" header="Due Date"></Column>
                <Column field="task_date_done" header="Completed Date"></Column>
                <Column field="formatted_time_tracked" header="Time Track"></Column>
                <Column field="overdue" header="Over Due"></Column>
                <Column field="bounce" header="Bounce"></Column>
            </DataTable>
        </div>
    </div>
</template>
