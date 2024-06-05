<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import accessPermission from "~/composables/usePermission";
import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore();
// companies.getCompany()
const { menu, company } = storeToRefs(useActiveCompanyStore());

const readDashboard = ref(accessPermission('read_dashboard'))

const readEmployee = ref(accessPermission('read_user'))

const readRole = ref(accessPermission('read_role'))

const readTags = ref(accessPermission('read_tags'))

const readSpace = ref(accessPermission('read_space'))

const model = ref([
    {
        label: 'Spaces',
        option: 'space_option',
        items: '',
    },
    {
        label: 'Settings',
        option: 'settings_option',
        items: [
        ],

    },
    {
        label: 'Reports',
        option: 'reports_option',
        items: [
            { label: 'Task Wise Reports', icon: 'pi pi-fw pi-flag', to: '/task-reports' },
            { label: 'User Wise Reports', icon: 'pi pi-fw pi-flag', to: '/user-reports' }
        ]
    }
]);

if (readSpace.value) {
    model.value = model.value.filter(item => item.option !== 'space_option');
    model.value.unshift(
        {
        label: 'Spaces',
        option: 'space_option',
        items: menu,
    },
    );
}

if (readDashboard.value) {
    model.value.unshift(
        {
            label: 'Home',
            option: 'home_option',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
    );
}

if (readEmployee.value) {
    const settings = model.value.find(item => item.option === 'settings_option');
    if (settings) {
        settings.items.unshift({ label: 'Employee', icon: 'pi pi-fw pi-users', to: '/employees' });
    }
}

if (readRole.value) {
    const settings = model.value.find(item => item.option === 'settings_option');
    if (settings) {
        settings.items.push({ label: 'Roles', icon: 'pi pi-fw pi-user-edit', to: '/role' });
    }
}

if (readTags.value) {
    const settings = model.value.find(item => item.option === 'settings_option');
    if (settings) {
        settings.items.push({ label: 'Tags', icon: 'pi pi-fw pi-tags', to: '/tags' });
    }
}





onMounted(() => {

    console.log('readDashboard', accessPermission('read_dashboard'))
});

watchEffect(async () => { });
</script>

<template>
    <div>
        <div class="mt-3" v-if="company">
            <div class="flex align-items-center">
                <span
                    class="bg-orange-100 border-round w-2rem h-2rem flex align-items-center justify-content-center mr-2 font-bold capitalize text-green">{{
            company?.charAt(0) }}</span>
                <h6 class="m-0 font-bold font-size-16">{{ company }}</h6>
                <!-- <pre>{{readDashboard}}</pre> -->
            </div>
        </div>
        <hr />
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
