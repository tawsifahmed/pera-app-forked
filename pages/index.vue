<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { onMounted, reactive, ref, watch } from 'vue';
import accessPermission from '~/composables/usePermission';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import { useCompanyStore } from '~/store/company';
import { useActiveCompanyStore } from '~/store/workCompany';
import Chart from 'primevue/chart';
const companies = useActiveCompanyStore();

// companies.getCompany();
const { totalCompanies, totalProjects } = storeToRefs(useActiveCompanyStore());
const url = useRuntimeConfig();
const { getChartData, getTaskAssignModalData, getRoles, getTagsAssignModalData } = useCompanyStore();
const { chartProjectInfo, inProgressCnt, chartClosedTaskInfo, totalDashboardProjects, completedTasksChartData, inProgressTasksChartData, unAssignedTasksChartData, users, rolesLists, tags } = storeToRefs(useCompanyStore());
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { userCompany } = storeToRefs(useAuthStore());

const readEmployee = ref(accessPermission('read_user'));
const readRole = ref(accessPermission('read_role'));
const readTags = ref(accessPermission('read_tags'));
const readTask = ref(accessPermission('read_task'));

const createCompanyP = ref(accessPermission('create_company'));

definePageMeta({
    middleware: 'auth',
    layout: 'default'
});

const { isDarkTheme } = useLayout();
const products = ref(null);

const lineData = ref({
    labels: chartProjectInfo,
    datasets: [
        {
            label: 'In Progress',
            data: inProgressCnt,
            fill: false,
            backgroundColor: '#6366f1',
            borderColor: '#6366f1',
            tension: 0.4
        },
        {
            label: 'Completed',
            data: chartClosedTaskInfo,
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        }
    ]
});

onMounted(() => {
    pieChartOptions.value = setPieChartOptions();

    watch(
        [completedTasksChartData, inProgressTasksChartData, unAssignedTasksChartData],
        ([cc, ic, uc]) => {
            if (cc && ic && uc) {
                pieChartData.value = setPieChartData(cc, ic, uc);
            }
        },
        { immediate: true }
    );
});

const pieChartData = ref();
const pieChartOptions = ref();

const setPieChartData = (cc, ic, uc) => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['Completed', 'In Progress', 'Unassigned'],
        datasets: [
            {
                data: [cc, ic, uc],
                backgroundColor: ['#33bd7c', '#0ea5e9', '#475569'],
                hoverBackgroundColor: ['#1a8251', '#0087c3', '#2c3644']
            }
        ]
    };
};

const setPieChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
};

const taskList = ref([]);

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);

const visibleCreateCompany = ref(false);

const hasUserCompany = ref(null);

