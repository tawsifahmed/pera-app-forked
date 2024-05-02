<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
import { useToast } from "primevue/usetoast";
const toast = useToast();
const { createSpace, getCompanyList } = useCompanyStore(); // use authenticateUser action from  auth store
const { isSpaceCreated, companyList } = storeToRefs(useCompanyStore());
const spaceFormInputs = ref(false);
const spaceNameError = ref(false);
const spaceDescriptionError = ref(false);
const dynamicDiv = ref(null);

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
            'company_id': companyList.value[0].id,
            'color': spaceAvatarPreview.value,
        }
        // return
        await createSpace(createSpaceData);
        
        if(isSpaceCreated.value == true){
            spaceFormInputs.value = false;
            spaceNameInput.value = null;
            spaceDescripInput.value = null;
            spaceAvatarPreview.value = null;
            spaceColorPreview.value = null;
            toast.add({ severity: 'success', summary: 'Space creation', detail: 'Space created successfully!', life: 3000 });
        }else{
            spaceFormInputs.value = true;
        }
    }
}

watchEffect(() => {
    getCompanyList();
});
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
            <InputText id="name" v-model="spaceNameInput" required="true" autofocus :invalid="spaceNameError" />
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
                            <div id="crimson" class='color' @click="changeColor('crimson')"></div>
                            <div id="skyblue" class='color' @click="changeColor('skyblue')"></div>
                            <div id="orange" class='color' @click="changeColor('orange')"></div>
                            <div id="purple" class='color' @click="changeColor('purple')"></div>
                            <div id="cadetblue" class='color' @click="changeColor('cadetblue')"></div>
                            <div id="burlywood" class='color' @click="changeColor('burlywood')"></div>
                            <div id="pink" class='color' @click="changeColor('pink')"></div>
                            <div id="lightseagreen" class='color' @click="changeColor('lightseagreen')"></div>
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
    color: white;
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
  
</style>