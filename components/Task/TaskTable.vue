<script setup>
import draggable from 'vuedraggable';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
import { useClockStore } from '~/store/clock';
import accessPermission from '~/composables/usePermission';
import Column from 'primevue/column';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { toRaw } from 'vue';
const url = useRuntimeConfig();
const usersListStore = useCompanyStore();
const { getSingleProject, getTaskAssignModalData, editTask, createTask } = useCompanyStore();
const { modStatusList, singleProject, statuslist, isTaskEdited, recentTaskData, countTasksByStatus, totalTaskCount, calendarTasks, tasks, isGetApiCalled } = storeToRefs(useCompanyStore());
const { handleMissDeadlineShowTimer } = useClockStore();
const { deadlineJustifyProvided } = storeToRefs(useClockStore());
const createTaskP = ref(accessPermission('create_task'));
const updateTaskP = ref(accessPermission('update_task'));
const deleteTaskP = ref(accessPermission('delete_task'));
const downloadTaskP = ref(accessPermission('download_task'));
const toast = useToast();
const emit = defineEmits(['openCreateSpace', 'handleTaskEdit', 'handleTaskDetailView', 'confirmDeleteTask']);
const { kanbanTasks } = defineProps(['kanbanTasks']);
const tableData = ref(tasks || []);
const route = useRoute();
const id = route.params?.projects;

const filterAssignees = ref();
const filterPriorities = ref();
const filterStatus = ref();
const filterDate = ref();
const filterSearch = ref();
const usersLists = ref({});
const viewMode = ref('list');
const newTaskNameInput = ref(null);
const handleViews = (view) => {
    viewMode.value = view;

    if (view === 'git') {
        gitCommitinit();
    }
};

const gitBranchesList = ref([]);

const gitBranchinit = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('branchList', () =>
        $fetch(`${url.public.apiUrl}/gitlab/${id}/branch`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.branch_list.length > 0) {
        // gitBranchesList.value = [{ label: '', name: 'All' }, ...this.statuslist];
        let branchData = data.value.branch_list?.map((item) => ({ label: item.name, name: item.name }));
        gitBranchesList.value = [{ label: '', name: 'All' }, ...branchData];
    } else {
        gitBranchesList.value = [{ label: 'No Branches', name: 'No Branches' }];
    }
};

gitBranchinit();

const selectedGitBranch = ref({ label: '', name: 'All' });

const gitCommits = ref([]);
const gitCommitinit = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('commitsList', () =>
        $fetch(`${url.public.apiUrl}/gitlab/${id}/commit?branch=${selectedGitBranch.value ? selectedGitBranch.value?.label : ''}`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.code === 200) {
        gitCommits.value = data.value.commit_list;
    } else {
        gitCommits.value = [];
    }
};

if (viewMode.value === 'git') {
    gitCommitinit();
}

const filterBranches = () => {
    gitCommitinit();
};

const priorities = ref([
    { name: 'All', code: '' },
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const onChangePriorities = ref([
    { name: 'Urgent', code: 'Urgent' },
    { name: 'High', code: 'High' },
    { name: 'Normal', code: 'Normal' },
    { name: 'Low', code: 'Low' }
]);

const dateFormatter = (data) => {
    const dateStr = data;
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
};

const isSpeedDialVisible = ref({});

const hoveredRowKey = ref(null);

watch(hoveredRowKey, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        // inlineAssignees.value = [];
    }
});

const handleMouseEnter = (key) => {
    hoveredRowKey.value = key;
    if (editClikedRowKey.value !== key) {
        checkMarkInput.value = {
            ...checkMarkInput.value,
            [key]: false
        };
        editClikedRowKey.value = null;
    }
};

const editClikedRowKey = ref(null);

const checkMarkInput = ref({});
const inlineTaskNameInput = ref(null);
const inputLoading = ref(false);

const handleInlineNameEdit = (node) => {
    inlineTaskNameInput.value = node.data.name;
    const inputT = document.getElementById(`inputTaskName${node.key}`);
    editClikedRowKey.value = node.key;
    checkMarkInput.value = Object.keys(checkMarkInput.value).reduce((acc, key) => {
        acc[key] = false;
        return acc;
    }, {});
    nextTick(() => {
        if (inputT) {
            inputT.focus();
        }
    });

    checkMarkInput.value = {
        ...checkMarkInput.value,
        [node.key]: true
    };
};

const inputChanged = ref(false);
watch(inlineTaskNameInput, (newVal, oldVal) => {
    if (oldVal !== null) {
        inputChanged.value = true;
    }
});

// Timer reference for managing click delay
let clickTimer = ref(null);

// Single click handler
const handleClick = (node) => {
    // Clear the timer if already set to prevent single click on double click
    if (clickTimer.value) {
        clearTimeout(clickTimer.value);
        clickTimer.value = null;
    }

    // Set timer to trigger the single-click action
    clickTimer.value = setTimeout(() => {
        emit('handleTaskDetailView', node);
        clickTimer.value = null; // Reset the timer after the function runs
    }, 250); // Delay for single click detection (250ms)
};

// Double click handler
const handleDblClick = (node) => {
    // Clear the single click timer to avoid running both functions
    if (clickTimer.value) {
        clearTimeout(clickTimer.value);
        clickTimer.value = null;
    }

    // Call the double-click function
    handleInlineNameEdit(node);
};

