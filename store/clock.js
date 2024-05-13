import { defineStore } from 'pinia';

export const useClockStore = defineStore('clock', () => {

    async function getTaskTimerData(action, taskId, timerId) {

        const token = useCookie('token')

        try {
            let url;

            if(timerId) {
                url = `set-task-time-traker?action=${action}&timer_id=${timerId}`
            }else {
                url = `set-task-time-traker?action=${action}&task_id=${taskId}`
            }

            console.log('url =>', url)
            
            const response = await fetch(`http://188.166.212.40/pera/public/api/v1/tasks/${url}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            console.log('upload data =>', data)

        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
  
    return { getTaskTimerData }
})