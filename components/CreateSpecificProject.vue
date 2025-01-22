<script setup>
import draggable from 'vuedraggable';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import ColorPicker from 'primevue/colorpicker';
import { useWorkProjectStore } from '../store/workProjects';
import { useToast } from 'primevue/usetoast';
import { onMounted } from 'vue';
const toast = useToast();
const project = useWorkProjectStore();
const { save } = storeToRefs(useWorkProjectStore());
const { singleSpace, spaces, isPage } = defineProps(['singleSpace', 'spaces', 'isPage']);
const companyFormInputs = ref(false);
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
    backgroundColor: '#fff',
    boxShadow: '0px 2px 2px #e2e2e2',
    cursor: 'grab',
    margin: '8px 0px'
}));

const taskCardHoverStyle = computed(() => ({
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 4px #e2e2e3',
    cursor: 'grab',
    margin: '8px 0px'
}));

const taskStatusName = ref('');

const taskStatusList = ref([
    {
        taskStatusName: 'Open',
        taskStatusColor: `#6466f1`,
        is_closed_status: 0,
        serial_no: 1
    },
    {
        taskStatusName: 'Doing',
        taskStatusColor: `#ff0084`,
        is_closed_status: 0,
        serial_no: 2
    },
    {
        taskStatusName: 'Dev Done',
        taskStatusColor: `#12955d`,
        is_closed_status: 0,
        serial_no: 3
    }
]);

const colorHEX = ref('6466f1');
const taskStatusNullCheck = ref(null);
const addTaskSTatusError = ref(false);
const closeStatusError = ref(false);
const projectNameInput = ref(null);
const gitLabProjectId = ref(null);
const gitlabProjectToken = ref(null);
const projectDescriptionInput = ref('');

const addTaskStatus = () => {
    taskStatusName.value ? (addTaskSTatusError.value = false) : (addTaskSTatusError.value = true);
    if (taskStatusName?.value?.length > 0) {
        const newTaskStatusList = {
            taskStatusName: taskStatusName.value,
            taskStatusColor: `#${colorHEX.value}`,
            is_closed_status: 0,
            serial_no: taskStatusList.value.length + 1
        };
        taskStatusList.value.push(newTaskStatusList);
        taskStatusName.value = '';
    } else {
        addTaskSTatusError.value = true;
    }

    if (taskStatusList.value.length > 0) {
        taskStatusNullCheck.value = true;
    }
};

const handleDeleteTask = (index) => {
    taskStatusList.value.splice(index, 1);
    if (selectedCloseStatus.value?.is_closed_status === taskStatusList.value[index]?.is_closed_status) {
        selectedCloseStatus.value = null;
    }
    if (taskStatusList.value.length == 0) {
        taskStatusNullCheck.value = false;
    }
};

const selectedCloseStatus = ref(null);

watch(selectedCloseStatus, (newStatus) => {
    if (newStatus) {
        taskStatusList.value.forEach((status) => {
            status.is_closed_status = status.taskStatusName === newStatus.taskStatusName ? 1 : 0;
        });
    }
    console.log('taskStatusList', taskStatusList.value);
});

watch(taskStatusList, (newList) => {
    newList.forEach((status, index) => {
        status.serial_no = index + 1;
    });
});

