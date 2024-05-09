<template>
    <div>
        <InputText type="hidden" v-model="tskId" />
        <div class="field">
            <label for="company">Set Task Name</label>
            <InputText v-model="name" class="w-full" />
        </div>
        <div class="field">
            <label>Select Assignee</label>
            <MultiSelect display="chip" v-model="assignees" :options="usersLists" filter optionLabel="name" placeholder="" :maxSelectedLabels="3" class="w-full" />
        </div>
        <div class="field">
            <label>Due Date</label>
            <Calendar v-model="dueDate" class="w-full" />
        </div>
        <div class="field">
            <label>Selete Priority</label>
            <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="" class="w-full" />
        </div>
        <br />
        <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
        <div class="create-btn-wrapper">
            <Button label="Save" icon="pi pi-check" text="" @click="handleCreateTask" />
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { createTask } = useCompanyStore();
const { isTaskCreated } = storeToRefs(useCompanyStore());
const { createTaskTitle, taskId, projects, usersLists } = defineProps(['createTaskTitle', 'taskId', 'projects', 'usersLists']);
const toast = useToast();
const btnLoading = ref(false);

const tskId = ref(taskId);
// task create
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const name = ref(null);
const dueDate = ref(null);

const assignees = ref(null);
const priority = ref(null);

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const emit = defineEmits(['closeCreateModal']);

const handleCreateTask = async () => {
    btnLoading.value = true;
    if (name.value === null) {
        errorHandler.value = true;
        btnLoading.value = false;
    } else {
        errorHandler.value = false;
        const createTaskData = {
            name: name.value,
            dueDate: dueDate.value,
            assignees: assignees.value,
            priority: priority.value,
            project_id: projects,
            parent_task_id: taskId
        };
        await createTask(createTaskData);
        if (isTaskCreated.value === true) {
            btnLoading.value = false;
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            name.value = null;
            emit('closeCreateModal', false);
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task created Successfully', life: 3000 });
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to create task!', life: 3000 });
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
