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
                <span>
                    <!-- <i @click="showTaskStatuses" class="pi pi-chevron-circle-down mr-2" style="font-size: 14px;"></i> -->
                    {{ slotProps.node.data.name }}</span>
            </template>
        </Column>
        <Column field="assignee" header="Assignee" :style="{ width: '10%' }"></Column>
        <Column field="dueDate" header="Due Date" :style="{ width: '10%' }"></Column>
        <Column field="priority" header="Priority" :style="{ width: '10%' }"></Column>
        <Column field="action" header="Action" :style="{ width: '20%' }">
            <template #body="slotProps">
                <div class="action-dropdown">
                    <Button style="width: 30px; height: 30px; border-radius: 50%;"
                        icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                    <div class="action-dropdown-content">
                        <Button icon="pi pi-plus" class="mr-2 ac-btn" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                        <Button icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                        <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                        <Button icon="pi pi-trash" class=" ac-btn" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                    </div>
                </div>
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


.action-dropdown {
    position: relative;
    display: inline-block;
}

.action-dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.action-dropdown-content button {
    width: 100%;
    text-align: left;
    padding: 10px;
    border: none;

}

.action-dropdown:hover .action-dropdown-content {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 10px 5px;
    top: -50px;
    left: -124px;
    border-radius: 5px;
}

.ac-btn {
    height: 30px !important;
    width: 30px !important;
    font-size: 11px !important;

    .pi {
        font-size: 11px !important;

    }
}
</style>
