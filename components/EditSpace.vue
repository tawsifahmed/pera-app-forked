
<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { editSpace } = useCompanyStore(); // use authenticateUser action from  auth store
const { isSpaceEdited } = storeToRefs(useCompanyStore()); 
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';

const {refSpaceId, singleCompany} = defineProps(['refSpaceId', 'singleCompany']);
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);

const dynamicDiv = ref(null);

const spaceAvatarPreview = ref(null);

const spaceNameInput = ref(refSpaceId?.name);

const spaceDescripInput = ref(refSpaceId?.description);

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


const handleEditSpace = async () => {
        if(spaceNameInput.value === null || spaceDescripInput.value === null || spaceAvatarPreview.value === null){
            errorHandler.value = true
            return
        }else{
            const editSpaceData = {
              'id': refSpaceId.id,
              'name': spaceNameInput.value,
              'description': spaceDescripInput.value,
              'company_id': singleCompany.id,
              'color': spaceAvatarPreview.value,
              // 'shared_status': selectedShareSpace.value,
              // 'task_statuses': taskStatusList.value,
              // 'features': selectedFeatures.value,
              // 'views': checkedViews,
          }
          console.log('spaceData', editSpaceData)

          
          await editSpace(editSpaceData);

          if(isSpaceEdited.value === true){
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

<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
      <div v-if="spaceFormInputs">
        <h4 class="text-center text-primary">Create Space</h4>
          
        <!-- <pre>{{refSpaceId}}</pre> -->
              <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Company: {{singleCompany?.name}}</p>
            </div>
            <FloatLabel class="w-full md:w-50rem mt-3 mb-2">
              <InputText type="text" class="w-full px-4 py-2 shadow border border-green-700 focus:border-purple-500" v-model="spaceNameInput" />
              <label>Set Space Name</label>
              
          </FloatLabel>
         
          <FloatLabel class="w-full md:w-50rem mt-4 mb-3">
            <InputText type="text" class="w-full px-4 py-2 shadow border border-green-700 focus:border-purple-500" v-model="spaceDescripInput"/>
            <label>Set Space Description</label>
            
          </FloatLabel>
          
          <h4 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Set Space Color</h4>
          <div class="m-0 pb-6 d-flex justify-content-center colorpicker-wrapper">
            <div class="flex justify-center items-start">
              <div id="dynamic-div" ref="dynamicDiv" class="d-flex align-items-center justify-content-center text-3xl">S</div>
              <div class="ml-2">
                <p class="text-xs ml-2 mb-1">COLORS</p>
                <div class="flex">
                    <div id="crimson" class='color' @click="changeColor"></div>
                    <div id="skyblue" class='color' @click="changeColor"></div>
                    <div id="orange" class='color' @click="changeColor"></div>
                    <div id="purple" class='color' @click="changeColor"></div>
                    <div id="cadetblue" class='color' @click="changeColor"></div>
                    <div id="burlywood" class='color' @click="changeColor"></div>
                    <div id="pink" class='color' @click="changeColor"></div>
                    <div id="lightseagreen" class='color' @click="changeColor"></div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <p v-if="errorHandler" style="color: red;"> Please fill/check up all the fields</p>
          <br>
          <div class="create-btn-wrapper">
            <Button @click="handleEditSpace" class="text-white py-2 px-6 tracking-wide" label="Update Space"/>
          </div>
      </div>


      <div v-if="showFinalMsg">
        <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Space edited successfully</h3>
           
        <div class="centering">
            <FloatLabel>
                <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                <p class="text-center mb-2">You can close the modal now.</p>
            </FloatLabel>
        </div>
    </div>

    </div>
</template>

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
  
</style>