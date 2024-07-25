<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
const employees = ref([]);
const quater = ref([
    {
        name: 'Quarter 1',
        start_date: '2022-01-01',
        end_date: '2022-03-31'
    },
    {
        name: 'Quarter 2',
        start_date: '2022-04-01',
        end_date: '2022-06-31'
    },
    {
        name: 'Quarter 3',
        start_date: '2022-07-01',
        end_date: '2022-09-31'
    },
    {
        name: 'Quarter 4',
        start_date: '2022-10-01',
        end_date: '2022-12-31'
    }
]);
const loading = ref(false);
const toast = useToast();

const employee = ref('');
const members = ref([]);
const selectedQuarter = ref();
const pmMark = ref();
const teamBuilding = ref();
const hrMark = ref();

// Date Formatter
const dateFormatter = (data) => {
    const dateStr = data;
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const handleReportDownload = async (e) => {
    e.preventDefault();
    // Validation

    if (!employee.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Employee Not selected', group: 'br', life: 3000 });
    }
    if (members.value.length == 0) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please select team members', group: 'br', life: 3000 });
    }
    if (!selectedQuarter.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please select Quarter', group: 'br', life: 3000 });
    }
    if (!pmMark.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input Project Team Mark', group: 'br', life: 3000 });
    }
    if (!teamBuilding.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input Team building Mark', group: 'br', life: 3000 });
    }
    if (!hrMark.value) {
        return toast.add({ severity: 'error', summary: 'KPI Information', detail: 'Please input HR Mark', group: 'br', life: 3000 });
    }
    const token = useCookie('token');
    const membersList = members.value.map((member) => member.id);
    const kpiData = new FormData();
    kpiData.append('user_id', employee.value.id);
    kpiData.append('quater_start_date', selectedQuarter.value.start_date);
    kpiData.append('quater_end_date', selectedQuarter.value.end_date);
    kpiData.append('team_members', JSON.stringify(membersList));
    kpiData.append('project_team_mark', pmMark.value);
    kpiData.append('team_building', teamBuilding.value);
    kpiData.append('hr_mark', hrMark.value);
    // for (const pair of kpiData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    // }
    loading.value = true;
    const { data, error } = await useFetch(`https://188.166.212.40/pera/public/api/v1/kpi/report`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: kpiData
    });
    console.log(data);
    // if (data.value.code == 200) {
    //     const link = document.createElement('a');
    //     link.href = data.value.download_path;
    //     link.target = '_blank';
    //     link.click();
    //     return (loading.value = false);
    // } else {
    //     loading.value = false;
    //     return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to download', group: 'br', life: 3000 });
    // }
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
        <Toast position="bottom-right" group="br" />
        <div class="d-flex mr-2">
            <h5 class="mb-1">KPI Report</h5>
        </div>
        <form class="" action="" @submit.prevent="handleReportDownload">
            <h3 class="text-center my-4">KPI Report Generation form</h3>
            <div class="kpi-form grid">
                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label class="font-bold block mb-2">Employee:</label>
                        <div class="flex justify-content-center">
                            <Dropdown v-model="employee" :options="employees" optionLabel="name" placeholder="Select/Search User" class="w-full" />
                        </div>
                    </div>
                </div>
                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label class="font-bold block mb-2">Team Members:</label>
                        <div class="flex justify-content-center">
                            <MultiSelect v-model="members" :options="employees" optionLabel="name" filter placeholder="Select Members" :maxSelectedLabels="3" class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label for="icondisplay" class="font-bold block mb-2">Quarter:</label>
                        <Dropdown v-model="selectedQuarter" :options="quater" optionLabel="name" placeholder="Select Quarter" class="w-full" />
                    </div>
                </div>
                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label for="icondisplay" class="font-bold block mb-2">Project Team Mark:</label>
                        <InputText type="number" v-model="pmMark" placeholder="0-10" min="0" />
                    </div>
                </div>
                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label for="icondisplay" class="font-bold block mb-2">Team Building Mark:</label>
                        <InputText type="number" v-model="teamBuilding" placeholder="0-10" min="0" />
                    </div>
                </div>
                <div class="col-12 md:col-6">
                    <div class="user-selection w-full">
                        <label for="icondisplay" class="font-bold block mb-2">HR Mark:</label>
                        <InputText type="number" v-model="hrMark" placeholder="0-10" min="0" />
                    </div>
                </div>
                <div class="col-12 mx-auto flex justify-content-center">
                    <Button label="Generate KPI" severity="info" type="submit" />
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.kpi-form {
    max-width: 60rem;
    margin: auto;
    border: 1px solid #ededed;
    border-radius: 10px;
    padding: 2rem;
}
.user-selection {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
</style>
