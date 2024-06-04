<script setup>
import { storeToRefs } from 'pinia';
import { useClockStore } from '~/store/clock';
import { useCompanyStore } from '~/store/company';
import { useFileUploaderStore } from '~/store/fileUpload';

const { fileUpload, fileDelete } = useFileUploaderStore();
const { isFileUpload, isLoading, isFileDeleted } = storeToRefs(useFileUploaderStore());

const { getTaskTimerData } = useClockStore();
const { trackedTime } = storeToRefs(useClockStore());

const { editTask, addTaskComment, getTaskDetails } = useCompanyStore();

const { isTaskEdited, isTaskCommentCreated, singleTaskComments, subTasks, taskStatus, taskDetails, taskActivity } = storeToRefs(useCompanyStore());

const { singleTask, usersLists, tagsLists, projID } = defineProps(['singleTask', 'usersLists', 'tagsLists', 'projID']);

const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask', 'updateTaskTable']);

const toast = useToast();
const btnLoading = ref(false);

const assignees = ref(singleTask?.data?.assigneeObj);

const tags = ref(singleTask?.data?.tagsObj);

const dueDate = ref(singleTask?.data?.dueDate);
const status = ref();
const timeTrack = ref('00:00:00');
let interval = null;

const handleClickClock = async () => {
    const taskId = taskDetails.value.id;

    if (taskDetails.value?.is_timer_start === 'false') {
        localStorage.setItem(`timerStart_${taskId}`, Date.now());
        const responseData = await getTaskTimerData('start', taskDetails.value?.id);
        await getTaskDetails(singleTask.key);
        startTimer();
    } else {
        const responseData = await getTaskTimerData('stop', taskDetails.value?.id, taskDetails.value?.taskTimer?.id);
        await getTaskDetails(singleTask.key);
        stopTimer();
    }
};

const startTimer = () => {
    const taskId = taskDetails.value.id;
    const startTime = new Date(taskDetails.value.taskTimer.start_time).getTime();

    interval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        timeTrack.value = secondsToHHMMSS(elapsedTime);
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
    timeTrack.value = secondsToHHMMSS(taskDetails.value.total_duration);
};

const priority = ref(null);
priority.value = singleTask.data.priority ? { name: singleTask.data.priority, code: singleTask.data.priority } : '';

const bounceStatus = ref([{ is_bounce: 'No' }, { is_bounce: 'Yes' }]);

const vModelBncStatus = ref();

const description = ref(singleTask?.data?.description);
const taskCommentInput = ref(null);
const selectedfile = ref();

const showActivitiyBtn = ref(true);
const activityDiv = ref(false);
const showActivitiy = () => {
    activityDiv.value = true;
    showActivitiyBtn.value = false;
};
const hideActivity = () => {
    activityDiv.value = false;
    showActivitiyBtn.value = true;
};

const handleTaskComment = async () => {
    btnLoading.value = true;
    await addTaskComment(singleTask.key, taskCommentInput.value, commentFile.value);
    if (isTaskCommentCreated.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Comment added Successfully', life: 3000 });
        taskCommentInput.value = null;
        btnLoading.value = false;
        commentFile.value = null;
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
        assignees: assignees.value.map((obj) => obj.id),
        tags: tags.value.map((obj) => obj.id)
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

const file = ref(null);

const onFileChange = (e) => {
    file.value = e.target.files[0];
};

const uploadFile = async () => {
    if (file.value) {
        console.log('file =>', file.value);
    }
    await fileUpload(singleTask.key, file.value);
    if (isFileUpload.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'File Upload successfully!', life: 3000 });
        getTaskDetails(singleTask.key);
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to upload file!', life: 3000 });
    }
};

const commentAttachment = ref(false);

const handleCommentAttachment = () => {
    commentAttachment.value = true;
};

const closeCommentAttachment = () => {
    commentAttachment.value = false;
};

onMounted(async () => {
    await getTaskDetails(singleTask.key);
    const obg = {
        name: taskDetails.value.status_name,
        code: taskDetails.value.status
    };
    status.value = obg;

    const bncObj = {
        is_bounce: taskDetails.value.is_bounce
    };
    vModelBncStatus.value = bncObj;

    if (taskDetails.value?.is_timer_start === 'true') {
        startTimer();
    }
});

