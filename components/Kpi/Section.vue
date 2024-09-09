<script setup>
const url = useRuntimeConfig();
const toast = useToast();
const sectionList = ref([]);
const subSectionList = ref([]);
const sectionModal = ref(false);
const subModal = ref(false);
// Create Data
const sectionCreate = ref({});
const subSectionCreate = ref({});
const sectionEdit = ref({});
const sectionCreateLoading = ref(false);
const subSectionCreateLoading = ref(false);
const sectionEditLoading = ref(false);

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
        // permissionsList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
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
        // permissionsList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const sectionStatuses = [
    { name: 'Active', label: 1 },
    { name: 'Inactive', label: 0 }
];


const handleSectionCreation = async () => {
    sectionCreateLoading.value = true;
    console.log(Object.keys(sectionCreate.value));
    const formData = new FormData();
    formData.append('name', sectionCreate.value.name);
    formData.append('status', sectionCreate.value.status?.label); // optional chaining to avoid undefined errors

    // Check if name or status is empty or undefined
    if (!sectionCreate.value.name || !sectionCreate.value.status) {
        sectionCreateLoading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please fill all required fields', group: 'br', life: 3000 });

    }

    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/section-create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data) {
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
    formData.append('comment', subSectionCreate.value.comment);
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

    if (data) {
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

const visibleEditSection = ref(false);
const editSection = async (data) => {
    visibleEditSection.value = true;
    sectionEdit.value = { ...data, status: data.status === 1 ? { name: 'Active', label: 1 } : { name: 'Inactive', label: 0 } };
    console.log('Edit Data:', sectionEdit.value);
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

    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/section-update/${sectionEdit.value.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data) {
        init();
        visibleEditSection.value = false;
        sectionEdit.value = {};
        sectionEditLoading.value = false;
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Section Updated Successfully', group: 'br', life: 3000 });
    } else {
        sectionEditLoading.value = false;
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to update section!', group: 'br', life: 3000 });
    }
};

const deleteSection = async (id) => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi/section-delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data) {
        init();
        toast.add({ severity: 'success', summary: 'Deleted', detail: 'Section Deleted Successfully', group: 'br', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to delete section!', group: 'br', life: 3000 });
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
    <TabView class="mt-3">
        <TabPanel header="Sections">
            <div class="grid">
                <div class="col-12">
                    <div class="flex justify-content-end my-4">
                        <Button @click="() => (sectionModal = true)" label="Section" icon="pi pi-plus" class="" />
                    </div>
                    <div class="card">
                        <DataTable v-model:filters="filters" class="table-stR" :value="sectionList" paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
                            <template #empty> <p class="text-center">No Data found...</p> </template>
                            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column style="text-wrap: nowrap" field="name" header="Section Name"></Column>
                            <Column style="text-wrap: nowrap" field="status" header="Status"></Column>
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
                                    <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editSection(slotProps.data)" />
                                    <!-- <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded style="visibility: hidden" /> -->
                                    <Button icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteSection(slotProps.data.id)" />
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
                                    <InputText type="text" v-model="sectionCreate.name" placeholder="TItle" min="0" class="w-full" />
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
                                    <label for="icondisplay" class="font-bold block mb-2">Section Status:</label>
                                    <Dropdown v-model="sectionEdit.status" :options="sectionStatuses" optionLabel="name" placeholder="Select" checkmark :highlightOnSelect="false" class="w-full" />
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
        <TabPanel header="Sub Sections">
            <div class="grid">
                <div class="col-12">
                    <div class="flex justify-content-end my-4">
                        <Button @click="() => (subModal = true)" label="Sub Section" icon="pi pi-plus" class="" />
                    </div>
                    <div class="card">
                        <DataTable v-model:filters="filters" class="table-stR" :value="subSectionList" paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
                            <template #empty> <p class="text-center">No Data found...</p> </template>
                            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
                            <Column field="index" header="Serial" sortable></Column>
                            <Column style="text-wrap: nowrap" field="title" header="Sub Section Name"></Column>
                            <Column style="text-wrap: nowrap" field="target_mark" header="Target Mark"></Column>
                            <Column style="text-wrap: nowrap" field="section_id" header="Section ID"></Column>
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
                                    <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editSubSection(slotProps.data)" />
                                    <Button icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteSubSection(slotProps.data.id)" />
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
                            <div class="user-selection w-full">
                                <label for="icondisplay" class="font-bold block mb-2">Select Section:</label>
                                <!-- <pre>{{subSectionCreate.section}}</pre> -->
                                <Dropdown v-model="subSectionCreate.section" :options="sectionList" optionLabel="name" placeholder="Select Role" checkmark :highlightOnSelect="false" class="w-full" />
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Sub Section Title:</label>
                                    <InputText type="text" v-model="subSectionCreate.name" placeholder="Title" min="0" class="w-full" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="user-selection w-full">
                                    <label for="icondisplay" class="font-bold block mb-2">Target Mark:</label>
                                    <InputText type="number" v-model="subSectionCreate.targetMark" placeholder="Set Mark" min="0" class="w-full" />
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
                                <Button label="Create" severity="info" type="submit" :loading="subSectionCreateLoading"/>
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </TabPanel>
    </TabView>
    
    
</template>
<style scoped></style>