const checkUser = () => {
    if (process.client) {
        hasUserCompany.value = JSON.parse(localStorage.getItem('userCompany'));
        // console.log('hasUserCompany =>', hasUserCompany.value);
        if (hasUserCompany.value === null || hasUserCompany.value?.length == 0) {
            visibleCreateCompany.value = true;
        } else {
            visibleCreateCompany.value = false;
        }

        // console.log('visibleCreateCompany =>', visibleCreateCompany.value);
    }
};

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const applyLightTheme = () => {
    lineOptions.value = {
        // indexAxis: 'y',
        // maintainAspectRatio: false,
        // aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
                // title: {
                //     display: true,
                //     text: 'Projects'
                // }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
                // title: {
                //     display: true,
                //     text: 'Numbers  of  Tasks'
                // }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

const selectedProject = ref();
const statuses = ref();

const filterStatus = ref();
const dateFilter = ref();
const isCalendarStartSelected = ref(false);
const isCalendarSelected = ref(false);
const taskLoading = ref(false); // Add loading state

watch(selectedProject, (newVal) => {
    statuses.value = [{ name: 'All', id: '' }, ...(selectedProject.value?.statuses?.map((status) => ({ name: status.name, id: status.id })) || [])];
});

const selectedStatus = ref();

const projectId = ref();
const sta = ref();
const startD = ref();
const enD = ref();
const crrPage = ref(1);
let currentPage = ref(1); // New variable for current page

const filterTasks = async () => {
    projectId.value = selectedProject.value ? selectedProject.value.id : '';
    sta.value = selectedStatus.value ? selectedStatus.value.id : '';
    startD.value = dateFilter.value[0] ? dateFormatter(dateFilter.value[0]) : '';
    enD.value = dateFilter.value[1] ? dateFormatter(dateFilter.value[1]) : '';
    // return console.log(dateFilter.value);
    if (isLoadMoreClicked) {
        currentPage.value++;
    } else {
        currentPage.value = 1;
    }
    crrPage.value = currentPage.value;
    totalPages.value = 0;
    fetchTasks(projectId.value, sta.value, startD.value, enD.value, crrPage.value);
    isLoadMoreClicked = false;
};

const handleDateFilter = () => {
    // console.log(filterStartDate);
    // isCalendarStartSelected.value = true;
    // const date = new Date(newDate);
    // filterStartDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    filterTasks();
};
const selectFilterDate = (newDate) => {
    isCalendarSelected.value = true;
    const date = new Date(newDate);
    filterDueDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    filterTasks();
};

const handleStartDateDelete = () => {
    isCalendarStartSelected.value = false;
    filterStartDate.value = '';
    enD.value = '';
    filterTasks();
};

const handleDateDelete = () => {
    isCalendarSelected.value = false;
    filterDueDate.value = '';
    enD.value = '';
    filterTasks();
};

const handleFilterReset = () => {
    if (selectedProject.value || filterStatus.value || dateFilter.value || currentPage.value > 1) {
        selectedProject.value = '';
        filterStatus.value = '';
        dateFilter.value = [];
        projectId.value = '';

        sta.value = '';
        selectedStatus.value = '';
        isCalendarSelected.value = false;
        isCalendarStartSelected.value = false;
        filterTasks();
    } else {
        return;
    }
};

const handleTaskClick = async (task) => {
    const companyId = localStorage.getItem('userCompany');
    console.log('Task click: ', task);
    await navigateTo({ path: `/companies/${companyId}/spaces/${task?.space_id}/projects/${task?.project_id}`, query: { task_key: task.id } });
};

// Date Formatter
const dateFormatter = (data) => {
    const dateStr = data;
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
};

const totalPages = ref(0);

const hideLoading = ref(false);
const loadMoreLoading = ref(false);
const loadMoreTasks = async (vl) => {
    if (vl === 'hide-loader') {
        hideLoading.value = true;
    }
    loadMoreLoading.value = true;
    currentPage.value++;
    await fetchTasks(projectId.value, sta.value, startD.value, enD.value, currentPage.value);
};

const fetchTasks = async (projectId = '', status = '', startDate = '', dueDate = '', page = 1) => {
    const limit = 30;
    if (!hideLoading.value) {
        taskLoading.value = true;
    }

    try {
        const token = useCookie('token');
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/tasks/list?start_due_date=${startDate}&end_due_date=${dueDate}&status=${status}&project_id=${projectId}&limit=${limit}&page=${page}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (data.value && data.value.data && data.value.counts?.total_tasks) {
            totalPages.value = Math.ceil(data.value.counts.total_tasks / limit);
            taskList.value = page === 1 ? data.value.data : [...taskList.value, ...data.value.data];
            loadMoreLoading.value = false;
        } else {
            taskList.value = [];
            loadMoreLoading.value = false;
        }
    } catch (e) {
        console.log(e);
        loadMoreLoading.value = false;
    } finally {
        taskLoading.value = false;
    }
};

let isLoadMoreClicked = false; // Flag to track 'see more' button click

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Check if near the bottom of the page and there are more pages
    if (scrollTop + clientHeight >= scrollHeight - 50 && currentPage.value < totalPages) {
        isLoadMoreClicked = true; // Set flag for next fetchTasks call
        filterTasks(); // Trigger fetch with incremented page
    }
});

fetchTasks();

