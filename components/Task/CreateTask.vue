<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div>
            <h4 class="text-center text-primary">{{ createTaskTitle }}</h4>
            <InputText type="hidden" v-model="tskId" />
            <!-- <p>{{taskId}}</p> -->
            <div>
                <FloatLabel class="mt-4 mb-2">
                    <InputText type="text" class="w-full px-2 py-2 shadow border task-edit" v-model="name" />
                    <label>Set Task Name</label>
                </FloatLabel>
            </div>
            <div class="mt-4">
                <FloatLabel class="mb-2">
                    <MultiSelect v-model="assignees" :options="usersLists" optionLabel="name" placeholder="" :maxSelectedLabels="3" class="w-full" />
                    <label>Select Assignee</label>
                </FloatLabel>
            </div>
            <div class="mt-4">
                <FloatLabel class="mb-2">
                    <Calendar v-model="dueDate" class="w-full" />
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
            <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
            <br />
            <div class="create-btn-wrappe">
                <Button @click="handleCreateTask" class="text-white py-2 px-6 tracking-wide" label="Create Task" :loading="btnLoading" />
            </div>
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
.create-btn-wrappe {
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
}
</style>
