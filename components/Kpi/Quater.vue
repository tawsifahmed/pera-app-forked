<script setup>
const url = useRuntimeConfig();
const toast = useToast();
const quaterList = ref([]);
const editingRows = ref([]);
const modal = ref(false);
// Create Data
const quarterCreate = ref({
    name: '',
    start_date: '',
    end_date: '',
    year: ''
});
const errorMsg = ref('');
const init = async () => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/list`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        quaterList.value = data.value.data;
    }
};
const formatDate = (data) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};
const onRowEditSave = async (event) => {
    console.log(event.newData);
    const updateData = new FormData();
    console.log(event.newData);
    updateData.append('name', event.newData.name);
    if (typeof event.newData.year == 'string') {
        updateData.append('year', `${event.newData.year}-01-01`);
    } else {
        updateData.append('year', formatDate(event.newData.year));
    }

    if (typeof event.newData.start_date == 'string') {
        updateData.append('start_date', `2024-${event.newData.start_date}`);
    } else {
        updateData.append('start_date', formatDate(event.newData.start_date));
    }

    if (typeof event.newData.end_date == 'string') {
        updateData.append('end_date', `2024-${event.newData.end_date}`);
    } else {
        updateData.append('end_date', formatDate(event.newData.end_date));
    }
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/update/${event.newData.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: updateData
    });
    if (data) {
        init();
        return toast.add({ severity: 'success', summary: 'Updated', detail: 'Successfully updated', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to update', group: 'br', life: 3000 });
    }
    // let { newData, index } = event;
    // this.products[index] = newData;
};

const onDelete = async (item) => {
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/delete/${item.id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data) {
        init();
        return toast.add({ severity: 'success', summary: 'Deleted', detail: 'Successfully deleted', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to delete', group: 'br', life: 3000 });
    }
};

const closeCreateModal = (event) => {
    console.log(event);
};
const handleKpiCreation = async () => {
    console.log(Object.keys(quarterCreate.value));
    const formData = new FormData();
    if (quarterCreate.value.name != '') {
        formData.append('name', quarterCreate.value.name);
    } else if (quarterCreate.value.start_date != '') {
        formData.append('start_date', formatDate(quarterCreate.value.start_date));
    } else if (quarterCreate.value.end_date != '') {
        formData.append('end_date', formatDate(quarterCreate.value.end_date));
    } else if (quarterCreate.value.year != '') {
        formData.append('year', formatDate(quarterCreate.value.year));
    } else {
        errorMsg.value = 'Please fill the required fields';
        return;
    }
    const token = useCookie('token');
    const { data, pending } = await useFetch(`${url.public.apiUrl}/kpi-quater/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });
    if (data) {
        init();
        modal.value = false;
        quarterCreate.value = {
            name: '',
            start_date: '',
            end_date: '',
            year: ''
        };
        errorMsg.value = null;
        return toast.add({ severity: 'success', summary: 'Updated', detail: 'Successfully Created', group: 'br', life: 3000 });
    } else {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to update', group: 'br', life: 3000 });
    }
};
onMounted(() => {
    init();
});
</script>
<template>
    <div class="grid">
        <div class="col-12">
            <div class="flex justify-content-end my-4">
                <Button @click="() => (modal = true)" label="Create" icon="pi pi-check" class="" />
            </div>
            <div class="card">
                <DataTable
                    v-model:editingRows="editingRows"
                    :value="quaterList"
                    editMode="row"
                    dataKey="id"
                    @row-edit-save="onRowEditSave"
                    :pt="{
                        table: { style: 'min-width: 50rem' },
                        column: {
                            bodycell: ({ state }) => ({
                                style: state['d_editing'] && 'padding-top: 0.75rem; padding-bottom: 0.75rem'
                            })
                        }
                    }"
                    :dt="{
                        table: { style: 'min-width: 50rem' },
                        column: {
                            bodycell: ({ state }) => ({
                                style: state['d_editing'] && 'padding-top: 0.75rem; padding-bottom: 0.75rem'
                            })
                        }
                    }"
                >
                    <Column field="name" header="Quarter" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="start_date" header="Start Date" style="width: 20%">
                        <template #editor="{ data, field }">
                            <Calendar v-model="data[field]" dateFormat="mm-dd" fluid :value="data[field]" :manualInputs="false" />
                        </template>
                    </Column>
                    <Column field="end_date" header="End Date" style="width: 20%">
                        <template #editor="{ data, field }">
                            <Calendar v-model="data[field]" dateFormat="mm-dd" fluid :manualInputs="false" />
                            <!-- <InputText v-model="data[field]" fluid /> -->
                        </template>
                    </Column>

                    <Column field="year" header="Year" style="width: 20%">
                        <template #body="{ data }">
                            {{ data.year }}
                        </template>
                        <template #editor="{ data, field }">
                            <!-- <InputNumber v-model="data[field]" fluid /> -->
                            <Calendar v-model="data[field]" view="year" dateFormat="yy" fluid :manualInputs="false" />
                        </template>
                    </Column>
                    <Column header="Action" style="width: 1%; min-width: 1rem; padding: 0" bodyStyle="text-align:start">
                        <template #body="{ data }">
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text" @click="onDelete(data)" />
                        </template>
                    </Column>
                    <Column header="" :rowEditor="true" style="width: 1%; min-width: 6rem; padding: 0 auto" bodyStyle="text-align:start"></Column>
                </DataTable>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="modal" modal header="Create Quarter" :style="{ width: '40rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <!-- <TagsCreateTag @closeCreateModal="closeCreateModal($event)" /> -->
        <form class="" action="" @submit.prevent="handleKpiCreation">
            <div class="card">
                <div class="kpi-form grid">
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Quarter Name:</label>
                            <InputText type="text" v-model="quarterCreate.name" placeholder="Name" min="0" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Start Date:</label>
                            <Calendar v-model="quarterCreate.start_date" dateFormat="mm-dd" fluid :manualInputs="false" class="w-full" required />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">End Date:</label>
                            <Calendar v-model="quarterCreate.end_date" dateFormat="mm-dd" fluid :manualInputs="false" class="w-full" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="user-selection w-full">
                            <label for="icondisplay" class="font-bold block mb-2">Year:</label>
                            <Calendar v-model="quarterCreate.year" view="year" dateFormat="yy" fluid :manualInputs="false" class="w-full" />
                        </div>
                    </div>
                    <p class="text-center w-full text-red-500">{{ errorMsg }}</p>
                    <div class="col-12 mx-auto flex justify-content-center">
                        <Button label="Create" severity="info" type="submit" />
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
</template>
<style scoped></style>
