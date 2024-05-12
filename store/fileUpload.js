import { defineStore } from 'pinia';

export const useFileUploaderStore = defineStore('fileUpload', () => {
    
    const isFileUpload = ref(false)

    async function fileUpload(id, file) {

        const formdata = new FormData()

        formdata.append('task_id', id)
        formdata.append('attachments', file)
        const token = useCookie('token')

        try {
            const response = await fetch(`http://188.166.212.40/pera/public/api/v1/tasks/attachment-upload`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: formdata
            });

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            console.log('upload data =>', data)
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
  
    return { fileUpload }
})