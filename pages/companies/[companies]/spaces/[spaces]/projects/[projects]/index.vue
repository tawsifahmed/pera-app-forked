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
                <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Task +" />

                

                
            </div>
        </div>
        <div class="card">
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
                        <Button icon="pi pi-bars" class="mr-2" severity="info" @click="handleTaskDetailView(slotProps.node)" rounded />
                        <Button icon="pi pi-plus" class="mr-2" severity="success" @click="handleTaskEdit(slotProps.node)" rounded />
                        <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteTask(slotProps.node.key)" />
                    </template>
                </Column>
            </TreeTable>
        </div>

        <!-- Create Task Modal -->
        <Dialog v-model:visible="visible" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
                <div v-if="spaceFormInputs">
                    <h4 class="text-center text-primary">Create Task</h4>
                    <div>
                        <FloatLabel class="mt-4 mb-2">
                            <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskNameInput" />
                            <label>Set Task Name</label>
                        </FloatLabel>
                    </div>
                    <!-- <div class="">
                        <FloatLabel class="mt-4 mb-2">
                            <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskDescriptionInput" />
                            <label>Set Task Description</label>
                        </FloatLabel>
                    </div> -->
                    <br />
                    <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
                    <br />
                    <div class="create-btn-wrappe">
                        <Button @click="handleCreateTask" class="text-white py-2 px-6 tracking-wide" label="Create Task" :loading="btnLoading" />
                    </div>
                </div>

                <div v-if="showFinalMsg">
                    <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Task created successfully</h3>
                </div>
            </div>
        </Dialog>

        <!-- Edit Task Modal -->
        <Dialog v-model:visible="visibleEdit" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
                <div v-if="spaceEditFormInputs">
                    <h4 class="text-center text-primary">Task</h4>
                    <div>
                        <FloatLabel class="mt-4 mb-2">
                            <InputText type="text" class="w-full px-2 py-2 shadow border task-edit" v-model="taskNameEditInput" />
                            <label>Set Task Name</label>
                        </FloatLabel>
                    </div>
                    <!-- <div class="">
                        <FloatLabel class="mt-4 mb-2">
                            <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskEditDescriptionInput" />
                            <label>Set Task Description</label>
                        </FloatLabel>
                    </div> -->
                    <div class="mt-4">
                        <FloatLabel class="mb-2">
                            <MultiSelect v-model="assignees" :options="usersLists" optionLabel="name" placeholder="" :maxSelectedLabels="3" class="w-full" />
                            <label>Select Assignee</label>
                        </FloatLabel>
                    </div>
                    <div class="mt-4">
                        <FloatLabel class="mb-2">
                            <Calendar v-model="due_date" class="w-full" />
                            <label>Due Date</label>
                        </FloatLabel>
                    </div>
                    <div class="mt-4">
                        <FloatLabel class="mb-2">
                            <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="" class="w-full" />
                            <label>Selete Priority</label>
                        </FloatLabel>
                    </div>

                    <br />
                    <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields</p>
                    <br />
                    <div class="create-btn-wrappe">
                        <Button @click="handleUpdateTask" class="text-white py-2 px-6 tracking-wide" label="Save" :loading="btnLoading" />
                    </div>
                </div>

                <div v-if="showEditFinalMsg">
                    <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Task created successfully</h3>
                </div>
            </div>
        </Dialog>
    
        <!-- Delete Task Modal -->
        <Dialog v-model:visible="deleteTaskDialog" header=" " :style="{ width: '25rem' }">
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteTaskDialog = false" />
            <Button label="Yes" icon="pi pi-check" :loading="btnLoading" text @click="deletingTask" />
        </Dialog>
        
        <!-- Task Detail Modal -->
        <Dialog  v-model:visible="visibleTaskDetailView" modal header=" " :style="{ width: '80rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="grid">
                <div class="col-12 lg:col-7">
                    <div class="task-detail">
                        <h5>Task Info</h5>
                        <div class="card">
                            <div class="mb-3">
                                <label>Name: {{ taskNameEditInput }}</label>
                            </div>
                            <div class="field flex flex-column">
                                <label for="name">Description:</label>
                                <Textarea id="description" v-model="taskEditDescriptionInput"  rows="3" cols="20" />
                            </div>
                            <!-- <div class="mb-1">
                                <label>Attachment:</label>
                            </div>
                            <form @submit.prevent="submitForm">
                                <input type="file" ref="fileInput" @change="handleFileChange">
                                <button type="submit">Upload</button>
                              </form> -->
                        
                              
                            
                            
                            <div class="flex justify-content-end ">
                                <Button @click="handleAttachmentSubmit" label="Submit" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 lg:col-5">
                    <div>
                        <h5 class="cmc">Comments</h5>
                        <div class="comment-wrapper card">
                                <div class="comments">
                                    <Card  class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                                        <template class="commentator-name" #title>{{ val.commentator_name }}</template>
                                        <template #content>
                                            <p class="m-0">
                                             {{ val.comment }}
                                            </p>
                                            <i class="float-right "> {{ val.time }} </i>
                                        </template>
                                    </Card>
                                </div>
                            
                            
                            <div class="comment-add">                        
                                <form @submit.prevent="handleTaskComment" class="formgroup-inline">
                                    <div class="field">
                                        <InputText v-model="taskCommentInput" type="text" required placeholder="Add comment" />
                                    </div>
        
                                    <Button type="submit" label="Add" :loading="btnLoading" />

                                    <!-- <Button type="submit" label="Add" v-tooltip="'Click to proceed'" /> -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Dialog>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';
