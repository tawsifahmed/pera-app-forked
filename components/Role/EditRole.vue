<template>
    <div>
        <div class="field">
            <label for="company">Role Name<i class="text-red-400 text-italic">*</i> </label>
            <InputText id="editTeamName" :disabled="editName === 'Admin'" v-model="editName" class="w-full" placeholder="Edit role name" />
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
                            <Checkbox v-model="selectedGroupPerms" :value="group.group.id" @change="handleGroupChange(group)" />
                            <label class="grp-title ml-2">{{ group.group.name }}</label>
                        </div>
                    </div>
            
                    <!-- Children Checkboxes -->
                    <div class="flex flex-column gap-3 justify-content-start" style="width: 50%">
                        <div v-for="child in group.children" :key="child.id" class="flex align-items-center">
                            <Checkbox v-model="selectedPerm" :inputId="child.id" :value="child.id" />
                            <label :for="child.id" class="ml-2">{{ child.name }}</label>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
        </div>
        <!-- <pre>{{selectedPermissions}}</pre> -->
        <!-- <div class="field permission_selection">
            <label>Permissions<i class="text-red-400 text-italic">*</i> </label>
            <MultiSelect display="chip" v-model="selectedPermissions" :options="permissionsList" filter resetFilterOnHide optionLabel="name" placeholder="Select Permissions" :maxSelectedLabels="40" class="w-full" />
        </div> -->

        <div class="create-btn-wrappe">
            <Button :disabled="editName === 'Admin'" label="Update" icon="pi pi-check" :loading="submitLoader" text="" @click="handleSubmitData" />
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

const groupPermissions = ref(props.param.groupPermissions);


const selectedPerm = ref(props.param.slctdPermissions || []);  // Store selected permissions

const selectedGroupPerms  = ref([]);  // Store selected groups

const employeeForm = ref(true);

const submitLoader = ref(false);

const emit = defineEmits(['closeEditModal']);


const handleDefaultGroupSelection = () => {
    groupPermissions.value.forEach(group => {
        const allChildrenSelected = group.children.every(child => selectedPerm.value.includes(child.id));
        if (allChildrenSelected) {
            selectedGroupPerms.value.push(group.group.id);
        }
    });
};

// Handle child checkbox change
const handleGroupChange = (group) => {
    const allChildrenIds = group.children.map(child => child.id);

    if (selectedGroupPerms.value.includes(group.group.id)) {
        // Group selected, add all children to selectedPerm
        selectedPerm.value = [...new Set([...selectedPerm.value, ...allChildrenIds])];
    } else {
        // Group deselected, remove all children from selectedPerm
        selectedPerm.value = selectedPerm.value.filter(id => !allChildrenIds.includes(id));
    }
};


watch(selectedPerm, () => {
    groupPermissions.value.forEach(group => {
        const allChildrenSelected = group.children.every(child => selectedPerm.value.includes(child.id));
        if (allChildrenSelected && !selectedGroupPerms.value.includes(group.group.id)) {
            selectedGroupPerms.value.push(group.group.id);
        } else if (!allChildrenSelected && selectedGroupPerms.value.includes(group.group.id)) {
            selectedGroupPerms.value = selectedGroupPerms.value.filter(id => id !== group.group.id);
        }
    });
});

const handleSubmitData = async () => {
    if (editName.value === '') {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please enter role name', group: 'br', life: 3000 });
        return;
    } else if (selectedPerm.value.length === 0) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select roles', group: 'br', life: 3000 });
        return;
    } else if (editName.value === '' && selectedPerm.value.length === 0) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please enter role name and select role', group: 'br', life: 3000 });
        return;
    } else {
            submitLoader.value = true;
            const token = useCookie('token');
            const { data, pending } = await useFetch(`${url.public.apiUrl}/roles/update/${id.value}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: editName.value,
                    permissions: selectedPerm.value
                }
            });

            if (data.value?.code === 200) {
                employeeForm.value = false;
                submitLoader.value = false;
                emit('closeEditModal', false);
                toast.add({ severity: 'success', summary: 'Success', detail: 'Role updated successfully!', group: 'br', life: 3000 });
            } else {
                submitLoader.value = false;
                toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to update role!', group: 'br', life: 3000 });
            }
        }
};

onMounted(async() => {
    handleDefaultGroupSelection();
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
