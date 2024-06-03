<script setup>
definePageMeta({
    middleware: 'auth',
    layout: false
});
const { sharedtask } = useRoute().params;
const taskData = ref();
const handleFetch = async () => {
    const { data, pending, error } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/shared/${sharedtask}`);
    console.log(data, pending, error);
    taskData.value = data.value.data;
};
handleFetch();
</script>

<template>
    <div class="grid p-4 mx-auto justify-content-center">
        <div class="col-12 lg:col-7">
            <div>
                <!-- <pre>{{ taskData }}</pre> -->
                <!-- <pre>{{assignees}}</pre> -->
                <h5 class="">Task: {{ taskData?.name }}</h5>

                <div class="task-wrapper card">
                    <div class="task-det">
                        <div class="mt-2 task-detail ml-2">
                            <div class="flex justify-content-between flex-wrap align-items-center">
                                <div class="col-12 lg:col-6 p-0">
                                    <div class="flex gap-2 mb-3">
                                        <div class="flex gap-2 align-items-center">
                                            <span class="pi pi-user"></span>
                                            <p class="text-nowrap font-bold">Assignee:</p>
                                        </div>
                                        <div class="flex flex-wrap gap-2">
                                            <div v-for="assigne in taskData?.assignee" :key="assigne">
                                                <p class="employee">{{ assigne.name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 mb-3">
                                        <div class="flex gap-2 align-items-center">
                                            <span class="pi pi-calendar"></span>
                                            <p class="text-nowrap font-bold">Due Date:</p>
                                        </div>
                                        <p class="">{{ taskData?.due_date.split(' ')[0] }}</p>
                                    </div>
                                </div>
                                <div class="col-12 lg:col-6 p-0">
                                    <div class="flex gap-2 mb-3">
                                        <div class="flex gap-2 align-items-center">
                                            <span class="pi pi-flag"></span>
                                            <p class="text-nowrap font-bold">Status:</p>
                                        </div>
                                        <p class="">{{ taskData?.status_name }}</p>
                                    </div>
                                    <div class="flex gap-2 mb-3">
                                        <div class="flex gap-2 align-items-center">
                                            <span class="pi pi-stopwatch"></span>
                                            <p class="text-nowrap font-bold">Task Duration:</p>
                                        </div>
                                        <p class="">{{ taskData?.total_duration }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 mb-3" style="width: 100%">
                                <div class="flex gap-2 align-items-center">
                                    <span class="pi pi-tags"></span>
                                    <p class="text-nowrap font-bold">Tags:</p>
                                </div>
                                <div class="flex gap-2 flex-wrap">
                                    <p v-for="tag in taskData?.tags" :key="tag" class="employee">{{ tag.name }}</p>
                                </div>
                            </div>
                            <div class="field mt-3 flex flex-column">
                                <div class="flex justify-content-start gap-2 align-items-center mb-1 task-detail-property">
                                    <span class="pi pi-sliders-h"></span>
                                    <p class="text-nowrap font-bold">Description:</p>
                                </div>
                                <p class="">{{ taskData?.description }}</p>
                            </div>
                        </div>

                        <!-- tab for details, sub task  -->
                        <TabView class="mt-3">
                            <TabPanel class="file-upload" header="Detail">
                                <p class="m-0">Attachments: {{ taskData?.attachments?.length || 0 }}</p>
                                <div class="my-3 attach-sec flex align-items-center justify-content-start gap-2" style="overflow-x: scroll">
                                    <div v-if="taskData?.attachments?.length == 0" class="">
                                        <p class="text-[#000000]">No Attachment</p>
                                    </div>
                                    <div
                                        v-for="(item, index) in taskData?.attachments"
                                        :key="item"
                                        target="_blank"
                                        class="card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative"
                                        style="background-color: #f7fafc"
                                    >
                                        <a target="_blank" class="attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-4 relative" :href="`http://188.166.212.40/pera/public${item?.file}`">
                                            <div class="pi pi-file text-6xl attach-icon"></div>
                                            <div class="attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3">
                                                <!-- <div class="text-xs">{{ setFileUrl(item?.file) }}</div>
                                                <div class="text-xs">{{ setDateFormat(item?.created_at) }}</div> -->
                                                Attacthment {{ index + 1 }}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel :header="`Sub Tasks ${taskData?.sub_task?.length ? taskData?.sub_task?.length : 0}`">
                                <TreeTable class="tree-table" :value="taskData?.sub_task" :lazy="true" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
                                    <template #empty>
                                        <p class="text-center">No Data found...</p>
                                    </template>
                                    <Column field="name" header="Name" expander :style="{ width: '30%' }"> </Column>
                                    <Column field="assignee" header="Assignee" :style="{ width: '20%' }"></Column>
                                    <Column field="dueDateValue" header="Due Date" :style="{ width: '12.5%' }"></Column>
                                    <Column field="priority" header="Priority" :style="{ width: '8%' }"></Column>
                                    <!-- <Column field="action" header="Action">
                                        <template #body="slotProps">
                                            <div class="action-dropdown">
                                                <Button style="width: 30px; height: 30px; border-radius: 50%" icon="pi pi-ellipsis-v" class="action-dropdown-toggle" />
                                                <div class="action-dropdown-content">
                                                    <Button icon="pi pi-plus" class="mr-2 ac-btn" severity="success" @click="emit('openCreateSpace', slotProps.node.key, 'sub-task')" rounded />
                                                    <Button icon="pi pi-pencil" class="mr-2 ac-btn" severity="success" @click="emit('handleTaskEdit', slotProps.node)" rounded />
                                                    <Button icon="pi pi-cog" class="mr-2 ac-btn" severity="info" @click="emit('handleTaskDetailView', slotProps.node)" rounded />
                                                    <Button icon="pi pi-trash" class="ac-btn" severity="warning" rounded @click="emit('confirmDeleteTask', slotProps.node.key)" />
                                                </div>
                                            </div>
                                        </template>
                                    </Column> -->
                                </TreeTable>
                            </TabPanel>
                            <TabPanel :header="`Bounce`">
                                <div class="card">
                                    <div class="flex justify-content-start align-items-center task-detail-wrapper">
                                        <div class="flex justify-content-start gap-2 align-items-center bounce-detail-property">
                                            <span class="pi pi-flag"></span>
                                            <p class="text-nowrap">Bounce Status:</p>
                                        </div>
                                        <Dropdown @change="changeBounceStatusData(vModelBncStatus)" v-model="vModelBncStatus" :options="bounceStatus" optionLabel="is_bounce" placeholder="Select Status" style="width: 146.41px" />
                                    </div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-12 lg:col-5">
            <div>
                <h5 class="cmc">Activity</h5>
                <div class="comment-wrapper card">
                    <div class="comments">
                        <div class="my-2 text-surface-800">
                            <Button @click="showActivitiy" label="↓  Show More" v-if="showActivitiyBtn" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                        </div>
                        <div v-if="activityDiv">
                            <ul v-for="act in taskActivity" :key="act" style="margin-left: -15px; margin-top: -6px">
                                <li v-html="act.title" style="font-size: smaller"></li>
                            </ul>
                            <div class="my-2 text-surface-800">
                                <Button @click="hideActivity" label="↑ Hide" class="py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns" />
                            </div>
                        </div>
                        <Card class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                            <template class="commentator-name" #title>
                                <div class="flex justify-content-start align-items-center">
                                    <Avatar :label="val.commentator_name.charAt()" class="mr-2 capitalize" size="small" style="background-color: gray; color: #ededed; border-radius: 50%" />
                                    <p class="text-lg">{{ val.commentator_name }}</p>
                                </div>
                            </template>
                            <template #content>
                                <div v-if="setFileUrl(val?.file)" class="flex justify-content-end">
                                    <a :href="val?.file" target="_blank" class="bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file" style="background-color: #f7fafc">
                                        <div class="pi pi-file attach-icon"></div>
                                        <div class="attach-detail flex flex-column justify-content-center align-items-center">
                                            <div class="text-xs">{{ setFileUrl(val?.file) }}</div>
                                        </div>
                                    </a>
                                </div>
                                <p class="m-0 ml-1">
                                    {{ val?.comment ? val?.comment : '' }}
                                </p>
                                <i style="line-height: 0" class="pb-1 float-right">{{ formattedTime(val.time) }}</i>
                            </template>
                        </Card>
                    </div>
                    <form @submit.prevent="handleTaskComment" class="comment-add">
                        <div class="text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-2 relative" v-if="commentFile">
                            <div>
                                <span class="pi pi-file-import mr-2"></span> <span>{{ commenFileName }}</span>
                            </div>
                            <div @click="handleCloseCommetFile" class="close-comment">
                                <i class="pi pi-times"></i>
                            </div>
                        </div>
                        <div class="comment-form">
                            <InputText v-model="taskCommentInput" type="text" placeholder="Add comment" required />
                            <input class="hidden" type="file" ref="fileInput" @change="handleFileChange" />
                            <Button icon="pi pi-cloud-upload" @click="handleFileUpload" aria-label="Filter" />
                            <Button type="submit" icon="pi pi-plus" label="Add" :loading="btnLoading" />
                        </div>
                    </form>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss">
.task-detail-wrapper {
    width: 100%;
}

.task-detail-property {
    width: 20%;
}

.bounce-detail-property {
    width: 22%;
}

.cmc {
    text-wrap: nowrap;
}

.comment-wrapper {
    overflow: hidden;
    height: 70vh;
    padding: 5px !important;
    background-color: #f7fafc;
}

.comments {
    overflow-y: auto;
    height: 80%;
    padding: 5px;
}

.comment-add {
    padding: 20px;
    margin-bottom: 15px;
    border-top: 1px solid #e2e8f0;
    padding: 10px;
    width: 100%;
}

.formgroup-inline {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.float-right {
    float: right;
    font-size: 12px;
    color: gray;
}

.task-edit {
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
}

.p-fileupload-buttonbar:last-child {
    display: none !important;
}

.tree-table {
    font-size: 11.5px !important;
    width: 100% !important;
}

.task-wrapper {
    overflow: hidden;
    height: 100%;
    padding: 5px !important;
}

.task-det {
    overflow-y: auto;
    height: 100%;
    padding: 5px;
}

.attach-sec {
    overflow-x: scroll;
    white-space: nowrap; /* Prevents wrapping of child elements */
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}

.attach-sec::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
    height: 10px; /* Height of the scrollbar */
}

.attach-sec::-webkit-scrollbar-track {
    background: #f1f1f1; /* Track color */
}

.attach-sec::-webkit-scrollbar-thumb {
    background: #888; /* Thumb color */
}

.attach-sec::-webkit-scrollbar-thumb:hover {
    background: #555; /* Hover state color */
}

.attachment-wrapper {
    margin-bottom: 0px !important;
    color: #444;
}

.action-dropdown {
    position: relative;
    display: inline-block;
}

.action-dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px 5px;
}

