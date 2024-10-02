<template>
    <div class="card mx-auto" style="max-width: 55rem">
        <div action="" class="grid" style="gap: 10px">
            <div class="w-full col-12">
                <div class="flex gap-2 align-items-end justify-content-center">
                    <div class="" style="width: 42.5%">
                        <label for="icondisplay" class="font-bold block mb-2">Employee</label>
                        <p class="user-name">{{ userProfile?.data?.name }}</p>
                    </div>
                    <div style="width: 42.5%">
                        <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                        <Dropdown class="w-full" v-model="selectedQuarter" :options="quater" optionLabel="name"
                            placeholder="Select Quarter" />
                    </div>
                    <Button type="submit" label="Load" @click="loadSubmission" class="" style="width: 15%"
                        :loading="loading" />
                </div>
            </div>
            <!-- Dynamic section -->
            <!-- <pre>{{submittedIds}}</pre>
            <br>
            <pre>files{{submittedFiles}}</pre>
            <br>
            <pre>files lipped{{fileCheck}}</pre>
            <br>
            <pre>{{submittedFilesId}}</pre> -->
            <p v-if="deadlineInfo" class="deadline-info mb-0 flex w-full justify-content-end"><span
                    class="font-bold mr-2">Deadline: </span>{{ deadlineInfo?.data[0]?.sub_section_data[0]?.deadline ?
                        deadlineInfo?.data[0]?.sub_section_data[0]?.deadline : 'Not Set'}}</p>
            <form v-if="employeeLoaded" @submit.prevent="handleSubmission">
                <div v-for="(section, index) in dynamicSection" :key="index" class="card relative">
                    <div class="w-full col-12 grid">
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Section</label>
                            <p v-tooltip.top="{ value: section.section_name }" class="user-name">{{ section.section_name
                                }}</p>
                            <!-- <Dropdown v-model="dynamicSection.section_id" :options="sections" optionLabel="name" placeholder="Select Section" class="w-full" /> -->
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section</label>
                            <p v-tooltip.top="{ value: section.subSection_name }" class="user-name">{{
                                section.subSection_name }}</p>
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                            <Dropdown v-model="selectedQuarter" disabled :options="quater" optionLabel="name"
                                placeholder="Select Quarter" class="w-full" />
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2"> Achieved Mark (Target: {{
                                section?.target_mark || 0 }}{{ section?.mark_type == 1 ? '%' : '' || 0 }}) </label>
                            <InputText v-model="submittedMarks[index]" placeholder="Input Mark" class="w-full" />
                        </div>
                        <div class="col-12">
                            <label for="icondisplay" class="font-bold block mb-2">Comment</label>
                            <Textarea v-tooltip.top="{ value: section.comment }" v-model="submittedComments[index]"
                                id="description" rows="3" cols="20" placeholder="Write comment" class="w-full" />
                        </div>
                        <div class="col-12">
                            <label for="icondisplay" class="font-bold block mb-2">File</label>
                            <div class="flex gap-2 align-items-center upload-wrapper w-full">
                                <div v-if="submittedFiles[index] && submittedFiles[index].length" class="w-full">
                                    <div v-for="(file, fileIndex) in submittedFiles[index]" :key="fileIndex"
                                        class="text-sm file-name font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-items-center rounded relative">
                                        <div>
                                            <span class="pi pi-file-import mr-2"></span> <span>{{ file.name }}</span>
                                        </div>
                                        <div @click="handleCloseCommentFile(section, index, fileIndex)"
                                            class="close-comment">
                                            <i class="pi pi-times"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <!-- Unique file input for each section, hidden from view -->
                                    <input type="file" class="hidden" :id="`submittedFiles${index}`"
                                        @change="handleFileChange(section, index, $event)" />
                                    <!-- Button that triggers file input click for the specific index -->
                                    <Button icon="pi pi-cloud-upload"
                                        :disabled="submittedFiles[index] && submittedFiles[index].length > 0"
                                        label="Upload" @click="handleFileUp(index)" aria-label="Filter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 my-3">
                    <label for="icondisplay" class="font-bold block mb-2">Employee Self Remarks</label>
                    <Textarea v-tooltip.top="{ value: selfRemarks }" v-model="selfRemarks" id="description" rows="5"
                        cols="20" placeholder="Write your self remarks" class="w-full" />
                </div>

                <div class="gap-2 flex justify-content-center w-full">
                    <Button :disabled="deadlineInfo?.isDeadlineMiss" label="Submit" class="bg-green-500 border-none" type="submit" :loading="loading1" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/user';

