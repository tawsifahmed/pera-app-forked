<script setup>
import { storeToRefs } from 'pinia';
import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';
const { getSingleProject, createTask, editTask, deleteTask } = useCompanyStore();
const { singleProject, isTaskCreated, isTaskDeleted, isTaskEdited, tasks } = storeToRefs(useCompanyStore());

definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
const filters = ref();
const loading = ref(true);
const toast = useToast();

const { projects } = useRoute().params;
console.log('projectParams,', projects);
const visible = ref(false);
const visibleEdit = ref(false);

const refTaskId = ref(null);

import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();

// if(singleSpace.value === undefined){
// throw createError({statusCode: 404, message: 'Space not found', fatal: true})
// }

const openCreateSpace = () => {
    visible.value = true;
};

// task create

const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const taskNameInput = ref(null);

const taskDescriptionInput = ref(null);

const handleCreateTask = async () => {
    if (taskNameInput.value === null || taskDescriptionInput.value === null) {
        errorHandler.value = true;
        // return
    } else {
        errorHandler.value = false;
        const createTaskData = {
            name: taskNameInput.value,
            description: taskDescriptionInput.value,
            project_id: projects
            // 'color': spaceAvatarPreview.value,
            // 'shared_status': selectedShareSpace.value,
            // 'task_statuses': taskStatusList.value,
            // 'features': selectedFeatures.value,
            // 'views': checkedViews,
        };
        console.log('taskData', createTaskData);

        // return
        await createTask(createTaskData);

        if (isTaskCreated.value === true) {
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            visible.value = false;
            taskNameInput.value = null;
            taskDescriptionInput.value = null;
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task created Successfully', life: 3000 });
            spaceFormInputs.value = true;
            showFinalMsg.value = false;
            console.log('task created');
        } else {
            console.log('task not created');
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to create task!', life: 3000 });
        }
    }
};

const taskNameEditInput = ref(null);
const taskEditDescriptionInput = ref(null);

const refTaskIdForEdit = ref(null);
const edittingTask = (task) => {
    console.log('task', task);
    visibleEdit.value = true;
    refTaskIdForEdit.value = task.key;
    console.log('refTaskIdForEdit', refTaskIdForEdit.value);
    taskNameEditInput.value = task.data.name;
    taskEditDescriptionInput.value = task.data.description;
};

const spaceEditFormInputs = ref(true);

const showEditFinalMsg = ref(false);

const EditErrorHandler = ref(false);

const handleUpdateTask = async () => {
    if (taskNameEditInput.value === null || taskEditDescriptionInput.value === null) {
        EditErrorHandler.value = true;
        // return
    } else {
        EditErrorHandler.value = false;

        let id = refTaskIdForEdit.value;
        const editTaskData = {
            id: refTaskIdForEdit.value,
            name: taskNameEditInput.value,
            description: taskEditDescriptionInput.value,
            project_id: projects
            // 'color': spaceAvatarPreview.value,
            // 'shared_status': selectedShareSpace.value,
            // 'task_statuses': taskStatusList.value,
            // 'features': selectedFeatures.value,
            // 'views': checkedViews,
        };
        console.log('taskData', editTaskData);

        // return
        await editTask(editTaskData);

        if (isTaskEdited.value === true) {
            spaceEditFormInputs.value = false;
            showEditFinalMsg.value = true;
            visibleEdit.value = false;
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task updated Successfully', life: 3000 });
            spaceEditFormInputs.value = true;
            showEditFinalMsg.value = false;
            console.log('task updated');
        } else {
            console.log('task not updated');
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task!', life: 3000 });
        }
    }
};

const confirmDeleteTask = (taskId) => {
    refTaskId.value = taskId;
    console.log('refCompanyId', refTaskId.value);
    deleteTaskDialog.value = true;
};

const deleteTaskDialog = ref(false);

