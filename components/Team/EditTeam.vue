
<script setup>
import { storeToRefs } from 'pinia';

import { useCompanyStore } from '~/store/company';
const usersListStore = useCompanyStore();
const {getTaskAssignModalData } = useCompanyStore();
const url = useRuntimeConfig();
const props = defineProps({
    param: {
        type: Object,
        required: true
    }
});
const toast = useToast();

const id = ref(props.param.id);

const editName = ref(props.param.editName);

const editDescription = ref(props.param.editDescription);

const editLineManager = ref(props.param.editLineManager);

const editTeamLead = ref(props.param.editTeamLead);

const editMembers = ref(props.param.editMembers);

const usersLists = ref(usersListStore.users);
// user_type.value = singleTask.data.priority ? { name: singleTask.data.priority, code: singleTask.data.priority } : '';

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeEditModal']);

const loading = ref(false);

const handleSubmitData = async () => {
    loading.value = true;
    if (editName.value === '' || editTeamLead.value.length === 0 || editLineManager.value.length === 0 || editMembers.value.length === 0) {
        errorHandler.value = true;
        loading.value = false;
        return;
    } else {
        errorHandler.value = false;
        return; // work will be done on the next day 
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`${url.public.apiUrl}/users/update/${id.value}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name.value,
                    email: email.value,
                    address: address.value,
                    phone: phone.value,
                    role: user_type.value.name
                }
            });

            if (error?.value) {
                if (error?.value?.data?.code === 500) {
                    loading.value = false;
                    toast.add({ severity: 'error', summary: 'Error', detail: 'Email already exists!', group: 'br', life: 3000 });
                    return;
                }
            } else if (data?.value?.code === 200) {
                loading.value = false;
                employeeForm.value = false;
                emit('closeEditModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Employee Updated successfully!', group: 'br', life: 3000 });
                return;
            } else {
                loading.value = false;
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to update employee!', group: 'br', life: 3000 });
                return;
            }
        }
    }
};

onMounted(async() => {
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
});
</script>

<template>
    <div>
        <div class="field">
            <label for="company">Name <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText v-model="editName" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <label for="email">Description <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Textarea id="description" class="border-gray-300" v-model="editDescription" rows="3" cols="20" :invalid="teamDescriptionError" />        
        </div>
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Team Lead</label>
            <!-- {{ selectedTeamLead.id }} -->
            <Dropdown v-model="editLineManager" :options="usersLists" optionLabel="name" placeholder="Select Team Lead" checkmark :highlightOnSelect="false" class="w-full" />
        </div>
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Line Manager</label>
            <Dropdown v-model="editTeamLead" :options="usersLists" optionLabel="name" placeholder="Select Line Manager" checkmark :highlightOnSelect="false" class="w-full" />
        </div>
        <div class="field">
            <!-- <pre>{{usersLists}}</pre> -->
            <label>Team Members <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <MultiSelect display="chip" v-model="editMembers" :options="usersLists" filter optionLabel="name" placeholder="Select Team Members" class="w-full" />
        </div>
        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrappe">
            <Button label="Update" icon="pi pi-check" text="" @click="handleSubmitData" :loading="loading" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.text-danger {
    color: red;
}

.create-btn-wrappe {
    display: flex;
    justify-content: end;
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