.action-dropdown-content button {
    width: 100%;
    text-align: left;
    padding: 10px;
    border: none;
}

.action-dropdown:hover .action-dropdown-content {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 10px 5px;
    top: -10px;
    left: -158px;
    border-radius: 5px;
}

.ac-btn {
    height: 30px !important;
    width: 30px !important;
    font-size: 11px !important;

    .pi {
        font-size: 11px !important;
    }
}

input[type='file'] {
    width: 300px;
    max-width: 100%;
    color: #444;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
    border: 0.5px solid #b8b8b8;
}

input[type='file']::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #10b981;
    padding: 7px 15px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
    background: #059669;
}

.input-fields {
    .p-inputtext {
        padding: 0.35rem 0.75rem !important;
    }
    .p-multiselect .p-multiselect-label {
        padding: 0.35rem 0.75rem !important;
    }
}

.text-nowrap {
    text-wrap: nowrap;
}

.p-dropdown-item-label {
    font-size: 13px !important;
}

.p-card .p-card-body {
    gap: 0.5rem !important;
    padding: 0.5rem 0.75rem !important;
}

.activity-btns {
    color: #444 !important;
    font-size: 11px;
    background-color: rgb(102, 102, 102);
}

.activity-btns:hover {
    background-color: #63ceaa !important;
    color: white !important;
}

.attach-detail {
    border-top: 1px solid #e2e8f0;
    font-weight: 600;
}
.comment-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.comment-form input {
    width: 75%;
}
.close-comment {
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
}
.comment-file {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
}
.clock-wrapper {
    display: flex;
    align-items: center;
    gap: 7px;
}
.clock-btn {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}
.clock-btn:hover {
    box-shadow: none;
}
.stop {
    color: white;
    font-size: 8px;
    margin-top: 1px;
    margin-left: 1px;
}
.start {
    color: white;
    font-size: 10px;
    margin-left: 2px;
}

.attch-w {
    visibility: hidden;
}
.employee {
    border: 1px solid rgba(167, 167, 167, 0.486);
    border-radius: 5px;
    padding: 2px 5px;
}
</style>
