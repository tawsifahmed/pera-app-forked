<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
      
      <div v-if="spaceFormInputs">
              <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Project: {{singleProject?.name}}</p>
            </div>
            <div style="display: flex; justify-content: center; gap: 30px">
              <div class="" style="display: flex; justify-content: center; margin: 40px 0;">
                <FloatLabel >
                  <InputText
                    type="text"
                    class="form-control border border-primary"
                    v-model="projectNameInput"
                  />
                  <label>Set Project Name</label>
                </FloatLabel>
              </div>
              <div class="" style="display: flex; justify-content: center; margin: 40px 0;">
                <FloatLabel >
                  <InputText
                    type="text"
                    class="form-control border border-primary"
                    v-model="projectDescriptionInput"
                  />
                  <label>Set Project Description</label>
                </FloatLabel>
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

const {singleProject} = defineProps(['singleProject']);
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const progress = ref(12.5);

const dynamicDiv = ref(null);

const spaceAvatarPreview = ref(null);


const taskStatusName = ref('');

const taskStatusList = ref([]);

const colorHEX = ref('6466f1');

const taskStatusNullCheck = ref(null);

const addTaskSTatusError= ref(false);

const checked = ref(false);

const checkedViews = ref([]);

const defViewsChecker = ref(null);

const projectNameInput = ref(null);

const projectDescriptionInput = ref(null);

const spaceDescripInput = ref(null);

const spaceColorPreview = ref(null);

// const changeColor = (event) => {
//   if(dynamicDiv.value.style.backgroundColor === event.target.id){
//     dynamicDiv.value.style.border = '2px solid black';
//     dynamicDiv.value.style.backgroundColor = null;
//     dynamicDiv.value.style.color = null;
//     spaceAvatarPreview.value = null;
//     spaceColorPreview.value.style.border = '2px solid black';
//     spaceColorPreview.value.style.backgroundColor = null;
//     spaceColorPreview.value.style.color = null;

//   }else{
//     dynamicDiv.value.style.backgroundColor = event.target.id;
//     dynamicDiv.value.style.color = 'white';
//     dynamicDiv.value.style.border = 'none';
//     let storeAvatarData = {
//       bgcolor: event.target.id,
//       color: 'white' 
//     }
//     spaceAvatarPreview.value = storeAvatarData.bgcolor;
//     // console.log('storeAvatarData', spaceAvatarPreview.value);

//     spaceColorPreview.value.style.backgroundColor = event.target.id;
//     spaceColorPreview.value.style.color = 'white';
//     spaceColorPreview.value.style.border = 'none';
//   }
// };


const addTaskStatus = () => {
  taskStatusName.value ? addTaskSTatusError.value = false : addTaskSTatusError.value = true;
  if(taskStatusName?.value?.length > 0){
    
    const newTaskStatusList = {
    taskName: taskStatusName.value,
    taskColor: `#${colorHEX.value}`
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
        console.log('spaceData', createProjectData)

        
        
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
  width: 70px;
}  
</style>