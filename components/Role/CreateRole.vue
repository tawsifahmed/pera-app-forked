<template>
    <div>
        <div class="field">
            <label for="company">Role Name<i class="text-red-400 text-italic">*</i> </label>
            <InputText id="createRoleName" v-model="name" class="w-full" placeholder="Enter role name" />
        </div>

        <label>Permissions<i class="text-red-400 text-italic">*</i></label>
        <div class="groupPer-container">
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

        <p v-if="errorHandler" style="color: red">Please enter role name</p>
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
const selectedPerm = ref([]);  // Store selected permissions
const selectedGroups = ref([]);  // Store selected groups
const errorHandler = ref(false);
const employeeForm = ref(true);
const emit = defineEmits(['closeCreateModal']);

// Handle group checkbox change
const handleGroupChange = (group) => {
    const groupId = group.group.id;
    const allChildIds = group.children.map(child => child.id);
    
    if (selectedGroups.value.includes(groupId)) {
        // Select all children if the group is selected
        selectedPerm.value = [...new Set([...selectedPerm.value, ...allChildIds])];
    } else {
        // Deselect all children if the group is deselected
        selectedPerm.value = selectedPerm.value.filter(id => !allChildIds.includes(id));
    }
};

// Handle child checkbox change
const handleChildChange = (group) => {
    const allChildIds = group.children.map(child => child.id);
    
    // Check if all children are selected
    const allSelected = allChildIds.every(id => selectedPerm.value.includes(id));
    
    if (allSelected) {
        // Select the group if all children are selected
        if (!selectedGroups.value.includes(group.group.id)) {
            selectedGroups.value.push(group.group.id);
        }
    } else {
        // Deselect the group if any child is deselected
        selectedGroups.value = selectedGroups.value.filter(id => id !== group.group.id);
    }
};

// Handle form submission
const handleSubmitData = async () => {
    if (name.value === '' || selectedPerm.value.length === 0) {
        errorHandler.value = true;
        return;
    } else {
        errorHandler.value = false;
        if (!errorHandler.value) {
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
    }
};

// Auto-focus the role name input
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
        margin-left: 60px;
    }
}
</style>
