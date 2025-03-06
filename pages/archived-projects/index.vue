<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import accessPermission from '~/composables/usePermission';
const { getSingleSpace, deleteProject, editProject } = useCompanyStore();
const { singleSpace, isProjectDeleted, isProjectEdited } = storeToRefs(useCompanyStore());
const url = useRuntimeConfig();


const editArchiveP = ref(accessPermission('archive_edit'));
const updateProjectP = ref(accessPermission('update_project'));
const deleteProjectP = ref(accessPermission('delete_project'));

definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { onMounted } from 'vue';
const filters = ref();
const loading = ref(true);
const toast = useToast();


// const { spaces } = useRoute().params;
const visible = ref(false);

const archivedProjects = ref([])
const archivesLength = ref(null);

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('tagsList', () =>
        $fetch(`${url.public.apiUrl}/projects/list?is_archive=1`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        archivedProjects.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
        console.log('archivedProjects', archivedProjects.value.length);
        if (archivedProjects.value.length === 1) {
            archivesLength.value = 1;
            
        }else{
            archivesLength.value = null;
        }
        // console.log('archivesLength', archivesLength.value);
    }
};

const refProjectId = ref(null);
const refSpaceId = ref(null);

const unArchiveProjectDialog = ref(false);
const confirmUnArchiveProject = (info) => {
    if(editArchiveP.value === false){
        toast.add({ severity: 'error', summary: 'Error', detail: 'You do not have permission to unarchive project', group: 'br', life: 3000 });
        return;
    }else{
        // console.log('refCompanyId', projectId);
        refProjectId.value = info.id;
        console.log('refCompanyId', refProjectId.value);
        refSpaceId.value = info.space_id;
        unArchiveProjectDialog.value = true;
    }
};



const unArchivingProject = async () => {
    console.log('refCompanyIdFin', refProjectId.value);

    // return
    let archive = 0;
    const editProjectData = {
            id: refProjectId.value,
            // name: projectNameInput.value,
            // description: projectDescriptionInput.value,
            space_id: refSpaceId.value,
            // statuses: transformedTaskStatusList,
            // git_project_id: gitLabProjectId.value,
            is_archive: archive
        };
    await editProject(editProjectData);

    if (isProjectEdited.value === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Project unarchived successfully', group: 'br', life: 3000 });
        if(archivesLength.value === 1){
            location.reload();
        }
        init();
        unArchiveProjectDialog.value = false;
        console.log('space deleted');
        refProjectId.value = null;
        unArchiveLoader.value = false;
        
        
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to unarchive project', group: 'br', life: 3000 });
        console.log('space not deleted');
        refProjectId.value = null;
        unArchiveLoader.value = false;
    }
};

onMounted(() => {
    // const spaceId = spaces;
    init();
    // getSingleSpace(spaceId);
    loading.value = false;
});
// getSingleSpace(spaces);
// watchEffect(() => {
//     loading.value = false;
// });

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();
</script>

<template>
    <div class="card">
        <Toast position="bottom-right" group="br" />
        <!-- <h5>Dashboard > {{ singleSpace?.company_name }} > {{ singleSpace?.name }}</h5> -->
        <div class="d-flex create-space-btn-wrapper mb-3">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home responsive-text"></NuxtLink>
                <p class="pi pi-angle-right"></p>
                <NuxtLink to="/archived-projects" class="text ">Archived Projects</NuxtLink>
                <!-- <p class="pi pi-angle-right responsive-text"></p>
                <NuxtLink class="text responsive-text" :to="`/companies/${singleSpace?.company_id}`"> Company - {{ singleSpace?.company_name }}</NuxtLink>
                <p class="pi pi-angle-right responsive-text"></p>
                <p class="text cursor-pointer responsive-text">Space - {{ singleSpace?.name }}</p> -->
            </div>
            <div class="create-btn-wrapper">
                <!-- <CreateSpecificProject v-if="createProjectP" v-tooltip.left="{ value: 'Create Project' }" :singleSpace="singleSpace" :spaces="spaces" :isPage="isPage" /> -->
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
        <DataTable v-model:filters="filters" class="table-dsp" :value="archivedProjects" stripedRows paginator tableStyle="min-width: 50rem" :rows="20" :rowsPerPageOptions="[5, 10, 20, 50]" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty>
                <p class="py-2 text-center">No Data found...</p>
            </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="index" header="Serial" sortable></Column>
            <Column field="name" header="Project Name">
            </Column>
            <Column field="space_name" header="Under the Space of"></Column>
            <!-- <Column field="teams.length" header="Teams"></Column> -->
            <!-- <Column field="color" header="Space Color"></Column> -->
            <Column header="Action">
                <template #body="slotProps">
                    <!-- <NuxtLink :to="`/companies/${singleSpace.company_id}/spaces/${singleSpace.id}/projects/${slotProps.data.id}`">
                        <Button class="cursor-pointer text-white mr-3 px-5 py-2" label="Enter" />
                    </NuxtLink> -->
                    <!-- <Button v-if="updateProjectP" icon="pi pi-pencil" text class="" severity="success" rounded @click="edittProject(slotProps.data)" /> -->
                    <Button icon="pi pi-upload" text class="" severity="warning" rounded  v-tooltip.top="{ value: `Unarchive` }" @click="confirmUnArchiveProject(slotProps.data)"/>
                    <!-- <Button v-if="deleteProjectP" icon="pi pi-trash" text class="" severity="danger" rounded @click="confirmDeleteProject(slotProps.data.id)" /> -->

                </template>
            </Column>
        </DataTable>
        <Dialog v-model:visible="unArchiveProjectDialog" header=" " dismissableMask="true" :style="{ width: '25rem' }">
            <p>Do you want to <i class="font-bold">unarchive</i> this project?</p>
            <Button label="No" icon="pi pi-times" text @click="unArchiveProjectDialog = false" />
            <Button label="Yes" icon="pi pi-check" :loading="unArchiveLoader" text @click="unArchivingProject" />
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
    border: inherit;
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
