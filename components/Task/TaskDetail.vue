<script setup>
import { storeToRefs } from 'pinia';
import { useClockStore } from '~/store/clock';
import { useCompanyStore } from '~/store/company';
import { useFileUploaderStore } from '~/store/fileUpload';
import accessPermission from '~/composables/usePermission';
import Editor from 'primevue/editor';
import Calendar from 'primevue/calendar';
import { onMounted, toRaw, watch } from 'vue';
import Inplace from 'primevue/inplace';
import Quill from 'quill';
import QuillMention from 'quill-mention';

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const editorViewMode = ref('preview');
const commentEditorViewMode = ref('edit');

const url = useRuntimeConfig();
const { fileUpload, fileDelete } = useFileUploaderStore();
const { isFileUpload, isLoading, isFileDeleted } = storeToRefs(useFileUploaderStore());

const { getTaskTimerData, setManualTime, storeTaskTimer, handleMissDeadlineShowTimer } = useClockStore();
const { trackedTime, deadlineJustifyProvided } = storeToRefs(useClockStore());

const { editTask, addTaskComment, getTaskDetails, getSingleProject } = useCompanyStore();

const { isTaskEdited, isTaskCommentCreated, singleTaskComments, subTasks, taskStatus, taskDetails, taskActivity } = storeToRefs(useCompanyStore());

// saved the task id in local storage
localStorage.setItem('taskDetailID', JSON.stringify(taskDetails.value.id));

const { usersLists, tagsLists, projID } = defineProps(['usersLists', 'tagsLists', 'projID']);

const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask', 'updateTaskTable', 'closeDetailModal']);

const toast = useToast();
const btnLoading = ref(false);
const updateTaskP = ref(accessPermission('update_task'));
const editBounceP = ref(accessPermission('edit_bounce'));
const createTaskP = ref(accessPermission('create_task'));

const assignees = ref(null);
assignees.value = taskDetails.value?.assignee?.map((obj) => ({ id: obj.id, name: obj.name }));
const isAsigneeEdited = ref(false);
watch(assignees, (newValue) => {
    isAsigneeEdited.value = true;
});

const tags = ref(taskDetails.value?.tags?.map((obj) => ({ id: obj.id, name: obj.name })));

const isTagsEdited = ref(false);
watch(tags, (newValue) => {
    isTagsEdited.value = true;
});

const dueDate = ref(
    taskDetails.value?.due_date ? new Date(taskDetails.value.due_date).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null
);

const userHasModifiedTime = ref(false);

// const dateVal = ref(taskDetails.value?.due_date ? 1 : 0);

const handleDateChange = (newDate) => {
    console.log('test druve');
    if (!userHasModifiedTime.value) {
        const selectedDate = new Date(newDate);
        selectedDate.setHours(23, 59, 0, 0);
        dueDate.value = selectedDate;
    } else {
        dueDate.value = newDate;
    }
};

watch(dueDate, (newVal, oldVal) => {
    if (newVal && oldVal && newVal !== oldVal) {
        userHasModifiedTime.value = true;
    }
});

const checkDate = ref(dueDate.value);
const isDateEdited = ref(false);
watch(dueDate, (newValue, oldValue) => {
    if (newValue) {
        isDateEdited.value = true;
        checkDate.value = new Date(newValue).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase();
    }
});

const status = ref();

const confirm = useConfirm();

// Refs to store hours and minutes values
const manualTimeHr = ref(null);
const manualTimeMin = ref(null);

// Function to handle adding the duration
const hideManualTimer = ref(false);

const mLoading = ref(false);
const addDuration = async (rejectCallback) => {
    mLoading.value = true;
    let totalSeconds;
    if (manualTimeHr.value > 0 || manualTimeMin.value > 0) {
        totalSeconds = manualTimeHr.value * 3600 + manualTimeMin.value * 60;
        console.log('totalSeconds', totalSeconds);
        // return
        const responseData = await setManualTime(taskDetails.value?.id, totalSeconds);
        if (responseData?.code === 200) {
            await getTaskDetails(taskDetails.value?.id);
            mLoading.value = false;
            toast.add({ severity: 'success', summary: 'Duration Added', detail: `Duration: ${manualTimeHr.value ? manualTimeHr.value : 0} hours and ${manualTimeMin.value ? manualTimeMin.value : 0} minutes`, group: 'br', life: 3000 });
            manualTimeHr.value = null;
            manualTimeMin.value = null;
            rejectCallback();
        } else {
            mLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to add duration', group: 'br', life: 3000 });
        }
        console.log('responseData', responseData);
    } else {
        mLoading.value = false;
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please add duration', group: 'br', life: 3000 });
    }
    totalSeconds = null;
};