const { getUserData } = useUserStore();
const { userProfile } = storeToRefs(useUserStore());
const toast = useToast();
const url = useRuntimeConfig();
const loading = ref(false);
const loading1 = ref(false);
const { quater } = defineProps(['quater']);
const deadlineInfo = ref(null);

// const employee = ref({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id});
// employee.value = ({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id});
// employee.value =  ({ id: userProfile.value.data.id, name: userProfile.value.data.name });

const employeeLoaded = ref(false);
console.log('Employee Value', employeeLoaded.value);

const selectedQuarter = ref('');
const dynamicSection = ref([]);

const submittedIds = ref([]);
const submittedMarks = ref([]);
const submittedComments = ref([]);
const submittedFiles = ref([]);
const submittedFilesId = ref([]);
const selfRemarks = ref('');
const fileCheck = ref([]);

watch(selectedQuarter, (value) => {
    if (value) {
        employeeLoaded.value = false;
        dynamicSection.value = [];
        submittedIds.value = [];
        submittedMarks.value = [];
        submittedComments.value = [];
        submittedFiles.value = [];
        submittedFilesId.value = [];
        fileCheck.value = [];
        deadlineInfo.value = null;
    }
});

// Handle file input change for each section
const handleFileChange = (section, index, event) => {
    const files = Array.from(event.target.files);
    if (!submittedFiles.value[index]) {
        // Initialize array for this section if it doesn't exist
        submittedFiles.value[index] = [];
    }
    // Add selected files to the section's file array
    submittedFiles.value[index].push(...files);
    if (!submittedFilesId.value.includes(section.subsection_id)) {
        submittedFilesId.value.push(section.subsection_id);
    }
};

// Handle button click to open the specific file input field
const handleFileUp = (index) => {
    const fileInput = document.getElementById(`submittedFiles${index}`);
    if (fileInput) {
        fileInput.click();
    }
};

// Handle removing the uploaded file
const handleCloseCommentFile = (section, sectionIndex, fileIndex) => {
    // Remove the file from the specific section's array of files
    if (submittedFiles.value[sectionIndex]) {
        submittedFiles.value[sectionIndex].splice(fileIndex, 1);
        submittedFilesId.value = submittedFilesId.value.filter((id) => id !== section.subsection_id);
    }
};

