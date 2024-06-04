<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';

import Column from 'primevue/column';

import DataTable from 'primevue/datatable';

const filters = ref();

const loading = ref(true);

const toast = useToast();

import Dialog from 'primevue/dialog';

const visibleCreateRole = ref(false);


const visibleEditRole = ref(false);

const rolesLists = ref([]);

const permissionsList = ref([]);

const slctdPermissions = ref([]);

const visibleDeleteRole = ref(false);

const id = ref('');

const name = ref('');

const email = ref('');


const closeCreateModal = (evn) => {
    visibleCreateRole.value = false;
    init();
};

const closeEditModal = (evn) => {
    visibleEditRole.value = false;
    init();
};

const handleCreateRoleModal = () => {
    visibleCreateRole.value = true;
    init();
};

const editRole = (data) => {
    visibleEditRole.value = true;
    id.value = data.id;
    name.value = data.name;
    permissionsList.value = permissionsList.value;
    slctdPermissions.value = []
    if(data?.permissions?.length > 0){
        data.permissions.map((item) => {
            permissionsList.value.map((pItem) => {
                if(item.id === pItem.id){
                    slctdPermissions.value.push(pItem)
                }
            })
        })
    }
    console.log('slctdPermissions', slctdPermissions.value)
    // console.log('permissionsList', permissionsList.value)
    
};

const deleteRole = (key) => {
    visibleDeleteRole.value = true;
    id.value = key;
};

const confirmDeleteRole = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/users/delete/${id.value}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value.code === 200) {
        visibleDeleteRole.value = false;
        toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Deleted successfully!', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Employee Deleted Failed!', life: 3000 });
    }
    init();
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('roleList', () =>
        $fetch('http://188.166.212.40/pera/public/api/v1/roles/list', {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        rolesLists.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const permissionList = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('permissionList', () =>
        $fetch('http://188.166.212.40/pera/public/api/v1/permissions/list', {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        permissionsList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
onMounted(() => {
    init();
    permissionList();
    loading.value = false;
});

initFilters();
</script>

<template>
    <div class="card">
        <div class="d-flex mr-2">
            <h5 class="mb-1">User Role</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <Button icon="pi pi-plus" label="Create Role" @click="handleCreateRoleModal" class="mr-2" severity="secondary" />
                <!-- <Button icon="pi pi-file-excel" label="" class="mr-2" severity="secondary" />
                <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" />
                <Button icon="pi pi-users" @click="handleInviteUserModal" label="Invite a guest" severity="secondary" /> -->
            </template>

            <template #end>
                <IconField iconPosition="right" raised>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </IconField>
            </template>
        </Toolbar>

        <DataTable v-model:filters="filters" class="table-st" :value="rolesLists" stripedRows paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
            <Column field="index" header="Serial" sortable></Column>
            <Column field="name" sortable header="Role Name"></Column>
            <Column field="permissions" sortable header="Permission">
            <template #body="slotProps">
                <div v-for="perrmission in slotProps.data.permissions" :key="permission">
                    <div class="">{{ perrmission.name }}</div>
                </div>
            </template>
            </Column>
            <Column field="action" header="Action">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editRole(slotProps.data)" />
                    <!-- <Button icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteRole(slotProps.data.id)" /> -->
                </template>
            </Column>
            <!-- <template #footer> In total there are {{ rolesLists ? rolesLists.length : 0 }} rows. </template> -->
        </DataTable>

        <!-- Create -->
        <Dialog v-model:visible="visibleCreateRole" modal header="Create Role" :style="{ width: '35rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <RoleCreateRole :param="{ permissionsList }" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit -->
        <Dialog v-model:visible="visibleEditRole" modal header="Edit Role" :style="{ width: '35rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <RoleEditRole :param="{ id, name, permissionsList, slctdPermissions }" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <Dialog v-model:visible="visibleDeleteRole" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="visibleDeleteRole = false" />
            <Button label="Yes" icon="pi pi-check" text @click="confirmDeleteRole" />
        </Dialog>
    </div>
</template>

<style lang="scss" scoped>
.table-st {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
}
.table-st thead tr {
    background: #ededed;
}
</style>