const updateTaskName = async (node, KeyPressed = null) => {
    console.log('node =>', toRaw(node));
    if (KeyPressed == 'ctrl+shift+Enter') {
        if (newTaskNameInput.value == null || '') {
            return toast.add({ severity: 'warn', summary: 'Error', detail: 'Task name is required!', group: 'br', life: 3000 });
        }
        const newTask = {
            name: newTaskNameInput.value,
            parent_task_id: parentTaskId.value,
            project_id: id
        };
        const res = await createTask(newTask);
        const data = res?.data;
        console.log('data ==>', data);
        const obj = {
            key: data?.id,
            unique_id: data?.unique_id,
            data: { ...data }
        };
        console.log('obj ==>', obj);

        const newChild = {
            key: `new`, // Unique key
            unique_id: `new-${Date.now()}`,
            data: {
                name: '', // Initially empty, will be filled by user input
                assignee: {},
                created_at: new Date().toISOString(),
                dueDateValue: '',
                status: {
                    id: null,
                    name: 'New',
                    color_code: '#6466f1'
                },
                is_overdue: false
            },
            children: []
        };

        function waitForValue(callback) {
            const checkInterval = 100;

            const timer = setInterval(() => {
                if (isGetApiCalled.value) {
                    clearInterval(timer);
                    callback();
                }
            }, checkInterval);
        }

        waitForValue(() => {
            inlineCreateSubTask({ node: { ...obj, children: [newChild] } });
        });

        newTaskNameInput.value = '';
        return (showInput.value = false);
    }

    if (KeyPressed == 'ctrl+Enter') {
        if (newTaskNameInput.value == null || '') {
            return toast.add({ severity: 'warn', summary: 'Error', detail: 'Task name is required!', group: 'br', life: 3000 });
        }
        const newTask = {
            name: newTaskNameInput.value,
            parent_task_id: parentTaskId.value,
            project_id: id
        };
        const data = await createTask(newTask);
        // console.log('data ==>', data?.data);
        const obj = {
            ...data?.data,
            key: data?.data?.id,
            unique_id: data?.data?.unique_id
        };
        emit('handleTaskDetailView', obj);
        newTaskNameInput.value = '';
        return (showInput.value = false);
    }

    if (node.key === 'new') {
        if (newTaskNameInput.value == null || '') {
            return toast.add({ severity: 'warn', summary: 'Error', detail: 'Task name is required!', group: 'br', life: 3000 });
        }
        const newTask = {
            name: newTaskNameInput.value,
            parent_task_id: parentTaskId.value,
            project_id: id
        };
        await createTask(newTask);
        newTaskNameInput.value = '';
        return (showInput.value = false);
    } else {
        if (inputChanged.value !== true) {
            return toast.add({ severity: 'warn', summary: 'Error', detail: 'Change task name!', group: 'br', life: 3000 });
        } else {
            await handleTaskChanges(inlineTaskNameInput.value, node.key);
            checkMarkInput.value = {
                ...checkMarkInput.value,
                [taskId]: false
            };
            inlineTaskNameInput.value = null;
            editClikedRowKey.value = null;
            inputChanged.value = false;
        }
    }
};

const showSpeedDial = (key) => {
    isSpeedDialVisible.value = {
        ...isSpeedDialVisible.value,
        [key]: true
    };
};

const hideSpeedDial = (key) => {
    isSpeedDialVisible.value = {
        ...isSpeedDialVisible.value,
        [key]: false
    };
};

