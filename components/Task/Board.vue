<script setup>
// import Dialog from 'primevue/dialog';
import { useCompanyStore } from '~/store/company';
const { data, statuses } = defineProps(['data', 'statuses']);
const usersListStore = useCompanyStore();
const tagsListStore = useCompanyStore();
const usersLists = ref(usersListStore);
const tagsLists = ref(tagsListStore);
// const taskList = ref([
//     {
//         name: 'Open',
//         content: [
//             { t_name: 'laundry', id: 1, description: 'I need to do my laundry' },
//             { t_name: 'clean', id: 2, description: 'I need to do my cleaning' },
//             { t_name: 'code', id: 3 }
//         ]
//     },
//     {
//         name: 'Doing',
//         content: [{ t_name: 'run', id: 4 }]
//     },
//     {
//         name: 'Dev Done',
//         content: [{ t_name: 'shower', id: 5 }]
//     },
//     {
//         name: 'Complete',
//         content: [{ t_name: 'shower', id: 6 }]
//     }
// ]);
const taskList = ref(data);
const currStatus = ref('');
const currList = ref([]);
const currTask = ref({});
const isOpen = ref(false);
const { projects } = useRoute().params;
const newStatus = ref('');
const openModal = (element, list, listName) => {
    isOpen.value = true;
    currList.value = list;
    currTask.value = element;
    currStatus.value = listName;
    console.log('open modal:', element, projects);
};

const close = () => {
    isOpen.value = false;
};

const handleDelete = () => {
    const taskIndex = currList.value.findIndex((element) => element.id == currTask.value.id);
    currList.value.splice(taskIndex, 1);
    isOpen.value = false;
};

const save = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList.value));
};

// const addColumn = () => {
//     taskList.value.push({
//         name: newStatus.value,
//         content: [{ t_name: 'shower', id: uuidv4() }]
//     });
//     newStatus.value = '';
// };

const handleChange = (event, serial) => {
    console.log('event: ', event, serial.value);
    const { added, moved, removed } = event;
    // if (added) {
    //     const { element, newIndex } = added;
    //     const toColumn = taskList.value[event.to.index];
    //     console.log(`Added item ${element.t_name} to ${toColumn.name} at position ${newIndex}`);
    // }

    // if (removed) {
    //     const { element, oldIndex } = removed;
    //     const fromColumn = taskList.value[event.from.index];
    //     console.log(`Removed item ${element.t_name} from ${fromColumn.name} at position ${oldIndex}`);
    // }

    // if (moved) {
    //     const { element, newIndex, oldIndex } = moved;
    //     const fromColumn = taskList.value[event.from.index];
    //     const toColumn = taskList.value[event.to.index];
    //     console.log(`Moved item ${element.t_name} from ${fromColumn.name} at position ${oldIndex} to ${toColumn.name} at position ${newIndex}`);
    // }
};

// onMounted(() => {
//     if (process.client) {
//         if (localStorage.taskList) {
//             taskList.value = JSON.parse(localStorage.getItem('taskList') || '[]');
//         } else {
//             localStorage.setItem('taskList', JSON.stringify(taskList.value));
//         }
//     }
// });

// watch(
//     taskList,
//     (newTaskList) => {
//         localStorage.setItem('taskList', JSON.stringify(newTaskList));
//     },
//     { deep: true }
// );

// Modal Handler
const handleTaskDetailView = (event) => {
    console.log(event);
};
</script>

<template>
    <div>
        <div class="boardContainer" style="display: flex; overflow-x: scroll; align-items: start">
            <div v-for="list in taskList" :key="list" class="groupColumnContainer">
                <TaskStatusColumn :list="list.content" :name="list.name" :color="list.statusColor" @open-modal="openModal" @change="handleChange"></TaskStatusColumn>
            </div>

            <!-- TASK MODAL -->
            <!-- <div v-if="isOpen" class="modal-overlay" @click="close">
                <div class="modal-content" @click="stop">
                    <header class="modal-header">
                        <span class="badge">{{ currStatus }}</span>
                        <button class="close-button" @click="close">×</button>
                    </header>
                    <div class="modal-body">
                        <input v-model="currTask.t_name" class="task-input" placeholder="Task Name" />
                        <textarea v-model="currTask.description" placeholder="Add a description"></textarea>
                    </div>
                    <footer class="modal-footer">
                        <button class="save-button" @click="save">Save</button>
                        <button class="delete-button" @click="handleDelete">Delete</button>
                    </footer>
                </div>
            </div> -->
            <Dialog v-model:visible="isOpen" modal header=" " :style="{ width: '90rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <TaskDetail
                    :usersLists="usersLists"
                    :tagsLists="tagsLists"
                    :projID="projects"
                    @handleTaskEdit="handleTaskEdit($event)"
                    @handleTaskDetailView="handleTaskDetailView($event)"
                    @confirmDeleteTask="confirmDeleteTask($event)"
                    @updateTaskTable="updateTaskTable"
                />
            </Dialog>
            <!-- <input @keydown.enter="addColumn" placeholder="+ New" v-model="newStatus" class="new-status-input" /> -->
        </div>
    </div>
</template>

<style>
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

/* width */
::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #d2b5ff;
    cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #d3b5ff93;
}
</style>
