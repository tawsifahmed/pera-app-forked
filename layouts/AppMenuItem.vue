<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useLayout } from './composables/layout';
import { useRoute } from 'vue-router';
import Dialog from 'primevue/dialog';

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

    setActiveMenuItem(foundItemKey);
};

const checkActiveRoute = (item) => {
    return route.path === item.to;
};

const menu = ref();
const items = ref([
    {
        label: 'Settings',
        items: [
            {
                label: 'Manage Space',
                icon: 'pi pi-th-large'
            },
            {
                label: 'Show all Space',
                icon: 'pi pi-eye'
            },
            {
                label: 'Show Archive',
                icon: 'pi pi-inbox'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text flex justify-content-between align-items-center">
            {{ item.label }}
            <div v-if="item.option == 'space_option'">
                <div class="flex">
                    <Button type="button" icon="pi pi-ellipsis-h" class="p-button-sm" @click="toggle" severity="secondary" aria-label="Bookmark" text />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                    <CreateSpace/>
                </div>
            </div>
        </div>
        <a class="p-2" v-if="(!item.to || item.items) && item.visible !== false" :href="item.url" @click="itemClick($event, item, index)" :class="item.class" :target="item.target" tabindex="0">
            <span :style="{ background: [item.color?item.color:'#3b82f6'] }" class="border-round w-2rem h-2rem flex align-items-center justify-content-center mr-2 font-bold capitalize text-white">{{item.label?.charAt(0)}}</span>
            <span class="layout-menuitem-text">{{ item.label }}  </span>
            <i v-if="item.items.length > 0" class="text-2xl pi pi-fw pi-angle-down layout-submenu-toggler"></i>
        </a>
        <router-link v-if="item.to && !item.items && item.visible !== false" @click="itemClick($event, item, index)" :class="[item.class, { 'active-route': checkActiveRoute(item) }]" tabindex="0" :to="item.to">
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
        </router-link>
        <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
            <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
                <app-menu-item v-for="(child, i) in item.items" :key="child" :index="i" :item="child" :parentItemKey="itemKey" :root="false"></app-menu-item>
            </ul>
        </Transition>
    </li>
</template>

<style lang="scss" scoped></style>
