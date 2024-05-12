<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
      
      <div v-if="spaceFormInputs">
        <!-- <pre>{{refProjectId}}</pre> -->
              <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Space: {{singleSpace?.name}}</p>
              </div>
                <FloatLabel class="mt-4 mb-2">
                  <InputText
                    type="text"
                    class="w-full px-4 py-2 shadow border border-green-700 focus:border-purple-500"
                    v-model="projectNameInput"
                  />
                  <label>Set Project Name</label>
                </FloatLabel>
                
                <FloatLabel class="mt-5 mb-4">
                  <InputText
                    type="text"
                    class="w-full px-4 py-2 shadow border border-green-700 focus:border-purple-500"
                    v-model="projectDescriptionInput"
                  />
                  <label>Set Project Description</label>
                </FloatLabel>
                
            <div class="mb-4">
              <h4 class="text-slate-700 mb-2 text-center font-semibold tracking-wide left-3">Setup space task status</h4>
              <div class="pb-3">
                <div class="container">
                  <div class="row">
                    <div class="col-12" style="width: 80%; margin: 0 auto;">
                      <!-- <p class="text-uppercase text-muted">Add task statuses</p> -->
                      <div class="d-flex flex-column gap-2">
                        <div class="d-flex align-items-center gap-2 status-fields">
                          <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" />
                          <InputGroup class="border rounded flex-grow-1">
                            <InputText
                              class="form-control"
                              v-model="taskStatusName"
                              placeholder="e.g., TO-DO, DOING"
                            />
                            <InputGroupAddon
                              @click="addTaskStatus"
                              class="btn btn-outline-secondary cursor-pointer"
                            >
                              <!-- <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg> -->
                              <p class="pi pi-plus-circle cursor-pointer"></p>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                        <p
                          v-if="addTaskSTatusError"
                          class="text-red-600 text-small"
                        >
                          Please Type task name!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row ps-4 wpp">
                    <div class="col-12 d-flex flex-column gap-2 ghj">
                      <div
                        class="d-flex delete-task"
                        v-for="(task, index) in taskStatusList"
                        :key="index"
                      >
                        <div class="d-flex align-items-center border rounded flex-grow-1 status-length">
                          <div
                            class="status-colors"
                            :style="{ backgroundColor: task.taskStatusColor }"
                          ></div>
                          <p class="text-uppercase text-muteds">
                            {{ task.taskStatusName }}
                          </p>
                        </div>
                        <div
                          @click="handleDeleteTask(index)"
                          class="cursor-pointer ms-1"
                        >
                          <p class="pi pi-trash"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <br>
          <p class="text-center" v-if="errorHandler" style="color: red;"> Please add/fill/check up all the fields</p>
          <br>
          <div class="create-btn-wrapper">
            <Button @click="handleCreateProject" class="text-white py-2 px-6 tracking-wide" label="Create Project"/>
          </div>
      </div>

      <div v-if="showFinalMsg">
        <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Project created successfully</h3>
           
        <div class="centering">
            <FloatLabel>
                <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                <p class="text-center mb-2">You can close the modal now.</p>
            </FloatLabel>
        </div>
    </div>

    </div>
</template>



<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { createProject } = useCompanyStore(); // use authenticateUser action from  auth store
const { isProjectCreated } = storeToRefs(useCompanyStore()); 
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';

const {refProjectId, singleSpace} = defineProps(['singleSpace', 'refProjectId']);
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const progress = ref(12.5);

const dynamicDiv = ref(null);

const spaceAvatarPreview = ref(null);


const taskStatusName = ref('');

const taskStatusList = ref([
  {
    'taskStatusName': 'Open',
    taskStatusColor: `#6466f1`
  },
  {
    'taskStatusName': 'Doing',
    taskStatusColor: `#ff0084`
  },
  {
    'taskStatusName': 'Dev Done',
    taskStatusColor: `#12955d`
  },
]);

console.log('taskStatusList', taskStatusList.value);

const colorHEX = ref('6466f1');

const taskStatusNullCheck = ref(null);

const addTaskSTatusError= ref(false);

const projectNameInput = ref(refProjectId?.name);

const projectDescriptionInput = ref(refProjectId?.description);

const spaceDescripInput = ref(null);

