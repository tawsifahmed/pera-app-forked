import { defineStore } from 'pinia';

export const useActiveCompanyStore = defineStore('ActiveCompany', {
  state: () => ({
    availableCompanies: null,
    compInLoclStrg: null,
    getSpaces: null,
  }),
  getters: {
    menu(state) {
      if (state.getSpaces) {
        const items = []
        state.getSpaces?.spaces.forEach(element => {
          const obj = {
            'label': element?.name,
            'icon': 'pi pi-list',
            'color': element?.color,
            'id': element?.id,
            'name': element?.name,
            'to': `/companies/${element?.company_id}/spaces/${element?.id}`,
            'items': []
          }
          if (element?.projects?.length > 0) {
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
      if (state.compInLoclStrg) {
        return state.compInLoclStrg?.label;
      } else {
        return '';
      }
    },
    company_id(state) {
      if (state.compInLoclStrg) {
        return state.compInLoclStrg?.id;
      } else {
        return '';
      }
    },
    companyList(state) {
      if (state.availableCompanies) {
        return state.availableCompanies.map(company => ({
          id: company.id,
          label: company.name
        }));
      } else {
        return [];
      }
    },
    selectedCompany(state) {
      return state.compInLoclStrg
    },
    totalProjects(state) {
      let allProjects = [];
      if (state.getSpaces) {
        state.getSpaces?.spaces.forEach(element => {
          if (element?.projects?.length > 0) {
            element.projects.forEach(ele => {
              allProjects.push({ name: ele.name, id: ele.id, statuses: ele.statuses });
            });
          }
        });
      } else return [];
      return allProjects;

    },

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
      console.log('process.env.API_URL=>', data.value)
      this.availableCompanies = data.value?.data;
      let storedCompanyId = Number(localStorage.getItem('userCompany'));
      if (this.availableCompanies) {
        const companyWSpaces = this.availableCompanies.find(company => company.id === storedCompanyId);
        this.getSpaces = companyWSpaces;
        if (companyWSpaces) {
          const { id, name } = companyWSpaces;
          this.compInLoclStrg = { 'id': id, 'label': name };
          return { name, id };
        }
      }
      return null;
    },
  }
});
