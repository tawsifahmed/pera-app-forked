<script setup>
import { storeToRefs } from 'pinia'; 
import { useCompanyStore } from '~/store/company'; 
const { editCompany, getCompanyList } = useCompanyStore(); 
const { isCompanyEdited } = storeToRefs(useCompanyStore());

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
showValidEmail.value = refCompanyId?.email;

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
const imageData = ref(refCompanyId?.logo);
const uploadedImage = ref(null);
const inputFile = ref(null);

const handleImageUpload = (value) => {
    uploadedImage.value = value.target.files[0];
    imageData.value = URL.createObjectURL(uploadedImage.value);
};
const handleImageCancel = () => {
    uploadedImage.value = null;
    imageData.value = null;
    inputFile.value.value = null;
};

const errorHandler = ref(false);

const btnLoading = ref(false);
const handleEditCompany = async () => {
    btnLoading.value = true;
    if (numEmployees.value === null || sSolution.value === null || showValidEmail.value === null || workSpaceName.value === null || workSpaceName.value === '') {
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
            email: showValidEmail.value,
            address: null,
            contact_number: null,
            number_of_employees: nE,
            company_type: sS,
            logo: uploadedImage.value ? uploadedImage.value : null
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
            <div class="field mb-0">
                <label class="mb-0" for="company">Company Logo 
                    <span v-tooltip.right="{ value: 'Upload 1:1 ratio size' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span>
                </label>
                <div class="relative w-fit mx-auto">
                    <img v-if="imageData" :src="`${imageData}`" style="height: 60px; width: 60px; border-radius: 100%; object-fit: cover" />
                    <img v-else src='../assets/dummy_company.png' alt="" style="height: 60px; width: 60px; border-radius: 100%; object-fit: cover; border: 1px solid gray;">
                    <div class="img-label">
                        <label v-if="imageData" for="imageCancel">
                            <i class="pi pi-minus" @click="handleImageCancel" style="color: red; right: 0.2rem; bottom: 0.2rem; z-index: 5; background-color: white; padding: 5px; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; cursor: pointer"></i>
                        </label>
                        <label v-else for="image">
                            <i class="pi pi-plus" style="color: red; right: 0.2rem; bottom: 0.2rem; z-index: 5; background-color: white; padding: 5px; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; cursor: pointer"></i>
                        </label>
                        <input class="hidden" type="file" :v-model="uploadedImage" ref="inputFile" id="image" @input="(event) => handleImageUpload(event)" accept=".png, .jpeg, .jpg" />
                        
                    </div>
                </div>
            </div>
            <br />
            <p v-if="errorHandler" style="color: red">Please fill/check up all the fields properly</p>
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

.img-label {
    position: absolute;
    right: -7px;
    bottom: -3px;
    z-index: 1;
    cursor: pointer;
}
</style>
