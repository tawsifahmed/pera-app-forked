<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';

import Column from 'primevue/column';

import DataTable from 'primevue/datatable';

import accessPermission from "~/composables/usePermission";

const readTags = ref(accessPermission('read_tags'));
const createTagsP = ref(accessPermission('create_tags'));
const updateTagsP = ref(accessPermission('update_tags'));
const deleteTagsP = ref(accessPermission('delete_tags'));

const filters = ref();

const loading = ref(true);

const toast = useToast();

const visibleCreateTag = ref(false);

const visibleEditTag = ref(false);

const tagsLists = ref([]);

const visibleDeleteTag = ref(false);

const id = ref('');

const name = ref('');

const email = ref('');

const phone = ref('');

const address = ref('');

const closeCreateModal = (evn) => {
    visibleCreateTag.value = false;
    init();
};

const closeEditModal = (evn) => {
    visibleEditTag.value = false;
    init();
};

const handleCreateTagModal = () => {
    visibleCreateTag.value = true;
    init();
};

const editTag = (data) => {
    visibleEditTag.value = true;
    id.value = data.id;
    name.value = data.name;
    email.value = data.email;
    phone.value = data.phone;
    address.value = data.address;
};

const deleteTag = (key) => {
    visibleDeleteTag.value = true;
    id.value = key;
};

const confirmDeleteTag = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tag/delete/${id.value}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if (data.value.code === 200) {
        visibleDeleteTag.value = false;
        toast.add({ severity: 'success', summary: 'Success', detail: 'Tag Deleted successfully!', group: 'br', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Tag Deleted Failed!', group: 'br', life: 3000 });
    }
    init();
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('tagsList', () =>
        $fetch('http://188.166.212.40/pera/public/api/v1/tag/list', {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        tagsLists.value = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));;
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
    <div v-if="readTags" class="card">
        <div class="d-flex mr-2">
            <h5 class="mb-1">Tags</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <Button v-if="createTagsP" icon="pi pi-plus" label="Create Tags" @click="handleCreateTagModal" class="mr-2" severity="secondary" />
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

        <DataTable v-model:filters="filters" class="table-st" :value="tagsLists" stripedRows paginator tableStyle="min-width: 50rem" :rows="15" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #empty> <p class="text-center">No Data found...</p> </template>
            <template #loading> <ProgressSpinner style="width: 50px; height: 50px" /> </template>
            <Column field="index" header="Serial" sortable></Column>

            <Column field="name" sortable header="Tag Name"></Column>
            <!-- <Column field="email" sortable header="Email Address"></Column> -->
            <!-- <Column field="phone" sortable header="Phone Number"></Column> -->
            <Column field="action" header="Action">
                <template #body="slotProps">
                    <Button v-if="updateTagsP" icon="pi pi-pencil" text class="" severity="success" rounded @click="editTag(slotProps.data)" />
                    <Button v-if="!updateTagsP" icon="pi pi-pencil" text class="" severity="success" rounded style="visibility: hidden;" />
                    <Button v-if="deleteTagsP" icon="pi pi-trash" text class="" severity="warning" rounded @click="deleteTag(slotProps.data.id)" />
                    <Button v-if="!deleteTagsP" icon="pi pi-trash" text class="" severity="warning" rounded style="visibility: hidden;" />
                </template>
            </Column>
            <!-- <template #footer> In total there are {{ tagsLists ? tagsLists.length : 0 }} rows. </template> -->
        </DataTable>

        <!-- Create -->
        <Dialog v-model:visible="visibleCreateTag" modal header="Create Tag" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TagsCreateTag @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit -->
        <Dialog v-model:visible="visibleEditTag" modal header="Edit Tag" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TagsEditTag :param="{ id, name }" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <Dialog v-model:visible="visibleDeleteTag" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="visibleDeleteTag = false" />
            <Button label="Yes" icon="pi pi-check" text @click="confirmDeleteTag" />
        </Dialog>

        <!-- Invite User -->
        <Toast position="bottom-right" group="br" />

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
