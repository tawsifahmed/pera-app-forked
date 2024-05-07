<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore()
companies.getCompany()
const { menu,company } = storeToRefs(useActiveCompanyStore());

const model = ref([
    {
        label: 'Home',
        option:'home_option',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        ]
    },
    {
        label: 'Spaces',
        option:'space_option',
        items: menu
    }
])

watchEffect(async() => {

})

</script>

<template>
    <div>
        <div class="mt-3" v-if="company">
            <div class="flex align-items-center">
                <span class="bg-orange-100 border-round w-2rem h-2rem flex align-items-center justify-content-center mr-2 font-bold capitalize text-green">{{company?.charAt(0)}}</span>
                <h5 class="m-0 font-bold font-size-16">{{company}}</h5>
            </div>
        </div>
        <hr>
        <ul class="layout-menu">
            <template v-for="(item, i) in model" :key="item.id">
                <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
                <li v-if="item.separator" class="menu-separator"></li>
            </template>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
.rounded {
    border-radius: 6px;
    text-transform: capitalize;
}
</style>
