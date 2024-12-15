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
            <h5 class="mb-1">KPI Report</h5>
        </div>

        <!-- kpi tabs -->

        <TabView @tabChange="onTabChange" class="mt-3">
            <TabPanel v-if="readKpi" class="file-upload" header="KPI">
                <TabView>
                    <TabPanel v-if="createKpi" header="Generate">
                        <div class="card mx-auto" style="max-width: 50rem">
                            <form action="" class="grid" style="gap: 10px" @submit.prevent="handleSubmit">
                                <div class="grid col-12 w-full">
                                    <!-- <pre>{{employees}}</pre> -->
                                    <div class="col-12 md:col-4">
                                        <label for="icondisplay" class="font-bold block mb-2">Team Member</label>
                                        <Dropdown v-model="employee" :options="employees" optionLabel="name" placeholder="Select User" class="w-full" />
                                    </div>
                                    <div class="col-12 md:col-4">
                                        <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                                        <Dropdown v-model="selectedQuarter" :options="quater" optionLabel="name" placeholder="Select Quarter" class="w-full" />
                                    </div>
                                    <div class="col-12 md:col-4">
                                        <label for="icondisplay" class="font-bold block mb-2">Deadline</label>
                                        <Calendar v-model="deadline" dateFormat="dd-mm-yy" placeholder="DD-MM-YYYY" />
                                    </div>
                                </div>
                                <!-- Dynamic section -->
                                <div class="" v-if="employee != '' && selectedQuarter !== ''">
                                    <div v-for="(section, index) in dynamicSection" :key="index" class="card relative">
                                        <!-- <pre>{{ dynamicSection[index]?.section_id?.sub_section }}</pre> -->
                                        <button v-if="index != 0" type="button" class="close" @click="handleRemove(index)"><i class="pi pi-times-circle text-xl"></i></button>
                                        <div class="w-full col-12 grid">
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Section<i class="text-red-400 text-italic">*</i></label>
                                                <Dropdown v-model="dynamicSection[index].section_id" :options="sections" optionLabel="name" placeholder="Select Section" class="w-full" />
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Sub Section<i class="text-red-400 text-italic">*</i></label>
                                                <div class="flex gap-2 w-full">
                                                    <Dropdown
                                                        v-model="dynamicSection[index].subsection_id"
                                                        :options="dynamicSection[index]?.section_id?.sub_section"
                                                        optionLabel="title"
                                                        placeholder="Select Sub Section"
                                                        class="w-full"
                                                        style="max-width: 17rem"
                                                    />
                                                    <Button
                                                        @click="
                                                            () => {
                                                                handleSubSectionModal(true, dynamicSection[index].section_id);
                                                            }
                                                        "
                                                        icon="pi pi-plus"
                                                        severity="success"
                                                        aria-label="Add New"
                                                        class=""
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                                                <Dropdown disabled v-model="selectedQuarter" :options="quater" optionLabel="name" placeholder="Select Quarter" class="w-full" />
                                            </div>
                                            <div class="col-12 md:col-6">
                                                <label for="icondisplay" class="font-bold block mb-2"
                                                    >Achieved Mark (Target: {{ dynamicSection[index].subsection_id?.target_mark || 0 }}{{ dynamicSection[index].subsection_id?.mark_type == 1 ? '%' : '' || 0 }})</label
                                                >
                                                <InputText v-model="dynamicSection[index].achive_mark" placeholder="Input Mark" class="w-full" />
                                            </div>
                                            <div class="col-12">
                                                <label for="icondisplay" class="font-bold block mb-2">Comment</label>
                                                <InputText v-model="dynamicSection[index].comment" placeholder="Write comment" class="w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 flex justify-content-center w-full">
                                    <Button label="New Section" class="bg-green-500 border-none" @click.prevent="addSection(index)" />
                                    <Button type="submit" label="Submit" class="" :disabled="employee === '' || selectedQuarter === '' || deadline === ''" />
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel header="Submission">
                        <KpiSubmission :quater="quater" />
                    </TabPanel>
                    <TabPanel header="Report">
                        <KpiReport :quater="quater" />
                    </TabPanel>
                </TabView>
            </TabPanel>
            <TabPanel v-if="readSection" header="Sections">
                <KpiSection />
            </TabPanel>
            <TabPanel v-if="readQuarter" header="Quarter">
                <KpiQuater />
            </TabPanel>
        </TabView>
    </div>
    <!-- sub section modal -->
    <Dialog v-model:visible="subModal" modal header="Create Sub Section" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
        <form class="" action="" @submit.prevent="handleSubSectionCreation">
            <div class="">
                <div class="kpi-form grid">
                    <div class="col-12">
                        <label for="icondisplay" class="font-bold block mb-2">Select Section:</label>
                        <!-- <pre>{{subSectionCreate.section}}</pre> -->
                        <Dropdown v-model="subSectionCreate.section" :options="sections" optionLabel="name" placeholder="Select Section" checkmark :highlightOnSelect="false" class="w-full" />
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section Title:</label>
                            <InputText type="text" v-model="subSectionCreate.name" placeholder="Title" min="0" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Weightage:</label>
                            <InputText type="text" v-model="subSectionCreate.weightage" placeholder="Weightage" min="0" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Mark Type:</label>
                            <Dropdown
                                v-model="subSectionCreate.mark_type"
                                :options="[
                                    { name: 'Percentage (%)', label: 1 },
                                    { name: 'Number (01)', label: 0 }
                                ]"
                                optionLabel="name"
                                placeholder="Select Status"
                                checkmark
                                :highlightOnSelect="false"
                                class="w-full"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Key result Target:</label>
                            <InputText type="number" v-model="subSectionCreate.targetMark" placeholder="Set Target Mark" min="0" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section Comment:</label>
                            <InputText type="text" v-model="subSectionCreate.comment" placeholder="Comment" min="0" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section Status:</label>
                            <Dropdown v-model="subSectionCreate.status" :options="sectionStatuses" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12 mx-auto flex justify-content-center">
                        <Button label="Create" severity="info" type="submit" :loading="subSectionCreateLoading" />
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
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
