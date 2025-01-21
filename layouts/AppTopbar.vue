<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/user';
import { useClockStore } from '~/store/clock';
import { messaging } from '~/composables/firebase';
import { onMessage } from 'firebase/messaging';

import Password from 'primevue/password';
// import clickOutside from '../composables/clickOutside';
const { getStoreTimer, handleCloseDeadlineJustify } = useClockStore();
const { timerData, isTImerStopped, deadlineMissModal, deadlineTaskId, deadlineProjectId, deadlineDueDate } = storeToRefs(useClockStore());
const { getUserData } = useUserStore();
const { userProfile } = storeToRefs(useUserStore());
const toast = useToast();
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from './composables/layout';
import { useRouter } from 'vue-router';
import Notification from '../components/Notification.vue';
const { layoutConfig, onMenuToggle } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

import { useAuthStore } from '~/store/auth';
import Search from '../components/Search.vue';
import { usePrimeVue } from 'primevue/config';
const url = useRuntimeConfig();

const name = ref('name');
const userImage = ref(null);
const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());
const visibleProfile = ref(false);
const showTimer = ref(false);
const showNotify = ref(false);
const logout = () => {
    logUserOut();
    location.reload();
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

const handleOutsideClick = () => {
    if (showNotify.value) {
        // fetchNotifyData();
        showNotify.value = false;
        notifiData.value = false;
    }
};

const closeNotification = (evn) => {
    showNotify.value = evn;
    // fetchNotifyData();
    // notifiData.value = false;
};

// Register directive
const vClickOutside = {
    beforeMount(el, binding) {
        el.clickOutsideEvent = (event) => {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document?.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document?.body?.removeEventListener('click', el.clickOutsideEvent);
    }
};

// Add directive to DOM element

onUnmounted(() => {
    const element = document.querySelector('.relative');
    vClickOutside?.unmounted(element);
});

getUserData();

const openProfile = () => {
    visibleProfile.value = !visibleProfile.value;
};

const $primevue = usePrimeVue();

const onChangeTheme = (theme, mode) => {
    $primevue.changeTheme(layoutConfig.theme.value, theme, 'theme-css', () => {
        layoutConfig.theme.value = theme;
        layoutConfig.darkTheme.value = mode;
    });
};

const onDarkModeChange = (value) => {
    const newThemeName = value ? layoutConfig.theme.value.replace('light', 'dark') : layoutConfig.theme.value.replace('dark', 'light');
    console.log('New Theme: ==>', newThemeName);
    if (value) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
    layoutConfig.darkTheme.value = value;
    onChangeTheme(newThemeName, value);
};

onMounted(async() => {
    const element = document.querySelector('.relative');
    vClickOutside?.beforeMount(element, { value: handleOutsideClick });
    const storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark') {
       await onDarkModeChange(true);
    } else {
       await  onDarkModeChange(false);
    }
});

const notifiData = ref(false);
const fetchNotifyData = async () => {
    const token = useCookie('token');
    try {
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/notification/list?limit=5&page=1`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (data.value) {
            if (data.value.data.find((item) => item.is_read === 0)) {
                notifiData.value = true;
            } else {
                notifiData.value = false;
            }
            // totalPage.value = Math.ceil(data.value.total / 5);
        }
    } catch (e) {
        console.log(e);
    }
};

fetchNotifyData();

const handleNotificationComp = () => {
    showNotify.value = !showNotify.value;
    if (notifiData.value) {
        notifiData.value = false;
    }
};

const setter = ref(false);

const timerCompanyID = ref();
const timerSpaceId = ref();
const timerProjectId = ref();
const timerTaskId = ref();

const storeTaskCompanyID = localStorage.getItem('storeTaskCompanyID');
const storeTaskSpaceID = localStorage.getItem('storeTaskSpaceID');
const storeTaskProjectID = localStorage.getItem('storeTaskProjectID');
const storedTaskID = localStorage.getItem('storeTaskID');

const fetchedTimerData = ref();

const timerStartTime = ref();

const fetchActiveTimer = async () => {
    const token = useCookie('token');
    try {
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/tasks/timer-history`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (data.value) {
            // return;
            fetchedTimerData.value = data.value?.data?.is_timer_start;
            if (data.value?.data?.is_timer_start === 'true') {
                timerCompanyID.value = data.value?.data.company_id;
                timerSpaceId.value = data.value?.data?.space_id;
                timerProjectId.value = data.value?.data?.project_id;
                timerTaskId.value = data.value?.data?.task_id;
                timerStartTime.value = data.value?.data?.start_time;
            }
        }
    } catch (e) {
        console.log(e);
    }
};

fetchActiveTimer();

const piniaTID = ref();
if (timerData.value) {
    piniaTID.value = timerData.value?.task_id;
}

if (storeTaskCompanyID) {
    timerCompanyID.value = storeTaskCompanyID;
}

watch(timerData, (oldValue, newValue) => {
    if (newValue) {
        timerTaskId.value = newValue.task_id;
    }
});

let timerInterval = null;

function startTimer(timerSTime) {
    const timerElement = document.getElementById('timer-interval');
    if (timerSTime === 'stop') {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        return;
    } else {
        const startTime = new Date(timerSTime);

        function updateTimer() {
            const currentTime = new Date();
            const elapsedTime = currentTime - startTime;
            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            return formattedTime;
        }

        // Hide the timer element for the first 2 seconds
        if (timerElement) {
            timerElement.style.visibility = 'hidden';
        }

        // Show timer element after 2 seconds
        setTimeout(() => {
            if (timerElement) {
                timerElement.style.visibility = 'visible';
            }
        }, 500);

        if (timerInterval) {
            clearInterval(timerInterval);
        }
        timerInterval = setInterval(() => {
            if (timerElement) {
                timerElement.textContent = updateTimer();
            }
        }, 1000);
        return updateTimer();
    }
}

getStoreTimer();
watchEffect(async () => {
    if (isTImerStopped.value === true) {
        timerTaskId.value = null;
        startTimer('stop');
    }
    if (timerData.value || timerTaskId.value) {
        showTimer.value = true;
    } else {
        showTimer.value = false;
    }
});

const visibleTop = ref(false);

const closeSearch = (evn) => {
    visibleTop.value = false;
};

const closeMissDeadlineModal = () => {
    deadlineMissModal.value = false;
    handleCloseDeadlineJustify();
};

const handleCloseDeadline = () => {
    deadlineMissModal.value = false;
    handleCloseDeadlineJustify();
};

// Notification
onMessage(messaging, (message) => {
    console.log(message);
    toast.add({ severity: 'contrast', summary: message.notification.title, detail: message.notification.body, life: 3000 });
});
</script>

<template>
    <div class="layout-topbar">
        <Toast position="bottom-right" group="br" />
        <router-link to="/" class="layout-topbar-logo absolute">
            <img src="/demo/images/login/avatar.svg" alt="logo" />
        </router-link>
        <!-- <pre>dd {{deadlineMissModal}}</pre> -->

        <button class="p-link layout-menu-button layout-topbar-button" style="margin-left: 0 !important" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>
        <div class="p-link layout-topbar-menu-button layout-topbar-button">
            <button class="nav-btn" @click="handleNotificationComp">
                <div v-if="showNotify" class="notification">
                    <Notification @closeNotification="closeNotification($event)" />
                </div>
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

            <!-- darkmode -->
            <Button @click="() => onDarkModeChange(false)" class="p-link layout-topbar-button" v-if="layoutConfig.darkTheme.value" text rounded aria-label="Filter">
                <i class="pi pi-moon"></i>
            </Button>
            <Button @click="() => onDarkModeChange(true)" class="p-link layout-topbar-button" v-else text rounded aria-label="Filter">
                <i class="pi pi-sun"></i>
            </Button>

            <!-- <pre>{{ isTImerStopped }}</pre> -->
            <!-- <pre>timerPinia{{timerData}}</pre> -->
            <!-- <pre>{{ showNotify}}</pre> -->

            <!-- <pre>valueID{{timerTaskId}}</pre> -->
            <button class="p-link layout-topbar-button ml-0" @click="visibleTop = true" style="padding-top: 0.1rem">
                <i class="pi pi-search"></i>
                <span>Search</span>
            </button>

            <div class="relative">
                <div v-if="notifiData" class="ping-container">
                    <span class="ping-outer"></span>
                    <span class="ping-inner"></span>
                </div>
                <button @click="handleNotificationComp" class="p-link layout-topbar-button notify-btn ml-0">
                    <i class="pi pi-bell"></i>
                    <span class="ml-4">Notification</span>
                </button>

                <div v-if="showNotify" class="notification">
                    <Notification @closeNotification="closeNotification($event)" />
                </div>
            </div>

            <button @click="openProfile" class="p-link layout-topbar-button">
                <div v-tooltip.bottom="{ value: 'Profile' }" v-if="userProfile?.data?.image" class="flex align-items-center gap-2">
                    <!-- <p class="text-black m-0" style="text-wrap: nowrap">{{ name.split(' ')[0] }}</p> -->
                    <div class="userImage">
                        <img :src="`${userProfile?.data?.image}`" class="" style="height: 100%; width: 100%; object-fit: cover" />
                    </div>
                </div>
                <img v-tooltip.bottom="{ value: 'Profile' }" v-else src="../assets/dummy_profile.png" alt="" style="height: 50px; width: 50px; border-radius: 50%; object-fit: cover" />
                <span class="ml-4">Profile</span>
            </button>

            <NuxtLink
                v-if="showTimer"
                v-tooltip.left="{ value: 'Active Task' }"
                :to="{ path: `/companies/${timerCompanyID}/spaces/${timerData ? timerData?.space_id : timerSpaceId}/projects/${timerData ? timerData?.project_id : timerProjectId}`, query: { task_key: timerData ? timerData?.task_id : timerTaskId } }"
                class="flex absolute gap-2 align-items-center ntask-timer-wrapper mr-2"
            >
                <div class="nclock-wrapper relative ml-2">
                    <div :class="`nclock-btn bg-pink-300`" @click="handleClickClock">
                        <i :class="`pi pi-stop text-white`" style="font-size: 11px; font-weight: 700"></i>
                    </div>
                    <div class="text-sm absolute text-black time-int" id="timer-interval">
                        {{ timerData?.timerStartTime ? startTimer(timerData?.timerStartTime) : timerStartTime ? startTimer(timerStartTime) : ' ' }}
                    </div>
                </div>
            </NuxtLink>

            <!-- <pre>{{fetchedTimerData}}</pre> -->
            <button @click="logout" class="p-link layout-topbar-button">
                <i class="pi pi-sign-out"></i>
                <span>Sign Out</span>
            </button>
            <!-- <pre>{{piniaTID}}</pre> -->
        </div>

        <Dialog v-model:visible="visibleProfile" modal header="Profile" dismissableMask="true" :style="{ width: '65rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <Profile :userProfile="userProfile" />
        </Dialog>
        <Dialog v-model:visible="deadlineMissModal" modal header="Deadline Miss Justification" @update:visible="handleCloseDeadline" :style="{ width: '45rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <TaskDeadlineMiss @closeMissDeadlineModal="closeMissDeadlineModal($event)" :deadlineTaskId="deadlineTaskId" :deadlineProjectId="deadlineProjectId" :deadlineDueDate="deadlineDueDate" />
        </Dialog>
        <Dialog v-model:visible="visibleTop" modal header="Search" dismissableMask="true" position="top" class="search-container">
            <Search @closeSearch="closeSearch($event)" />
        </Dialog>
    </div>
</template>

<style lang="scss">
.notify-btn {
    @media (max-width: 991px) {
        display: none !important;
    }
}
.p-dialog-content {
    height: 100%;
}
.userImage {
    height: 42px;
    width: 42px;
    border-radius: 50px;
    overflow: hidden;
}

.userImage:hover {
    /* Add your hover effect styles here */
    animation: forwardAnimation 0.3s ease-in forwards;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
}

.userImage:not(:hover) {
    /* Add your default state styles here */
    animation: backwardAnimation 0.3s ease-in reverse forwards;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
}

@keyframes forwardAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1.1);
    }
}

