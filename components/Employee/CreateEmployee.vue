<template>
    <div>
        <div class="field">
            <label for="company">Name</label>
            <InputText v-model="name" class="w-full" />
        </div>

        <div class="field">
            <label for="email">Email address</label>
            <InputText type="email" v-model="email" class="w-full" />
        </div>
        <div class="field">
            <label for="worktype">Phone</label>
            <InputText v-model="phone" type="text" class="w-full" />
        </div>
        <div class="field">
            <label for="company">Address</label>
            <Textarea v-model="address" rows="3" cols="20" class="w-full" />
        </div>
        <div class="field">
            <label for="company">Password</label>
            <InputText type="password" v-model="password" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <label>Roles</label>
            <Dropdown v-model="selectedRoles" :options="rolesLists" optionLabel="name" placeholder="Select Role" checkmark :highlightOnSelect="false" class="w-full" />
        </div>

        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrapper">
            <Button label="Save" icon="pi pi-check" text="" @click="handleSubmitData" />
        </div>
    </div>
</template>
<script setup>
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

const handleSubmitData = async () => {
    if (name.value === '' || email.value === '' || password.value === '' || selectedRoles.value.length === 0) {
        errorHandler.value = true;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/users/create`, {
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

            if (data.value.code === 201) {
                name.value = null;
                email.value = null;
                phone.value = null;
                address.value = null;
                password.value = null;
                employeeForm.value = false;
                emit('closeCreateModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Created successfully!', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Employee Created Failed!', life: 3000 });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrapper {
    display: flex;
    justify-content: end;
}

.permission_selection{
    .p-multiselect-label{
        display: flex !important;
        flex-wrap: wrap !important;
        .p-multiselect-token{
            margin: 0 5px 5px 0 !important;
        
        }
    }

    .p-multiselect-trigger{
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        padding-top: 11px !important;
    }
    
}
</style>
