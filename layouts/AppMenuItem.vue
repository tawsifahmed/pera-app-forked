<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useLayout } from './composables/layout';
import { useRoute } from 'vue-router';
import accessPermission from '~/composables/usePermission';

import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
const { company_id } = storeToRefs(useActiveCompanyStore());

import Dialog from 'primevue/dialog';

const createSpaceP = ref(accessPermission('create_space'));
const createProjectP = ref(accessPermission('create_project'));

const route = useRoute();
const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout();
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});
const isActiveMenu = ref(false);
const itemKey = ref(null);

const items = ref([
    {
        label: 'Space Settings',
        items: [
            {
                label: 'Manage Space',
                icon: 'pi pi-table'
            }
            // {
            //     label: 'Show all Space',
            //     icon: 'pi pi-eye'
            // },
            // {
            //     label: 'Show Archive',
            //     icon: 'pi pi-inbox'
            // }
        ]
    }
]);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);
    const activeItem = layoutState.activeMenuItem;

    isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
});
watch(
    () => layoutConfig.activeMenuItem.value,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);

const itemClick = (event, item) => {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    const { overlayMenuActive, staticMenuMobileActive } = layoutState;

    if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
        onMenuToggle();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;
    console.log(foundItemKey);
    setActiveMenuItem(foundItemKey);
};

const itemClickSubMenu = (event, item, index) => {
    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;
    console.log(foundItemKey);
    setActiveMenuItem(foundItemKey);
    isActiveMenu.value = true;
};

const clickSpaceMenu = (event) => {
    if (event[0].items[0].label == 'Manage Space') {
        return navigateTo(`/companies/${company_id.value}`);
    }
};

const checkActiveRoute = (item) => {
    return route.path === item.to;
};

const menu = ref();

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <!-- <pre>activeMenu=>{{isActiveMenu}}</pre> -->
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text flex justify-content-between align-items-center">
            {{ item.label }}

            <div v-if="item.option == 'space_option'">
                <div class="flex align-items-center">
                    <Button v-tooltip.top="{ value: 'Manage Space' }" type="button" icon="pi pi-ellipsis-h " class="p-button-sm w-2rem h-2rem" @click="toggle" severity="secondary" aria-label="Bookmark" text />
                    <Menu ref="menu" id="overlay_menu" @click="clickSpaceMenu(items)" :model="items" :popup="true" />
                    <SpaceCreateSpace v-if="createSpaceP" v-tooltip.top="{ value: 'Create Space' }" />
                    <!-- <div v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer text-sm instruction-tip"></div> -->
                </div>
            </div>
        </div>
        <a class="p-1 pl-2" v-if="(!item.to || item.items) && item.visible !== false" :class="item.class" :target="item.target" tabindex="0">
            <div class="flex align-items-center">
                <Avatar :label="item.label?.charAt(0)" class="mr-2 capitalize" size="small" :style="{ 'background-color': [item.color ? item.color : '#3b82f6'], color: ['#ededed'] }" />
                <NuxtLink :class="[item.class, { 'active-route': checkActiveRoute(item) }]" :to="item.to" class="layout-menuitem-text space-items" v-tooltip.right="{ value: `${item.label.length > 20 ? item.label : ''}` }">
                    {{ item.label.length > 20 ? item.label.slice(0, 20) + '...' : item.label }}
                </NuxtLink>
            </div>
            <div class="flex align-items-center ml-auto">
                <i @click="itemClickSubMenu($event, item, index)" v-if="item.items.length > 0" class="text-sm pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                <CreateSpecificProject v-if="createProjectP" v-tooltip="{ value: 'Create Project' }" :singleSpace="item" :spaces="item.id" />
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </div>
        </a>
        <router-link
            class="flex align-items-center justify-content-between" style="margin-left: 1px !important; padding-left: 7px !important;"
            v-if="item.to && !item.items && item.visible !== false"
            @click="itemClick($event, item, index)"
            :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
            tabindex="0"
            :to="item.to"
        >
            <div class="flex flex-row align-items-center">
                <i :class="item.icon" class="layout-menuitem-icon" style="margin-top: 1px !important;"></i>
                <span v-tooltip.right="{ value: `${item.label.length > 22 ? item.label : ''}` }" class="layout-menuitem-text">{{ item.label.length > 22 ? item.label.slice(0, 22) + '...' : item.label }}</span>
            </div>
            <!-- <span
                v-if="item.label == 'Employees'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->
            <!-- <span v-if="item.label == 'Teams'" style="left: 7px; position: relative" v-tooltip.right="{ value: 'Demo Text Text For Teams.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            <!-- <span
                v-if="item.label == 'Roles'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->
            <!-- <span
                v-if="item.label == 'Tags'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->
            <!-- <span
                v-if="item.label == 'Task Reports'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->
            <!-- <span
                v-if="item.label == 'User Reports'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->
            <!-- <span
                v-if="item.label == 'KPI Reports'"
                style="left: 7px; position: relative"
                v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }"
                class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"
            ></span> -->

            <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
        </router-link>
        <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
            <ul v-show="root ? true : isActiveMenu" class="layout-submenu p-1">
                <app-menu-item v-for="(child, i) in item.items" :key="child" :index="i" :item="child" :parentItemKey="itemKey" :root="false"></app-menu-item>
                <!-- <CreateSpace /> -->
            </ul>
        </Transition>
    </li>
</template>

<style lang="scss" scoped>
.p-avatar {
    width: 1.5rem;
    height: 1.5rem;
}
.layout-menu ul a {
    padding: 0.65rem 0.75rem;
    border-radius: 6px;
}

.space-items {
    text-wrap: nowrap;
}
</style>
