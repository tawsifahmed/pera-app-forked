<script setup>
const { tasks, statuslist, handleStatus } = defineProps(['tasks', 'statuslist', 'handleStatus']);
const emit = defineEmits(['modalHandler']);
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
    return (data.value = updatedData);
};
// test
const handleModal = (event) => {
    emit('modalHandler', event);
};

watch(tasks, (oldV, NewV) =>{
    console.log
})

watchEffect(statuses, dataFormatter());
watchEffect(tasks, dataFormatter());
</script>

<template>
    <!-- <pre>{{ data }}</pre> -->
    <div class="main-container">
        <div class="content">
            <TaskBoard :data="data" :statuses="statuses" :handleStatus="handleStatus" @handleModal="handleModal" />
        </div>
    </div>
</template>
<style></style>
