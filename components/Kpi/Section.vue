<script setup>
import accessPermission from '~/composables/usePermission';

const readSection = ref(accessPermission('read_section'));
const createSection = ref(accessPermission('create_section'));
const updateSection = ref(accessPermission('update_section'));
const deleteSectionP = ref(accessPermission('delete_section'));

const readSubSection = ref(accessPermission('read_sub_section'));
const createSubSection = ref(accessPermission('create_sub_section'));
const updateSubSection = ref(accessPermission('update_sub_section'));
const deleteSubSectionP = ref(accessPermission('delete_sub_section'));

const url = useRuntimeConfig();
const toast = useToast();
const sectionList = ref([]);
const subSectionList = ref([]);
const sectionModal = ref(false);
const subModal = ref(false);
const visibleEditSection = ref(false);
const visibleEditSubModal = ref(false);
const sectionCreate = ref({});
const subSectionCreate = ref({});
const sectionEdit = ref({});
const subSectionEdit = ref({});
const sectionCreateLoading = ref(false);
const subSectionCreateLoading = ref(false);
const sectionEditLoading = ref(false);
const subSectionEditLoading = ref(false);
const loading = ref(false);
const init = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/section`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        console.log('Section data: ', data.value.data);
        sectionList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const initSub = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/sub-section`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        console.log('Section data: ', data.value.data);
        subSectionList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const sectionStatuses = ref([
    { name: 'Active', label: 1 },
    { name: 'Inactive', label: 0 }
]);
const markType = ref([
    { name: 'Percentage (%)', label: 1 },
    { name: 'Number (01)', label: 0 }
]);
const handleSectionCreation = async () => {
    sectionCreateLoading.value = true;
    console.log(Object.keys(sectionCreate.value));
    const formData = new FormData();
    formData.append('name', sectionCreate.value.name);
    formData.append('status', sectionCreate.value.status?.label); // optional chaining to avoid undefined errors
    formData.append('section_weightage', sectionCreate.value.section_weightage);
    // Check if name or status is empty or undefined
    if (!sectionCreate.value.name || !sectionCreate.value.status) {
        sectionCreateLoading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please fill all required fields', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/kpi/section-create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data.value) {
        init();
        sectionModal.value = false;
        sectionCreate.value = {};
        sectionCreateLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Section Created Successfully', group: 'br', life: 3000 });
    } else {
        sectionCreateLoading.value = false;
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to create section!', group: 'br', life: 3000 });
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
        initSub();
        subModal.value = false;
        subSectionCreate.value = {};
        subSectionCreateLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Sub Section Created Successfully', group: 'br', life: 3000 });
    } else {
        subSectionCreateLoading.value = false;
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to create sub section!', group: 'br', life: 3000 });
    }
};

const formatDate = (data) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};

const editSection = async (data) => {
    visibleEditSection.value = true;
    sectionEdit.value = { ...data, status: data.status === 1 ? { name: 'Active', label: 1 } : { name: 'Inactive', label: 0 } };
    console.log('Edit Data:', sectionEdit.value);
};

const structuredSectionList = ref();
const editSubSection = async (data) => {
    visibleEditSubModal.value = true;
    structuredSectionList.value = sectionList.value.map((item) => ({ name: item.name, id: item.id }));
    subSectionEdit.value = {
        subSectionId: data.id,
        section_id: structuredSectionList.value.find((item) => item.id === data.section_id),
        title: data.title,
        target_mark: data.target_mark,
        mark_type: markType.value.find((item) => item.label === data.mark_type),
        weightage: data.weightage,
        comment: data.comment,
        status: sectionStatuses.value.find((item) => item.label === data.status)
    };
};

const handleEditSection = async () => {
    sectionEditLoading.value = true;
    if (!sectionEdit.value.name || !sectionEdit.value.status) {
        sectionEditLoading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please fill all required fields', group: 'br', life: 3000 });
    }

    const formData = new FormData();
    formData.append('name', sectionEdit.value.name);
    formData.append('status', sectionEdit.value.status?.label); // optional chaining to avoid undefined errors
    formData.append('section_weightage', sectionEdit.value.section_weightage);
    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/kpi/section-update/${sectionEdit.value.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data.value) {
        init();
        visibleEditSection.value = false;
        sectionEdit.value = {};
        sectionEditLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Section Updated Successfully', group: 'br', life: 3000 });
    } else {
        sectionEditLoading.value = false;
        toast.add({ severity: 'error', summary: error.value.data.app_message, detail: error.value.data.user_message, group: 'br', life: 3000 });
    }
};

