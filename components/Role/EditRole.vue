<template>
    <div>
        <div class="field">
            <label for="company">Role Name<i class="text-red-400 text-italic">*</i> </label>
            <InputText id="editTeamName" v-model="editName" class="w-full" placeholder="Edit role name" />
        </div>

        <div class="field permission_selection">
            <label>Permissions<i class="text-red-400 text-italic">*</i> </label>
            <!-- <pre>{{selectedPermissions}}</pre> -->
            <MultiSelect display="chip" v-model="selectedPermissions" :options="permissionsList" filter resetFilterOnHide optionLabel="name" placeholder="Select Permissions" :maxSelectedLabels="40" class="w-full" />
        </div>

        <p v-if="errorHandler" style="color: red">Please enter tag name</p>
        <div class="create-btn-wrappe">
            <Button label="Update" icon="pi pi-check" text="" @click="handleSubmitData" />
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
const toast = useToast();

const id = ref(props.param.id);

const editName = ref(props.param.name);

const permissionsList = ref(props.param.permissionsList);

const selectedPermissions = ref(props.param.slctdPermissions);

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeEditModal']);

const handleSubmitData = async () => {
    if (editName.value === '') {
        errorHandler.value = true;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${url.public.apiUrl}/roles/update/${id.value}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: editName.value,
                    permissions: selectedPermissions.value.map((item) => item.id)
                }
            });

            if (data.value?.code === 200) {
                employeeForm.value = false;
                emit('closeEditModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Role updated successfully!', group: 'br', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to update role!', group: 'br', life: 3000 });
            }
        }
    }
};

onMounted(async() => {
    const editTeamName = document.getElementById('editTeamName');
    nextTick(() => {
        if (editTeamName){
            editTeamName.focus();
        }
    });
});
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
