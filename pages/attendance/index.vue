<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
import { attendanceStore } from '~/store/attendance';
const { getAttendance } = attendanceStore();
const { attendanceD } = storeToRefs(attendanceStore());

// onMounted(async() => {
//     await getAttendance();
// });
// getAttendance();
</script>
<template>
    <div class="card">
        <!-- <pre>{{attendanceD}}</pre> -->
        <AttendanceHeader />
        <AttendanceTable />
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
