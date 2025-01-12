<!-- <script setup>
import { ref } from 'vue';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const expandedKeys = ref({});
const nodes = ref([
    {
        key: 1,
        data: {
            name: 'Project A',
            assignee: 'Alice',
            dueDateValue: '2024-01-01'
        },
        children: []
    }
]);

const addTask = (slotProps) => {
    const parentNode = slotProps.node; // Get the clicked node
    const newTask = {
        key: `${parentNode.key}-child-${Date.now()}`, // Unique key
        data: {
            name: 'New Task', // Default name
            assignee: '',
            dueDateValue: ''
        },
        children: []
    };

    // Check if the parent node has children, if not, initialize it
    if (!parentNode.children) {
        parentNode.children = [];
    }

    // Push the new task to the parent node's children
    parentNode.children.push(newTask);

    // Update the nodes to trigger reactivity
    nodes.value = [...nodes.value]; // This line ensures the TreeTable updates
};
</script>

<template>
    <div>
        <TreeTable :value="nodes" v-model:expandedKeys="expandedKeys" tableStyle="min-width: 50rem">
            <Column field="data.name" header="Name" expander>
                <template #body="slotProps">
                    {{ slotProps.node.data.name }}
                </template></Column
            >
            <Column field="data.assignee" header="Assignee"></Column>
            <Column field="data.dueDateValue" header="Due Date"></Column>
            <Column header="Actions">
                <template #body="slotProps">
                    <Button label="Add Task" @click="addTask(slotProps)" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<style>
/* Add any necessary styles here */
</style> -->
<script setup>
import { ref } from 'vue';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const expandedKeys = ref({});
const nodes = ref([
    {
        key: 1,
        data: {
            name: 'Project A',
            assignee: 'Alice',
            dueDateValue: '2024-01-01'
        },
        children: [
            {
                key: 1,
                data: {
                    name: 'Project A',
                    assignee: 'Alice',
                    dueDateValue: '2024-01-01'
                },
                children: []
            }
        ]
    }
]);

const addTask = (parentNode) => {
    const newTask = {
        key: `${parentNode.key}-child-${Date.now()}`, // Unique key
        data: {
            name: '', // Start with an empty name
            assignee: '',
            dueDateValue: ''
        },
        isEditing: true, // Set the new task to be editable
        children: []
    };

    // Check if the parent node has children, if not, initialize it
    if (!parentNode.children) {
        parentNode.children = [];
    }

    // Push the new task to the parent node's children
    parentNode.children.push(newTask);

    // Update the nodes to trigger reactivity
    nodes.value = [...nodes.value]; // This line ensures the TreeTable updates
};
</script>
<template>
    <div>
        <TreeTable :value="nodes" v-model:expandedKeys="expandedKeys" tableStyle="min-width: 50rem">
            <Column field="data.name" header="Name" expander>
                <template #body="slotProps">
                    <div v-if="slotProps.node.isEditing">
                        <InputText v-model="slotProps.node.data.name" placeholder="Enter task name" />
                    </div>
                    <div v-else>
                        {{ slotProps.node.data.name }}
                    </div>
                </template>
            </Column>
            <Column field="data.assignee" header="Assignee"></Column>
            <Column field="data.dueDateValue" header="Due Date"></Column>
            <Column header="Actions">
                <template #body="slotProps">
                    <Button label="Add Task" @click="addTask(slotProps.node)" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<style>
/* Add any necessary styles here */
</style>
