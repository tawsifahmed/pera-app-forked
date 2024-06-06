<script setup>
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
const handleReportDownload = async () => {
    const token = useCookie('token');
    loading.value = true;
    const { data, error } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/report-download`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    if (data.value.code == 200) {
        const link = document.createElement('a');
        link.href = data.value.download_path;
        link.target = '_blank';
        link.click();
    } else {
        toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', life: 3000 });
    }
    console.log('start Date: ', startDate.value, 'end Date: ', endDate.value, 'employee: ', employee.value);

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

const init = async () => {
    const token = useCookie('token');
    const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
        $fetch('http://188.166.212.40/pera/public/api/v1/users/list', {
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
                <Button @click="handleReportDownload" class="w-full" label="Download" />
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
