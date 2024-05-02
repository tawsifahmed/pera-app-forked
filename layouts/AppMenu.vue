<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSpaceList, getCompanyList } = useCompanyStore();
const { spaceSidebarlist, singleCompanyName } = storeToRefs(useCompanyStore());

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            {
                label: 'Space',
                icon: 'pi pi-fw pi-box',
                items: []
            }
        ]
    },
    {
        label: 'Space list',
        items: spaceSidebarlist.value
    }
]);

watchEffect(() => {
    getSpaceList();
    getCompanyList();
});

</script>

<template>
    <ul class="layout-menu">
        <h4 v-if="singleCompanyName" class="mt-2 text-center bg-primary rounded px-2 py-1 text-white">{{ singleCompanyName }}</h4>
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <!-- <template v-for="(item, i) in spaceSidebarlist" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template> -->
        <!-- <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li> -->
    </ul>
</template>

<style lang="scss" scoped>
.rounded {
    border-radius: 6px;
    text-transform: capitalize;
}
</style>
