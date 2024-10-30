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
import accessPermission from '~/composables/usePermission';

const readTask = ref(accessPermission('read_task'));

const usersListStore = useCompanyStore();
const tagsListStore = useCompanyStore();
const { getSingleProject, deleteTask, getTaskAssignModalData, getTagsAssignModalData, getTaskDetails } = useCompanyStore();
const { singleProject, isTaskDeleted, tasks, kanbanTasks } = storeToRefs(useCompanyStore());

const filters = ref({});
const loading = ref(true);
const toast = useToast();
const btnLoading = ref(false);
const singleTask = ref(null);
const task_key = useRoute().query.task_key;
console.log(task_key);
const { projects } = useRoute().params;
const visible = ref(false);

const refTaskId = ref(null);
const taskId = ref(null);
const createTaskTitle = ref(null);

const usersLists = ref([]);
const tagsLists = ref([]);
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
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    await getTagsAssignModalData();
    tagsLists.value = tagsListStore.tags;
};

const handleTaskEdit = async (task) => {
    singleTask.value = task;
    document.documentElement.style.cursor = 'wait';
    document.documentElement.style.position = 'relative';
    const overlayD = document.createElement('div');
    overlayD.style.position = 'absolute';
    overlayD.style.top = '0';
    overlayD.style.left = '0';
    overlayD.style.width = '100%';
    overlayD.style.height = '100%';
    overlayD.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    overlayD.style.zIndex = '1000000';
    document.documentElement.appendChild(overlayD);

    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    await getTagsAssignModalData();
    tagsLists.value = tagsListStore.tags;
    visibleEdit.value = true;
    document.documentElement.style.cursor = 'auto';
    document.documentElement.removeChild(overlayD);
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
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Task Deleted Successfully', group: 'br', life: 3000 });
        deleteTaskDialog.value = false;
    } else {
        btnLoading.value = false;
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete task', group: 'br', life: 3000 });
    }
};

const handleTaskDetailView = async (task) => {
    document.documentElement.style.cursor = 'wait';
    document.documentElement.style.position = 'relative';
    const overlayD = document.createElement('div');
    overlayD.style.position = 'absolute';
    overlayD.style.top = '0';
    overlayD.style.left = '0';
    overlayD.style.width = '100%';
    overlayD.style.height = '100%';
    overlayD.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    overlayD.style.zIndex = '1000000';
    document.documentElement.appendChild(overlayD);
    if (visibleTaskDetailView.value) {
        visibleTaskDetailView.value = false;
    }
    await getTaskDetails(task.key);
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    await getTagsAssignModalData();
    tagsLists.value = tagsListStore.tags;
    visibleTaskDetailView.value = true;
    document.documentElement.style.cursor = 'auto';
    document.documentElement.removeChild(overlayD);
};

console.log('visibleTaskDetailView', visibleTaskDetailView.value);
watch(visibleTaskDetailView, (value) => {
    if(value === true) {
        return 0;
    }else{
        localStorage.removeItem('taskDetailID')
    }
});

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


watch(() => useRoute().query.task_key, (newTaskKey) => {
    if (newTaskKey) {
        handleTaskDetailView({ key: newTaskKey });
    }
});

if (task_key) {
    handleTaskDetailView({ key: task_key });
}

watchEffect(() => {
    loading.value = false;
});
</script>

<template>
    <div class="card">
        <Toast position="bottom-right" group="br" />
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="breadCrumWrap">
                <NuxtLink to="/" class="text pi pi-home"></NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink to="/companies" class="text">Companies</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}`" class="text">Company - {{ singleProject?.company_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <NuxtLink :to="`/companies/${singleProject?.company_id}/spaces/${singleProject?.space_id}`" class="text"> Space - {{ singleProject?.space_name }}</NuxtLink>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text cursor-pointer">Project - {{ singleProject?.name }}</p>
            </div>
        </div>

        <!-- Datatable -->
        <TaskTable
            v-if="readTask"
            :kanbanTasks="kanbanTasks"
            :tasks="tasks"
            @openCreateSpace="openCreateSpace"
            @handleTaskEdit="handleTaskEdit($event)"
            @handleTaskDetailView="handleTaskDetailView($event)"
            @confirmDeleteTask="confirmDeleteTask($event)"
        >
        </TaskTable>

        <!-- Create Task Modal -->
        <Dialog v-model:visible="visible" modal :header="createTaskTitle" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '95vw', '330px': '98vw' }">
            <TaskCreateTask :usersLists="usersLists" :tagsLists="tagsLists" :taskId="taskId" :projects="projects" @closeCreateModal="closeCreateModal($event)" />
        </Dialog>

        <!-- Edit Task Modal -->
        <Dialog v-model:visible="visibleEdit" modal header="Edit Task" :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '95vw' }">
            <TaskEditTask :singleTask="singleTask" :usersLists="usersLists" :tagsLists="tagsLists" :projects="projects" @closeEditModal="closeEditModal($event)" />
        </Dialog>

        <!-- Task Detail Modal -->
        <Dialog v-model:visible="visibleTaskDetailView" modal header=" " :style="{ width: '90rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '95vw' }">
            <TaskDetail
                :usersLists="usersLists"
                :tagsLists="tagsLists"
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
    justify-content: start;
    gap: 5px;
    align-items: start;
    flex-wrap: wrap;
    .text {
        line-height: 1;
        text-wrap: nowrap;
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
