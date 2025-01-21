import { defineStore } from 'pinia';
import { useFCMToken } from '~/composables/firebase';
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
    detectDuplicateEmail: false,
    resetState: null,
    resetToken: ''
  }),

  actions: {
    async authenticateUser({ email, password }) {
      const fcm_token = await useFCMToken();
      // return console.log(fcm_token);
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
          fcm_token
        },
      });


      if (error.value) {
        if (error.value?.data?.code === 403) {
          this.checkOTP = true;
          this.resendOtpMsg = error.value.data.message;
          this.resendOtp({ email })
        }
      }
      if (error.value) {
        if (error.value?.data?.code === 401) {
          this.authenticated = false;
        }
      }

      if (data.value) {
        if (data.value.code === 200) {
          console.log('login.value', data.value)
          this.userCompany = data?.value?.company?.id;
          if (this.userCompany) {
            localStorage.setItem('userCompany', JSON.stringify(this.userCompany))
          }
          const token = useCookie('token');
          token.value = data?.value?.access_token;
          const rolePermission = useCookie('rolePermission');
          rolePermission.value = data?.value?.permissions;
          this.authenticated = true;
        } else {
          this.authenticated = false;
          token.value = '';
        }
      }
    },
    async registerUser({ userName, email, password, confirmPass }) {
      const { data, pending, error } = await useFetch(`https://pbe.singularitybd.net/api/v1/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'name': userName,
          'email': email,
          'password': password,
          'password_confirmation': confirmPass
        },
      });

      if (error.value) {
        if (error.value?.data?.code === 422) {
          this.detectDuplicateEmail = true;
          this.checkOTP = false;
        }
      }

      if (data.value) {
        if (data.value.code === 201) {
          this.checkOTP = true;
          this.detectDuplicateEmail = false;
          // this.resendOtp({ email })
        }
        else {
          this.checkOTP = false;
          this.detectDuplicateEmail = false;
        }
      }
      else {
        this.checkOTP = false;
      }
    },
    async registerInviteUser({ id, userName, email, password, confirmPass }) {
      const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/invite-user-register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'id': id,
          'name': userName,
          'email': email,
          'password': password,
          'password_confirmation': confirmPass
        },
      });
      if (data.value?.message === 'User registered successfully') {
        this.checkOTP = true;
        // this.resendOtp({ email })
      }
      else {
        this.checkOTP = false;
      }
    },
    async otpVerify({ email, password, otp }) {
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'email': email,
          'otp': otp,
        },
      });

      if (error.value) {
        if (error.value.data.code === 403) {
          this.authenticated = false;
          this.resendOtpMsg = error.value.data.message;
        }
      }

      else if (data.value) {
        if (data.value.code = 200) {
          this.resendOtpMsg = data.value.message;

          this.userCreated = true;
          if (this.userCreated) {
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: {
                email,
                password,
              },
            });
            if (data.value) {
              if (data.value.code === 200) {
                this.userCompany = data?.value?.company?.id;
                if (this.userCompany) {
                  localStorage.setItem('userCompany', JSON.stringify(this.userCompany))
                }
                const token = useCookie('token');
                token.value = data?.value?.access_token;
                const rolePermission = useCookie('rolePermission');
                rolePermission.value = data?.value?.permissions;
                // const rolePermission
                this.authenticated = true; //  authenticated state value to true
              } else {
                const token = useCookie('token');
                this.authenticated = false;
                token.value = '';
              }
            }
          }
        }
      }
      else {
        this.resendOtpMsg = 'An error occured while verifying OTP, try again.';
        this.authOtp = false;
        this.authenticated = false;
      }
    },
    async resendOtp({ email }) {
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'email': email,
        },
      });

      console.log('data', data.value?.code)

      console.log('error', error.value?.data?.code)
      // return
      if (error.value) {
        if (error.value.data.code === 404) {
          this.resendOtpResponse = false;
          this.resendOtpMsg = 'Email does not exist, register first.';
          console.log('404')
        }
      }
      else if (error.value) {
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
    async forgotPassword(email) {
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email
        },
      });
      if (data.value) {
        return { code: 200, message: 'otp' }
      } else {
        return { code: error.value.status, message: error.value.data.message };
      }
    },
    async forgotPasswordOtp(email, otp) {
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/forgot-password-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          otp
        },
      });
      if (data.value) {
        this.resetToken = data.value.token;
        return { code: 200, message: 'new-password' }
      } else {
        return { code: error.value.status, message: error.value.data.message };
      }
    },
    async passwordReset(email, password) {
      const token = useCookie('token');
      const authToken = token.value ? token.value : this.resetToken;
      console.log('token', token.value)
      console.log('this.resetToken', this.resetToken)
      const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: {
          email,
          password: password.value.password,
          password_confirmation: password.value.confirm_password
        },
      });
      if (data.value) {
        this.resetToken = '';
        return { code: 200, message: 'Password Changed' }
      } else {
        return { code: error.value.status, message: error.value.data.message };
      }
    },
    logUserOut() {
      const token = useCookie('token');
      const rolePermission = useCookie('rolePermission');
      localStorage.removeItem('userCompany')
      localStorage.removeItem('taskDetailID');
      this.authenticated = false;
      token.value = null;
      rolePermission.value = null;
    },
  },
});
