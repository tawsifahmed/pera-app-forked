<script setup>
const { scrumData } = defineProps(['scrumData']);
const scrumModal = ref(false);
const selectedScrum = ref(null);

const handleRowClick = (data) => {
    selectedScrum.value = data;
    scrumModal.value = true;
};
</script>
<template>
    <DataTable class="table-st" :value="scrumData" :rowHover="true" @row-click="handleRowClick" v-if="scrumData && scrumData.length > 0" stripedRows tableStyle="min-width: 50rem">
        <Column style="width: 2%" field="id" header="id"></Column>
        <Column style="width: 10%" field="meeting_date" header="Date"></Column>
        <Column style="width: 10%" field="space_id" header="Space">
            <template #body="slotProps">
                <div>{{ slotProps.data.space_id.name }}</div>
            </template>
        </Column>
        <!-- <Column style="width: 30%" field="description" header="Description">
            <template #body="slotProps">
                <div class="description" v-html="slotProps.data.description"></div>
            </template>
        </Column> -->
        <Column style="width: 38%" field="user ids" header="Participants">
            <template #body="slotProps">
                <!-- <pre>{{ slotProps }}</pre> -->
                <div style="display: flex; flex-wrap: wrap; gap: 2px">
                    <div class="border rounded" v-for="child in slotProps.data.user_ids" :key="child.id" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                        <div class="">{{ child.name }}</div>
                    </div>
                </div>
            </template>
        </Column>
    </DataTable>

    <Dialog lazy="true" v-model:visible="scrumModal" modal :header="selectedScrum?.data?.space_id?.name" :style="{ minWidth: '35vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="title">
            <p class="">Participants:</p>
            <p class="">{{ selectedScrum.data.meeting_date }}</p>
        </div>
        <div class="perticipants">
            <div class="flex gap-1">
                <div class="border rounded" v-for="child in selectedScrum.data.user_ids" :key="child.id" style="border: 1px solid rgba(167, 167, 167, 0.486); border-radius: 5px; padding: 2px 5px">
                    <div class="">{{ child.name }}</div>
                </div>
            </div>
        </div>
        <div class="details" v-html="selectedScrum?.data.description"></div>
    </Dialog>
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
    border: 1px solid #ededed;
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
</style>
