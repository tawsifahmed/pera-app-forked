<template>
    <div>
        <div class="field">
            <label for="company">Tag Name</label>
            <InputText v-model="name" class="w-full" placeholder="Enter tag name" />
        </div>

        <p v-if="errorHandler" style="color: red">Please enter tag name</p>
        <div class="create-btn-wrapper">
            <Button label="Save" icon="pi pi-check" text="" @click="handleSubmitData" />
        </div>
    </div>
</template>
<script setup>
const toast = useToast();

const name = ref('');

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeCreateModal']);

const handleSubmitData = async () => {
    if (name.value === '' || email.value === '' || password.value === '') {
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
                }
            });

            if (data.value.code === 201) {
                name.value = null;
                employeeForm.value = false;
                emit('closeCreateModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Tag Created successfully!', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Tag Creation Failed!', life: 3000 });
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
</style>
