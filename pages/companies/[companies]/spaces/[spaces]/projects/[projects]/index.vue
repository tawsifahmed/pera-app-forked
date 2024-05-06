<template>
    <div class="card">
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}`" class="text">Company - {{ singleProject?.company_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}/spaces/${singleProject?.space_id}`" class="text"> Company - {{ singleProject?.space_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text cursor-pointer">Project - {{ singleProject?.name }}</p>
            </div>
            <div class="create-btn-wrapper">
                <Button @click="openCreateSpace('', 'task')" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Task +" />
            </div>
        </div>

        <!-- Datatable -->
        <div class="card">
            <!-- <pre>{{singleProject.statuses[0].project_id}}</pre> -->
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
                <Column class="cursor-pointer" field="name" header="Name" expander></Column>
                <Column field="assignee" header="Assignee"></Column>
                <Column field="dueDate" header="Due Date"></Column>
                <Column field="priority" header="Priority"></Column>
                <Column field="action" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-plus" class="mr-2" severity="success" @click="openCreateSpace(slotProps.node.key, 'sub-task')" rounded />
                        <Button icon="pi pi-pencil" class="mr-2" severity="success" @click="handleTaskEdit(slotProps.node)" rounded />
                        <Button icon="pi pi-cog" class="mr-2" severity="info" @click="handleTaskDetailView(slotProps.node)" rounded />
                        <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteTask(slotProps.node.key)" />
                    </template>
                </Column>
            </TreeTable>
        </div>

        <!-- Create Task Modal -->
        <Dialog v-model:visible="visible" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskCreateTask :createTaskTitle="createTaskTitle" :taskId="taskId" :projects="projects" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit Task Modal -->
        <Dialog v-model:visible="visibleEdit" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskEditTask :singleTask="singleTask" :usersLists="usersLists" :projects="projects" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <!-- Task Detail Modal -->
        <Dialog v-model:visible="visibleTaskDetailView" modal header=" " :style="{ width: '80rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskDetail :singleTask="singleTask" :projID="projects" />
        </Dialog>

        <!-- Delete Task Modal -->
        <Dialog v-model:visible="deleteTaskDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteTaskDialog = false" />
            <Button label="Yes" icon="pi pi-check" :loading="btnLoading" text @click="deletingTask" />
        </Dialog>
    </div>
</template>
<script setup>
// Access users data
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { storeToRefs } from 'pinia';
import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';

const usersListStore = useCompanyStore();
const { getSingleProject, editTask, deleteTask, getTaskAssignModalData, addTaskComment, getTaskDetails } = useCompanyStore();
const { singleProject, isTaskDeleted, isTaskEdited, tasks, isTaskCommentCreated } = storeToRefs(useCompanyStore());

const filters = ref({});
const loading = ref(true);
const toast = useToast();
const btnLoading = ref(false);
const singleTask = ref(null);

const { projects } = useRoute().params;
const visible = ref(false);

const refTaskId = ref(null);
const taskId = ref(null);
const createTaskTitle = ref(null);

const taskNameEditInput = ref(null);
const taskEditDescriptionInput = ref(null);
const priority = ref(null);
const dueDate = ref(null);
const assignees = ref([]);
const refTaskIdForEdit = ref(null);
const usersLists = ref([]);
const visibleEdit = ref(false);
const deleteTaskDialog = ref(false);
const visibleTaskDetailView = ref(false);

const openCreateSpace = (key, type) => {
    if (key) {
        taskId.value = key;
    } else {
        taskId.value = '';
    }
    if (type == 'sub-task') {
        createTaskTitle.value = 'Create Sub Task';
    } else {
        createTaskTitle.value = 'Create Task';
    }
    visible.value = true;
};

const handleTaskEdit = async (task) => {
    singleTask.value = task;

    await getTaskAssignModalData(); // Await the function call
    usersLists.value = usersListStore.users;
    refTaskIdForEdit.value = task.key;
    taskNameEditInput.value = task.data.name;
    taskEditDescriptionInput.value = task.data.description;
    priority.value = task.data.priority ? { name: task.data.priority, code: task.data.priority } : '';
    assignees.value = task.data.assigneeObj;
    dueDate.value = task.data.dueDate;
    visibleEdit.value = true;
};

const confirmDeleteTask = (taskId) => {
    refTaskId.value = taskId;
    console.log('refCompanyId', refTaskId.value);
    deleteTaskDialog.value = true;
};


const deletingTask = async () => {
    btnLoading.value = true;
    await deleteTask(refTaskId.value, projects);
    if (isTaskDeleted.value === true) {
        btnLoading.value = false;
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task Deleted Successfully', life: 3000 });
        deleteTaskDialog.value = false;
    } else {
        btnLoading.value = false;
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete task', life: 3000 });
    }
};

const handleTaskDetailView = (task) => {
    singleTask.value = task;
    refTaskId.value = task.key;
    taskNameEditInput.value = task.data.name;
    // getTaskDetails(task.key);
    visibleTaskDetailView.value = true;
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();

const closeCreateModal = (evn) => {
    visible.value = evn;
};

const closeEditModal = (evn) => {
    visibleEdit.value = evn;
};

watchEffect(() => {
    getSingleProject(projects);
    loading.value = false;
});
</script>

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
    //font-size: 14px !important;
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

.task-detail {
}

.cmc {
    text-wrap: nowrap;
}

.comment-wrapper {
    overflow: hidden;
    height: 70vh;
    //border: 1px solid #e2e8f0;
    //border-radius: 5px;
    padding: 5px !important;
    background-color: #f7fafc;
}

.comments {
    overflow-y: auto;
    height: 90%;
    padding: 5px;
}

.comment-add {
    padding: 20px;
    margin-bottom: 15px;
    border-top: 1px solid #e2e8f0;
    padding: 10px;
    width: 100%;
    position: relative;
}

.formgroup-inline {
    flex-wrap: nowrap;
}
.formgroup-inline .field {
    width: 90% !important;
}

.formgroup-inline .field input {
    width: 100% !important;
}

.float-right {
    float: right;
    font-size: 12px;
    color: gray;
}

.task-edit {
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
}

.p-fileupload-buttonbar:last-child {
    display: none !important;
}
</style>
