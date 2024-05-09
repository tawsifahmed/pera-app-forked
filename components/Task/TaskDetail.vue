<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import { useFileUploaderStore } from '~/store/fileUpload'; 
const { fileUpload } = useFileUploaderStore();

const { editTask, addTaskComment, getTaskDetails } = useCompanyStore();
const { isTaskEdited, isTaskCommentCreated, singleTaskComments, subTasks } = storeToRefs(useCompanyStore());
const { singleTask, usersLists, projID } = defineProps(['singleTask', 'usersLists', 'projID']);

const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);

const toast = useToast();
const btnLoading = ref(false);

const assignees = ref(singleTask?.data?.assigneeObj);
const dueDate = ref(singleTask?.data?.dueDate);

const priority = ref(null);
priority.value = singleTask.data.priority ? { name: singleTask.data.priority, code: singleTask.data.priority } : '';

const timeTrack = ref(['00:00:00']);

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const selectedStatus = ref();
const statuses = ref([
    { name: 'Not Started',
      code: 'DE',
      logo: 'pi-circle',
      color: '#314ebe',
      items: [
            { label: 'Open', value: 'Open', code: 'DE', logo: 'pi-circle', color: '#314ebe' },
        ]
    },
    { name: 'Active', 
      code: 'US',
      logo: 'pi-chart-pie',
      color: '#f59e0b',
      items: [
            { label: 'Doing', value: 'Doing', code: 'US', logo: 'pi-chart-pie', color: '#f59e0b' },
        ]
    },
    { name: 'Done',
      code: 'JP',
      logo: 'pi-check-circle',
      color: '#10b981',
      items: [
            { label: 'Dev Done', value: 'Dev Done', code: 'JP', logo: 'pi-check-circle', color: '#10b981'},
            { label: 'QA Status', value: 'QA Status', code: 'JP', logo: 'pi-check-circle', color: '#10b981'},
            { label: 'Dev Complete', value: 'Dev Complete', code: 'JP', logo: 'pi-check-circle', color: '#10b981'},
        ]
    },
]);

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

const formattedTime = (time) => {
      const date = new Date(time);
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear().toString().substr(-2);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${day} ${month}'${year}, ${formattedHours}:${formattedMinutes}${ampm}`;
   
};

const handleTaskDetailSubmit = async () => {
    const taskDetailData = {
        id: singleTask.key,
        name: singleTask.data.name,
        description: description.value,
        project_id: projID,
        due_date: dueDate.value,
        priority: priority.value.name,
        assignees: assignees.value.map((obj) => obj.id)
    };

    await editTask(taskDetailData);

    if (isTaskEdited.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task detail updated', life: 3000 });
        // taskEditDescriptionInput.value = null;
        selectedfile.value = null;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to upadte task detail', life: 3000 });
    }
};


const file = ref(null)

const onFileChange = (e) => {
    file.value = e.target.files[0]
}

const uploadFile = async() => {
    if(file.value){
        console.log('file =>', file.value)
        console.log('task_id =>', singleTask.key)
    }
    await fileUpload(singleTask.key, file.value)
}

onMounted(() => {
    getTaskDetails(singleTask.key);
});

</script>


