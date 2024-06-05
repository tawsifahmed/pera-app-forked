<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

const startDate = ref('');
const endDate = ref('');
const loading = ref(false);
const handleReportDownload = async () => {
    const token = useCookie('token');
    loading.value = true;
    console.log('start Date: ', startDate.value, 'end Date: ', endDate.value);

    // const params = {
    //     startDate: startDate.value,
    //     endDate: endDate.value
    // };
    // const response = await useFetch('/api/reports/download', {
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Bearer ${token.value}`
    //     }
    // });
    // if (response.status === 200) {
    //     window.location.href = response.data;
    // } else {
    //     console.log(response);
    // }
    loading.value = false;
};
</script>
<template>
    <div class="card">
        <div class="d-flex mr-2">
            <h5 class="mb-1">Task Wise Reports</h5>
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
                <Button @click="handleReportDownload" class="w-full" label="Download" />
            </template>
        </Toolbar>
    </div>
</template>

<style lang="scss" scoped></style>
