<script setup>
const url = useRuntimeConfig();
const props = defineProps({
    param: {
        type: Object,
        required: true
    }
});
const usersLists = ref(props.param.usersLists);

const selectedTeamLead = ref([]);

const selectedLineManager = ref([]);

const selectedMembers = ref([]);

const toast = useToast();

const name = ref('');

const teamDescripInput = ref('');

const teamDescriptionError = ref(false);

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeCreateModal']);

const loading = ref(false);
const handleSubmitData = async () => {
    loading.value = true;
    if (name.value === '' || selectedTeamLead.value.length === 0 || selectedLineManager.value.length === 0 || selectedMembers.value.length === 0) {
        errorHandler.value = true;
        loading.value = false;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`${url.public.apiUrl}/teams/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name.value,
                    description: teamDescripInput.value,
                    team_lead_id: selectedTeamLead.value.id,
                    line_manager_id: selectedLineManager.value.id,
                    members: selectedMembers.value.map((item) => item.id)

                }
            });

            
            if (data?.value?.code === 201) {
                loading.value = false;
                name.value = null;
                teamDescripInput.value = null;
                selectedTeamLead.value = [];
                selectedLineManager.value = [];
                selectedMembers.value = [];
                employeeForm.value = false;
                emit('closeCreateModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Team created successfully!', group: 'br', life: 3000 });
                return;
            } else {
                loading.value = false;
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to create team!', group: 'br', life: 3000 });
                return;
            }
        }
    }
};

onMounted(() => {
    const createTeamName = document.getElementById('createTeamName');
    nextTick(() => {
        if (createTeamName){
            createTeamName.focus();
        }
    });
});
</script>
<template>
    <div>
        <div class="field">
            <label for="company">Name<i class="text-red-400">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <InputText id="createTeamName" v-model="name" class="w-full" />
        </div>

        <div class="field flex flex-column">
            <label for="email">Description <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Textarea id="description" class="border-gray-300" v-model="teamDescripInput" rows="3" cols="20" :invalid="teamDescriptionError" />        
        </div>
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Line Manager<i class="text-red-400">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <Dropdown v-model="selectedLineManager" :options="usersLists" optionLabel="name" placeholder="Select Line Manager" checkmark :highlightOnSelect="false" class="w-full" />
        </div> 
        <div class="field flex flex-column">
            <!-- <pre>rol {{rolesLists}}</pre> -->
            <label>Team Lead<i class="text-red-400">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <!-- {{ selectedTeamLead.id }} -->
            <Dropdown v-model="selectedTeamLead" :options="usersLists" optionLabel="name" placeholder="Select Team Lead" checkmark :highlightOnSelect="false" class="w-full" />
        </div>

        <div class="field">
            <label>Team Members<i class="text-red-400">*</i> <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span></label>
            <MultiSelect display="chip" v-model="selectedMembers" :options="usersLists" filter optionLabel="name" placeholder="Select Team Members" class="w-full" />
        </div>

        <p v-if="errorHandler" style="color: red">Please fill/check up all the fields</p>
        <div class="create-btn-wrapper mb-0">
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
