<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div>
            <div class="field flex flex-column">
                <label for="name">Edit Task Name</label>
                <Textarea id="description" v-model="taskNameEditInput" rows="3" cols="15" :invalid="spaceDescriptionError" />
            </div>
            <!-- <div class="field">
                <label for="company">Set Task Name</label>
                <InputText v-model="taskNameEditInput" class="w-full" />
            </div> -->
            <div class="field">
                <label>Assignees</label>
                <MultiSelect display="chip" v-model="assignees" :options="usersLists" filter optionLabel="name" placeholder="Select Assignees" :maxSelectedLabels="3" class="w-full" />
            </div>
            <div class="field">
                <label>Due Date</label>
                <Calendar v-model="dueDate" class="w-full" placeholder="Set Due Date"/>
            </div>
            <div class="field">
                <label>Priority</label>
                <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="Set Priority" class="w-full" />
            </div>

            <br />
            <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields</p>
            <div class="create-btn-wrapper">
                <Button label="Update" icon="pi pi-check" text="" @click="handleUpdateTask" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { editTask } = useCompanyStore();
const { isTaskEdited } = storeToRefs(useCompanyStore());
const { singleTask, usersLists, projects } = defineProps(['singleTask', 'usersLists', 'projects']);
const toast = useToast();
const btnLoading = ref(false);

const taskEditDescriptionInput = ref(null);

const taskNameEditInput = ref(singleTask?.data?.name);
const dueDate = ref(singleTask?.data?.dueDate);

const assignees = ref(singleTask?.data?.assigneeObj);
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
        const editTaskData = {
            id: singleTask.key,
            name: taskNameEditInput.value,
            description: taskEditDescriptionInput.value,
            priority: priority.value.name,
            dueDate: dueDate.value,
            assignees: assignees.value.map((obj) => obj.id),
            project_id: projects
        };
        console.log('editTaskData', editTaskData);

        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            btnLoading.value = false;
            emit('closeEditModal', false);

            emit('visibleEdit', 'visibleEdit');
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task updated Successfully', life: 3000 });
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task!', life: 3000 });
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
