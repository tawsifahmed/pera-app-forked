<!-- components/GoogleSignIn.vue -->
<script setup>
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../composables/firebase';
const url = useRuntimeConfig();
const user = ref(null);
const toast = useToast();
const router = useRouter();

const signInWithGoogle = async () => {
    const authToken = await signInWithPopup(auth, provider)
        .then((result) => {
            const token = result._tokenResponse.oauthAccessToken;

            return token;
        })
        .catch((error) => {
            // Handle sign in error
            toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Something went wrong.', life: 3000 });
            console.error('Error signing in with Google:', error.message);
        });

    try {
        const { data } = await useFetch(`${url.public.apiUrl}/verify-google-token`, {
            method: 'GET',
            headers: {
                token: authToken
            }
        });
        console.log(data.value);
        const userCompany = data?.value?.company?.id;
        if (userCompany) {
            localStorage.setItem('userCompany', JSON.stringify(userCompany));
        }
        toast.add({ severity: 'success', summary: 'Login Successful', detail: '', life: 3000 });
        const token = useCookie('token');
        token.value = data.value.token;

        setTimeout(() => {
            router.push('/');
        }, 300);

        const rolePermission = useCookie('rolePermission');
        rolePermission.value = data?.value?.permissions;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Something went wrong.', life: 3000 });
        console.log(error);
    }
};
</script>
<template>
    <button class="login-with-google-btn" @click="signInWithGoogle">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
            <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        <span class="">Sign in with Google</span>
    </button>
</template>

<style scoped>
/* Customize styles as needed */
.login-with-google-btn {
    cursor: pointer;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s, box-shadow 0.3s;
    width: 100%;
    padding: 12px 16px;
    border-radius: 5px;
    /* box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25); */
    border: 1px solid #ededed;
    color: #757575;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    /* background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=); */
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    font-size: 1.25rem;
    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:active {
        background-color: #eeeeee;
    }

    &:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }
}
</style>
