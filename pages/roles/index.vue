<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const url = useRuntimeConfig();
import { FilterMatchMode } from 'primevue/api';

import Column from 'primevue/column';

import DataTable from 'primevue/datatable';

import accessPermission from '~/composables/usePermission';

const readRole = ref(accessPermission('read_role'));
const createRoleP = ref(accessPermission('create_role'));
const updateRoleP = ref(accessPermission('update_role'));

const filters = ref();

const loading = ref(true);

const toast = useToast();

import Dialog from 'primevue/dialog';

const visibleCreateRole = ref(false);

const visibleEditRole = ref(false);

const rolesLists = ref([]);

const permissionsList = ref([]);

const slctdPermissions = ref([]);

const id = ref('');

const name = ref('');

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
    slctdPermissions.value = [];
    if (data?.permissions?.length > 0) {
        data.permissions.map((item) => {
            permissionsList.value.map((pItem) => {
                if (item.id === pItem.id) {
                    slctdPermissions.value.push(pItem);
                }
            });
        });
    }
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('roleList', () =>
        $fetch(`${url.public.apiUrl}/roles/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        rolesLists.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
    }
};

const groupPermissions = ref([]);
const permissionList = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('permissionList', () =>
        $fetch(`${url.public.apiUrl}/permissions/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        permissionsList.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
        groupPermissions.value = Object.entries(data.value.group).map(([groupName, permissions]) => ({
            group: groupName,
            children: permissions.map(permission => ({
                id: permission.id,
                name: permission.name
            }))
        }));
        console.log(groupPermissions.value);
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
    <div v-if="readRole" class="card">
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">User Role</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <Button v-if="createRoleP" icon="pi pi-plus" label="Create" @click="handleCreateRoleModal" class="mr-2" severity="secondary" />
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

        <DataTable v-model:filters="filters" class="table-stR" :value="rolesLists" stripedRows paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
            <Column field="index" header="Serial" sortable></Column>
            <Column style="text-wrap: nowrap" field="name" header="Role Name"></Column>
            <Column field="permissions" header="Permission">
                <template #body="slotProps">
                    <div style="display: flex; flex-wrap: wrap; gap: 5px">
                        <div class="border rounded" v-for="perrmission in slotProps.data.permissions" :key="permission" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                            <p>{{ perrmission.name }}</p>
                        </div>
                    </div>
                </template>
            </Column>
            <Column field="action" header="Action">
                <template #body="slotProps">
                    <Button v-if="updateRoleP" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editRole(slotProps.data)" />
                    <Button v-if="!updateRoleP" icon="pi pi-pencil" text class="mr-2" severity="success" rounded style="visibility: hidden" />
                    <!-- <Button icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteRole(slotProps.data.id)" /> -->
                </template>
            </Column>
            <!-- <template #footer> In total there are {{ rolesLists ? rolesLists.length : 0 }} rows. </template> -->
        </DataTable>

        <!-- Create -->
        <Dialog v-model:visible="visibleCreateRole" modal header="Create Role" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <RoleCreateRole :param="{ permissionsList, groupPermissions }" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit -->
        <Dialog v-model:visible="visibleEditRole" modal header="Edit Role" :style="{ width: '35rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <RoleEditRole :param="{ id, name, permissionsList, slctdPermissions }" @closeEditModal="closeEditModal($event)" />
        </Dialog>
    </div>
</template>

<style lang="scss">
.table-stR {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
    .p-datatable-tbody {
        vertical-align: top !important;
    }
}
.table-stR thead tr {
    background: #ededed;
}
</style>