// Function to trigger the confirmation popup
const requireConfirmation = (event) => {
    console.log(event.detail);
    if (event.detail === 3 && taskDetails.value?.is_timer_start === 'false') {
        confirm.require({
            target: event.currentTarget,
            group: 'headless',
            message: 'Set task duration:',
            accept: () => {
                toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                // toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
};

const timeTrack = ref('00:00:00');
let interval = null;

const timeLoading = ref(false);
const handleClickClock = async () => {
    const taskId = taskDetails.value.id;
    timeLoading.value = true;
    if (taskDetails.value?.is_timer_start === 'false') {
        const responseData = await getTaskTimerData('start', taskDetails.value?.id);
        await getTaskDetails(taskDetails.value?.id);
        startTimer();
        timeLoading.value = false;
        localStorage.setItem('storeTaskID', JSON.stringify(taskDetails.value?.id));
        localStorage.setItem('storeTaskProjectID', JSON.stringify(Number(projID)));
        localStorage.setItem('storeTaskSpaceID', JSON.stringify(taskDetails.value?.project.space_id));
        localStorage.setItem('storeTaskCompanyID', JSON.stringify(taskDetails.value?.project.company_id));
        localStorage.setItem('storeTaskTimerStartTime', JSON.stringify(taskDetails.value.taskTimer.start_time));
        let storeTimerObj = {
            task_id: taskDetails.value.id,
            project_id: projID,
            space_id: taskDetails.value.project.space_id,
            company_id: taskDetails.value.project.company_id,
            timerStartTime: taskDetails.value.taskTimer.start_time
        };
        await storeTaskTimer(storeTimerObj);
        toast.add({ severity: 'success', summary: 'Task Timer', detail: 'Timer Started', group: 'br', life: 3000 });
        await getSingleProject(projID);
    } else {
        const responseData = await getTaskTimerData('stop', taskDetails.value?.id, taskDetails.value?.taskTimer?.id);
        await getTaskDetails(taskDetails.value?.id);
        stopTimer();
        timeLoading.value = false;
        localStorage.removeItem('storeTaskID');
        localStorage.removeItem('storeTaskProjectID');
        localStorage.removeItem('storeTaskSpaceID');
        localStorage.removeItem('storeTaskCompanyID');
        localStorage.removeItem('storeTaskTimerStartTime');

        let storeTimerObj = {
            task_id: null,
            project_id: null,
            space_id: null,
            company_id: null
        };
        await storeTaskTimer(storeTimerObj);
        toast.add({ severity: 'success', summary: 'Task Timer', detail: 'Timer Stopped', group: 'br', life: 3000 });
        await getSingleProject(projID);
    }
};

const startTimer = () => {
    const taskId = taskDetails.value.id;
    console.log('taskDetails.value.taskTimer.start_time', taskDetails.value.taskTimer.start_time);
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

const bounceStatus = ref([{ is_bounce: 'No' }, { is_bounce: 'Yes' }]);

const vModelBncStatus = ref();

const description = ref(taskDetails.value?.description || ' ');

const isDescriptionEdited = ref(false);
watch(description, (newValue) => {
    if (newValue.length === 0) {
        description.value = ' ';
    }
    isDescriptionEdited.value = true;
});

const taskCommentInput = ref(null);
const selectedfile = ref();

const showActivitiyBtn = ref(true);
const showJustificationBtn = ref(true);
const activityDiv = ref(false);
const justificationDiv = ref(false);

const showActivitiy = () => {
    activityDiv.value = true;
    showActivitiyBtn.value = false;
    showJustificationBtn.value = false;
};

const showJustification = () => {
    justificationDiv.value = true;
    showJustificationBtn.value = false;
    showActivitiyBtn.value = false;
};

const formattedAct = (act) => {
    return `${act.reason}<br>Type: ${act.type} - ${formattedTime(act.created_at)}`;
};

const hideJustification = () => {
    justificationDiv.value = false;
    showJustificationBtn.value = true;
    showActivitiyBtn.value = true;
};
const hideActivity = () => {
    activityDiv.value = false;
    showActivitiyBtn.value = true;
    showJustificationBtn.value = true;
};

const handleTaskComment = async () => {
    if (taskCommentInput.value === null || taskCommentInput.value === '') {
        toast.add({ severity: 'warn', summary: 'Warn', detail: 'Comment required', group: 'br', life: 3000 });
        return;
    }

    const userIds = await getMentionedIds();

    btnLoading.value = true;
    await addTaskComment(taskDetails.value?.id, taskCommentInput.value, commentFile.value, userIds);
    if (isTaskCommentCreated.value === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Comment added Successfully', group: 'br', life: 3000 });
        taskCommentInput.value = null;
        btnLoading.value = false;
        commentFile.value = null;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to add comment', group: 'br', life: 3000 });
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
    if (isDescriptionEdited.value === false && isAsigneeEdited.value === false && isTagsEdited.value === false && isDateEdited.value === false) {
        toast.add({ severity: 'warn', summary: 'Warn', detail: 'No changes detected', group: 'br', life: 3000 });
        return;
    } else {
        let sendEditDate;
        if (dueDate.value) {
            const selectedDate = new Date(dueDate.value);
            selectedDate.setDate(selectedDate.getDate() + 1);
            sendEditDate = selectedDate.toISOString();
        }

        const formattedDueDate = new Date(taskDetails.value?.due_date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        const taskDetailData = {
            id: taskDetails.value?.id,
            // name: taskDetails.value?.name,
            ...(isDescriptionEdited.value === true ? { description: description.value } : {}),
            project_id: projID,
            ...(checkDate.value !== formattedDueDate ? { dueDate: sendEditDate ? new Date(new Date(sendEditDate).getTime() - 18 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ') : null } : {}),
            ...(isAsigneeEdited.value === true ? { assignees: assignees.value.map((obj) => obj.id) } : {}),
            ...(isTagsEdited.value === true ? { tags: tags.value.map((obj) => obj.id) } : {})
        };

        if (sendEditDate) {
            const postSubDate = new Date(sendEditDate);
            postSubDate.setDate(postSubDate.getDate() - 1);
            dueDate.value = postSubDate ? new Date(postSubDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null;
        }

        if (taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true) {
            console.log('checkDate.value', checkDate.value);
            handleMissDeadlineShowTimer(taskDetails.value?.id, projID, taskDetailData.dueDate);
            delete taskDetailData.dueDate;
        }

        // Send data without due date if taskDetails.parent_task_id is null

        await editTask(taskDetailData);
        if (isTaskEdited.value === true) {
            toast.add({ severity: taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true && isDescriptionEdited.value === false && isAsigneeEdited.value === false && isTagsEdited.value === false ? 'warn' : taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true ? 'success' : 'success', summary: taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true && isDescriptionEdited.value === false && isAsigneeEdited.value === false && isTagsEdited.value === false ? 'Deadline Justification Required' : taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true ? 'Updated' : 'Updated', detail: taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true && isDescriptionEdited.value === false && isAsigneeEdited.value === false && isTagsEdited.value === false ? 'Provide deadline justification' : taskDetails.value.parent_task_id === null && taskDetails.value.due_date !== null && isDateEdited.value === true ? 'Task details updated except due date' : 'Task details updated', group: 'br', life: 3000 });
            selectedfile.value = null;
            editorViewMode.value = 'preview';
            if (isDescriptionEdited.value === true) {
                isDescriptionEdited.value = false;
                console.log('isDescriptionEdited Flagged');
            }
            if (isAsigneeEdited.value === true) {
                isAsigneeEdited.value = false;
                console.log('isAsigneeEdited Flagged');
            }
            if (isTagsEdited.value === true) {
                isTagsEdited.value = false;
                console.log('isTagsEdited Flagged');
            }
            if (isDateEdited.value === true) {
                isDateEdited.value = false;
                console.log('isDateEdited Flagged');
            }
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to upadte task detail', group: 'br', life: 3000 });
        }
    }
};

watch(deadlineJustifyProvided, (newVal) => {
    if (newVal === true) {
    }
    if (newVal === false) {
        dueDate.value = taskDetails.value?.due_date
            ? new Date(taskDetails.value.due_date).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase()
            : null;
        // checkDate.value = dueDate.value;
    }
});

const file = ref(null);

const onFileChange = (e) => {
    file.value = e.target.files[0];
};

const uploadFile = async () => {
    if (file.value) {
        console.log('file =>', file.value);
    }
    await fileUpload(taskDetails.value?.id, file.value);
    if (isFileUpload.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'File Upload successfully!', group: 'br', life: 3000 });
        getTaskDetails(taskDetails.value?.id);
        document.getElementById('attachInput').value = null;
        file.value = null;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to upload file!', group: 'br', life: 3000 });
    }
};

const checkAttachmentType = (file) => {
    const imageExtensions = ['jpg', 'JPG', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'ico', 'tiff', 'tif', 'heic', 'heif'];
    const videoExtensions = ['mp4', 'avi', 'flv', 'wmv', 'mov', '3gp', 'mkv'];
    const pdfExtensions = ['pdf', 'PDF', 'ppt', 'pptx'];
    const wordExtensions = ['doc', 'docx', 'rtf'];
    const excelExtensions = ['xls', 'xlsx', 'csv'];

    if (imageExtensions.some((ext) => file.endsWith('.' + ext))) {
        return 'image';
    } else if (videoExtensions.some((ext) => file.endsWith('.' + ext))) {
        return 'video';
    } else if (pdfExtensions.some((ext) => file.endsWith('.' + ext))) {
        return 'pdf';
    } else if (wordExtensions.some((ext) => file.endsWith('.' + ext))) {
        return 'word';
    } else if (excelExtensions.some((ext) => file.endsWith('.' + ext))) {
        return 'excel';
    } else {
        return 'file';
    }
};

onMounted(async () => {
    await getTaskDetails(taskDetails.value?.id);
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
        const { data, pending } = await useFetch(`${url.public.apiUrl}/tasks/update/${taskDetails.value?.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                status: status.code
            }
        });

        if (data.value?.app_message === 'success') {
            getTaskDetails(taskDetails.value?.id);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Status Changed', group: 'br', life: 3000 });
            emit('updateTaskTable');
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change status', group: 'br', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function changeBounceStatusData(selectedBncStatus) {
    try {
        const token = useCookie('token');
        const { data, pending } = await useFetch(`${url.public.apiUrl}/tasks/update/${taskDetails.value?.id}`, {
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
            getTaskDetails(taskDetails.value?.id);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Bounce Status Changed', group: 'br', life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change bounce status', group: 'br', life: 3000 });
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
        toast.add({ severity: 'success', summary: 'Successful', detail: 'File Deleted successfully!', group: 'br', life: 3000 });
        getTaskDetails(taskDetails.value?.id);
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete file!', group: 'br', life: 3000 });
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
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/tasks/share/${taskDetails.value?.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (error.value) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to share', life: 3000 });
        return;
    } else {
        // navigator.clipboard.writeText('http://localhost:3000/sharedtask/' + data.value.shared_token);
        const el = document.createElement('textarea');
        el.value = data.value.shared_web_link;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        toast.add({ severity: 'success', summary: 'Share successful', detail: 'Shared link copied', group: 'br', life: 3000 });
        return;
    }
};

const truncatedUniqueId = computed(() => {
    return taskDetails.value?.unique_id ? taskDetails.value.unique_id.slice(0, 6) + '...' : '';
});

const handleShareTaskId = () => {
    if (taskDetails.value?.id) {
        // navigator.clipboard.writeText(singleTask?.key);
        const el = document.createElement('textarea');
        el.value = taskDetails.value?.unique_id;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        toast.add({ severity: 'success', summary: 'Task ID copied', detail: 'Task ID copied to clipboard', group: 'br', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Task ID not found', group: 'br', life: 3000 });
    }
};

const getMentionedIds = async () => {
    const mentions = document.querySelectorAll('.task-comment .ql-editor .mention');

    const dataIds = Array.from(mentions).map((mention) => mention.getAttribute('data-id'));

    const uniqueDataIds = [...new Set(dataIds)];

    return uniqueDataIds;
};

const handleViews = (data) => {
    editorViewMode.value = data;
};

const editorPreview = ref(false);
const handleEditorView = () => {
    editorViewMode.value = 'edit';
    editorPreview.value = true;
};

const handleCommentViews = (data) => {
    commentEditorViewMode.value = data;
};

// State and references
const mentionTrigger = '@'; // Character to trigger mention
const showMentionDropdown = ref(false); // Toggle dropdown visibility

// Example users for mentions
const users = ['Alice', 'Bob', 'Charlie', 'David'];

// Filter users based on input
const filteredUsers = computed(() => {
    console.log('called filteredUsers');
    const lastWord = taskCommentInput.value?.split(' ').pop();
    console.log('called filteredUsers lastWord', lastWord);
    console.log(
        'called filteredUsers list',
        users.filter((user) => user.toLowerCase().includes(lastWord.toLowerCase()))
    );
    return users.filter((user) => user.toLowerCase().includes(lastWord.toLowerCase()));
});

// Handle input to show/hide mention dropdown
const handleInput = () => {
    console.log('called handleInput');
    const lastWord = taskCommentInput.value?.split(' ').pop();
    console.log('lastWord ==>', lastWord);
    showMentionDropdown.value = lastWord?.startsWith(mentionTrigger);
    console.log('showMentionDropdown ==>', showMentionDropdown.value);
};

// Insert mention into the editor and hide the dropdown
const insertMention = (user) => {
    console.log('selected user', user);
    taskCommentInput.value += user.value + ' '; // Add mention to input
    showMentionDropdown.value = false; // Close dropdown
};

// Watch for changes to input and trigger mention handling
watch(taskCommentInput, handleInput);

// Quill.register('modules/mention', QuillMention);

const list = toRaw(usersLists);

const mentionList = list.map((item) => {
    const { name, ...rest } = item;
    return { ...rest, value: name };
});

const modules = {
    mention: {
        source: function (searchTerm, renderList) {
            const matches = mentionList.filter((item) => item.value.toLowerCase().includes(searchTerm.toLowerCase()));
            renderList(matches);
            adjustMentionListPosition();
        },
        renderItem: function (item) {
            return `${item.value}`;
        },
        onSelect: function (item, insertItem) {
            insertItem(item);
            //   if (!mentionedUsers.value.find(user => user.id === item.id)) {
            //     mentionedUsers.value.push(item);
            //     mentionedUserIds.value.push(item.id);
            //   }
        }
    }
};

const adjustMentionListPosition = () => {
    const mentionList = document.querySelector('.ql-mention-list-container');
    const editor = document.querySelector('.ql-editor');

    if (!mentionList || !editor) return;

    const editorRect = editor.getBoundingClientRect();
    const mentionRect = mentionList.getBoundingClientRect();

    if (mentionRect.right > editorRect.right) {
        mentionList.style.left = `227px`;
        // mentionList.style.left = `${editorRect.width - mentionRect.width}px`;
    }

    //   For top ==>
    //   if (mentionRect.bottom > editorRect.bottom) {
    //     mentionList.style.top = `${editorRect.bottom - mentionRect.height}px`;
    //   }
};

// Move Task
const op = ref('');
const moveTaskData = ref([]);
const moveSearch = ref('');
const handleMoveTask = (event) => {
    op.value.toggle(event);
};

const hideMoveTask = () => {
    op.value.hide();
};
const moveTaskFetch = async (query) => {
    const token = useCookie('token');
    const { data, pending, error } = await useFetch(`${url.public.apiUrl}/projects/show/${projID}?search=${query}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    console.log(data.value);
    moveTaskData.value = data.value.tasks;
};

const handleTaskMove = async (selectedTask) => {
    console.log(selectedTask);
    const token = useCookie('token');
    const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/tasks/update/${taskDetails.value?.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: {
            parent_task_id: selectedTask.key
        }
    });
    emit('updateTaskTable');
    emit('closeDetailModal');
    toast.add({ severity: 'success', summary: 'Success', detail: 'Task has been moved', group: 'br', life: 3000 });
};
watch(moveSearch, () => {
    moveTaskFetch(moveSearch.value);
});

const editCliked = ref(false);
const taskNameInput = ref('');
const editname = () => {
    editCliked.value = true;
    taskNameInput.value = taskDetails.value.name;
    const inputT = document.getElementById(`dTaskName`);
    nextTick(() => {
        if (inputT) {
            inputT.focus();
        }
    });
};

const handletaskNameUpdate = async () => {
    const taskDetailData = {
        id: taskDetails.value?.id,
        name: taskNameInput.value,
        project_id: projID
    };
    await editTask(taskDetailData);
    if (isTaskEdited.value === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Task name updated', group: 'br', life: 3000 });
        editCliked.value = false;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to upadte task name', group: 'br', life: 3000 });
    }
};
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-7 flex justify-content-start align-items-center" :class="editCliked === true ? 'gap-1' : 'gap-2'">
            <h5 class="m-0 detail-task-name cursor-pointer" :style="editCliked === true ? 'display: none;' : 'display: block;'" :title="taskDetails.name">
                {{ taskDetails.name }}
            </h5>
            <span style="min-width: auto; width: 95%" :style="editCliked === true ? 'display: block;' : 'display: none;'">
                <InputText :id="`dTaskName`" class="w-full d-edit-name-input" v-model="taskNameInput" type="text" placeholder="Edit task name" />
            </span>
            <Button v-if="editCliked === false" @click="editname" v-tooltip.top="`Edit Name`" severity="secondary" icon="pi pi-pencil" class="p-1 w-fit h-full" />
            <Button
                v-if="editCliked === true"
                @click="handletaskNameUpdate"
                v-tooltip.top="`Update Name`"
                severity="secondary"
                icon="pi pi-check"
                class="p-1 w-fit h-full"
                :style="editCliked === true ? 'font-size: 0.8rem !important; height: fit-content !important;' : ''"
            />
            <Button
                v-if="editCliked === true"
                @click="editCliked = false"
                v-tooltip.top="`Cancel`"
                severity="secondary"
                icon="pi pi-minus"
                class="p-1 w-fit h-full"
                :style="editCliked === true ? 'font-size: 0.8rem !important; height: fit-content !important;' : ''"
            />
        </div>
        <div class="col-12 lg:col-5 flex justify-content-between align-items-center">
            <h5 class="m-0 ml-2">Activity</h5>
            <div class="flex gap-1 align-items-center">
                <span @click="handleMoveTask" v-tooltip.top="{ value: 'Move Task' }" class="pi pi-eject my-auto cursor-pointer share-btn pl-2"></span>
                <span @click="handleShare" v-tooltip.top="{ value: 'Share Task' }" class="pi pi-share-alt my-auto cursor-pointer ml-1 mr-1 share-btn"></span>
                <span @click="handleShareTaskId" v-tooltip.top="{ value: 'Copy Task ID' }" class="ml-1 text-lg pi pi-copy my-auto cursor-pointer share-btn" style="padding-top: 1px"> </span>
                <span v-tooltip.top="{ value: `Created by ${taskDetails.created_by.name}` }" class="mr-2 ml-1 text-lg pi pi-user my-auto cursor-pointer share-btn" style="padding-top: 1px"> </span>
            </div>
        </div>

        <div class="col-12 lg:col-7 pt-0">
            <div>
                <!-- <pre>{{singleTask.key}}</pre> -->
                <!-- <pre>api task detail => {{taskDetails}}</pre> -->
                <!-- <pre>api task detail => {{taskDetails}}</pre> -->
                <!-- <pre>{{singleTask?.data?.tagsObj}}</pre> -->

                <div class="task-wrapper card">
                    <div class="task-det no-scrollbar">
                        <form @submit.prevent="handleTaskDetailSubmit" class="mt-2 task-detail ml-2">
                            <div class="flex justify-content-between gap-2 flex-wrap align-items-center">
                                <div class="w-full lg:w-fit">
                                    <div class="flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-calendar"></span>
                                            <p class="text-nowrap">Due Date:</p>
                                        </div>
                                        <FloatLabel class="input-fields">
                                            <Calendar :style="`width: 164.94px; border-radius:7px;height:36px`" v-model="dueDate" placeholder="Set Due Date" showTime hideOnDateTimeSelect hourFormat="12" @date-select="handleDateChange($event)" />
                                        </FloatLabel>
                                    </div>
                                    <div class="flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3 mb-3">
                                        <div class="flex justify-content-start gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-tags"></span>
                                            <p>Tags:</p>
                                        </div>
                                        <FloatLabel class="input-fields" style="width: 168px">
                                            <MultiSelect display="chip" v-model="tags" filter resetFilterOnHide :options="tagsLists" optionLabel="name" placeholder="Select Tags" class="w-full" />
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
                                    <div class="flex mt-4 mb-3 justify-content-start gap-6 align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property">
                                            <span class="pi pi-stopwatch"></span>
                                            <p class="text-nowrap">Track Time:</p>
                                        </div>
                                        <div class="clock-wrapper relative">
                                            <ConfirmPopup :close="hideManualTimer" group="headless">
                                                <template #container="{ message, acceptCallback, rejectCallback }">
                                                    <div class="border-round px-2 pt-3 pb-2">
                                                        <!-- <span class="text-dm">{{ message.message }}</span> -->

                                                        <div class="flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1">
                                                            <div>
                                                                <label for="hours" class="block mb-2 text-xs">Hours</label>
                                                                <InputNumber v-model="manualTimeHr" placeholder="00" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="23" id="hours">
                                                                    <template #incrementbuttonicon>
                                                                        <span class="pi pi-chevron-up manual-time-changer" />
                                                                    </template>
                                                                    <template #decrementbuttonicon>
                                                                        <span class="pi pi-chevron-down manual-time-changer" />
                                                                    </template>
                                                                </InputNumber>
                                                            </div>

                                                            <div>
                                                                <label for="minutes" class="block mb-2 text-xs">Minutes</label>
                                                                <InputNumber v-model="manualTimeMin" placeholder="00" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="59" id="minutes">
                                                                    <template #incrementbuttonicon>
                                                                        <span class="pi pi-chevron-up manual-time-changer" />
                                                                    </template>
                                                                    <template #decrementbuttonicon>
                                                                        <span class="pi pi-chevron-down manual-time-changer" />
                                                                    </template>
                                                                </InputNumber>
                                                            </div>
                                                        </div>

                                                        <!-- Flex container for buttons -->
                                                        <div class="flex justify-content-center align-items-center" style="margin-top: 0.49rem !important">
                                                            <Button icon="pi pi-check px-2 py-0 text-sm" label="" class="border-none w-full mx-3" :loading="mLoading" @click="addDuration(rejectCallback)" size="small"></Button>
                                                            <!-- <Button icon="pi pi-times px-2 py-0 text-white bg-red-400 manual-time-changer" class="bg-red-400 border-none" label="" outlined @click="rejectCallback" severity="secondary"
                                                                size="small" text></Button> -->
                                                        </div>
                                                    </div>
                                                </template>
                                            </ConfirmPopup>
                                            <Button
                                                :loading="timeLoading"
                                                class="clock-btn"
                                                v-tooltip.top="{ value: taskDetails?.is_timer_start == 'true' ? 'Stop' : 'Start' }"
                                                @click="handleClickClock"
                                                :icon="taskDetails?.is_timer_start == 'true' ? 'pi pi-stop' : 'pi pi-play'"
                                                :severity="taskDetails?.is_timer_start == 'true' ? ' stop-color' : ''"
                                                rounded
                                                aria-label="Filter"
                                            />

                                            <div class="text-sm absolute" @click="requireConfirmation($event)">
                                                {{ taskDetails?.is_timer_start == 'true' ? timeTrack : secondsToHHMMSS(taskDetails?.total_duration) }}
                                            </div>
                                        </div>

                                        <div>
                                            <!-- {{ timeTrack }} -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-content-between gap-2">
                                <div class="flex justify-content-start w-fit gap-2 align-items-center task-detail-property">
                                    <span class="pi pi-user"></span>
                                    <p>Assignee:</p>
                                </div>
                                <FloatLabel style="width: 100%" class="input-fields">
                                    <MultiSelect display="chip" v-model="assignees" filter resetFilterOnHide :options="usersLists" optionLabel="name" placeholder="Select Assignees" :maxSelectedLabels="3" class="w-full" />
                                </FloatLabel>
                            </div>

                            <!-- {{manualTime}} -->
                            <div class="field mt-3 flex flex-column md-description">
                                <div class="flex gap-2 justify-content-between mb-2">
                                    <div class="flex justify-content-start gap-2 align-items-center mb-1 task-detail-property">
                                        <span class="pi pi-sliders-h"></span>
                                        <p>Description:</p>
                                    </div>

                                    <ButtonGroup>
                                        <Button label="" icon="pi pi-pencil" size="small" severity="secondary" @click="handleViews('edit')" :class="{ 'bg-indigo-400 text-white': editorViewMode == 'edit' }" />
                                        <Button label="" size="small" icon="pi pi-eye" severity="secondary" @click="handleViews('preview')" :class="{ 'bg-indigo-400 text-white': editorViewMode == 'preview' }" />
                                    </ButtonGroup>
                                </div>

                                <!-- <pre>description {{ description.length}}</pre> -->
                                <!-- <Textarea id="description" class="border-gray-300" v-model="description" rows="4" cols="20" /> -->
                                <!-- <Editor v-if="description" v-model="description" editorStyle="height: 200px"/> -->
                                <!-- <Editor v-model="description" editorStyle="height: 150px" :readonly="!updateTaskP">
                                    <template v-slot:toolbar>
                                        <span class="ql-formats flex justify-content-end mr-0">
                                            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                                            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                                            <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
                                            <span class="ql-formats">
                                                <select class="ql-color"></select>
                                                <select class="ql-background"></select>
                                            </span>

                                            <button class="ql-list" type="button" data-pc-section="list" value="ordered"></button>
                                            <button class="ql-list" type="button" data-pc-section="list" value="bullet"></button>
                                            <button class="ql-link" type="button" data-pc-section="link"></button>
                                        </span>
                                    </template>
                                </Editor> -->

                                <MdEditor v-if="editorViewMode == 'edit'" v-model="description" editorStyle="height: 150px" :preview="false" :toolbars="[]" placeholder="Write here..." height="300px" theme="light" language="en-US" />

                                <MdEditor v-else @click="handleEditorView()" v-model="description" editorStyle="height: 150px" previewOnly class="custom-preview" placeholder="Write here..." height="300px" theme="light" language="en-US" />
                            </div>

                            <div v-if="updateTaskP" class="flex justify-content-end">
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
                                        <!-- <pre v-if="checkAttachmentType(item?.file == 'image')">{{checkAttachmentType(item?.file)}}</pre> -->
                                        <a
                                            v-if="checkAttachmentType(item?.file) === 'file'"
                                            target="_blank"
                                            class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative"
                                            :href="item?.file"
                                        >
                                            <div class="pi pi-file text-6xl attach-icon"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <a v-if="checkAttachmentType(item?.file) === 'image'" target="_blank" class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative" :href="item?.file">
                                            <img :src="item?.file" alt="" style="width: 90%; height: 80px; border-radius: 10px; border-top-left-radius: 10px; object-fit: cover" />
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <a
                                            v-if="checkAttachmentType(item?.file) === 'video'"
                                            target="_blank"
                                            class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative"
                                            :href="item?.file"
                                        >
                                            <div class="pi pi-video text-6xl attach-icon"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <a
                                            v-if="checkAttachmentType(item?.file) === 'pdf'"
                                            target="_blank"
                                            class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative"
                                            :href="item?.file"
                                        >
                                            <div class="pi pi-file-pdf text-6xl text-danger attach-icon"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <a
                                            v-if="checkAttachmentType(item?.file) === 'word'"
                                            target="_blank"
                                            class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative"
                                            :href="item?.file"
                                        >
                                            <div class="pi pi-file-word text-6xl text-blue attach-icon"></div>

                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <a
                                            v-if="checkAttachmentType(item?.file) === 'excel'"
                                            target="_blank"
                                            class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative"
                                            :href="item?.file"
                                        >
                                            <div class="pi pi-file-excel text-6xl attach-icon" style="color: #04aa6d"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div>
                                            </div>
                                        </a>
                                        <div @click="deleteFile(item?.id)" class="absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn">
                                            <i class="pi pi-times text-xs text-white"></i>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="updateTaskP" class="flex gap-2 w-full justify-content-center">
                                    <input @change="onFileChange" id="attachInput" class="float-right file-up-btn" type="file" placeholder="+" />
                                    <Button type="button" :loading="isLoading" @click="uploadFile" label="Upload" />
                                </div>
                            </TabPanel>
                            <TabPanel :header="`Sub Tasks ${subTasks?.length ? subTasks.length : 0}`">
                                <Button v-if="createTaskP" icon="pi pi-plus" label="Create" v-tooltip.right="{ value: `Create Sub Task` }" @click="emit('openCreateSpace', taskDetails?.id, 'sub-task')" class="mr-2 sub-create" severity="secondary" />
                                <TreeTable class="tree-table" :value="subTasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                                    <template #empty>
                                        <p class="text-center">No Data found...</p>
                                    </template>
                                    <Column class="cursor-pointer toneS" field="name" header="Name" expander :style="{ width: '45%' }">
                                        <template #body="slotProps">
                                            <span class="subtaskTitle" @click="emit('handleTaskDetailView', slotProps.node)" v-tooltip.left="{ value: `${slotProps.node.data.name}` }">{{ slotProps.node.data.name }} </span>
                                        </template>
                                    </Column>
                                    <Column field="assignee" header="Assignee" :style="{ width: '25%' }">
                                        <template #body="slotProps">
                                            <div class="flex justify-content-start align-items-start">
                                                <span v-for="(assigne, index) in slotProps.node.data.assignee" class="text-xs"> {{ assigne.name }}<span v-if="index < slotProps.node.data.assignee.length - 1">, </span> </span>
                                            </div>
                                        </template>
                                    </Column>
                                    <Column field="dueDateValue" header="Due Date" :style="{ width: '11.5%' }" style="text-wrap: nowrap"> </Column>
                                    <Column field="priority" header="Priority" :style="{ width: '10%' }">
                                        <template #body="slotProps">
                                            <span class="text-xs" :class="slotProps.node.data.priority?.name === 'High' ? 'text-danger' : slotProps.node.data.priority?.name === 'Medium' ? 'text-warning' : 'text-success'">
                                                {{ slotProps.node.data.priority?.name }}
                                            </span>
                                        </template>
                                    </Column>
                                    <Column field="action" header="Action">
                                        <template #body="slotProps">
                                            <div class="action-dropdown-det">
                                                <Button style="width: 30px; height: 30px; border-radius: 50%" icon="pi pi-ellipsis-v" class="action-dropdown-det-toggle" />
                                                <div class="action-dropdown-content-det">
                                                    <Button icon="pi pi-trash" class="mr-1 ac-btn dlt-action" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                                                    <Button icon="pi pi-cog" class="mr-1 ac-btn view-action" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                                                    <Button icon="pi pi-pencil" class="mr-1 ac-btn edit-action" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                                                    <Button icon="pi pi-plus" class="ac-btn sub-action" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                                                </div>
                                            </div>
                                        </template>
                                    </Column>
                                </TreeTable>
                            </TabPanel>
                            <TabPanel :header="`Bounce ${vModelBncStatus?.is_bounce === 'Yes' ? '1' : ''}`">
                                <div class="card">
                                    <div class="flex justify-content-start align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start gap-2 align-items-center bounce-detail-property">
                                            <span class="pi pi-flag"></span>
                                            <p class="text-nowrap">Bounce Status:</p>
                                        </div>
                                        <Dropdown
                                            @change="changeBounceStatusData(vModelBncStatus)"
                                            :disabled="!editBounceP"
                                            v-model="vModelBncStatus"
                                            :options="bounceStatus"
                                            optionLabel="is_bounce"
                                            placeholder="Select Status"
                                            style="width: 146.41px"
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-5 pt-0">
            <div>
                <div class="comment-wrapper card no-scrollbar">
                    <div class="comments no-scrollbar">
                        <div :class="showActivitiyBtn === true ? 'flex gap-2' : ''">
                            <div class="my-2 text-surface-800">
                                <Button @click="showActivitiy" label="↓  History" v-if="showActivitiyBtn" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                            <div class="my-2 text-surface-800">
                                <Button @click="showJustification" label="↓  Justification" v-if="showJustificationBtn && taskDetails.deadline_miss_details.length > 0" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                        </div>
                        <div v-if="activityDiv">
                            <ul v-for="act in taskActivity" :key="act" style="margin-left: -15px; margin-top: -6px">
                                <li v-html="act.title" style="font-size: smaller !important"></li>
                            </ul>
                            <div class="my-2 text-surface-800">
                                <Button @click="hideActivity" label="↑ Hide" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                        </div>
                        <div v-if="justificationDiv">
                            <p class="mb-0">Deadline Missed: {{ taskDetails?.deadline_miss_count?.missed }}</p>
                            <p>Deadline Extended: {{ taskDetails?.deadline_miss_count?.extend }}</p>

                            <ul v-for="act in taskDetails.deadline_miss_details" :key="act" style="margin-left: -15px; margin-top: -6px">
                                <li style="font-size: smaller !important">
                                    <div class="flex flex-column align-items-start justify-content-start">
                                        <span v-html="act.reason"></span>
                                        <span class="capitalize">
                                            <i> Type: {{ act.type }} - {{ formattedTime(act.created_at) }} </i>
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            <div class="my-2 text-surface-800">
                                <Button @click="hideJustification" label="↑ Hide" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                        </div>
                        <Card class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                            <template #title>
                                <div class="flex justify-content-start align-items-center">
                                    <img class="mr-2" v-if="val.commentator_image" :src="val.commentator_image" alt="" style="width: 28px; height: 28px; border-radius: 50%" />
                                    <Avatar v-else :label="val.commentator_name.charAt()" class="mr-2 capitalize" size="small" style="background-color: gray; color: #ededed; border-radius: 50%" />
                                    <p class="text-lg">{{ val.commentator_name }}</p>
                                </div>
                            </template>
                            <template #content>
                                <div v-if="setFileUrl(val?.file)" class="flex justify-content-start my-2">
                                    <a :href="val?.file" target="_blank" class="bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file" style="background-color: #f7fafc">
                                        <div class="pi pi-file"></div>
                                        <div class="attach-detail flex flex-column justify-content-center align-items-center">
                                            <div class="text-xs">{{ setFileUrl(val?.file) }}</div>
                                        </div>
                                    </a>
                                </div>
                                <p v-html="val?.comment ? val?.comment : ''" class="m-0 ml-1 commentedText" style="font-size: 0.9rem"></p>
                                <i style="line-height: 0" class="pb-1 float-right mt-3 mb-2">{{ formattedTime(val.time) }}</i>
                            </template>
                        </Card>
                    </div>
                    <form @submit.prevent="handleTaskComment" class="comment-add">
                        <div class="text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative" v-if="commentFile">
                            <div>
                                <span class="pi pi-file-import mr-2"></span> <span>{{ commenFileName }}</span>
                            </div>
                            <div @click="handleCloseCommetFile" class="close-comment">
                                <i class="pi pi-times"></i>
                            </div>
                        </div>
                        <div class="task-comment">
                            <Editor class="mb-2" placeholder="Add comment" v-model="taskCommentInput" :modules="modules" editorStyle="height: 100px">
                                <template v-slot:toolbar>
                                    <span class="ql-formats flex justify-content-end mr-0">
                                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                                        <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
                                        <span class="ql-formats">
                                            <select class="ql-color"></select>
                                            <select class="ql-background"></select>
                                        </span>

                                        <button class="ql-list" type="button" data-pc-section="list" value="ordered"></button>
                                        <button class="ql-list" type="button" data-pc-section="list" value="bullet"></button>
                                        <button class="ql-link" type="button" data-pc-section="link"></button>
                                    </span>
                                </template>
                            </Editor>

                            <!-- <div class="flex gap-2 justify-content-end mb-2">
                                <ButtonGroup>
                                    <Button 
                                        label="" 
                                        icon="pi pi-pencil"
                                        severity="secondary" 
                                        @click="handleCommentViews('edit')" 
                                        :class="{ 'bg-indigo-400 text-white': commentEditorViewMode == 'edit' }" 
                                        />
                                    <Button 
                                        label="" 
                                        icon="pi pi-eye"
                                        severity="secondary" 
                                        @click="handleCommentViews('preview')" 
                                        :class="{ 'bg-indigo-400 text-white': commentEditorViewMode == 'preview' }" 
                                        />
                                </ButtonGroup>
                            </div> -->

                            <!-- <div class="mb-3 comment-editor relative">
                                <MdEditor 
                                    v-if="commentEditorViewMode == 'edit'"
                                    v-model="taskCommentInput" 
                                    @input="handleInput"
                                    :preview="false"
                                    placeholder= 'Add comment'
                                    height="150px" 
                                    theme="light" 
                                    language="en-US" 
                                    noFooters
                                />

                                <MdEditor 
                                    v-else
                                    v-model="taskCommentInput" 
                                    previewOnly
                                    class="custom-preview-comment"
                                    height="200px" 
                                    theme="light" 
                                    language="en-US" 
                                    noFooters
                                />
                                Mention Dropdown
                                <div v-if="showMentionDropdown" class="mention-dropdown">
                                <ul>
                                    <li v-for="user in mentionList" :key="user" @click="insertMention(user)">
                                    {{ user.value }}
                                    </li>
                                </ul>
                                </div>
                            </div> -->

                            <input class="hidden" type="file" ref="fileInput" @change="handleFileChange" />

                            <Button icon="pi pi-cloud-upload" @click="handleFileUpload" aria-label="Filter" />
                            <Button class="ml-2" type="submit" icon="pi pi-plus" label="Add" :loading="btnLoading" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Move Task -->
    <OverlayPanel ref="op">
        <div class="flex flex-column gap-3 w-25rem">
            <div>
                <div class="flex justify-content-between align-items-center">
                    <span class="font-medium text-900 block mb-2">Move this Task</span>
                    <Button style="border: none !important" icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" class="mCrossIcon" @click="hideMoveTask" />
                </div>
                <!-- <pre>{{ moveTaskData }}</pre> -->
                <InputGroup>
                    <InputText v-model="moveSearch" placeholder="Search Task" class="w-25rem"></InputText>
                    <InputGroupAddon>
                        <i class="pi pi-search"></i>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div>
                <span class="font-medium text-900 block mb-2">Tasks</span>
                <div @click="() => handleTaskMove(tasks)" class="task-card" v-for="tasks in moveTaskData">
                    <!-- <pre>{{ tasks }}</pre> -->
                    {{ tasks?.data?.name }}
                </div>
            </div>
        </div>
    </OverlayPanel>
</template>

<style lang="scss">
.share-btn:hover {
    animation: forwardAnimation 0.3s ease-in forwards;
}

@keyframes forwardAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.share-btn:not(:hover) {
    /* Add your default state styles here */
    animation: backwardAnimation 0.3s ease-in reverse forwards;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
}

@keyframes forwardAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1.1);
    }
}

@keyframes backwardAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1.1);
    }
}

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
    overflow-y: auto;
    height: 76vh;
    padding: 5px !important;
    background-color: #f7fafc;
}

.comments {
    overflow-y: auto;
    height: 100%;
    max-height: 73%;
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
    height: 76vh;
    padding: 5px !important;
}

.task-det {
    overflow-y: auto;
    height: 100%;
    padding: 5px;
}

.attach-sec {
    overflow-x: scroll;
    white-space: nowrap;
    /* Prevents wrapping of child elements */
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}

.attach-sec::-webkit-scrollbar {
    width: 10px;
    /* Width of the scrollbar */
    height: 10px;
    /* Height of the scrollbar */
}

.attach-sec::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Track color */
}

.attach-sec::-webkit-scrollbar-thumb {
    background: #888;
    /* Thumb color */
}

.attach-sec::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* Hover state color */
}

.attachment-wrapper {
    margin-bottom: 0px !important;
    color: #444;
}

.attach-icon {
    position: relative;
    top: -16px;
}

.action-dropdown-det {
    position: relative;
    display: inline-block;
}

.action-dropdown-content-det {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: fit-content;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px 5px;
}

.action-dropdown-content-det button {
    width: 100%;
    text-align: left;
    padding: 10px;
    border: none;
}

.action-dropdown-det:hover .action-dropdown-content-det {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 10px 5px;
    top: -10px;
    left: -147px;
    /*left: -158px;*/
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
    background: #6366f1;
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
    background-color: #8486eb !important;
    color: white !important;
}

.attach-detail {
    border-top: 1px solid #e2e8f0;
    font-weight: 600;
}

@media (max-width: 991px) {
    .comment-text {
        height: 75px !important;
    }
}

.comment-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
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
    width: 30px;
    height: 30px;
    position: absolute;
    right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock-btn:hover {
    box-shadow: none;
}

.pi-stop {
    font-size: 0.7rem;
    margin-top: 0.1rem;
}

.stop-color {
    background: #f38ec0;
    border: 1px solid #f38ec0;
}

.pi-play {
    font-size: 0.8rem;
    margin-left: 2px;
    margin-top: 1px;
}

.attch-w {
    visibility: hidden;
}

.detail-task-name {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    max-width: 94%;
}

.text-danger {
    color: red;
}

.text-blue {
    color: #2a78cc;
}

.file-up-btn {
    width: 65% !important;
}

a {
    cursor: pointer !important;
}

.ql-editing {
    left: 0px !important;
}

.tone {
    overflow: hidden !important;
    /*text-overflow: ellipsis !important;*/
    white-space: nowrap !important;
}

.sub-create {
    font-size: 12px !important;
}

.sub-create .pi-plus {
    font-size: 12px !important;
}

.no-scrollbar::-webkit-scrollbar {
    display: none !important;
}

.ql-toolbar.ql-snow {
    padding: 4px !important;
}

.manual-wrapper {
    .p-inputnumber-button {
        padding: 3px 0 !important;
    }
}

.manual-time-changer {
    font-size: 0.65rem !important;
}

.sub-action {
    background-color: #22c55e;
}

.edit-action {
    background-color: #a855f7;
}

.view-action {
    background-color: #0ea5e9;
}

.dlt-action {
    background-color: #ef4444;
}

.toneS {
    overflow: hidden !important;
    /*text-overflow: ellipsis !important;*/
    white-space: nowrap !important;
}

.subTaskTitle:hover {
    color: #00c8ff;
    font-weight: 500;
}

.uniq-id-wrapper {
    border: 1px solid gray;
    padding: 3px 5px;
    border-radius: 5px;
}

/* Css for mention container */
.ql-mention-list-container {
    max-height: 150px;
    max-width: 200px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1000;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
.ql-mention-list {
    margin: 10px 0;
    padding: 0 5px;
    list-style: none;
}
.ql-mention-list-item {
    cursor: pointer;
    padding: 5px 12px;
}
.ql-mention-list-item:hover {
    cursor: pointer;
    background: #eef2ff;
    border-radius: 3px;
}
.mention {
    font-weight: 700;
    color: #6366f1;
}

.commentedText .ql-mention-denotation-char {
    display: none;
}
.custom-preview {
    border: 1px solid #e6e6e6;
    padding: 0 0.5rem;
    height: 300px;
}
.custom-preview-comment {
    border: 1px solid #e6e6e6;
    padding: 0 0.5rem;
    height: 200px;
    margin-bottom: 15px;
}
.md-editor-footer {
    display: none;
}

.md-description .md-editor {
    height: 200px;
}

.comment-editor .md-editor {
    height: 200px;
}
.md-editor-content .md-editor-autocomplete {
    z-index: 9999 !important;
    display: block !important;
}

/* Dropdown styles */
.mention-dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    max-height: 150px;
    overflow-y: auto;
    z-index: 9999;
    top: 65px;
    left: 50px;
}

.mention-dropdown ul {
    list-style-type: none;
    padding: 0;
}

.mention-dropdown li {
    padding: 5px;
    cursor: pointer;
}

.mention-dropdown li:hover {
    background-color: #f0f0f0;
}

.d-edit-name-input {
    padding: 0.25rem 0.75rem !important;
}

.mCrossIcon {
    padding-top: 0 !important;
}

.mCrossIcon:hover {
    background: none !important;
}
</style>
