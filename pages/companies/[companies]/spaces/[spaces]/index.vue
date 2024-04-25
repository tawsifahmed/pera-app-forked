
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleSpace } = useCompanyStore();
const { singleSpace } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const { spaces } = useRoute().params
console.log('companyParams,', spaces)
const visible = ref(false);

if(singleSpace.value === undefined){
throw createError({statusCode: 404, message: 'Company not found', fatal: true})
}

const openCreateSpace = () => {
  visible.value = true;
}

watchEffect(() => {
    getSingleSpace(spaces);
  console.log('spaces,', spaces)
})


</script>

<template>
    <!-- <pre>{{ singleCompany }}</pre> -->

    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="m-4">
                    <!-- <pre>{{companyList}}</pre> -->
                    <div class="flex header-con mx-auto justify-center items-center w-full">
                        <h1
                            class="text-center header-text text-3xl font-semibold mb-6 mt-1 bg-indigo-100 px-3 py-2 rounded">
                            Space Name: {{ singleSpace?.name }}
                        </h1>
                    </div>
                    <div class="create-btn-wrapper">
                        <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Project +" />
                        <Dialog v-model:visible="visible" modal header=" " :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                            <CreateSpecificProject :singleSpace="singleSpace" />
                        </Dialog>
                        <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
                    </div>
                   
                    
                    
                    <div class=" gap-4 mb-8">
                        <div class="card">
                            <!-- <pre>{{singleSpace?.projects}}</pre> -->
                            <DataTable :value="singleSpace?.projects" tableStyle="min-width: 50rem">
                                <Column field="id" header="ID"></Column>
                                <Column field="name" header="Project Name"></Column>
                                <Column field="space_name" header="Under the Space of"></Column>
                                <!-- <Column field="teams.length" header="Teams"></Column> -->
                                <!-- <Column field="color" header="Space Color"></Column> -->
                                <Column header="Action">
                                    <template #body="slotProps">
                                        <NuxtLink :to="`/companies/${singleSpace.company_id}/spaces/${singleSpace.id}/projects/${slotProps.data.id}`">
                                            <Button  disabled class="cursor-pointer text-white px-5 py-2" label="Enter" />
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
  
  
  <style scoped>

  .create-btn-wrapper{
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
  }
  /* Add your custom styles here */
  </style>