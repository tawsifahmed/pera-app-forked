<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div>
            <h4 class="text-center text-primary">Task</h4>
            <div>
                <FloatLabel class="mt-4 mb-2">
                    <InputText type="text" class="w-full px-2 py-2 shadow border task-edit" v-model="taskNameEditInput" />
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
            <p class="text-center" v-if="EditErrorHandler" style="color: red">Please add/fill/check up all the fields</p>
            <br />
            <div class="create-btn-wrappe">
                <Button @click="handleUpdateTask" class="text-white py-2 px-6 tracking-wide" label="Save" :loading="btnLoading" />
            </div>
        </div>

        
    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { editTask } = useCompanyStore();
const { isTaskEdited } = storeToRefs(useCompanyStore());
const {singleTask, usersLists, projects} = defineProps(['singleTask', 'usersLists', 'projects']);
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

const emit = defineEmits(["closeEditModal"]);

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
            emit("closeEditModal", false);

            emit("visibleEdit", 'visibleEdit');
            toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task updated Successfully', life: 3000 });
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task!', life: 3000 });
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