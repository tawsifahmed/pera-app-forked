<script setup>
defineProps({
    createModal: Boolean
});
</script>
<template>
    <header class="header">
        <h3>Meeting Minutes</h3>
        <Button icon="pi pi-plus" severity="secondary" />
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    /* background-color: #f8f9fa; */
    border-bottom: 1px solid #dee2e6;
}
</style>
