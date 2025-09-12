import { defineStore, storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
import { useCompanyStore } from '~/store/company';
import apiLink from '../utils/apiEndpoint';
const companies = useActiveCompanyStore()
const { company_id } = storeToRefs(useActiveCompanyStore());
const single = useCompanyStore()

export const useWorkSpaceStore = defineStore('workSpace', {
    state: () => ({
        isSpaceCreated: null,
        comID: company_id
    }),
    getters: {
        save(state) {
            return state.isSpaceCreated
        }
    },
    actions: {
        async createSpace({ name, description, company_id, color, users }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${apiLink}/space/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: {
                    'name': name,
                    'description': description,
                    'company_id': company_id,
                    'color': color,
                    'users': users,
                },
            });
            if (data.value?.app_message === 'success') {
                this.isSpaceCreated = true;
                await companies.getCompany()
                await single.getSingleCompany(this.comID)
            }
        },
    },
})