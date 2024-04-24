<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layouts/AppConfig.vue';
import Toast from 'primevue/toast';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { registerUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); 
const toast = useToast();
const router = useRouter();
const { layoutConfig } = useLayout();
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

definePageMeta({
    middleware: 'auth',
    layout: false
});

const createUser = ref({
    userName: null,
    email: null,
    password: null,
    confirmPass: null
})

const errorData = ref({
    userNameError: false,
    emailError: false,
    passwordError: false,
    confirmPassError: false
})


const regBtnHandle = ref(false)

const handleLoginSubmit = async () => {
    createUser.value.userName ? errorData.value.userNameError = false : errorData.value.userNameError = true
    createUser.value.email ? errorData.value.emailError = false : errorData.value.emailError = true
    createUser.value.password ? errorData.value.passwordError = false : errorData.value.passwordError = true
    createUser.value.confirmPass ? errorData.value.confirmPassError = false : errorData.value.confirmPassError = true
    if(createUser.value.password !== createUser.value.confirmPass){
        errorData.value.confirmPassError = true
    }

    if(errorData.value.userNameError || errorData.value.emailError || errorData.value.passwordError || errorData.value.confirmPassError){
        console.log('registration error')
    }else{
        regBtnHandle.value = true
        await registerUser(createUser.value); 
    
        console.log('password =>', createUser.value.password)
        console.log('confirmPass =>', createUser.value.confirmPass)
        
        if(authenticated.value === true){
            
            console.log('authenticated =>', authenticated)
            toast.add({ severity: 'success', summary: 'Successfully Registered', detail: '', life: 3000 });
            setTimeout(() => {
                router.push('/login')
            }, 300);
        }else{
            toast.add({ severity: 'error', summary: 'Registration Error', detail: '', life: 3000 });
        }
        regBtnHandle.value = false
    }
}

</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden pt-1">
        <div class="flex flex-column align-items-center justify-content-center">
            <!-- <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" /> -->
            <h2 class="font-bold">Pera App</h2>
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div>
                        <span class="text-600 font-medium">Sign Up</span>
                    </div>
                    <Toast />
                    <form @submit.prevent="handleLoginSubmit">
                        <label for="name1" class="block text-900 text-xl font-medium mb-2">Username</label>
                        <InputText id="name1" v-model="createUser.userName" type="text" placeholder="Set Name" class="w-full md:w-30rem mb-4" style="padding: 1rem" required />
                        <p class="error" v-if="errorData.userNameError">Enter a valid user name!</p>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" v-model="createUser.email" type="email" placeholder="Email address" class="w-full md:w-30rem mb-4" style="padding: 1rem" required />
                        <p class="error" v-if="errorData.emailError">Enter a valid email address!</p>
                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="createUser.password" placeholder="Password" :toggleMask="true" class="w-full mb-4" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                        <p class="error mt-3" v-if="errorData.passwordError">Enter a valid password!</p>
                        <label for="password2" class="block text-900 font-medium text-xl mb-2">Confirm Password</label>
                        <Password id="password2" v-model="createUser.confirmPass" placeholder="Confirm Password" :toggleMask="true" class="w-full mb-4" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                        <p class="error-text" v-if="errorData.confirmPassError">Enter a valid password!</p>
                        <!-- <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div> -->
                        <Button type="submit" label="Sign Up" class="w-full p-3 text-xl"></Button>
                    </form>
                    <div class="flex flex-wrap items-center justify-between mb-8 mt-3">
                        <NuxtLink to="/login" class="forgot_pass md:mb-0 mb-3">Already have an account? Click Here.</NuxtLink>
                        <!-- <nuxt-link to="/" class="forgot_pass">Forgot password?</nuxt-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <AppConfig simple />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}
.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.error-text{
    color: red;
    margin-top: -17px;
    margin-left: 5px;
}
</style>
