
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleSpace } = useCompanyStore();
const { singleSpace } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
const filters = ref();
const loading = ref(true);

const { spaces } = useRoute().params
console.log('spaceParams,', spaces)
const visible = ref(false);

if(singleSpace.value === undefined){
throw createError({statusCode: 404, message: 'Space not found', fatal: true})
}

const openCreateSpace = () => {
  visible.value = true;
}

watchEffect(() => {
    getSingleSpace(spaces);
    loading.value = false;

  console.log('spaces,', spaces)
})


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

</script>

<template>
    <!-- <pre>{{ singleSpace }}</pre> -->
    
    <div class="card">
        <h5>Dashboard > {{ singleSpace?.company_name }} > {{ singleSpace?.name }}</h5>
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="create-btn-wrapper">
              <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Project +" />
              <Dialog v-model:visible="visible" modal header=" " :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                  <CreateSpecificProject :singleSpace="singleSpace" />
              </Dialog>
              <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
          </div>
        </div>
        <DataTable v-model:filters="filters" :value="singleSpace?.projects" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
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
            <Column field="name" header="Project Name"></Column>
            <Column field="space_name" header="Under the Space of"></Column>
            <!-- <Column field="teams.length" header="Teams"></Column> -->
            <!-- <Column field="color" header="Space Color"></Column> -->
            <Column header="Action">
                <template #body="slotProps">
                    <NuxtLink :to="`/companies/${singleSpace.company_id}/spaces/${singleSpace.id}/projects/${slotProps.data.id}`">
                        <Button  disabled class="cursor-pointer text-white mr-3 px-5 py-2" label="Enter" />
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