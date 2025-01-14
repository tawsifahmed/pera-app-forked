<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'default'
});
import { attendanceStore } from '~/store/attendance';
const { getAttendance } = attendanceStore();

getAttendance();
</script>
<template>
    <div class="card">
        <AttendanceHeader />
        <AttendanceTable />
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
