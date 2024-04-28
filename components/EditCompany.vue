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


const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);


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
    // {
    //     id: 7,
    //     label: "I don't know"
    // }
]);

const sSolution = ref(null);
const solutions = ref([
    {
        id: 1,
        label: 'PMO'
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

const workSpaceName = ref(null);
const errorHandler = ref(false);
const handleEditCompany = async () => {
    if (numEmployees.value === null || sSolution.value === null || invite.value === null || workSpaceName.value === null || workSpaceName.value === '') {
        errorHandler.value = true;
        return;
    } else {
        errorHandler.value = false;

        let nE = numEmployees.value?.label;
        let sS = sSolution.value?.label;
        console.log('company type', sSolution.value.label);

        console.log('nE', nE);
        console.log('sS', sS);

        const workspaceData = {
            id: refCompanyId,
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
            spaceFormInputs.value = false;
            showFinalMsg.value = true;
            numEmployees.value = null;
            sSolution.value = null;
            invite.value = null;
            workSpaceName.value = null;

            console.log('showFinalMsg', showFinalMsg.value);

            console.log('company edited');
        } else {
            console.log('company not edited');
        }
    }
};
</script>

<template lang="">
    <div class="position-relative flex flex-column justify-content-between w-100 modal-container">
        <!-- <p>refCompanyId {{refCompanyId}}</p> -->
        <div v-if="spaceFormInputs">
            <div class="flex justify-content-center">
                <FloatLabel class="w-full md:w-50rem mt-4">
                    <Dropdown v-model="numEmployees" inputId="dd-city" :options="companyLargeAmount" optionLabel="label" class="w-full" />
                    <label for="dd-city">Select Companny Size</label>
                </FloatLabel>
            </div>
            <br />
            <div class="flex justify-content-center">
                <FloatLabel class="w-full md:w-50rem mt-4">
                    <Dropdown v-model="sSolution" inputId="dd-city" :options="solutions" optionLabel="label" class="w-full" />
                    <label for="dd-city">Company work type? </label>
                </FloatLabel>
            </div>

            <br />
            <br />
            <FloatLabel>
                <InputText type="email" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="invite" @Input="handleEmail" />
                <label>Email address</label>
                <p v-if="validEmailStatus !== null && validEmailStatus !== true" class="text-danger text-center text-xs mt-2">Invalid Email!</p>
            </FloatLabel>
            <br />
            <br />
            <FloatLabel>
                <InputText type="email" class="w-full px-4 py-2 shadow border focus:border-purple-500" v-model="workSpaceName" />
                <label>Workspace name...</label>
            </FloatLabel>
            <br />
            <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
            <div class="create-btn-wrapper">
                <Button @click="handleEditCompany" class="text-white py-2 px-6 tracking-wide" label="Update Company" />
            </div>
        </div>
        <div v-if="showFinalMsg">
            <h3 class="text-dark mb-4 text-black text-center font-weight-semibold">Company edited successfully</h3>

            <div class="centering">
                <FloatLabel>
                    <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                    <p class="text-center mb-2">You can close the modal now.</p>
                </FloatLabel>
            </div>
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
