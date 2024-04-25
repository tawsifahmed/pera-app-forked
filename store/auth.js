import { defineStore } from 'pinia';
// import { useAsyncData } from '@nuxtjs/composition-api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    userCreated: false,
    loading: false,
    userProfile: null,
    createCompany: null,
    iscompanyCreated: false,
    companyList: null
  }),
  
  actions: {
    async authenticateUser({ email, password }) {
      // useFetch from nuxt 3
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
        },
      });
      this.loading = pending;
      console.log('loading', pending)

      if (data.value) {
        console.log('data', data.value)
        const token = useCookie('token'); 
        token.value = data?.value?.access_token; 
        this.authenticated = true; //  authenticated state value to true
      }
    },
    async registerUser({ userName, email, password, confirmPass }) {
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'name' : userName,
          'email' : email,
          'password' : password,
          'password_confirmation' : confirmPass
        },
      });
      this.loading = pending;
      console.log('loading', pending.value)
      if (data.value) {
        console.log('data', data.value)
        this.userCreated = true;

        if(this.userCreated) {
          const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
              email,
              password,
            },
          });
          this.loading = pending;
          console.log('loading', pending)
    
          if (data.value) {
            console.log('data', data.value)
            const token = useCookie('token'); 
            token.value = data?.value?.access_token; 
            this.authenticated = true; //  authenticated state value to true
          }
        }
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false; 
      token.value = null;
    },
    async getUserProfile(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'userProf',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/users/profile',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
        // {
        //   watch: [this.userProfile]
        // }
      )
      this.userProfile = data.value;
      console.log('userProfile', this.userProfile)
    }
    
    
  },
});
