<template>
    <div class="grid">
        <div class="col-12 lg:col-7" >
            <div >
                <h5>
                    {{ singleTask.data.name }}
                </h5>
                <div class="task-wrapper card">
                    <div class="task-det">
                        <form @submit.prevent="handleTaskDetailSubmit" class="task-detail">
                            <!-- <pre>{{singleTask}}</pre> -->
                            <div class="">
                                <div class="flex my-2 justify-content-start gap-5 align-items-centertask-detail-wrapper">
                                    <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                        <span class="pi pi-user"></span>
                                        <p>Assignee:</p>
                                    </div>
                                    <div>{{ singleTask.data.assignee }}</div>
                                </div>
                                <div class="flex mt-2 mb-3 justify-content-start gap-5 align-items-center task-detail-wrapper">
                                    <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                        <span class="pi pi-calendar"></span>
                                        <p>Due Date:</p>
                                    </div>
                                    <div>{{ singleTask.data.dueDate }}</div>
                                </div>
                                <div class="flex mt-2 mb-3 justify-content-start gap-5 align-items-center task-detail-wrapper">
                                    <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                        <span class="pi pi-flag"></span>
                                        <p>Priority:</p>
                                    </div>
                                    <div>{{ singleTask.data.priority }}</div>
                                </div>
                                <div class="field mt-2 flex flex-column">
                                    <div class="flex justify-content-start gap-2 align-items-center mb-1 task-detail-property">
                                        <span class="pi pi-sliders-h"></span>
                                        <p>Description:</p>
                                    </div>
                                    <Textarea id="description" v-model="description" rows="4" cols="20" />
                                </div>
            
                                <div class="flex justify-content-end">
                                    <Button type="submit" label="Save" />
                                </div>
                            </div>
                        </form>
            
                        <!-- tab for details, sub task  -->
                        <TabView class="mt-3">
                            <TabPanel class="file-upload" header="Detail">
                                <p class="m-0">Attachments: 0</p>
                                <div style="height: 50px;">
            
                                </div>
                                <div class="flex gap-2 w-full justify-content-center">
                                    <input class="float-right" type="file" placeholder="+">
                                    <Button  label="Upload" />
                                </div>
                            </TabPanel>
                            <TabPanel :header="`Sub Tasks ${subTasks?.length ? subTasks.length : 0}`">
                                <TreeTable class="stabd" :value="subTasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                                    <template #empty> <p class="text-center">No Data found...</p> </template>
                                    <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '30%' }"></Column>
                                    <Column field="assignee" header="Assignee" :style="{ width: '20%' }"></Column>
                                    <Column field="dueDate" header="Due Date" :style="{ width: '12.5%' }"></Column>
                                    <Column field="priority" header="Priority" :style="{ width: '8%' }"></Column>
                                    <Column field="action" header="Action">
                                        <template #body="slotProps">
                                            <div class="action-dropdown">
                                                <Button style="width: 30px; height: 30px; border-radius: 50%;" icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
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
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-5">
            <div>
                <h5 class="cmc">Comments</h5>
                <div class="comment-wrapper card">
                    <div class="comments">
                        <Card class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                            <template class="commentator-name" #title>{{ val.commentator_name }}</template>
                            <template #content>
                                <p class="m-0">
                                    {{ val.comment }}
                                </p>
                                <i class="float-right"> {{ val.time }} </i>
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
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';

const { editTask, addTaskComment, getTaskDetails } = useCompanyStore();
const { isTaskEdited, isTaskCommentCreated, singleTaskComments, subTasks } = storeToRefs(useCompanyStore());
const { singleTask, projID } = defineProps(['singleTask', 'projID']);

const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);

const toast = useToast();
const btnLoading = ref(false);
const description = ref(singleTask?.data?.description);
const taskCommentInput = ref(null);
const selectedfile = ref();

const handleTaskComment = async () => {
    btnLoading.value = true;
    await addTaskComment(singleTask.key, taskCommentInput.value);
    if (isTaskCommentCreated.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Comment added Successfully', life: 3000 });
        taskCommentInput.value = null;
        btnLoading.value = false;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to add comment', life: 3000 });
        btnLoading.value = false;
    }
};

const handleTaskDetailSubmit = async () => {
    const taskDetailData = {
        id: singleTask.key,
        name: singleTask.data.name,
        description: description.value,
        project_id: projID,
        due_date: singleTask.data.due_date,
        priority: singleTask.data.priority,
        assignees: singleTask.data.assignees
    };
    await editTask(taskDetailData);

    if (isTaskEdited.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task Edited Successfully', life: 3000 });
        taskEditDescriptionInput.value = null;
        selectedfile.value = null;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to edit task', life: 3000 });
    }
};

onMounted(() => {
    getTaskDetails(singleTask.key);
});

// watchEffect(() => {
//     getTaskDetails(singleTask.key);
// });
</script>

<style lang="scss" scoped>
.task-detail-wrapper{
    width: 100%;
}

.task-detail-property{
    width: 20%;
}

.cmc {
    text-wrap: nowrap;
}

.comment-wrapper {
    overflow: hidden;
    height: 70vh;
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
    //position: relative;
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

.stabd {
    font-size: 11.5px !important;
    width: 100% !important;
}

.task-wrapper{
    overflow: hidden;
    height: 70vh;
    padding: 5px !important;
    
}

.task-det{
    overflow-y: auto;
    height: 100%;
    padding: 5px; 
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
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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

.ac-btn{
    height: 30px !important;
    width: 30px !important;
    font-size: 11px !important;
    .pi{
        font-size: 11px !important;
    
    }
}


input[type=file] {
    width: 300px;
    max-width: 100%;
    color: #444;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
    border: 0.5px solid #b8b8b8;
}

input[type=file]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #10b981;
    padding: 7px 15px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background .2s ease-in-out;
}

input[type=file]::file-selector-button:hover {
    background: #059669;
}

</style>
