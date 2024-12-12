<script setup>
import { onMounted, ref } from 'vue';
import { GridStack } from 'gridstack';

const layout = ref([
    { x: 4, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 2, h: 4, i: '1' },
    { x: 4, y: 0, w: 2, h: 5, i: '2' },
    { x: 6, y: 0, w: 2, h: 3, i: '3' },
    { x: 8, y: 0, w: 2, h: 3, i: '4' },
    { x: 10, y: 0, w: 2, h: 3, i: '5' },
    { x: 0, y: 5, w: 2, h: 5, i: '6' },
    { x: 2, y: 5, w: 2, h: 5, i: '7' },
    { x: 4, y: 5, w: 2, h: 5, i: '8' },
    { x: 6, y: 4, w: 2, h: 4, i: '9' },
    { x: 8, y: 4, w: 2, h: 4, i: '10' },
    { x: 10, y: 4, w: 2, h: 4, i: '11' },
    { x: 0, y: 10, w: 2, h: 5, i: '12' },
    { x: 2, y: 10, w: 2, h: 5, i: '13' },
    { x: 4, y: 8, w: 2, h: 4, i: '14' },
    { x: 6, y: 8, w: 2, h: 4, i: '15' },
    { x: 8, y: 10, w: 2, h: 5, i: '16' },
    { x: 10, y: 4, w: 2, h: 2, i: '17' },
    { x: 0, y: 9, w: 2, h: 3, i: '18' },
    { x: 2, y: 6, w: 2, h: 2, i: '19' }
]);

const gridstack = ref(null);

onMounted(() => {
    // Load layout from localStorage if it exists
    const savedLayout = localStorage.getItem('gridLayout');
    if (savedLayout) {
        layout.value = JSON.parse(savedLayout);
    } else {
        // If no layout in localStorage, use a default layout
        layout.value = [
            { x: 0, y: 0, w: 2, h: 2, i: '0' },
            { x: 2, y: 0, w: 2, h: 4, i: '1' },
            { x: 4, y: 0, w: 2, h: 5, i: '2' },
            { x: 6, y: 0, w: 2, h: 3, i: '3' },
            { x: 8, y: 0, w: 2, h: 3, i: '4' },
            { x: 10, y: 0, w: 2, h: 3, i: '5' },
            { x: 0, y: 5, w: 2, h: 5, i: '6' },
            { x: 2, y: 5, w: 2, h: 5, i: '7' },
            { x: 4, y: 5, w: 2, h: 5, i: '8' },
            { x: 6, y: 4, w: 2, h: 4, i: '9' },
            { x: 8, y: 4, w: 2, h: 4, i: '10' },
            { x: 10, y: 4, w: 2, h: 4, i: '11' },
            { x: 0, y: 10, w: 2, h: 5, i: '12' },
            { x: 2, y: 10, w: 2, h: 5, i: '13' },
            { x: 4, y: 8, w: 2, h: 4, i: '14' },
            { x: 6, y: 8, w: 2, h: 4, i: '15' },
            { x: 8, y: 10, w: 2, h: 5, i: '16' },
            { x: 10, y: 4, w: 2, h: 2, i: '17' },
            { x: 0, y: 9, w: 2, h: 3, i: '18' },
            { x: 2, y: 6, w: 2, h: 2, i: '19' }
        ];
    }

    // Initialize Gridstack with 12 columns and 30 rows, and custom margins
    const grid = GridStack.init(
        {
            // cellHeight: 30, // Height of the grid cells
            // column: 12, // Number of columns
            // row: 30, // Number of rows
            draggable: {
                handle: '.grid-stack-item-content' // Drag handle
            },
            resizable: {
                handles: 'se' // Resize handle at the bottom-right
            },
            verticalMargin: 0, // Vertical gap between grid items
            horizontalMargin: 0 // Horizontal gap between grid items
        },
        gridstack.value
    );

    // Update layout and save to localStorage when the grid is moved or resized
    grid.on('change', (event, items) => {
        // Map Gridstack items to the layout array
        console.log(event, items);
        const updateItems = layout.value;
        items.forEach((item, index) => {
            let tempValue = updateItems[item._id - 1];
            tempValue.x = item.x;
            tempValue.y = item.y;
            tempValue.w = item.w;
            tempValue.h = item.h;
            updateItems[item._id - 1] = tempValue;
        });
        layout.value = updateItems;
        // layout.value = items.map((item) => ({
        //     x: item.x,
        //     y: item.y,
        //     w: item.w,
        //     h: item.h,
        //     i: item.id
        // }));

        // Save updated layout to localStorage
        layout.value = updateItems;
        localStorage.setItem('gridLayout', JSON.stringify(layout.value));
    });
    // grid.on('gridstackchange', () => {
    //     // Save layout to localStorage whenever there's a change
    //     console.log(grid);
    // });
});
</script>

<template>
    <div>
        <div id="gridstack" ref="gridstack">
            <!-- Dynamically Render Grid Items -->
            <div v-for="item in layout" :key="item.i" class="grid-stack-item" :gs-x="item.x" :gs-y="item.y" :gs-w="item.w" :gs-h="item.h">
                <div class="grid-stack-item-content">Item {{ item.i }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-stack-item-content {
    background-color: #ffffff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    /* border: 1px solid #2980b9; */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.089);
    border-radius: 4px;
}
</style>
