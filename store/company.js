import { defineStore } from 'pinia';
// import { useAsyncData } from '@nuxtjs/composition-api';

export const useCompanyStore = defineStore('workStation', {
  state: () => ({
    loading: false,
    createCompany: null,
    iscompanyCreated: false,
    companyList: null,
    singleCompany: null,

    // space api
    spaceList: null,
    isSpaceCreated: false,
    spaceList: null,
    singleSpace: null
  }),
  
  actions: {
    async getCompanyList(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/company/list',{
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
    async getSingleCompany(company){
        const token = useCookie('token'); 
        console.log('token', token.value)
        const { data, pending, error } = await useAsyncData(
            'companyList',
            () => $fetch(`http://188.166.212.40/pera/public/api/v1/company/show/${company}`,{
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            
            }),
            // {
            //   watch: [this.companyList]
            // }
        )
        this.singleCompany = data.value?.data;
        console.log('singlCompData', data)
        console.log('singlComp', this.singleCompany)
        // console.log('userProfile', this.companyList)
    },
    async createCompany ({name, email, address, contact_number, numEmployees, company_type, 
      // services
    }) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'email' : email,
          'address' : address,
          'contact_number' : contact_number,
          // 'size' : wPeople,
          'number_of_employees' : numEmployees,
          'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('company created', data)
       
        if(data.value.app_message === 'success'){
          this.iscompanyCreated = true;
          this.getCompanyList();
          // console.log('test')
        }

    },
    async getSpaceList(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'spaceList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/space/list',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
        // {
        //   watch: [this.companyList]
        // }
      )

      this.spaceList = data.value?.data;
      // console.log('userProfile', this.companyList) 
    },
    async getSingleSpace(space){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
          'companyList',
          () => $fetch(`http://188.166.212.40/pera/public/api/v1/space/show/${space}`,{
          headers: {
              Authorization: `Bearer ${token.value}`,
          },
          
          }),
          // {
          //   watch: [this.companyList]
          // }
        )
        this.singleSpace = data.value?.data;
        console.log('singlComp', this.singleSpace)
        // console.log('userProfile', this.companyList)
    },
    async createSpace ({name, description, company_id, color}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'description' : description,
          'company_id' : company_id,
          'color' : color,
          // 'shared_status' : shared_status,
          // 'task_statuses' : task_statuses,
          // 'features' : features,
          // 'views' : views
          },
        });
       
        if(data.value.app_message === 'success'){
          console.log('space created')
          this.isSpaceCreated = true;
          this.getCompanyList();
          this.getSpaceList();
          this.getSingleCompany(company_id);
        }
    },
  },
});
