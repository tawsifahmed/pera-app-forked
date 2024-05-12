import { defineStore } from 'pinia'
import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore()
export const useWorkProjectStore = defineStore('workProjects', {
    state: () => ({
        isProjectCreated: null,
    }),
    getters: {
        save(state) {
            return state.isProjectCreated
        }
    },
    actions: {
        async createProjects ({name, description, space_id, statuses}) {
            const token = useCookie('token');
            const { data, pending } = await  useFetch(`http://188.166.212.40/pera/public/api/v1/projects/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: {
                    'name' : name,
                    'description' : description,
                    'space_id' : space_id,
                    'statuses' : statuses,
                },
            });

            if(data.value?.app_message === 'success'){
                this.isProjectCreated = true;
                await companies.getCompany()
            }
        },
    },
})