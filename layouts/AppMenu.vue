<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import accessPermission from '~/composables/usePermission';
import { storeToRefs } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { switchCompany } = useCompanyStore(); // use authenticateUser action from  auth store
const { companySwitchToast, isCompanySwitched } = storeToRefs(useCompanyStore()); 
const companies = useActiveCompanyStore();
companies.getCompany();

const { menu, company, companyList, selectedCompany } = storeToRefs(useActiveCompanyStore());
const toast = useToast();

const readDashboard = ref(accessPermission('read_dashboard'));

const readEmployee = ref(accessPermission('read_user'));

const readRole = ref(accessPermission('read_role'));

const readTags = ref(accessPermission('read_tags'));

const readSpace = ref(accessPermission('read_space'));

const model = ref([
    {
        label: 'Spaces',
        option: 'space_option',
        items: ''
    },
    {
        label: 'Settings',
        option: 'settings_option',
        items: []
    },
    {
        label: 'Reports',
        option: 'reports_option',
        items: [
            { label: 'Task Wise Reports', icon: 'pi pi-fw pi-flag', to: '/task-reports' },
            { label: 'User Wise Reports', icon: 'pi pi-fw pi-flag', to: '/user-reports' },
            { label: 'KPI Report', icon: 'pi pi-fw pi-book', to: '/kpi-reports' }
        ]
    }
]);

if (readSpace.value) {
    model.value = model.value.filter((item) => item.option !== 'space_option');
    model.value.unshift({
        label: 'Spaces',
        option: 'space_option',
        items: menu
    });
}

if (readDashboard.value) {
    model.value.unshift({
        label: 'Home',
        option: 'home_option',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home text-lg', to: '/' }]
    });
}

if (readEmployee.value) {
    const settings = model.value.find((item) => item.option === 'settings_option');
    if (settings) {
        settings.items.unshift({ label: 'Employees', icon: 'pi pi-fw pi-users', to: '/employees' });
    }
}

if (readRole.value) {
    const settings = model.value.find((item) => item.option === 'settings_option');
    if (settings) {
        settings.items.push({ label: 'Roles', icon: 'pi pi-fw pi-user-edit', to: '/role' });
    }
}

if (readTags.value) {
    const settings = model.value.find((item) => item.option === 'settings_option');
    if (settings) {
        settings.items.push({ label: 'Tags', icon: 'pi pi-fw pi-tags', to: '/tags' });
    }
}

onMounted(() => {
    console.log('readDashboard', accessPermission('read_dashboard'));
});


const selectedComp = ref(null);
selectedComp.value = companyList.value.find(item => item.id === selectedCompany.value.id);

watch(selectedCompany, (newVal) => {
    selectedComp.value = companyList.value.find(item => item.id === newVal.id);
});

const router = useRouter();

const switchCompanyHandler = async (switchCompId) => {
    if(switchCompId === Number(localStorage.getItem('userCompany'))){
        return;
    }else{
        await switchCompany(switchCompId);
        if(isCompanySwitched.value === true){
            localStorage.setItem('userCompany', JSON.stringify(switchCompId));
            // await companies.getCompany();
            toast.add({ severity: 'success', summary: 'Success', detail: companySwitchToast, group: 'br', life: 3000 });
            if (window.location.pathname !== '/' && window.location.pathname !== '/companies') {
                window.location.href = '/';
            }
        }else{
            toast.add({ severity: 'error', summary: 'Error', detail: companySwitchToast, group: 'br', life: 3000 });
            selectedComp.value = companyList.value.find(item => item.id === selectedCompany.value.id);
        }
    }
};

const cItems = ref([
    {
        label: 'Company Settings',
        items: [
            {
                label: 'Manage Company',
                icon: 'pi pi-th-large'
            }
        ]
    }
]);

const menu1 = ref();

const toggle = (event) => {
    menu1.value.toggle(event);
};

const clickCompanyMenu = (event) => {
    if (event[0].items[0].label == 'Manage Company') {
        return navigateTo(`/companies`);
    }
};

const visibleCreateCompany = ref(false);
const handleCreateCompanyModal = () => {
    visibleCreateCompany.value = true;
};

</script>

<template>
    <div>
        <!-- <pre>{{menu}}</pre> -->
        <div class="mt-3" v-if="company">
            <!-- <pre>cList => {{companyList.length}}</pre> -->
            <!-- <pre>pre2: {{selectedComp}}</pre> -->
            <!-- <pre>selC{{selectedCompany}}</pre> -->
           <div v-if="companyList.length > 0" class="flex align-items-center">
                <span v-tooltip.right="{ value: `${company}` }" class="cursor-pointer bg-orange-100 border-round company-first-letter text-xl flex align-items-center justify-content-center mr-2 font-bold capitalize text-green">{{ company?.charAt(0) }}</span>
                <div class="comp-switch"  v-tooltip.right="{ value: companyList.length === 1 ? '' : 'Switch Company' }">
                    <Dropdown v-model="selectedComp" @change="switchCompanyHandler(selectedComp.id)" checkmark variant="filled" :options="companyList"  optionLabel="label" :disabled="companyList.length == 1" class="w-full bg-indigo-50" />
                </div>
                <Button type="button" icon="pi pi-ellipsis-v" class="p-button-sm w-2rem h-2rem ml-1" @click="toggle" severity="secondary" aria-label="Bookmark" text />
                <Menu ref="menu1" id="overlay_menu" @click="clickCompanyMenu(cItems)" :model="cItems" :popup="true" />
           </div>
        </div>
        <!-- <div class="flex justify-content-center" v-else>
            <Button @click="handleCreateCompanyModal" class="cursor-pointer w-full text-white px-5 py-2 mt-2" label="Create Company +" />
            <CreateCompany v-model:visible="visibleCreateCompany"  />
        </div> -->
        <hr />
        <ul class="layout-menu">
            <template v-for="(item, i) in model" :key="item.id">
                <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
                <li v-if="item.separator" class="menu-separator"></li>
            </template>
        </ul>
    </div>
</template>

<style lang="scss">
.rounded {
    border-radius: 6px;
    text-transform: capitalize;
}

.comp-switch{
    width: 75.1%;
    min-width: 75.1%;
}

.comp-switch > div > .p-inputtext{
    font-size: 1.3rem !important;
    font-weight: 700 !important;
}
.comp-switch > div > .p-dropdown-trigger{
    width: 2rem !important;
}

.company-first-letter{
    min-width: 2.8rem;
    height: 2.7rem;
}

</style>
