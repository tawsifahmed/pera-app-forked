<script setup>
const url = useRuntimeConfig();
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const startDate = ref('');
const endDate = ref('');
const employee = ref('');
const employees = ref([]);
const loading = ref(false);
const toast = useToast();

// Date Formatter
const dateFormatter = (data) => {
    const dateStr = data;
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const handleReportDownload = async () => {
    const token = useCookie('token');
    loading.value = true;
    if (employee.value == '') {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please Select Employee', group: 'br', life: 3000 });
    }
    if (startDate.value == '' && endDate.value !== '') {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please Select Start Date', group: 'br', life: 3000 });
    }
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);

    console.log(employee.value);
    const { data, error } = await useFetch(
        `${url.public.apiUrl}/tasks/task-report-download?user_id=${employee.value.id}${startDate.value !== '' ? `&start_date=${formattedStartDate}` : ''}${endDate.value !== '' ? `&end_date=${formattedEndDate}` : ''}`,
        {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        }
    );
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
        return (loading.value = false);
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', group: 'br', life: 3000 });
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
});
</script>
<template>
    <div class="card">
        <!-- <pre>{{ usersListStore }}</pre> -->
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">User Wise Reports</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <div class="flex gap-2 flex-wrap">
                    <div class="user-selection w-full md:w-14rem w-full">
                        <label class="font-bold block mb-2">User:</label>
                        <div class="flex justify-content-center">
                            <Dropdown v-model="employee" editable :options="employees" optionLabel="name" placeholder="Select/Search User" class="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div class="flex-auto">
                        <label for="icondisplay" class="font-bold block mb-2">From: </label>
                        <Calendar v-model="startDate" showIcon iconDisplay="input" inputId="icondisplay" />
                    </div>
                    <div class="flex-auto">
                        <label for="icondisplay" class="font-bold block mb-2"> To: </label>
                        <Calendar v-model="endDate" showIcon iconDisplay="input" inputId="icondisplay" />
                    </div>
                </div>
            </template>

            <template #end>
                <Button @click="handleReportDownload" class="w-full" label="Download" :loading="loading" />
            </template>
        </Toolbar>
    </div>
</template>

<style lang="scss" scoped>
.user-selection {
    display: flex;
    flex-direction: column;
    // gap: 2px;
}
</style>
