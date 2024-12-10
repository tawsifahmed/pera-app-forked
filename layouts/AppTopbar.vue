<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/user';
import { useClockStore } from '~/store/clock';

import Password from 'primevue/password';

// import clickOutside from '../composables/clickOutside';
const { getStoreTimer } = useClockStore();
const { timerData, isTImerStopped } = storeToRefs(useClockStore());
const { getUserData } = useUserStore();
const { userProfile } = storeToRefs(useUserStore());

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from './composables/layout';
import { useRouter } from 'vue-router';
import Notification from '../components/Notification.vue';
const { layoutConfig, onMenuToggle } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

import { useAuthStore } from '~/store/auth';
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
onMounted(() => {
    const element = document.querySelector('.relative');
    vClickOutside?.beforeMount(element, { value: handleOutsideClick });
});

onUnmounted(() => {
    const element = document.querySelector('.relative');
    vClickOutside?.unmounted(element);
});

getUserData();
// watch(userProfile, (oldValue, newValue) => {
//     name.value = newValue.data.name;
//     userImage.value = newValue.data.image;
//     console.log('new Value:', newValue.data.image);
// });
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

    layoutConfig.darkTheme.value = value;
    onChangeTheme(newThemeName, value);
};

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
            console.log('notification data =>', data.value);
            if (data.value.data.find((item) => item.is_read === 0)) {
                notifiData.value = true
            } else {
                notifiData.value = false
            }
            console.log('notification data =>', notifiData.value);
            // totalPage.value = Math.ceil(data.value.total / 5);
        }
    } catch (e) {
        console.log(e);
    }
};

fetchNotifyData();



const handleNotificationComp = () => {
   
    showNotify.value = !showNotify.value;
    if(notifiData.value) {
        notifiData.value = false;
    }
};

const setter = ref(false)

// watch(showNotify, (newValue, oldValue) => {
//     // console.log('old', oldValue);
//     console.log('new', newValue);
//     // if(newValue === true){
//     //     showNotify.value = false;
//     // }
//     if(newValue === false){
//         showNotify.value = true;
//         setter.value = true
//     }

//     // if(setter.value){
//     //     showNotify.value = false;
//     //     setter.value = false
//     // }
// });

// watch(setter, (newValue, oldValue) => {
//     console.log('setter', newValue);
//     if(newValue === true){
//         showNotify.value = false;
//         setter.value = false
//     }
// });


const timerCompanyID = ref();
const timerSpaceId = ref();
const timerProjectId = ref();
const timerTaskId = ref();

const storeTaskCompanyID = localStorage.getItem('storeTaskCompanyID');
const storeTaskSpaceID = localStorage.getItem('storeTaskSpaceID');
const storeTaskProjectID = localStorage.getItem('storeTaskProjectID');
const storedTaskID = localStorage.getItem('storeTaskID');


console.log('timerTaskId', timerTaskId.value);
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
            console.log('active timer data =>', data.value);
            // return;
            fetchedTimerData.value = data.value.data.is_timer_start;
            if(data.value.data.is_timer_start === "true"){
                timerCompanyID.value = data.value.data.company_id;
                timerSpaceId.value = data.value.data.space_id;
                timerProjectId.value = data.value.data.project_id;
                timerTaskId.value = data.value.data.task_id;
                timerStartTime.value = data.value.data.start_time;
            }
            console.log('fetchedTimerData', data.value.data);
            console.log('timerTaskId', timerTaskId.value);
        }
    } catch (e) {
        console.log(e);
    }
}

fetchActiveTimer();

const piniaTID = ref();
if(timerData.value) {
    console.log('from Pinia');
    piniaTID.value = timerData.value?.task_id;
}
console.log('timerDatPPPa', timerData.value?.task_id);

// if (storedTaskID) {
//     console.log('from Store');
//     timerTaskId.value = storedTaskID;
// }

if(storeTaskCompanyID) {
    timerCompanyID.value = storeTaskCompanyID;
}

// if(storeTaskSpaceID) {
//     timerSpaceId.value = storeTaskSpaceID;
// }