const loading = ref(false);
const handleCreateProject = async () => {
    loading.value = true;
    if (projectNameInput.value === null || taskStatusList.value.length <= 0 || selectedCloseStatus.value === null) {
        errorHandler.value = true;
        loading.value = false;
    } else {
        errorHandler.value = false;
        taskStatusList.value = taskStatusList.value.map((status) => {
            if (!status.taskStatusColor.startsWith('#')) {
                status.taskStatusColor = `#${status.taskStatusColor}`;
            }
            return status;
        });

        const createProjectData = {
            name: projectNameInput.value,
            description: projectDescriptionInput.value,
            space_id: spaces,
            statuses: taskStatusList.value,
            git_project_id: gitLabProjectId.value,
            git_token: gitlabProjectToken.value
        };
        await project.createProjects(createProjectData);
        if (save.value === true) {
            companyFormInputs.value = false;
            projectNameInput.value = null;
            projectDescriptionInput.value = null;
            taskStatusList.value = [
                {
                    taskStatusName: 'Open',
                    taskStatusColor: `#6466f1`,
                    is_closed_status: 0,
                    serial_no: 1
                },
                {
                    taskStatusName: 'Doing',
                    taskStatusColor: `#ff0084`,
                    is_closed_status: 0,
                    serial_no: 2
                },
                {
                    taskStatusName: 'Dev Done',
                    taskStatusColor: `#12955d`,
                    is_closed_status: 0,
                    serial_no: 3
                }
            ];
            selectedCloseStatus.value = null;
            loading.value = false;
            toast.add({ severity: 'success', summary: 'Success!', detail: 'Project created successfully!', group: 'br', life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: 'Failed', detail: 'Project creation Failed!', group: 'br', life: 3000 });
            loading.value = false;
            companyFormInputs.value = true;
        }
    }
};

const showDialog = async () => {
    companyFormInputs.value = true;
    if (companyFormInputs.value) {
        console.log('isOpen');
        await nextTick();
        let createProjectName = document.getElementById('createProjectName');
        if (createProjectName) {
            createProjectName.focus();
        }
    }
};

const hideDialog = () => {
    companyFormInputs.value = false;
    if (projectNameInput.value) {
        projectNameInput.value = null;
    }

    if (projectDescriptionInput.value) {
        projectDescriptionInput.value = null;
    }
    taskStatusList.value = [
        {
            taskStatusName: 'Open',
            taskStatusColor: `#6466f1`,
            is_closed_status: 0,
            serial_no: 1
        },
        {
            taskStatusName: 'Doing',
            taskStatusColor: `#ff0084`,
            is_closed_status: 0,
            serial_no: 2
        },
        {
            taskStatusName: 'Dev Done',
            taskStatusColor: `#12955d`,
            is_closed_status: 0,
            serial_no: 3
        }
    ];

    if (selectedCloseStatus.value) {
        selectedCloseStatus.value = null;
    }
    taskStatusName.value = '';
};

const handleClose = () => {
    if (projectNameInput.value) {
        projectNameInput.value = null;
    }

    if (projectDescriptionInput.value) {
        projectDescriptionInput.value = null;
    }
    taskStatusList.value = [
        {
            taskStatusName: 'Open',
            taskStatusColor: `#6466f1`,
            is_closed_status: 0,
            serial_no: 1
        },
        {
            taskStatusName: 'Doing',
            taskStatusColor: `#ff0084`,
            is_closed_status: 0,
            serial_no: 2
        },
        {
            taskStatusName: 'Dev Done',
            taskStatusColor: `#12955d`,
            is_closed_status: 0,
            serial_no: 3
        }
    ];

    if (selectedCloseStatus.value) {
        selectedCloseStatus.value = null;
    }
    taskStatusName.value = '';
};
</script>

