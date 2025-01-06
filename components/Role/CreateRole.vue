<template>
    <div>
        <div class="field">
            <label for="company"
                >Role Name<i class="text-red-400 text-italic">*</i>
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <InputText id="createRoleName" v-model="name" class="w-full" placeholder="Enter role name" />
        </div>

        <label
            >Permissions<i class="text-red-400 text-italic">*</i>
            <!-- <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
        </label>
        <div class="groupPer-container">
            <div v-for="group in groupPermissions" :key="group">
                <div class="flex align-items-start justify-content-between w-full mb-3">
                    <div class="flex justify-content-center" style="width: 50%">
                        <p class="grp-title">{{ group.group }}</p>
                    </div>
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
        <!-- <pre>
            new {{ selectedPerm }}
        </pre>
        <pre>old{{selectedPermissions}}</pre> -->
        <div class="field permission_selection">
            <label
                >Permissions<i class="text-red-400 text-italic">*</i>
                <!-- <span v-tooltip.right="{ value: 'Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text.' }" class="pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"></span> -->
            </label>
            <MultiSelect display="chip" v-model="selectedPermissions" :options="permissionsList" filter resetFilterOnHide optionLabel="name" placeholder="Select Permissions" :maxSelectedLabels="40" class="w-full" />
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

const permissionsList = ref(props.param.permissionsList);

const selectedPermissions = ref([]);

const selectedPerm = ref([]);

const errorHandler = ref(false);

const employeeForm = ref(true);

const emit = defineEmits(['closeCreateModal']);

const handleSubmitData = async () => {
    if (name.value === '') {
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
                    permissions: selectedPermissions.value.map((item) => item.id)
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
</style>
