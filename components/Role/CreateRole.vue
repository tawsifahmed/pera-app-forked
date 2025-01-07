<template>
    <div>
        <div class="field">
            <label for="company">Role Name<i class="text-red-400 text-italic">*</i> </label>
            <InputText id="createRoleName" v-model="name" class="w-full" placeholder="Enter role name" />
        </div>

        <div class="mb-3">
            <label>Permissions<i class="text-red-400 text-italic">*</i></label>
        </div>
        <div class="groupPer-container mb-3">
            <div v-for="group in groupPermissions" :key="group.group.id">
                <!-- Group Checkbox -->
                <div class="flex align-items-start justify-content-between w-full mb-3">
                    <div class="flex justify-content-start" style="width: 50%">
                        <div class="group-selection">
                            <Checkbox v-model="selectedGroups" :inputId="'group-' + group.group.id" :value="group.group.id" @change="handleGroupChange(group)" />
                            <label class="grp-title ml-2" :for="'group-' + group.group.id">{{ group.group.name }}</label>
                        </div>
                    </div>
                    <!-- Children Checkboxes -->
                    <div class="flex flex-column gap-3 justify-content-start" style="width: 50%">
                        <div v-for="child in group.children" :key="child.id" class="flex align-items-center">
                            <Checkbox v-model="selectedPerm" :inputId="child.id" :value="child.id" @change="handleChildChange(group)" />
                            <label :for="child.id" class="ml-2">{{ child.name }}</label>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
        </div>

        <div class="create-btn-wrapper mb-0">
            <Button label="Save" icon="pi pi-check" text="" @click="handleSubmitData" />
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
const name = ref('');
const groupPermissions = ref(props.param.groupPermissions);
const selectedPerm = ref([]);
const selectedGroups = ref([]);  
const employeeForm = ref(true);
const emit = defineEmits(['closeCreateModal']);

const handleGroupChange = (group) => {
    const groupId = group.group.id;
    const allChildIds = group.children.map(child => child.id);
    
    if (selectedGroups.value.includes(groupId)) {
        selectedPerm.value = [...new Set([...selectedPerm.value, ...allChildIds])];
    } else {
        selectedPerm.value = selectedPerm.value.filter(id => !allChildIds.includes(id));
    }
};

const handleChildChange = (group) => {
    const allChildIds = group.children.map(child => child.id);
    const allSelected = allChildIds.every(id => selectedPerm.value.includes(id));
    
    if (allSelected) {
        if (!selectedGroups.value.includes(group.group.id)) {
            selectedGroups.value.push(group.group.id);
        }
    } else {
        selectedGroups.value = selectedGroups.value.filter(id => id !== group.group.id);
    }
};

const handleSubmitData = async () => {
    if (name.value === '') {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please enter role name', group: 'br', life: 3000 });
        return;
    } else if (selectedPerm.value.length === 0) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select roles', group: 'br', life: 3000 });
        return;
    } else if (name.value === '' && selectedPerm.value.length === 0) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please enter role name and select role', group: 'br', life: 3000 });
        return;
    } else {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${url.public.apiUrl}/roles/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name.value,
                    permissions: selectedPerm.value
                }
            });

            if (data.value?.code === 201) {
                name.value = null;
                employeeForm.value = false;
                emit('closeCreateModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Role Created successfully!', group: 'br', life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Role Creation Failed!', group: 'br', life: 3000 });
            }
        }
};


onMounted(() => {
    const createRoleName = document.getElementById('createRoleName');
    nextTick(() => {
        if (createRoleName) {
            createRoleName.focus();
        }
    });
});
</script>


<style lang="scss">
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

.groupPer-container {
    max-height: 440px;

    overflow: scroll;
    overflow-x: hidden;
}

.grp-title {
    text-transform: capitalize;
    margin-bottom: 0.2rem !important;
}

@media (min-width: 768px) {
    .group-selection{
        margin-left: 70px;
    }
}
</style>
