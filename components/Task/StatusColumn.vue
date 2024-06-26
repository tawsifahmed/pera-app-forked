<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps(['list', 'name', 'index']);
const emits = defineEmits(['open-modal', 'change']);

const alteredList = ref(props.list);
const newtask = ref('');
const editable = ref(true);
const isDragging = ref(false);
const delayedDragging = ref(false);

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
    boxShadow: '0px 3px 8px #e2e2e2',
    cursor: 'grab',
    padding: '12px 10px',
    margin: '4px 0px'
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
        <div class="column-header">{{ name }} - {{ alteredList.length }}</div>
        <draggable v-model="alteredList" :options="dragOptions" class="draggable" itemKey="name" group="cardItem" @change="emitChange">
            <template v-slot:item="{ element }">
                <div class="task-card" :style="taskCardStyle" :key="element.id" @click="$emit('open-modal', element, alteredList, name)">
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
    width: 240px;
    min-height: 100px;
}

.column-header {
    margin-bottom: 5px;
    font-size: 0.85em;
    background-color: rgb(3, 184, 93);
    color: white;
    padding: 5px;
    border-radius: 5px;
}

.task-card {
    background-color: #fff;
    box-shadow: 0px 3px 8px #e2e2e2;
    cursor: grab;
    padding: 12px 10px;
    margin: 4px 0px;
}

.input-new {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-top: 10px;
}

.draggable {
    min-height: 200px;
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
