<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getCompanyList } = useCompanyStore();
const { companyList } = storeToRefs(useCompanyStore());

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
        items: []
    }
])

const setData = () =>{
    const items = []
    companyList.value[0]?.spaces.forEach(element => {
        const obj = {
            'label': element?.name,
            'icon': 'pi pi-list',
            'color': element?.color,
            'id': element?.id,
            'name': element?.name,
            'to': `/companies/${element?.company_id}/spaces/${element?.id}`,
            'items':[]
        }
        if (element.projects.length > 0){
            const project = []
            element.projects.forEach(ele => {
                const proObj = {
                    'label': ele?.name,
                    'id': element?.id,
                    'icon': 'pi pi-list',
                    'to': `/companies/${element?.company_id}/spaces/${element?.id}/projects/${ele.id}`,
                }
                obj.items.push(proObj)
            });
        }
        items.push(obj)
    });
    model.value[1].items = items.reverse();
}

watchEffect(async() => {
    await getCompanyList()
    setData()
})

</script>

<template>
    <div>
    <div class="mt-3" v-if="companyList">
        <div class="flex align-items-center">
            <span class="bg-orange-100 border-round w-2rem h-2rem flex align-items-center justify-content-center mr-2 font-bold capitalize text-green">{{companyList[0]?.name?.charAt(0)}}</span>
            <h5 class="m-0 font-bold font-size-16">{{companyList[0]?.name}}</h5>
        </div>
    </div>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
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
