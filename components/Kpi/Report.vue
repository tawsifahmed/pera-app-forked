<script setup>
import Dialog from 'primevue/dialog';

const url = useRuntimeConfig();
const toast = useToast();

const {  quater } = defineProps([ 'quater']);
const loading = ref(false);
const loading1 = ref(false);
const loading2 = ref(false);
const employee = ref('');
const selectedQuarter = ref('');
const feedbackModal = ref(false);
const employees = ref([]);
const lineMangaerFeedback = ref('');
const lineManagerAssessment = ref('');
const previewKpiReportData = ref(null);

const handleFdbckModal = () => {
    console.log('Modal');
    feedbackModal.value = true;
};

const init11 = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('getMembers', () =>
        $fetch(`${url.public.apiUrl}/teams/members?report=1`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    console.log('memmbess',data.value?.team_members);
    if(data.value?.team_members){
        employees.value = data.value?.team_members.map((member) => ({ id: member.id, name: member.name }));
        console.log('employee',employee.value);
    }
};

init11();

const handleKpiReportGenerate = async () => {
    if (employee.value == '' || selectedQuarter.value == '') {
        return toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please Select Employee and Quarter', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
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
        return (loading.value = false);
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

const feedbackSubmit = async () => {
    loading2.value = true;
    const token = useCookie('token');
    const feedbackData = new FormData();
    feedbackData.append('user_id', employee.value.id);
    feedbackData.append('quater_id', selectedQuarter.value.id);
    feedbackData.append('line_manager_feedback', lineMangaerFeedback.value);
    feedbackData.append('line_manager_assesment', lineManagerAssessment.value);
    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/line-manager-feedback`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: feedbackData
    });

    if (data.value) {
        loading2.value = false;
        feedbackModal.value = false;
        handleKpiReportGenerate();
        lineManagerAssessment.value = '';
        lineMangaerFeedback.value = '';
        return toast.add({ severity: 'success', summary: 'Success', detail: 'Feedback submitted successfully', group: 'br', life: 3000 });
    } else {
        loading2.value = false;
        // feedbackModal.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to submit feedback', group: 'br', life: 3000 });
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
                        <label class="font-bold block mb-2">Team Member:</label>
                        <!-- <pre>{{employee.id}}</pre> -->
                        <div class="flex justify-content-center">
                            <Dropdown v-model="employee" :options="employees" optionLabel="name" placeholder="Select Employee" class="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div class="user-selection w-full md:w-14rem w-full">
                        <label class="font-bold block mb-2">Quarter:</label>
                        <div class="flex justify-content-center">
                            <Dropdown v-model="selectedQuarter" :options="quater" optionLabel="name" placeholder="Select Quarter" class="w-full md:w-14rem" />
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
            <div class="flex flex-wrap align-items-top justify-content-between gap-2 mb-5">
                <div class="">
                    <table>
                        <tr class="font-bold">
                            <td>Name</td>
                            <td class="pl-2">: {{ previewKpiReportData?.user_name }}</td>
                        </tr>
                        <tr class="font-bold">
                            <td>Designation</td>
                            <td class="pl-2">: {{ previewKpiReportData?.designation }}</td>
                        </tr>
                        <!-- <tr class="font-bold">
                            <td>Department</td>
                            <td class="pl-2">: {{ previewKpiReportData?.user_name }}</td>
                        </tr> -->
                        <tr class="font-bold">
                            <td>Line Manager</td>
                            <td class="pl-2">: {{ previewKpiReportData?.line_maneger_name }}</td>
                        </tr>
                        <tr class="font-bold">
                            <td>Achievement</td>
                            <td class="pl-2">: {{ previewKpiReportData?.overAllKpi }}</td>
                        </tr>
                        <tr class="font-bold">
                            <td>Weightage Score</td>
                            <td class="pl-2">: {{ previewKpiReportData?.overAllKpi.slice(0, -1) }}</td>
                        </tr>
                    </table>
                    <!-- <h6 class="my-1 font-bold">{{ previewKpiReportData?.user_name }}</h6>
                    <h6 class="m-0 font-bold">Section: {{ previewKpiReportData?.data[0]?.section?.name }}</h6>
                    <h6 class="my-1 font-bold">Achievement: {{ previewKpiReportData?.overAllKpi }}</h6>
                    <h6 class="my-1 font-bold">Weightage: {{ previewKpiReportData?.overAllKpi }}</h6> -->
                </div>
                <div class="">
                    <Button class="w-fit h-fit mx-1 bg-green-500" style="border: 1px solid #22c55e;" label="Feedback"  v-if="previewKpiReportData?.can_set_feedback" @click="handleFdbckModal" />
                    <Button @click="handleReportDownload" class="w-fit h-fit mx-1" label="Download" :loading="loading1" />
                </div>
            </div>

            <DataTable v-for="(section, index) in previewKpiReportData?.data" :value="section.sub_section_data" v-bind:key="index" showGridlines tableStyle="min-width: 50rem" class="my-4">
                <!-- <pre>{{ section.section_summary }}</pre> -->
                <template #empty> <p class="text-center">No Data found...</p> </template>
                <template #header>
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2 py-2">
                        <span class="text-xl text-900 font-bold">{{ section.section.name }}</span>
                    </div>
                </template>
                <Column field="" header="Sub Section" style="width: 30%">
                    <template #body="slotProps">
                        <div>{{ slotProps?.data?.sub_section?.title }}</div>
                    </template>
                </Column>
                <Column field="target_mark" header="Key result Target" style="width: 8%"></Column>
                <Column field="achive_mark" header="Key result Achivement" style="width: 8%"></Column>
                <Column field="achive_mark_parcentage" header="Achievement Percentage" style="width: 8%"></Column>
                <Column field="weightage" header="Weightage" style="width: 8%"></Column>
                <Column field="weightage_score" header="Weightage Score" style="width: 8%"></Column>
                <Column field="comment" header="Comment"></Column>
                <Column field="" header="File" style="width: 8%">
                    <template #body="slotProps">
                        <a v-if="slotProps?.data?.file_link !== ''" :href="slotProps?.data?.file_link" target="_blank" class="text-blue-500"> Attachment </a>
                    </template>
                </Column>
                <ColumnGroup type="footer">
                    <Row>
                        <Column footer="Summary:" :colspan="3" footerStyle="text-align:left" />
                        <Column :footer="section?.section_summary?.achivementpercentage_sum" />
                        <Column :footer="section?.section_summary?.section_weightage" />
                        <Column :footer="section?.section_summary?.weighted_score_sum" />
                        <Column :footer="''" />
                        <Column :footer="''" />
                    </Row>
                </ColumnGroup>
            </DataTable>
            <!-- Perfomance Rating -->
            <!-- <pre>{{ previewKpiReportData?.line_maneger }}</pre> -->
            <DataTable :value="[previewKpiReportData?.line_maneger]" showGridlines>
                <Column field="line_manager_feedback" header="Line Manager Feedback on Improvement Areas" />
                <Column field="line_manager_assesment" header="Training Needs Assessment" />
            </DataTable>
            <div class="my-5 flex gap-2 text-lg">
                <p class="font-bold">Self Remark:</p>
                <p class="">{{ previewKpiReportData?.line_maneger?.self_remarks }}</p>
            </div>
        </div>
        <!-- Feedback Modal -->
        <Dialog v-model:visible="feedbackModal" modal header="Feedback" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <form @submit.prevent="feedbackSubmit">
                <div class="col-12">
                    <label for="icondisplay" class="font-bold block mb-2">Line Manager Feedback:</label>
                    <Textarea v-model="lineMangaerFeedback" rows="3" cols="20" placeholder="Write comment" class="w-full" required />
                </div>
                <div class="col-12">
                    <label for="icondisplay" class="font-bold block mb-2">Training Needs Assessment:</label>
                    <Textarea v-model="lineManagerAssessment" rows="3" cols="20" placeholder="Write comment" class="w-full" required />
                </div>
                <div class="w-full flex justify-center">
                    <Button class="w-fit h-fit mx-auto" type="submit" label="Submit" :loading="loading2" />
                </div>
            </form>
        </Dialog>
    </div>
</template>