<template>
    <div>
        <Button
            :icon="isPage ? '' : 'pi pi-plus'"
            :class="isPage ? 'btn-primary cursor-pointer text-white px-5 py-2' : 'p-button-sm'"
            :label="isPage ? 'Create +' : ''"
            @click="showDialog"
            :severity="isPage ? 'primary' : 'secondary'"
            aria-label="Bookmark"
            :text="!isPage"
        />
        <Dialog v-model:visible="companyFormInputs" dismissableMask="true" :style="{ width: '450px' }" header="Create Project" :modal="true" class="p-fluid" @update:visible="handleClose">
            <div class="field">
                <label for="name"
                    >Create project for <strong>{{ singleSpace?.name }}</strong> space</label
                >
            </div>
            <div class="field">
                <label for="name"
                    >Project Name<i class="text-red-400 text-italic">*</i>
                    <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                </label>
                <InputText id="createProjectName" v-model="projectNameInput" required="true" />
            </div>
            <div class="field">
                <label for="name"
                    >Project Description
                    <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                </label>
                <Textarea id="description" class="border-gray-300" v-model="projectDescriptionInput" rows="3" cols="20" />
            </div>
            <div class="mb-4">
                <p class="text-slate-700 mb-2 tracking-wide left-3">
                    Setup Task Status<i class="text-red-400 text-italic">*</i>
                    <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                </p>
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
                            <draggable v-model="taskStatusList" :options="dragOptions" :disabled="!enabled" class="list-group" ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
                                <template v-slot:item="{ element, index }">
                                    <div
                                        class="flex delete-task justify-content-between"
                                        :style="hoveredItemIndex === index ? taskCardHoverStyle : taskCardStyle"
                                        @mouseenter="hoveredItemIndex = index"
                                        @mouseleave="hoveredItemIndex = null"
                                        :key="element.id"
                                    >
                                        <svg style="margin-right: -4px" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cu-status-manager-status-list-item__drag-handler-icon">
                                            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                                <circle cx="5" cy="5" r="1" />
                                                <circle cx="5" cy="12" r="1" />
                                                <circle cx="5" cy="19" r="1" />
                                                <circle cx="12" cy="5" r="1" />
                                                <circle cx="12" cy="12" r="1" />
                                                <circle cx="12" cy="19" r="1" />
                                            </g>
                                        </svg>
                                        <div class="flex align-items-center" style="width: 89%">
                                            <ColorPicker v-tooltip.left="{ value: 'Change Color' }" class="color-pick mr-2 status-colors border-none" v-model="element.taskStatusColor" inputId="cp-hex" format="hex" />

                                            <!-- <div class="status-colors" :style="{ backgroundColor: task.taskStatusColor }"></div> -->
                                            <!-- <p class="text-uppercase text-muteds">
                                                {{ task.taskStatusName }}
                                            </p> -->
                                            <InputText v-tooltip.left="{ value: 'Change Status Name' }" class="text-uppercase text-muteds w-full" id="name" v-model="element.taskStatusName" required="true" />
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
                            <div class="flex delete-task justify-content-between"
                                v-for="(task, index) in taskStatusList" :key="index">
                                <div class="flex align-items-center" style="width: 92%">
                                    <ColorPicker class="color-pick mr-2 status-colors border-none"
                                        v-model="task.taskStatusColor" inputId="cp-hex" format="hex" />
                                    <InputText class="text-uppercase text-muteds w-full" id="name"
                                        v-model="task.taskStatusName" required="true" />

                                </div>
                                <div @click="handleDeleteTask(index)" class="cursor-pointer cross-icon ms-1">
                                    <p class="pi pi-times"></p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- <pre>{{taskStatusList}}</pre> -->
            <div class="">
                <p class="text-slate-700 mb-2 tracking-wide left-3">
                    Set Task Close Status<i class="text-red-400 text-italic">*</i>
                    <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                </p>
                <div class="">
                    <div class="field">
                        <!-- {{ selectedCloseStatus }} -->
                        <Dropdown v-model="selectedCloseStatus" :options="taskStatusList" optionLabel="taskStatusName" placeholder="Select Status" class="w-full" />
                    </div>

                    <p v-if="closeStatusError" class="text-red-600 text-small">Please set close status!</p>
                </div>
            </div>
            <div class="flex w-full gap-2">
                <div class="field flex flex-column mb-3" style="width: 49%">
                    <label for="name"
                        >Gitlab ID
                        <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                    </label>
                    <InputText v-model="gitLabProjectId" required="true" />
                </div>
                <div class="field flex flex-column mb-3" style="width: 49%">
                    <label for="name"
                        >Gitlab Token
                        <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
                    </label>
                    <InputText v-model="gitlabProjectToken" required="true" />
                </div>
            </div>
            <p class="text-center" v-if="errorHandler" style="color: red">Please add/fill/check up all the fields</p>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
                <Button :loading="loading" label="Save" icon="pi pi-check" text="" @click="handleCreateProject" />
            </template>
        </Dialog>
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

.buttons {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
</style>