const deletingTask = async () => {
    console.log('refTaskIdFin', refTaskId.value);

    // return
    await deleteTask(refTaskId.value, projects);

    if (isTaskDeleted.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task Deleted Successfully', life: 3000 });
        deleteTaskDialog.value = false;
        console.log('space deleted');
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete task', life: 3000 });
        console.log('space not deleted');
    }
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

watchEffect(() => {
    getSingleProject(projects);
    loading.value = false;
});
console.log('task:' + singleProject?.tasks);

// const breadcrumbHome = ref({ icon: 'pi pi-home', to: '/' });
// const breadcrumbItems = ref([{ label: `Company - ${singleProject.value.company_name}` }, { label: `Space - ${singleProject.value.space_name}` }, { label: `Project - ${singleProject.value.name}` }]);
</script>

<template>
    <div class="card">
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}`" class="text">Company - {{ singleProject?.company_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}/spaces/${singleProject?.space_id}`" class="text"> Space - {{ singleProject?.space_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text cursor-pointer">Project - {{ singleProject?.name }}</p>
            </div>
            <div class="create-btn-wrapper">
                <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Task +" />
                <Dialog v-model:visible="visible" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
                        <div v-if="spaceFormInputs">
                            <h4 class="text-center text-primary">Create Task</h4>

                            <!-- <div class="company-name flex justify-center text-center mb-6">
                      <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Project: {{singleProject?.name}}</p>
                    </div> -->
                            <div>
                                <FloatLabel class="mt-4 mb-2">
                                    <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskNameInput" />
                                    <label>Set Task Name</label>
                                </FloatLabel>
                            </div>
                            <div class="">
                                <FloatLabel class="mt-4 mb-2">
                                    <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskDescriptionInput" />
                                    <label>Set Task Description</label>
                                </FloatLabel>
                            </div>
                            <br />
                            <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
                            <br />
                            <div class="create-btn-wrappe">
                                <Button @click="handleCreateTask" class="text-white py-2 px-6 tracking-wide" label="Create Task" />
                            </div>
                        </div>

                        <div v-if="showFinalMsg">
                            <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Task created successfully</h3>

                            <div class="centering">
                                <FloatLabel>
                                    <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                                    <!-- <p class="text-center mb-2">You can close the modal now.</p> -->
                                </FloatLabel>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <Dialog v-model:visible="visibleEdit" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
                        <div v-if="spaceEditFormInputs">
                            <h4 class="text-center text-primary">Edit Task</h4>

                            <!-- <div class="company-name flex justify-center text-center mb-6">
                      <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Project: {{singleProject?.name}}</p>
                    </div> -->
                            <div>
                                <FloatLabel class="mt-4 mb-2">
                                    <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskNameEditInput" />
                                    <label>Set Task Name</label>
                                </FloatLabel>
                            </div>
                            <div class="">
                                <FloatLabel class="mt-4 mb-2">
                                    <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskEditDescriptionInput" />
                                    <label>Set Task Description</label>
                                </FloatLabel>
                            </div>
                            <br />
                            <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields</p>
                            <br />
                            <div class="create-btn-wrappe">
                                <Button @click="handleUpdateTask" class="text-white py-2 px-6 tracking-wide" label="Update Task" />
                            </div>
                        </div>

                        <div v-if="showEditFinalMsg">
                            <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Task created successfully</h3>

                            <div class="centering">
                                <FloatLabel>
                                    <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                                    <!-- <p class="text-center mb-2">You can close the modal now.</p> -->
                                </FloatLabel>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
            </div>
        </div>
        <!-- <DataTable class="stabd" v-model:filters="filters" :value="singleProject?.tasks" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
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
            <template #empty> No Data found... </template>
            <template #loading> Loading data. Please wait. </template>
            <Column field="name" header="Task Name"></Column>
            <Column field="description" header="Task Description"></Column>
            <Column field="project_name" header="Project"></Column>

            <Column header="Action">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="mr-2" severity="success" @click="edittingTask(slotProps.data)" rounded />
                    <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteTask(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable> -->
        <div class="card">
            <TreeTable class="stabd" :value="tasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                <Column field="name" header="Name" expander></Column>
                <Column field="assignee" header="Assignee"></Column>
                <Column field="dueDate" header="Due Date"></Column>
                <Column field="priority" header="Priority"></Column>
                <Column field="action" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-plus" class="mr-2" severity="success" rounded />
                        <Button icon="pi pi-pencil" class="mr-2" severity="success" @click="edittingTask(slotProps.node)" rounded />
                        <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteTask(slotProps.node.key)" />
                    </template>
                </Column>
            </TreeTable>
        </div>

        <Dialog v-model:visible="deleteTaskDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteTaskDialog = false" />
            <Button label="Yes" icon="pi pi-check" text @click="deletingTask" />
        </Dialog>
    </div>
</template>

<style lang="scss" scoped>
.create-btn-wrapper {
    display: flex;
    margin-bottom: 15px;
    justify-content: end;
}

.create-btn-wrappe {
    display: flex;
    justify-content: center;
}
/* Add your custom styles here */

.company-name {
    display: flex;
    justify-content: center;
    p {
        border-radius: 5px;
    }
}

.stabd {
    td {
        border-left: none !important;
        border-right: none !important;
    }
}

.create-space-btn-wrapper {
    display: flex;
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
