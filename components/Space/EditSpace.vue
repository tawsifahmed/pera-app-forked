
<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { editSpace } = useCompanyStore(); // use authenticateUser action from  auth store
const { isSpaceEdited } = storeToRefs(useCompanyStore()); 
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';

const {refSpaceId, singleCompany} = defineProps(['refSpaceId', 'singleCompany']);
const spaceFormInputs = ref(true);
const errorHandler = ref(false);
const toast = useToast();


const spaceAvatarPreview = ref(refSpaceId?.color);

const spaceNameInput = ref(refSpaceId?.name);

const spaceDescripInput = ref(refSpaceId?.description);

const spaceColorPreview = ref(null);

console.log('spaceAvatarPreview', spaceAvatarPreview.value)

const changeColor = (color) => {
    spaceAvatarPreview.value = color;
};

const emit = defineEmits(['closeEditSpace']);



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
              
              emit('closeEditSpace', false);
              toast.add({ severity: 'success', summary: 'Successfull', detail: 'Space Updated Successfully', life: 3000 });   

              console.log('space created')
          }else{
              toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update space', life: 3000 });
              console.log('space not created')
              
          }
        }
    }
</script>

<template>
    <div class="">
      <div v-if="spaceFormInputs">  
        <!-- <pre>{{refSpaceId}}</pre> -->
              <!-- <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Company: {{singleCompany?.name}}</p>
            </div> -->
          <div class="field flex flex-column">
              <label for="name">Space Name</label>
              <InputText id="name" v-model="spaceNameInput" required="true" :invalid="spaceNameError" />
          </div>
          <div class="field flex flex-column">
              <label for="name">Space Description</label>
              <Textarea id="description" v-model="spaceDescripInput" rows="3" cols="20" :invalid="spaceDescriptionError" />
          </div>
          
          <div class="field">
            <label for="name">Space Color</label>
            <div class="m-0 d-flex colorpicker-wrapper">
                <div class="flex justify-center align-items-center">
                    <div id="dynamic-div" :style="`background-color: ${spaceAvatarPreview};`" class="d-flex align-items-center justify-content-center text-3xl text-white">{{spaceNameInput ? spaceNameInput.charAt(0).toUpperCase() : 'S'}}</div>
                    <div class="ml-2">
                        <div class="flex">
                            <div id="white" class="color" @click="changeColor('#e5ded4')"></div>
                            <div id="gray" class="color" @click="changeColor('#9e9e9e')"></div>
                            <div id="orange" class="color" @click="changeColor('#ff9800')"></div>
                            <div id="purple" class="color" @click="changeColor('#9c27b0')"></div>
                            <div id="cadetblue" class="color" @click="changeColor('#e91e63')"></div>
                            <div id="burlywood" class="color" @click="changeColor('#4caf50')"></div>
                            <div id="pink" class="color" @click="changeColor('#f44336')"></div>
                            <div id="lightseagreen" class="color" @click="changeColor('#009688')"></div>
                            <div id="brown" class="color" @click="changeColor('#795548')"></div>
                            <div id="cyan" class="color" @click="changeColor('#00bcd4')"></div>
                            <div id="amber" class="color" @click="changeColor('#ffc107')"></div>
                            <div id="indigo" class="color" @click="changeColor('#3f51b5')"></div>
                        </div>
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


     

    </div>
</template>

<style scoped>

#dynamic-div{
  height: 55px;
  width: 55px;
  border-radius: 10px;
  display: flex;
}

.color{
  margin-left: 6px;
  height: 24px;
  width: 23px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ededed;
}

#white {
  background-color: #e5ded4;
}

#gray {
  background-color: #9e9e9e;
}

#orange {
  background-color: #ff9800;
}

#purple {
  background-color: #9c27b0;
}

#cadetblue {
  background-color: #e91e63;
}

#burlywood {
  background-color: #4caf50;
}

#pink {
  background-color: #f44336;
}

#lightseagreen {
  background-color: #009688;
}
#brown {
  background-color: #795548;
}
#cyan {
  background-color: #00bcd4;
}
#amber {
  background-color: #ffc107;
}
#indigo {
  background-color: #3f51b5;
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