// if(storeTaskProjectID) {
//     timerProjectId.value = storeTaskProjectID;
// }

watch(timerData, (oldValue, newValue) => {
    console.log('timerDataWW', newValue);
    if (newValue) {
        timerTaskId.value = newValue.task_id;
    }
});

let timerInterval = null;

function startTimer(timerSTime) {
    const timerElement = document.getElementById('timer-interval');
    if (timerSTime === 'stop') {
        console.log('timerSTime', timerSTime);
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
        startTimer('stop')
        console.log('timerTaskIdFOLO', timerTaskId.value);
    }
    if (timerData.value || timerTaskId.value) {
        showTimer.value = true;
        console.log('timerData');
    } else {
        showTimer.value = false;
    }
});
</script>

<template>
    <div class="layout-topbar">
        
        <Toast position="bottom-right" group="br" />
        <router-link to="/" class="layout-topbar-logo absolute" style="left: 73px;">
            <img src="/demo/images/login/avatar.svg" alt="logo" />
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" style="margin-left: 0 !important;" @click="onMenuToggle()">
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

            <!-- darkmode -->
            <!-- <section v-tooltip.left="{ value: layoutConfig.darkTheme.value ? 'Turn Off Dark Mode' : 'Dark Mode' }" class="flex align-items-center pr-2 justify-content-between surface-border">
           
                <InputSwitch :modelValue="layoutConfig.darkTheme.value" @update:modelValue="onDarkModeChange" />
            </section> -->
            <!-- <pre>{{ isTImerStopped }}</pre> -->
            <!-- <pre>timerPinia{{timerData}}</pre> -->
             <!-- <pre>{{ showNotify}}</pre> -->
            
            


            <button @click="openProfile" class="p-link layout-topbar-button">
                <div v-tooltip.bottom="{ value: 'Profile' }" v-if="userProfile?.data?.image"
                    class="flex align-items-center gap-2">
                    <!-- <p class="text-black m-0" style="text-wrap: nowrap">{{ name.split(' ')[0] }}</p> -->
                    <div class="userImage">
                        <img :src="`${userProfile?.data?.image}`" class=""
                            style="height: 100%; width: 100%; object-fit: cover" />
                    </div>
                </div>
                <img v-tooltip.bottom="{ value: 'Profile' }" v-else src='../assets/dummy_profile.png' alt=""
                    style="height: 50px; width: 50px; border-radius: 50%; object-fit: cover">
                <span class="ml-4">Profile</span>
            </button>
            <!-- <pre>valueID{{timerTaskId}}</pre> -->

            <div class="relative">
                <div v-if="notifiData" class="ping-container">
                    <span class="ping-outer"></span>
                    <span class="ping-inner"></span>
                </div>
                <button @click="handleNotificationComp" class="p-link layout-topbar-button notify-btn">

                    <i class="pi pi-bell"></i>
                    <span class="ml-4">Notification</span>
                </button>

                <div v-if="showNotify" class="notification">
                    <Notification @closeNotification="closeNotification($event)" />
                </div>
            </div>

            <NuxtLink
                v-if="showTimer"
                v-tooltip.left="{ value: 'Active Task' }"
                :to="{ path: `/companies/${timerCompanyID}/spaces/${timerData ? timerData?.space_id : timerSpaceId}/projects/${timerData ? timerData?.project_id : timerProjectId}`, query: { task_key: timerData ? timerData?.task_id : timerTaskId } }"
                class="flex absolute gap-2 align-items-center task-timer-wrapper mr-2"
            >
                <div class="clock-wrapper relative ml-2">
                    <div :class="`clock-btn bg-pink-300`" @click="handleClickClock">
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

        <Dialog v-model:visible="visibleProfile" modal header="Profile" :style="{ width: '65rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
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
    left: 36px;
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

.task-timer-wrapper {
    height: 40px;
    width: 120px;
    right: 197px;
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

.clock-wrapper {
    display: flex;
    align-items: center;
    gap: 7px;
    
}

.clock-btn {
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
</style>
