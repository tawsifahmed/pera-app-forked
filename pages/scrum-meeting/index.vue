<script setup>
import { ref } from 'vue';
import Editor from 'primevue/editor';
import accessPermission from '~/composables/usePermission';
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

const url = useRuntimeConfig();
const toast = useToast();
const readScrum = ref(accessPermission('read_scrum'));
const createScrumP = ref(accessPermission('create_scrum'));
const updateScrumP = ref(accessPermission('update_scrum'));
const totalRecords = ref(0);

const scrumData = ref([]);
const createModal = ref(false);
const employees = ref([]);
const employee = ref('');
const description = ref('');
const isSubmitting = ref(false);
const isLoading = ref(true);
// New Scrum Submission
const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    isSubmitting.value = true;
    try {
        const token = useCookie('token');
        const payload = new FormData();
        payload.append('description', description.value);
        employee.value.forEach((e) => payload.append('user_ids[]', e.id));

        const response = await $fetch(`${url.public.apiUrl}/scrum-meeting/create`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: payload
        });

        console.log('Submission successful:', response);
        createModal.value = false; // Close modal on success
        // Optionally, refresh data or notify the user
        toast.add({ severity: 'success', summary: 'Meeting Minutes', detail: 'Created successfully!', group: 'br', life: 3000 });
        description.value = '';
        employee.value = '';
        fetchScrum();
    } catch (error) {
        console.error('Submission failed:', error);
        toast.add({ severity: 'error', summary: 'Meeting Minutes', detail: 'Failed to create Meeting Minutes', group: 'br', life: 3000 });
    } finally {
        isSubmitting.value = false;
    }
};

// Fetch Scrum
const fetchScrum = async () => {
    isLoading.value = true;
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('scrumData', () =>
        $fetch(`${url.public.apiUrl}/scrum-meeting/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        scrumData.value = data.value?.data;
        totalRecords.value = data.value?.totalRecords;
    }
    return (isLoading.value = false);
};

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
        $fetch(`${url.public.apiUrl}/users/list`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        employees.value = data.value?.data.map((e) => ({ name: e.name, id: e.id }));
    }
};
fetchScrum();
onMounted(() => {
    init();
    // console.log('call');
});

const handleClose = () => {
    createModal.value = false;
    description.value = '';
    employee.value = '';
};
</script>

<template>
    <div class="card">
        <header class="header">
            <h3>Meeting Minutes</h3>
            <Button v-if="createScrumP" @click="createModal = !createModal" icon="pi pi-plus" severity="secondary" />
        </header>
        <!-- <ScrumTable :scrumData="scrumData" :fetchData="fetchScrum" :employees="employees" /> -->
        <ScrumTable 
            :scrumData="scrumData" 
            :fetchData="fetchScrum" 
            :employees="employees" 
            :totalRecords="totalRecords"
            :readScrum="readScrum"
            
        />
    </div>

    <Dialog lazy="true" :loading="isLoading" v-model:visible="createModal" modal header="New Scrum" @update:visible="handleClose" :style="{ minWidth: '45vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <form @submit="handleSubmit" class="form" action="">
            <div class="flex-auto">
                <label for="description" class="font-bold block mb-2">Description: </label>
                <Editor v-model="description" editorStyle="height: 200px">
                    <template v-slot:toolbar>
                        <span class="ql-formats flex justify-content-end mr-0">
                            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                            <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
                            <span class="ql-formats">
                                <select class="ql-color"></select>
                                <select class="ql-background"></select>
                            </span>

                            <button class="ql-list" type="button" data-pc-section="list" value="ordered"></button>
                            <button class="ql-list" type="button" data-pc-section="list" value="bullet"></button>
                            <button class="ql-link" type="button" data-pc-section="link"></button>
                        </span>
                    </template>
                </Editor>
            </div>
            <div class="flex-auto">
                <label for="members" class="font-bold block mb-2">Members: </label>
                <MultiSelect id="members" display="chip" v-model="employee" :options="employees" filter resetFilterOnHide optionLabel="name" placeholder="Select Members" class="w-full" :maxSelectedLabels="2" />
            </div>
            <Button :label="isSubmitting ? 'Submitting...' : 'Submit'" severity="primary" type="submit" :disabled="isSubmitting" />
        </form>
    </Dialog>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-d);
}
.header h3 {
    margin: 0;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
