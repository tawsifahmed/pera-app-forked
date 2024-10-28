<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { onMounted, reactive, ref, watch } from 'vue';
import accessPermission from '~/composables/usePermission';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import { useCompanyStore } from '~/store/company';
import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore();
// companies.getCompany();
const { companyList, totalProjects } = storeToRefs(useActiveCompanyStore());
const url = useRuntimeConfig();
const { getChartData, getTaskAssignModalData, getRoles, getTagsAssignModalData } = useCompanyStore();
const { chartProjectInfo, chartTaskInfo, chartClosedTaskInfo, users, rolesLists, tags } = storeToRefs(useCompanyStore());
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
            label: 'Total Tasks',
            data: chartTaskInfo,
            fill: false,
            backgroundColor: '#6366f1',
            borderColor: '#6366f1',
            tension: 0.4
        },
        {
            label: 'Closed Tasks',
            data: chartClosedTaskInfo,
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        }
    ]
});
const taskList = ref([]);

// const lineOptions = ref({
//     scales: {
//         x: {
//             title: {
//                 display: true,
//                 text: 'X Axis Title'
//             }
//         },
//         y: {
//             title: {
//                 display: true,
//                 text: 'Y Axis Title'
//             }
//         }
//     }
// });

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
        console.log('hasUserCompany =>', hasUserCompany.value);
        if (hasUserCompany.value === null || hasUserCompany.value?.length == 0) {
            visibleCreateCompany.value = true;
        } else {
            visibleCreateCompany.value = false;
        }

        console.log('visibleCreateCompany =>', visibleCreateCompany.value);
    }
};

