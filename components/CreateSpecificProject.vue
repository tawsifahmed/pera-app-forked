<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import ColorPicker from 'primevue/colorpicker';
import { useWorkProjectStore } from '../store/workProjects';
const project = useWorkProjectStore(); // use authenticateUser action from  auth store
const { save } = storeToRefs(useWorkProjectStore());
const {singleSpace} = defineProps(['singleSpace']);
const companyFormInputs = ref(false);
const errorHandler = ref(false);

const taskStatusName = ref('');

const taskStatusList = ref([
    {
        'taskStatusName': 'Open',
        'taskStatusColor': `#6466f1`
    },
    {
        'taskStatusName': 'Doing',
        'taskStatusColor': `#ff0084`
    },
    {
        'taskStatusName': 'Dev Done',
        'taskStatusColor': `#12955d`
    },
]);

const colorHEX = ref('6466f1');
const taskStatusNullCheck = ref(null);
const addTaskSTatusError= ref(false);
const projectNameInput = ref(null);
const projectDescriptionInput = ref(null);

const showDialog = () => {
    companyFormInputs.value = true
}
const hideDialog = () => {
    companyFormInputs.value = false
}
const addTaskStatus = () => {
    taskStatusName.value ? addTaskSTatusError.value = false : addTaskSTatusError.value = true;
    if(taskStatusName?.value?.length > 0){
        const newTaskStatusList = {
            taskStatusName: taskStatusName.value,
            taskStatusColor: `#${colorHEX.value}`
        }
        taskStatusList.value.push(newTaskStatusList);
        taskStatusName.value = '';
    }else{
        addTaskSTatusError.value = true;
    }

    if(taskStatusList.value.length > 0){
        taskStatusNullCheck.value = true;
    }
};

const handleDeleteTask = (index) => {
    taskStatusList.value.splice(index, 1);
    if (taskStatusList.value.length == 0){
        taskStatusNullCheck.value = false;
    }
};

const handleCreateProject = async () => {
    if(projectNameInput.value === null || projectDescriptionInput.value === null || taskStatusList.value.length <= 0){
        errorHandler.value = true
    }else{
        errorHandler.value = false
        const createProjectData = {
            'name': projectNameInput.value,
            'description': projectDescriptionInput.value,
            'space_id': singleSpace.id,
            'statuses': taskStatusList.value,
        }

        //console.log('createProjectData', createProjectData)
        //return
        await project.createProjects(createProjectData);
        if(save.value === true){
            companyFormInputs.value = false
        }else{
            console.log('space not created')
        }
    }
}
</script>

<template>
    <div>
        <Button icon="pi pi-plus" class="p-button-sm  w-2rem h-2rem " @click="showDialog" severity="secondary" aria-label="Bookmark" text  />
        <Dialog v-model:visible="companyFormInputs" :style="{ width: '450px' }" header="Create Project" :modal="true" class="p-fluid">
            <div class="field">
                <label for="name">Create project for <strong>{{singleSpace?.name}}</strong> space</label>
            </div>
            <div class="field">
                <label for="name">Project Name</label>
                <InputText id="name" v-model="projectNameInput" required="true" />
            </div>
            <div class="field">
                <label for="name">Space Description</label>
                <Textarea id="description" v-model="projectDescriptionInput"  rows="3" cols="20" />
            </div>
            <div class="mb-4">
              <p class="text-slate-700 mb-2 tracking-wide left-3">Setup task status</p>
                <div class="container">
                    <InputGroup>
                        <InputGroupAddon>
                            <ColorPicker class="color-pick" style="width: 1.5rem" v-model="colorHEX" inputId="cp-hex" format="hex" />
                        </InputGroupAddon>
                        <InputText
                            class="form-control"
                            v-model="taskStatusName"
                            placeholder="e.g., TO-DO, DOING"
                        />
                        <InputGroupAddon
                            @click="addTaskStatus"
                            class="btn btn-outline-secondary cursor-pointer"
                        >
                            <p class="pi pi-plus  cursor-pointer"></p>
                        </InputGroupAddon>
                    </InputGroup>

                    <p v-if="addTaskSTatusError" class="text-danger text-small" >
                        Please Type task name!
                    </p>


                    <div class="row mt-2">
                        <div class="col-12 d-flex flex-column p-0">
                            <div
                                class="flex delete-task justify-content-between"
                                v-for="(task, index) in taskStatusList"
                                :key="index"
                            >
                                <div class="flex align-items-center">
                                    <div class="status-colors"
                                         :style="{ backgroundColor: task.taskStatusColor }"
                                    ></div>
                                    <p class="text-uppercase text-muteds">
                                        {{ task.taskStatusName }}
                                    </p>
                                </div>
                                <div @click="handleDeleteTask(index)" class="cursor-pointer cross-icon ms-1">
                                    <p class="pi pi-times"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center" v-if="errorHandler" style="color: red;"> Please add/fill/check up all the fields</p>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" text="" @click="handleCreateProject" />
            </template>
        </Dialog>
    </div>
</template>



<style lang="scss">
.color-pick{
    .p-colorpicker-preview {
        cursor: pointer;
        width: 1.5rem !important;
    }
}
.status-colors {
    height: 24px;
    width: 24px;
    border-radius: 5px;
    margin-right: 8px;
}
.delete-task{
    border: 1px solid rgb(203 213 225);
    padding: 5px;
    margin: 3px 0;
    border-radius: 5px;
}
.delete-task .cross-icon{
    border: 1px solid rgb(203, 213, 225);
    padding: 3px 5px;
    margin:0;
    border-radius: 5px;
}

</style>