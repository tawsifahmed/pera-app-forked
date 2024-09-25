<template>
    <div>
        <InputText type="hidden" v-model="tskId" />
        <div class="field flex flex-column">
            <label for="name">Set Task Name<i class="text-red-400 text-italic">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Textarea id="description" class="border-gray-300" v-model="name" rows="3" cols="20" :invalid="spaceDescriptionError" />
        </div>
        <!-- <div class="field">
            <label for="company">Set Task Name</label>
            <Textarea id="description" v-model="name" rows="3" cols="20" :invalid="spaceDescriptionError" />
        </div> -->
        <div class="field">
            <label>Assignees <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <MultiSelect display="chip" v-model="assignees" :options="usersLists" filter optionLabel="name"
                placeholder="Select Assignees" :maxSelectedLabels="5" class="w-full" />
        </div>
        <div class="field">
            <label>Tags <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <MultiSelect display="chip" v-model="tags" :options="tagsLists" filter optionLabel="name"
                placeholder="Select Tags" :maxSelectedLabels="5" class="w-full" />
        </div>
        <div class="field">
            <label>Due Date <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Calendar v-model="dueDate" class="w-full clndr" placeholder="Set Due Date" showTime hourFormat="12" />
        </div>
        <div class="field">
            <label>Priority <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Dropdown v-model="priority" :options="priorities" optionLabel="name" placeholder="Set Priority"
                class="w-full" />
        </div>
        <br />
        <p class="text-center" v-if="errorHandler" style="color: red">Please add task name</p>
        <div class="create-btn-wrapper mb-0">
            <Button label="Save" icon="pi pi-check" text="" @click="handleCreateTask" :loading="btnLoading" />
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { createTask } = useCompanyStore();
const { isTaskCreated, detectDuplicateTask } = storeToRefs(useCompanyStore());
const { createTaskTitle, taskId, projects, usersLists, tagsLists } = defineProps(['createTaskTitle', 'taskId', 'projects', 'usersLists', 'tagsLists']);
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
const tags = ref(null);
const priority = ref(null);

const priorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const emit = defineEmits(['closeCreateModal']);
console.log('duedate id', dueDate.value);

const handleCreateTask = async () => {
    btnLoading.value = true;
    if (name.value === null) {
        errorHandler.value = true;
        btnLoading.value = false;
    } else {
        errorHandler.value = false;
        let sendDate;
        if (dueDate.value) {
            const selectedDate = new Date(dueDate.value);
            selectedDate.setDate(selectedDate.getDate() + 1);
            sendDate = selectedDate.toISOString();
        }
        const createTaskData = {
            name: name.value, 
            dueDate: sendDate ? new Date(new Date(sendDate).getTime() - (18 * 60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ') : null,
            assignees: assignees.value?.map((assignee) => assignee.id),
            tags: tags.value?.map((tag) => tag.id),
            priority: priority.value?.name,
            project_id: projects,
            parent_task_id: taskId
        };
        if(dueDate.value){
            const postSubDate = new Date(dueDate.value)
            postSubDate.setDate(postSubDate.getDate() - 1);
            dueDate.value = postSubDate ? new Date(postSubDate).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '') : null;
        }
        
        await createTask(createTaskData);
        if (detectDuplicateTask.value === true) {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Task already exists!', group: 'br', life: 3000 });
        }
        else if (isTaskCreated.value === true) {
            btnLoading.value = false;
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            name.value = null;
            emit('closeCreateModal', false);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Task created Successfully', group: 'br', life: 3000 });
        } else {
            btnLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to create task!', group: 'br', life: 3000 });
        }
    }
};
</script>

<style lang="scss" scoped>
.create-btn-wrapper {
    display: flex;
    justify-content: end;
}

.clndr{
    cursor: pointer;
}
</style>