async function changeStatusData(status) {
    try {
        const token = useCookie('token');
        const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/update/${singleTask.key}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                status: status.code
            }
        });

        if (data.value?.app_message === 'success') {
            getTaskDetails(singleTask.key);
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Status Changed', life: 3000 });
            emit('updateTaskTable');
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change status', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function changeBounceStatusData(selectedBncStatus) {
    console.log('bounceStatus', selectedBncStatus.is_bounce);
    // return
    // return;
    try {
        const token = useCookie('token');
        const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/update/${singleTask.key}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                is_bounce: selectedBncStatus.is_bounce
            }
        });

        console.log('dataBO', data);

        if (data.value?.app_message === 'success') {
            getTaskDetails(singleTask.key);
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Bounce Status Changed', life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change bounce status', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const setFileUrl = (url) => {
    const urlString = url;
    const partsOfString = urlString.split('/');
    const lastPartOfString = partsOfString[partsOfString.length - 1];
    return lastPartOfString;
};

const setDateFormat = (dateUrl) => {
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'MAy', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateString = dateUrl;
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const parts = formattedDate.split(' ');
    const monthIndex = monthAbbreviations.indexOf(parts[0]);
    if (monthIndex !== -1) {
        parts[0] = monthAbbreviations[monthIndex];
    }
    const finalFormattedDate = parts.join(' ');

    return finalFormattedDate;
};

function secondsToHHMMSS(seconds) {
    const hrs = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

const deleteFile = async (id) => {
    await fileDelete(id);

    if (isFileDeleted.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'File Deleted successfully!', life: 3000 });
        getTaskDetails(singleTask.key);
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete file!', life: 3000 });
    }
};
const fileInput = ref(null);
const commentFile = ref(null);
const commenFileName = ref('');

const handleFileChange = (event) => {
    commentFile.value = event.target.files[0];
    commenFileName.value = commentFile.value ? commentFile.value.name : '';
};
const handleFileUpload = () => {
    fileInput.value.click();
};
const handleCloseCommetFile = async () => {
    commentFile.value = null;
};

