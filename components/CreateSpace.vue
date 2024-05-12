<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useToast } from "primevue/usetoast";
const toast = useToast();
import { useActiveCompanyStore } from '~/store/workCompany';
import { useWorkSpaceStore } from '../store/workSpace';
const companies = useActiveCompanyStore()
companies.getCompany()
const { company_id } = storeToRefs(useActiveCompanyStore());
const space = useWorkSpaceStore()
const { save } = storeToRefs(useWorkSpaceStore());
const spaceFormInputs = ref(false);
const spaceNameError = ref(false);
const spaceDescriptionError = ref(false);
const spaceNameInput = ref(null);
const spaceDescripInput = ref(null);
const spaceAvatarPreview = ref('#8080805c');
const spaceColorPreview = ref(null);

const company = ref(null)

const changeColor = (color) => {
    spaceAvatarPreview.value = color
};


const handleCreateSpace = async () => {
    if(spaceNameInput.value === null){
        spaceNameError.value = true;
        return;
    }if(spaceDescripInput.value === null){
        spaceDescriptionError.value = true;
        return;
    }else{
        const createSpaceData = {
            'name': spaceNameInput.value,
            'description': spaceDescripInput.value,
            'company_id': company_id,
            'color': spaceAvatarPreview.value,
        }
        // return
        await space.createSpace(createSpaceData);
        
        if(save.value == true){
            spaceFormInputs.value = false;
            spaceNameInput.value = null;
            spaceDescripInput.value = null;
            spaceAvatarPreview.value = null;
            spaceColorPreview.value = null;
            toast.add({ severity: 'success', summary: 'Space creation', detail: 'Space created successfully!', life: 3000 });
        }else{
            spaceFormInputs.value = true;
            toast.add({ severity: 'error', summary: 'Space creation', detail: 'Space created Failed!', life: 3000 });
        }
    }
}

const showDialog = () => {
    spaceFormInputs.value = true
}
const hideDialog = () => {
    spaceFormInputs.value = false
}

</script>


<template>
    <div>
    <Button icon="pi pi-plus" class="p-button-sm" @click="showDialog" severity="secondary" aria-label="Bookmark" text  />
    <Dialog v-model:visible="spaceFormInputs" :style="{ width: '450px' }" header="Create Space" :modal="true" class="p-fluid">
        <div class="field">
            <label for="name">Space Name</label>
            <InputText id="name" v-model="spaceNameInput" required="true" :invalid="spaceNameError" />
        </div>
        <div class="field">
            <label for="name">Space Description</label>
            <Textarea id="description" v-model="spaceDescripInput"  rows="3" cols="20" :invalid="spaceDescriptionError"/>
        </div>
        <div class="field">
            <label for="name">Space Color</label>
            <div class="m-0 d-flex colorpicker-wrapper">
                <div class="flex justify-center align-items-center">
                    <div id="dynamic-div" :style="`background-color: ${spaceAvatarPreview};`" class="d-flex align-items-center justify-content-center text-3xl">S</div>
                    <div class="ml-2">
                        <div class="flex">
                            <div id="white" class='color' @click="changeColor('#ffffff')"></div>
                            <div id="gray" class='color' @click="changeColor('#9e9e9e')"></div>
                            <div id="orange" class='color' @click="changeColor('#ff9800')"></div>
                            <div id="purple" class='color' @click="changeColor('#9c27b0')"></div>
                            <div id="cadetblue" class='color' @click="changeColor('#e91e63')"></div>
                            <div id="burlywood" class='color' @click="changeColor('#4caf50')"></div>
                            <div id="pink" class='color' @click="changeColor('#f44336')"></div>
                            <div id="lightseagreen" class='color' @click="changeColor('#009688')"></div>
                            <div id="brown" class='color' @click="changeColor('#795548')"></div>
                            <div id="cyan" class='color' @click="changeColor('#00bcd4')"></div>
                            <div id="amber" class='color' @click="changeColor('#ffc107')"></div>
                            <div id="indigo" class='color' @click="changeColor('#3f51b5')"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
            <Button label="Save" icon="pi pi-check" text="" @click="handleCreateSpace" />
        </template>
    </Dialog>
    </div>
</template>

<style scoped>

#dynamic-div{
    height: 55px;
    width: 55px;
    border-radius: 10px;
    color:#dddd;
    display: flex;
    border: 1px solid #ededed;
}

.color{
    margin-left: 6px;
    height: 24px;
    width: 23px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #ededed;
}

#white{
  background-color: #ffff;

}

#gray{
  background-color: #9e9e9e;
}

#orange{
  background-color: #ff9800
}

#purple{
  background-color: #9c27b0;
}

#cadetblue{
  background-color: #e91e63;
}

#burlywood{
  background-color: #4caf50;
}

#pink{
  background-color: #f44336;
}

#lightseagreen{
  background-color: #009688;
}
#brown{
  background-color: #795548;
}
#cyan{
  background-color: #00bcd4;
}
#amber{
  background-color: #ffc107;
}
#indigo{
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
}


.colorpicker-wrapper{
  display: flex;
}

.create-btn-wrapper{
  display: flex;
  justify-content: center;
}
  
</style>