import { defineStore } from 'pinia';
export const useActiveCompanyStore = defineStore('ActiveCompany',{
  state: () => ({
    activeCompany: null,
  }),
  getters: {
    menu(state) {
      if(state.activeCompany){
        const items = []
        state.activeCompany[0]?.spaces.forEach(element => {
          const obj = {
            'label': element?.name,
            'icon': 'pi pi-list',
            'color': element?.color,
            'id': element?.id,
            'name': element?.name,
            'to': `/companies/${element?.company_id}/spaces/${element?.id}`,
            'items':[]
          }
          if (element.projects.length > 0){
            element.projects.forEach(ele => {
              const proObj = {
                'label': ele?.name,
                'id': element?.id,
                'icon': 'pi pi-list',
                'color': ele?.color,
                'to': `/companies/${element?.company_id}/spaces/${element?.id}/projects/${ele.id}`,
              }
              obj.items.push(proObj)
            });
          }
          items.push(obj)
        });
        return items;
      }else{
        return [];
      }
    },
    company(state){
      if(state.activeCompany){
        return state.activeCompany[0]?.name;
      }else{
        return '';
      }
    },
    company_id(state){
      if(state.activeCompany){
        return state.activeCompany[0]?.id;
      }else{
        return '';
      }
    },
  },
  actions: {
    async getCompany(){
      const token = useCookie('token');
      const { data, pending, error } = await useAsyncData(
          'companyList',
          () => $fetch('http://188.166.212.40/pera/public/api/v1/company/list',{
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
          }),
      )
      this.activeCompany = await data.value?.data;
    },
  },
});
