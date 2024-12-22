<script setup>
const { scrumData } = defineProps(['scrumData']);
</script>
<template>
    <DataTable :value="scrumData" v-if="scrumData && scrumData.length > 0" stripedRows tableStyle="min-width: 50rem">
        <Column style="width: 2%" field="id" header="id"></Column>
        <Column style="width: 10%" field="meeting_date" header="Date"></Column>
        <Column style="width: 10%" field="space_id" header="Space">
            <template #body="slotProps">
                <div>
                    {{ slotProps.data.space_id.name }}
                </div>
            </template>
        </Column>
        <Column style="width: 30%" field="description" header="Description"></Column>
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
</template>

<style scoped>
/* Add any custom styles here */
.participants {
    width: 40%;
}
.description {
    width: 60%;
}
</style>
