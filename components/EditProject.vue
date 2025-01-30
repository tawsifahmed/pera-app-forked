<script setup>
import draggable from 'vuedraggable';
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

const enabled = ref(true);
const dragging = ref(false);

const hoveredItemIndex = ref(null); // Index of the hovered item

// Computed
const editable = ref(true);
const dragOptions = computed(() => ({
    animation: 250,
    group: 'tasks',
    disabled: !editable.value,
    ghostClass: 'ghost'
}));

const taskCardStyle = computed(() => ({
    backgroundColor: 'inherit',
    boxShadow: '0px 2px 2px inherit',
    cursor: 'grab',
    margin: '8px 0px'
}));

const taskCardHoverStyle = computed(() => ({
    backgroundColor: 'inherit',
    boxShadow: '0px 4px 4px inherit',
    cursor: 'grab',
    margin: '8px 0px'
}));

const taskStatusName = ref('');

const taskStatusList = ref(refProjectId?.statuses.map((item, index) => ({ ...item, serial_no: index + 1 })));

const dummyStatusList = ref([]);
dummyStatusList.value = JSON.parse(JSON.stringify(taskStatusList.value));

const colorHEX = ref('6466f1');

const taskStatusNullCheck = ref(null);

const addTaskSTatusError = ref(false);

const projectNameInput = ref(refProjectId?.name);

const projectDescriptionInput = ref(refProjectId?.description);

const gitLabProjectId = ref(refProjectId?.git_project_id);

const gitlabProjectToken = ref(refProjectId?.git_token);

