<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import accessPermission from '~/composables/usePermission';
import Column from 'primevue/column';
const usersListStore = useCompanyStore();
const { getSingleProject, getTaskAssignModalData } = useCompanyStore();
const { modStatusList, singleProject, statuslist } = storeToRefs(useCompanyStore());
const createTaskP = ref(accessPermission('create_task'));
const updateTaskP = ref(accessPermission('update_task'));
const deleteTaskP = ref(accessPermission('delete_task'));
const downloadTaskP = ref(accessPermission('download_task'));
const toast = useToast();
const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);
const { tasks } = defineProps(['tasks']);
const route = useRoute();
const id = route.params?.projects;

const filterAssignees = ref();
const filterPriorities = ref();
const filterStatus = ref();
const filterStartDueDate = ref();
const filterEndDueDate = ref();
const filterSearch = ref();
const usersLists = ref({});

const priorities = ref([
    { name: 'All', code: '' },
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const userI = ref();
const prio = ref();
const sta = ref();
const que = ref();
const strD = ref();
const enD = ref();

const handleFilterReset = () => {
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
    filterStartDueDate.value = newDate;
    isCalendarSelected1.value = true;
    changeAttribute();
};
const endDateChange = (newDate) => {
    isCalendarSelected2.value = true;
    filterEndDueDate.value = newDate;
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
    
    // return
    loading.value = true;
    console.log('lod', taskLists);
    // return
    if (taskLists.length > 0) {
        const csvContent =
    'data:text/csv;charset=utf-8,' +
    '"Serial No","Unique ID","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"\n' +
    taskLists
        .map((task, index) => {
            const serialNo = index + 1;
            const uniqueId = task.unique_id;
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

            return `"${serialNo}","${uniqueId}","${taskName}","${projectName}","${assignees}","${priority}","${status}","${timeTracked}","${dueDate}","${isOverDue}"`;
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
        const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/tasks/update/${task_id}`, {
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
</script>

<template>
    <div class="filter-wrapper pb-2 mb-1">
        <!-- <pre>{{tasks}}</pre> -->
        <MultiSelect @change="changeAttribute()" v-model="filterAssignees" :options="usersLists" filter optionLabel="name" placeholder="Filter Assignees" :maxSelectedLabels="3" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterPriorities" :options="priorities" optionLabel="name" placeholder="Filter Priority" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterStatus" :options="modStatusList" optionLabel="name" placeholder="Filter Status" class="w-full md:w-17rem mb-2" />
        <div class="mb-2 relative">
            <Calendar @date-select="startDateChange($event)" v-model="filterStartDueDate" placeholder="Filter Start Due Date" class="w-full md:w-17rem" />
            <p v-if="isCalendarSelected1" @click="handleDateDelete1" class="pi pi-times absolute cursor-pointer"></p>
        </div>
        <div class="mb-2 relative">
            <Calendar @date-select="endDateChange($event)" v-model="filterEndDueDate" placeholder="Filter End Due Date" class="w-full md:w-17rem" />
            <p v-if="isCalendarSelected2" @click="handleDateDelete2" class="pi pi-times end-cross absolute cursor-pointer"></p>
        </div>
        <Button @click="handleFilterReset" label="Reset" class="mr-2 w-full md:w-17rem mb-2" severity="secondary" />
    </div>
    <Toolbar class="border-0 px-0">
        <template #start>
            <!-- <pre>{{tasks}}</pre> -->
            <Button v-if="createTaskP" icon="pi pi-plus" label="Create Task" @click="emit('openCreateSpace', '', 'task')" class="mr-2" severity="secondary" />
            <!-- <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="downloadTaskSheet(tasks)" /> -->
          

            <!-- task report download -->

            <Button
                type="button"
                v-if="downloadTaskP"
                @click="downloadTaskSheet(tasks)"
                v-tooltip.right="{ value: `Download Tasks` }"
                icon="pi pi-file-excel"
                :loading="loading"
                label=""
                class="mr-2"
                severity="secondary"
                :style="`${loading === true ? 'backGround: red' : ''}`"
            />

            <!-- <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" /> -->
            <!-- <Button icon="pi pi-users" label="Invite a guest" severity="secondary" /> -->
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
    <TreeTable class="table-st" stripedRows :value="tasks" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" filterDisplay="menu" style="overflow: auto">
        <template #empty> <p class="text-center">No Data found...</p> </template>
        <!-- <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '50%' }"></Column> -->
        <Column field="name" header="Name" class="cursor-pointer tone" expander :style="{ width: '50%' }">
            <template #body="slotProps">
                <div class="inline-block">
                    <div class="task-status" v-tooltip.top="{ value: `${slotProps.node.data.status.name}` }">
                        <Dropdown class="mr-1 flex justify-content-center align-items-center" @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)" v-model="slotProps.node.data.status" :options="statuslist" optionLabel="name">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center" :style="{ backgroundColor: slotProps.value.color_code }">
                                    <div :style="{ backgroundColor: slotProps.value.color_code }" class="status-bg"></div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div :style="{ backgroundColor: slotProps.option.color_code }" style="width: 15px; height: 15px; border-radius: 50%" class="p-1 mr-2 pi"></div>
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <!-- <div>{{slotProps.node.data.status.name}}</div> -->
                    <span class="taskTitle" @click="emit('handleTaskDetailView', slotProps.node)">{{ slotProps.node.data.name }}</span>
                </div>
            </template>
        </Column>
        <Column field="assignee" header="Assignee" :style="{ width: '20%' }">
            <template #body="slotProps">
                <div class="flex justify-content-start gap-1">
                    <span v-for="(assignee, index) in slotProps.node.data.assigneeObj" :key="index" class="flex justify-content-center assignee-wrapper" :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }">
                        <img
                            v-tooltip.top="{ value: `${assignee.name}` }"
                            class="mr-2 capitalize cursor-pointer"
                            v-if="assignee.image"
                            :src="assignee.image"
                            style="height: 28px; width: 28px; border-radius: 32px; border: 2px solid white"
                            alt=""
                            srcset=""
                        />
                        <Avatar
                            v-else
                            v-tooltip.top="{ value: `${assignee.name}` }"
                            :label="assignee.name.charAt(0)"
                            class="mr-2 capitalize cursor-pointer"
                            size="small"
                            style="background-color: black; color: white; border-radius: 50%; border: 2px solid white"
                            :style="avatarStyle(index)"
                        />
                    </span>
                </div>
            </template>
        </Column>
        <Column field="status" header="Status" :style="{ width: '15%' }">
            <template #body="slotProps">
                <div class="inline-block">
                    <div class="task-status-2">
                        <!-- <pre>{{statuslist}}</pre> -->
                        <Dropdown class="mr-1 flex justify-content-center align-items-center" @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)" v-model="slotProps.node.data.status" :options="statuslist" optionLabel="name">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center">
                                    <div :style="{ color: slotProps.value.color_code, fontWeight: 500 }" class="pt-1">{{ slotProps.value.name }}</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div :style="{ backgroundColor: slotProps.option.color_code }" style="width: 15px; height: 15px; border-radius: 50%" class="p-1 mr-2 pi"></div>
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <!-- <div>{{slotProps.node.data.status.name}}</div> -->
                </div>
            </template>
        </Column>
        <Column field="dueDateValue" header="Due Date"  :style="{ width: '10%' }">
            <template #body="slotProps">
                <div :style="`color: ${slotProps.node.data.dueDateColor}; font-weight: 600;`">{{ slotProps.node.data.dueDateValue }}</div>
            </template>
        </Column>
        <Column field="priority" header="Priority" :style="{ width: '10%' }"></Column>
        <Column field="action" header="Action" :style="{ width: '10%' }">
            <template #body="slotProps">
                <div class="action-dropdown flex justify-content-start align-items-center">
                    <Button style="width: 30px; height: 30px; border-radius: 50%" icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                    <!-- <span class="pi pi-circle-fill text-xs ml-2 mt-1" style="color:crimson;"></span> -->
                    <div class="action-dropdown-content">
                        <Button v-if="createTaskP" icon="pi pi-plus" class="mr-2 ac-btn" severity="success" v-tooltip.left="{ value: 'Create Sub Task' }" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                        <Button v-if="!createTaskP" icon="pi pi-plus" class="mr-2 ac-btn" severity="success" rounded style="visibility: hidden" />
                        <Button v-if="updateTaskP" icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" v-tooltip.top="{ value: 'Edit Task' }" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                        <Button v-if="!updateTaskP" icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" rounded style="visibility: hidden" />
                        <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info" v-tooltip.top="{ value: 'Task Detail' }" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                        <Button v-if="deleteTaskP" icon="pi pi-trash" class="ac-btn" severity="warning" v-tooltip.top="{ value: 'Delete Task' }" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                        <Button v-if="!deleteTaskP" icon="pi pi-trash" class="ac-btn" severity="warning" rounded style="visibility: hidden" />
                        
                    </div>
                </div>
            </template>
        </Column>
    </TreeTable>
</template>

<style>
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
</style>
