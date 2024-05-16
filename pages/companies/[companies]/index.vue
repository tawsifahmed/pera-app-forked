
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleCompany, deleteSpace } = useCompanyStore();
const { singleCompany, isSpaceDeleted } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
const filters = ref();
const loading = ref(true);
const toast = useToast();


const { companies } = useRoute().params
console.log('companyParams,', companies)
const visible = ref(false);

if(singleCompany.value === undefined){
throw createError({statusCode: 404, message: 'Company not found', fatal: true})
}

const openCreateSpace = () => {
  visible.value = true;
}

const refSpaceId = ref(null);



const confirmDeleteSpace = (spaceId) => {
  refSpaceId.value = spaceId;
    console.log('refCompanyId', refSpaceId.value);
    deleteSpaceDialog.value = true;

};

const deleteSpaceDialog = ref(false);


const deletingSpace = async () => {

  console.log('refCompanyIdFin', refSpaceId.value);

  // return 
  await deleteSpace(refSpaceId.value, companies);

  if(isSpaceDeleted.value === true){
      toast.add({ severity: 'success', summary: 'Successfull', detail: 'Space Deleted Successfully', life: 3000 });
      deleteSpaceDialog.value = false;
          console.log('space deleted')
      }else{
          toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete space', life: 3000 });       
          console.log('space not deleted')
      }
}




const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

const visibleEditSpace = ref(false);

const editSpace = (id) => {
  visibleEditSpace.value = true;
  refSpaceId.value = id;
  console.log('refSpaceId', refSpaceId.value)
};

watchEffect(() => {
  getSingleCompany(companies);
  loading.value = false;
  console.log('company,', companies)
})

const closeEditSpace = (evn) => {
  visibleEditSpace.value = evn;
};
</script>

<template>
    <!-- <pre class="">{{ singleCompany.name }}</pre> -->
    <div class="card">
      <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
           <!-- <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" /> -->
           <div class="breadCrumWrap">
            <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
            <p class="pi pi-angle-right"></p>
            <p class="text">Company - {{singleCompany?.name}}</p>
           </div>
          <div class="create-btn-wrapper ">
              <SpaceCreateSpace v-tooltip.left="{ value: 'Create Space' }"/>
        </div>
      </div>
      
      <div class="flex justify-content-end mb-2">
          <IconField iconPosition="right">
              <InputIcon>
                  <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </IconField>
      </div>
      <DataTable v-model:filters="filters" class="table-dco" :value="singleCompany?.spaces" stripedRows paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
          <template #empty><p class="py-2 text-center">No Data found...</p> </template>
          <template #loading> Loading data. Please wait. </template>
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Space Name">
            <template #body="slotProps">
              <NuxtLink :to="`/companies/${companies}/spaces/${slotProps.data.id}`">
                <p class="cursor-pointer com-name hover:text-primary font-semibold">{{ slotProps.data.name }}</p>
              </NuxtLink>
            </template>  
          </Column>
          <Column field="description" header="Description"></Column>
          <Column field="color" header="Space Color"></Column>
          <Column field="action" header="Action">
              <template #body="slotProps">
                  <!-- <NuxtLink :to="`/companies/${singleCompany.id}/spaces/${slotProps.data.id}`">
                    <Button class="cursor-pointer text-white px-5 mr-3 py-2" label="Enter" />
                  </NuxtLink> -->
                  <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editSpace(slotProps.data)"  />
                  <Button icon="pi pi-trash" text class="mt-2" severity="warning" rounded @click="confirmDeleteSpace(slotProps.data.id)" />
              </template>
          </Column>
      </DataTable>

      <Dialog v-model:visible="deleteSpaceDialog" header=" " :style="{ width: '25rem' }">
              
        <p>Are you sure you want to delete?</p>
        <Button label="No" icon="pi pi-times" text @click="deleteSpaceDialog = false" />
        <Button label="Yes" icon="pi pi-check" text @click="deletingSpace" /> 
      </Dialog>
      <Dialog v-model:visible="visibleEditSpace" modal header="Edit Space" :style="{ width: '32rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <SpaceEditSpace :refSpaceId="refSpaceId" :singleCompany="singleCompany" @closeEditSpace="closeEditSpace($event)"/>
      </Dialog>
  </div>

</template>
  
  
<style lang="scss" >

.create-btn-wrapper{
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
}

.create-space-btn-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Add your custom styles here */

.breadCrumWrap{
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: start;
  .text{
    line-height: 1;
  }
}

.table-dco{
  border: 1px solid #ededed;
  border-radius: 10px;
  overflow: hidden;
  td {

    padding: 0.15rem 1rem !important;
  }
}
.table-dco thead tr{
 background:#ededed;
}


.com-name{
  color: #3c3c3c !important;
}


</style>