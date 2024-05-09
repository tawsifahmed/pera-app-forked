<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';

import Column from 'primevue/column';

import DataTable from 'primevue/datatable';

import CreateEmployee from '@/components/Employee/CreateEmployee.vue';

import EditEmployee from '@/components/Employee/EditEmployee.vue';

const filters = ref();

const loading = ref(true);

const toast = useToast();

import Dialog from 'primevue/dialog';

const visibleCreateEmployee = ref(false);

const visibleEditEmployee = ref(false);

const usersLists = ref([]);

const visibleDeleteEmployee = ref(false);

const id = ref('');

const name = ref('');

const email = ref('');

const phone = ref('');

const address = ref('');

const closeCreateModal = (evn) => {
    visibleCreateEmployee.value = false;
    init();
};

const closeEditModal = (evn) => {
    visibleEditEmployee.value = false;
    init();
};

const handleCreateCompanyModal = () => {
    visibleCreateEmployee.value = true;
    init();
};

const editEmployee = (data) => {
    visibleEditEmployee.value = true;
    id.value = data.id;
    name.value = data.name;
    email.value = data.email;
    phone.value = data.phone;
    address.value = data.address;
};

const deleteEmployee = (key) => {
    visibleDeleteEmployee.value = true;
    id.value = key;
};

const confirmDeleteEmployee = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/users/delete/${id.value}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value.code === 200) {
        visibleDeleteEmployee.value = false;
        toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Deleted successfully!', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Employee Deleted Failed!', life: 3000 });
    }
    init();
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
        $fetch('http://188.166.212.40/pera/public/api/v1/users/list', {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        usersLists.value = data.value?.data;
    }
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
onMounted(() => {
    init();
    loading.value = false;
});

initFilters();
</script>

<template>
    <div class="card">
        <div class="d-flex create-btn-wrapper mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right"></p>
                <p class="text">Employee</p>
            </div>
            <Button @click="handleCreateCompanyModal" class="cursor-pointer text-white px-5 py-2" label="Create Employee +" />
        </div>

        <!-- DataTable -->
        <DataTable v-model:filters="filters" :value="usersLists" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
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
            <Column field="name" header="Employee Name" sortable></Column>
            <Column field="email" sortable header="Email"></Column>
            <Column field="phone" sortable header="phone"></Column>
            <Column header="Action">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="editEmployee(slotProps.data)" />
                    <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="deleteEmployee(slotProps.data.id)" />
                </template>
            </Column>
            <template #footer> In total there are {{ usersLists ? usersLists.length : 0 }} rows. </template>
        </DataTable>

        <!-- Create -->
        <Dialog v-model:visible="visibleCreateEmployee" modal header="Create Employee" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <CreateEmployee @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit -->
        <Dialog v-model:visible="visibleEditEmployee" modal header="Edit Employee" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <EditEmployee :param="{ id, name, address, phone, email }" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <Dialog v-model:visible="visibleDeleteEmployee" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="visibleDeleteEmployee = false" />
            <Button label="Yes" icon="pi pi-check" text @click="confirmDeleteEmployee" />
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
</style>
