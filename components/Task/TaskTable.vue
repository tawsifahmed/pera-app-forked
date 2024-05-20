<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';

const { getSingleProject, getTaskAssignModalData } = useCompanyStore();

const toast = useToast();

const { taskStatus, statuslist } = storeToRefs(useCompanyStore());

const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);

const { tasks } = defineProps(['tasks']);

import Column from 'primevue/column';

const usersListStore = useCompanyStore();

const filterAssignees = ref();

const filterPriorities = ref();

const filterStatus = ref();

const filterStartDueDate = ref();

const filterEndDueDate = ref();

const filterSearch = ref();

const usersLists = ref({});

const selectedStatus = ref();

// const countries = ref([
//     { name: 'Open', code: 'AU', logo: 'pi-circle', color: '#314ebe'  },
//     { name: 'Doing', code: 'BR', logo: 'pi-circle', color: '#f59e0b' },
//     { name: 'Dev Done', code: 'CN', logo: 'pi-circle', color: '#10b981' },
// ])

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const route = useRoute();

const id = route.params?.projects;

const changeAttribute = async () => {
    const userIds = filterAssignees.value ? filterAssignees.value.map((item) => item.id) : '';
    const priority = filterPriorities.value ? filterPriorities.value.code : '';
    const status = filterStatus.value ? filterStatus.value.id : '';
    const query = filterSearch.value;

    // console.log(filterStartDueDate.value);
    getSingleProject(id, userIds, priority, status, query, filterStartDueDate.value, filterEndDueDate.value);
}

onMounted(async () => {
    await getSingleProject(id);
    getUserlist();
});

async function handleTaskStatus(status, task_id) {
    try {
        const token = useCookie('token');
        const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/update/${task_id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                status: status?.id
            }
        });

        if (data.value?.app_message === 'success') {
            // getTaskDetails(singleTask.key);
            console.log('Status Changed', data);
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Status Changed', life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change status', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const getUserlist = async () => {
    await getTaskAssignModalData(); // Await the function call
    usersLists.value = usersListStore.users;
};
</script>

<template>
    <div class="filter-wrapper pb-2 mb-1">
        <!-- <pre>{{statuslist}}</pre> -->
        <MultiSelect @change="changeAttribute()" v-model="filterAssignees" :options="usersLists" filter optionLabel="name" placeholder="Select Assignees" :maxSelectedLabels="3" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterPriorities" :options="priorities" optionLabel="name" placeholder="Select Priority" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterStatus" :options="statuslist" optionLabel="name" placeholder="Select Status" class="w-full md:w-17rem mb-2" />
        <!-- <Calendar @change="changeAttribute()" v-model="filterStartDueDate" placeholder="Start Due date" class="w-full md:w-17rem mb-2" />
        <Calendar @change="changeAttribute()" v-model="filterEndDueDate" placeholder="End Due date" class="w-full md:w-17rem" /> -->
    </div>
    <Toolbar class="border-0 px-0">
        <template #start>
            <Button icon="pi pi-plus" label="Create Task" @click="emit('openCreateSpace', '', 'task')" class="mr-2" severity="secondary" />
            <Button icon="pi pi-file-excel" label="" class="mr-2" severity="secondary" />
            <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" />
            <!-- <Button icon="pi pi-users" label="Invite a guest" severity="secondary" /> -->
        </template>

        <template #end>
            <IconField iconPosition="right" raised>
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText @keyup="changeAttribute()" v-model="filterSearch" placeholder="Keyword Search" />
            </IconField>
        </template>
    </Toolbar>
    <TreeTable class="table-st" stripedRows :value="tasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" filterDisplay="menu" style="overflow: auto">
        <template #empty> <p class="text-center">No Data found...</p> </template>
        <!-- <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '50%' }"></Column> -->
        <Column field="name" header="Name" class="cursor-pointer" expander :style="{ width: '50%' }">
            <template #body="slotProps">
                <div class="inline-block">
                    <div class="task-status" v-tooltip.top="{ value: `${slotProps.node.data.status.name}` }">
                        <Dropdown class="mr-1 flex justify-content-center align-items-center" @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)" v-model="slotProps.node.data.status" :options="statuslist" optionLabel="name">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center" :style="{ backgroundColor: slotProps.value.color_code }">
                                    <div :style="{ backgroundColor: slotProps.value.color_code }" class="status-bg"></div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div :style="{ backgroundColor: slotProps.option.color_code }" style="width: 15px; height: 15px; border-radius: 50%" class="p-1 mr-2 pi"></div>
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <!-- <div>{{slotProps.node.data.status.name}}</div> -->
                    <span class="taskTitle" @click="emit('handleTaskDetailView', slotProps.node)">{{ slotProps.node.data.name }}</span>
                </div>
            </template>
        </Column>
        <Column field="assignee" header="Assignee" :style="{ width: '20%' }"></Column>
        <Column field="dueDateValue" header="Due Date" :style="{ width: '10%' }"></Column>
        <Column field="priority" header="Priority" :style="{ width: '10%' }"></Column>
        <Column field="action" header="Action" :style="{ width: '10%' }">
            <template #body="slotProps">
                <div class="action-dropdown">
                    <Button style="width: 30px; height: 30px; border-radius: 50%" icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                    <div class="action-dropdown-content">
                        <Button icon="pi pi-plus" class="mr-2 ac-btn" severity="success" v-tooltip.left="{ value: 'Create Sub Task' }" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                        <Button icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" v-tooltip.top="{ value: 'Edit Task' }" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                        <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info" v-tooltip.top="{ value: 'Task Detail' }" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                        <Button icon="pi pi-trash" class="ac-btn" severity="warning" v-tooltip.top="{ value: 'Delete Task' }" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                    </div>
                </div>
            </template>
        </Column>
    </TreeTable>
</template>

<style>
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

.table-st {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
    width: 100% !important;
}
.table-st thead tr {
    background: #ededed;
}
.filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid rgb(230, 229, 229);
}
.task-status {
    display: inline-block;
    margin-right: 5px;
}
.task-status .p-dropdown-trigger {
    display: none;
}
.task-status .p-dropdown {
    border-radius: 50%;
    width: 15px;
    height: 15px;
}
.task-status .status-bg {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 1;
}
.task-status .p-dropdown-label {
    margin-top: -4px;
}
.taskTitle:hover {
    color: #00c8ff;
    font-weight: 500;
}
</style>
