<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { editProject } = useCompanyStore(); // use authenticateUser action from  auth store
const { isProjectEdited } = storeToRefs(useCompanyStore());
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const { refProjectId, singleSpace } = defineProps(['refProjectId', 'singleSpace']);

const emit = defineEmits(['closeEditProject']);

const spaceFormInputs = ref(true);

const errorHandler = ref(false);

const taskStatusName = ref('');

const taskStatusList = ref(refProjectId?.statuses);

const dummyStatusList = ref([]);
dummyStatusList.value = JSON.parse(JSON.stringify(taskStatusList.value));


const colorHEX = ref('6466f1');

const taskStatusNullCheck = ref(null);

const addTaskSTatusError = ref(false);

const projectNameInput = ref(refProjectId?.name);

const projectDescriptionInput = ref(refProjectId?.description);

const addTaskStatus = () => {
  taskStatusName.value ? addTaskSTatusError.value = false : addTaskSTatusError.value = true;
  if (taskStatusName?.value?.length > 0) {

    const newTaskStatusList = {
      name: taskStatusName.value,
      color_code: `#${colorHEX.value}`,
      is_closed_status: 0,
    }
    dummyStatusList.value.push(newTaskStatusList);
    taskStatusName.value = '';
  } else {
    addTaskSTatusError.value = true;
  }

  if (dummyStatusList.value.length > 0) {
    taskStatusNullCheck.value = true;
  }
};

const handleDeleteTask = (index) => {
  dummyStatusList.value.splice(index, 1);
  if (dummyStatusList.value.length == 0) {
    taskStatusNullCheck.value = false;
  }
};

const selectedCloseStatus = ref(null);
selectedCloseStatus.value = refProjectId?.statuses.find(status => status.is_closed_status === 1);

watch(selectedCloseStatus, (newStatus) => {
  if (newStatus) {
    dummyStatusList.value.forEach(status => {
      status.is_closed_status = status.name === newStatus.name ? 1 : 0;
    });
  }
});

const transformKeys = (list) => {
  return list.map(status => ({
    taskStatusName: status.name,
    taskStatusColor: status.color_code.startsWith('#') ? status.color_code : `#${status.color_code}`,
    is_closed_status: status.is_closed_status
  }));
}

const loading = ref(false);
const handleCreateProject = async () => {
  loading.value = true;
  if (projectNameInput.value === null || dummyStatusList.value.length <= 0 || selectedCloseStatus.value === null) {
    errorHandler.value = true
    loading.value = false;
  } else {
    errorHandler.value = false

    dummyStatusList.value.forEach(status => {
      const allowedKeys = ['color_code', 'name', 'is_closed_status'];
      Object.keys(status).forEach(key => {
        if (!allowedKeys.includes(key)) {
          delete status[key];
        }
      });
    });

    const transformedTaskStatusList = transformKeys(dummyStatusList.value);

    const createProjectData = {
      'id': refProjectId?.id,
      'name': projectNameInput.value,
      'description': projectDescriptionInput.value,
      'space_id': refProjectId?.space_id,
      'statuses': transformedTaskStatusList,
    }

    await editProject(createProjectData);
    if (isProjectEdited.value === true) {
      emit('closeEditProject', false);
      loading.value = false;
      toast.add({ severity: 'success', summary: 'Project creation', detail: 'Project updated successfully!', group: 'br', life: 3000 });
    } else {
      loading.value = false;
      toast.add({ severity: 'error', summary: 'Project creation', detail: 'Failed to update project!', group: 'br', life: 3000 });
    }
  }
}

const hideDialog = () => {
  emit('closeEditProject', false);
}

onMounted(() => {
  taskStatusList.value = refProjectId?.statuses;
});

</script>
<template>
  <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
    <div v-if="spaceFormInputs">
      <div class="field">
        <!-- <pre>{{refProjectId.statuses}}</pre> -->
        <label for="name">Edit project: <strong>{{ refProjectId?.name }}</strong></label>
      </div>
      <div class="field flex flex-column">
        <label for="name">Project Name<i class="text-red-400 text-italic">*</i> </label>
        <InputText id="name" v-model="projectNameInput" required="true" />
      </div>
      <div class="field flex flex-column">
        <label for="name">Project Description</label>
        <Textarea id="description" class="border-gray-300" v-model="projectDescriptionInput" rows="3" cols="20" />
      </div>
      <div class="mb-4">
        <p class="text-slate-700 mb-2 tracking-wide left-3">Setup Task Status<i class="text-red-400 text-italic">*</i> </p>
        <div class="container">
          <InputGroup>
            <InputGroupAddon>
              <ColorPicker class="color-pick" style="width: 1.5rem" v-model="colorHEX" inputId="cp-hex" format="hex" />
            </InputGroupAddon>
            <InputText class="form-control" v-model="taskStatusName" placeholder="e.g., TO-DO, DOING" />
            <InputGroupAddon @click="addTaskStatus" class="btn btn-outline-secondary cursor-pointer">
              <p class="pi pi-plus  cursor-pointer"></p>
            </InputGroupAddon>
          </InputGroup>

          <p v-if="addTaskSTatusError" class="text-red-600 text-small">
            Please type status name!
          </p>


          <div class="row mt-2">
            <div class="col-12 d-flex flex-column p-0">
              <div class="flex delete-task justify-content-between" v-for="(task, index) in dummyStatusList"
                :key="index">
                <div class="flex align-items-center" style="width: 92%">
                  <!-- <div class="status-colors" :style="`background-color: #${task.color_code}` "></div> -->
                  <ColorPicker class="color-pick mr-2 status-colors border-none" v-model="task.color_code" inputId="cp-hex" format="hex" />

                  <!-- <p class="text-uppercase text-muteds">
                    {{ task.name }}
                  </p> -->
                  <InputText class="text-uppercase text-muteds w-full" id="name" v-model="task.name" required="true" />

                </div>
                <div @click="handleDeleteTask(index)" class="cursor-pointer cross-icon ms-1">
                  <p class="pi pi-times"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <pre>{{dummyStatusList}}</pre> -->
      <div class="mb-4">
        <p class="text-slate-700 mb-2 tracking-wide left-3">Set Task Close Status<i class="text-red-400 text-italic">*</i> </p>
        <div class="container">
          <div class="field">

            <Dropdown v-model="selectedCloseStatus" :options="dummyStatusList" optionLabel="name"
              placeholder="Select Status" class="w-full" />
          </div>

          <p v-if="closeStatusError" class="text-red-600 text-small">
            Please set close status!
          </p>
        </div>
      </div>
      <p class="text-center" v-if="errorHandler" style="color: red;"> Please add/fill/check up all the fields</p>
    </div>

    <div class="float-right">
      <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
      <Button :loading="loading" label="Save" icon="pi pi-check" text="" @click="handleCreateProject" />
    </div>

  </div>
</template>




<style lang="scss">
.color-pick {
  .p-colorpicker-preview {
    cursor: pointer;
    width: 1.5rem !important;
  }
}

.status-colors {
  .p-colorpicker-preview {
      height: 24px !important;
      width: 24px !important;
      border-radius: 5px !important;
      /*margin-right: 8px !important;*/
      border: none !important;
  }
}

.delete-task {
  border: 1px solid rgb(203 213 225);
  padding: 5px;
  margin: 3px 0;
  border-radius: 5px;
}

.delete-task .cross-icon {
  border: 1px solid rgb(203, 213, 225);
  padding: 3px 5px;
  margin: 0;
  border-radius: 5px;
}
</style>