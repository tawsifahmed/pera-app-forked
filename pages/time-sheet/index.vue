<script setup>
const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
import accessPermission from '~/composables/usePermission';

const readKpi = ref(accessPermission('read_kpi'));
const createKpi = ref(accessPermission('create_kpi'));
const readQuarter = ref(accessPermission('read_quater'));
const readSection = ref(accessPermission('read_section'));
const employees = ref([]);
const employee = ref('');
const quater = ref([]);
const deadline = ref('');
const selectedQuarter = ref('');
const sections = ref([]);
const selectedSection = ref('');
const sectionStatuses = ref([
    { name: 'Active', label: 1 },
    { name: 'Inactive', label: 0 }
]);
const subSectionCreateLoading = ref(false);
const subSection = ref([]);
const filteredSubSection = ref([]);
const subSectionCreate = ref({});
const dynamicSection = ref([
    {
        // user_id: employee.value,
        section_id: null,
        subsection_id: null,
        quater_id: null,
        achive_mark: 0,
        target_mark: 0,
        comment: ''
    }
]);
const quaterYear = ref('');
const loading = ref(false);
const subModal = ref(false);
const toast = useToast();

const handleSubSectionModal = (modal, section) => {
    console.log('check selected section', section);

    subModal.value = modal;
    subSectionCreate.value.section = section;
    console.log('check subsection create', subSectionCreate.value.section);
};
const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('getMembers22', () =>
        $fetch(`${url.public.apiUrl}/teams/members`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    console.log('memmbess', data.value?.team_members);
    if (data.value?.team_members) {
        employees.value = data.value?.team_members.map((member) => ({ id: member.id, name: member.name }));
        console.log('employee', employee.value);
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
const handleSubSectionCreation = async () => {
    subSectionCreateLoading.value = true;
    console.log(Object.keys(subSectionCreate.value));
    const formData = new FormData();
    formData.append('section_id', subSectionCreate.value.section?.id);
    formData.append('title', subSectionCreate.value.name);
    formData.append('target_mark', subSectionCreate.value.targetMark);
    formData.append('mark_type', subSectionCreate.value.mark_type.label);
    formData.append('weightage', subSectionCreate.value.weightage);
    formData.append('comment', subSectionCreate.value.comment || '');
    formData.append('status', subSectionCreate.value.status?.label); // optional chaining to avoid undefined errors

    // Check if any required field is empty or undefined
    if (!subSectionCreate.value.section || !subSectionCreate.value.name || !subSectionCreate.value.targetMark || !subSectionCreate.value.status) {
        subSectionCreateLoading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please fill all required fields', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/sub-section-create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data.value) {
        fetchSubSection();
        subModal.value = false;
        subSectionCreate.value = {};
        subSectionCreateLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Sub Section Created Successfully', group: 'br', life: 3000 });
    } else {
        subSectionCreateLoading.value = false;
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to create sub section!', group: 'br', life: 3000 });
    }
};
// Function to add a new section
const addSection = () => {
    // console.log(dynamicSection.value[index]);
    const data = dynamicSection.value[dynamicSection.value.length - 1];
    // if (data.user_id == '') return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Employee Not selected', group: 'br', life: 3000 });
    if (data.section_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Section Not selected', group: 'br', life: 3000 });
    if (data.subsection_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Sub-section Not selected', group: 'br', life: 3000 });
    // if (data.quater_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Quarter Not selected', group: 'br', life: 3000 });
    dynamicSection.value.push({
        // user_id: employee,
        section_id: null,
        subsection_id: null,
        quater_id: null,
        achive_mark: 0,
        comment: ''
    });
};
const handleSectionChange = (section) => {
    selectedSection.value = section;
    filteredSubSection.value = subSection.value.filter((item) => item.section_id == section);
};
watch(dynamicSection, (newV, oldV) => {
    // handleSubSectionChange(selectedSection.value);
    // filteredSubSection.value = newV.filter((item) => item.section_id == selectedSection.value);
    console.log(newV);
});

// form Submission
const handleSubmit = async () => {
    const token = useCookie('token');
    if (employee.value == '') return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Employee not selected', group: 'br', life: 3000 });
    if (selectedQuarter.value == '') return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Quarter not selected', group: 'br', life: 3000 });
    if (deadline.value == '') return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Deadline not selected', group: 'br', life: 3000 });
    const lastFormData = dynamicSection.value[dynamicSection.value.length - 1];
    // if (data.user_id == '') return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Employee Not selected', group: 'br', life: 3000 });
    if (lastFormData.section_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Section Not selected', group: 'br', life: 3000 });
    if (lastFormData.subsection_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Sub-section Not selected', group: 'br', life: 3000 });
    // if (lastFormData.quater_id == null) return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Quarter Not selected', group: 'br', life: 3000 });
    // if (lastFormData.achive_mark == '') return toast.add({ severity: 'warn', summary: 'KPI Information', detail: 'Please input achieved mark', group: 'br', life: 3000 });
    const kpiData = dynamicSection.value.map((section) => {
        return {
            user_id: employee.value.id,
            section_id: section.section_id.id,
            subsection_id: section.subsection_id.id,
            quater_id: selectedQuarter.value.id,
            achive_mark: section.achive_mark,
            comment: section.comment,
            deadline: formatDate(deadline.value)
        };
    });

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/store`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: kpiData
    });
    if (data.value) {
        toast.add({ severity: 'success', summary: 'KPI Information', detail: 'KPI Submission Complete', group: 'br', life: 3000 });
        dynamicSection.value = [
            {
                // user_id: employee.value,
                section_id: null,
                subsection_id: null,
                quater_id: null,
                achive_mark: 0,
                target_mark: 0,
                comment: ''
            }
        ];
        employee.value = '';
        return (loading.value = false);
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to submit', group: 'br', life: 3000 });
    }
    console.log(kpiData);
};

const handleRemove = (index) => {
    dynamicSection.value.splice(index, 1);
};
const formatDate = (data) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};
const onTabChange = (event) => {
    if (event.index == 0) {
        init();
        fetchQuater();
        fetchSection();
        fetchSubSection();
    }
};
init();
fetchQuater();
fetchSection();
fetchSubSection();
const date = new Date();
quaterYear.value = date.getFullYear();
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">Time Sheet</h5>
        </div>

        <!-- kpi tabs -->

        <TabView @tabChange="onTabChange" class="mt-3">
            <TabPanel class="file-upload" header="My Time Sheet">
                <Toolbar class="border-0 px-0">
                    <template #start>
                        <div class="flex gap-2">
                           
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2">From: </label>
                                <Calendar v-model="startDate" @date-select="handleChange('startDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2"> To: </label>
                                <Calendar v-model="endDate" @date-select="handleChange('endtDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                        </div>
                    </template>
        
                    <template #end>
                        <Button @click="handleGenerate" class="w-full" label="Generate" :loading="loading" />
                    </template>
                </Toolbar>
            </TabPanel>
            <TabPanel  header="All Time Sheet">
                <Toolbar class="border-0 px-0">
                    <template #start>
                        <div class="flex gap-2">
                           
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2">From: </label>
                                <Calendar v-model="startDate" @date-select="handleChange('startDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                            <div class="flex-auto">
                                <label for="icondisplay" class="font-bold block mb-2"> To: </label>
                                <Calendar v-model="endDate" @date-select="handleChange('endtDate', $event)" showIcon iconDisplay="input" inputId="icondisplay" />
                            </div>
                        </div>
                    </template>
        
                    <template #end>
                        <Button @click="handleGenerate" class="w-full" label="Generate" :loading="loading" />
                    </template>
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