const handleShare = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/share/${singleTask.key}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (error.value) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to share', life: 3000 });
        return;
    } else {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Shared successfully', life: 3000 });
        navigator.clipboard.writeText('http://localhost:3000/sharedtask/' + data.value.shared_token);
        return;
    }
    console.log(data.value.shared_token);
    console.log('error', error.value);
};
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-7">
            <div>
                <!-- <pre>{{tags}}</pre> -->
                <!-- <pre>{{assignees}}</pre> -->
                <div class="flex align-items-start gap-2 mb-3">
                    <h5 class="m-0">
                        {{ singleTask.data.name }}
                    </h5>
                    <span @click="handleShare" v-tooltip.top="{ value: 'Share Task' }" class="pi pi-share-alt my-auto cursor-pointer"></span>
                </div>
                <div class="task-wrapper card">
                    <div class="task-det">
                        <form @submit.prevent="handleTaskDetailSubmit" class="mt-2 task-detail ml-2">
                            <!-- <pre>{{ singleTask }}</pre> -->
                            <!-- <pre>{{taskDetails}}</pre> -->
                            <div class="flex justify-content-between gap-2 flex-wrap align-items-center">
                                <div class="w-full lg:w-fit">
                                    <div class="flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper">
                                        <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-user"></span>
                                            <p>Assignee:</p>
                                        </div>
                                        <FloatLabel style="width: 164.94px" class="input-fields">
                                            <MultiSelect display="chip" v-model="assignees" filter :options="usersLists" optionLabel="name" placeholder="Select Assignees" :maxSelectedLabels="2" class="w-full" />
                                        </FloatLabel>
                                    </div>
                                    <div class="flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-calendar"></span>
                                            <p class="text-nowrap">Due Date:</p>
                                        </div>
                                        <FloatLabel class="input-fields">
                                            <Calendar style="width: 164.94px" v-model="dueDate" showIcon iconDisplay="input" />
                                        </FloatLabel>
                                    </div>
                                </div>
                                <div class="w-full lg:w-fit">
                                    <div class="flex justify-content-between gap-2 align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-flag"></span>
                                            <p>Status:</p>
                                        </div>
                                        <Dropdown @change="changeStatusData(status)" v-model="status" :options="taskStatus" optionLabel="name" placeholder="Select Status" style="width: 146.41px" />
                                    </div>
                                    <div class="flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-stopwatch"></span>
                                            <p class="text-nowrap">Track Time:</p>
                                        </div>
                                        <div class="clock-wrapper">
                                            <div :class="`clock-btn ${taskDetails?.is_timer_start == 'true' ? 'bg-pink-300' : 'bg-primary-400'}`" @click="handleClickClock">
                                                <i :class="`pi ${taskDetails?.is_timer_start == 'true' ? 'pi-stop stop' : 'pi-play start'}`"></i>
                                            </div>
                                            <div class="text-sm">{{ taskDetails?.is_timer_start == 'true' ? timeTrack : secondsToHHMMSS(taskDetails?.total_duration) }}</div>
                                        </div>

                                        <div>
                                            <!-- {{ timeTrack }} -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3" style="width: 100%">
                                <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property" style="width: 10%">
                                    <span class="pi pi-tags"></span>
                                    <p>Tags:</p>
                                </div>
                                <FloatLabel style="width: 90%" class="input-fields">
                                    <MultiSelect display="chip" v-model="tags" filter :options="tagsLists" optionLabel="name" placeholder="Select Tags" class="w-full" />
                                </FloatLabel>
                            </div>
                            <div class="field mt-3 flex flex-column">
                                <div class="flex justify-content-start gap-2 align-items-center mb-1 task-detail-property">
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
                                <p class="m-0">Attachments: {{ taskDetails?.attachments && taskDetails?.attachments?.length > 0 ? taskDetails?.attachments?.length : 0 }}</p>
                                <div class="my-3 attach-sec flex align-items-center justify-content-start gap-2" style="overflow-x: scroll">
                                    <div
                                        v-if="taskDetails?.attachments && taskDetails?.attachments.length === 0"
                                        class="card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w"
                                        style="background-color: #f7fafc"
                                    >
                                        <div class="pi pi-file text-6xl attach-icon"></div>
                                        <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                            <div class="text-xs">asdasd....asdme.extng</div>
                                            <div class="text-xs">9 MAy, 2024</div>
                                        </div>
                                    </div>
                                    <div
                                        v-for="item in taskDetails?.attachments"
                                        :key="item"
                                        target="_blank"
                                        class="card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative"
                                        style="background-color: #f7fafc"
                                    >
                                        <a target="_blank" class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-4 relative" :href="item?.file">
                                            <div class="pi pi-file text-6xl attach-icon"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <div @click="deleteFile(item?.id)" class="absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn">
                                            <i class="pi pi-times text-xs"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-2 w-full justify-content-center">
                                    <input @change="onFileChange" class="float-right" type="file" placeholder="+" />
                                    <Button type="button" :loading="isLoading" @click="uploadFile" label="Upload" />
                                </div>
                            </TabPanel>
                            <TabPanel :header="`Sub Tasks ${subTasks?.length ? subTasks.length : 0}`">
                                <TreeTable class="tree-table" :value="subTasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                                    <template #empty>
                                        <p class="text-center">No Data found...</p>
                                    </template>
                                    <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '30%' }"></Column>
                                    <Column field="assignee" header="Assignee" :style="{ width: '20%' }"></Column>
                                    <Column field="dueDateValue" header="Due Date" :style="{ width: '12.5%' }"></Column>
                                    <Column field="priority" header="Priority" :style="{ width: '8%' }"></Column>
                                    <Column field="action" header="Action">
                                        <template #body="slotProps">
                                            <div class="action-dropdown">
                                                <Button style="width: 30px; height: 30px; border-radius: 50%" icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                                                <div class="action-dropdown-content">
                                                    <Button icon="pi pi-plus" class="mr-2 ac-btn" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                                                    <Button icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                                                    <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                                                    <Button icon="pi pi-trash" class="ac-btn" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                                                </div>
                                            </div>
                                        </template>
                                    </Column>
                                </TreeTable>
                            </TabPanel>
                            <TabPanel :header="`Bounce`">
                                <div class="card">
                                    <div class="flex justify-content-start align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start gap-2 align-items-center bounce-detail-property">
                                            <span class="pi pi-flag"></span>
                                            <p class="text-nowrap">Bounce Status:</p>
                                        </div>
                                        <Dropdown @change="changeBounceStatusData(vModelBncStatus)" v-model="vModelBncStatus" :options="bounceStatus" optionLabel="is_bounce" placeholder="Select Status" style="width: 146.41px" />
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-5">
            <div>
                <h5 class="cmc">Activity</h5>
                <div class="comment-wrapper card">
                    <div class="comments">
                        <div class="my-2 text-surface-800">
                            <Button @click="showActivitiy" label="↓  Show More" v-if="showActivitiyBtn" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                        </div>
                        <div v-if="activityDiv">
                            <ul v-for="act in taskActivity" :key="act" style="margin-left: -15px; margin-top: -6px">
                                <li v-html="act.title" style="font-size: smaller"></li>
                            </ul>
                            <div class="my-2 text-surface-800">
                                <Button @click="hideActivity" label="↑ Hide" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                        </div>
                        <Card class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                            <template class="commentator-name" #title>
                                <div class="flex justify-content-start align-items-center">
                                    <Avatar :label="val.commentator_name.charAt()" class="mr-2 capitalize" size="small" style="background-color: gray; color: #ededed; border-radius: 50%" />
                                    <p class="text-lg">{{ val.commentator_name }}</p>
                                </div>
                            </template>
                            <template #content>
                                <div v-if="setFileUrl(val?.file)" class="flex justify-content-end">
                                    <a :href="val?.file" target="_blank" class="bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file" style="background-color: #f7fafc">
                                        <div class="pi pi-file attach-icon"></div>
                                        <div class="attach-detail flex flex-column justify-content-center align-items-center">
                                            <div class="text-xs">{{ setFileUrl(val?.file) }}</div>
                                        </div>
                                    </a>
                                </div>
                                <p class="m-0 ml-1">
                                    {{ val?.comment ? val?.comment : '' }}
                                </p>
                                <i style="line-height: 0" class="pb-1 float-right">{{ formattedTime(val.time) }}</i>
                            </template>
                        </Card>
                    </div>
                    <form @submit.prevent="handleTaskComment" class="comment-add">
                        <div class="text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-2 relative" v-if="commentFile">
                            <div>
                                <span class="pi pi-file-import mr-2"></span> <span>{{ commenFileName }}</span>
                            </div>
                            <div @click="handleCloseCommetFile" class="close-comment">
                                <i class="pi pi-times"></i>
                            </div>
                        </div>
                        <div class="comment-form">
                            <InputText v-model="taskCommentInput" type="text" placeholder="Add comment" required />
                            <input class="hidden" type="file" ref="fileInput" @change="handleFileChange" />
                            <Button icon="pi pi-cloud-upload" @click="handleFileUpload" aria-label="Filter" />
                            <Button type="submit" icon="pi pi-plus" label="Add" :loading="btnLoading" />
                        </div>
                    </form>
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