const handleEditSubSection = async () => {
    subSectionEditLoading.value = true;
    if (!subSectionEdit.value.section_id || !subSectionEdit.value.title || !subSectionEdit.value.target_mark || !subSectionEdit.value.status) {
        subSectionEditLoading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please fill all required fields', group: 'br', life: 3000 });
    }
    console.log(subSectionEdit);
    const formData = new FormData();
    formData.append('section_id', subSectionEdit.value.section_id?.id);
    formData.append('title', subSectionEdit.value.title);
    formData.append('weightage', subSectionEdit.value.weightage);
    formData.append('target_mark', subSectionEdit.value.target_mark);
    formData.append('mark_type', subSectionEdit.value.mark_type.label);
    formData.append('comment', subSectionEdit.value.comment);
    formData.append('status', subSectionEdit.value.status?.label); // optional chaining to avoid undefined errors

    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/kpi/sub-section-update/${subSectionEdit.value.subSectionId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data.value) {
        initSub();
        visibleEditSubModal.value = false;
        subSectionEdit.value = {};
        subSectionEditLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Sub Section Updated Successfully', group: 'br', life: 3000 });
    } else {
        subSectionEditLoading.value = false;
        toast.add({ severity: 'error', summary: error.value.data.app_message || 'Error', detail: error.value.data.user_message || 'Failed To Update', group: 'br', life: 3000 });
    }
};

