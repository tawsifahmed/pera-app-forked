import { defineStore } from 'pinia'
// import { useAsyncData } from '@nuxtjs/composition-api';


export const useWorkStation = defineStore('workstation', () => {
    const workStations = ref(null)
    const loading = ref(false)
    const companyList = ref(null)
    const setWorkStation = async (payload) => {
        // workStations.value.push(payload)
        const token = useCookie('token'); 
        const { data, pending, refresh } = await useFetch(`https://pbe.singularitybd.net/api/v1/company/create`, {
            method: 'POST',
            headers: {
                
                Authorization: `Bearer ${token.value}`,
            },
            body: payload
        });
          loading.value = pending;
          console.log('loading', pending)
    
          if (data?.value) {
            
            console.log('dataCompany', data?.value)
          }
    }

    const getCompanyList = async () => {
        
        const token = useCookie('token'); 
        const { data, pending, error } = await useAsyncData(
          'companyList',
          () => $fetch('https://pbe.singularitybd.net/api/v1/company/list',{
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
          
          }),
        //    {
        //     // watch: [companyList]
        //   }
        )
        companyList.value = data.value.data;
        console.log('userProfile', this.companyList)
      }
  
    return { workStations, companyList, getCompanyList, setWorkStation}
})