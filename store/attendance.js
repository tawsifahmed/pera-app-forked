import { defineStore } from "pinia";

export const attendanceStore = defineStore('attendanceStore', {
    state: () => ({
        attendance: []
    }),
    actions: {
        async getAttendance(date, user = null) {
            const token = useCookie('token')
            try {

                const response = await useFetch(`https://pbe.singularitybd.net/api/v1/attendance/list?user=${user ? user : ''}&month=${''}`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token.value}`, },
                })
                if (!response) {
                    throw new Error("Failed to fetch attendance ")
                } else {
                    this.data = response.data;
                }
            } catch (error) {
                console.log("Get Attendance: ", error);
            }
        },
        async googleAttendance(data) {
            const token = useCookie('token')
            try {
                const response = await useFetch('', {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                    body: data
                })
                if (!response.ok) {
                    throw new Error("Failed to post Google Attendance")
                }
            } catch (error) {
                console.log('Google Attendance: ', error);
            }
        }
    }
}) 