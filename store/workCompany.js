import { defineStore } from 'pinia';

export const useActiveCompanyStore = defineStore('ActiveCompany', {
  state: () => ({
    activeCompany: null,
    companyWithSpaces: null,
    spaces: null,
  }),
  getters: {
    menu(state) {
      if (state.spaces) {
        const items = []
        state.spaces?.forEach(element => {
          const obj = {
            'label': element?.name,
            'icon': 'pi pi-list',
            'color': element?.color,
            'id': element?.id,
            'name': element?.name,
            'to': `/companies/${element?.company_id}/spaces/${element?.id}`,
            'items': []
          }
          if (element.projects.length > 0) {
            element.projects.forEach(ele => {
              const proObj = {
                'label': ele?.name,
                'id': ele?.id,
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
      } else {
        return [];
      }
    },
    company(state) {
      if (state.companyWithSpaces) {
        return state.companyWithSpaces?.label;
      } else {
        return '';
      }
    },
    company_id(state) {
      if (state.companyWithSpaces) {
        return state.companyWithSpaces?.id;
      } else {
        return '';
      }
    },
    companyList(state) {
      if (state.activeCompany) {
        return state.activeCompany.map(company => ({
          id: company.id,
          label: company.name
        }));
      } else {
        return [];
      }
    },
    selectedCompany(state) {
      return state.companyWithSpaces
    }
  },
  actions: {
    async getCompany() {
      const token = useCookie('token');
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch('https://pbe.singularitybd.net/api/v1/company/list', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }),
      )
      console.log('process.env.API_URL=>',data.value)
      this.activeCompany = await data.value?.data;
      console.log('company=>',this.activeCompany[0].id)
      let userCompanyId = Number(localStorage.getItem('userCompany'));
          console.log('localId=>', userCompanyId)
      if (this.activeCompany.length > 0) {
          let companyWSpaces = this.activeCompany.find(company => company.id === userCompanyId);
          this.spaces = companyWSpaces.spaces;
          if (companyWSpaces) {
            const { id, name } = companyWSpaces;
            this.companyWithSpaces = { 'id': id, 'label': name };
            return { name, id };
          }
      }
      return null;
    },
  }
});
