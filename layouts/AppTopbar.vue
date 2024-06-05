<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/user';

const { getUserData } = useUserStore();
const { userProfile } = storeToRefs(useUserStore());

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from './composables/layout';
import { useRouter } from 'vue-router';
const { layoutConfig, onMenuToggle } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

import { useAuthStore } from '~/store/auth';
// import { useRoute } from 'vue-router';
const name = ref('name');
const userImage = ref(null);
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const visibleProfile = ref(false);
const showNotify = ref(false);
const logout = () => {
    logUserOut();
    router.push('/login');
    // location.reload();
};

onMounted(() => {
    bindOutsideClickListener();
});
onBeforeUnmount(() => {
    unbindOutsideClickListener();
});
// const logoUrl = computed(() => {
//     return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
// });

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};

const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/utilities/documentation');
};

const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };

        document.addEventListener('click', outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;
    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

// Profile

getUserData();
// watch(userProfile, (oldValue, newValue) => {
//     name.value = newValue.data.name;
//     userImage.value = newValue.data.image;
//     console.log('new Value:', newValue.data.image);
// });
const openProfile = () => {
    visibleProfile.value = !visibleProfile.value;
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img src="/demo/images/login/avatar.png" alt="logo" />
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>
        <div class="p-link layout-topbar-menu-button layout-topbar-button">
            <button class="nav-btn" @click="onTopBarMenuButton()">
                <i class="pi pi-bell"></i>
            </button>
            <button class="nav-btn" @click="onTopBarMenuButton()">
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <!-- <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button> -->
            <!-- <pre>{{ userProfile }}</pre> -->
            <button @click="openProfile" class="p-link layout-topbar-button">
                <div v-if="userProfile?.data?.image" class="flex align-items-center gap-2">
                    <!-- <p class="text-black m-0" style="text-wrap: nowrap">{{ name.split(' ')[0] }}</p> -->
                    <div class="userImage">
                        <img :src="`${userProfile?.data?.image}`" class="" style="height: 100%; width: 100%; object-fit: cover" />
                    </div>
                </div>
                <i v-else class="pi pi-user"></i>
                <span class="ml-4">Profile</span>
            </button>
            <div class="relative">
                <button
                    @click="
                        () => {
                            showNotify = !showNotify;
                        }
                    "
                    class="p-link layout-topbar-button notify-btn"
                >
                    <i class="pi pi-bell"></i>
                    <span class="ml-4">Notification</span>
                </button>
                <div v-if="showNotify" class="notification">
                    <Notification />
                </div>
            </div>
            <button @click="logout" class="p-link layout-topbar-button">
                <i class="pi pi-sign-out"></i>
                <span>Sign Out</span>
            </button>
        </div>
        <Dialog v-model:visible="visibleProfile" modal header="Profile" :style="{ width: '65rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <Profile :userProfile="userProfile" />
        </Dialog>
    </div>
</template>

<style lang="scss" scoped>
.notify-btn {
    @media (max-width: 991px) {
        display: none !important;
    }
}
.userImage {
    height: 42px;
    width: 42px;
    border-radius: 50px;
    overflow: hidden;
}

.nav-btn {
    background: none !important;
    border: none;
}
.notification {
    position: absolute;
    right: 0;
    top: 4rem;
}
</style>
