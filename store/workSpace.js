import { defineStore, storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
import { useCompanyStore } from '~/store/company';
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
                },
            });
            if(data.value.app_message === 'success'){
                console.log('company_id', company_id)
                this.isSpaceCreated = true;
                await companies.getCompany()
                await single.getSingleCompany(this.comID)
            }
        },
    },
})