.bounce-detail-property {
    width: 22%;
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
    height: 80%;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.attach-sec {
    overflow-x: scroll;
    white-space: nowrap; /* Prevents wrapping of child elements */
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}

.attach-sec::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
    height: 10px; /* Height of the scrollbar */
}

.attach-sec::-webkit-scrollbar-track {
    background: #f1f1f1; /* Track color */
}

.attach-sec::-webkit-scrollbar-thumb {
    background: #888; /* Thumb color */
}

.attach-sec::-webkit-scrollbar-thumb:hover {
    background: #555; /* Hover state color */
}

.attachment-wrapper {
    margin-bottom: 0px !important;
    color: #444;
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
    padding: 10px 5px;
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
    top: -10px;
    left: -158px;
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

input[type='file'] {
    width: 300px;
    max-width: 100%;
    color: #444;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
    border: 0.5px solid #b8b8b8;
}

input[type='file']::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #10b981;
    padding: 7px 15px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
    background: #059669;
}

.input-fields {
    .p-inputtext {
        padding: 0.35rem 0.75rem !important;
    }
    .p-multiselect .p-multiselect-label {
        padding: 0.35rem 0.75rem !important;
    }
}

.text-nowrap {
    text-wrap: nowrap;
}

.p-dropdown-item-label {
    font-size: 13px !important;
}

.p-card .p-card-body {
    gap: 0.5rem !important;
    padding: 0.5rem 0.75rem !important;
}

.activity-btns {
    color: #444 !important;
    font-size: 11px;
    background-color: rgb(102, 102, 102);
}

.activity-btns:hover {
    background-color: #63ceaa !important;
    color: white !important;
}

.attach-detail {
    border-top: 1px solid #e2e8f0;
    font-weight: 600;
}
.comment-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.comment-form input {
    width: 75%;
}
.close-comment {
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
}
.comment-file {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
}
.clock-wrapper {
    display: flex;
    align-items: center;
    gap: 7px;
}
.clock-btn {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}
.clock-btn:hover {
    box-shadow: none;
}
.stop {
    color: white;
    font-size: 8px;
    margin-top: 1px;
    margin-left: 1px;
}
.start {
    color: white;
    font-size: 10px;
    margin-left: 2px;
}

.attch-w {
    visibility: hidden;
}
</style>