const getActionItems = (node) => {
    return [
        {
            label: 'Add Sub Task',
            icon: 'pi pi-plus text-white',
            command: () => {
                emit('openCreateSpace', node.key, 'sub-task');
            },
            disabled: !createTaskP
        },
        {
            label: 'Edit Task',
            icon: 'pi pi-pencil text-white',
            command: () => {
                emit('handleTaskEdit', node);
            },
            disabled: !updateTaskP
        },
        {
            label: 'Task Detail',
            icon: 'pi pi-window-maximize text-white',
            command: () => {
                emit('handleTaskDetailView', node);
            }
        },
        {
            label: 'Delete Task',
            icon: 'pi pi-trash text-white',
            command: () => {
                emit('confirmDeleteTask', node.key);
            },
            disabled: !deleteTaskP
        }
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
    if (filterAssignees.value || filterPriorities.value || filterStatus.value || filterSearch.value || filterDate.value) {
        filterAssignees.value = '';
        filterPriorities.value = '';
        filterStatus.value = '';
        filterSearch.value = '';
        filterDate.value = [];
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
    strD.value = filterDate.value[0] ? dateFormatter(filterDate.value[0]) : '';
    enD.value = filterDate.value[1] ? dateFormatter(filterDate.value[1]) : '';
    getSingleProject(id, userI.value, prio.value, sta.value, que.value, strD.value, enD.value);
};

const isCalendarSelected1 = ref(false);
const isCalendarSelected2 = ref(false);

const handleDateFilter = () => {
    changeAttribute();
};

const loading = ref(false);

const downloadTaskSheet = (taskLists) => {
    loading.value = true;
    if (taskLists.length > 0) {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            '"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"\n' +
            taskLists
                .map((task, index) => {
                    const serialNo = index + 1;
                    const taskName = task.data.name;
                    const projectName = singleProject.value.name;
                    const assignees = task.data.assigneeObj.map((assignee) => assignee.name).join('; ');
                    const priority = task.data.priority?.name ? task.data.priority?.name : '';
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

const tableLoader = ref(true);
onMounted(async () => {
    await getSingleProject(id);
    tableLoader.value = false;
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
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Status Changed', group: 'br', life: 3000 });
            await getSingleProject(id);
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to change status', group: 'br', life: 3000 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const inlineAssignees = ref([]);
const inlineAssigTId = ref(null);
const handleAssigneeSelection = (task_id) => {
    console.log('inlineAssignees', inlineAssignees.value);
    inlineAssigTId.value = task_id;
    inlineAssignees.value = [];
};
// const handleAssigneeChanges = () => {
//     inlineAssigneesIds.value = inlineAssigneesIds.value ? inlineAssigneesIds.value.map((item) => item.id) : '';
//     handleTaskChanges(inlineAssigneesIds.value, )
// }

const cLoading = ref(false);

const handleTaskChanges = async (taskValue, task_id) => {
    if (taskValue instanceof Date) {
        cLoading.value = true;
        let sendEditDate;
        if (taskValue) {
            const selectedDate = new Date(taskValue);
            selectedDate.setDate(selectedDate.getDate() + 1);
            sendEditDate = selectedDate.toISOString();
        }
        const editTaskData = {
            id: task_id,
            dueDate: sendEditDate ? new Date(new Date(sendEditDate).getTime() - 18 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ') : null,
            project_id: id
        };

        await editTask(editTaskData);

        if (isTaskEdited.value === true) {
            cLoading.value = false;
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Due date updated ', group: 'br', life: 3000 });
        } else {
            cLoading.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update due date!', group: 'br', life: 3000 });
        }
    } else if (taskValue?.name) {
        const editTaskData = {
            id: task_id,

            priority: taskValue.name,

            project_id: id
        };

        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Priority updated ', group: 'br', life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task priority!', group: 'br', life: 3000 });
        }
    } else {
        inputLoading.value = true;
        const editTaskData = {
            id: task_id,
            name: taskValue,
            project_id: id
        };

        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Task name updated ', group: 'br', life: 3000 });
            inputLoading.value = false;
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update task name!', group: 'br', life: 3000 });
            inputLoading.value = false;
        }
    }
};

const inlineAssigL = ref(false);
const handleAssigneeChanges = async (type, values, key) => {
    if (type === 'add') {
        inlineAssigL.value = true;
        const editTaskData = {
            id: key,
            assignees: inlineAssignees.value?.map((assignee) => assignee.id),
            project_id: id
        };
        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Assignees updated ', group: 'br', life: 3000 });
            inlineAssignees.value = [];
            inlineAssigL.value = false;
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update assignees!', group: 'br', life: 3000 });
            inlineAssigL.value = false;
        }
    }
    if (type === 'edit') {
        const editTaskData = {
            id: key,
            assignees: values?.map((assignee) => assignee.id),
            project_id: id
        };
        await editTask(editTaskData);
        if (isTaskEdited.value === true) {
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Assignees updated ', group: 'br', life: 3000 });
            inlineAssignees.value = [];
            inlineAssigL.value = false;
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to update assignees!', group: 'br', life: 3000 });
            inlineAssigL.value = false;
        }
    }
};

const inlineDueDate = ref();

watch(deadlineJustifyProvided, (newVal) => {
    if (newVal === true) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Due date updated ', group: 'br', life: 5000 });
    }
    if (newVal === false) {
        toast.add({ severity: 'warn', summary: 'Unsuccessful!', detail: 'Deadline justification is not provided.', group: 'br', life: 5000 });
    }
});
const handleDateChange = async (newDate, slotKey) => {
    console.log('slotKey', slotKey);

    if (slotKey.node.data.dueDateValue !== '' && slotKey.node.data.parent_task_id === null) {
        const selectedDate = new Date(newDate);
        selectedDate.setHours(23, 59, 0, 0);
        inlineDueDate.value = selectedDate;
        await handleMissDeadlineShowTimer(slotKey.node.key, id, inlineDueDate.value);

        // toast.add({ severity: 'warn', summary: 'Provide Justification!', detail: 'Since you are trying to change the deadline of the parent task.', group: 'br', life: 3000 });
    } else {
        const selectedDate = new Date(newDate);
        selectedDate.setHours(23, 59, 0, 0);
        inlineDueDate.value = selectedDate;
        let placeHolderValue = new Date(inlineDueDate.value).toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
        slotKey.node.data.dueDateValue = placeHolderValue;
        await handleTaskChanges(inlineDueDate.value, slotKey.node.key);
    }
    // const selectedDate = new Date(newDate);
    // selectedDate.setHours(23, 59, 0, 0);
    // inlineDueDate.value = selectedDate;
    // let placeHolderValue = new Date(inlineDueDate.value).toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    // slotKey.node.data.dueDateValue = placeHolderValue;
    // await handleTaskChanges(inlineDueDate.value, slotKey.node.key);
};

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

const mUserL = ref([]);
const getUserlist = async () => {
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    mUserL.value = usersListStore.users;
};

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

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

// Inline Task Adding functionality
const expandedKeys = ref({});
const currentParentNode = ref(null);
const showInput = ref(false);
const newTaskName = ref('');
const parentTaskId = ref(null);

const createNewTask = async () => {
    if (showInput.value) {
        removeChild(toRaw(tableData.value));
        newTaskName.value = '';
    }
    const newChild = {
        key: `new`, // Unique key
        unique_id: `new-${Date.now()}`,
        data: {
            name: '', // Initially empty, will be filled by user input
            assignee: {},
            created_at: new Date().toISOString(),
            dueDateValue: '',
            status: {
                id: null,
                name: 'New',
                color_code: '#6466f1'
            },
            is_overdue: false
        },
        children: []
    };
    showInput.value = true;
    tableData.value = [newChild, ...tableData.value];
    await nextTick();
    const newInput = document.getElementById('newSubTask');
    if (newInput) {
        newInput.focus();
    }
};
const inlineCreateSubTask = async (parentNode) => {
    console.log('parentNode ==>', parentNode);
    if (showInput.value) {
        removeChild(toRaw(tableData.value));
    }
    const node = toRaw(parentNode.node);
    console.log('parentNode node ==>', node);

    parentTaskId.value = node.key;
    const newChild = {
        key: `new`, // Unique key
        unique_id: `new-${Date.now()}`,
        data: {
            name: '', // Initially empty, will be filled by user input
            assignee: {},
            created_at: new Date().toISOString(),
            dueDateValue: '',
            status: {
                id: null,
                name: 'New',
                color_code: '#6466f1'
            },
            is_overdue: false
        },
        children: []
    };
    showInput.value = true;
    console.log('node.key ==>', node.key);
    console.log('newChild ==>', newChild);
    console.log('toRaw(tableData.value) ==>', toRaw(tableData.value));
    const updateTable = addChild(node.key, newChild, toRaw(tableData.value));
    console.log('updateTable ==>', updateTable);
    tableData.value = structuredClone(updateTable);
    newTaskName.value = '';
    expandedKeys.value[parentNode.node.key] == true ? null : (expandedKeys.value[parentNode.node.key] = true);
    // expandedKeys.value[parentNode.node.key] = true;

    await nextTick();
    const newInput = document.getElementById('newSubTask');
    if (newInput) {
        newInput.focus();
    }
};

// Recursive function to add a child
function addChild(parentKey, newChild, node) {
    for (const child of node) {
        if (child.key === parentKey) {
            child.children.unshift(newChild);
            return node;
        }
        if (addChild(parentKey, newChild, child.children)) {
            return node;
        }
    }
    return false;
}

// Recursive function to remove a child
function removeChild(node = toRaw(tableData.value)) {
    const filtered = node.filter((item) => {
        if (item.key !== 'new') {
            return toRaw(item);
        }
    });
    filtered.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children = removeChild(item.children);
        }
    });

    tableData.value = JSON.parse(JSON.stringify(filtered));
    newTaskNameInput.value = '';
    return tableData.value;
    // return (tableData.value = structuredClone(filtered));
}

const refreshLoader = ref(false);
const refreshDisabled = ref(false);
const handleRefresh = async () => {
    refreshLoader.value = true;

    await getSingleProject(id);
    getUserlist();
    refreshLoader.value = false;
    refreshDisabled.value = true;
    setTimeout(() => {
        refreshDisabled.value = false;
    }, 3500);
};
</script>