@keyframes backwardAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1.1);
    }
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

.ping-container {
    position: absolute;
    display: inline-flex;
    height: 12px;
    width: 12px;
    left: 21px;
    top: 5px;
    z-index: 1000;
}

.ping-outer {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    background-color: #6366f1;
    opacity: 0.75;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.ping-inner {
    position: relative;
    display: inline-flex;
    height: 12px;
    width: 12px;
    border-radius: 9999px;
    background-color: #0ea5e9;
}

@keyframes ping {
    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

.ntask-timer-wrapper {
    height: 40px;
    width: 120px;
    right: 265px;
    top: 15px;
    border: 2px solid #9596e4;
    /* Project theme color */
    padding: 0 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        box-shadow: 0 -1px 0 rgba(99, 102, 241, 0.04), 0 2px 4px rgba(99, 102, 241, 0.25);
    }

    &:active {
        background-color: #eeeeee;
        box-shadow: 0 -1px 0 rgba(99, 102, 241, 0.04), 0 2px 4px rgba(99, 102, 241, 0.25);
    }

    &:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(99, 102, 241, 0.04), 0 2px 4px rgba(99, 102, 241, 0.25), 0 0 0 3px rgba(99, 102, 241, 0.5);
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(99, 102, 241, 0.04), 0 1px 1px rgba(99, 102, 241, 0.25);
        cursor: not-allowed;
    }
}

.nclock-wrapper {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nclock-btn {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    position: absolute;
    right: 7px;
}

.stop {
    color: white;
    background-color: white;
    font-size: 7px;
}

.time-int {
    color: crimson;
    animation: blink-animation 1s steps(5, start) infinite;
    font-weight: 400;
}

@keyframes blink-animation {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.search-container {
    top: 70px;
    width: 70%;
    height: 100%;
    border-radius: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.search-container .p-sidebar-header {
    padding-bottom: 0 !important;
}
.p-sidebar-top {
    backdrop-filter: blur(1px);
}
</style>
