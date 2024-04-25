<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
      
      <div v-if="spaceFormInputs">
              <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Space: {{singleSpace?.name}}</p>
            </div>
            <FloatLabel>
              <InputText
                type="text"
                class="form-control border border-primary"
                v-model="spaceNameInput"
              />
              <label>Set Space Name</label>
            </FloatLabel>
        
            <div class="my-4">
              <h1 class="text-dark text-center fw-bold">Setup space task status</h1>
              <div class="py-3">
                <div class="w-100">
                  <p class="text-uppercase text-muted">Add task statuses</p>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-items-center gap-2">
                      <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" />
                      <InputGroup class="d-flex border rounded w-75">
                        <InputText
                          class="form-control"
                          v-model="taskStatusName"
                          placeholder="e.g., TO-DO, DOING"
                        />
                        <InputGroupAddon
                          @click="addTaskStatus"
                          class="btn btn-outline-secondary"
                        >
                          <svg
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
                          </svg>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <p
                      v-if="addTaskSTatusError"
                      class="text-danger text-small"
                    >
                      Please Type task name!
                    </p>
                  </div>
        
                  <div class="d-flex flex-column gap-2 mt-3 ps-4">
                    <div
                      class="d-flex"
                      v-for="(task, index) in taskStatusList"
                      :key="index"
                    >
                      <div class="d-flex align-items-center border rounded w-25">
                        <div
                          class="me-2"
                          :style="{ backgroundColor: task.taskColor }"
                        ></div>
                        <p class="text-uppercase text-muted">
                          {{ task.taskName }}
                        </p>
                      </div>
                      <div @click="handleDeleteTask(index)" class="cursor-pointer ms-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107m-1.022-.165L18.16 19.673a2.25 a2.25 0 0 1-2.244 2.077H8.084a2.25 a2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between w-100 border-top mt-3 gap-4 position-absolute bottom-0">
                <Button
                  @click="() => { showSetSpaceColor = true; showSetupSpaceTask = false; }"
                  label="Prev"
                  class="btn btn-outline-primary px-3"
                />
                <Button
                  v-if="taskStatusNullCheck"
                  @click="() => { showSetupSpaceTask = false; showEnableFeatures = true; }"
                  label="Next"
                  class="btn btn-primary px-3"
                />
              </div>
            </div>
          <br>
          <p v-if="errorHandler" style="color: red;"> Please fill/check up all the fields</p>
          <br>
          <div class="create-btn-wrapper">
            <Button @click="handleCreateSpace" class="bg-purple-500 text-white py-2 px-6 tracking-wide" label="Create Space"/>
          </div>
      </div>


      <div v-if="showFinalMsg">
        <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Space created successfully</h3>
           
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
const { createSpace } = useCompanyStore(); // use authenticateUser action from  auth store
const { isSpaceCreated } = storeToRefs(useCompanyStore()); 
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';

const {singleSpace} = defineProps(['singleSpace']);
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const progress = ref(12.5);

const dynamicDiv = ref(null);

const spaceAvatarPreview = ref(null);

const spaceNameInput = ref(null);

const spaceDescripInput = ref(null);

const spaceColorPreview = ref(null);

console.log('spaceAvatarPreview', spaceAvatarPreview.value)

const changeColor = (event) => {
  if(dynamicDiv.value.style.backgroundColor === event.target.id){
    dynamicDiv.value.style.border = '2px solid black';
    dynamicDiv.value.style.backgroundColor = null;
    dynamicDiv.value.style.color = null;
    spaceAvatarPreview.value = null;
    spaceColorPreview.value.style.border = '2px solid black';
    spaceColorPreview.value.style.backgroundColor = null;
    spaceColorPreview.value.style.color = null;

  }else{
    dynamicDiv.value.style.backgroundColor = event.target.id;
    dynamicDiv.value.style.color = 'white';
    dynamicDiv.value.style.border = 'none';
    let storeAvatarData = {
      bgcolor: event.target.id,
      color: 'white' 
    }
    spaceAvatarPreview.value = storeAvatarData.bgcolor;
    // console.log('storeAvatarData', spaceAvatarPreview.value);

    spaceColorPreview.value.style.backgroundColor = event.target.id;
    spaceColorPreview.value.style.color = 'white';
    spaceColorPreview.value.style.border = 'none';
  }
};

const handleCreateSpace = async () => {
        if(spaceNameInput.value === null || spaceDescripInput.value === null || spaceAvatarPreview.value === null){
            errorHandler.value = true
            return
        }else{
            const createSpaceData = {
              'name': spaceNameInput.value,
              'description': spaceDescripInput.value,
              'company_id': singleCompany.id,
              'color': spaceAvatarPreview.value,
              // 'shared_status': selectedShareSpace.value,
              // 'task_statuses': taskStatusList.value,
              // 'features': selectedFeatures.value,
              // 'views': checkedViews,
          }
          console.log('spaceData', createSpaceData)

          
          
          await createSpace(createSpaceData);

          if(isSpaceCreated.value === true){
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

<style scoped>

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
  
</style>