<template>
    <div class="w-full">
        <div class="flex justify-content-center">
            <IconField iconPosition="left" style="width: 50%">
                <InputIcon class="pi pi-search text-xl"> </InputIcon>
                <InputText id="searchField" class="w-full" v-model="searchText" placeholder="Search..." size="large" />
            </IconField>
        </div>
        <br />
        <div class="result-wrapper">
            <div v-if="taskLoading" class="flex justify-content-center align-items-center" style="height: 22rem">
                <i class="pi pi-spin pi-spinner" style="font-size: 2.25rem"></i>
            </div>
            <div v-else-if="tasksResult.length > 0 || projectsResult.length > 0 || spacesResult.length > 0" class="result-container">
                <Card v-if="tasksResult.length > 0" class="h-full">
                    <template class="result-title" #title>Tasks</template>
                    <template #content>
                        <div class="task-container">
                            <div>
                                <div v-for="task in tasksResult" :key="task" class="task-card">
                                    <div class="title-group flex justify-content-start align-items-center gap-2">
                                        <div :class="`staskstatus`" :style="`background-color: ${task.task_status_color};`"></div>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">{{task.task_name}}</p>
                                    </div>
                                    <div>
                                        <i>
                                            <p style="font-size: 12px"><strong>Project:</strong> {{task?.project_name}}</p></i
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
                <br />
                <Card v-if="projectsResult.length > 0" class="h-full">
                    <template class="result-title" #title>Projects</template>
                    <template #content>
                        <div class="project-container">
                            <div>
                                <div v-for="project in projectsResult" :key="project" class="task-card">
                                    <div class="title-group flex justify-content-start gap-2 align-items-center">
                                        <span class="pi pi-bars"></span>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">{{project.project_name}}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="w-full flex justify-content-center">
                                <Button v-if="currentPage < totalPages" @click="loadMoreTasks('hide-loader')" :loading="loadMoreLoading" label="Load More" severity="secondary" />
                            </div> -->
                        </div>
                    </template>
                </Card>
                <br />
                <Card v-if="spacesResult.length > 0" class="h-full">
                    <template class="result-title" #title>Spaces</template>
                    <template #content>
                        <div class="space-container">
                            <div>
                                <div v-for="space in spacesResult" :key="space" class="task-card">
                                    <span class="title-group flex justify-content-start gap-2 align-items-center">
                                        <div id="dynamic-div" :style="`background-color: ${space?.space_color}; width: 30px;`" class="flex font-semibold justify-content-center rounded py-1 px-2 w-fit text-white">{{space?.space_name.charAt(0).toUpperCase()}}</div>

                                        <p class="stitle line-clamp-1" style="font-weight: 600">{{space.space_name}}</p>
                                    </span>
                                </div>
                            </div>
                            <!-- <div class="w-full flex justify-content-center">
                                <Button v-if="currentPage < totalPages" @click="loadMoreTasks('hide-loader')" :loading="loadMoreLoading" label="Load More" severity="secondary" />
                            </div> -->
                        </div>
                    </template>
                </Card>
            </div>
            <div v-else class="flex justify-content-center">
                <i :style="hasResult === 'no' ? 'display: block;' : 'display: none;'"> Nothing found </i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue';
const url = useRuntimeConfig();

const searchText = ref('');

const tasksResult = ref([]);
const projectsResult = ref([]);
const spacesResult = ref([]);
const hasResult = ref('not_typing');
const noResultFound = ref(false);

const typedText = ref('');

watch(searchText, (val) => {
    const trimmedVal = val.trim();
    if (trimmedVal && trimmedVal.length >= 2) {
        fetchResult(trimmedVal);
    } if(trimmedVal === '') {
        hasResult.value = 'not_typing';
        tasksResult.value = [];
        projectsResult.value = [];
        spacesResult.value = [];
    }
});

// const insertSearch = () => {
//     typedText.value = searchText.value;
//     typedText.value = typedText.value.trim();
//     if(typedText.value !== '' && typedText.value.length >= 2){
//         fetchResult(typedText.value);
//     }
//         // hasResult.value = 'no';
// }

const taskLoading = ref(false); // Add loading state

const fetchResult = async (input) => {
    // const limit = 15;
    // if (!hideLoading.value) {
    //     taskLoading.value = true;
    // }
    // console.log('status', status);
    taskLoading.value = true;
    try {
        const token = useCookie('token');
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/search?search=${input}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        console.log('Data: ', data);
        if (data.value.data?.tasks) {
            tasksResult.value = data.value.data.tasks;
            hasResult.value = 'yes';
        }
        if (data.value.data?.projects) {
            projectsResult.value = data.value.data.projects;
            hasResult.value = 'yes';
        }
        if (data.value.data?.spaces) {
            spacesResult.value = data.value.data.spaces;
            hasResult.value = 'yes';
        }

        if(data.value.data?.tasks.length === 0 && data.value.data?.projects.length === 0 && data.value.data?.spaces.length === 0){
            hasResult.value = 'no';
        }

        // Update taskList only if data is valid and total pages are available
        // if (data.value && data.value.data && data.value.counts?.total_tasks) {
        //     totalPages.value = Math.ceil(data.value.counts.total_tasks / limit); // Calculate total pages
        //     taskList.value = page === 1 ? data.value.data : [...taskList.value, ...data.value.data]; // Concat for subsequent pages
        //     loadMoreLoading.value = false; // Reset loading flag after fetch
        // } else {
        //     taskList.value = []; // Clear taskList if no data or pagination info
        //     loadMoreLoading.value = false; // Reset loading flag after fetch
        // }

        // console.log('Task list: ', taskList.value);
    } catch (e) {
        console.log(e);
        // loadMoreLoading.value = false; // Reset loading flag after fetch
    } finally {
        taskLoading.value = false; // Reset loading flag after fetch
    }
};

onMounted(() => {
    let inputSearch = document.getElementById('searchField');
    nextTick(() => {
        inputSearch.focus();
    });
});
</script>

<style lang="scss">
.result-wrapper {
    height: auto;
    min-height: 15rem;
}
.task-container {
    max-height: 23rem;
    overflow-y: auto;
    padding: 0px 8px 0px 1px;
}

.project-container {
    max-height: 10rem;
    overflow-y: auto;
    padding: 0px 8px 0px 1px;
}

.space-container {
    max-height: 8rem;
    overflow-y: auto;
    padding: 0px 8px 0px 1px;
}

.staskstatus {
    height: 12px;
    width: 12px;
    border-radius: 25px;
    background: #000;
}

.stitle {
    margin: auto 0;
    max-width: 300px;
    font-size: 0.9rem;
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

.result-title {
    font-size: 1rem !important;
}
</style>
