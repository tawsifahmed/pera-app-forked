<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default' // this should match the name of the file inside the middleware directory
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Toast from 'primevue/toast';

const filters = ref();
const loading = ref(true);
const toast = useToast();

const visibleCreateCompany = ref(false);
const visibleEditCompany = ref(false);

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getCompanyList, deleteCompany } = useCompanyStore();
const { companyList, isCompanyDeleted } = storeToRefs(useCompanyStore());

const handleCreateCompanyModal = () => {
    visibleCreateCompany.value = true;
};

const editCompany = (id) => {
    visibleEditCompany.value = true;
    refCompanyId.value = id;
};

const deleteCompanyDialog = ref(false);

const dltConfrimPressed = ref(false);

// const deletingCompany = () => {
//     dltConfrimPressed.value = true;
//     deleteCompanyDialog.value = false;
//     console.log('company deleted')
// };

const refCompanyId = ref(null);

const confirmdeleteCompany = (companyId) => {
    refCompanyId.value = companyId;
    console.log('refCompanyId', refCompanyId.value);
    deleteCompanyDialog.value = true;
};

const deletingCompany = async () => {
    console.log('refCompanyIdFin', refCompanyId.value);

    // return
    await deleteCompany(refCompanyId.value);

    if (isCompanyDeleted.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Company Deleted Successfully', life: 3000 });
        deleteCompanyDialog.value = false;
        console.log('company deleted');
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete company', life: 3000 });
        console.log('company not deleted');
    }
};

watchEffect(() => {
    getCompanyList();
    loading.value = false;
});
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};

initFilters();
</script>

<template>
    <div class="card">
        <div class="d-flex create-btn-wrapper mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right"></p>
                <p class="text">Companies</p>
            </div>
            <!-- <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" /> -->
            <!-- <Button @click="handleCreateCompanyModal" class="cursor-pointer text-white px-5 py-2" label="Create Company +" />
            <Dialog v-model:visible="visibleCreateCompany" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <CreateCompany />
            </Dialog> -->
        </div>
        <DataTable v-model:filters="filters" :value="companyList" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="right">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="id" header="ID" sortable></Column>
            <Column field="name" header="Company Name" sortable></Column>
            <Column field="number_of_employees" sortable header="Number of Employees"></Column>
            <Column field="company_type" sortable header="Type"></Column>
            <Column header="Action">
                <template #body="slotProps">
                    <NuxtLink :to="`/companies/${slotProps.data.id}`">
                        <Button class="cursor-pointer text-white px-5 mr-3 py-2" label="Enter" />
                    </NuxtLink>
                    <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="editCompany(slotProps.data.id)" />
                    <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmdeleteCompany(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="deleteCompanyDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteCompanyDialog = false" />
            <Button label="Yes" icon="pi pi-check" text @click="deletingCompany" />
        </Dialog>

        <Dialog v-model:visible="visibleEditCompany" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <EditCompany :refCompanyId="refCompanyId" />
        </Dialog>
    </div>
</template>

<style lang="scss">
.header-con {
    display: flex;
    justify-content: center;

    .header-text {
        border-radius: 10px;
    }
}

.p-fieldset-legend-text {
    border: 1px solid rgb(39, 39, 39) !important;
    border-radius: 7px !important;
    background: rgb(248, 248, 248);
    font-size: large;
}

.p-fieldset {
    border: 1px solid rgb(39, 39, 39) !important;
    padding-left: 10px !important;
}

.create-btn-wrapper {
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    h5:first-child {
        //margin-top: 0 !important;
    }
}

.breadCrumWrap {
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: start;
    .text {
        line-height: 1;
    }
}

//.breadc{
// margin-top: 0 !important;
//}
</style>