const { getSingleProject, createTask, editTask, deleteTask, getTaskAssignModalData, addTaskComment, getSingleTaskComments } = useCompanyStore();
const { singleProject, isTaskCreated, isTaskDeleted, isTaskEdited, tasks, isTaskCommentCreated, singleTaskComments } = storeToRefs(useCompanyStore());

const usersListStore = useCompanyStore();
// Access users data
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
const filters = ref({});
const loading = ref(true);
const toast = useToast();
const btnLoading = ref(false);

const { projects } = useRoute().params;
const visible = ref(false);
const refTaskId = ref(null);

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
    btnLoading.value = true;
    if (taskNameInput.value === null) {
        errorHandler.value = true;
    } else {
        errorHandler.value = false;
        const createTaskData = {
            name: taskNameInput.value,
            description: taskDescriptionInput.value,
            project_id: projects
        };
        // return
        await createTask(createTaskData);
        if (isTaskCreated.value === true) {
            btnLoading.value = false;
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            visible.value = false;
            taskNameInput.value = null;
            taskDescriptionInput.value = null;
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task created Successfully', life: 3000 });
            spaceFormInputs.value = true;
            showFinalMsg.value = false;
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to create task!', life: 3000 });
        }
    }
};

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const taskNameEditInput = ref(null);
const taskEditDescriptionInput = ref(null);
const priority = ref(null);
const due_date = ref(null);
const assignees = ref([]);
const refTaskIdForEdit = ref(null);
const usersLists = ref([]);
const visibleEdit = ref(false);

const handleTaskEdit = async (task) => {
    await getTaskAssignModalData(); // Await the function call
    console.log(formatDate(task.data.dueDate));
    usersLists.value = usersListStore.users;
    visibleEdit.value = true;
    refTaskIdForEdit.value = task.key;
    taskNameEditInput.value = task.data.name;
    taskEditDescriptionInput.value = task.data.description;
    priority.value = task.data.priority ? { name: task.data.priority, code: task.data.priority } : '';
    assignees.value = task.data.assigneeObj;
    due_date.value = task.data.dueDate ? formatDate(task.data.dueDate) : '';
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
};

const spaceEditFormInputs = ref(true);
const showEditFinalMsg = ref(false);
const EditErrorHandler = ref(false);

const handleUpdateTask = async () => {
    btnLoading.value = true;
    if (taskNameEditInput.value === null) {
        EditErrorHandler.value = true;
        btnLoading.value = false;
    } else {
        EditErrorHandler.value = false;
        const editTaskData = {
            id: refTaskIdForEdit.value,
            name: taskNameEditInput.value,
            description: taskEditDescriptionInput.value,
            priority: priority.value.name,
            due_date: due_date.value,
            assignees: assignees.value.map((obj) => obj.id),
            project_id: projects
        };

        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            btnLoading.value = false;
            spaceEditFormInputs.value = false;
            showEditFinalMsg.value = true;
            visibleEdit.value = false;
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task updated Successfully', life: 3000 });
            spaceEditFormInputs.value = true;
            showEditFinalMsg.value = false; 
        } else {
            btnLoading.value = false;
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


const visibleTaskDetailView = ref(false);

const handleTaskDetailView = (task) => {
    refTaskId.value = task.key;
    taskNameEditInput.value = task.data.name;
    getSingleTaskComments(task.key);
    visibleTaskDetailView.value = true;
};




const taskCommentInput = ref(null);
const handleTaskComment = async () => {
    btnLoading.value = true;
    await addTaskComment(refTaskId.value, taskCommentInput.value);
    if (isTaskCommentCreated.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Comment added Successfully', life: 3000 });
        taskCommentInput.value = null;
        btnLoading.value = false;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to add comment', life: 3000 });
        btnLoading.value = false;
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

.task-detail{
    
}

.cmc{
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

.formgroup-inline{
    flex-wrap: nowrap;
}
.formgroup-inline .field {
    width: 90% !important;
}

.formgroup-inline .field input {
    width: 100% !important; 
}

.float-right{
    float: right;
    font-size: 12px;
    color: gray;
}

.task-edit{
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
}


.p-fileupload-buttonbar:last-child{
    display: none !important;
}

</style>
