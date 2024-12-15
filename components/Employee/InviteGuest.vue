<template>
    <div>
        <div class="field">
            <label for="email">Email address<i class="text-red-400 text-italic">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText id="inviteEmail" type="email" v-model="email" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <label>Role<i class="text-red-400 text-italic">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Dropdown v-model="selectedRoles" :options="rolesLists" filter resetFilterOnHide optionLabel="name" placeholder="Select Role" checkmark :highlightOnSelect="false" class="w-full" />
        </div>

        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrapper">
            <Button v-if="isButtonLoading == 'false'" label="Send" icon="pi pi-check" text="" @click="handleSubmitData" />
            <Button v-else label="Sending..." icon="pi pi-spin pi-spinner" text="" disabled />
        </div>
    </div>
</template>
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

const email = ref('');

const errorHandler = ref(false);

const isButtonLoading = ref('false');

const employeeForm = ref(true);

const emit = defineEmits(['closeInviteModal']);

const handleSubmitData = async () => {
    if (email.value === '' || selectedRoles.value.length === 0) {
        errorHandler.value = true;
        return;
    } else {
        isButtonLoading.value = true;
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${url.public.apiUrl}/invite-user`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    email: email.value,
                    role: selectedRoles.value.name
                }
            });

            if (data?.value?.code === 201) {
                email.value = null;
                employeeForm.value = false;
                emit('closeInviteModal', false);
                isButtonLoading.value = false;
                toast.add({ severity: 'success', summary: 'Success', detail: 'Employee invitation sent!', group: 'br', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Employee invitation failed!', group: 'br', life: 3000 });
            }
        }
    }
};

onMounted(() => {
    const inviteEmail = document.getElementById('inviteEmail');
    nextTick(() => {
        if (inviteEmail){
            inviteEmail.focus();
        }
    });
});
</script>

<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrapper {
    display: flex;
    justify-content: end;
}
</style>
