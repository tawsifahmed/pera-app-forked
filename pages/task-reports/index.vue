<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

const startDate = ref('');
const endDate = ref('');
const loading = ref(false);

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
    const formattedStartDate = dateFormatter(startDate.value);
    const formattedEndDate = dateFormatter(endDate.value);

    console.log('start Date: ', startDate.value, 'end Date: ', endDate.value);

    const params = {
        startDate: startDate.value,
        endDate: endDate.value
    };
    const { data, error } = await useFetch('http://188.166.212.40/pera/public/api/v1/tasks/report-download', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
        loading.value = false;
        return;
    } else {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', group: 'br', life: 3000 });
    }
};
</script>
<template>
    <div class="card">
        <div class="d-flex mr-2">
            <h5 class="mb-1">Task Summery Reports</h5>
        </div>
        <Toolbar class="border-0 px-0">
            <template #start>
                <div class="flex gap-2">
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

<style lang="scss" scoped></style>
