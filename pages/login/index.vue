<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <!-- <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" /> -->
            <!-- <h2 class="font-bold">Pera App</h2> -->
            <Toast />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div v-if="loginForm" class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="80" class="mb-3" />
                        <div data-v-d804f83c="" class="text-900 text-3xl font-medium mb-3">Sign in to continue</div>
                    </div>
                   
                    <form @submit.prevent="handleLoginSubmit">
                        <div class="field md:w-28rem mb-4">
                            <label for="email" class="block text-900 text-xl font-medium mb-2">Work Email</label>
                            <InputText id="email" v-model="user.email" type="text" placeholder="Enter your work email" class="w-full" style="padding:1rem" />
                            <small id="email-help" class="error-report"  v-if="errorData.emailError">
                                <InputIcon class="pi pi-exclamation-triangle"></InputIcon> Email required!
                            </small>
                        </div>
                        <div class="field md:w-28rem mb-5">
                            <label for="password" class="block text-900 font-medium text-xl mb-2">Password</label>
                            <Password id="password" v-model="user.password" placeholder="Enter password" :feedback="false" :toggleMask="true" class="w-full" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                            <small id="password-help" class="error-report" v-if="errorData.passwordError">
                                <InputIcon class="pi pi-exclamation-triangle"></InputIcon> Password required!
                            </small>
                        </div>
                        <!-- <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div> -->
                        <Button type="submit" label="Sign In" :loading="loginBtnHandle" class="w-full p-3 text-xl"/>
                    </form>
                    <div class="flex flex-wrap items-center justify-between mt-4">
                        Don't have an account?&nbsp;  <NuxtLink to="/register" class="forgot_pass md:mb-0"> Click Here.</NuxtLink>
                        <!-- <nuxt-link to="/" class="forgot_pass">Forgot password?</nuxt-link> -->
                    </div>
                </div>
                <div v-if="verifyOTPForm" class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="80" class="mb-3" />
                        <div data-v-d804f83c="" class="text-900 text-3xl font-medium mb-3">Verify Your Email</div>
                    </div>
                    <form @submit.prevent="handleVerifySubmit">
                        <div class="field md:w-28rem mb-4">
                            <label for="email" class="block text-900 text-xl font-medium mb-2">Work Email</label>
                            <InputText id="email" v-model="verifyUser.email" type="email" placeholder="example@gmail.com" class="w-full" style="padding: 1rem" />
                            <small id="email-help" class="error-report"  v-if="errorData.emailError">
                                <InputIcon class="pi pi-exclamation-triangle"></InputIcon> Email required!
                            </small>
                        </div>
                        <div class="field md:w-28rem mb-4">
                            <label for="name" class="block text-900 text-xl font-medium mb-2">OTP</label>
                            <InputText id="name" v-model="verifyUser.otp" type="text" placeholder="Enter OTP" class="w-full" style="padding: 1rem"  />
                            <small id="name-help" class="error-report"  v-if="errorData.otpError">
                                <InputIcon class="pi pi-exclamation-triangle"></InputIcon> OTP required!
                            </small>
                        </div>

                       
                        <Button type="submit" label="Verify" :loading="loginBtnHandle" class="w-full p-3 text-xl"></Button>
                    </form>
                    <div class="flex flex-wrap items-center justify-between mt-4">
                        <span v-if="timer > 0">Resend OTP in {{ timer }}s</span>
                        <span class="" v-else>Resend OTP? &nbsp;<button @click="handleResendOtp" class="forgot_pass md:mb-0 cursor-pointer text-blue-600" :disabled="clickBlink" :class="clickBlink ? 'blink_text' : ''" >Click Here</button></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <AppConfig simple />
</template>

<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layouts/AppConfig.vue';
const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

definePageMeta({
    middleware: 'auth',
    layout: false
});

const loginForm = ref(true)
const verifyOTPForm = ref(false)

// const loginForm = ref(false)
// const verifyOTPForm = ref(true)

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { authenticateUser, otpVerify, resendOtp } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, checkOTP, resendOtpResponse, resendOtpMsg, authOtp } = storeToRefs(useAuthStore()); 

