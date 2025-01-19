<template>
    <div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2">Justification Type: </label>
            <div class="flex flex-wrap gap-2 mt-3 mb-3 text-sm">
                <div v-for="category in justifCategories" :key="category.key" class="flex align-items-center">
                    <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
                    <label :for="category.key" class="ml-2">{{ category.name }}</label>
                </div>
            </div>
        </div>
        <div class="field">
            <label for="description" class="block mb-2">Description: </label>
            <!-- <Textarea class="w-full" id="description" v-model="description" rows="10" placeholder="Scrum Description..." /> -->
            <!-- <Textarea v-model="description" rows="5" cols="30" /> -->
            <Editor v-model="description" editorStyle="height: 120px">
                <template v-slot:toolbar>
                    <span class="ql-formats flex justify-content-end mr-0">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                        <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
                        <span class="ql-formats">
                            <select class="ql-color"></select>
                            <select class="ql-background"></select>
                        </span>

                        <button class="ql-list" type="button" data-pc-section="list" value="ordered"></button>
                        <button class="ql-list" type="button" data-pc-section="list" value="bullet"></button>
                        <button class="ql-link" type="button" data-pc-section="link"></button>
                    </span>
                </template>
            </Editor>
        </div>
        <div class="flex flex-row align-items-end justify-content-end mt-3">
            <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
            <Button label="Save" icon="pi pi-check" text="" @click="submitJustification" :loading="loading" />
        </div>
    </div>
</template>

<script setup>
import Editor from 'primevue/editor';
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { getSingleProject, getTaskDetails } = useCompanyStore();
import { useClockStore } from '~/store/clock';
const { closeDeadlineShowModal } = useClockStore();
const url = useRuntimeConfig();
const { deadlineTaskId, deadlineProjectId, deadlineDueDate } = defineProps(['deadlineTaskId', 'deadlineProjectId', 'deadlineDueDate']);
const emit = defineEmits(['closeMissDeadlineModal']);
const toast = useToast();
const loading = ref(false);
const selectedCategory = ref('Missed');
const justifCategories = ref([
    { name: 'Missed', key: 'A' },
    { name: 'Extend', key: 'B' }
]);
const description = ref('');

const hideDialog = () => {
    emit('closeMissDeadlineModal', false);

};

const submitJustification = async () => {

    if (description.value === '' || description.value === null) {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Description is required',
            group: 'br',
            life: 3000
        });
        return;
    } else {
        loading.value = true;
        const token = useCookie('token');
        console.log('selectedCategory', selectedCategory.value);

        let sendEditDate;
        const selectedDate = new Date(deadlineDueDate);
        selectedDate.setDate(selectedDate.getDate() + 1);
        sendEditDate = selectedDate.toISOString();

        const { data, error, pending } = await useFetch(`${url.public.apiUrl}/tasks/update/${deadlineTaskId}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                id: deadlineTaskId,
                type: selectedCategory.value.toLowerCase(),
                reason: description,
                due_date: sendEditDate ? new Date(new Date(sendEditDate).getTime() - 18 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ') : null,
                project_id: deadlineProjectId
            }
        });
        console.log('data', data);
        if (error.value) {
            if (error.value.data.code === 400) {
                toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.value.data.message,
                    group: 'br',
                    life: 3000
                });
                loading.value = false;
            }
        }
        if (data.value) {
            if (data.value.code === 200) {
                loading.value = false;
                closeDeadlineShowModal();
                getSingleProject(deadlineProjectId);
                toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Deadline Justification submitted',
                    group: 'br',
                    life: 3000
                });
                let taskIdInLclStrg = Number(localStorage.getItem('taskDetailID'));
                if (taskIdInLclStrg) {
                    getTaskDetails(taskIdInLclStrg);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
