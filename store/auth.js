import { defineStore } from 'pinia';
// import { useAsyncData } from '@nuxtjs/composition-api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    authOtp: false,
    checkOTP: false,
    resendOtpResponse: false,
    userCreated: false,
    loading: false,
    userProfile: null,
    userCompany: null,
    resendOtpMsg: null,
  }),
  
  actions: {
    async authenticateUser({ email, password }) {
      
      const { data, error, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
        },
      });
      console.log('loginData', data.value)
      console.log('loginErrData', error.value?.data)
      
      if(error.value){
        if(error.value.data.code === 403) {
          this.checkOTP = true;
          this.resendOtpMsg = error.value.data.message;
        }
      }
      if(error.value){
        if(error.value.data.code === 401) {
          this.authenticated = false;
        }
      }
      
      if (data.value) {
        if(data.value.code === 200){
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
       }
    },
    async registerUser({ userName, email, password, confirmPass }) {
      const { data, pending, error } = await useFetch(`http://188.166.212.40/pera/public/api/v1/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'name' : userName,
          'email' : email,
          'password' : password,
          'password_confirmation' : confirmPass
        },
      });
      console.log('data', data.value?.message)
      console.log('data', data.value)
      console.log('data', pending.value)
      console.log('data', error.value)
      if (data.value?.message === 'Registration success.') {
        this.checkOTP = true;
      }
      else{
        this.checkOTP = false;
      }
    },
    async otpVerify({ email, password, otp  }) {
      const { data, error, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { 
          'email' : email,
          'otp' : otp,
        },
      });

      console.log('data', data.value)
      console.log('err', error.value)
      console.log('data', pending.value)
      // return
      if (data.value.message = 'email verifaction success.') {
        this.authOtp = true;
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
            this.authOtp = true; 
             //  authenticated state value to true
          }
        }
      }
    },
    async resendOtp({ email }) {
      const { data, error, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { 
          'email' : email,
        },
      });

      console.log('data', data.value?.code)
      
      console.log('error', error.value?.data?.code)
      // return
      if(error.value.data.code === 404) {
        this.resendOtpResponse = false;
        this.resendOtpMsg = 'Email does not exist, register first.';
        console.log('404')
      }
      else if(error.value){
        if (error.value.data.code === 500) {
          this.resendOtpResponse = false;
          this.resendOtpMsg = 'En error occured while sending OTP, try again.';
        }
      }
      else {
        this.resendOtpResponse = true;
        this.resendOtpMsg = 'OTP sent successfully.';
      }
      console.log('resendOtpResponse', this.resendOtpResponse)
      
    },
    async registerInviteUser({ id,userName, email, password, confirmPass }) {
  
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/invite-user-register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'id' : id,
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
            this.userCompany = data?.value?.company?.id;
            const token = useCookie('token'); 
            token.value = data?.value?.access_token;
            localStorage.setItem('userCompany', JSON.stringify(this.userCompany))
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