<template>
    <div class="grid">
        <div class="col-12 lg:col-7">
            <div>
                <h5>
                    {{ singleTask.data.name }}
                </h5>
                <div class="task-wrapper card">
                    <div class="task-det">
                        <form @submit.prevent="handleTaskDetailSubmit" class=" mt-2 task-detail ml-2">
                            <!-- <pre>{{singleTask}}</pre> -->
                            <div class="flex justify-content-start gap-7 align-items-center">
                                <div>
                                    <div class="flex justify-content-between gap-4 align-items-centertask-detail-wrapper">
                                        <div
                                            class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-user"></span>
                                            <p>Assignee:</p>
                                        </div>
                                        <FloatLabel style="width: 164.94px;" class="input-fields">
                                            <MultiSelect display="chip"  v-model="assignees" filter :options="usersLists" optionLabel="name" placeholder="" :maxSelectedLabels="2" class="w-full" />
                                        </FloatLabel>
                                    </div>
                                    <div
                                        class="flex mt-2 justify-content-between gap-4 align-items-center task-detail-wrapper">
                                        <div
                                            class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-calendar"></span>
                                            <p class="text-nowrap">Due Date:</p>
                                        </div>
                                        <FloatLabel class="input-fields">
                                            <Calendar style="width: 164.94px;" v-model="dueDate" showIcon iconDisplay="input"
                                                 />

                                        </FloatLabel>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="flex justify-content-between gap-6 align-items-center task-detail-wrapper">
                                        <div
                                            class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-flag"></span>
                                            <p>Status:</p>
                                        </div>
                                        <Dropdown v-model="selectedStatus" :options="statuses" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select Status" class="" style="width: 146.41px;">
                                            <template #value="slotProps">
                                                <div v-if="slotProps.value" class="flex align-items-center">
                                                    <div :style="{ backgroundColor: slotProps.value.color }"  style="color: white; border-radius: 50%;" :class="`p-1 pi ${slotProps.value.logo}`"></div>
                                                    <div style="font-size: 11px; margin-left: 3px;">{{ slotProps.value.label }}</div>
                                                </div>
                                                <span v-else>
                                                    {{ slotProps.placeholder }}
                                                </span>
                                            </template>
                                            <template #optiongroup="slotProps">
                                                <div class="flex align-items-center">
                                                    <div class="flex align-items-center">
                                                        <div :style="{ backgroundColor: slotProps.option.color }" style="color: white; border-radius: 50%;" :class="`p-1 mr-1 pi ${slotProps.option.logo}`"></div>
                                                    </div>
                                                    <div style="font-size: 12px;">{{ slotProps.option.name }}</div>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>
                                    <div
                                        class="flex mt-2 justify-content-between gap-6 align-items-center task-detail-wrapper">
                                        <div
                                            class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-stopwatch"></span>
                                            <p class="text-nowrap">Track Time:</p>
                                        </div>
                                        <FloatLabel class="input-fields">
                                            <Dropdown disabled="" :options="priorities" optionLabel="name"
                                             placeholder="0:00"/>
                                        </FloatLabel>
                                    </div>
                                </div>

                            </div>
                            <div class="field mt-3 flex flex-column">
                                <div
                                    class="flex justify-content-start gap-2 align-items-center mb-1 task-detail-property">
                                    <span class="pi pi-sliders-h"></span>
                                    <p>Description:</p>
                                </div>
                                <Textarea id="description" v-model="description" rows="4" cols="20" />
                            </div>

                            <div class="flex justify-content-end">
                                <Button type="submit" label="Save" />
                            </div>
                        </form>

                        <!-- tab for details, sub task  -->
                        <TabView class="mt-3">
                            <TabPanel class="file-upload" header="Detail">
                                <p class="m-0">Attachments: 0</p>
                                <div class="my-3 flex">
                                    <div class="card cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-3">
                                        <div class="pi pi-file text-6xl"></div>
                                        <div class="text-xs">asdme.ext</div>
                                    </div>

                                </div>
                                <div class="flex gap-2 w-full justify-content-center">
                                    <input @change="onFileChange" class="float-right" type="file" placeholder="+">
                                    <Button @click="uploadFile" label="Upload" />
                                </div>
                            </TabPanel>
                            <TabPanel :header="`Sub Tasks ${subTasks?.length ? subTasks.length : 0}`">
                                <TreeTable class="tree-table" :value="subTasks" :lazy="true"
                                    :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                                    <template #empty>
                                        <p class="text-center">No Data found...</p>
                                    </template>
                                    <Column class="cursor-pointer" field="name" header="Name" expander
                                        :style="{ width: '30%' }"></Column>
                                    <Column field="assignee" header="Assignee" :style="{ width: '20%' }"></Column>
                                    <Column field="dueDate" header="Due Date" :style="{ width: '12.5%' }"></Column>
                                    <Column field="priority" header="Priority" :style="{ width: '8%' }"></Column>
                                    <Column field="action" header="Action">
                                        <template #body="slotProps">
                                            <div class="action-dropdown">
                                                <Button style="width: 30px; height: 30px; border-radius: 50%;"
                                                    icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                                                <div class="action-dropdown-content">
                                                    <Button icon="pi pi-plus" class="mr-2 ac-btn" severity="success"
                                                        @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')"
                                                        rounded />
                                                    <Button icon="pi pi-pencil" class="mr-2 ac-btn" severity="success"
                                                        @click="emit('handleTaskEdit', slotProps.node)" rounded />
                                                    <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info"
                                                        @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                                                    <Button icon="pi pi-trash" class=" ac-btn" severity="warning"
                                                        rounded
                                                        @click="emit('confirmDeleteTask', slotProps.node.key)" />
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
                        <div class="my-2">
                            <Button label="Show More" class="py-1 btn btn-secondary"/>
                        </div>
                        <Card class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                            <template class="commentator-name" #title>{{ val.commentator_name }}</template>
                            <template #content>
                                <p class="m-0">
                                    {{ val.comment }}
                                </p>
                                <i style="line-height: 0;" class="pb-1 float-right">{{ formattedTime(val.time) }}</i>
                            </template>
                        </Card>
                    </div>

                    <div class="comment-add">
                        <form @submit.prevent="handleTaskComment" class="formgroup-inline">
                            <div class="field">
                                <InputText v-model="taskCommentInput" type="text" required placeholder="Add comment" />
                            </div>

                            <Button type="submit" label="Add" :loading="btnLoading" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.task-detail-wrapper {
    width: 100%;
}

.task-detail-property {
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

.tree-table {
    font-size: 11.5px !important;
    width: 100% !important;
}

.task-wrapper {
    overflow: hidden;
    height: 70vh;
    padding: 5px !important;

}

.task-det {
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

.input-fields  {
    .p-inputtext  {
        padding: 0.35rem 0.75rem !important;
    }
    .p-multiselect .p-multiselect-label{
        padding: 0.35rem 0.75rem !important;
    
    }
}

.text-nowrap {
    text-wrap: nowrap;
}

.p-dropdown-item-label{
    font-size: 13px !important;
}

.p-card .p-card-body {
    gap: 0.5rem !important;
    padding: 0.5rem 0.75rem !important;
}
</style>
