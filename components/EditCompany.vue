<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { editCompany, getCompanyList } = useCompanyStore(); // use authenticateUser action from  auth store
const { isCompanyEdited } = storeToRefs(useCompanyStore());

// import { storeToRefs } from 'pinia'
// import {useWorkStation} from '@/store/workSpace'
// const workStation = useWorkStation()
// const { setWorkStation } = workStation
// const { workStations } = storeToRefs(workStation)

const { refCompanyId } = defineProps(['refCompanyId']);

const emit = defineEmits(['closeEditModal']);
const toast = useToast();

const showFinalMsg = ref(false);


const numEmployees = ref();
numEmployees.value = refCompanyId?.number_of_employees ? { id: refCompanyId?.number_of_employees, label: refCompanyId?.number_of_employees } : '';
const companyLargeAmount = ref([
    {
        id: '1-10',
        label: '1-10'
    },
    {
        id: '11-25',
        label: '11-25'
    },
    {
        id: '26-250',
        label: '26-250'
    },
    {
        id: '251-500',
        label: '251-500'
    },
    {
        id: '501-2000',
        label: '501-2000'
    }
]);

const sSolution = ref(refCompanyId?.company_type ? { id: refCompanyId?.company_type, label: refCompanyId?.company_type } : '');
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

const invite = ref(refCompanyId?.email);
const validateEmail = (mail) => {
    return String(mail)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const showValidEmail = ref(null);
const validEmailStatus = ref(null);

const handleEmail = () => {
    validEmailStatus.value = false;
    let progressForInvite;
    let typedEmail = invite.value;
    if (validateEmail(invite.value) !== null) {
        showValidEmail.value = invite.value;
        validEmailStatus.value = true;
    } else {
        showValidEmail.value = null;
        validEmailStatus.value = false;
    }
};

const workSpaceName = ref(refCompanyId?.name);
const errorHandler = ref(false);

const btnLoading = ref(false);
const handleEditCompany = async () => {
    btnLoading.value = true;
    if (numEmployees.value === null || sSolution.value === null || invite.value === null || workSpaceName.value === null || workSpaceName.value === '') {
        errorHandler.value = true;
        btnLoading.value = false;
        return;
    } else {
        errorHandler.value = false;

        let nE = numEmployees.value?.label;
        let sS = sSolution.value?.label;
        console.log('company type', sSolution.value.label);
        const workspaceData = {
            id: refCompanyId.id,
            name: workSpaceName.value,
            email: invite.value,
            address: null,
            contact_number: null,
            number_of_employees: nE,
            company_type: sS,
            logo: null
        };
        console.log('workspaceData', workspaceData);

        await editCompany(workspaceData);
        // await getCompanyList();
        if (isCompanyEdited.value === true) {
            emit('closeEditModal', false);

            toast.add({ severity: 'success', summary: 'Success', detail: 'Company edited successfully!', group: 'br', life: 3000 });

            console.log('company edited');
            btnLoading.value = false;
        } else {
            console.log('company not edited');
            toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to edit company!', group: 'br', life: 3000 });
            btnLoading.value = false;
        }
    }
};
</script>

<template lang="">
    <div class="position-relative flex flex-column justify-content-between w-100 modal-container">
        <!-- <p>refCompanyId {{refCompanyId}}</p> -->
       
            <div class="field">
                <label for="company">Company Size<i class="text-red-400 text-italic">*</i></label>
                <Dropdown v-model="numEmployees" inputId="company" :options="companyLargeAmount" optionLabel="label" placeholder="Select Size" class="w-full" />
            </div>
            <div class="field">
                <label for="worktype">Company Work Type?<i class="text-red-400 text-italic">*</i></label>
                <Dropdown v-model="sSolution" inputId="worktype" :options="solutions" optionLabel="label" placeholder="Select Type" class="w-full" />
            </div>
          
            <div class="field">
                <label for="email">Email Address<i class="text-red-400 text-italic">*</i></label>
                <InputText type="email" inputId="email" class="w-full px-2 py-2 shadow border focus:border-purple-500" placeholder="Type Email" v-model="invite" @Input="handleEmail" />
                <p v-if="validEmailStatus !== null && validEmailStatus !== true" class="text-danger text-center text-xs mt-2">Invalid Email!</p>
            </div>
            <div class="field">
                <label for="company">Company Name<i class="text-red-400 text-italic">*</i></label>
                <InputText type="company" class="w-full px-2 py-2 shadow border focus:border-purple-500" placeholder="Type Name" v-model="workSpaceName" />
            </div>
            <br />
            <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
            <div class="create-btn-wrapper">
                <Button @click="handleEditCompany" class="text-white py-2 px-6 tracking-wide" label="Update Company" :loading="btnLoading" />
            </div>
    </div>
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
