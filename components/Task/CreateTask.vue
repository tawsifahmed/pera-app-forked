<template>
        <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
            <div>
                <h4 class="text-center text-primary">{{ createTaskTitle }}</h4>
                <InputText type="hidden" v-model="tskId" />
                <!-- <p>{{taskId}}</p> -->
                <div>
                    <FloatLabel class="mt-4 mb-2">
                        <InputText type="text" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="taskNameInput" />
                        <label>Set Task Name</label>
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
const { createTask, addTaskComment, getTaskDetails } = useCompanyStore();
const { isTaskCreated, isTaskCommentCreated, singleTaskComments } = storeToRefs(useCompanyStore());
const {createTaskTitle, taskId, projects} = defineProps(['createTaskTitle', 'taskId', 'projects']);
const toast = useToast();
const btnLoading = ref(false);

const tskId = ref(taskId);
// task create
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const taskNameInput = ref(null);

const emit = defineEmits(["closeCreateModal"]);

const handleCreateTask = async () => {
    btnLoading.value = true;
    if (taskNameInput.value === null) {
        errorHandler.value = true;
        btnLoading.value = false;
    } else {
        errorHandler.value = false;
        const createTaskData = {
            name: taskNameInput.value,
            project_id: projects,
            parent_task_id: taskId
        };
        console.log('createTaskData', createTaskData);
        await createTask(createTaskData);
        if (isTaskCreated.value === true) {
            btnLoading.value = false;
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            taskNameInput.value = null;
            emit("closeCreateModal", false);
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