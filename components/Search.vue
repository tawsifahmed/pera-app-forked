<template>
    <div class="w-full" >
        <div class="flex justify-content-center">
            <IconField iconPosition="left" style="width: 50%;">
                <InputIcon class="pi pi-search text-xl"> </InputIcon>
                <InputText id="searchField" class="w-full" v-model="searchText" placeholder="Search..." size="large"/>
            </IconField>
        </div>
        <br>
        <div class="result-wrapper">
            <div class="result-container">
                <Card class="h-full">
                    <template class="result-title" #title>Tasks</template>
                    <template #content>
                        <div class="task-container">
                            <div>
                                <div class="task-card">
                                    <div class="title-group flex justify-content-start align-items-center gap-2">
                                        <div :class="`staskstatus`" :style="`background-color: red;`"></div>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">task name</p>
                                    </div>
                                    <div>
                                        <i>
                                            <p style="font-size: 12px"><strong>Project:</strong>  '-- Not Set --'</p></i
                                        >
                                    </div>
                                </div>
                                <div class="task-card">
                                    <div class="title-group flex justify-content-start align-items-center gap-2">
                                        <div :class="`staskstatus`" :style="`background-color: red;`"></div>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">task name</p>
                                    </div>
                                    <div>
                                        <i>
                                            <p style="font-size: 12px"><strong>Project:</strong>  '-- Not Set --'</p></i
                                        >
                                    </div>
                                </div>
                                <div class="task-card">
                                    <div class="title-group flex justify-content-start align-items-center gap-2">
                                        <div :class="`staskstatus`" :style="`background-color: red;`"></div>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">task name</p>
                                    </div>
                                    <div>
                                        <i>
                                            <p style="font-size: 12px"><strong>Project:</strong>  '-- Not Set --'</p></i
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </template>
                </Card>
                <br>
                <Card class="h-full">
                    <template class="result-title" #title>Projects</template>
                    <template #content>
                        <div class="task-container">
                            <div>
                                <div class="task-card">
                                    <div class="title-group flex justify-content-start gap-2 align-items-center">
                                        <span class="pi pi-bars"></span>
                                        <p class="stitle line-clamp-1" style="font-weight: 600">Project name</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="w-full flex justify-content-center">
                                <Button v-if="currentPage < totalPages" @click="loadMoreTasks('hide-loader')" :loading="loadMoreLoading" label="Load More" severity="secondary" />
                            </div> -->
                        </div>
                    </template>
                </Card>
                <br>
                <Card class="h-full">
                    <template class="result-title" #title>Spaces</template>
                    <template #content>
                        <div class="task-container">
                            <div>
                                <div class="task-card">
                                    <span class="title-group flex justify-content-start gap-2 align-items-center">
                                        <div id="dynamic-div" :style="`background-color: orange; width: 30px;`" class="flex font-semibold justify-content-center rounded py-1 px-2 w-fit text-white"> S</div>

                                        <p class="stitle line-clamp-1" style="font-weight: 600">task name</p>
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
            <div class="flex justify-content-center">
                <i>
                    Nothing found
                </i>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue';

const searchText = ref('');

const tasksResult = ref([]);
const projectsResult = ref([]);
const spacesResult = ref([]);

onMounted(() => {
    let inputSearch = document.getElementById('searchField');
    nextTick(() => {
        inputSearch.focus();
    });
})
</script>

<style lang="scss">



.result-container{

}
.task-container {
    max-height: 25rem;
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

.result-title{
    font-size: 1rem !important;
}
</style>