const spaceColorPreview = ref(null);


const addTaskStatus = () => {
  taskStatusName.value ? addTaskSTatusError.value = false : addTaskSTatusError.value = true;
  if(taskStatusName?.value?.length > 0){
    
    const newTaskStatusList = {
    taskStatusName: taskStatusName.value,
    taskStatusColor: `#${colorHEX.value}`
   }
   taskStatusList.value.push(newTaskStatusList);
   taskStatusName.value = '';
   console.log('taskStatusListType', typeof taskStatusList.value);
   console.log('taskStatusList', taskStatusList.value);
  }else{
    addTaskSTatusError.value = true;
  }

  if(taskStatusList.value.length > 0){
    taskStatusNullCheck.value = true;
  }
};

const handleDeleteTask = (index) => {
  taskStatusList.value.splice(index, 1);
  console.log('taskStatusList', taskStatusList.value);
  console.log('ss',taskStatusList.value.length);
  if (taskStatusList.value.length == 0){
    taskStatusNullCheck.value = false;
  }
};

const handleCreateProject = async () => {
        if(projectNameInput.value === null || projectDescriptionInput.value === null || taskStatusList.value.length <= 0){
            errorHandler.value = true
            // return
        }else{
            errorHandler.value = false
            const createProjectData = {
              'name': projectNameInput.value,
              'description': projectDescriptionInput.value,
              'space_id': singleSpace.id,
              // 'color': spaceAvatarPreview.value,
              // 'shared_status': selectedShareSpace.value,
              'task_statuses': taskStatusList.value,
              // 'features': selectedFeatures.value,
              // 'views': checkedViews,
          }
          console.log('projectData', createProjectData)

          // return
          
          await createProject(createProjectData);

          if(isProjectCreated.value === true){
              spaceFormInputs.value = false
              showFinalMsg.value = true   

              console.log('space created')
          }else{
              console.log('space not created')
          }
        }

        // const formData = new FormData()
        // formData.append('name', workSpaceName.value)
        // formData.append('size', wPeople.value)
        // formData.append('number_of_employees', numEmployees.value)
        // formData.append('company_role', rRole.value)

        
    }


onMounted(() => {
  // dynamicDiv.value.style.border = '2px solid black';
  // dynamicDiv.value.style.color = 'black';
  // spaceColorPreview.value.style.border = '2px solid black';
  // spaceColorPreview.value.style.color = 'black';
});


</script>

<style lang="scss" scoped>

#dynamic-div{
  height: 70px;
  width: 70px;
  border-radius: 18px;
  border: 2px solid black;
  color: black;
  display: flex;
}

.color{
  margin-left: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
}

#crimson{
  background-color: crimson;
}

#skyblue{
  background-color: skyblue;
}

#orange{
  background-color: orange
}

#purple{
  background-color: purple;
}

#cadetblue{
  background-color: cadetblue;
}

#burlywood{
  background-color: burlywood;
}

#pink{
  background-color: pink;
}

#lightseagreen{
  background-color: lightseagreen;
}


.tskk{
    color: transparent
}

.prog-bar {
  top: 24px;
}

.modal-container{
  
}

.company-name{
  border-radius: 5px;
  display: flex;
  justify-content: center;
}


.colorpicker-wrapper{
  display: flex;
}

.create-btn-wrapper{
  display: flex;
  justify-content: center;
}

.min-vh-30 {
  min-height: 30rem;
}
.max-vh-100 {
  max-height: 100%;
}
.cursor-pointer {
  cursor: pointer;
}

.status-fields{
  display: flex;
  flex-direction: row;
  height: fit-content;
}

.status-length{
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  justify-content: center;
  p{
    padding: 0 3px;
  }
}

.status-colors{
  height: 24px;
  width: 14px;
}

.delete-task{
  width: fit-content;
  display: flex;
  gap: 4px;
  font-size: 14px !important;
  justify-content: center;
  align-items: center;
}

.wpp{
  width: 50%;
  display: flex;
  justify-content: center;
}

.ghj{
  display: flex;
    justify-content: center;
    /* flex-direction: row; */
    align-items: center;
    margin-left: 180px;
}
.text-muteds{
  width: 90px;
  text-transform: uppercase;

}  
</style>