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
        option:'home_option',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        ]
    },
    {
        label: 'Spaces',
        option:'space_option',
        items: spaceSidebarlist.value
    }
]);

watchEffect(() => {
    getSpaceList();
    getCompanyList();
});

</script>

<template>
    <div>
    <div class="mt-3" v-if="singleCompanyName">
        <div class="flex align-items-center">
            <Button class="mr-2"  severity="secondary" >S</Button>
            <h5 class="m-0 font-bold font-size-16">{{singleCompanyName}}</h5>
        </div>
    </div>
    <ul class="layout-menu">
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
    </div>
</template>

<style lang="scss" scoped>
.rounded {
    border-radius: 6px;
    text-transform: capitalize;
}
</style>
