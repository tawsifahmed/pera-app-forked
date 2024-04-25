<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="m-4">
                    <!-- <pre>{{companyList}}</pre> -->
                    <div class="flex header-con mx-auto justify-center items-center w-full">
                        <h1
                            class="text-center header-text text-3xl font-semibold mb-6 mt-1 bg-indigo-100 px-3 py-2 rounded">
                            {{ companyList ? 'Available Companies: ' + companyList?.length : ' Available Companies: 0'
                            }}
                        </h1>
                    </div>
                    <div class=" gap-4 mb-8">
                        <div class="card">
                            <!-- <pre>{{companyList}}</pre> -->
                            <DataTable :value="companyList" tableStyle="min-width: 50rem">
                                <Column field="id" header="ID"></Column>
                                <Column field="name" header="Name"></Column>
                                <Column field="number_of_employees" header="Number of Employees"></Column>
                                <Column field="company_type" header="Type"></Column>
                                <Column header="Action">
                                    <template #body="slotProps">
                                        <NuxtLink :to="`/companies/${slotProps.data.id}`">
                                            <Button class="cursor-pointer text-white px-5 py-2" label="Enter" />
                                        </NuxtLink>
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                        <!-- <div v-for="company in companyList" :key="company" class="border bg-zinc-100">
                                <div >
                                <div class="text-center text-indigo-500 tracking-wide  rounded-md p-2 capitalize">
                                    {{ company?.name }} 
                                </div>
                                </div>
                                <div>
                                
                                <NuxtLink :to="`/company/${company?.id}`" class="">
                                    <p class=" bg-indigo-500 hover:bg-purple-600 transition-all duration-200 mt-5 text-white py-2 text-lg font-medium cursor-pointer tracking-wide text-center rounded-lg px-2">Enter</p>
                                </NuxtLink>
                                </div>
                            </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default' // this should match the name of the file inside the middleware directory 
})


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// import { storeToRefs } from 'pinia'
// import { useWorkStation } from '@/store/workSpace'
// const workStation = useWorkStation()
// const { getCompanyList } = workStation
// const { companyList } = storeToRefs(workStation)
// dont delete the above commented out codes
// import Fieldset from 'primevue/fieldset';
// import Button from 'primevue/button';


import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getCompanyList } = useCompanyStore();
const { companyList } = storeToRefs(useCompanyStore());

watchEffect(() => {
    getCompanyList();
})

</script>

<style lang="scss">
.header-con {
    display: flex;
    justify-content: center;

    .header-text {
        border-radius: 10px;
    }

}

.p-fieldset-legend-text {
    border: 1px solid rgb(39, 39, 39) !important;
    border-radius: 7px !important;
    background: rgb(248, 248, 248);
    font-size: large;
}

.p-fieldset {
    border: 1px solid rgb(39, 39, 39) !important;
    padding-left: 10px !important;
}
</style>