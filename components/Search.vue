<script setup>
import { nextTick, onMounted } from 'vue';
import { watch, ref } from 'vue';
import { debounce } from 'lodash';
const url = useRuntimeConfig();

const emit = defineEmits(['closeSearch']);

const searchText = ref('');
const tasksResult = ref([]);
const projectsResult = ref([]);
const spacesResult = ref([]);
const hasResult = ref('not_typing');

const debouncedFetchResult = debounce((input) => {
    if (input.trim().length >= 2) {
        fetchResult(input);
    }
}, 300);

watch(searchText, (val) => {
    const trimmedVal = val.trim();
    console.log('Trimmed: ', trimmedVal.length);
    if (trimmedVal === '') {
        hasResult.value = 'not_typing';
        tasksResult.value = [];
        projectsResult.value = [];
        spacesResult.value = [];
    } else {
        debouncedFetchResult(trimmedVal);
    }
});

const taskLoading = ref(false);

const fetchResult = async (input) => {
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

        if (data.value.data?.tasks.length === 0 && data.value.data?.projects.length === 0 && data.value.data?.spaces.length === 0) {
            hasResult.value = 'no';
        }
    } catch (e) {
        console.log(e);
    } finally {
        taskLoading.value = false;
    }
};

const handleRedirect = (type, vals) => {
    if (type === 'task') {
        navigateTo({ path: `/companies/${vals.company_id}/spaces/${vals.space_id}/projects/${vals.project_id}`, query: { task_key: vals.task_id } });
        emit('closeSearch', true);
    }

    if (type === 'project') {
        navigateTo({ path: `/companies/${vals.company_id}/spaces/${vals.space_id}/projects/${vals.project_id}` });
        emit('closeSearch', true);
    }

    if (type === 'space') {
        navigateTo({ path: `/companies/${vals.company_id}/spaces/${vals.space_id}` });
        emit('closeSearch', true);
    }
};

onMounted(() => {
    let inputSearch = document.getElementById('searchField');
    nextTick(() => {
        inputSearch.focus();
    });
});
</script>

<template>
    <div class="w-full search-body">
        <div class="flex justify-content-center">
            <IconField style="width: 50%">
                <InputIcon :class="`${taskLoading ? `pi-spin pi-spinner text-2xl spinnner` : 'pi-search text-xl'} pi  font-me`"> </InputIcon>
                <InputText id="searchField" class="w-full" v-model="searchText" placeholder="Keywords..." size="large" aria-autocomplete="none" />
            </IconField>
        </div>
        <div class="search-title">
            <p class="">tasks</p>
            <p class="">projects</p>
            <p class="">spaces</p>
        </div>
        <div class="result-wrapper">
            <div class="search-task-container">
                <div v-if="tasksResult.length > 0">
                    <div v-for="task in tasksResult" :key="task" @click="handleRedirect('task', task)" class="task-card">
                        <div class="title-group flex justify-content-start align-items-center gap-2">
                            <div :class="`staskstatus`" :style="`background-color: ${task.task_status_color};`"></div>
                            <p class="stitle line-clamp-1" style="font-weight: 600">{{ task.task_name }}</p>
                        </div>
                        <div>
                            <i>
                                <p style="font-size: 12px"><strong>Project:</strong> {{ task?.project_name }}</p></i
                            >
                        </div>
                    </div>
                </div>
                <div v-else class="not-found" style="text-align: center">Tasks not found</div>
            </div>
            <div class="search-project-container">
                <div v-if="projectsResult?.length > 0">
                    <div v-for="project in projectsResult" :key="project" @click="handleRedirect('project', project)" class="task-card">
                        <div class="flex justify-content-start gap-2 align-items-center">
                            <span class="pi pi-bars"></span>
                            <p class="stitle line-clamp-1" style="font-weight: 600">{{ project.project_name }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="not-found" style="text-align: center">Projects not found</div>
            </div>
            <div class="search-space-container">
                <div v-if="spacesResult?.length > 0">
                    <div v-for="space in spacesResult" :key="space" @click="handleRedirect('space', space)" class="task-card">
                        <span class="flex justify-content-start gap-2 align-items-center">
                            <div id="dynamic-div" :style="`background-color: ${space?.space_color}; width: 30px;`" class="flex font-semibold justify-content-center rounded py-1 px-2 w-fit text-white">
                                {{ space?.space_name.charAt(0).toUpperCase() }}
                            </div>

                            <p class="stitle line-clamp-1" style="font-weight: 600">{{ space.space_name }}</p>
                        </span>
                    </div>
                </div>
                <div v-else class="not-found" style="text-align: center">Spaces not found</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.search-body {
    height: 90%;
    .search-title {
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        text-align: center;
        border-bottom: 1px solid #ededed;
    }
    .search-title p {
        margin: 0;
        font-weight: 500;
        color: #727272;
        text-transform: uppercase;
    }
    .result-wrapper {
        height: 100%;
        width: 100% !important;
        min-height: 5.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 0px;
    }
    .search-task-container {
        padding: 10px;
        overflow-y: auto;
        height: 100%;
    }

    .search-project-container {
        padding: 10px;
        overflow-y: auto;
        // border-left: 1px solid #ededed;
        // border-right: 1px solid #ededed;
        height: 100%;
    }

    .search-space-container {
        padding: 10px;
        overflow-y: auto;
        height: 100%;
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
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        cursor: pointer;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        height: 45px !important;
    }

    .task-card:hover {
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }

    .result-title {
        font-size: 1rem !important;
    }

    .spinnner {
        top: 42% !important;
    }
}
</style>
