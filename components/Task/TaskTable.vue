<template>
    <TreeTable class="stabd" v-model:filters="filters" :value="tasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" filterDisplay="menu" style="overflow: auto">
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
        <!-- <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '50%' }"></Column> -->
        <Column field="name" header="Name" class="cursor-pointer" expander :style="{ width: '50%' }">
            <template #body="slotProps">
                <span><i class="pi pi-chevron-circle-down mr-2" style="font-size: 14px"></i>{{ slotProps.node.data.name }}</span>
            </template>
        </Column>
        <Column field="assignee" header="Assignee" :style="{ width: '10%' }"></Column>
        <Column field="dueDate" header="Due Date" :style="{ width: '10%' }"></Column>
        <Column field="priority" header="Priority" :style="{ width: '10%' }"></Column>
        <Column field="action" header="Action" :style="{ width: '20%' }">
            <template #body="slotProps">
                <Button icon="pi pi-plus" class="mr-2" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                <Button icon="pi pi-pencil" class="mr-2" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                <Button icon="pi pi-cog" class="mr-2" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
            </template>
        </Column>
    </TreeTable>
</template>
<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);

const { tasks } = defineProps(['tasks']);

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';

const filters = ref({});

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();
</script>

<style>
.stabd {
    width: 100% !important;
}
</style>
