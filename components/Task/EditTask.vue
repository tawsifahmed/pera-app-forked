<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div>
            <!-- <pre>{{singleTask}}</pre> -->
            <div class="field flex flex-column">
                <label for="name">Edit Task Name<i class="text-red-400 text-italic">*</i></label>
                <Textarea id="description" class="border-gray-300" v-model="taskNameEditInput" rows="3" cols="15"
                    :invalid="spaceDescriptionError" />
            </div>
            <div class="field">
                <label>Assignees</label>
                <MultiSelect display="chip" v-model="assignees" :options="usersLists" filter optionLabel="name"
                    placeholder="Select Assignees" :maxSelectedLabels="3" class="w-full" />
            </div>
            <div class="field">
                <label>Tags</label>
                <MultiSelect display="chip" v-model="tags" :options="tagsLists" filter optionLabel="name"
                    placeholder="Select Tags" :maxSelectedLabels="3" class="w-full" />
            </div>
            <div class="field">
                <!-- <pre>date{{dueDate}}</pre> -->
                <label>Due Date</label>
                <Calendar v-model="dueDate" class="w-full" placeholder="Set Due Date" showTime hourFormat="12"/>
            </div>
            <div class="field">
                <label>Priority</label>
                <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="Set Priority"
                    class="w-full" />
            </div>
            <br />
            <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields
            </p>
            <div class="create-btn-wrapper">
                <Button label="Update" icon="pi pi-check" text="" @click="handleUpdateTask" :loading="btnLoading" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { editTask } = useCompanyStore();
const { isTaskEdited, detectDuplicateTask } = storeToRefs(useCompanyStore());
const { singleTask, usersLists, tagsLists, projects } = defineProps(['singleTask', 'usersLists', 'tagsLists', 'projects']);
const toast = useToast();
const btnLoading = ref(false);

const taskEditDescriptionInput = ref(null);

const taskNameEditInput = ref(singleTask?.data?.name);
const dueDate = ref(singleTask?.data?.dueDate ? new Date(singleTask.data.dueDate).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null);

const assignees = ref(null);
assignees.value = singleTask?.data?.assigneeObj ? singleTask?.data?.assigneeObj.map((obj) => ({ id: obj.id, name: obj.name  })) : '';

const tags = ref(singleTask?.data?.tagsObj);

const priority = ref(null);
priority.value = singleTask.data.priority ? { name: singleTask.data.priority, code: singleTask.data.priority } : '';

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const EditErrorHandler = ref(false);

const emit = defineEmits(['closeEditModal']);

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
        const editTaskData = {
            id: singleTask.key,
            name: taskNameEditInput.value,
            description: taskEditDescriptionInput.value,
            priority: priority.value.name,
            dueDate: sendEditDate ? new Date(new Date(sendEditDate).getTime() - (18 * 60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ') : null,
            assignees: assignees.value.map((obj) => obj.id),
            tags: tags.value.map((obj) => obj.id),
            project_id: projects
        };
        
        if(dueDate.value){
            const postSubDate = new Date(dueDate.value)
            postSubDate.setDate(postSubDate.getDate() - 1);
            dueDate.value = postSubDate ? new Date(postSubDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').toLowerCase() : null;
        }
        
        await editTask(editTaskData);
        if (detectDuplicateTask.value === true) {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Cannnot edit, edited task name already exists!', group: 'br', life: 3000 });
        }
        else if (isTaskEdited.value === true) {
            btnLoading.value = false;
            emit('closeEditModal', false);

            emit('visibleEdit', 'visibleEdit');
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Task updated Successfully', group: 'br', life: 3000 });
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task!', group: 'br', life: 3000 });
        }
    }
};
</script>

<style lang="scss" scoped>
.create-btn-wrapper {
    display: flex;
    justify-content: end;
}
</style>
