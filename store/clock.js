import { defineStore } from 'pinia';
import apiLink from '../utils/apiEndpoint';
export const useClockStore = defineStore('clock', () => {

    const trackedTime = ref(null)
    const timerData = ref(null)
    const isTImerStopped = ref()
    const deadlineMissModal = ref(false)
    const deadlineTaskId = ref(null)
    const deadlineProjectId = ref(null)
    const deadlineDueDate = ref(null)
    const deadlineJustifyProvided = ref(null)
    async function getTaskTimerData(action, taskId, timerId) {

        const token = useCookie('token')

        try {
            let url;

            if (timerId) {
                url = `set-task-time-traker?action=${action}&timer_id=${timerId}`
            } else {
                url = `set-task-time-traker?action=${action}&task_id=${taskId}`
            }
            console.log('Saction', action)

            const response = await fetch(`${apiLink}/api/v1/tasks/${url}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            trackedTime.value = data
            return data;

        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }

    async function setManualTime(taskId, duration) {
        const formdata = new FormData();
        formdata.append("task_id", taskId);
        formdata.append("duration", duration);
        const token = useCookie('token')

        try {
            const response = await fetch(`${apiLink}/api/v1/set-manual-time`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: formdata
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            return data;

        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }



    async function getStoreTimer() {

        // timerData.value = {
        //     task_id: storeTaskID.value,
        //     project_id: storeTaskProjectID.value,
        //     space_id: storeTaskSpaceID.value,
        //     company_id: storeTaskCompanyID.value
        // }
    }

    async function storeTaskTimer({ task_id, project_id, space_id, company_id, timerStartTime }) {
        if (task_id === null || project_id === null || space_id === null || company_id === null) {
            timerData.value = null
            await getStoreTimer();
            isTImerStopped.value = true
            return
        } else {
            console.log('task_id', task_id)
            console.log('project_id', project_id)
            console.log('space_id', space_id)
            console.log('company_id', company_id)
            timerData.value = {
                task_id: task_id,
                project_id: project_id,
                space_id: space_id,
                company_id: company_id,
                timerStartTime: timerStartTime
            }
            isTImerStopped.value = false
            console.log('timerDataPinia', timerData)
            console.log('isTImerStopped', isTImerStopped.value)
            await getStoreTimer();
        }

    }

    async function handleMissDeadlineShowTimer(taskId, projId, dueDate) {
        deadlineMissModal.value = true;
        deadlineTaskId.value = taskId;
        deadlineProjectId.value = projId;
        deadlineDueDate.value = dueDate;
        deadlineJustifyProvided.value = null;

    }
    async function closeDeadlineShowModal() {
        deadlineMissModal.value = false;
        deadlineTaskId.value = null;
        deadlineDueDate.value = null;
        deadlineJustifyProvided.value = true;
    }
    async function handleCloseDeadlineJustify() {
        deadlineJustifyProvided.value = false;
        deadlineMissModal.value = false;
        deadlineTaskId.value = null;
        deadlineProjectId.value = null;
        deadlineDueDate.value = null
    }

    return { getTaskTimerData, storeTaskTimer, getStoreTimer, setManualTime, handleMissDeadlineShowTimer, closeDeadlineShowModal, handleCloseDeadlineJustify, timerData, trackedTime, isTImerStopped, deadlineMissModal, deadlineTaskId, deadlineProjectId, deadlineDueDate, deadlineJustifyProvided }
})