onMounted(() => {
    getRoles();
    getTaskAssignModalData();
    getTagsAssignModalData();
    getChartData();
    checkUser();
    // ProductService.getProductsSmall().then((data) => (products.value = data));
});

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <!-- <pre>{{ totalProjects }}</pre> -->
    <div class="grid">
        <!-- <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink to="/companies" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Company</span>
                        <div class="text-900 font-medium text-xl">{{ totalCompanies ? totalCompanies : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-microsoft text-blue-500 text-xl"></i>
                    </div>
                </NuxtLink>
                 <span class="text-green-500 font-medium">24 new </span>
                 <span class="text-500">since last visit</span> 
            </div>
        </div> -->

        <!-- <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Spaces</span>
                        <div class="text-900 font-medium text-xl">21</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-folder-open text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Projects</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520 </span>
                <span class="text-500">newly registered</span>
            </div>
        </div> -->

        <!-- <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readEmployee" to="/employees" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Employees</span>
                        <div class="text-900 font-medium text-xl" style="visibility: visible">{{ users.length }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user text-purple-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Employees</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user text-purple-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div> -->

        <!-- <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readRole" to="/roles" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Roles</span>
                        <div class="text-900 font-medium text-xl">{{ rolesLists ? rolesLists.length : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-red-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user-edit text-red-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Roles</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-red-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user-edit text-red-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div> -->
        <!-- <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readTags" to="/tags" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Tags</span>
                        <div class="text-900 font-medium text-xl">{{ tags ? tags.length : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-green-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-tags text-green-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Tags</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-green-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-tags text-green-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div> -->

        <!-- 
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5>Recent Sales</h5>
                <DataTable :value="products" :rows="5" :paginator="true" responsiveLayout="scroll">
                    <Column style="width: 15%">
                        <template #header> Image </template>
<template #body="slotProps">
                            <img :src="'/demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50" class="shadow-2" />
                        </template>
</Column>
<Column field="name" header="Name" :sortable="true" style="width: 35%"></Column>
<Column field="price" header="Price" :sortable="true" style="width: 35%">
    <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.price) }}
                        </template>
</Column>
<Column style="width: 15%">
    <template #header> View </template>
    <template #body>
                            <Button icon="pi pi-search" type="button" class="p-button-text"></Button>
                        </template>
</Column>
</DataTable>
</div>
<div class="card">
    <div class="flex justify-content-between align-items-center mb-5">
        <h5>Best Selling Products</h5>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                @click="$refs.menu2.toggle($event)"></Button>
            <Menu ref="menu2" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-orange-500 h-full" style="width: 50%"></div>
                </div>
                <span class="text-orange-500 ml-3 font-medium">%50</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-cyan-500 h-full" style="width: 16%"></div>
                </div>
                <span class="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-pink-500 h-full" style="width: 67%"></div>
                </div>
                <span class="text-pink-500 ml-3 font-medium">%67</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                <div class="mt-1 text-600">Office</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-green-500 h-full" style="width: 35%"></div>
                </div>
                <span class="text-green-500 ml-3 font-medium">%35</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-purple-500 h-full" style="width: 75%"></div>
                </div>
                <span class="text-purple-500 ml-3 font-medium">%75</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                    <div class="bg-teal-500 h-full" style="width: 40%"></div>
                </div>
                <span class="text-teal-500 ml-3 font-medium">%40</span>
            </div>
        </li>
    </ul>
</div>
</div> -->
        <div class="col-12 xl:col-6" v-if="readTask">
            <div class="card h-full">
                <div class="flex gap-2 align-items-center flex-wrap md:flex-nowrap" style="padding-bottom: 10px">
                    <h5 class="mb-2">Tasks</h5>
                    <div class="flex gap-2 flex-wrap justify-content-end filter-container">
                        <Dropdown @change="filterTasks()" v-model="selectedProject" :options="totalProjects" filter resetFilterOnHide optionLabel="name" placeholder="Project" class="w-full md:w-10rem mb-2" />
                        <Dropdown @change="filterTasks()" v-model="selectedStatus" :options="statuses" :disabled="!selectedProject" optionLabel="name" placeholder="Status" class="w-full md:w-10rem mb-2" />
                        <div class="mb-2 relative w-full md:w-16rem">
                            <!-- <Calendar v-model="dates" selectionMode="range" :manualInput="false" placeholder="Select Date" /> -->
                            <Calendar @hide="handleDateFilter" dateFormat="dd/mm/yy" :manualInput="false" selectionMode="range" v-model="dateFilter" placeholder="Filter by Due Dates" class="w-full text-sm" />
                            <!-- <p v-if="isCalendarStartSelected" @click="handleStartDateDelete" class="pi pi-times end-cross absolute cursor-pointer"></p> -->
                        </div>
                        <!-- <div class="mb-2 relative w-full md:w-8rem">
                            <Calendar @date-select="selectFilterDate($event)" v-model="filterDueDate" placeholder="Due Date" class="w-full md:w-8rem" />
                            <p v-if="isCalendarSelected" @click="handleDateDelete" class="pi pi-times end-cross absolute cursor-pointer"></p>
                        </div> -->
                        <Button @click="handleFilterReset" label="Reset" class="mb-2" severity="secondary" />
                    </div>
                </div>

                <div class="task-container">
                    <div v-if="taskLoading" class="flex justify-content-center align-items-center" style="height: 22rem">
                        <i class="pi pi-spin pi-spinner" style="font-size: 2.25rem"></i>
                    </div>

                    <div v-else-if="taskList.length > 0">
                        <!-- Show task list when not loading and tasks are available -->
                        <div v-for="task in taskList" :key="task.id" @click="() => handleTaskClick(task)" class="task-card">
                            <div class="title-group">
                                <div v-tooltip.left="{ value: `Status: ${task.status_name}` }" :class="`status`" :style="`background-color: ${task?.status_color};`"></div>
                                <p class="title line-clamp-1" style="font-weight: 600">{{ task?.name }}</p>
                                <div style="background-color: #00000040; height: 5px; width: 5px; border-radius: 15px"></div>
                                <p class="title-project line-clamp-1">{{ task?.project_name }}</p>
                            </div>
                            <div>
                                <p style="font-size: 12px">Due: {{ task.due_date ? dateFormatter(task?.due_date) : 'Not Set' }}</p>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <!-- Show No Tasks Found when task list is empty -->
                        <p class="text-black text-lg text-center">No Tasks found!</p>
                    </div>

                    <div class="w-full flex justify-content-center">
                        <Button v-if="currentPage < totalPages" @click="loadMoreTasks('hide-loader')" :loading="loadMoreLoading" label="Load More" severity="secondary" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card h-full">
                <h5>Tasks Statistics</h5>
                <div class="w-full flex justify-content-center">
                    <Chart type="pie" :data="pieChartData" :options="pieChartOptions" class="w-full md:w-30rem" />
                </div>

                <!-- <Chart type="pie" :data="pieData" :options="pieOptions" /> -->
            </div>
        </div>
        <div class="col-12 h-full">
            <div class="card dashChart">
                <div class="flex justify-content-between align-items-start dash-inf">
                    <div class="flex align-items-center gap-3 dash-inf-left">
                        <h5 class="mb-0">Projects Overview</h5>
                        <Button class="nwrp" :label="`Total Projects: ${totalDashboardProjects}`" severity="secondary" />
                    </div>
                    <div class="flex gap-2 flex-wrap dash-inf-right">
                        <!-- {{ cM }} -->
                        <Button class="nwrp" :label="`In Progress: ${inProgressTasksChartData}`" severity="info" outlined />
                        <Button class="nwrp" :label="`Unassigned: ${unAssignedTasksChartData}`" severity="help" outlined />
                        <Button class="nwrp" :label="`Completed: ${completedTasksChartData}`" severity="contrast" outlined />
                    </div>
                </div>
                <div class="chartWrapper">
                    <div class="chartAreaWrapper">
                        <!-- <canvas id="chart" height="400" width="15000"></canvas> -->
                        <Chart type="bar" :data="lineData" :options="lineOptions" />
                    </div>
                </div>
                <!-- <div class="chart-container">
                  </div> -->
            </div>
        </div>

        <div v-if="visibleCreateCompany">
            <CreateCompany />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-container {
    padding: 0 10px;
    width: 100%;
}

.task-container {
    max-height: 25rem;
    overflow-y: auto;
    padding: 10px;
}

.task-card {
    border-radius: 5px;
    padding: 10px 10px;
    margin: 8px 0;
    // border: inherit;
    // box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}

.task-card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.status {
    height: 12px;
    width: 12px;
    border-radius: 25px;
    background: #000;
}

.title {
    margin: auto 0;
    max-width: 300px;
}

.title-project {
    margin: auto 0;

    max-width: 200px;
}

.title-group {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.pi-times {
    top: 30%;
    right: 3%;
    color: gray;
}

.pi-times:hover {
    color: rgb(27, 27, 27);
    font-weight: 500;
    animation: hover-animation 0.3s ease-in-out forwards;
}

@keyframes hover-animation {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.1);
    }
}

.role-hide {
    visibility: hidden;
}

.dashChart button {
    cursor: default !important;
}

.nwrp {
    text-wrap: nowrap;
}

.dash-inf {
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        .dash-inf-left {
            justify-content: space-between;
            margin-bottom: 1rem;
            width: 100%;
            @media (max-width: 500px) {
                flex-direction: column;
                align-items: start !important;
            }
        }
        .dash-inf-right {
            justify-content: flex-end;
            width: 100%;
            @media (max-width: 500px) {
                justify-content: center;
            }
        }
    }
}
</style>
