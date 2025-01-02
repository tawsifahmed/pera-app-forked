<template>
    <div class="w-full" >
        <div class="flex justify-content-center">
            <IconField iconPosition="left" style="width: 50%;">
                <InputIcon class="pi pi-search text-xl"> </InputIcon>
                <InputText class="w-full" v-model="searchText" placeholder="Search..." size="large"/>
            </IconField>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script setup>
const searchText = ref('');
</script>

<style lang="scss" scoped>

</style>