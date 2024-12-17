<script setup>
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { createCompany } = useCompanyStore();
const { singleSpace, isCompanyCreated } = storeToRefs(useCompanyStore());
const companyFormInputs = ref(true);

const toast = useToast();
// How large is your company?
const numEmployees = ref(null);

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
        id: 'PMO',
        label: 'PMO'
    },
    {
        id: 'Finance & Accounting',
        label: 'Finance & Accounting'
    },
    {
        id: 'HR & Recruiting',
        label: 'HR & Recruiting'
    },
    {
        id: 'Operations',
        label: 'Operations'
    },
    {
        id: 'Support',
        label: 'Support'
    },
    {
        id: 'Sales & CRM',
        label: 'Sales & CRM'
    },
    {
        id: 'Personal Use',
        label: 'Personal Use'
    },
    {
        id: 'IT',
        label: 'IT'
    },
    {
        id: 'Creative & Design',
        label: 'Creative & Design'
    },
    {
        id: 'Personal Services',
        label: 'Personal Services'
    },
    {
        id: 'Marketing',
        label: 'Marketing'
    },
    {
        id: 'Engineering & Production',
        label: 'Engineering & Production'
    },
    {
        id: 'Other',
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
const validEmailStatus = ref('right');
if (invite.value === null) {
    validEmailStatus.value = false;
}
const pForEmail = ref(null);
const handleEmail = () => {
    console.log('check email input', invite.value);
    validEmailStatus.value = false;
    if (validateEmail(invite.value) !== null) {
        showValidEmail.value = invite.value;
        validEmailStatus.value = 'right';
    } else if (invite.value === null || invite.value === '') {
        validEmailStatus.value = 'right';
    } else {
        showValidEmail.value = null;
        validEmailStatus.value = 'wrong';
    }
};
// Lastly, what would you like to name your Workspace?
const workSpaceName = ref(null);
const errorHandler = ref(false);
const loading = ref(false);
const handleCreateWorkspace = async () => {
    loading.value = true;
    if (numEmployees.value === null || sSolution.value === null || showValidEmail.value === null || workSpaceName.value === null || workSpaceName.value === '') {
        errorHandler.value = true;
        loading.value = false;
        return;
    } else {
        errorHandler.value = false;
        let nE = numEmployees.value?.label;
        let sS = sSolution.value?.label;
        const workspaceData = {
            name: workSpaceName.value,
            email: showValidEmail.value,
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
            showValidEmail.value = null;
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
        <!-- <pre>nE=>{{typeof numEmployees}}</pre> -->
        <div class="field">
            <label for="company">Company Size<i class="text-red-400 text-italic">*</i> 
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <Dropdown v-model="numEmployees" inputId="company" :options="companyLargeAmount" optionLabel="label" placeholder="Select Size" class="w-full" />
        </div>
        <div class="field">
            <label for="worktype">Company Work Type?<i class="text-red-400 text-italic">*</i> 
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <Dropdown v-model="sSolution" inputId="worktype" :options="solutions" optionLabel="label" placeholder="Select Type" class="w-full" />
        </div>
        <div class="field">
            <!-- <pre>{{showValidEmail}}</pre> -->
            <label for="email">Email Address<i class="text-red-400 text-italic">*</i> 
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <InputText type="email" inputId="email" class="w-full px-2 py-2 shadow border focus:border-purple-500" placeholder="Type Email" v-model="invite" @Input="handleEmail" />
            <p v-if="validEmailStatus === 'wrong'" class="text-danger text-center text-xs mt-2">Invalid Email!</p>
        </div>
        <div class="field">
            <label for="company">Company Name<i class="text-red-400 text-italic">*</i> 
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <InputText type="company" class="w-full px-2 py-2 shadow border focus:border-purple-500" placeholder="Type Name" v-model="workSpaceName" />
        </div>
        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields properly</p>
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
