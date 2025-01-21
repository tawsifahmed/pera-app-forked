<script setup>
import { storeToRefs } from 'pinia';
import { attendanceStore } from '~/store/attendance';
const { getAttendance, googleAttendance } = attendanceStore();
const { attendance } = storeToRefs(attendanceStore());
import { ref } from 'vue';
const statusColor = ref({
    present: 'green',
    absent: 'red',
    late: 'orange'
});
console.log(attendance);
const date = ref(null);
watch(date, () => console.log(date));
const attendanceData = ref([
    {
        id: 1,
        user_id: 1,
        user_name: 'Shaheen',
        status: 'late',
        date: '01 Jan 2024',
        day: 'Saturday',
        start_time: '05:41:59',
        end_time: '14:41:59',
        type: 'Working Day',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 2,
        user_id: 24,
        user_name: 'Md. Yeasir Arafat',
        status: 'present',
        start_time: '10:41:59',
        end_time: '18:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 3,
        user_id: 49,
        user_name: 'Md. Hashmi Shihab',
        status: 'absent',
        start_time: ' 05:41:59',
        end_time: '16:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 4,
        user_id: 7,
        user_name: 'Rafiur',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 5,
        user_id: 43,
        user_name: 'JKL',
        status: 'present',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 6,
        user_id: 88,
        user_name: 'Syeda Shotorupa Zafar',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 7,
        user_id: 53,
        user_name: 'Kamrul Hasan',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 8,
        user_id: 85,
        user_name: 'Nikash Chandra Madhu',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 9,
        user_id: 34,
        user_name: 'Zafir Shafiee Chowdhury',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 10,
        user_id: 6,
        user_name: '',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 11,
        user_id: 86,
        user_name: 'Mahfuzur Rahman',
        status: 'present',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 12,
        user_id: 57,
        user_name: '',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 13,
        user_id: 7,
        user_name: 'Rafiur',
        status: 'absent',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 14,
        user_id: 16,
        user_name: 'Kamrul Hasan',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 15,
        user_id: 88,
        user_name: 'Syeda Shotorupa Zafar',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 16,
        user_id: 1,
        user_name: 'Shaheen',
        status: 'present',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 17,
        user_id: 13,
        user_name: 'Maruf Hasan',
        status: 'present',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 18,
        user_id: 37,
        user_name: 'Md. Yeasir Arafat',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 19,
        user_id: 83,
        user_name: 'Rima Zaman',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 20,
        user_id: 42,
        user_name: 'FGH',
        status: 'absent',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 21,
        user_id: 57,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 22,
        user_id: 74,
        user_name: 'Amina Begum',
        status: 'present',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 23,
        user_id: 94,
        user_name: 'shakila.bondstein@gmail.com',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 24,
        user_id: 81,
        user_name: 'Mina Khan',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 25,
        user_id: 29,
        user_name: 'Nishat Tasnim',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 26,
        user_id: 85,
        user_name: 'Nikash Chandra Madhu',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 27,
        user_id: 1,
        user_name: 'Shaheen',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 28,
        user_id: 85,
        user_name: 'Nikash Chandra Madhu',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 29,
        user_id: 23,
        user_name: 'Ar Rafi Uddin',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 30,
        user_id: 73,
        user_name: 'Kamal Hossain',
        status: 'absent',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 31,
        user_id: 90,
        user_name: 'Rasha Rabbani Ador',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 32,
        user_id: 28,
        user_name: 'Shafikul Islam',
        status: 'absent',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 33,
        user_id: 75,
        user_name: 'Rafiq Ahmed',
        status: 'present',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 34,
        user_id: 75,
        user_name: 'Rafiq Ahmed',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 35,
        user_id: 66,
        user_name: 'Lokman Hossain Sharif',
        status: 'absent',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 36,
        user_id: 22,
        user_name: 'Abu Daud Hossain',
        status: 'present',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 37,
        user_id: 74,
        user_name: 'Amina Begum',
        status: 'present',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 38,
        user_id: 49,
        user_name: 'Md. Hashmi Shihab',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 39,
        user_id: 56,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 40,
        user_id: 91,
        user_name: 'A N M Sajedul Alam',
        status: 'present',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 41,
        user_id: 2,
        user_name: 'Tawsif Ahmed',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 42,
        user_id: 85,
        user_name: 'Nikash Chandra Madhu',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 43,
        user_id: 30,
        user_name: 'Simran Khan',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 44,
        user_id: 90,
        user_name: 'Rasha Rabbani Ador',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 45,
        user_id: 12,
        user_name: 'Md. Mustafizur rahaman',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 46,
        user_id: 53,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 47,
        user_id: 85,
        user_name: 'Nikash Chandra Madhu',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 48,
        user_id: 14,
        user_name: 'Rafid Al Ridwan',
        status: 'present',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 49,
        user_id: 36,
        user_name: 'John Doe',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 50,
        user_id: 82,
        user_name: 'Shahinur Rahman',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 51,
        user_id: 93,
        user_name: 'Md Ashfaqul Haque',
        status: 'present',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 52,
        user_id: 76,
        user_name: 'MD. SADDAM HOSHEN',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 53,
        user_id: 9,
        user_name: 'Demo User 2',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 54,
        user_id: 8,
        user_name: 'Demo User 1',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 55,
        user_id: 29,
        user_name: 'Nishat Tasnim',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 56,
        user_id: 49,
        user_name: 'Md. Hashmi Shihab',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 57,
        user_id: 41,
        user_name: 'HIJ',
        status: 'present',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 58,
        user_id: 49,
        user_name: 'Md. Hashmi Shihab',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 59,
        user_id: 10,
        user_name: 'Shadman Fahim Ahmad',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 60,
        user_id: 86,
        user_name: 'Mahfuzur Rahman',
        status: 'present',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 61,
        user_id: 25,
        user_name: 'Asif Kibria',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 62,
        user_id: 88,
        user_name: 'Syeda Shotorupa Zafar',
        status: 'absent',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 63,
        user_id: 33,
        user_name: 'Mir Shahrukh Islam',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 64,
        user_id: 64,
        user_name: 'Ishan Test',
        status: 'present',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 65,
        user_id: 67,
        user_name: '',
        status: 'present',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 66,
        user_id: 81,
        user_name: 'Mina Khan',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 67,
        user_id: 67,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 68,
        user_id: 18,
        user_name: 'Shafikul Islam',
        status: 'absent',
        start_time: '2025-01-13 09:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 69,
        user_id: 83,
        user_name: 'Rima Zaman',
        status: 'absent',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 70,
        user_id: 74,
        user_name: 'Amina Begum',
        status: 'present',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 71,
        user_id: 13,
        user_name: 'Maruf Hasan',
        status: 'absent',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 72,
        user_id: 77,
        user_name: 'Laila Sultana',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 73,
        user_id: 51,
        user_name: 'Nazmus Sakib',
        status: 'present',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 74,
        user_id: 54,
        user_name: 'Mehedi Hasan Tareq',
        status: 'present',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 75,
        user_id: 81,
        user_name: 'Mina Khan',
        status: 'present',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 76,
        user_id: 13,
        user_name: 'Maruf Hasan',
        status: 'absent',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 77,
        user_id: 23,
        user_name: 'Ar Rafi Uddin',
        status: 'present',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 78,
        user_id: 55,
        user_name: 'A.H.M ANNUR',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 79,
        user_id: 48,
        user_name: 'A.H.M. ANNUR',
        status: 'absent',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 80,
        user_id: 1,
        user_name: 'Shaheen',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 81,
        user_id: 96,
        user_name: 'Morshed Sany',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 15:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 82,
        user_id: 49,
        user_name: 'Md. Hashmi Shihab',
        status: 'present',
        start_time: '2025-01-13 07:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 83,
        user_id: 67,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 84,
        user_id: 86,
        user_name: 'Mahfuzur Rahman',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 85,
        user_id: 91,
        user_name: 'A N M Sajedul Alam',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 86,
        user_id: 62,
        user_name: 'Syeda Shotorupa Zafar',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 87,
        user_id: 83,
        user_name: 'Rima Zaman',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 16:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 88,
        user_id: 89,
        user_name: '',
        status: 'present',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 89,
        user_id: 39,
        user_name: 'ABC',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 90,
        user_id: 35,
        user_name: 'John Doe',
        status: 'present',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 91,
        user_id: 84,
        user_name: 'Akram Hossain',
        status: 'absent',
        start_time: '2025-01-13 10:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 92,
        user_id: 79,
        user_name: 'Shama Yasmin',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 18:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 93,
        user_id: 10,
        user_name: 'Shadman Fahim Ahmad',
        status: 'absent',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 19:41:59',
        company_id: 3,
        created_by: 1,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 94,
        user_id: 7,
        user_name: 'Rafiur',
        status: 'absent',
        start_time: '2025-01-13 06:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 2,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 95,
        user_id: 6,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 05:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 96,
        user_id: 67,
        user_name: '',
        status: 'absent',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 21:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 97,
        user_id: 37,
        user_name: 'Md. Yeasir Arafat',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 20:41:59',
        company_id: 3,
        created_by: 4,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 98,
        user_id: 16,
        user_name: 'Kamrul Hasan',
        status: 'present',
        start_time: '2025-01-13 11:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 99,
        user_id: 81,
        user_name: 'Mina Khan',
        status: 'present',
        start_time: '2025-01-13 12:41:59',
        end_time: '2025-01-13 14:41:59',
        company_id: 3,
        created_by: 5,
        create_time: '2025-01-13 13:41:59'
    },
    {
        id: 100,
        user_id: 86,
        user_name: 'Mahfuzur Rahman',
        status: 'present',
        start_time: '2025-01-13 08:41:59',
        end_time: '2025-01-13 17:41:59',
        company_id: 3,
        created_by: 3,
        create_time: '2025-01-13 13:41:59'
    }
]);
</script>
<template>
    <div>
        <div class="flex justify-content-between py-2">
            <!-- <Button label="Google Attendance" severity="primary" /> -->
            <div class="">
                <Calendar v-model="date" view="month" dateFormat="mm/yy" placeholder="Selec Month" />
            </div>
        </div>
        <!-- Add your table and other components here -->
        <DataTable
            class="table-st"
            :value="attendance"
            :rowHover="true"
            :paginator="false"
            :rows="30"
            v-if="attendanceData && attendanceData.length > 0"
            stripedRows
            scrollable
            scrollHeight="62vh"
            tableStyle="min-width: 50rem"
            :rowsPerPageOptions="[5, 10, 20, 50]"
        >
            <template #empty> <p class="text-center">No Data found.</p> </template>
            <template #loading> Loading. Please wait... </template>
            <Column style="width: 2%" field="id" header="#" :body="(_, { rowIndex }) => rowIndex + 1"> </Column>
            <Column style="width: 12%" field="user_name" header="Name"> </Column>
            <Column style="width: 12%" field="date" header="Date"></Column>
            <Column style="width: 12%" field="day" header="Day"></Column>
            <Column style="width: 12%" field="start_time" header="IN"> </Column>
            <Column style="width: 12%" field="end_time" header="OUT"> </Column>
            <Column style="width: 12%" field="type" header="Type"></Column>
            <Column style="width: 12%" field="status" header="Status">
                <template #body="slotProps">
                    <div>
                        <span :style="`color:${statusColor[slotProps.data.status.toLowerCase()]}; text-transform:capitalize `">{{ slotProps.data.status }}</span>
                    </div>
                </template></Column
            >
        </DataTable>
    </div>
</template>

<style scoped>
/* Add any custom styles here */
.participants {
    width: 40%;
}
.description {
    width: 60%;
    display: block; /* Ensures the element behaves like a block for truncation */
    overflow: hidden; /* Hides overflowing content */
    white-space: nowrap; /* Prevents text wrapping */
    text-overflow: ellipsis; /* Adds "..." to indicate truncated content */
    line-height: 1.5; /* Adjusts the line height for better readability */
}
.table-st {
    border: inherit;
    border-radius: 10px;
    overflow: hidden;
}
.table-st thead tr {
    background: #ededed;
}
.title {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    /* font-weight: 500; */
}
.title p {
    margin: 0;
}
.perticipants {
    margin: 8px 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.participants p {
    font-size: 18px;
}
.details {
    padding: 16px;
    border: 1px solid #ededed;
    border-radius: 8px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-d);
}
.header h3 {
    margin: 0;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
