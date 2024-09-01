<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import accessPermission from '~/composables/usePermission';
const { getSingleSpace, deleteProject } = useCompanyStore();
const { singleSpace, singleSpaceProjects, isProjectDeleted } = storeToRefs(useCompanyStore());

const createProjectP = ref(accessPermission('create_project'));
const updateProjectP = ref(accessPermission('update_project'));
const deleteProjectP = ref(accessPermission('delete_project'));

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

const { spaces } = useRoute().params;
const visible = ref(false);

if (singleSpace.value === undefined) {
    throw createError({ statusCode: 404, message: 'Space not found', fatal: true });
}

const openCreateSpace = () => {
    visible.value = true;
};

const refProjectId = ref(null);

const confirmDeleteProject = (spaceId) => {
    refProjectId.value = spaceId;
    console.log('refCompanyId', refProjectId.value);
    deleteProjectDialog.value = true;
};

const deleteProjectDialog = ref(false);

const deletingProject = async () => {
    console.log('refCompanyIdFin', refProjectId.value);

    // return
    await deleteProject(refProjectId.value, spaces);

    if (isProjectDeleted.value === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Space Deleted Successfully', group: 'br', life: 3000 });
        deleteProjectDialog.value = false;
        console.log('space deleted');
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete space', group: 'br', life: 3000 });
        console.log('space not deleted');
    }
};

watchEffect(() => {
    getSingleSpace(spaces);
    loading.value = false;
});

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

const visibleEditProject = ref(false);

const edittProject = (id) => {
    visibleEditProject.value = true;
    refProjectId.value = id;
};

const closeEditProject = (evn) => {
    visibleEditProject.value = evn;
};
</script>

<template>
    <div class="card">
        <Toast position="bottom-right" group="br" />
        <!-- <h5>Dashboard > {{ singleSpace?.company_name }} > {{ singleSpace?.name }}</h5> -->
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home responsive-text"></NuxtLink>
                <p class="pi pi-angle-right"></p>
                <NuxtLink to="/companies" class="text ">Companies</NuxtLink>
                <p class="pi pi-angle-right responsive-text"></p>
                <NuxtLink class="text responsive-text" :to="`/companies/${singleSpace?.company_id}`"> Company - {{ singleSpace?.company_name }}</NuxtLink>
                <p class="pi pi-angle-right responsive-text"></p>
                <p class="text cursor-pointer responsive-text">Space - {{ singleSpace?.name }}</p>
            </div>
            <div class="create-btn-wrapper">
                <CreateSpecificProject v-if="createProjectP" v-tooltip.left="{ value: 'Create Project' }" :singleSpace="singleSpace" :spaces="spaces" />
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
        <DataTable v-model:filters="filters" class="table-dsp" :value="singleSpaceProjects" stripedRows paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty>
                <p class="py-2 text-center">No Data found...</p>
            </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="index" header="Serial" sortable></Column>
            <Column field="name" header="Project Name">
                <template #body="slotProps">
                    <NuxtLink :to="`/companies/${singleSpace.company_id}/spaces/${singleSpace.id}/projects/${slotProps.data.id}`">
                        <p class="cursor-pointer proj-name hover:text-primary font-semibold">{{ slotProps.data.name }}</p>
                    </NuxtLink>
                </template>
            </Column>
            <Column field="space_name" header="Under the Space of"></Column>
            <!-- <Column field="teams.length" header="Teams"></Column> -->
            <!-- <Column field="color" header="Space Color"></Column> -->
            <Column header="Action">
                <template #body="slotProps">
                    <!-- <NuxtLink :to="`/companies/${singleSpace.company_id}/spaces/${singleSpace.id}/projects/${slotProps.data.id}`">
                        <Button class="cursor-pointer text-white mr-3 px-5 py-2" label="Enter" />
                    </NuxtLink> -->
                    <Button v-if="updateProjectP" icon="pi pi-pencil" text class="" severity="success" rounded @click="edittProject(slotProps.data)" />
                    <Button v-if="deleteProjectP" icon="pi pi-trash" text class="" severity="warning" rounded @click="confirmDeleteProject(slotProps.data.id)" />
                    <Button v-if="!updateProjectP" icon="pi pi-pencil" text class="" severity="success" style="visibility: hidden" />
                    <Button v-if="!deleteProjectP" icon="pi pi-trash" text class="" severity="warning" style="visibility: hidden" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="deleteProjectDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteProjectDialog = false" />
            <Button label="Yes" icon="pi pi-check" text @click="deletingProject" />
        </Dialog>

        <Dialog v-model:visible="visibleEditProject" modal header="Edit Project" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <EditProject :refProjectId="refProjectId" :singleSpace="singleSpace" @closeEditProject="closeEditProject($event)" />
        </Dialog>
    </div>
</template>

<style lang="scss">
.create-btn-wrapper {
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
    @media (max-width: 768px) {
        position: relative;
        left: 19px;
    }
}

.create-space-btn-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .responsive-text {
        @media (max-width: 768px) {
            font-size: 10px;
        }
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

.table-dsp {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;

    td {
        padding: 0.15rem 1rem !important;
    }
}

.table-dsp thead tr {
    background: #ededed;
}

.proj-name {
    color: #3c3c3c !important;
}
</style>