const loadSubmission = async () => {
    if (submittedIds.value.length > 0 || submittedMarks.value.length > 0 || submittedComments.value.length > 0 || submittedFiles.value.length > 0) {
        submittedIds.value = [];
        submittedMarks.value = [];
        submittedComments.value = [];
        submittedFiles.value = [];
    }

    loading.value = true;
    if (selectedQuarter.value === '') {
        loading.value = false;
        return toast.add({ severity: 'warn', summary: 'Failed', detail: 'Please select quarter', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
    // loading.value = true;

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/show/${userProfile?.value?.data?.id}?quater_id=${selectedQuarter.value.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    console.log('Data Value', data.value);
    console.log('error Value', error.value);
    if (data.value) {
        if (data.value?.data?.length !== 0) {
            loading.value = false;
            employeeLoaded.value = true;
            deadlineInfo.value = data.value;
            data.value?.data.forEach((item) => {
                console.log('data gotcha')
                console.log('Item Value', item);
                item.sub_section_data.forEach((subItem) => {
                    dynamicSection.value.push({
                        section_name: item.section.name,
                        section_id: item.section.id,
                        subSection_name: subItem.sub_section.title,
                        subsection_id: subItem.id,
                        target_mark: subItem.target_mark,
                        mark_type: subItem.mark_type,
                        quater_id: subItem.quater_id,
                        achive_mark: subItem.achive_mark,
                        comment: subItem.comment
                    });
                    submittedIds.value.push(subItem.id);
                    submittedMarks.value.push(subItem.achive_mark);
                    submittedComments.value.push(subItem.comment);
                    submittedFiles.value.push(null);
                });
                console.log('Submitted Ids', submittedIds.value);
                console.log('Submitted submittedMarks', submittedMarks.value);
                console.log('Submitted submittedComments', submittedComments.value);
                console.log('Submitted submittedFiles', submittedFiles.value);
            });
           
            console.log('Submission Value', data?.value);
        }else{
            loading.value = false;
            employeeLoaded.value = false;
            return toast.add({ severity: 'error', summary: 'Failed', detail: 'No data found', group: 'br', life: 3000 });
        }
    }
    else {
        console.log('erorr gotcha');
        employeeLoaded.value = false;
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Internal Server Error', detail: 'Failed to show report', group: 'br', life: 3000 });
    }
};

const handleSubmission = async () => {
    loading1.value = true;

    const token = useCookie('token');
    const formData = new FormData();
    dynamicSection.value.forEach((section, index) => {
        console.log('SubIDSValue', submittedIds.value[index]);
        formData.append('id[]', submittedIds.value[index]);
        formData.append('achive_mark[]', submittedMarks.value[index]);
        formData.append('comment[]', submittedComments.value[index]);
        // formData.append('files[]', submittedFiles.value[index]);
        // console.log('Submitted Files', submittedFiles.value[index]);
        if (submittedFiles.value[index]) {
            submittedFiles.value[index].forEach((file) => {
                console.log('File Value', file);
                fileCheck.value.push(file);
                // formData.append('files[]', file);
            });
        }
    });
    fileCheck.value.forEach((file) => {
        console.log('File Value', file);
        formData.append('files[]', file);
    });
    // Data.append('files[]', fileCheck.value);

    submittedFilesId.value.forEach((fileId) => {
        formData.append('files_id[]', fileId);
    });
    formData.append('self_remarks', selfRemarks.value);
    // formData.append('files_id[]', submittedFilesId.value);
    // console.log('Submitted Files ID', submittedFilesId.value);

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/update`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data.value?.code === 200) {
        loading1.value = false;
        employeeLoaded.value = false;
        selectedQuarter.value = '';
        submittedIds.value = [];
        submittedMarks.value = [];
        submittedComments.value = [];
        submittedFiles.value = [];
        submittedFilesId.value = [];
        selfRemarks.value = '';
        fileCheck.value = [];
        deadlineInfo.value = null;
        toast.add({ severity: 'success', summary: 'Success', detail: 'Submission successful!', group: 'br', life: 3000 });
        return;
    } else {
        loading1.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to submit', group: 'br', life: 3000 });
    }
};

getUserData();
</script>

<style lang="scss" scoped>
.user-name {
    font-size: 1rem;
    color: #334155;
    background: #e2e8f0;
    padding: 0.38rem 0.75rem;
    border: 1px solid #cbd5e1;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
    appearance: none;
    border-radius: 6px;
    outline-color: transparent;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: default;
}

.comment-add {
    padding: 20px;
    margin-bottom: 15px;
    border-top: 1px solid #e2e8f0;
    padding: 10px;
    width: 100%;
}

.close-comment {
    position: absolute;
    top: 9px;
    right: 10px;
    cursor: pointer;
}

.comment-form input {
    width: 75%;
}

.attch-w {
    visibility: hidden;
}

.upload-wrapper {
    flex-direction: row-reverse;
    justify-content: flex-end;
}

.deadline-info {
    float: right;
}


.pointer-none{
    pointer-events: none;
    cursor: not-allowed;
}
</style>
