import { defineStore } from 'pinia';

export const useClockStore = defineStore('clock', () => {

    const trackedTime = ref(null)
    const timerData = ref(null)
    const isTImerStopped = ref()

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

            const response = await fetch(`https://pbe.singularitybd.net/api/v1/tasks/${url}`, {
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

    async function getStoreTimer() {

        // timerData.value = {
        //     task_id: storeTaskID.value,
        //     project_id: storeTaskProjectID.value,
        //     space_id: storeTaskSpaceID.value,
        //     company_id: storeTaskCompanyID.value
        // }
        console.log('timerData11', timerData)
    }

    async function storeTaskTimer({task_id, project_id, space_id, company_id}) {
        if(task_id === null || project_id === null || space_id === null || company_id === null) {
            timerData.value = null
            await getStoreTimer();
            isTImerStopped.value = true
            return
        }else{

            console.log('task_id', task_id)
            console.log('project_id', project_id)
            console.log('space_id', space_id)
            console.log('company_id', company_id)
            timerData.value = {
                task_id: task_id,
                project_id: project_id,
                space_id: space_id,
                company_id: company_id
            }
            isTImerStopped.value = false
            console.log('timerDataPinia', timerData)
            console.log('isTImerStopped', isTImerStopped.value)
            await getStoreTimer();
        }
        
    }

    return { getTaskTimerData, storeTaskTimer, getStoreTimer, timerData, trackedTime, isTImerStopped }
})