const deleteSection = async (id) => {
    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/kpi/section-delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value) {
        init();
        toast.add({ severity: 'success', summary: 'Deleted', detail: 'Section Deleted Successfully', group: 'br', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Failed', detail: error.value.data.user_message, group: 'br', life: 3000 });
    }
};

const deleteSubSection = async (id) => {
    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/kpi/sub-section-delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value) {
        initSub();
        toast.add({ severity: 'success', summary: 'Deleted', detail: 'Sub Section Deleted Successfully', group: 'br', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Failed', detail: error.value.data.user_message, group: 'br', life: 3000 });
    }
};

const closeCreateModal = (event) => {
    console.log(event);
};
onMounted(() => {
    init();
    initSub();
});
</script>
<template>
    <TabView :activeIndex="0">
        <TabPanel v-if="readSection" header="Sections">
            <div class="grid">
                <div class="col-12">
                    <div class="flex justify-content-end my-4">
                        <Button v-if="createSection" @click="() => (sectionModal = true)" label="Section" icon="pi pi-plus" class="" />
                    </div>
                    <div class="card">
                        <DataTable class="table-stR" :value="sectionList" paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
                            <template #empty> <p class="text-center">No Data found...</p> </template>
                            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column style="text-wrap: nowrap" field="name" header="Section Name"></Column>
                            <Column style="text-wrap: nowrap" field="section_weightage" header="Weightage"></Column>
                            <!-- <Column field="sub_section" header="Sub Sections">
                                <template #body="slotProps">
                                    <div style="display: flex; flex-wrap: wrap; gap: 5px">
                                        <div class="border rounded" v-for="subSection in slotProps.data.sub_section" :key="subSection" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                                            <p>{{ subSection.title }}</p>
                                        </div>
                                    </div>
                                </template>
                            </Column> -->
                            <Column field="action" header="Action">
                                <template #body="slotProps">
                                    <Button v-if="updateSection" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editSection(slotProps.data)" />
                                    <!-- <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded style="visibility: hidden" /> -->
                                    <Button v-if="deleteSectionP" icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteSection(slotProps.data.id)" />
                                </template>
                            </Column>
                            <!-- <template #footer> In total there are {{ rolesLists ? rolesLists.length : 0 }} rows. </template> -->
                        </DataTable>
                    </div>
                </div>
            </div>

            <!-- create section modal -->
            <Dialog v-model:visible="sectionModal" modal header="Create Section" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
                <form class="" action="" @submit.prevent="handleSectionCreation">
                    <div class="card">
                        <div class="kpi-form grid">
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Section Title:</label>
                                    <InputText type="text" v-model="sectionCreate.name" placeholder="Title" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Weightage:</label>
                                    <InputNumber v-model="sectionCreate.section_weightage" placeholder="Weightage" inputId="Weightage" :min="0" :max="60" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Section Status:</label>
                                    <Dropdown v-model="sectionCreate.status" :options="sectionStatuses" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12 mx-auto flex justify-content-center">
                                <Button label="Create" severity="info" type="submit" :loading="sectionCreateLoading" />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>

            <!-- edit section modal -->
            <Dialog v-model:visible="visibleEditSection" modal header="Edit Section" :style="{ width: '35rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <form class="" action="" @submit.prevent="handleEditSection">
                    <div class="card">
                        <div class="kpi-form grid">
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Section Title:</label>
                                    <InputText type="text" v-model="sectionEdit.name" placeholder="Title" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Weightage:</label>
                                    <InputNumber v-model="sectionEdit.section_weightage" placeholder="Weightage" inputId="Weightage" :min="0" :max="60" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Section Status:</label>
                                    <Dropdown v-model="sectionEdit.status" :options="sectionStatuses" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12 mx-auto flex justify-content-center">
                                <Button label="Update" severity="info" type="submit" :loading="sectionEditLoading" />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </TabPanel>

        <!-- sub section panel -->
        <TabPanel v-if="readSubSection" header="Sub Sections">
            <div class="grid">
                <div class="col-12">
                    <div class="flex justify-content-end my-4">
                        <Button v-if="createSubSection" @click="() => (subModal = true)" label="Sub Section" icon="pi pi-plus" class="" />
                    </div>
                    <div class="card">
                        <DataTable class="table-stR" :value="subSectionList" paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
                            <template #empty> <p class="text-center">No Data found...</p> </template>
                            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column style="text-wrap: nowrap" field="title" header="Sub Section Name"></Column>
                            <Column style="text-wrap: nowrap" field="target_mark" header="Target Mark"></Column>
                            <Column style="text-wrap: nowrap" field="weightage" header="Weightage"></Column>
                            <Column style="text-wrap: nowrap" field="section_name" header="Section"></Column>
                            <Column style="text-wrap: nowrap" field="comment" header="Comment"></Column>
                            <!-- <Column field="sub_section" header="Sub Sections">
                                <template #body="slotProps">
                                    <div style="display: flex; flex-wrap: wrap; gap: 5px">
                                        <div class="border rounded" v-for="subSection in slotProps.data.sub_section" :key="subSection" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                                            <p>{{ subSection.title }}</p>
                                        </div>
                                    </div>
                                </template>
                            </Column> -->
                            <Column field="action" header="Action">
                                <template #body="slotProps">
                                    <Button v-if="updateSubSection" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editSubSection(slotProps.data)" />
                                    <Button v-if="deleteSubSectionP" icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteSubSection(slotProps.data.id)" />
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>

            <!-- sub section modal -->
            <Dialog v-model:visible="subModal" modal header="Create Sub Section" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
                <form class="" action="" @submit.prevent="handleSubSectionCreation">
                    <div class="card">
                        <div class="kpi-form grid">
                            <div class="col-12">
                                <label for="icondisplay" class="font-bold block mb-2">Select Section:</label>
                                <!-- <pre>{{subSectionCreate.section}}</pre> -->
                                <Dropdown v-model="subSectionCreate.section" :options="sectionList" optionLabel="name" placeholder="Select Section" checkmark :highlightOnSelect="false" class="w-full" />
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
                                    <Dropdown v-model="subSectionCreate.mark_type" :options="markType" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Target Mark:</label>
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

            <!-- edit sub section modal -->
            <Dialog v-model:visible="visibleEditSubModal" modal header="Edit Sub Section" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
                <form class="" action="" @submit.prevent="handleEditSubSection">
                    <div class="card">
                        <div class="kpi-form grid">
                            <div class="col-12">
                                <label for="icondisplay" class="font-bold block mb-2">Select Section:</label>
                                <!-- <pre>{{structuredSectionList}}</pre> -->
                                <Dropdown v-model="subSectionEdit.section_id" :options="structuredSectionList" optionLabel="name" placeholder="Select Section" checkmark :highlightOnSelect="false" class="w-full" />
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Sub Section Title:</label>
                                    <InputText type="text" v-model="subSectionEdit.title" placeholder="Title" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Weightage:</label>
                                    <InputText type="text" v-model="subSectionEdit.weightage" placeholder="Weightage" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Mark Type:</label>
                                    <Dropdown v-model="subSectionEdit.mark_type" :options="markType" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Target Mark:</label>
                                    <InputText type="number" v-model="subSectionEdit.target_mark" placeholder="Set Target Mark" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Sub Section Comment:</label>
                                    <InputText type="text" v-model="subSectionEdit.comment" placeholder="Comment" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Sub Section Status:</label>
                                    <Dropdown v-model="subSectionEdit.status" :options="sectionStatuses" optionLabel="name" placeholder="Select Status" checkmark :highlightOnSelect="false" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12 mx-auto flex justify-content-center">
                                <Button label="Update" severity="info" type="submit" :loading="subSectionEditLoading" />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </TabPanel>
    </TabView>
</template>
<style scoped></style>
