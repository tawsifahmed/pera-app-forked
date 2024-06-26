<script setup>
const { tasks, statuslist } = defineProps(['tasks', 'statuslist']);
const data = ref(tasks);
const statuses = ref(statuslist);
const arr = ref([]);
const dataFormatter = () => {
    const updatedData = statuses.value.map((val) => {
        const content = tasks.filter((item) => item.data.status.name === val.name);
        // arr.value.push(content);
        return { name: val.name, content: content };
    });
    console.log('arr =>', arr.value);
    // console.log(data.value);
    console.log(updatedData);
    // data.value.map((value) => {
    //     console.log(value.data.status.name);
    //     updatedData
    // });
};
watchEffect(statuses, dataFormatter());
</script>
<template>
    <!-- <pre>{{ data }}</pre> -->
    <div :class="currentStyles" class="main-container">
        <div class="content">
            <TaskBoard :data="data" :statuses="statuses" />
        </div>
    </div>
</template>
<style></style>
