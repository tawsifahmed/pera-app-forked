<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps(['list', 'name', 'index', 'color', 'status']);
const emits = defineEmits(['open-modal', 'change', 'handleTaskDetailView']);

const alteredList = ref(props.list);
const newtask = ref('');
const editable = ref(true);
const isDragging = ref(false);
const delayedDragging = ref(false);
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
// const add = () => {
//     if (newtask.value) {
//         alteredList.value.push({ t_name: newtask.value, id: uuidv4() });
//         newtask.value = '';
//     }
// };
const emitChange = (event) => {
    emits('change', event, serial);
};

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

const serial = computed(() => {
    if (process.client) {
        const existing = JSON.parse(localStorage.getItem('taskList') || '[]');
        return existing.findIndex((item) => item.name === props.name);
    }
    return 0;
});
const log = (value) => {
    console.log(value);
};
watch(
    alteredList,
    (newstuff) => {
        if (process.client) {
            let existing = JSON.parse(localStorage.getItem('taskList') || '[]');
            if (serial.value !== -1) {
                existing[serial.value].content = newstuff;
                localStorage.setItem('taskList', JSON.stringify(existing));
            }
        }
        // console.log('status', props.status[serial.value].status);
    },
    { deep: true }
);

watch(isDragging, (newValue) => {
    if (newValue) {
        delayedDragging.value = true;
        return;
    }
    nextTick(() => {
        delayedDragging.value = false;
    });
});
</script>

<template>
    <div class="column-container">
        <div :style="`background-color: ${props.color}; `" class="column-header">{{ name }} - {{ alteredList.length }}</div>
        <draggable v-model="alteredList" :options="dragOptions" class="draggable scrollbar" itemKey="name" group="cardItem" @change="emitChange">
            <template v-slot:item="{ element }">
                <div class="task-card" :style="taskCardStyle" :key="element.id" @click="$emit('open-modal', element, alteredList, name)">
                    <div class="">
                        <p class="font-semibold truncate text-sm title">{{ element.data.name }}</p>
                        <p class="truncate text-sm desc">{{ element.data.description }}</p>
                        <div class="flex align-items-center gap-2 mt-1">
                            <div class="status-icon" :style="`background-color:${props.color}`"></div>
                            <!-- <p class="status text-sm">{{ element.data.status.name }}</p> -->
                            <p class="status text-sm">{{ props.status.name }}</p>
                        </div>
                        <div class="mt-2 flex align-items-center gap-2">
                            <i class="pi pi-user text-lg"></i>
                            <div class="flex justify-content-start gap-1">
                                <span v-for="(assignee, index) in element.data.assigneeObj" :key="index" class="flex justify-content-center assignee-wrapper" :style="{ marginLeft: index > 0 ? '-20px' : '0', zIndex: 10 - index }">
                                    <!-- <pre>{{ assignee }}</pre> -->
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
                        <div class="mt-2 flex align-items-center gap-2">
                            <i class="pi pi-calendar-minus text-lg"></i>
                            <p :style="`color: ${element.data.dueDateColor}; font-weight: 500;`" class="text-sm">{{ element.data.dueDateValue }}</p>
                        </div>
                        <div class="mt-2 flex align-items-center gap-2">
                            <i class="pi pi-flag text-lg"></i>
                            <p class="text-sm">{{ element.data.priority }}</p>
                        </div>
                        <div class="mt-2 flex align-items-center gap-2">
                            <i class="pi pi-list text-lg"></i>
                            <p class="text-sm font-semibold">{{ element.children.length }}</p>
                        </div>
                    </div>
                    {{ element.t_name }}
                </div>
            </template>
        </draggable>
        <!-- ADD NEW TASK -->
        <!-- <input placeholder="+ New" v-model="newtask" class="input-new" @keydown.enter="add" /> -->
    </div>
</template>

<style scoped>
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
    min-width: 20rem;
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
