<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default' // this should match the name of the file inside the middleware directory
});
</script>
<template>
    <div>
        <NuxtPage />
    </div>
</template>

<style lang="scss" scoped></style>