import Checkbox from 'primevue/checkbox' 
import RadioButton from 'primevue/radiobutton';
import Toast from 'primevue/toast';
const toast = useToast();

// definePageMeta({
//     middleware: 'auth',
//     // this should match the name of the file inside the middleware directory 
// })
const router = useRouter();

const user = ref({
    email: null,
    password: null
})

const verifyUser = ref({
    email: null,
    password: null,
    otp: null
})


const errorData = ref({
    emailError: false,
    passwordError: false,
    otpError: false
})

const startTimer = () => {
    timer.value = 30
    showResendButton.value = false
    countdown = setInterval(() => {
        if (timer.value > 0) {
            timer.value -= 1
        } else {
            clearInterval(countdown)
            showResendButton.value = true
        }
    }, 1000)
}

const loginBtnHandle = ref(false);
const timer = ref()
const showResendButton = ref(false)
let countdown = null

const handleLoginSubmit = async () => {
    loginBtnHandle.value = true;
    user.value.email ? errorData.value.emailError = false : errorData.value.emailError = true
    user.value.password ? errorData.value.passwordError = false : errorData.value.passwordError = true
    if (errorData.value.emailError || errorData.value.passwordError) {
        loginBtnHandle.value = false;
    }else{
        loginBtnHandle.value = true
        await authenticateUser(user.value); // call authenticateUser and pass the user object
        if(checkOTP.value === true){
            loginForm.value = false
            verifyOTPForm.value = true
            verifyUser.value.email = user.value.email
            verifyUser.value.password = user.value.password
            startTimer()
            toast.add({ severity: 'success', summary: 'OTP Verification', detail: 'Please verify OTP', life: 3000 });
        }else
        if (authenticated.value == true) {
            errorData.value.passwordError = false
            errorData.value.emailError = false
            toast.add({ severity: 'success', summary: 'Login Success', detail: '', life: 3000 });
            setTimeout(() => {
                router.push('/')
            }, 300);
        }else{
            toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password', life: 3000 });
        }
        loginBtnHandle.value = false
    }
}

const handleVerifySubmit = async () => {
    loginBtnHandle.value = true;
    verifyUser.value.email ? errorData.value.emailError = false : errorData.value.emailError = true
    verifyUser.value.otp ? errorData.value.otpError = false : errorData.value.otpError = true
    if(errorData.value.emailError || errorData.value.otpError){
        loginBtnHandle.value = false;
    }else{
        
        await otpVerify(verifyUser.value);
        if(authenticated.value == true){
            console.log('authOtpPPP', authOtp.value)
            toast.add({ severity: 'success', summary: 'Successfully Verified', detail: resendOtpMsg, life: 3000 });
            location.reload()
            router.push('/login')
        }else{
            toast.add({ severity: 'error', summary: 'Verification Failed', detail: resendOtpMsg, life: 3000 });
        }
        loginBtnHandle.value = false
    }
}

const clickBlink = ref(false)

const handleResendOtp = async () => {
     clickBlink.value = true
     await resendOtp({ email: verifyUser.value.email });
     if(resendOtpResponse.value === true){
        clickBlink.value = false
        toast.add({ severity: 'info', summary: 'OTP Resent', detail: resendOtpMsg, life: 3000 });
        startTimer()
     }
     else{
        clickBlink.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: resendOtpMsg, life: 3000 });
     }
    // toast.add({ severity: 'info', summary: 'OTP Resent', detail: '', life: 3000 });
    
}

watch(() => verifyOTPForm.value, (newVal) => {
    if (newVal) {
        startTimer()
    } else {
        clearInterval(countdown)
    }
})

</script>


<style lang="scss" scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}
.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.forgot_pass{
    text-decoration: none !important;
    border: none !important;
    background: none !important;
}

.blink_text {
    user-select: none !important;
    cursor: not-allowed !important;
    animation: blinker 0.7s linear infinite;
  }
  
  @keyframes blinker {
    50% {
      opacity: 0.5;
    }
}


</style>
