<script setup>
import draggable from 'vuedraggable';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import accessPermission from '~/composables/usePermission';
import Column from 'primevue/column';

const url = useRuntimeConfig();
const usersListStore = useCompanyStore();
const { getSingleProject, getTaskAssignModalData } = useCompanyStore();
const { modStatusList, singleProject, statuslist } = storeToRefs(useCompanyStore());
const createTaskP = ref(accessPermission('create_task'));
const updateTaskP = ref(accessPermission('update_task'));
const deleteTaskP = ref(accessPermission('delete_task'));
const downloadTaskP = ref(accessPermission('download_task'));
const toast = useToast();
const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);
const { kanbanTasks, tasks } = defineProps(['kanbanTasks', 'tasks']);
const route = useRoute();
const id = route.params?.projects;

const filterAssignees = ref();
const filterPriorities = ref();
const filterStatus = ref();
const filterStartDueDate = ref();
const filterEndDueDate = ref();
const filterSearch = ref();
const usersLists = ref({});
const tableView = ref(true);
const priorities = ref([
    { name: 'All', code: '' },
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const isSpeedDialVisible = ref({});

const showSpeedDial = (key) => {
    isSpeedDialVisible.value = {
        ...isSpeedDialVisible.value,
        [key]: true, 
    };
};

const hideSpeedDial = (key) => {
    isSpeedDialVisible.value = {
        ...isSpeedDialVisible.value, 
        [key]: false, 
    };
};

const getActionItems = (node) => {
    return [
        {
            label: 'Add Sub Task',
            icon: 'pi pi-plus text-white',
            command: () => {
                emit('openCreateSpace', node.key, 'sub-task');
                // toast.add({ severity: 'info', summary: 'Add Sub Task', detail: `Sub Task Added to ${node.data.name}`, life: 3000 });
            },
            disabled: !createTaskP,
        },
        {
            label: 'Edit Task',
            icon: 'pi pi-pencil text-white',
            command: () => {
                emit('handleTaskEdit', node);
                // toast.add({ severity: 'success', summary: 'Edit Task', detail: `Editing ${node.data.name}`, life: 3000 });
            },
            disabled: !updateTaskP, 
        },
        {
            label: 'Task Detail',
            icon: 'pi pi-window-maximize text-white',
            command: () => {
                emit('handleTaskDetailView', node);
                // toast.add({ severity: 'info', summary: 'Task Details', detail: `Viewing details of ${node.data.name}`, life: 3000 });
            }
        },
        {
            label: 'Delete Task',
            icon: 'pi pi-trash text-white',
            command: () => {
                emit('confirmDeleteTask', node.key);
                // toast.add({ severity: 'error', summary: 'Delete Task', detail: `Deleted ${node.data.name}`, life: 3000 });
            },
            disabled: !deleteTaskP,
        },
    ];
};

const userI = ref();
const prio = ref();
const sta = ref();
const que = ref();
const strD = ref();
const enD = ref();
const activeSubTask = ref(null);
const handleFilterReset = () => {
    if (filterAssignees.value || filterPriorities.value || filterStatus.value || filterSearch.value || filterStartDueDate.value || filterEndDueDate.value) {
        filterAssignees.value = '';
        filterPriorities.value = '';
        filterStatus.value = '';
        filterSearch.value = '';
        filterStartDueDate.value = '';
        filterEndDueDate.value = '';
        userI.value = '';
        prio.value = '';
        sta.value = '';
        que.value = '';
        strD.value = '';
        enD.value = '';
        isCalendarSelected1.value = false;
        isCalendarSelected2.value = false;
        changeAttribute();
    } else {
        return;
    }
};

const changeAttribute = async () => {
    userI.value = filterAssignees.value ? filterAssignees.value.map((item) => item.id) : '';
    prio.value = filterPriorities.value ? filterPriorities.value.code : '';
    sta.value = filterStatus.value ? filterStatus.value.id : '';
    que.value = filterSearch.value;
    strD.value = filterStartDueDate.value;
    enD.value = filterEndDueDate.value;
    getSingleProject(id, userI.value, prio.value, sta.value, que.value, strD.value, enD.value);
};

const isCalendarSelected1 = ref(false);
const isCalendarSelected2 = ref(false);

const startDateChange = (newDate) => {
    const date = new Date(newDate);
    filterStartDueDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    isCalendarSelected1.value = true;
    changeAttribute();
};
const endDateChange = (newDate) => {
    isCalendarSelected2.value = true;
    const date = new Date(newDate);
    filterEndDueDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    changeAttribute();
};

const handleDateDelete1 = () => {
    isCalendarSelected1.value = false;
    filterStartDueDate.value = '';
    strD.value = '';
    changeAttribute();
};

const handleDateDelete2 = () => {
    isCalendarSelected2.value = false;
    filterEndDueDate.value = '';
    enD.value = '';
    changeAttribute();
};

const loading = ref(false);

const downloadTaskSheet = (taskLists) => {
    loading.value = true;
    console.log('lod', taskLists);
    if (taskLists.length > 0) {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            '"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"\n' +
            taskLists
                .map((task, index) => {
                    const serialNo = index + 1;
                    const taskName = task.data.name;
                    const projectName = singleProject.value.name;
                    const assignees = task.data.assignee.split(', ').join('; ');
                    const priority = task.data.priority ? task.data.priority : '';
                    const status = task.data.status.name;
                    let timeTracked = task.data.total_duration;
                    const hours = Math.floor(timeTracked / 3600);
                    const minutes = Math.floor((timeTracked % 3600) / 60);
                    const seconds = timeTracked % 60;

                    if (hours > 0) {
                        timeTracked = `${hours} hr ${minutes} min ${seconds} sec`;
                    } else if (minutes > 0) {
                        timeTracked = `${minutes} min ${seconds} sec`;
                    } else {
                        timeTracked = `${seconds} sec`;
                    }
                    const dueDate = task.data.dueDateValue;
                    const isOverDue = task.data.is_overdue ? 'Yes' : 'No';

                    return `"${serialNo}","${taskName}","${projectName}","${assignees}","${priority}","${status}","${timeTracked}","${dueDate}","${isOverDue}"`;
                })
                .join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'tasks.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        loading.value = false;
    } else {
        loading.value = false;
        toast.add({ severity: 'error', summary: 'Error', detail: 'No data found to download', group: 'br', life: 3000 });
    }
};

onMounted(async () => {
    await getSingleProject(id);
    getUserlist();
});

async function handleTaskStatus(status, task_id) {
    try {
        const token = useCookie('token');
        const { data, pending } = await useFetch(`${url.public.apiUrl}/tasks/update/${task_id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                status: status?.id
            }
        });

        if (data.value?.app_message === 'success') {
            // getTaskDetails(singleTask.key);
            console.log('Status Changed', data);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Status Changed', group: 'br', life: 3000 });
            await getSingleProject(id);
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change status', group: 'br', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getRandomDeepColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}

function avatarStyle(index) {
    return {
        backgroundColor: getRandomDeepColor(),
        color: 'white',
        borderRadius: '50%',
        border: '2px solid white'
    };
}

const getUserlist = async () => {
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
};

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
function countTasks(tasks) {
    let count = 0;

    function countSubTasks(task) {
        count++; // Count the current task

        if (task.sub_task) {
            countSubTasks(task.sub_task); // Recursively count sub-tasks
        }
    }

    tasks.forEach((task) => {
        countSubTasks(task); // Start counting from each top-level task
    });

    return count;
}
// Kanban
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
    padding: '12px 10px',
    margin: '8px 0px'
}));

const handleChange = (event, name) => {
    const { added, moved, removed } = event;
    if (added) {
        handleTaskStatus(name, event.added.element.key);
    }
};
</script>

<template>
    <div class="filter-wrapper pb-2 mb-1">
        <!-- <pre>{{modStatusList}}</pre> -->
        <MultiSelect @change="changeAttribute()" v-model="filterAssignees" :options="usersLists" filter
            optionLabel="name" placeholder="Filter Assignees" :maxSelectedLabels="3" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterPriorities" :options="priorities" optionLabel="name"
            placeholder="Filter Priority" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterStatus" :options="modStatusList" optionLabel="name"
            placeholder="Filter Status" class="w-full md:w-17rem mb-2" />
        <div class="mb-2 relative">
            <Calendar @date-select="startDateChange($event)" v-model="filterStartDueDate"
                placeholder="Filter Start Due Date" class="w-full md:w-17rem" />
            <p v-if="isCalendarSelected1" @click="handleDateDelete1" class="pi pi-times absolute cursor-pointer"></p>
        </div>
        <div class="mb-2 relative">
            <Calendar @date-select="endDateChange($event)" v-model="filterEndDueDate" placeholder="Filter End Due Date"
                class="w-full md:w-17rem" />
            <p v-if="isCalendarSelected2" @click="handleDateDelete2"
                class="pi pi-times end-cross absolute cursor-pointer"></p>
        </div>
        <Button @click="handleFilterReset" label="Reset" class="mr-2 w-full md:w-15rem mb-2" severity="secondary" />
    </div>
    <Toolbar class="border-0 px-0">
        <template #start>
            <!-- <pre>{{tasks}}</pre> -->
            <div class="flex flex-wrap gap-1">
                <Button v-if="createTaskP" icon="pi pi-plus" label="Create Task"
                    @click="emit('openCreateSpace', '', 'task')" class="mr-2" severity="secondary" />
                <div>
                    <Button icon="pi pi-list" label="List" @click="() => (tableView = true)" class="table-btn"
                        severity="secondary" :class="{ 'bg-indigo-400 text-white': tableView }" />
                    <Button icon="pi pi-th-large" label="Board" @click="() => (tableView = false)" class="board-btn"
                        severity="secondary" :class="{ 'bg-indigo-400 text-white': !tableView }" />
                </div>
                <!-- <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="downloadTaskSheet(tasks)" /> -->

                <!-- task report download -->
                <Button v-if="downloadTaskP" @click="downloadTaskSheet(tasks)"
                    v-tooltip.right="{ value: `Download Tasks` }" :loading="loading"
                    :style="`${loading === true ? 'backGround: red' : ''}`" class="excel-export-btn">
                    <img src="/assets/icons/excel-export-icon.png" />
                </Button>
                <!-- <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" /> -->
                <!-- <Button icon="pi pi-users" label="Invite a guest" severity="secondary" /> -->
            </div>
        </template>

        <template #end>
            <IconField iconPosition="right" raised>
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText @keyup="changeAttribute()" v-model="filterSearch" placeholder="Keyword Search" />
            </IconField>
        </template>
    </Toolbar>
    <!-- <pre>{{ tasks }}</pre> -->
    <TreeTable v-if="tableView" class="table-st" stripedRows :value="tasks" :lazy="true"
        :tableProps="{ style: { minWidth: '650px', width: '100%' } }" filterDisplay="menu" style="overflow: auto">
        <template #empty>
            <p class="text-center">No Data found...</p>
        </template>
        <!-- <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '50%' }"></Column> -->
        <Column field="name" header="Name" class="cursor-pointer tone" expander :style="{ width: '40%' }">
            <template #body="slotProps">
                <div class="inline-block">
                    <div class="task-status" v-tooltip.top="{ value: `${slotProps.node.data.status.name}` }">
                        <Dropdown class="mr-1 flex justify-content-center align-items-center"
                            @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)"
                            v-model="slotProps.node.data.status" :options="statuslist" :disabled="!updateTaskP"
                            optionLabel="name">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center"
                                    :style="{ backgroundColor: slotProps.value.color_code }">
                                    <div :style="{ backgroundColor: slotProps.value.color_code }" class="status-bg">
                                    </div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div :style="{ backgroundColor: slotProps.option.color_code }"
                                        style="width: 15px; height: 15px; border-radius: 50%" class="p-1 mr-2 pi"></div>
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <!-- <div>{{slotProps.node.data.status.name}}</div> -->
                    <span class="taskTitle" @click="emit('handleTaskDetailView', slotProps.node)" v-tooltip.left="{
                        value: `${slotProps.node.data.name}`
                    }">{{ slotProps.node.data.name }}</span>
                </div>
            </template>
        </Column>
        <Column field="assignee" header="Assignee">
            <template #body="slotProps">
                <div class="flex justify-content-start gap-1">
                    <span v-for="(assignee, index) in slotProps.node.data.assigneeObj" :key="index"
                        class="flex justify-content-center assignee-wrapper"
                        :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }">
                        <img v-tooltip.top="{ value: `${assignee.name}` }" class="mr-2 capitalize cursor-pointer"
                            v-if="assignee.image" :src="assignee.image"
                            style="height: 28px; width: 28px; border-radius: 32px; border: 2px solid white" alt=""
                            srcset="" />
                        <Avatar v-else v-tooltip.top="{ value: `${assignee.name}` }" :label="assignee.name.charAt(0)"
                            class="mr-2 capitalize cursor-pointer" size="small"
                            style="background-color: black; color: white; border-radius: 50%; border: 2px solid white"
                            :style="avatarStyle(index)" />
                    </span>
                </div>
            </template>
        </Column>
        <Column field="status" header="Status" :style="{ width: '20%' }">
            <template #body="slotProps">
                <div class="inline-block">
                    <div class="task-status-2">
                        <!-- <pre>{{statuslist}}</pre> -->
                        <Dropdown class="mr-1 flex justify-content-center align-items-center"
                            @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)"
                            v-model="slotProps.node.data.status" :options="statuslist" :disabled="!updateTaskP"
                            optionLabel="name">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center">
                                    <div :style="{ color: slotProps.value.color_code, fontWeight: 500 }" class="pt-1">{{
                                        slotProps.value.name }}</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div :style="{ backgroundColor: slotProps.option.color_code }"
                                        style="width: 15px; height: 15px; border-radius: 50%" class="p-1 mr-2 pi"></div>
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <!-- <div>{{slotProps.node.data.status.name}}</div> -->
                </div>
            </template>
        </Column>
        <Column field="dueDateValue" header="Due Date" :style="{ textWrap: 'nowrap' }">
            <template #body="slotProps">
                <div :style="`color: ${slotProps.node.data.dueDateColor}; font-weight: 600;`">{{
                    slotProps.node.data.dueDateValue }}</div>
            </template>
        </Column>
        <Column field="priority" header="Priority" :style="{ width: '10%' }"></Column>
        <Column field="action" header="Action" :style="{ width: '10%', position: 'relative' }">
            <template #body="slotProps">
                <div class="flex justify-content-start align-items-center" style="width: fit-content;"
                    @mouseover="showSpeedDial(slotProps.node.key)" 
                    @mouseleave="hideSpeedDial(slotProps.node.key)"     
                    >
                    <SpeedDial v-model:visible="isSpeedDialVisible[slotProps.node.key]"
                        :model="getActionItems(slotProps.node)" direction="left" class="custom-speed-dial" :tooltipOptions="{ position: 'top' }" />
                </div>
                <!-- PrimeVue SpeedDial -->
            </template>
        </Column>
    </TreeTable>

    <!-- Kanban Board -->
    <!-- <TaskKanban v-if="!tableView" :tasks="tasks" :statuslist="statuslist" :handleStatus="handleTaskStatus" @modalHandler="modalHandler"></TaskKanban> -->
    <div v-if="!tableView" class="main-container">
        <div class="content">
            <div>
                <div class="boardContainer" style="display: flex; overflow-x: auto; align-items: start">
                    <!-- <pre>khn {{ updateTaskP }}</pre> -->
                    <div v-for="list in kanbanTasks" :key="list" class="groupColumnContainer">
                        <div class="column-container">
                            <div :style="`background-color: ${list.statusColor}; `" class="column-header">{{ list.name
                                }} -
                                {{ list.content.length }}</div>
                            <draggable v-model="list.content" :options="dragOptions" :disabled="!updateTaskP"
                                class="draggable scrollbar" itemKey="name" group="cardItem"
                                @change="(e) => handleChange(e, list.status)">
                                <template v-slot:item="{ element }">
                                    <div class="">
                                        <div class="task-card" :style="taskCardStyle" :key="element.id"
                                            @click="$emit('handleTaskDetailView', element, list.content, list.name)">
                                            <div class="">
                                                <p class="font-semibold truncate text-sm title"
                                                    v-tooltip.top="{ value: `${element.data.name}` }">{{
                                                    element.data.name }}</p>
                                                <!-- <p class="truncate text-sm desc" v-tooltip.bottom="{value: `${element.data.description}`}">{{ element.data.description }}</p> -->
                                                <div class="flex align-items-center gap-2 mt-1">
                                                    <div class="status-icon"
                                                        :style="`background-color:${element.data.status.color_code}`">
                                                    </div>
                                                    <p class="status text-sm">{{ element.data.status.name }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-user text-lg"></i>
                                                    <div class="flex justify-content-start gap-1">
                                                        <span v-for="(assignee, index) in element.data.assigneeObj"
                                                            :key="index"
                                                            class="flex justify-content-center assignee-wrapper"
                                                            :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }">
                                                            <img v-tooltip.top="{ value: `${assignee.name}` }"
                                                                class="mr-2 capitalize cursor-pointer"
                                                                v-if="assignee.image" :src="assignee.image"
                                                                style="height: 28px; width: 28px; border-radius: 32px; border: 2px solid white"
                                                                alt="" srcset="" />
                                                            <Avatar v-else v-tooltip.top="{ value: `${assignee.name}` }"
                                                                :label="assignee.name.charAt(0)"
                                                                class="mr-2 capitalize cursor-pointer" size="small"
                                                                style="background-color: black; color: white; border-radius: 50%; border: 2px solid white"
                                                                :style="avatarStyle(index)" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-calendar-minus text-lg"></i>
                                                    <p :style="`color: ${element.data.dueDateColor}; font-weight: 500;`"
                                                        class="text-sm">{{ element.data.dueDateValue }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-flag text-lg"></i>
                                                    <p class="text-sm">{{ element.data.priority }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100"
                                                    style="border-radius: 5px" @click="(event) => {
                                                            event.stopPropagation();
                                                            if (activeSubTask == element.unique_id) {
                                                                activeSubTask = null;
                                                            } else {
                                                                activeSubTask = element.unique_id;
                                                            }
                                                        }
                                                        ">
                                                    <p class="mb-1">Subtask</p>
                                                    <i
                                                        :class="`pi ${activeSubTask == element.unique_id ? 'pi-angle-down' : 'pi-angle-right'}  text-lg`"></i>
                                                    <p class="text-sm font-semibold">{{ element.children.length }}</p>
                                                </div>
                                            </div>
                                            {{ element.t_name }}
                                        </div>
                                        <div :class="activeSubTask === element.unique_id ? '' : 'hidden'">
                                            <div v-for="element in element.children" :key="element.unique_id"
                                                class="sub-card"
                                                @click="$emit('handleTaskDetailView', element, list.content, list.name)">
                                                <p class="font-semibold truncate text-sm title">{{ element.data.name }}
                                                </p>
                                                <p class="truncate text-sm desc">{{ element.data.description }}</p>
                                                <div class="flex align-items-center gap-2 mt-1">
                                                    <div class="status-icon"
                                                        :style="`background-color:${element.data.status.color_code}`">
                                                    </div>
                                                    <p class="status text-sm">{{ element.data.status.name }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-user text-lg"></i>
                                                    <div class="flex justify-content-start gap-1">
                                                        <span v-for="(assignee, index) in element.data.assigneeObj"
                                                            :key="index"
                                                            class="flex justify-content-center assignee-wrapper"
                                                            :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }">
                                                            <img v-tooltip.top="{ value: `${assignee.name}` }"
                                                                class="mr-2 capitalize cursor-pointer"
                                                                v-if="assignee.image" :src="assignee.image"
                                                                style="height: 28px; width: 28px; border-radius: 32px; border: 2px solid white"
                                                                alt="" srcset="" />
                                                            <Avatar v-else v-tooltip.top="{ value: `${assignee.name}` }"
                                                                :label="assignee.name.charAt(0)"
                                                                class="mr-2 capitalize cursor-pointer" size="small"
                                                                style="background-color: black; color: white; border-radius: 50%; border: 2px solid white"
                                                                :style="avatarStyle(index)" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-calendar-minus text-lg"></i>
                                                    <p :style="`color: ${element.data.dueDateColor}; font-weight: 500;`"
                                                        class="text-sm">{{ element.data.dueDateValue }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-flag text-lg"></i>
                                                    <p class="text-sm">{{ element.data.priority }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2">
                                                    <i class="pi pi-angle-right text-lg"></i>
                                                    <p class="text-sm font-semibold">{{ element.children.length }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.sub-card {
    background-color: #fff;
    box-shadow: 0px 3px 8px #e2e2e2;
    cursor: grab;
    padding: 12px 10px;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
    width: calc(20rem - 15px);
}

.action-dropdown {
    position: relative;
    display: inline-block;
}

.action-dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.action-dropdown-content button {
    width: 100%;
    text-align: left;
    padding: 10px;
    border: none;
}

.action-dropdown:hover .action-dropdown-content {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 10px 5px;
    top: -11px;
    left: -156px;
    border-radius: 5px;
}

.ac-btn {
    height: 30px !important;
    width: 30px !important;
    font-size: 11px !important;

    .pi {
        font-size: 11px !important;
    }
}

.table-st {
    border: 1px solid #ededed;
    border-radius: 10px;
    overflow: hidden;
    width: 100% !important;
}

.table-st thead tr {
    background: #ededed;
}

.filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 10px;
    border-bottom: 0.5px solid rgb(230, 229, 229);
}

.tone {
    overflow: hidden !important;
    /*text-overflow: ellipsis !important;*/
    white-space: nowrap !important;
}

.task-status {
    display: inline-block;
    margin-right: 5px;
}

.task-status .p-dropdown-trigger {
    display: none;
}

.task-status .p-dropdown {
    border-radius: 50%;
    width: 15px;
    height: 15px;
}

.task-status .status-bg {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 1;
}

.task-status .p-dropdown-label {
    margin-top: -4px;
}

.taskTitle:hover {
    color: #00c8ff;
    font-weight: 500;
}

.assignee-wrapper {
    position: relative;
    z-index: 1;
}

.pi-times {
    top: 30%;
    right: 3%;
    color: gray;
}

.pi-times:hover {
    color: rgb(27, 27, 27);
    font-weight: 500;
    animation: hover-animation 0.3s ease-in-out forwards;
}

@keyframes hover-animation {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.1);
    }
}

.task-status-2 .p-dropdown .p-dropdown-trigger {
    width: 0.7rem !important;
    margin-right: 6px !important;
}

.task-status-2 .p-dropdown .p-inputtext {
    padding: 0.25rem 0.5rem !important;
}

.task-status-2 .status-bg {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 1;
}

.task-status-2 .p-dropdown-label {
    margin-top: -4px;
}

/* Kanban */
.boardContainer {
    display: flex;
    overflow-x: scroll;
    align-items: start;
}

.groupColumnContainer {
    flex-shrink: 0;
    height: 100%;
    /* width: 100%; */
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 500px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.badge {
    background-color: indigo;
    color: white;
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.85em;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
}

.modal-body {
    margin-top: 1rem;
}

.task-input {
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid black;
    padding: 0.5rem;
}

textarea {
    width: 100%;
    height: 100px;
    border: 1px solid black;
    padding: 0.5rem;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
}

.save-button,
.delete-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.save-button {
    background-color: gray;
    color: white;
}

.delete-button {
    background-color: red;
    color: white;
}

.new-status-input {
    min-width: 200px;
    border: none;
    border-bottom: 1px solid black;
    padding: 0.5rem;
}

.new-status-input:focus {
    outline: none !important;
}

.sortable {
    background-color: white;
    color: black;
    border: 1px solid #d6d6d6;
    -webkit-box-shadow: 2px 3px #e2e2e2;
    box-shadow: 2px 3px #e2e2e2;
    -webkit-box-shadow: 2px 3px #202836;
    box-shadow: 2px 3px #202836;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    text-align: left;
}

.inputNew input {
    -webkit-box-shadow: 2px 3px #e2e2e2;
    box-shadow: 2px 3px #e2e2e2;
    border: none;
}

@media only screen and (max-width: 1250px) {
    .boardContainer {
        max-width: 1025px;
    }
}

@media only screen and (max-width: 1025px) {
    .boardContainer {
        max-width: 600px;
    }
}

@media only screen and (max-width: 600px) {
    .boardContainer {
        max-width: 325px;
    }
}

/* Status Column */
.column-container {
    margin: 10px;
    min-height: 100px;
}

.column-header {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 0.85em;
    /* background-color: rgb(3, 184, 93); */
    color: white;
    padding: 10px;
    border-radius: 5px;
    user-select: none;
}

.task-card {
    background-color: #fff;
    box-shadow: 0px 3px 8px #e2e2e2;
    cursor: grab;
    padding: 12px 10px;
    /* margin: 10px 0px; */
    border-radius: 8px;
    width: 20rem;
}

.input-new {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-top: 10px;
}

.draggable {
    background-color: rgb(245, 241, 236);
    padding: 1px 5px 10px 5px;
    height: 55vh;
    overflow-y: auto;
    min-width: 290px;
    border-radius: 8px;
}

.scrollbar::-webkit-scrollbar {
    display: none !important;
}

.ghost {
    background-color: #e20d0d;
}

.sortable {
    background-color: white;
    color: black;
    border: 1px solid #d6d6d6;
    -webkit-box-shadow: 2px 3px #e2e2e2;
    box-shadow: 2px 3px #e2e2e2;
    -webkit-box-shadow: 2px 3px #202836;
    box-shadow: 2px 3px #202836;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    text-align: left;
}

.inputNew input {
    -webkit-box-shadow: 2px 3px #e2e2e2;
    box-shadow: 2px 3px #e2e2e2;
    border: none;
}

.title {
    margin: 0;
}

.desc {
    margin: 0;
    color: #818181;
}

.status-icon {
    /* background-color: red; */
    height: 10px;
    width: 10px;
    border-radius: 10px;
}

.status {
    text-transform: uppercase;
}

.truncate {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

@media only screen and (max-width: 1250px) {
    .boardContainer {
        max-width: 1025px;
    }
}

@media only screen and (max-width: 1025px) {
    .boardContainer {
        max-width: 600px;
    }
}

@media only screen and (max-width: 600px) {
    .boardContainer {
        max-width: 325px;
    }
}

.excel-export-btn {
    background: #f1f5f9;
    border: 1px solid #f1f5f9;
    text-decoration: none;
    padding: 0.2rem 1rem !important;
}

.excel-export-btn img {
    width: 21px;
    height: 20px;
}

.excel-export-btn:hover {
    background: #e2e8f0;
    color: #334155;
    border-color: #e2e8f0;
}

.table-btn {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    min-width: 91.22px;
}

.board-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler {
    margin-right: 0.2rem !important;
}

/* Wrapper to ensure the speed dial only takes the space of the button */
.p-speeddial-button.p-button.p-button-icon-only {
    position: relative;
    width: 30px !important;
    height: 30px !important;
}
.p-speeddial-button.p-button.p-button-icon-only svg {
    display: none; /* Hide original icon */
}

.p-speeddial-button.p-button.p-button-icon-only::before {
    content: ''; /* Required for pseudo-elements */
    background-image: url('../../assets/icons/three-dots.svg'); /* Use the path to your new icon */
    background-size: contain;
    background-repeat: no-repeat;
    display: block; /* Make it visible */
    width: 140%; /* Adjust width and height as needed */
    height: 140%;
    margin-left: 4px;
}

.p-speeddial-list {
    position: absolute;
    right: 30px;
    top: 1.2px;
        li {
            a {
                width: 27.5px !important;
                height: 27.5px !important;
                span{
                    font-size: 13px;
                }
            }
        }
}

.custom-speed-dial:hover{
    .p-speeddial-list {
        background: rgba(255, 255, 255, 0.23);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        padding: 0px 0px 0 100px !important;
    }     
}

.p-speeddial-list {
    
    li:nth-child(1) a {
        background-color: #22c55e;
    }
    li:nth-child(2) a {
        background-color: #a855f7;
    }
    li:nth-child(3) a {
        background-color: #0ea5e9;
    }
    li:nth-child(4) a {
        background-color: #ef4444;
    }
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(90deg);
  }
</style>
