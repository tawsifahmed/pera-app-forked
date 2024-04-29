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
    companyList: null,
    userCompany: null
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
      if (data.value) {
        this.userCompany = data?.value?.company?.id;
        localStorage.setItem('userCompany', JSON.stringify(this.userCompany))
        const token = useCookie('token'); 
        token.value = data?.value?.access_token; 
        this.authenticated = true; //  authenticated state value to true
      }else{
        const token = useCookie('token');
        this.authenticated = false;
        token.value = '';
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
      if (data.value) {
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
          if (data.value) {
            const token = useCookie('token'); 
            token.value = data?.value?.access_token; 
            this.authenticated = true; //  authenticated state value to true
          }
        }
      }
    },
    logUserOut() {
      const token = useCookie('token');
      localStorage.removeItem('userCompany')
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
