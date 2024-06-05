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


        <!-- <pre>{{user_type}}</pre> -->
        <div class="field flex flex-column">
            <label>Role</label>
            <Dropdown v-model="user_type" :options="rolesLists" optionLabel="name" placeholder="Select Role" checkmark :highlightOnSelect="false" class="w-full" />
        </div>
        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrappe">
            <Button label="Update" icon="pi pi-check" text="" @click="handleSubmitData" />
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
const toast = useToast();

const id = ref(props.param.id);

const name = ref(props.param.name);

const email = ref(props.param.email);

const phone = ref(props.param.phone);

const address = ref(props.param.address);

const rolesLists = ref(props.param.rolesLists);

const user_type = ref(props.param.user_type);
// user_type.value = singleTask.data.priority ? { name: singleTask.data.priority, code: singleTask.data.priority } : '';


const password = ref('');

const password_confirmation = ref('');

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeEditModal']);

const handleSubmitData = async () => {
    if (name.value === '' || email.value === '') {
        errorHandler.value = true;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/users/update/${id.value}`, {
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
                    role: user_type.value.name
                }
            });

            if (data.value.code === 200) {
                employeeForm.value = false;
                emit('closeEditModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Updated successfully!', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Employee Updated Failed!', life: 3000 });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrappe {
    display: flex;
    justify-content: end;
}
</style>
