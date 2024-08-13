import { defineStore } from 'pinia';
// import { useAsyncData } from '@nuxtjs/composition-api';

export const useWorkStation = defineStore('workStation', {
  state: () => ({
    loading: false,
    createCompany: null,
    iscompanyCreated: false,
    companyList: null,
    singleCompany: null
  }),

  actions: {
    async getCompanyList() {
      const token = useCookie('token');
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch('https://pbe.singularitybd.net/api/v1/company/list', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },

        }),
        // {
        //   watch: [this.companyList]
        // }
      )
      this.companyList = data.value?.data;
      // console.log('userProfile', this.companyList) 
    },
    async getSingleCompany({ id }) {
      const token = useCookie('token');
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch(`https://pbe.singularitybd.net/api/v1/company/list/${id}`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },

        }),
        // {
        //   watch: [this.companyList]
        // }
      )
      this.singleCompany = data.value?.data;
      // console.log('userProfile', this.companyList)
    },
    async createCompany({ name, wPeople, numEmployees, company_role, services }) {
      const token = useCookie('token');
      const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/company/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name': name,
          'size': wPeople,
          'number_of_employees': numEmployees,
          'company_role': company_role,
          'services': services
        },
      });

      if (data.value?.app_message === 'success') {
        this.iscompanyCreated = true;
        this.getCompanyList();
        // console.log('test')
      }
    },
  },
});
