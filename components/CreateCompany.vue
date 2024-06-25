<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { createCompany } = useCompanyStore();
const { singleSpace, isCompanyCreated } = storeToRefs(useCompanyStore());
const companyFormInputs = ref(true);

const toast = useToast();
// How large is your company?
const numEmployees = ref();
const companyLargeAmount = ref([
    {
        id: 1,
        label: '1-10'
    },
    {
        id: 2,
        label: '11-25'
    },
    {
        id: 3,
        label: '26-250'
    },
    {
        id: 4,
        label: '251-500'
    },
    {
        id: 5,
        label: '501-2000'
    },
    {
        id: 6,
        label: '2000+'
    }
]);

const selectPeopleId = ref(null);
const selectPeople = (p) => {
    if (selectPeopleId.value === p?.id) {
        selectPeopleId.value = null;
        wPeople.value = null;
    } else {
        selectPeopleId.value = p?.id;
        wPeople.value = p?.label;
    }
};
// Which solution would you like to start with?
const sSolution = ref(null);
const solutions = ref([
    {
        id: 1,
        label: 'Software Company'
    },
    {
        id: 2,
        label: 'Finance & Accounting'
    },
    {
        id: 3,
        label: 'HR & Recruiting'
    },
    {
        id: 4,
        label: 'Operations'
    },
    {
        id: 5,
        label: 'Support'
    },
    {
        id: 6,
        label: 'Seles & CRM'
    },
    {
        id: 7,
        label: 'Personal Use'
    },
    {
        id: 8,
        label: 'IT'
    },
    {
        id: 9,
        label: 'Creative & Design'
    },
    {
        id: 10,
        label: 'Personal Services'
    },
    {
        id: 11,
        label: 'Marketing'
    },
    {
        id: 12,
        label: 'Engineering & Production'
    },
    {
        id: 13,
        label: 'Other'
    }
]);
// Invite people to your Workspace
const invite = ref(null);
const validateEmail = (mail) => {
    return String(mail)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const showValidEmail = ref(null);
const validEmailStatus = ref(null);
const pForEmail = ref(null);
const handleEmail = () => {
    validEmailStatus.value = false;
    if (validateEmail(invite.value) !== null) {
        showValidEmail.value = invite.value;
        validEmailStatus.value = true;
    } else {
        showValidEmail.value = null;
        validEmailStatus.value = false;
    }
};
// Lastly, what would you like to name your Workspace?
const workSpaceName = ref(null);
const errorHandler = ref(false);
const loading = ref(false);
const handleCreateWorkspace = async () => {
    loading.value = true;
    if (numEmployees.value === null || sSolution.value === null || invite.value === null || workSpaceName.value === null || workSpaceName.value === '') {
        errorHandler.value = true;
        loading.value = false;
        return;
    } else {
        errorHandler.value = false;
        let nE = numEmployees.value?.label;
        let sS = sSolution.value?.label;
        const workspaceData = {
            name: workSpaceName.value,
            email: invite.value,
            address: null,
            contact_number: null,
            number_of_employees: nE,
            company_type: sS,
            logo: null
        };
        await createCompany(workspaceData);
        if (isCompanyCreated.value === true) {
            companyFormInputs.value = false;
            numEmployees.value = null;
            sSolution.value = null;
            invite.value = null;
            workSpaceName.value = null;
            loading.value = false;
            toast.add({ severity: 'success', summary: 'Company creation', detail: 'Company created successfully!', group: 'br', life: 3000 });
            location.reload(); 
        } else {
            companyFormInputs.value = true;
            loading.value = false;
            toast.add({ severity: 'error', summary: 'Company creation', detail: 'Company created Failed!', group: 'br', life: 3000 });
        }
    }
};
</script>

<template>
    <Dialog v-model:visible="companyFormInputs" :style="{ width: '450px' }" header="Create Company" :modal="true" class="p-fluid">
        <div class="field">
            <label for="company">Company Size <span  v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-question-circle cursor-pointer ml-1 text-sm"></span></label>
            <Dropdown v-model="numEmployees" inputId="company" :options="companyLargeAmount" optionLabel="label" class="w-full" />
        </div>
        <div class="field">
            <label for="worktype">Company work type? <span  v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-question-circle cursor-pointer ml-1 text-sm"></span></label>
            <Dropdown v-model="sSolution" inputId="worktype" :options="solutions" optionLabel="label" class="w-full" />
        </div>
        <div class="field">
            <label for="email">Email address <span  v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-question-circle cursor-pointer ml-1 text-sm"></span></label>
            <InputText type="email" inputId="email" class="w-full px-2 py-2 shadow border focus:border-purple-500" v-model="invite" @Input="handleEmail" />
            <p v-if="validEmailStatus !== null && validEmailStatus !== true" class="text-danger text-center text-xs mt-2">Invalid Email!</p>
        </div>
        <div class="field">
            <label for="company">Company name <span  v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-question-circle cursor-pointer ml-1 text-sm"></span></label>
            <InputText type="company" class="w-full px-2 py-2 shadow border focus:border-purple-500" v-model="workSpaceName" />
        </div>
        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <template #footer>
            <Button label="Save" icon="pi pi-check" text="" :loading="loading" @click="handleCreateWorkspace" />
        </template>
    </Dialog>
</template>

<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrapper {
    display: flex;
    justify-content: center;
}
</style>
