<template>
    <div class="card">
        <h5>Company List</h5>
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
            <template #empty> No Data found... </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="id" header="ID" sortable></Column>
            <Column field="name" header="Name" sortable></Column>
            <Column field="number_of_employees" sortable header="Number of Employees"></Column>
            <Column field="company_type" sortable header="Type"></Column>
            <Column header="Action">
                <template #body="slotProps">
                    <NuxtLink :to="`/companies/${slotProps.data.id}`">
                        <Button class="cursor-pointer text-white px-5 py-2" label="Enter" />
                    </NuxtLink>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default' // this should match the name of the file inside the middleware directory
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
const filters = ref();
const loading = ref(true);

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getCompanyList } = useCompanyStore();
const { companyList } = storeToRefs(useCompanyStore());

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
</style>
