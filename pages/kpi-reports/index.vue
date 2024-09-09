<script setup>
const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const employees = ref([]);
const employee = ref('');
const quater = ref([]);
const selectedQuarter = ref();
const sections = ref([]);
const selectedSection = ref('');
const subSection = ref([]);
const selectedSubSection = ref([]);
const achievedMark = ref('');
const comment = ref('');
const dynamicSection = ref([
    {
        // user_id: employee.value,
        section_id: null,
        subsection_id: null,
        quater_id: null,
        achive_mark: '',
        comment: ''
    }
]);
const quaterYear = ref('');
const loading = ref(false);
const toast = useToast();
const members = ref([]);
const pmMark = ref();
const teamBuilding = ref();
const hrMark = ref();

const handleReportDownload = async (e) => {
    e.preventDefault();
    // Validation

    if (!employee.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Employee Not selected', group: 'br', life: 3000 });
    }
    if (members.value.length == 0) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please select team members', group: 'br', life: 3000 });
    }
    if (!selectedQuarter.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please select Quarter', group: 'br', life: 3000 });
    }
    if (!pmMark.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input Project Team Mark', group: 'br', life: 3000 });
    }
    if (!teamBuilding.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input Team building Mark', group: 'br', life: 3000 });
    }
    if (!hrMark.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input HR Mark', group: 'br', life: 3000 });
    }
    const token = useCookie('token');
    const membersList = members.value.map((member) => member.id);
    const kpiData = new FormData();
    kpiData.append('user_id', employee.value.id);
    kpiData.append('quater_start_date', `${quaterYear.value}-${selectedQuarter.value.start_date}`);
    kpiData.append('quater_end_date', `${quaterYear.value}-${selectedQuarter.value.end_date}`);
    kpiData.append('team_members', JSON.stringify(membersList));
    kpiData.append('project_team_mark', pmMark.value);
    kpiData.append('team_building', teamBuilding.value);
    kpiData.append('hr_mark', hrMark.value);
    // for (const pair of kpiData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    // }
    loading.value = true;
    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/report`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: kpiData
    });
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
        return (loading.value = false);
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', group: 'br', life: 3000 });
    }
};

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
        employees.value = data.value?.data;
    }
};
const fetchQuater = async () => {
    const token = useCookie('token');
    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi-quater/list`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value?.data?.length > 0) {
        quater.value = data.value?.data;
    }
};
const fetchSection = async () => {
    const token = useCookie('token');
    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/section`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value?.data?.length > 0) {
        sections.value = data.value?.data;
    }
};
const fetchSubSection = async () => {
    const token = useCookie('token');
    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/sub-section`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value?.data?.length > 0) {
        subSection.value = data.value?.data;
    }
};

// Function to add a new section
const addSection = (index) => {
    console.log(index, dynamicSection.value[index]);
    const data = dynamicSection.value[index];
    // if (data.user_id == '') return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Employee Not selected', group: 'br', life: 3000 });
    if (data.section_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Section Not selected', group: 'br', life: 3000 });
    if (data.subsection_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Sub-section Not selected', group: 'br', life: 3000 });
    if (data.quater_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Quarter Not selected', group: 'br', life: 3000 });
    if (data.achive_mark == '') return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Please input achieved mark', group: 'br', life: 3000 });
    dynamicSection.value.push({
        // user_id: employee,
        section_id: null,
        subsection_id: null,
        quater_id: null,
        achive_mark: '',
        comment: ''
    });
};

onMounted(() => {
    init();
    fetchQuater();
    fetchSection();
    fetchSubSection();
    // Initial call to add the first section
    // addSection();
    const date = new Date();
    quaterYear.value = date.getFullYear();
});
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">KPI Report</h5>
        </div>

        <!-- kpi tabs -->

        <TabView class="mt-3">
            <TabPanel class="file-upload" header="KPI">
                <TabView>
                    <TabPanel header="KPI Generate">
                        <div class="card mx-auto" style="max-width: 50rem">
                            <form action="" class="grid" style="gap: 10px">
                                <div class="w-full col-12">
                                    <label for="icondisplay" class="font-bold block mb-2">Employee</label>
                                    <Dropdown v-model="employee" :options="employees" optionLabel="name" placeholder="Select User" class="w-full" />
                                </div>
                                <!-- Dynamic section -->
                                <div class="" v-if="employee != ''">
                                    <div v-for="(section, index) in dynamicSection" :key="index" class="card">
                                        <div class="w-full col-12 grid">
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Section</label>
                                                <Dropdown v-model="dynamicSection[index].section_id" :options="sections" optionLabel="name" placeholder="Select Section" class="w-full" />
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Sub Section</label>
                                                <Dropdown v-model="dynamicSection[index].subsection_id" :options="subSection" optionLabel="title" placeholder="Select Sub Section" class="w-full" />
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                                                <Dropdown v-model="dynamicSection[index].quater_id" :options="quater" optionLabel="name" placeholder="Select Quarter" class="w-full" />
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Achieved Mark</label>
                                                <InputText v-model="dynamicSection[index].achive_mark" placeholder="Input Mark" class="w-full" />
                                            </div>
                                            <div class="col-12">
                                                <label for="icondisplay" class="font-bold block mb-2">Comment</label>
                                                <InputText v-model="dynamicSection[index].comment" placeholder="Write comment" class="w-full" />
                                            </div>
                                            <Button v-if="dynamicSection.length === index + 1" label="Add" class="mx-auto" @click.prevent="addSection(index)" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel header="KPI Report"> Report </TabPanel>
                </TabView>
            </TabPanel>
            <TabPanel header="Sections">
                <p class="">Sections</p>
            </TabPanel>
            <TabPanel header="Quarter">
                <KpiQuater />
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
</style>
