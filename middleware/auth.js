import { useAuthStore } from '~/store/auth'; // import the auth store we just created
export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
    // console.log('token', token.value)

    // console.log('to', to)
    // console.log('from', from)
  
    if (token.value) {
    
      authenticated.value = true; 
    }
  
    // if token exists and url is /login redirect to homepage
    if (token.value && (to.name === 'login' || to.name === 'register')) {
      return navigateTo('/');
  }

  if (!token.value && to.name === 'register') {
      return; // Allow access to the register page when there is no token
  }

  if (!token.value && to.name !== 'login') {
      abortNavigation();
      return navigateTo('/login');
  }
})