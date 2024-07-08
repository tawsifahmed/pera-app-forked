<script setup>
const { tasks, statuslist, handleStatus } = defineProps(['tasks', 'statuslist', 'handleStatus']);
const data = ref(tasks);
const statuses = ref(statuslist);
const arr = ref([]);
const dataFormatter = () => {
    const updatedData = statuses.value.map((val) => {
        const content = tasks.filter((item) => item.data.status.name === val.name);
        // console.log('content: ', content);
        arr.value.push(content);
        return { name: val.name, statusColor: val.color_code, status: val, content: content };
    });
    // console.log(data.value);
    // data.value.map((value) => {
    //     console.log(value.data.status.name);
    //     updatedData
    // });
    return (data.value = updatedData);
};
watchEffect(statuses, dataFormatter());
watchEffect(tasks, dataFormatter());
</script>

<template>
    <!-- <pre>{{ data }}</pre> -->
    <div class="main-container">
        <div class="content">
            <TaskBoard :data="data" :statuses="statuses" :handleStatus="handleStatus" />
        </div>
    </div>
</template>
<style></style>