<template>
    <div class="filter-wrapper pb-2 mb-1">
        <MultiSelect @change="changeAttribute()" v-model="filterAssignees" :options="usersLists" filter resetFilterOnHide optionLabel="name" placeholder="Assignees" :maxSelectedLabels="3" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterPriorities" :options="priorities" optionLabel="name" placeholder="Priority" class="w-full md:w-17rem mb-2" />
        <Dropdown @change="changeAttribute()" v-model="filterStatus" :options="modStatusList" optionLabel="name" placeholder="Status" class="w-full md:w-17rem mb-2" />
        <div class="mb-2 relative">
            <Calendar @hide="handleDateFilter" dateFormat="dd/mm/yy" :manualInput="false" selectionMode="range" v-model="filterDate" placeholder="Filter by Due Dates" class="w-full text-sm" />
            <!-- <Calendar @date-select="startDateChange($event)" v-model="filterStartDueDate" placeholder="Start Due Date" class="w-full md:w-17rem" />
            <p v-if="isCalendarSelected1" @click="handleDateDelete1" class="pi pi-times absolute cursor-pointer"></p> -->
        </div>

        <Button @click="handleFilterReset" label="Reset" class="mr-2 w-full md:w-15rem mb-2" severity="secondary" />
    </div>
    <Toolbar class="border-0 px-0">
        <template #start>
            <!-- <pre>{{tasks}}</pre> -->
            <div class="flex flex-wrap gap-1">
                <Button v-if="createTaskP && viewMode !== 'list'" icon="pi pi-plus" label="Create Task" @click="emit('openCreateSpace', '', 'task')" class="mr-2" severity="secondary" />

                <Button v-if="createTaskP && viewMode === 'list'" icon="pi pi-plus" label="Create Task" @click="createNewTask()" class="mr-2" severity="secondary" />
                <div class="view-btns">
                    <Button icon="pi pi-box" label="Overview" @click="handleViews('overview')" class="board-btn view-btn" severity="secondary" :class="{ 'bg-indigo-400 text-white': viewMode === 'overview' }" />
                    <Button icon="pi pi-list" label="List" @click="handleViews('list')" class="table-btn view-btn" severity="secondary" :class="{ 'bg-indigo-400 text-white': viewMode === 'list' }" />
                    <Button icon="pi pi-th-large" label="Board" @click="handleViews('board')" class="board-btn view-btn" severity="secondary" :class="{ 'bg-indigo-400 text-white': viewMode === 'board' }" />
                    <!-- <Button icon="pi pi-sliders-h" label="Gantt" @click="handleViews('gantt')" class="gantt-btn view-btn" severity="secondary" :class="{ 'bg-indigo-400 text-white': viewMode === 'gantt' }" /> -->
                    <Button icon="pi pi-calendar" label="Calendar" @click="handleViews('calendar')" class="calendar-btn view-btn" severity="secondary" :class="{ 'bg-indigo-400 text-white': viewMode === 'calendar' }" />
                </div>
                <!-- <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="downloadTaskSheet(tasks)" /> -->
                <Button icon="pi pi-github" v-tooltip.right="{ value: `Git Commits` }" @click="handleViews('git')" class="px-4" :class="{ 'bg-indigo-400 text-white': viewMode === 'git' }" severity="secondary" />
                <!-- task report download -->

                <Button v-if="downloadTaskP" @click="downloadTaskSheet(tasks)" v-tooltip.right="{ value: `Download Tasks` }" :loading="loading" severity="secondary" class="px-4" icon="pi pi-file-excel" />
                <!-- <Button icon="pi pi-upload" label="" class="mr-2" severity="secondary" /> -->
                <!-- <Button icon="pi pi-users" label="Invite a guest" severity="secondary" /> -->
            </div>
        </template>

        <template #end>
            <Button @click="handleRefresh" icon="pi pi-refresh" severity="secondary" v-tooltip.left="{ value: `Refresh` }" :loading="refreshLoader" :disabled="refreshDisabled" class="mr-2" rounded raised />
            <IconField iconPosition="right" raised>
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText @keyup="changeAttribute()" v-model="filterSearch" placeholder="Keyword Search" />
            </IconField>
        </template>
    </Toolbar>
    <!-- <pre>{{ tableData[0] }}</pre> -->
    <!-- project overview -->
    <div v-if="viewMode === 'overview'">
        <div class="grid mt-2">
            <div class="col-12 lg:col-6 xl:col-3">
                <div class="card mb-0" :style="`border-left:6px solid #000;`">
                    <div to="/tags" class="flex justify-content-between">
                        <h4 class="mb-0 block text-xl font-semibold tracking-tight">Total Tasks</h4>
                        <div class="text-900 font-bold text-2xl">{{ totalTaskCount }}</div>
                    </div>
                </div>
            </div>

            <div v-for="(statsC, index) in countTasksByStatus" :key="statsC" class="col-12 lg:col-6 xl:col-3">
                <div class="card mb-0" :style="`border-left:6px solid ${statsC.statusColor};`">
                    <div to="/tags" class="flex justify-content-between">
                        <h4 class="mb-0 text-xl font-semibold tracking-tight">{{ statsC.statusName }}</h4>
                        <div class="text-900 font-bold text-2xl">{{ statsC.taskCount }}</div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <Card class="h-full">
                    <template #title>Recent Tasks</template>
                    <template #content>
                        <div class="task-container">
                            <div>
                                <div v-for="recentTask in recentTaskData" :key="recentTask" @click="$emit('handleTaskDetailView', recentTask)" class="task-card">
                                    <div class="title-group">
                                        <div v-tooltip.left="{ value: `Status: ${recentTask.statusName}` }" :class="`recenttaskstatus`" :style="`background-color: ${recentTask?.statusColor};`"></div>
                                        <p class="rtitle line-clamp-1" style="font-weight: 600">{{ recentTask?.taskName }}</p>
                                    </div>
                                    <div>
                                        <i>
                                            <p style="font-size: 12px"><strong>Due Date:</strong> {{ recentTask.dueDate ? dateFormatter(recentTask?.dueDate) : '-- Not Set --' }}</p></i
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex justify-content-center">
                                <Button v-if="currentPage < totalPages" @click="loadMoreTasks('hide-loader')" :loading="loadMoreLoading" label="Load More" severity="secondary" />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>

    <!-- Tree table -->
    <!-- old=> -->
    <TreeTable
        v-if="viewMode === 'list'"
        class="table-st"
        stripedRows
        :value="tableData"
        scrollable
        scrollHeight="580px"
        scrollDirection="both"
        v-model:expandedKeys="expandedKeys"
        :lazy="true"
        :loading="tableLoader"
        filterDisplay="menu"
        style="overflow: auto"
        :tableProps="{ style: { minWidth: '1024px' } }"
    >
        <template #empty>
            <p class="text-center font-medium font-italic">No data found</p>
        </template>
        <!-- <Column class="cursor-pointer" field="name" header="Name" expander :style="{ width: '50%' }"></Column> -->
        <Column field="name" header="Name" class="" expander :style="{ width: '45%' }" :showAddButton="true">
            <template #body="slotProps">
                <div class="inline-block w-full align-items-center tasktitle-hover cursor-pointer relative" @mouseenter="handleMouseEnter(slotProps.node.key)">
                    <div @dblclick="handleDblClick(slotProps.node)" class="flex w-full">
                        <div class="task-status" v-tooltip.top="{ value: `${slotProps.node.data.status.name}` }">
                            <Dropdown
                                class="mr-1 flex justify-content-center align-items-center"
                                @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)"
                                v-model="slotProps.node.data.status"
                                :options="statuslist"
                                :disabled="!updateTaskP"
                                optionLabel="name"
                            >
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
                        <span @click="handleClick(slotProps.node)" :style="editClikedRowKey === slotProps.node.key ? 'display: none;' : 'display: block;'" class="taskTitle cursor-pointer" :title="slotProps.node.data.name"
                            >{{ slotProps.node.data.name }}
                        </span>
                        <span>
                            <InputText
                                :id="`inputTaskName${slotProps.node.key}`"
                                :style="editClikedRowKey === slotProps.node.key ? 'display: block;' : 'display: none;'"
                                class="inline-task-input"
                                v-model="inlineTaskNameInput"
                                type="text"
                                placeholder="Edit task name"
                            />
                        </span>

                        <form
                            v-if="slotProps.node.key == 'new'"
                            @keydown="
                                (e) => {
                                    if (e.key === 'Enter' && e.ctrlKey && e.shiftKey) {
                                        e.preventDefault();
                                        updateTaskName(slotProps.node, 'ctrl+shift+Enter');
                                        return;
                                    }
                                    if (e.key === 'Enter' && e.ctrlKey) {
                                        e.preventDefault();
                                        updateTaskName(slotProps.node, 'ctrl+Enter');
                                    }
                                }
                            "
                            :onsubmit="
                                (e) => {
                                    e.preventDefault();
                                    updateTaskName(slotProps.node);
                                }
                            "
                            action=""
                        >
                            <InputText id="newSubTask" class="inline-task-input" v-model="newTaskNameInput" type="text" placeholder="Task Name" autocomplete="off" />
                        </form>
                    </div>
                </div>
            </template>
        </Column>

        <Column field="" header="" :style="{ width: '4%', padding: '0.75rem 0rem' }">
            <template #body="slotProps">
                <div class="w-full h-full flex align-items center" @mouseenter="handleMouseEnter(slotProps.node.key)">
                    <div class="flex gap-1 w-full h-full justify-content-center align-items-center" v-if="hoveredRowKey === slotProps.node.key">
                        <Button
                            @click="handleInlineNameEdit(slotProps.node)"
                            v-tooltip.top="{ value: `Edit Name`, showDelay: 500 }"
                            v-if="!checkMarkInput[slotProps.node.key] && slotProps.node.key !== 'new'"
                            severity="secondary"
                            icon="pi pi-pencil"
                            class="w-fit h-fit p-1"
                            style="font-size: 0.8rem !important"
                        />
                        <Button
                            @click="inlineCreateSubTask(slotProps)"
                            v-tooltip.top="{ value: `Add Sub Task`, showDelay: 500 }"
                            v-if="!checkMarkInput[slotProps.node.key] && slotProps.node.key !== 'new'"
                            severity="secondary"
                            icon="pi pi-plus"
                            class="w-fit h-fit p-1"
                            style="font-size: 0.2rem"
                        />
                        <Button
                            @click="updateTaskName(slotProps.node)"
                            :loading="inputLoading"
                            v-tooltip.top="{ value: slotProps.node.key !== 'new' ? `Update Name` : 'Add Task' }"
                            v-if="checkMarkInput[slotProps.node.key] || slotProps.node.key == 'new'"
                            severity="secondary"
                            :label="slotProps.node.key == 'new' ? '' : 'Save'"
                            :icon="slotProps.node.key == 'new' ? 'pi pi-check' : ''"
                            class="p-1 w-fit h-full"
                            :style="slotProps.node.key == 'new' ? 'font-size: 0.8rem !important; height: fit-content !important;' : ''"
                        />

                        <Button @click="removeChild()" v-tooltip.top="{ value: `Cancel Task`, showDelay: 500 }" v-if="slotProps.node.key == 'new'" severity="secondary" icon="pi pi-minus" class="w-fit h-fit p-1" style="font-size: 0.8rem !important" />
                    </div>
                </div>
            </template>
        </Column>
        <Column header="Tags" :style="{ width: '11%' }">
            <template #body="slotProps">
                <div class="flex gap-1 flex-nowrap overflow-hidden">
                    <!-- <pre>{{ slotProps.node.data.tagsObj }}</pre> -->
                    <Tag v-for="tags in slotProps.node.data.tagsObj" :key="tags" severity="secondary" :value="tags.name" class="text-nowrap" v-tooltip.top="{ value: `${tags.name}` }"></Tag>
                </div>
            </template>
        </Column>
        <Column field="assignee" header="Assignee" :style="{ width: '6%' }">
            <template #body="slotProps">
                <div v-if="slotProps.node.key !== 'new'" class="flex justify-content-start gap-1 userL">
                    <span class="flex justify-content-center assignee-wrapper"> </span>
                    <div>
                        <div class="assigneeSelect">
                            <div class="relative">
                                <span class="flex" v-if="slotProps.node.data?.assigneeObj.length > 0">
                                    <!-- Show the first three assignees -->
                                    <span v-for="(assignee, index) in slotProps.node.data.assigneeObj.slice(0, 3)" :key="index" :style="{ marginLeft: index > 0 ? '-19.5px' : '0', zIndex: 10 - index }" class="flex align-items-center">
                                        <img
                                            v-tooltip.top="{ value: `${assignee.name}` }"
                                            class="mr-2 capitalize cursor-pointer"
                                            v-if="assignee.image"
                                            :src="assignee.image"
                                            style="height: 23px; width: 23px; border-radius: 50%; border: 1px solid white"
                                            alt=""
                                            srcset=""
                                        />
                                        <Avatar
                                            v-else
                                            v-tooltip.top="{ value: `${assignee.name}` }"
                                            :label="assignee.name.charAt(0)"
                                            class="mr-2 capitalize cursor-pointer"
                                            size="small"
                                            style="height: 25px; width: 25px; background-color: black; color: white; border-radius: 50%; border: 2px solid white"
                                            :style="avatarStyle(index)"
                                        />
                                    </span>
                                    <Avatar
                                        v-if="slotProps.node.data.assigneeObj.length > 3"
                                        :label="`+${slotProps.node.data.assigneeObj.length - 3}`"
                                        class="mr-2 cursor-pointer absolute"
                                        size="small"
                                        style="height: 25px; width: 25px; background-color: #f1f5f9; color: black; border-radius: 50%; border: 2px solid white; left: 39px"
                                    />

                                    <!-- Show the remaining count if there are more than three assignees -->
                                </span>
                                <Button
                                    v-else
                                    v-tooltip.top="{ value: `Edit Assignee`, showDelay: 500 }"
                                    severity="secondary"
                                    :icon="slotProps.node.data?.assigneeObj.length > 0 ? 'pi pi-user-edit' : 'pi pi-user-plus'"
                                    class="w-fit h-fit p-1"
                                    style="font-size: 0.8rem !important"
                                />
                                <MultiSelect
                                    v-model="slotProps.node.data.assignee"
                                    @change="handleAssigneeChanges('edit', slotProps.node.data.assignee, slotProps.node.key)"
                                    :options="mUserL"
                                    filter
                                    resetFilterOnHide="true"
                                    optionLabel="name"
                                    placeholder="Assignees"
                                    :maxSelectedLabels="3"
                                    class="w-full absolute cursor-default"
                                    style="opacity: 0; left: 0; top: 0"
                                    :style="slotProps.node.data?.assigneeObj.length > 0 ? 'z-index: 10;' : ''"
                                />
                            </div>
                        </div>
                        <!-- <span :style="slotProps.node.data?.assigneeObj.length === 0 ? 'display: block;' : 'display: none;'">
                            <div class="s-assignee">
                                <div @click="handleAssigneeSelection(slotProps.node.key)" class="flex justify-content-center align-items-center gap-2 cursor-pointer relative">
                                    <i class="pi pi-user-plus pl-1 text-xl" style="padding-top: 0.1rem"></i>
                                    <i class="pi pi-angle-down text-sm mt-1"></i>
    
                                    <Button
                                        @change="handleAssigneeChanges('add', 0, slotProps.node.key)"
                                        v-tooltip.top="{ value: `Set Assigness`, showDelay: 500 }"
                                        v-if="inlineAssignees.length > 0 && slotProps.node.key !== 'new' && inlineAssigTId === slotProps.node.key"
                                        severity="secondary"
                                        icon="pi pi-check"
                                        class="w-fit h-fit p-1"
                                        style="font-size: 0.8rem !important; z-index: 10"
                                        :id="`assigneeBtn${slotProps.node.key}`"
                                        :loading="inlineAssigL"
                                    />
                                    <MultiSelect v-model="inlineAssignees" @change="handleAssigneeChanges('edit', slotProps.node.data.assignee, slotProps.node.key)" :options="usersLists" filter resetFilterOnHide optionLabel="name" placeholder="Assignees" :maxSelectedLabels="3" class="w-full absolute" style="opacity: 0" />
                                </div>
                            </div>
                        </span> -->
                    </div>
                </div>
            </template>
        </Column>
        <Column field="status" header="Status" :style="{ width: '10%' }">
            <template #body="slotProps">
                <div v-if="slotProps.node.key !== 'new'" class="inline-block">
                    <div class="task-status-2">
                        <!-- <pre>{{statuslist}}</pre> -->
                        <Dropdown
                            class="mr-1 flex justify-content-center align-items-center"
                            @change="handleTaskStatus(slotProps.node.data.status, slotProps.node.key)"
                            v-model="slotProps.node.data.status"
                            :options="statuslist"
                            :disabled="!updateTaskP"
                            optionLabel="name"
                        >
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center">
                                    <div :title="slotProps.value.name" :style="{ color: slotProps.value.color_code, fontWeight: 500 }" class="pt-1 status-truncate">{{ slotProps.value.name }}</div>
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
                </div>
            </template>
        </Column>
        <Column field="dueDateValue" header="Due Date" :style="{ textWrap: 'nowrap', width: '9%', padding: '0.75rem 0.5rem' }">
            <template #body="slotProps">
                <i v-if="slotProps.node.key !== 'new'" class="pi pi-calendar" style="padding-top: 0.1rem"></i>
                <Calendar
                    v-if="slotProps.node.key !== 'new'"
                    @date-select="handleDateChange($event, slotProps)"
                    class="inline-calendar cursor-pointer"
                    :class="slotProps.node.data.dueDateColor === '#087641' && slotProps.node.data.dueDateValue ? 'green-calendar' : slotProps.node.data.dueDateColor === '#b13a41' && slotProps.node.data.dueDateValue ? 'red-calendar' : ''"
                    :placeholder="slotProps.node.data.dueDateValue ? slotProps.node.data.dueDateValue : '--:--'"
                />
            </template>
        </Column>
        <Column field="priority" header="Priority" :style="{ width: '9%' }">
            <template #body="slotProps">
                <div v-if="slotProps.node.key !== 'new'" class="inline-block">
                    <div class="task-status-2 flex">
                        <i class="pi pi-flag pt-2"></i>
                        <Dropdown
                            class="mr-1 flex justify-content-center align-items-center"
                            @change="handleTaskChanges(slotProps.node.data.priority, slotProps.node.key)"
                            v-model="slotProps.node.data.priority"
                            :options="onChangePriorities"
                            :disabled="!updateTaskP"
                            optionLabel="name"
                            placeholder="Set Priority"
                        >
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center">
                                    <div
                                        v-if="slotProps.value.name"
                                        :style="{
                                            color: slotProps.value.name === 'Low' ? '#e1aa1e' : slotProps.value.name === 'Normal' ? '#067bea' : slotProps.value.name === 'High' ? '#ff4928' : slotProps.value.name === 'Urgent' ? 'crimson' : '',
                                            fontWeight: 500
                                        }"
                                        class="pt-1"
                                    >
                                        {{ slotProps.value.name }}
                                    </div>
                                    <div v-else class="pt-1">-----</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                </div>
            </template>
        </Column>
        <Column field="action" header="Action" :style="{ width: '6%', position: 'relative' }">
            <template #body="slotProps">
                <div v-if="slotProps.node.key !== 'new'" class="justify-content-start align-items-center webView-action" style="width: fit-content" @mouseover="showSpeedDial(slotProps.node.key)" @mouseleave="hideSpeedDial(slotProps.node.key)">
                    <SpeedDial v-model:visible="isSpeedDialVisible[slotProps.node.key]" :model="getActionItems(slotProps.node)" direction="left" class="custom-speed-dial" :tooltipOptions="{ position: 'top' }" />
                </div>
                <div v-if="slotProps.node.key !== 'new'" class="justify-content-start align-items-center tabView-action" style="width: fit-content" @click="showSpeedDial(slotProps.node.key)" @mouseleave="hideSpeedDial(slotProps.node.key)">
                    <SpeedDial v-model:visible="isSpeedDialVisible[slotProps.node.key]" :model="getActionItems(slotProps.node)" direction="left" class="custom-speed-dial" :tooltipOptions="{ position: 'top' }" />
                </div>
                <!-- PrimeVue SpeedDial -->
            </template>
        </Column>
    </TreeTable>

    <!-- Kanban Board -->
    <div v-if="viewMode === 'board'" class="main-container">
        <div class="content">
            <div>
                <div class="boardContainer" style="display: flex; overflow-x: auto; align-items: start">
                    <div v-for="list in kanbanTasks" :key="list" class="groupColumnContainer">
                        <div class="column-container">
                            <div :style="`background-color: ${list.statusColor}; `" class="column-header">{{ list.name }} - {{ list.content.length }}</div>
                            <draggable v-model="list.content" :options="dragOptions" :disabled="!updateTaskP" class="draggable scrollbar" itemKey="name" group="cardItem" @change="(e) => handleChange(e, list.status)">
                                <template v-slot:item="{ element }">
                                    <div class="">
                                        <div class="task-card" :style="taskCardStyle" :key="element.id" @click="$emit('handleTaskDetailView', element, list.content, list.name)">
                                            <div class="">
                                                <p class="font-semibold truncate-board text-sm title" v-tooltip.top="{ value: `${element.data.name}` }">{{ element.data.name }}</p>
                                                <div class="flex align-items-center gap-2 mt-1">
                                                    <div class="status-icon" :style="`background-color:${element.data.status.color_code}`"></div>
                                                    <p class="status text-sm">{{ element.data.status.name }}</p>
                                                </div>

                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.assigneeObj?.length > 0">
                                                    <i class="pi pi-user text-lg"></i>
                                                    <div class="flex justify-content-start gap-1">
                                                        <span
                                                            v-for="(assignee, index) in element.data.assigneeObj"
                                                            :key="index"
                                                            class="flex justify-content-center assignee-wrapper"
                                                            :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }"
                                                        >
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
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.dueDateValue">
                                                    <i class="pi pi-calendar-minus text-lg"></i>
                                                    <p :style="`color: ${element.data.dueDateColor}; font-weight: 500;`" class="text-sm">{{ element.data.dueDateValue }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.priority?.name">
                                                    <i class="pi pi-flag text-lg"></i>
                                                    <p class="text-sm">{{ element.data.priority?.name }}</p>
                                                </div>
                                                <div
                                                    class="mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100"
                                                    style="border-radius: 5px"
                                                    @click="
                                                        (event) => {
                                                            event.stopPropagation();
                                                            if (activeSubTask == element.unique_id) {
                                                                activeSubTask = null;
                                                            } else {
                                                                activeSubTask = element.unique_id;
                                                            }
                                                        }
                                                    "
                                                >
                                                    <p class="mb-1">Subtask</p>
                                                    <i :class="`pi ${activeSubTask == element.unique_id ? 'pi-angle-down' : 'pi-angle-right'}  text-lg`"></i>
                                                    <p class="text-sm font-semibold">{{ element.children.length }}</p>
                                                </div>
                                            </div>
                                            {{ element.t_name }}
                                        </div>
                                        <div :class="activeSubTask === element.unique_id ? '' : 'hidden'">
                                            <div v-for="element in element.children" :key="element.unique_id" class="sub-card" @click="$emit('handleTaskDetailView', element, list.content, list.name)">
                                                <p class="font-semibold truncate-board text-sm title">{{ element.data.name }}</p>
                                                <!-- <p class="truncate text-sm desc">{{ element.data.description }}</p> -->
                                                <div class="flex align-items-center gap-2 mt-1">
                                                    <div class="status-icon" :style="`background-color:${element.data.status.color_code}`"></div>
                                                    <p class="status text-sm">{{ element.data.status.name }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.assigneeObj?.length > 0">
                                                    <i class="pi pi-user text-lg"></i>
                                                    <div class="flex justify-content-start gap-1">
                                                        <span
                                                            v-for="(assignee, index) in element.data.assigneeObj"
                                                            :key="index"
                                                            class="flex justify-content-center assignee-wrapper"
                                                            :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }"
                                                        >
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
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.dueDateValue">
                                                    <i class="pi pi-calendar-minus text-lg"></i>
                                                    <p :style="`color: ${element.data.dueDateColor}; font-weight: 500;`" class="text-sm">{{ element.data.dueDateValue }}</p>
                                                </div>
                                                <div class="mt-2 flex align-items-center gap-2" v-if="element.data?.priority?.name">
                                                    <i class="pi pi-flag text-lg"></i>
                                                    <p class="text-sm">{{ element.data.priority?.name }}</p>
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

    <!-- task calendar -->
    <div v-if="viewMode === 'calendar'" class="">
        <!-- <VueCal :events="calendarTasks"  :selected-date="new Date().current" :time-from="8 * 60" :disable-views="['years', 'year', 'week']" active-view="month" events-on-month-view="short" style="height: 600px"/> -->
        <vue-cal :events="calendarTasks" :selected-date="new Date().current" :time-from="8 * 60" :disable-views="['years', 'year', 'week']" active-view="month" events-on-month-view="short" style="height: 600px">
            <template #event="{ event }">
                <div @click="handleClick(event)" class="vuecal__event" :style="{ background: event.color }" v-html="event.title" />
            </template>
        </vue-cal>
    </div>

    <div v-if="viewMode === 'git'">
        <Card>
            <template #title>Commit List</template>
            <template #content>
                <Dropdown @change="filterBranches" v-model="selectedGitBranch" :options="gitBranchesList" optionLabel="name" placeholder="Branches" class="w-full md:w-17rem mb-3 mt-2" />
                <div>
                    <div class="commit-card-wrapper mb-2">
                        <Timeline v-if="gitCommits.length > 0" :value="gitCommits">
                            <template #content="slotProps">
                                <div class="flex justify-content-between align-items-center bb">
                                    <div>
                                        <div class="flex align-items-center gap-2">
                                            <div class="pi pi-user"></div>
                                            <h6 class="m-0">{{ slotProps.item.author_name }}</h6>
                                        </div>
                                        <div>
                                            <h6 class="font-light mt-2 mb-0 commit-title">- {{ slotProps.item.title }}</h6>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-normal mb-0 text-mute">
                                            <small>{{ slotProps.item.authored_date }} </small>
                                        </p>
                                        <a :href="slotProps.item.web_url" target="_blank" class="font-small text-end">
                                            <small>{{ slotProps.item.short_id }}</small></a
                                        >
                                    </div>
                                </div>
                            </template>
                        </Timeline>
                        <div v-else class="w-full flex justify-content-center my-1">
                            <h4><i>No Commits Found</i></h4>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
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
    width: calc(23rem - 15px);
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
    border: inherit;
    border-radius: 10px;
    overflow: hidden;
    width: 100% !important;
}
.table-st thead {
    z-index: 30;
}
.table-st .p-treetable-emptymessage {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col-1 {
    width: 45%;
}

// .p-resizable-column {
//     width: 45%;
// }

.table-st thead th:hover {
    // border: 1px solid #e2e8f0;
    // border-top: none;
    // border-bottom: 1px solid #e2e8f0;

    // border: 2px solid #e2e8f0;
    // border-top: none;
    // border-bottom: 1px solid #e2e8f0;
}

.table-st table {
    width: 100% !important;
}

.filter-wrapper {
    display: flex;
    // flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 10px;
    border-bottom: inherit;
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

.tasktitle-hover:hover {
    color: #00c8ff;
    font-weight: 500;
}

.taskTitle {
    max-width: 100%;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    left: 23px;
    bottom: 0px;
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
    padding-right: 4px !important;
}
.task-status-2 .p-dropdown {
    background: none;
    border: none;
    box-shadow: none;
}
.task-status-2 .p-dropdown:focus {
    background: none;
    border: none;
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
.task-status-2 .p-focus {
    outline: none;
    outline-offset: -1px;
    box-shadow: none;
    border-color: none;
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
@media only screen and (max-width: 1380px) {
    .filter-wrapper {
        flex-wrap: wrap;
    }
}
@media only screen and (max-width: 1250px) {
    .boardContainer {
        max-width: 1025px;
    }
    .filter-wrapper {
        flex-wrap: wrap;
    }
}

@media only screen and (max-width: 1025px) {
    .boardContainer {
        max-width: 600px;
    }
    .filter-wrapper {
        flex-wrap: wrap;
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
    height: 12px;
    width: 12px;
    border-radius: 12px;
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
.truncate-board {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    border-right: 0px !important;
    min-width: 91.22px;
}

/*.board-btn {
    border-radius: 0px;
    border-left: 2px solid #e2e8f0;
    border-right: 2px solid #e2e8f0;
}

.gantt-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}*/

.view-btns .view-btn:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.view-btns .view-btn:last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.view-btns .view-btn:not(:first-child):not(:last-child) {
    border-radius: 0px;
    border-left: inherit;
    border-right: inherit;
}

.webView-action {
    display: flex;
}

.tabView-action {
    display: none;
}

@media (max-width: 1024px) {
    .webView-action {
        display: none;
    }

    .tabView-action {
        display: flex;
    }
}

.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    margin-right: 0.2rem !important;
    flex-shrink: 0;
    margin-top: 0.1rem;
}

/* Wrapper to ensure the speed dial only takes the space of the button */
.p-speeddial-button.p-button.p-button-icon-only {
    position: relative;
    width: 30px !important;
    height: 30px !important;
}

.p-speeddial-button.p-button.p-button-icon-only svg {
    display: none;
    /* Hide original icon */
}

.p-speeddial-button.p-button.p-button-icon-only::before {
    content: '';
    /* Required for pseudo-elements */
    background-image: url('../../assets/icons/three-dots.svg');
    /* Use the path to your new icon */
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    /* Make it visible */
    width: 140%;
    /* Adjust width and height as needed */
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

            span {
                font-size: 13px;
            }
        }
    }
}

.custom-speed-dial:hover {
    .p-speeddial-list {
        background: transparent !important;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        padding: 0px 0px 0 10px !important;
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

.p-treetable-loading-overlay {
    background: transparent !important;
    z-index: 100;
    backdrop-filter: blur(100px) !important;
    -webkit-backdrop-filter: blur(100px) !important;
}

.green-calendar > input::-webkit-input-placeholder {
    color: #087641;
    font-weight: 600;
}

.green-calendar > input:-moz-placeholder {
    color: #087641;
    font-weight: 600;
}

.green-calendar > input::-moz-placeholder {
    color: #087641;
    font-weight: 600;
}

.green-calendar > input:-ms-input-placeholder {
    color: #087641;
    font-weight: 600;
}

.red-calendar > input::-webkit-input-placeholder {
    color: #b13a41;
    font-weight: 600;
}

.red-calendar > input:-moz-placeholder {
    color: #b13a41;
    font-weight: 600;
}

.red-calendar > input::-moz-placeholder {
    color: #b13a41;
    font-weight: 600;
}

.red-calendar > input:-ms-input-placeholder {
    color: #b13a41;
    font-weight: 600;
}

.inline-calendar {
    @media (min-width: 1440px) {
        max-width: 4.2vw !important;
        border: none;
        font-weight: 400;
    }

    cursor: pointer !important;

    .p-inputtext {
        padding: 0.25rem 0.4rem !important;
        cursor: pointer !important;
        caret-color: transparent !important;
        border: none;
        box-shadow: none;
        font-weight: 400;
        outline: none !important;
        outline-offset: -1px !important;
        box-shadow: none !important;
        border-color: none !important;
    }
}

.inline-task-input {
    padding: 0.35rem 0rem !important;
    width: 98.6%;
    position: absolute;
    left: 23px;
    top: -6px;
    border: transparent;
    box-shadow: none;
}
.p-inputtext.inline-task-input:enabled:focus {
    outline: none;
}

.status-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 65px;
}

.filter-container {
    padding: 0 10px;
}

.task-container {
    max-height: 25rem;
    overflow-y: auto;
    padding: 0px 8px 0px 1px;
}

.task-card {
    border-radius: 5px;
    padding: 10px 10px;
    margin: 8px 0;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}

.task-card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

// .status {
//     height: 12px;
//     width: 12px;
//     border-radius: 25px;
//     background: #000;
// }

.rTitle {
    margin: auto 0;
    max-width: 300px;
}

.title-group {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.commit-card-wrapper .p-timeline-event-opposite {
    display: none !important;
}

.commit-card {
    border: none !important;
    border-bottom: 1px solid #e2e8f0 !important;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    padding: 10px 5px !important;
    margin-bottom: 0px !important;
}

.commit-title {
    max-width: 550px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.bb {
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
}

.recenttaskstatus {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.vuecal__menu {
    background-color: #8183f4;
}
.vuecal__view-btn {
    color: #ffffff;
}
.vuecal__title-bar {
    background-color: #b8b9fd;
    color: white !important;
}
.vuecal__arrow--prev i.angle {
    border: 1px solid #ffff;
    border-width: 0 2px 2px 0;
    rotate: 180deg;
}
.vuecal__arrow i.angle {
    border: 1px solid #ffff;
    border-width: 0 2px 2px 0;
}
.vuecal__weekdays-headings {
    background-color: transparent;
}
.vuecal__bg {
    background-color: #f9f9f9;
}
.vuecal__cell-events {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 5px;
}
.vuecal__cell-content {
    justify-content: start !important;
    padding: 4px;
}
.vuecal__event {
    padding: 3px;
    border-radius: 5px;
    color: #ffffff;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    white-space: wrap;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.vuecal__event--focus {
    box-shadow: none !important;
}
</style>
