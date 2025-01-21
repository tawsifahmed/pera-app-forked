<script setup>
import { useActiveCompanyStore } from '~/store/workCompany';
import Editor from 'primevue/editor';
const { scrumData, fetchData, employees, totalRecords } = defineProps(['scrumData', 'fetchData', 'employees', 'totalRecords']);
const { menu } = storeToRefs(useActiveCompanyStore());
const toast = useToast();
const scrumModal = ref(false);
const deleteModal = ref(false);
const editModal = ref(false);
const spaces = ref([]);
const selectedScrum = ref(null);
const description = ref(' ');
const employee = ref('');
const url = useRuntimeConfig();
const isLoading = ref(false);
const handleRowClick = (data) => {
    console.log(data);
    selectedScrum.value = data;
    scrumModal.value = true;
};

// Delete functionality
const handleDelete = async (e) => {
    try {
        const token = useCookie('token');

        const response = await $fetch(`${url.public.apiUrl}/scrum-meeting/delete/${e}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        deleteModal.value = false;
        toast.add({ severity: 'success', summary: 'Meeting Minutes', detail: 'Deleted successfully!', group: 'br', life: 3000 });
        return fetchData();
    } catch (error) {
        console.error('Submission failed:', error);
        toast.add({ severity: 'error', summary: 'Meeting Minutes', detail: 'Failed to Delete Meeting Minutes', group: 'br', life: 3000 });
    } finally {
        deleteModal.value = false;
    }
};

const handleUpdate = async (e) => {
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

        createModal.value = false; // Close modal on success
        // Optionally, refresh data or notify the user
        toast.add({ severity: 'success', summary: 'Meeting Minutes', detail: 'Created successfully!', group: 'br', life: 3000 });
        fetchScrum();
    } catch (error) {
        console.error('Submission failed:', error);
        toast.add({ severity: 'error', summary: 'Meeting Minutes', detail: 'Failed to create Meeting Minutes', group: 'br', life: 3000 });
    } finally {
        isSubmitting.value = false;
    }
};
const handleEdit = async (data) => {
    console.log(data);
    console.log('employees', employees);
    selectedScrum.value = data.data;
    editModal.value = true;
    description.value = data.data.description;
    employee.value = data.data.user_ids;
    spaces.value = data.data.space_id;
};

watch(description, (newValue) => {
    if (newValue.length === 0) {
        description.value = ' ';
    }
});

const onPage = async (e) => {
    const token = useCookie('token');
    isLoading.value = true;
    const { data, pending, error } = await useAsyncData('scrumData', () =>
        $fetch(`${url.public.apiUrl}/scrum-meeting/list?page=${e.page + 1}&limit=${e.rows}`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
    );
    if (data.value?.data?.length > 0) {
        scrumData.value = data.value?.data;
    }
    return (isLoading.value = false);
};
</script>
<template>
    <!-- <pre>{{ selectedScrum }}</pre> -->
    <!-- <DataTable class="table-st" :value="scrumData" :rowHover="true" paginator :rows="30" v-if="scrumData && scrumData.length > 0" stripedRows tableStyle="min-width: 50rem"> -->
    <DataTable
        class="table-st"
        :value="scrumData"
        :rowHover="true"
        :paginator="true"
        :rows="10"
        v-if="scrumData && scrumData.length > 0"
        stripedRows
        scrollable
        tableStyle="min-width: 50rem"
        :totalRecords="totalRecords"
        :loading="isLoading"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        @page="onPage"
    >
        <!-- <Column style="width: 2%" field="id" header="Serial">
            <template #body="slotProps">
                <div class="">{{ slotProps?.data }}</div>
            </template>
        </Column> -->
        <Column style="width: 12%" field="meeting_date" header="Date">
            <template #body="slotProps">
                <div class="cursor-pointer" @click="() => handleRowClick(toRaw(slotProps.data))">{{ slotProps.data.meeting_date }}</div>
            </template>
        </Column>
        <!-- <Column style="width: 10%" field="space_id" header="Space">
            <template #body="slotProps">
                <div @click="() => handleRowClick(toRaw(slotProps.data))">{{ slotProps.data.space_id.name }}</div>
            </template>
        </Column> -->
        <!-- <Column style="width: 30%" field="description" header="Description">
            <template #body="slotProps">
                <div class="description" v-html="slotProps.data.description"></div>
            </template>
        </Column> -->
        <Column style="width: 35%" field="user ids" header="Participants">
            <template #body="slotProps">
                <!-- <pre>{{ slotProps }}</pre> -->
                <div style="display: flex; flex-wrap: wrap; gap: 2px">
                    <div class="border rounded" v-for="child in slotProps.data.user_ids" :key="child.id" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                        <div class="">{{ child.name }}</div>
                    </div>
                </div>
            </template>
        </Column>
        <Column style="width: 3%" field="actions" header="Actions">
            <template #body="slotProps">
                <Button severity="info" rounded text type="button" @click="() => handleRowClick(toRaw(slotProps.data))" icon="pi pi-pencil" class="">View</Button>
            </template>
        </Column>
    </DataTable>

    <!-- View Modal -->
    <Dialog lazy="true" v-model:visible="scrumModal" modal header="Scrum Details" :style="{ width: '90rem', height: '80rem' }" :breakpoints="{ '1199px': '75vw', '575px': '95vw' }">
        <div class="title">
            <p class="">Participants:</p>
            <p class="">{{ selectedScrum.meeting_date }}</p>
        </div>
        <div class="perticipants">
            <div class="flex gap-1 flex-wrap">
                <div class="border rounded" v-for="child in selectedScrum.user_ids" :key="child.id" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                    <div class="">{{ child.name }}</div>
                </div>
            </div>
        </div>
        <div class="details" v-html="selectedScrum?.description"></div>
    </Dialog>

    <!-- Edit Modal -->
    <Dialog lazy="true" v-model:visible="editModal" modal header="Update Scrum" dismissableMask="true" :style="{ minWidth: '30vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <form @submit="handleUpdate" class="form" action="">
            <!-- <pre>{{ selectedScrum }}</pre> -->
            <!-- <div class="flex-auto">
                <label for="space" class="font-bold block mb-2">Space: </label>
                
                <MultiSelect id="spaces" display="chip" v-model="spaces" :options="menu" filter resetFilterOnHide optionLabel="name" placeholder="Select Spaces" class="w-full" :maxSelectedLabels="2" />
            </div> -->
            <div class="flex-auto">
                <label for="description" class="font-bold block mb-2">Description: </label>
                <!-- <Textarea class="w-full" id="description" v-model="description" rows="10" placeholder="Scrum Description..." /> -->
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
            <Button :label="isSubmitting ? 'Submitting...' : 'Update'" severity="primary" type="submit" :disabled="isSubmitting" />
        </form>
    </Dialog>
</template>

<style scoped>
/* Add any custom styles here */
.participants {
    width: 40%;
}
.description {
    width: 60%;
    display: block; /* Ensures the element behaves like a block for truncation */
    overflow: hidden; /* Hides overflowing content */
    white-space: nowrap; /* Prevents text wrapping */
    text-overflow: ellipsis; /* Adds "..." to indicate truncated content */
    line-height: 1.5; /* Adjusts the line height for better readability */
}
.table-st {
    border: inherit;
    border-radius: 10px;
    overflow: hidden;
}
.table-st thead tr {
    background: #ededed;
}
.title {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    /* font-weight: 500; */
}
.title p {
    margin: 0;
}
.perticipants {
    margin: 8px 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.participants p {
    font-size: 18px;
}
.details {
    padding: 16px;
    border: 1px solid #ededed;
    border-radius: 8px;
}
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