const addTaskStatus = () => {
    taskStatusName.value ? (addTaskSTatusError.value = false) : (addTaskSTatusError.value = true);
    if (taskStatusName?.value?.length > 0) {
        const newTaskStatusList = {
            name: taskStatusName.value,
            color_code: `#${colorHEX.value}`,
            is_closed_status: 0,
            serial_no: dummyStatusList.value.length + 1
        };
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
    if (selectedCloseStatus.value?.is_closed_status === dummyStatusList.value[index]?.is_closed_status) {
        selectedCloseStatus.value = null;
    }
    if (dummyStatusList.value.length == 0) {
        taskStatusNullCheck.value = false;
    }
};

const selectedCloseStatus = ref(null);
selectedCloseStatus.value = dummyStatusList.value.find((status) => status.is_closed_status === 1);

watch(selectedCloseStatus, (newStatus) => {
    if (newStatus) {
        dummyStatusList.value.forEach((status) => {
            status.is_closed_status = status.name === newStatus.name ? 1 : 0;
        });
    }
});

watch(
    dummyStatusList,
    (newList) => {
        newList.forEach((status, index) => {
            status.serial_no = index + 1;
        });
    }
    //  { deep: true }
);

const transformKeys = (list) => {
    return list.map((status) => ({
        taskStatusName: status.name,
        taskStatusColor: status.color_code.startsWith('#') ? status.color_code : `#${status.color_code}`,
        is_closed_status: status.is_closed_status,
        serial_no: status.serial_no
    }));
};

const loading = ref(false);
const handleCreateProject = async () => {
    loading.value = true;
    if (projectNameInput.value === null || dummyStatusList.value.length <= 0 || !selectedCloseStatus.value) {
        errorHandler.value = true;
        loading.value = false;
    } else {
        errorHandler.value = false;

        dummyStatusList.value.forEach((status) => {
            const allowedKeys = ['color_code', 'name', 'is_closed_status', 'serial_no'];
            Object.keys(status).forEach((key) => {
                if (!allowedKeys.includes(key)) {
                    delete status[key];
                }
            });
        });

        const shallowStatusList = JSON.parse(JSON.stringify(dummyStatusList.value));

        const transformedTaskStatusList = transformKeys(shallowStatusList);
        console.log('shallow List', shallowStatusList);
        console.log('transformedTaskStatusList', transformedTaskStatusList);
        const createProjectData = {
            id: refProjectId?.id,
            name: projectNameInput.value,
            description: projectDescriptionInput.value,
            space_id: refProjectId?.space_id,
            statuses: transformedTaskStatusList,
            git_project_id: gitLabProjectId.value,
            git_token: gitlabProjectToken.value
        };

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
};

const hideDialog = () => {
    emit('closeEditProject', false);
};

onMounted(() => {
    taskStatusList.value = refProjectId?.statuses;
    const editProjectName = document.getElementById('editProjectName');
    nextTick(() => {
        if (editProjectName) {
            editProjectName.focus();
        }
    });
});
</script>
<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div v-if="spaceFormInputs">
            <div class="field">
                <!-- <pre>{{refProjectId}}</pre> -->
                <label for="name"
                    >Project: <strong>{{ refProjectId?.name }}</strong></label
                >
            </div>
            <div class="field flex flex-column">
                <label for="editProjectName">Project Name<i class="text-red-400 text-italic">*</i> </label>
                <InputText id="editProjectName" v-model="projectNameInput" required="true" />
            </div>
            <div class="field flex flex-column">
                <label for="name">Project Description</label>
                <Textarea id="description" class="border-gray-300" v-model="projectDescriptionInput" rows="3" cols="20" />
            </div>
            <div class="mb-4">
                <p class="text-slate-700 mb-2 tracking-wide left-3">Setup Task Status<i class="text-red-400 text-italic">*</i></p>
                <div class="">
                    <InputGroup>
                        <InputGroupAddon>
                            <ColorPicker v-tooltip.left="{ value: 'Pick Color' }" class="color-pick" style="width: 1.5rem" v-model="colorHEX" inputId="cp-hex" format="hex" />
                        </InputGroupAddon>
                        <InputText class="form-control" v-tooltip.top="{ value: 'Type Status Name' }" v-model="taskStatusName" placeholder="e.g., TO-DO, DOING" />
                        <InputGroupAddon @click="addTaskStatus" class="btn btn-outline-secondary cursor-pointer">
                            <p class="pi pi-plus cursor-pointer"></p>
                        </InputGroupAddon>
                    </InputGroup>

                    <p v-if="addTaskSTatusError" class="text-red-600 text-small">Please type status name!</p>
                    <div class="row mt-2">
                        <div class="col-12 d-flex flex-column p-0">
                            <draggable v-model="dummyStatusList" :options="dragOptions" :disabled="!enabled" class="list-group" ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
                                <template v-slot:item="{ element, index }">
                                    <div
                                        class="flex delete-task justify-content-between"
                                        :style="hoveredItemIndex === index ? taskCardHoverStyle : taskCardStyle"
                                        @mouseenter="hoveredItemIndex = index"
                                        @mouseleave="hoveredItemIndex = null"
                                        :key="element.id"
                                    >
                                        <svg style="margin-right: -3px" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cu-status-manager-status-list-item__drag-handler-icon">
                                            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                                <circle cx="5" cy="5" r="1" />
                                                <circle cx="5" cy="12" r="1" />
                                                <circle cx="5" cy="19" r="1" />
                                                <circle cx="12" cy="5" r="1" />
                                                <circle cx="12" cy="12" r="1" />
                                                <circle cx="12" cy="19" r="1" />
                                            </g>
                                        </svg>
                                        <div class="flex align-items-center" style="width: 88%">
                                            <ColorPicker v-tooltip.left="{ value: 'Change Color' }" class="color-pick mr-2 status-colors border-none" v-model="element.color_code" inputId="cp-hex" format="hex" />

                                            <InputText v-tooltip.right="{ value: 'Change Status Name' }" class="text-uppercase text-muteds w-full" v-model="element.name" required="true" />
                                        </div>
                                        <div @click="handleDeleteTask(index)" class="cursor-pointer cross-icon ms-1 flex justify-content-center align-items-center">
                                            <p class="pi pi-times"></p>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>

                    <!-- <div class="row mt-2">
            <div class="col-12 d-flex flex-column p-0">
              <div class="flex delete-task justify-content-between" v-for="(task, index) in dummyStatusList"
                :key="index">
                <div class="flex align-items-center" style="width: 92%">
                  <ColorPicker class="color-pick mr-2 status-colors border-none" v-model="task.color_code" inputId="cp-hex" format="hex" />
                  <InputText class="text-uppercase text-muteds w-full" id="name" v-model="task.name" required="true" />

                </div>
                <div @click="handleDeleteTask(index)" class="cursor-pointer cross-icon ms-1">
                  <p class="pi pi-times"></p>
                </div>
              </div>
            </div>
          </div> -->
                </div>
            </div>
            <!-- <pre>{{dummyStatusList}}</pre> -->
            <div class="">
                <p class="text-slate-700 mb-2 tracking-wide left-3">Set Task Close Status<i class="text-red-400 text-italic">*</i></p>
                <div class="">
                    <div class="field">
                        <!-- {{selectedCloseStatus}} -->
                        <Dropdown v-model="selectedCloseStatus" :options="dummyStatusList" optionLabel="name" placeholder="Select Status" class="w-full" />
                    </div>

                    <p v-if="closeStatusError" class="text-red-600 text-small">Please set close status!</p>
                </div>
            </div>
            <div class="flex w-full gap-2">
                <div class="field flex flex-column mb-3" style="width: 49%;">
                    <label for="name"
                        >Gitlab ID
                        <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                    </label>
                    <InputText v-model="gitLabProjectId" type="number" required="true" />
                </div>
                <div class="field flex flex-column mb-3" style="width: 49%;">
                    <label for="name"
                        >Gitlab Token
                        <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                    </label>
                    <InputText v-model="gitlabProjectToken" type="text" required="true" />
                </div>
            </div>
            <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
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
    border: 1px solid #0099FF;
    padding: 5px;
    margin: 3px 0;
    border-radius: 5px;
}

.delete-task .cross-icon {
    border:  #0099FF;
    padding: 3px 5px;
    margin: 0;
    border-radius: 5px;
}
</style>
