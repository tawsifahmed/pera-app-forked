<template>
    <div class="grid">
        <div class="col-12 lg:col-7">
            <form @submit.prevent="handleTaskDetailSubmit" class="task-detail">
                <h5>
                    {{ singleTask.data.name }}
                </h5>
                <!-- <pre>{{singleTask}}</pre> -->
                <div class="card">
                    <div class="flex my-2 justify-content-start gap-5 align-items-center">
                        <div class="flex justify-content-start gap-2 align-items-center">
                            <span class="pi pi-user"></span>
                            <p>Assignee:</p>
                        </div>
                        <div>{{ singleTask.data.assignee }}</div>
                    </div>
                    <div class="flex mt-2 mb-3 justify-content-start gap-5 align-items-center">
                        <div class="flex justify-content-start gap-2 align-items-center">
                            <span class="pi pi-calendar"></span>
                            <p>Due Date:</p>
                        </div>
                        <div>{{ singleTask.data.dueDate }}</div>
                    </div>
                    <div class="field mt-2 flex flex-column">
                        <label for="name" class="ml-1">Description:</label>
                        <Textarea id="description" v-model="description" rows="3" cols="20" />
                    </div>

                    <div class="flex justify-content-end">
                        <Button type="submit" label="Save" />
                    </div>
                </div>
            </form>

            <!-- tab for details, sub task  -->
            <TabView class="mt-3">
                <TabPanel header="Detail">
                    <p class="m-0"></p>
                </TabPanel>
                <TabPanel header="Sub Tasks">
                    <TreeTable class="stabd" :value="subTasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                        <template #empty> <p class="text-center">No Data found...</p> </template>
                        <Column class="cursor-pointer" field="name" :style="{ width: '200px' }" header="Name" expander></Column>
                        <Column field="assignee" header="Assignee"></Column>
                        <Column field="dueDate" header="Due Date"></Column>
                        <Column field="priority" header="Priority"></Column>
                        <Column field="action" header="Action">
                            <template #body="slotProps">
                                <Button icon="pi pi-plus" class="mr-2" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                                <Button icon="pi pi-pencil" class="mr-2" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                                <Button icon="pi pi-cog" class="mr-2" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                            </template>
                        </Column>
                    </TreeTable>
                </TabPanel>
            </TabView>
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
</script>

<style lang="scss" scoped>
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

.stabd {
    font-size: 12px !important;
}
</style>
