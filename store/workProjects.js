import { defineStore } from 'pinia'
import { useActiveCompanyStore } from '~/store/workCompany';
import { useCompanyStore } from '~/store/company';
import apiLink from '../utils/apiEndpoint';
const companies = useActiveCompanyStore()
const spaces = useCompanyStore()
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
        async createProjects({ name, description, space_id, statuses, git_project_id, git_token }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${apiLink}/projects/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: {
                    'name': name,
                    'description': description,
                    'space_id': space_id,
                    'statuses': statuses,
                    'git_project_id': git_project_id,
                    'git_token': git_token
                },
            });

            if (data.value?.app_message === 'success') {
                this.isProjectCreated = true;
                await companies.getCompany()
                await spaces.getSingleSpace(space_id)
            }
        },
    },
})