
<script setup>
import Dialog from 'primevue/dialog';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleCompany } = useCompanyStore();
const { singleCompany } = storeToRefs(useCompanyStore());

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const { companies } = useRoute().params
console.log('companyParams,', companies)
const visible = ref(false);

if(singleCompany.value === undefined){
throw createError({statusCode: 404, message: 'Company not found', fatal: true})
}

const openCreateSpace = () => {
  visible.value = true;
}

watchEffect(() => {
  getSingleCompany(companies);
  console.log('company,', companies)
})

const getBackgroundColor = (color) => {
  if (color === 'crimson') {
    return '#ffa2b3';
  } else if (color === 'skyblue') {
    return '#e1f6ff';
  } else if (color === 'orange') {
    return '#ffdc9b';
  } else if (color === 'purple') {
    return '#ffbdff';
  } else if (color === 'cadetblue') {
    return '#aae0e1';
  } else if (color === 'burlywood') {
    return '#ffe9cd';
  } else if (color === 'pink') {
    return '#ffd5dd';
  } else if (color === 'lightseagreen') {
    return '#a8e1de';
  } else {
    // Default color or additional conditions can be set here
    return color;
  }
};
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
                            Company Name: {{ singleCompany?.name }}
                        </h1>
                    </div>
                    <div class="create-btn-wrapper">
                        <Button @click="openCreateSpace" class="cursor-pointer text-white px-3 py-2 mr-2" label="Create Space +" />
                        <Dialog v-model:visible="visible" modal header=" " :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                            <CreateSpecificSpace :singleCompany="singleCompany" />
                        </Dialog>
                        <!-- <Button label="Create Space +" class=" mr-2 next-btn bg-primary border border-primary text-white px-3 py-2 text-xl mt-6 "/> -->
                    </div>
                   
                    
                    
                    <div class=" gap-4 mb-8">
                        <div class="card">
                            <!-- <pre>{{singleCompany?.spaces}}</pre> -->
                            <DataTable :value="singleCompany?.spaces" tableStyle="min-width: 50rem">
                                <Column field="id" header="ID"></Column>
                                <Column field="name" header="Space Name"></Column>
                                <Column field="description" header="Description"></Column>
                                <Column field="color" header="Space Color"></Column>
                                <Column header="Action">
                                    <template #body="slotProps">
                                        <NuxtLink :to="`/companies/${singleCompany.id}/spaces/${slotProps.data.id}`">
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
    
    <!-- <div>
        <div class="flex mx-auto justify-between items-center w-full mt-4">
          <NuxtLink to="/companies" class="cursor-pointer text-lg font-semibold mb-6 mt-1 bg-indigo-400 hover:bg-indigo-500 transition-all duration-150 text-white py-1 px-4 rounded">Back</NuxtLink>
            <h1 class="text-center text-xl font-semibold mb-6 mt-1 bg-indigo-100 px-4 py-1 rounded">Company Portal</h1>
            <button class="text-xl font-semibold mb-6 mt-1 bg-indigo-400 hover:bg-indigo-500 transition-all duration-150 text-white py-1 px-4 rounded invisible">Back</button>
        </div>                                      
        <div class="bg-indigo-100 rounded-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-2 pt-2 px-4">
            <div class="text-sm flex items-center leading-3 tracking-wide mb-1 pb-1 border-b">
                <div class="w-40 font-semibold text-nowrap">Name : <span class="text-sm text-indigo-500">{{ singleCompany?.name }}</span></div>
  
            </div>
            <div class="text-sm flex items-center leading-3 tracking-wide mb-1 pb-1 border-b">
                <div class="w-40 font-semibold text-nowrap">Total Employees : <span class="text-sm text-indigo-500">{{ singleCompany?.number_of_employees }}</span></div>
            </div>
            <div class="text-sm flex items-center leading-3 tracking-wide mb-1 pb-1 border-b">
                <div class="w-40 font-semibold text-nowrap">Size : <span class="text-sm text-indigo-500">{{ singleCompany?.size }}</span></div>
  
            </div>
            <div class="text-sm flex items-center leading-3 tracking-wide mb-1 pb-1 border-b">
                <div class="w-40 font-semibold text-nowrap">Employee Role : <span class="text-sm text-indigo-500">{{ singleCompany?.company_role }}</span></div>
            </div>
        </div>
        <div class="flex mx-auto justify-center items-center w-full mt-10">
            <h1 class="text-center text-xl font-semibold mb-6 mt-1 bg-zinc-800 text-white px-4 py-1 rounded">
                {{ singleCompany?.spaces ? 'Available Spaces: ' + singleCompany?.spaces?.length : 'Available Spaces: 0' }}
            </h1>
        </div>
        <div class="flex justify-end">
        <div class="-2 mb-5">
            <button @click="openCreateSpace" class="flex items-center text-sm gap-2 bg-indigo-400 px-3 py-2 hover:bg-indigo-500 transition-all duration-150 text-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                  </svg>
                Create Space +
  
            </button>
            <Dialog v-model:visible="visible" modal header=" " :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <ModalCreateSpecificSpace :singleCompany="singleCompany" />
              </Dialog>
        </div>
       </div>
  
       <div v-if="singleCompany?.spaces" class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8">
        <Card v-for="space in singleCompany?.spaces" :key="space.id" :style="{ backgroundColor: getBackgroundColor(space.color) }" class="border cursor-default">
          <template #title>
            <div class="text-center text-black text-md tracking-wide rounded-md p-2 capitalize">
              {{ space.name }}
            </div>
          </template>
          <template #content>
            <NuxtLink :to="`/companies/${singleCompany?.id}/space/${space.id}`" class="">
              <p class="bg-zinc-800 hover:bg-zinc-950 transition-all duration-200 mt-5 text-white py-2 text-md font-medium cursor-pointer tracking-wide text-center rounded px-2">Visit</p>
            </NuxtLink>  
          </template>
        </Card>
      </div>
    </div> -->
  </template>
  
  
  <style scoped>

  .create-btn-wrapper{
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
  }
  /* Add your custom styles here */
  </style>