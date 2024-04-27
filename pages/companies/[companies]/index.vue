
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleCompany } = useCompanyStore();
const { singleCompany } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
const filters = ref();
const loading = ref(true);

const { companies } = useRoute().params
console.log('companyParams,', companies)
const visible = ref(false);

if(singleCompany.value === undefined){
throw createError({statusCode: 404, message: 'Company not found', fatal: true})
}

const openCreateSpace = () => {
  visible.value = true;
}

watchEffect(() => {
  getSingleCompany(companies);
  loading.value = false;
  console.log('company,', companies)
})

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

const getBackgroundColor = (color) => {
  if (color === 'crimson') {
    return '#ffa2b3';
  } else if (color === 'skyblue') {
    return '#e1f6ff';
  } else if (color === 'orange') {
    return '#ffdc9b';
  } else if (color === 'purple') {
    return '#ffbdff';
  } else if (color === 'cadetblue') {
    return '#aae0e1';
  } else if (color === 'burlywood') {
    return '#ffe9cd';
  } else if (color === 'pink') {
    return '#ffd5dd';
  } else if (color === 'lightseagreen') {
    return '#a8e1de';
  } else {
    // Default color or additional conditions can be set here
    return color;
  }
};
</script>

<template>
    <!-- <pre>{{ singleCompany }}</pre> -->
    <div class="card">
      <h5>Dashboard > {{ singleCompany?.name }}</h5>
      <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
          <div class="create-btn-wrapper">
            <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Space +" />
            <Dialog v-model:visible="visible" modal header=" " :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <CreateSpecificSpace :singleCompany="singleCompany" />
            </Dialog>
            <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
        </div>
      </div>
      <DataTable v-model:filters="filters" :value="singleCompany?.spaces" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
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
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Space Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column field="color" header="Space Color"></Column>
          <Column header="Action">
              <template #body="slotProps">
                  <NuxtLink :to="`/companies/${singleCompany.id}/spaces/${slotProps.data.id}`">
                    <Button class="cursor-pointer text-white px-5 mr-3 py-2" label="Enter" />
                  </NuxtLink>
                  <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="editProduct(slotProps.data)" />
                  <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteProduct(slotProps.data)" />
              </template>
          </Column>
      </DataTable>
  </div>

</template>
  
  
  <style scoped>

  .create-btn-wrapper{
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
  }
  /* Add your custom styles here */
  </style>