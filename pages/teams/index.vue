<script setup>
import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import CreateTeam from '@/components/Team/CreateTeam.vue';
import EditTeam from '@/components/Team/EditTeam.vue';
import accessPermission from '~/composables/usePermission';
import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';
const usersListStore = useCompanyStore();
const {getTaskAssignModalData } = useCompanyStore();
const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

const readUser = ref(accessPermission('read_user'));
const createUserP = ref(accessPermission('create_user'));
const updateUserP = ref(accessPermission('update_user'));
const deleteUserP = ref(accessPermission('delete_user'));

const filters = ref();

const loading = ref(true);
const loading1 = ref(false);
const loading2 = ref(false);

const toast = useToast();

const visibleCreateTeam = ref(false);

const visibleEditTeam = ref(false);

const usersLists = ref([]);

const teamLists = ref([]);

const visibleDeleteTeam = ref(false);

const id = ref('');

const editName = ref('');

const editDescription = ref('');

const editLineManager = ref(null)

const editTeamLead = ref(null)

const editMembers = ref(null)

const closeCreateModal = (evn) => {
    visibleCreateTeam.value = false;
    init();
};

const closeEditModal = (evn) => {
    visibleEditTeam.value = false;
    init();
};

const handleCreateCompanyModal = async () => {
    loading1.value = true;
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    visibleCreateTeam.value = true;
    loading1.value = false;
};

const editTeam =  (data) => {
    console.log('editTeamdata', data);
    id.value = data.id;
    visibleEditTeam.value = true;
    editName.value = data.name;
    editDescription.value = data.description;
    editLineManager.value = {
        id: data.children.data.id,
        name: data.children.data.name
    };
    console.log('editLineManager', editLineManager.value);
    editTeamLead.value = {
        id: data.children.children.data.id,
        name: data.children.children.data.name
    };
    console.log('editTeamLead', editTeamLead.value);
    editMembers.value = data.children.children.children.map((item) => ({ id: item.data.id, name: item.data.name }));
    console.log('editMembers', editMembers.value);
};

const deleteTeam = (key) => {
    visibleDeleteTeam.value = true;
    id.value = key;
};

const confirmDeleteTeam = async () => {
    loading2.value = true;
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/teams/delete/${id.value}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value.code === 200) {
        visibleDeleteTeam.value = false;
        toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Deleted successfully!', group: 'br', life: 3000 });
        loading2.value = false;
        init();
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Employee Deleted Failed!', group: 'br', life: 3000 });
        loading2.value = false;
    }
    
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('getTeams', () =>
        $fetch(`${url.public.apiUrl}/teams/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        teamLists.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
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
    <div v-if="readUser" class="card">
        <div class="d-flex mr-2">
            <Toast position="bottom-right" group="br" />
            <div class="d-flex mr-2">
                <h5 class="mb-1">Teams</h5>
            </div>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <Button v-if="createUserP" icon="pi pi-plus" label="Create" @click="handleCreateCompanyModal" class="mr-2" severity="secondary" :loading="loading1" />
                <!-- <Button icon="pi pi-file-excel" label="" class="mr-2" severity="secondary" /> -->
                <!-- <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" /> -->
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

        <DataTable v-model:filters="filters" class="table-st" :value="teamLists" stripedRows paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /></template>
            <Column field="index" header="Serial" sortable style="width: 5%;"></Column>
            <Column field="name" header="Team Name" style="width: 15%;"></Column>
            <Column field="description" header="Description" style="width: 20%;"></Column>
            <Column field="Line Manager" header="Line Manager" style="width: 10%;">
                <template #body="slotProps"> 
                    <div>
                        {{slotProps?.data?.children?.data?.name}}
                    </div>
                </template>
            </Column>
            <Column field="Line Manager" header="Team Lead" style="width: 10%;">
                <template #body="slotProps"> 
                    <div>
                        {{slotProps?.data?.children?.children?.data?.name}}
                    </div>
                </template>
            </Column>
            <Column field="Members" header="Members" style="width: 30%;">
                <template #body="slotProps"  > 
                    <div style="display: flex; flex-wrap: wrap;">
                        <div v-for="child in slotProps?.data?.children?.children?.children" :key="child" style="display: flex; flex-wrap: wrap; gap: 5px">
                            <div v-for="ch in child" :key="ch">
                                <div class="mb-1" :style="ch.name ? 'border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px' : ' '">
                                    {{ch.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Column>
            <Column field="action" header="Action" style="width: 10%;">
                <template #body="slotProps">
                    <Button v-if="updateUserP" icon="pi pi-pencil" text class="mr-2" severity="success" rounded @click="editTeam(slotProps.data)" />
                    <Button v-if="!updateUserP" icon="pi pi-pencil" text class="mr-2" severity="success" rounded style="visibility: hidden" />
                    <Button v-if="deleteUserP" icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteTeam(slotProps.data.id)" />
                    <Button v-if="!deleteUserP" icon="pi pi-trash" text class="" severity="warning" rounded style="visibility: hidden" />
                </template>
            </Column>
            <template #footer> In total there are {{ usersLists ? usersLists.length : 0 }} rows. </template>
        </DataTable>

        <!-- Create -->
        <Dialog v-model:visible="visibleCreateTeam" modal header="Create Team" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <CreateTeam :param="{ usersLists }" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit -->
        <Dialog v-model:visible="visibleEditTeam" modal header="Edit Team" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <EditTeam :param="{ id, editName, editDescription, editLineManager, editTeamLead, editMembers }" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <Dialog v-model:visible="visibleDeleteTeam" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="visibleDeleteTeam = false" />
            <Button label="Yes" icon="pi pi-check" text @click="confirmDeleteTeam" :loading="loading2" />
        </Dialog>
    </div>
</template>

<style lang="scss" scoped>
.table-st {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
}
.table-st thead tr {
    background: #ededed;
}
</style>
