<template>
    <div class="card mx-auto" style="max-width: 50rem">
        <div action="" class="grid" style="gap: 10px">
            <div class="w-full col-12">
                <pre>{{ employee }}</pre>

                <div class="flex gap-2 align-items-end justify-content-center">
                    <div class="" style="width: 42.5%;">
                        <label for="icondisplay" class="font-bold block mb-2">Employee</label>
                        <p class="user-name">{{ userProfile?.data?.name }}</p>
                    </div>
                    <div style="width: 42.5%;">
                        <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                        <Dropdown class="w-full" v-model="selectedQuarter" :options="quater" optionLabel="name"
                            placeholder="Select Quarter" />
                    </div>
                    <Button type="submit" label="Load" @click="loadSubmission" class="" style="width: 15%;" />
                </div>
            </div>
            <!-- Dynamic section -->
            <form class="" v-if="employeeLoaded">
                <!-- <pre>{{dynamicSection}}</pre> -->
                <div v-for="(section, index) in dynamicSection" :key="index" class="card relative">

                    <div class="w-full col-12 grid">
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Section</label>
                            <p class="user-name">{{ section.section_name }}</p>
                            <!-- <Dropdown v-model="dynamicSection.section_id" :options="sections" optionLabel="name" placeholder="Select Section" class="w-full" /> -->
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Sub Section</label>
                            <p class="user-name">{{ section.subSection_name }}</p>
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Quarter</label>
                            <Dropdown v-model="selectedQuarter" disabled :options="quater" optionLabel="name"
                                placeholder="Select Quarter" class="w-full" />
                        </div>
                        <div class="col-12 md:col-6">
                            <label for="icondisplay" class="font-bold block mb-2">Achieved Mark</label>
                            <InputText v-model="section.achive_mark" placeholder="Input Mark"
                                class="w-full" />
                        </div>
                        <div class="col-12">
                            <label for="icondisplay" class="font-bold block mb-2">Comment</label>
                            <InputText v-model="section.comment" placeholder="Write comment"
                                class="w-full" />
                        </div>
                    </div>
                </div>
                <div class="gap-2 flex justify-content-center w-full">
                    <Button label="Submit" class="bg-green-500 border-none" @click.prevent="addSection(index)" />

                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/user';

const { getUserData } = useUserStore();
const { userProfile } = storeToRefs(useUserStore());
const toast = useToast();
const url = useRuntimeConfig();

const { quater } = defineProps(['quater']);

// const employee = ref({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id});
// employee.value = ({ name: userProfile?.value?.data?.name , id: userProfile?.value?.data?.id}); 
// employee.value =  ({ id: userProfile.value.data.id, name: userProfile.value.data.name });

const employeeLoaded = ref(false);

const selectedQuarter = ref('');
const dynamicSection = ref([
    {
        // user_id: employee.value,
        section_name: '',
        section_id: null,
        subSection_name: '',
        subsection_id: null,
        quater_id: null,
        achive_mark: '',
        comment: ''
    }
]
);


const loadSubmission = async () => {
    if (selectedQuarter.value === '') {
        return toast.add({ severity: 'error', summary: 'Failed', detail: 'Please select quarter', group: 'br', life: 3000 });
    }

    const token = useCookie('token');
    // loading.value = true;
    employeeLoaded.value = true;

    const { data, error } = await useFetch(`${url.public.apiUrl}/kpi/show/${userProfile?.value?.data?.id}?quater_id=${selectedQuarter.value.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
    console.log('Data Value', data.value.data);
    data.value.data.forEach((item, idx) => {
        if (dynamicSection.value[idx]) {
            dynamicSection.value[idx].section_name = item.section.name;
            dynamicSection.value[idx].section_id = item.section.id;
            dynamicSection.value[idx].subSection_name = item.sub_section_data[0].sub_section.title;
            dynamicSection.value[idx].subsection_id = item.sub_section_data[0].sub_section.id;
            dynamicSection.value[idx].quater_id = item.sub_section_data[0].quater_id;
            dynamicSection.value[idx].achive_mark = item.sub_section_data[0].achive_mark;
            dynamicSection.value[idx].comment = item.sub_section_data[0].comment;

        } else {
            dynamicSection.value.push({
                section_name: item.section.name,
                section_id: item.section.id,
                subSection_name: item.sub_section_data[0].sub_section.title,
                subsection_id: item.sub_section_data[0].sub_section.id,
                quater_id: item.sub_section_data[0].quater_id,
                achive_mark: item.sub_section_data[0].achive_mark,
                comment: item.sub_section_data[0].comment
            });
        }
    });
    console.log('Submission Value', data?.value.data[0].section.name);


};


getUserData();




</script>

<style lang="scss" scoped>
.user-name {
    font-size: 1rem;
    color: #334155;
    background: #e2e8f0;
    padding: 0.38rem 0.75rem;
    border: 1px solid #cbd5e1;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
    appearance: none;
    border-radius: 6px;
    outline-color: transparent;
}
</style>