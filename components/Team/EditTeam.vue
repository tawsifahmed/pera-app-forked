
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
    
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`${url.public.apiUrl}/teams/update/${id.value}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: editName.value,
                    description: editDescription.value,
                    team_lead_id: editTeamLead.value.id,
                    line_manager_id: editLineManager.value.id,
                    members: editMembers.value.map((item) => item.id)
                }
            });

            if (data?.value?.code === 200) {
                loading.value = false;
                employeeForm.value = false;
                emit('closeEditModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Team Updated successfully!', group: 'br', life: 3500 });
                return;
            } else {
                loading.value = false;
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to update team!', group: 'br', life: 3000 });
                return;
            }
        }
    }
};

onMounted(async() => {
    await getTaskAssignModalData();
    usersLists.value = usersListStore.users;
    const editTeamName = document.getElementById('editTeamName');
    nextTick(() => {
        if (editTeamName){
            editTeamName.focus();
        }
    });
});
</script>

<template>
    <div>
        <div class="field">
            <label for="company">Name<i class="text-red-400 text-italic">*</i> </label>
            <InputText id="editTeamName" v-model="editName" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <label for="email">Description</label>
            <Textarea id="description" class="border-gray-300" v-model="editDescription" rows="3" cols="20" :invalid="teamDescriptionError" />        
        </div>
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Line Manager<i class="text-red-400 text-italic">*</i> </label>
            <Dropdown v-model="editLineManager" :options="usersLists" optionLabel="name" placeholder="Select Line Manager" checkmark :highlightOnSelect="false" class="w-full" />
        </div>
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Team Lead<i class="text-red-400 text-italic">*</i> </label>
            <!-- {{ selectedTeamLead.id }} -->
            <Dropdown v-model="editTeamLead" :options="usersLists" optionLabel="name" placeholder="Select Team Lead" checkmark :highlightOnSelect="false" class="w-full" />
        </div>
       
        <div class="field">
            <!-- <pre>{{usersLists}}</pre> -->
            <label>Team Members<i class="text-red-400 text-italic">*</i> </label>
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
