<script setup>
// Access users data 
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { storeToRefs } from 'pinia';
import { FilterMatchMode } from 'primevue/api';
import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';

const usersListStore = useCompanyStore();
const { getSingleProject, deleteTask, getTaskAssignModalData, getTaskDetails } = useCompanyStore();
const { singleProject, isTaskDeleted, tasks } = storeToRefs(useCompanyStore());

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

const openCreateSpace = async (key, type) => {
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
    await getTaskAssignModalData(); // Await the function call
    usersLists.value = usersListStore.users;
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

const handleTaskDetailView = async (task) => {
    if (visibleTaskDetailView.value) {
        visibleTaskDetailView.value = false;
    }
    singleTask.value = task;
    refTaskId.value = task.key;
    taskNameEditInput.value = task.data.name;
    // getTaskDetails(task.key);
    await getTaskAssignModalData(); // Await the function call
    usersLists.value = usersListStore.users;
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

const updateTaskTable = () => {
    getSingleProject(projects);
};

getSingleProject(projects);

watchEffect(() => {
    
    loading.value = false;
});
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
        </div>

        <!-- Datatable -->
        <div class="card">
            <TaskTable :tasks="tasks" @openCreateSpace="openCreateSpace" @handleTaskEdit="handleTaskEdit($event)" @handleTaskDetailView="handleTaskDetailView($event)" @confirmDeleteTask="confirmDeleteTask($event)"> </TaskTable>
        </div>

        <!-- Create Task Modal -->
        <Dialog v-model:visible="visible" modal :header="createTaskTitle" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskCreateTask :usersLists="usersLists" :taskId="taskId" :projects="projects" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit Task Modal -->
        <Dialog v-model:visible="visibleEdit" modal header="Edit Task" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskEditTask :singleTask="singleTask" :usersLists="usersLists" :projects="projects" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <!-- Task Detail Modal -->
        <Dialog v-model:visible="visibleTaskDetailView" modal header=" " :style="{ width: '90rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskDetail
                :singleTask="singleTask"
                :usersLists="usersLists"
                :projID="projects"
                @openCreateSpace="openCreateSpace"
                @handleTaskEdit="handleTaskEdit($event)"
                @handleTaskDetailView="handleTaskDetailView($event)"
                @confirmDeleteTask="confirmDeleteTask($event)"
                @updateTaskTable="updateTaskTable"
            />
        </Dialog>

        <!-- Delete Task Modal -->
        <Dialog v-model:visible="deleteTaskDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteTaskDialog = false" />
            <Button label="Yes" icon="pi pi-check" :loading="btnLoading" text @click="deletingTask" />
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
