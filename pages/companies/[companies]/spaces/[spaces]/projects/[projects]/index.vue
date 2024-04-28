
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleProject, createTask, deleteTask  } = useCompanyStore();
const { singleProject, isTaskCreated, isTaskDeleted } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

import { FilterMatchMode } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
const filters = ref();
const loading = ref(true);
const toast = useToast();

const { projects } = useRoute().params
console.log('projectParams,', projects)
const visible = ref(false);

// if(singleSpace.value === undefined){
// throw createError({statusCode: 404, message: 'Space not found', fatal: true})
// }

const openCreateSpace = () => {
  visible.value = true;
}

watchEffect(() => {
    getSingleProject(projects);
    loading.value = false;

  console.log('projects,', projects)
})


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();


// task create

const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);
const errorHandler = ref(false);


const taskNameInput = ref(null);

const taskDescriptionInput = ref(null);

const handleCreateTask = async () => {
    if(taskNameInput.value === null || taskDescriptionInput.value === null){
        errorHandler.value = true
        // return
    }else{
        errorHandler.value = false
        const createTaskData = {
            'name': taskNameInput.value,
            'description': taskDescriptionInput.value,
            'project_id': projects,
            // 'color': spaceAvatarPreview.value,
            // 'shared_status': selectedShareSpace.value,
            // 'task_statuses': taskStatusList.value,
            // 'features': selectedFeatures.value,
            // 'views': checkedViews,
        }
        console.log('taskData', createTaskData)

        // return
        await createTask(createTaskData);

        if(isTaskCreated.value === true){
            spaceFormInputs.value = false
            showFinalMsg.value = true
            visible.value = false
            toast.add({ severity: 'info', summary: 'Successfull', detail: 'Task created Successfully', life: 3000 });   

            console.log('task created')
        }else{
            console.log('task not created')
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to create task!', life: 3000 });       
        }
    }
}

const refTaskId = ref(null);

const confirmDeleteTask = (taskId) => {
  refTaskId.value = taskId;
    console.log('refCompanyId', refTaskId.value);
    deleteTaskDialog.value = true;

};

const deleteTaskDialog = ref(false);

const deletingTask = async () => {

    console.log('refTaskIdFin', refTaskId.value);

    // return 
    await deleteTask(refTaskId.value, projects);

    if(isTaskDeleted.value === true){
        toast.add({ severity: 'info', summary: 'Successfull', detail: 'Task Deleted Successfully', life: 3000 });
        deleteTaskDialog.value = false;
            console.log('space deleted')
        }else{
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to delete task', life: 3000 });       
            console.log('space not deleted')
        }
}


// const breadcrumbHome = ref({ icon: 'pi pi-home', to: '/' });
// const breadcrumbItems = ref([{ label: `Company - ${singleProject.value.company_name}` }, { label: `Space - ${singleProject.value.space_name}` }, { label: `Project - ${singleProject.value.name}` }]);

</script>

<template>
    <!-- <pre>{{ singleProject }}</pre> -->
    
    <div class="card">     
        <div class="d-flex create-space-btn-wrapper mb-3 mr-2">
            <div class="breadCrumWrap">
                <p class="pi pi-home"></p>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text">Company - {{singleProject?.company_name}}</p>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text">Space - {{singleProject?.space_name}}</p>
                <p class="pi pi-angle-right font-bold"></p>
                <p class="text">Project - {{singleProject?.name}}</p>
               </div>
            <div class="create-btn-wrapper">
              <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Task +" />
              <Dialog v-model:visible="visible" modal header=" " :style="{ width: '30rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
                <div v-if="spaceFormInputs">
                    <div class="company-name flex justify-center text-center mb-6">
                      <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Project: {{singleProject?.name}}</p>
                    </div>
                    <div>
                      <FloatLabel >
                        <InputText
                          type="text"
                          class="form-control border border-primary"
                          
                          v-model="taskNameInput"
                        />
                        <label>Set Task Name</label>
                      </FloatLabel>
                    </div>
                    <div class="" style="display: flex; justify-content: center; margin: 30px 0; ">
                      <FloatLabel >
                        <InputText
                          type="text"
                          class="form-control border border-primary"
                          
                          v-model="taskDescriptionInput"
                        />
                        <label>Set Task Description</label>
                      </FloatLabel>
                    </div>      
                <br>
                <p class="text-center" v-if="errorHandler" style="color: red;"> Please add/fill/check up all the fields</p>
                <br>
                <div class="create-btn-wrappe">
                  <Button @click="handleCreateTask" class="text-white py-2 px-6 tracking-wide" label="Create Task"/>
                </div>
            </div>
      
      
            <div v-if="showFinalMsg">
              <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Project created successfully</h3>
                 
              <div class="centering">
                  <FloatLabel>
                      <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                      <!-- <p class="text-center mb-2">You can close the modal now.</p> -->
                  </FloatLabel>
                  </div>
               </div>
              </div>
              </Dialog>
              <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
          </div>
        </div>
        <DataTable class="stabd" v-model:filters="filters" :value="singleProject?.tasks" showGridlines paginator tableStyle="min-width: 50rem" :rows="10" dataKey="id" filterDisplay="menu" :loading="loading">
            <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="right">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No Data found... </template>
            <template #loading> Loading data. Please wait. </template>
            <!-- <Column field="id" header="ID"></Column> -->
            <Column field="name" header="Task Name"></Column>
            <Column field="description" header="Task Description"></Column>
            <Column field="project_name" header="Project"></Column>
            
            <Column header="Action">
                <template #body="slotProps">
                  
                    <!-- <Button disabled icon="pi pi-pencil" class="mr-2" severity="success" rounded /> -->
                    <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteTask(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="deleteTaskDialog" header=" " :style="{ width: '25rem' }">
              
            <p>Are you sure you want to delete?</p>
            <Button label="No" icon="pi pi-times" text @click="deleteTaskDialog = false" />
            <Button label="Yes" icon="pi pi-check" text @click="deletingTask" />
            
        </Dialog>
    </div>
</template>
  
  
  <style lang="scss" scoped>

  .create-btn-wrapper{
    display: flex;
    margin-bottom: 15px;
    justify-content: end;
  }

  .create-btn-wrappe{
    display: flex;
    justify-content: center;
  }
  /* Add your custom styles here */

  .company-name{
    display: flex;
    justify-content: center;
    p{
        border-radius: 5px
    }
  }


  .stabd{

      td {
        border-left: none !important;
        border-right: none !important;
      }
  }

  .create-space-btn-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .breadCrumWrap{
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: start;
    .text{
      line-height: 1;
    }
  }
  </style>