onMounted(() => {
    getRoles();
    getTaskAssignModalData();
    getTagsAssignModalData();
    getChartData();
    checkUser();
    // ProductService.getProductsSmall().then((data) => (products.value = data));
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const applyLightTheme = () => {
    lineOptions.value = {
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
                },
                title: {
                    display: true,
                    text: 'Projects'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                },
                title: {
                    display: true,
                    text: 'Numbers  of  Tasks'
                }
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
const filterDueDate = ref();
const isCalendarSelected = ref(false);

watch(selectedProject, (newVal) => {
    statuses.value = [{ name: 'All', id: '' }, ...(selectedProject.value?.statuses?.map((status) => ({ name: status.name, id: status.id })) || [])];
});

const selectedStatus = ref();

const projectId = ref();
const sta = ref();
const enD = ref();

const filterTasks = async () => {
    projectId.value = selectedProject.value ? selectedProject.value.id : '';
    sta.value = selectedStatus.value ? selectedStatus.value.id : '';
    enD.value = filterDueDate.value;
    console.log('sta', sta.value);
    fetchTasks(projectId.value, sta.value, enD.value);
};

const selectFilterDate = (newDate) => {
    isCalendarSelected.value = true;
    const date = new Date(newDate);
    filterDueDate.value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    filterTasks();
};

const handleDateDelete = () => {
    isCalendarSelected.value = false;
    filterDueDate.value = '';
    enD.value = '';
    filterTasks();
};

const handleFilterReset = () => {
    if(selectedProject.value || filterStatus.value || filterDueDate.value) {
        selectedProject.value = '';
        filterStatus.value = '';
        filterDueDate.value = '';
        projectId.value = '';
        sta.value = '';
        selectedStatus.value = '';
        isCalendarSelected.value = false;
        filterTasks();
    }else{
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

const fetchTasks = async (projectId = '', status = '', dueDate = '') => {
    console.log('status', status);
    // return
    try {
        const token = useCookie('token');
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/tasks/list?due_date=${dueDate}&status=${status}&project_id=${projectId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        taskList.value = data.value.data;
        console.log('Task list: ', data.value.data);
    } catch (e) {
        console.log(e);
    }
};
fetchTasks();

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
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink to="/companies" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Company</span>
                        <!-- <pre>{{companyList.length}}</pre> -->
                        <div class="text-900 font-medium text-xl">{{ companyList ? companyList.length : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-microsoft text-blue-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <!-- <span class="text-green-500 font-medium">24 new </span> -->
                <!-- <span class="text-500">since last visit</span> -->
            </div>
        </div>

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

        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readEmployee" to="/employees" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Employees</span>
                        <div class="text-900 font-medium text-xl" style="visibility: visible">{{ users.length }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user text-purple-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Employees</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user text-purple-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <!-- <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span> -->
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readRole" to="/roles" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Roles</span>
                        <div class="text-900 font-medium text-xl">{{ rolesLists ? rolesLists.length : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-red-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user-edit text-red-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Roles</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-red-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-user-edit text-red-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <!-- <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span> -->
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <NuxtLink v-if="readTags" to="/tags" class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Tags</span>
                        <div class="text-900 font-medium text-xl">{{ tags ? tags.length : '0' }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-green-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-tags text-green-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Tags</span>
                        <div class="text-900 font-medium text-xl role-hide">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-green-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-tags text-green-500 text-xl"></i>
                    </div>
                </NuxtLink>
                <!-- <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span> -->
            </div>
        </div>
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
                <!-- <pre>selectedProject =>{{ selectedProject }}</pre>
                <pre>statuses =>{{ statuses }}</pre>
                <pre>userI =>{{ projectId }}</pre>
                <pre>selectedStatus =>{{ selectedStatus }}</pre> -->
                <div class="flex gap-2 align-items-center flex-wrap" style="padding: 10px;">
                    <h5 class="mb-2">Tasks</h5>
                    <!-- Filter -->
                    <div class="flex gap-2 flex-wrap justify-content-end filter-container">
                        <Dropdown @change="filterTasks()" :key="statusDropdownKey"
                        filter filterPlaceholder="Search Projects" resetFilterOnHide v-model="selectedProject" :options="totalProjects"
                            optionLabel="name" placeholder="Select Project" class="w-full md:w-12rem mb-2" />
                        <Dropdown @change="filterTasks()" v-model="selectedStatus" :options="statuses"
                            :disabled="!selectedProject" optionLabel="name" placeholder="Select Status"
                            class="w-full md:w-12rem mb-2" />
                        <div class="mb-2 relative w-full md:w-12rem">
                            <Calendar @date-select="selectFilterDate($event)" showClear v-model="filterDueDate"
                                placeholder="Select Date" class="w-full md:w-12rem" />
                            <p v-if="isCalendarSelected" @click="handleDateDelete"
                                class="pi pi-times end-cross absolute cursor-pointer"></p>
                        </div>
                        <Button @click="handleFilterReset" label="Reset" class="mb-2" severity="secondary" />
                    </div>
                </div>
                <div class="task-container">
                    <div v-if="taskList.length > 0" class="">
                        <div v-for="task in taskList" :key="task" @click="() => handleTaskClick(task)"
                            class="task-card">
                            <!-- <pre>{{ task }}</pre> -->
                            <div class="title-group">
                                <div v-tooltip.left="{ value: `Status: ${task.status_name}` }" :class="`status`" :style="`background-color: ${task?.status_color};`"></div>
                                <p class="title line-clamp-1" style="font-weight: 600">{{ task?.name }}</p>
                                <div class=""
                                    style="background-color: #00000040; height: 5px; width: 5px; border-radius: 15px">
                                </div>
                                <p>{{ task?.project_name }}</p>
                            </div>
                            <div class="">
                                <p class="" style="font-size: 12px">Due: {{ task.due_date ? dateFormatter(task?.due_date) : 'Not Set' }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-black text-lg text-center">No Tasks found!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5>Overview</h5>
                <Chart type="line" :data="lineData" :options="lineOptions" />
            </div>

            <!-- <div class="card">
                <div class="flex align-items-center justify-content-between mb-4">
                    <h5>Notifications</h5>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
                        <Menu ref="menu1" :popup="true" :model="items"></Menu>
                    </div>
                </div>

                <span class="block text-600 font-medium mb-3">TODAY</span>
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-dollar text-xl text-blue-500"></i>
                        </div>
                        <span class="text-900 line-height-3"
                            >Richard Jones
                            <span class="text-700">has purchased a blue t-shirt for <span class="text-blue-500">79$</span></span>
                        </span>
                    </li>
                    <li class="flex align-items-center py-2">
                        <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-download text-xl text-orange-500"></i>
                        </div>
                        <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-blue-500 font-medium">2500$</span> has been initiated.</span>
                    </li>
                </ul>

                <span class="block text-600 font-medium mb-3">YESTERDAY</span>
                <ul class="p-0 m-0 list-none">
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-dollar text-xl text-blue-500"></i>
                        </div>
                        <span class="text-900 line-height-3"
                            >Keyser Wick
                            <span class="text-700">has purchased a black jacket for <span class="text-blue-500">59$</span></span>
                        </span>
                    </li>
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-question text-xl text-pink-500"></i>
                        </div>
                        <span class="text-900 line-height-3"
                            >Jane Davis
                            <span class="text-700">has posted a new questions about your product.</span>
                        </span>
                    </li>
                </ul>
            </div> -->

            <!-- <div
                class="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="border-radius: 1rem; background: linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1c80cf 47.88%, #ffffff 100.01%)"
            >
                <div>
                    <div class="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
                    <div class="text-white font-medium text-5xl">Try PrimeBlocks</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <a href="https://www.primefaces.org/primeblocks-vue" class="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised"> Get Started </a>
                </div>
            </div> -->
        </div>
        <div v-if="visibleCreateCompany">
            <CreateCompany />
        </div>
    </div>
</template>

<style scoped>
.filter-container {
    padding: 0 10px;
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
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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
</style>
