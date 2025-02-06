<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div>
            <!-- <pre>{{singleTask}}</pre> -->
            <div class="field flex flex-column">
                <label for="name">Edit Task Name<i class="text-red-400 text-italic">*</i></label>
                <Textarea id="editTaskName" class="border-gray-300" v-model="taskNameEditInput" rows="3" cols="15" :invalid="spaceDescriptionError" />
            </div>
            <div class="field">
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
                <MdEditor v-if="editorViewMode == 'edit'" v-model="taskDescripEdit" editorStyle="height: 80px" style="height: 120px !important" :preview="false" :toolbars="[]" height="300px" theme="light" language="en-US" />

                <MdEditor v-else @click="handleEditorView()" v-model="taskDescripEdit" editorStyle="height: 80px" style="height: 120px !important" previewOnly class="custom-preview" height="300px" theme="light" language="en-US" />

                <!-- <Textarea class="w-full" id="description" v-model="description" rows="10" placeholder="Scrum Description..." /> -->
                <!-- <Editor v-model="taskDescripEdit" editorStyle="height: 120px">
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
            </div>
            <div class="field">
                <label>Assignees</label>
                <MultiSelect display="chip" v-model="assignees" :options="usersLists" filter resetFilterOnHide optionLabel="name" placeholder="Select Assignees" :maxSelectedLabels="3" class="w-full" />
            </div>
            <div class="field">
                <label>Tags</label>
                <MultiSelect display="chip" v-model="tags" :options="tagsLists" filter resetFilterOnHide optionLabel="name" placeholder="Select Tags" :maxSelectedLabels="3" class="w-full" />
            </div>
            <div class="field">
                <!-- <pre>date{{dueDate}}</pre> -->
                <label>Due Date</label>
                <Calendar v-model="dueDate" class="w-full" placeholder="Set Due Date" showTime hideOnDateTimeSelect hourFormat="12" @date-select="handleDateChange($event)" />
            </div>
            <div class="field">
                <label>Priority</label>
                <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="Set Priority" class="w-full" />
            </div>
            <br />
            <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields</p>
            <div class="edt-btn-wrapper mb-0">
                <Button label="Update" icon="pi pi-check" text="" @click="handleUpdateTask" :loading="btnLoading" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useClockStore } from '~/store/clock';

import { useCompanyStore } from '~/store/company';
import Editor from 'primevue/editor';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const { handleMissDeadlineShowTimer } = useClockStore();
const { trackedTime, deadlineJustifyProvided } = storeToRefs(useClockStore());

const { editTask } = useCompanyStore();
const { isTaskEdited, detectDuplicateTask } = storeToRefs(useCompanyStore());
const { singleTask, usersLists, tagsLists, projects } = defineProps(['singleTask', 'usersLists', 'tagsLists', 'projects']);
const toast = useToast();
const btnLoading = ref(false);

// const taskEditDescriptionInput = ref(null);

const taskNameEditInput = ref(singleTask?.data?.name);

const taskDescripEdit = ref(singleTask?.data?.description || ' ');

const isDescriptionEdited = ref(false);
watch(taskDescripEdit, (newValue) => {
    if (newValue.length === 0) {
        taskDescripEdit.value = ' ';
    }
    isDescriptionEdited.value = true;
});

const dueDate = ref(singleTask?.data?.dueDate ? new Date(singleTask.data.dueDate).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null);
const userHasModifiedTime = ref(false);

const assignees = ref(null);
assignees.value = singleTask?.data?.assigneeObj ? singleTask?.data?.assigneeObj.map((obj) => ({ id: obj.id, name: obj.name })) : '';
const isAsigneeEdited = ref(false);
watch(assignees, (newValue) => {
    isAsigneeEdited.value = true;
});

const tags = ref(singleTask?.data?.tagsObj);
const isTagsEdited = ref(false);
watch(tags, (newValue) => {
    isTagsEdited.value = true;
});

const priority = ref(null);
priority.value = singleTask.data.priority ? { name: singleTask.data.priority.name, code: singleTask.data.priority.code } : '';

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);
const editorViewMode = ref('preview');
const handleViews = (data) => {
    editorViewMode.value = data;
};

const editorPreview = ref(false);

const handleEditorView = () => {
    editorViewMode.value = 'edit';
    editorPreview.value = true;
};

const EditErrorHandler = ref(false);

const emit = defineEmits(['closeEditModal']);

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

const handleUpdateTask = async () => {
    btnLoading.value = true;
    if (taskNameEditInput.value === null) {
        EditErrorHandler.value = true;
        btnLoading.value = false;
    } else {
        EditErrorHandler.value = false;
        let sendEditDate;
        if (dueDate.value) {
            const selectedDate = new Date(dueDate.value);
            selectedDate.setDate(selectedDate.getDate() + 1);
            sendEditDate = selectedDate.toISOString();
        }

        const formattedDueDate = new Date(singleTask?.data?.dueDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        const editTaskData = {
            id: singleTask.key,
            name: taskNameEditInput.value,
            ...(isDescriptionEdited.value === true ? { description: taskDescripEdit.value } : {}),
            priority: priority.value.name,
            ...(checkDate.value !== formattedDueDate ? { dueDate: sendEditDate ? new Date(new Date(sendEditDate).getTime() - 18 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ') : null } : {}),
            ...(isAsigneeEdited.value === true ? { assignees: assignees.value.map((obj) => obj.id) } : {}),
            ...(isTagsEdited.value === true ? { tags: tags.value.map((obj) => obj.id) } : {}),
            project_id: projects
        };

        if (sendEditDate) {
            const postSubDate = new Date(sendEditDate);
            postSubDate.setDate(postSubDate.getDate() - 1);
            dueDate.value = postSubDate ? new Date(postSubDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null;
        }

        if(singleTask?.data.parent_task_id === null && singleTask?.data?.dueDate !== null && isDateEdited.value === true){
            handleMissDeadlineShowTimer(singleTask.key, projects, editTaskData.dueDate);
            delete editTaskData.dueDate;
        }

        await editTask(editTaskData);
        if (detectDuplicateTask.value === true) {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Cannnot edit, edited task name already exists!', group: 'br', life: 3000 });
        } else if (isTaskEdited.value === true) {
            btnLoading.value = false;
            emit('closeEditModal', false);
            emit('visibleEdit', 'visibleEdit');
            toast.add({ 
                severity: 
                'success', 
                summary: 'Successful', 
                detail: 'Task updated Successfully', 
                group: 'br', life: 3000 });
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
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task!', group: 'br', life: 3000 });
        }
    }
};

onMounted(() => {
    const editTaskName = document.getElementById('editTaskName');

    nextTick(() => {
        if (editTaskName) {
            editTaskName.focus();
        }
    });
});
</script>

<style lang="scss" scoped>
.edt-btn-wrapper {
    display: flex;
    justify-content: end;
}

#editTaskName {
    height: 75px !important;
}
</style>
