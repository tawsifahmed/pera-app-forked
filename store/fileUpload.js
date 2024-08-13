import { defineStore } from 'pinia';

export const useFileUploaderStore = defineStore('fileUpload', () => {

    const isFileUpload = ref(false)
    const isLoading = ref(false)
    const isFileDeleted = ref(false)

    async function fileUpload(id, file) {

        isLoading.value = true

        const formdata = new FormData()

        formdata.append('task_id', id)
        formdata.append('attachments', file)
        const token = useCookie('token')

        try {
            const response = await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-upload`, {
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
            if (data?.user_message === 'success') {
                isFileUpload.value = true
            } else {
                isFileUpload.value = false
            }

            isLoading.value = false
        } catch (error) {
            console.error('Error uploading file:', error)
            isFileUpload.value = false
            isLoading.value = false
        }
    }

    async function fileDelete(id) {

        const token = useCookie('token')

        try {
            const response = await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            console.log('delete data =>', data)

            if (data?.user_message === 'success') {
                isFileDeleted.value = true
            } else {
                isFileDeleted.value = false
            }
        } catch (error) {
            console.error('Error uploading file:', error)
            isFileDeleted.value = false
        }
    }

    return { fileUpload, fileDelete, isFileUpload, isLoading, isFileDeleted }
})