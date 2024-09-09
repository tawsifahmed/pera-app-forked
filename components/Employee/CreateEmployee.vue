<script setup>
const url = useRuntimeConfig();
const props = defineProps({
    param: {
        type: Object,
        required: true
    }
});
const rolesLists = ref(props.param.rolesLists);

const selectedRoles = ref([]);

const toast = useToast();

const name = ref('');

const email = ref('');

const phone = ref('');

const address = ref('');

const password = ref('');

const password_confirmation = ref('');

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeCreateModal']);

const loading = ref(false);
const handleSubmitData = async () => {
    loading.value = true;
    if (name.value === '' || email.value === '' || password.value === '' || selectedRoles.value.length === 0) {
        errorHandler.value = true;
        loading.value = false;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`${url.public.apiUrl}/users/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name.value,
                    email: email.value,
                    address: address.value,
                    phone: phone.value,
                    password: password.value,
                    password_confirmation: password.value,
                    role: selectedRoles.value.name
                }
            });

            if (error?.value) {
                if (error?.value?.data?.code === 422) {
                    loading.value = false;
                    toast.add({ severity: 'error', summary: 'Error', detail: 'Email already exists!', group: 'br', life: 3000 });
                    return;
                }
            } else if (data?.value?.code === 201) {
                loading.value = false;
                name.value = null;
                email.value = null;
                phone.value = null;
                address.value = null;
                password.value = null;
                employeeForm.value = false;
                emit('closeCreateModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Employee created successfully!', group: 'br', life: 3000 });
                return;
            } else {
                loading.value = false;
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to create employee!', group: 'br', life: 3000 });
                return;
            }
        }
    }
};
</script>
<template>
    <div>
        <div class="field">
            <label for="company">Name<span class="text-red-500">*</span><span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText v-model="name" class="w-full" />
        </div>

        <div class="field">
            <label for="email">Email address<span class="text-red-500">*</span> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText type="email" v-model="email" class="w-full" />
        </div>
        <div class="field">
            <label for="phoneNo">Phone <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText v-model="phone" inputId="worktype" type="number" class="w-full" />
        </div>
        <div class="field">
            <label for="company">Address <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Textarea v-model="address" rows="3" cols="20" class="w-full" />
        </div>
        <div class="field">
            <label for="company">Password<span class="text-red-500">*</span> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText type="password" v-model="password" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Role<span class="text-red-500">*</span><span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Dropdown v-model="selectedRoles" :options="rolesLists" optionLabel="name" placeholder="Select Role" checkmark :highlightOnSelect="false" class="w-full" />
        </div>

        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrapper">
            <Button :loading="loading" label="Save" icon="pi pi-check" text="" @click="handleSubmitData" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrapper {
    display: flex;
    justify-content: end;
}

.permission_selection {
    .p-multiselect-label {
        display: flex !important;
        flex-wrap: wrap !important;
        .p-multiselect-token {
            margin: 0 5px 5px 0 !important;
        }
    }

    .p-multiselect-trigger {
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        padding-top: 11px !important;
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
}
</style>
