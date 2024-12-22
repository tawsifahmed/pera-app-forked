<script setup>
import { ref } from 'vue';
import { useActiveCompanyStore } from '~/store/workCompany';
const toast = useToast();
const { menu } = storeToRefs(useActiveCompanyStore());
const url = useRuntimeConfig();

const scrumData = ref([]);
const createModal = ref(false);
const employees = ref([]);
const employee = ref('');
const selectedSpace = ref('');
const description = ref('');
const isSubmitting = ref(false);
// New Scrum Submission
const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    isSubmitting.value = true;
    try {
        const token = useCookie('token');
        const payload = new FormData();
        payload.append('space_id', selectedSpace.value.id);
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
    } catch (error) {
        console.error('Submission failed:', error);
        toast.add({ severity: 'error', summary: 'Meeting Minutes', detail: 'Failed to create Meeting Minutes', group: 'br', life: 3000 });
    } finally {
        isSubmitting.value = false;
    }
};

// Fetch Scrum
const fetchScrum = async () => {
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
    }
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
        employees.value = data.value?.data;
    }
};
onMounted(() => {
    init();
    fetchScrum();
    console.log('call');
});
</script>

<template>
    <div class="card">
        <!-- <pre>{{ selectedSpace }}</pre> -->
        <header class="header">
            <h3>Meeting Minutes</h3>
            <Button @click="createModal = !createModal" icon="pi pi-plus" severity="secondary" />
        </header>
        <ScrumTable :scrumData="scrumData" />
    </div>

    <Dialog v-model:visible="createModal" modal header="New Scrum" :style="{ minWidth: '25vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <form @submit="handleSubmit" class="form" action="">
            <div class="flex-auto">
                <label for="space" class="font-bold block mb-2">Space: </label>
                <Dropdown v-model="selectedSpace" id="space" :options="menu" optionLabel="name" placeholder="Select Space" class="w-full" />
            </div>
            <div class="flex-auto">
                <label for="description" class="font-bold block mb-2">Description: </label>
                <Textarea class="w-full" id="description" v-model="description" rows="10" placeholder="Scrum Description..." />
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
