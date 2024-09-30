<template>
    <div class="card mx-auto" style="max-width: 50rem">
        <div action="" class="grid" style="gap: 10px">
            <div class="w-full col-12">
                <pre>{{ employee }}</pre>

                <div class="flex gap-2 align-items-end justify-content-center">
                    <div class="" style="width: 42.5%;">
                        <label for="icondisplay" class="font-bold block mb-2">Employee</label>
                        <p class="user-name">{{ userProfile?.data?.name }}</p>
                    </div>
                    <div style="width: 42.5%;">
                        <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                        <Dropdown class="w-full" v-model="selectedQuarter" :options="quater" optionLabel="name"
                            placeholder="Select Quarter" />
                    </div>
                    <Button type="submit" label="Load" @click="loadSubmission" class="" style="width: 15%;" :loading="loading" />
                </div>
            </div>
            <!-- Dynamic section -->
            <pre>{{submittedFiles}}</pre>
            <form class="" v-if="employeeLoaded">
                <div v-for="(section, index) in dynamicSection" :key="index" class="card relative">

                    <div class="w-full col-12 grid">
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Section</label>
                            <p v-tooltip.top="{ value: section.section_name }" class="user-name">{{ section.section_name }}</p>
                            <!-- <Dropdown v-model="dynamicSection.section_id" :options="sections" optionLabel="name" placeholder="Select Section" class="w-full" /> -->
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section</label>
                            <p v-tooltip.top="{ value: section.subSection_name }" class="user-name">{{ section.subSection_name }}</p>
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                            <Dropdown v-model="selectedQuarter" disabled :options="quater" optionLabel="name"
                                placeholder="Select Quarter" class="w-full" />
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">
                                Achieved Mark (Target: {{ section?.target_mark || 0 }}{{ section?.mark_type == 1 ? '%' : '' || 0 }})
                            </label>
                            <InputText v-model="submittedMarks[index]" placeholder="Input Mark"
                                class="w-full" />
                        </div>
                        <div class="col-12">
                            <label for="icondisplay" class="font-bold block mb-2">Comment</label>
                            <InputText v-tooltip.top="{ value: section.comment }" v-model="submittedComments[index]" placeholder="Write comment"
                                class="w-full" />
                        </div>
                        <div class="col-12">
                            <label for="icondisplay" class="font-bold block mb-2">File</label>
                            <div v-if="submittedFiles[index] && submittedFiles[index].length" class="mb-2">
                                <div v-for="(file, fileIndex) in submittedFiles[index]" :key="fileIndex" class="text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-items-center mb-1 relative">
                                    <div>
                                        <span class="pi pi-file-import mr-2"></span> <span>{{ file.name }}</span>
                                    </div>
                                    <div @click="handleCloseCommentFile(index, fileIndex)" class="close-comment">
                                        <i class="pi pi-times"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <!-- Unique file input for each section, hidden from view -->
                                <input type="file" class="hidden" :id="`submittedFiles${index}`" @change="handleFileChange(index, $event)" multiple />
                                <!-- Button that triggers file input click for the specific index -->
                                <Button icon="pi pi-cloud-upload" @click="handleFileUp(index)" aria-label="Filter" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="gap-2 flex justify-content-center w-full">
                    <Button label="Submit" class="bg-green-500 border-none" type="submit" @click="handleSubmission" :loading="loading1" />

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

// const employee = ref({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id});
// employee.value = ({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id}); 
// employee.value =  ({ id: userProfile.value.data.id, name: userProfile.value.data.name });

const employeeLoaded = ref(false);

const selectedQuarter = ref('');
const dynamicSection = ref([]);

const submittedIds = ref([]);
const submittedMarks = ref([]);
const submittedComments = ref([]);
const submittedFiles = ref([]);

watch(selectedQuarter, (value) => {
    if (value) {
        employeeLoaded.value = false;
        dynamicSection.value = [];
        submittedIds.value = [];
        submittedMarks.value = [];
        submittedComments.value = [];
        submittedFiles.value = [];
    }
});

// Handle file input change for each section
const handleFileChange = (index, event) => {
    const files = Array.from(event.target.files);
    if (!submittedFiles.value[index]) {
        // Initialize array for this section if it doesn't exist
        submittedFiles.value[index] = [];
    }
    // Add selected files to the section's file array
    submittedFiles.value[index].push(...files);
};

// Handle button click to open the specific file input field
const handleFileUp = (index) => {
    const fileInput = document.getElementById(`submittedFiles${index}`);
    if (fileInput) {
        fileInput.click();
    }
};

// Handle removing the uploaded file
const handleCloseCommentFile = (sectionIndex, fileIndex) => {
    // Remove the file from the specific section's array of files
    if (submittedFiles.value[sectionIndex]) {
        submittedFiles.value[sectionIndex].splice(fileIndex, 1);
    }
};




const loadSubmission = async () => {
    loading.value = true;
    if (selectedQuarter.value === '') {
        loading.value = false;
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please select quarter', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
    // loading.value = true;
    employeeLoaded.value = true;

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/show/${userProfile?.value?.data?.id}?quater_id=${selectedQuarter.value.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    if(data.value){
        loading.value = false;
        data.value.data.forEach((item) => {
            console.log('Item Value', item);
            item.sub_section_data.forEach((subItem) => {
                dynamicSection.value.push({
                    section_name: item.section.name,
                    section_id: item.section.id,
                    subSection_name: subItem.sub_section.title,
                    subsection_id: subItem.sub_section.id,
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
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Failed to show report', group: 'br', life: 3000 });
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
        formData.append('files[]', submittedFiles.value[index]);
        console.log('Submitted Files', submittedFiles.value[index]);
        // if (submittedFiles.value[index]) {
        //     submittedFiles.value[index].forEach((file) => {
        //         console.log('File Value', file);
        //         formData.append('files[]', file);
        //     });
        // }
    });

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/update`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        body: formData
    });

    if (data?.value?.code === 200) {
        loading1.value = false;
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
    top: 7px;
    right: 10px;
    cursor: pointer;
}

.comment-form input {
    width: 75%;
}

.attch-w {
    visibility: hidden;
}
</style>