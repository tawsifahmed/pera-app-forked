<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default' // this should match the name of the file inside the middleware directory
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Toast from 'primevue/toast';
import accessPermission from "~/composables/usePermission";
const createCompanyP = ref(accessPermission('create_company'));
const updateCompanyP = ref(accessPermission('update_company'));
const deleteCompanyP = ref(accessPermission('delete_company'));

const filters = ref();
const loading = ref(true);
const toast = useToast();
const router = useRouter();
const visibleCreateCompany = ref(false);
const visibleEditCompany = ref(false);

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getCompanyList, deleteCompany, switchCompany } = useCompanyStore();
const { compList, isCompanyDeleted, companySwitchToast, isCompanySwitched } = storeToRefs(useCompanyStore());

import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore();
companies.getCompany();
const { companyList  } = storeToRefs(useActiveCompanyStore());

const handleCreateCompanyModal = () => {
    visibleCreateCompany.value = true;
};

const editCompany = (id) => {
    visibleEditCompany.value = true;
    refCompanyId.value = id;
};

const closeEditModal = (evn) => {
    visibleEditCompany.value = evn;
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
    await deleteCompany(refCompanyId.value);

    if (isCompanyDeleted.value === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Company Deleted Successfully', group: 'br', life: 3000 });
        deleteCompanyDialog.value = false;
        if(companyList.value.length >= 1){
            if(refCompanyId.value === Number(localStorage.getItem('userCompany'))){
                await switchCompanyHandler(companyList.value[0].id);
                localStorage.setItem('userCompany', JSON.stringify(companyList.value[0].id));
                await companies.getCompany();
                await getCompanyList();
                // location.reload();
            }else{
                return
            }
        }else {
            localStorage.removeItem('userCompany');
            // location.reload();
            window.location.href = '/';
        }

    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete company', group: 'br', life: 3000 });
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

const switchCompanyHandler = async(switchCompId) => {
    if(switchCompId === Number(localStorage.getItem('userCompany'))){
        return;
    }else{
        await switchCompany(switchCompId);
        if(isCompanySwitched.value === true){
            localStorage.setItem('userCompany', JSON.stringify(switchCompId));
            toast.add({ severity: 'success', summary: 'Success', detail: companySwitchToast, group: 'br', life: 3000 });
        }else{
            toast.add({ severity: 'error', summary: 'Error', detail: companySwitchToast, group: 'br', life: 3000 });
        };
    }
}
</script>

<template>
    <div class="card">
        <!-- <pre>c lenght => {{companyList.length}}</pre> -->
        <div class="d-flex create-btn-wrapper mb-3">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right"></p>
                <p class="text">Companies</p>
            </div>
            <!-- <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" /> -->
            <Button v-if="createCompanyP" @click="handleCreateCompanyModal" class="cursor-pointer text-white px-5 py-2" label="Create Company +" />
            
                <CreateCompany v-model:visible="visibleCreateCompany"  />
           
        </div>
      
        <div class="flex mb-2 justify-content-end">
            <IconField iconPosition="right">
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
        </div>
        <DataTable v-model:filters="filters" class="table-st" :value="compList" stripedRows paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
           
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="index" header="Serial" sortable></Column>
            <Column field="name" header="Company Name" sortable>
              <template #body="slotProps" >
                <NuxtLink :to="`/companies/${slotProps?.data?.id}`">
                  <p class="cursor-pointer com-name hover:text-primary font-semibold" @click="switchCompanyHandler(slotProps?.data?.id)">{{ slotProps?.data?.name }}</p>
                </NuxtLink>
              </template>
            </Column>
            <Column field="number_of_employees" sortable header="Number of Employees"></Column>
            <Column field="company_type" sortable header="Type"></Column>
            <Column field="action" header="Action">
                <template #body="slotProps">
                   
                    <Button v-if="updateCompanyP" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editCompany(slotProps.data)" />
                    <Button v-if="!updateCompanyP" style="visibility: hidden;" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editCompany(slotProps.data)" />
                    <Button v-if="deleteCompanyP" icon="pi pi-trash" text class="mt-2" severity="warning" rounded @click="confirmdeleteCompany(slotProps.data.id)" />
                    <Button v-if="!deleteCompanyP" style="visibility: hidden;" icon="pi pi-trash" text class="mt-2" severity="warning" rounded @click="confirmdeleteCompany(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="deleteCompanyDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteCompanyDialog = false" />
            <Button label="Yes" icon="pi pi-check" text @click="deletingCompany" />
        </Dialog>

        <Dialog v-model:visible="visibleEditCompany" modal header="Edit Company" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <EditCompany :refCompanyId="refCompanyId"  @closeEditModal="closeEditModal($event)"/>
        </Dialog>
    </div>
</template>

<style lang="scss" scoped>
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

.table-st{
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
    td {
  
      padding: 0.15rem 1rem !important;
    }
  }
  .table-st thead tr{
   background:#ededed;
  }

    .com-name{
        color: #3c3c3c !important;
    }

//.breadc{
// margin-top: 0 !important;
//}
</style>
