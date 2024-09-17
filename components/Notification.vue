<script setup>
const url = useRuntimeConfig();
const token = useCookie('token');
const notificationData = ref([]);
const page = ref(1);
const totalPage = ref(1);

const handleClick = async (id) => {
    try {
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/notification/update/${id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`
            },
            body: {
                is_read: 1
            }
        });
        await fetchData();
    } catch (e) {
        console.log(e);
    }
};

const fetchData = async () => {
    try {
        const { data, pending, error } = await useFetch(`${url.public.apiUrl}/notification/list?limit=5&page=${page.value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });

        if (data.value) {
            console.log('notification data =>', data.value);
            notificationData.value = data.value.data;
            totalPage.value = Math.ceil(data.value.total / 5);
        }
    } catch (e) {
        console.log(e);
    }
};

const init = async () => {
    await fetchData();
};

init();

const handleNavigate = async (type) => {
    if (type === 'prev' && page.value > 1) {
        page.value -= 1;
    } else {
        page.value += 1;
    }
    await fetchData();
};
</script>
<template>
    <div v-if="notificationData.length > 0" class="bg-white card1">
        <!-- <pre>{{ notificationData }}</pre> -->
        <div v-for="notify in notificationData" :key="notify" class="">
            <div @click="handleClick(notify.id)" v-html="notify.title" :class="`title ${notify.is_read === 0 ? 'unread' : ''}`"></div>
        </div>
        
        <div class="flex gap-2 justify-content-center">
            <Button @click="handleNavigate('prev')" :disabled="page === 1 ? true : false" icon="pi pi-chevron-left" outlined aria-label="Filter" />
            <Button @click="handleNavigate('')" :disabled="totalPage === page ? true : false" icon="pi pi-chevron-right" outlined aria-label="Filter" />
        </div>
    </div>
    <div class="bg-white card2 text-center text-lg" v-else>
        No notifications!
    </div>
</template>

<style lang="scss" scoped>
.card1 {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 30rem;
    padding: 10px;
}
.card2 {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 30rem;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
}

.title {
    padding: 10px;
    margin: 5px 0px;
    border: 1px solid rgba(218, 218, 218, 0.425);
    border-radius: 5px;
    cursor: pointer;
    text-wrap: wrap;
}
.unread {
    background-color: #60f7c949;
}
</style>
