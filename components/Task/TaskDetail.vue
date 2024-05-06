<template>
    <div class="grid">
        <div class="col-12 lg:col-7">
            <form @submit.prevent="handleTaskDetailSubmit" class="task-detail">
                <h5>Task Infos</h5>
                <!-- <pre>{{singleTask}}</pre> -->
                <div class="card">
                    <div class="mb-3">
                        <label>Name: {{ singleTask.data.name }}</label>
                    </div>
                    <div class="field flex flex-column">
                        <label for="name">Description:</label>
                        <Textarea id="description" v-model="taskEditDescriptionInput"  rows="3" cols="20" />
                    </div>
                    <div class="mb-1">
                        <label>Attachment:</label>
                    </div>
                    <div>
                        <input type="file" ref="fileInput" @change="handleFileChange">
                        <!-- <button type="submit">Upload</button> -->
                    </div>
                    <div class="flex justify-content-end ">
                        <Button type="submit" label="Submit" />
                    </div>
                </div>
            </form>
            
        </div>
        <div class="col-12 lg:col-5">
            <div>
                <h5 class="cmc">Comments</h5>
                <div class="comment-wrapper card">
                        <div class="comments">
                            <Card  class="mb-2" v-for="val in singleTaskComments" :key="val.id">
                                <template class="commentator-name" #title>{{ val.commentator_name }}</template>
                                <template #content>
                                    <p class="m-0">
                                     {{ val.comment }}
                                    </p>
                                    <i class="float-right "> {{ val.time }} </i>
                                </template>
                            </Card>
                        </div>
                    
                    
                    <div class="comment-add">                        
                        <form @submit.prevent="handleTaskComment" class="formgroup-inline">
                            <div class="field">
                                <InputText v-model="taskCommentInput" type="text" required placeholder="Add comment" />
                            </div>
    
                            <Button type="submit" label="Add" :loading="btnLoading" />
    
                            <!-- <Button type="submit" label="Add" v-tooltip="'Click to proceed'" /> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>


<script setup>

import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';
const { editTask, addTaskComment, getTaskDetails } = useCompanyStore();
const { isTaskEdited, isTaskCommentCreated, singleTaskComments } = storeToRefs(useCompanyStore());
const {singleTask, projID} = defineProps(['singleTask', 'projID']);
const toast = useToast();
const btnLoading = ref(false);
const taskEditDescriptionInput = ref(null);
const taskCommentInput = ref(null);
const handleTaskComment = async () => {
    btnLoading.value = true;
    await addTaskComment(singleTask.key, taskCommentInput.value);
    if (isTaskCommentCreated.value === true) {
        toast.add({ severity: 'success', summary: 'Successfull', detail: 'Comment added Successfully', life: 3000 });
        taskCommentInput.value = null;
        btnLoading.value = false;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to add comment', life: 3000 });
        btnLoading.value = false;
    }
};

const fileInput = ref();

const selectedfile = ref();

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        selectedfile.value = file;
        // console.log('selectedfile', selectedfile.value);
    } else {
        console.error('No file selected.');
    }
};

const handleTaskDetailSubmit = async () => {
   const fd = new FormData();
   if(selectedfile.value){
    fd.append('file', selectedfile.value);
    fd.append('nm', 'asd');
    if(fd.has('nm')) {
    console.log('The FormData object has a property called "file".');
    const file = fd.get('file');
    console.log('File:', file);

    } else {
        console.log('The FormData object does not have a property called "file".');
    } 
   }
   
//    const fil11e = fd.get('file');
//    console.log('file', fil11e);
   
//    console.log('formData', fd);
//    return

   let attachmentArray = [];
   let attachmentObj = {
         file : selectedfile.value
   } 
   attachmentArray.push(attachmentObj);
   const taskDetailData = {
         'id' : singleTask.key,
         'name' : singleTask.data.name,
         'description': taskEditDescriptionInput.value,
         'project_id' : projID, 
         'due_date': singleTask.data.due_date,
         'priority' : singleTask.data.priority,
         'assignees' : singleTask.data.assignees,
         'attachments': selectedfile.value
    
   }
   console.log('taskDetailData', taskDetailData);
//    return
   await editTask(taskDetailData);
   if(isTaskEdited.value === true){
       toast.add({ severity: 'success', summary: 'Successfull', detail: 'Task Edited Successfully', life: 3000 });
       taskEditDescriptionInput.value = null;
       selectedfile.value = null;
   }else{
         toast.add({ severity: 'error', summary: 'Error', detail: 'Unable to edit task', life: 3000 });
    }    
};

watchEffect(async () => {
    getTaskDetails(singleTask.key);

});




</script>

<style lang="scss" scoped>

.task-detail{
    
}

.cmc{
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
    height: 90%; 
    padding: 5px;
    
}

.comment-add {
    padding: 20px;
    margin-bottom: 15px;
    border-top: 1px solid #e2e8f0; 
    padding: 10px;
    width: 100%;
    position: relative;
}

.formgroup-inline{
    flex-wrap: nowrap;
}
.formgroup-inline .field {
    width: 90% !important;
}

.formgroup-inline .field input {
    width: 100% !important; 
}

.float-right{
    float: right;
    font-size: 12px;
    color: gray;
}

.task-edit{
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
}


.p-fileupload-buttonbar:last-child{
    display: none !important;
}

</style>