<script setup>
// const profileData = ref(userProfile);
import { useUserStore } from '~/store/user';

const { userProfile } = defineProps(['userProfile']);
const { updateUser } = useUserStore();
const toast = useToast();
const loading = ref(false);
const userId = ref(userProfile?.data.id);
const userName = ref(userProfile?.data?.name);
const imageData = ref(userProfile?.data?.image);
const uploadedImage = ref(null);
const phone = ref(userProfile?.data?.phone);
const email = ref(userProfile?.data?.email);
const address = ref(userProfile?.data?.address);

// Form submission

const handleSubmit = async () => {
    loading.value = true;
    const response = await updateUser(userId.value, userName.value, phone.value, email.value, address.value, uploadedImage.value);
    if (response?.code === 200) {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Profile Updated Success', life: 3000 });
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Profile Updated Failed', life: 3000 });
    }
    loading.value = false;
};

const handleImageUpload = (value) => {
    uploadedImage.value = value.target.files[0];
    imageData.value = URL.createObjectURL(uploadedImage.value);
};
</script>
<template>
    <!-- <pre>{{ userProfile }}</pre> -->
    <form @submit.prevent="handleSubmit" class="grid">
        <div class="col-12 text-center mb-5">
            <div class="relative w-fit mx-auto">
                <img :src="`${imageData}`" style="height: 100px; width: 100px; border-radius: 100%; object-fit: cover" />
                <div class="img-label">
                    <label for="image">
                        <i class="pi pi-plus" style="color: red; right: 0.2rem; bottom: 0.2rem; z-index: 5; background-color: white; padding: 8px; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; cursor: pointer"></i>
                    </label>
                    <input class="hidden" type="file" :v-model="uploadedImage" id="image" @input="(event) => handleImageUpload(event)" accept=".png, .jpeg, .jpg" />
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 mb-3">
            <FloatLabel>
                <InputText id="name" class="w-full" v-model="userName" />
                <label for="name">Name</label>
            </FloatLabel>
        </div>
        <div class="col-12 lg:col-6 mb-3">
            <FloatLabel>
                <InputText id="phone" v-model="phone" class="w-full" />
                <label for="phone">Phone</label>
            </FloatLabel>
        </div>
        <div class="col-12 lg:col-6 mb-3">
            <FloatLabel>
                <InputText id="email" v-model="email" type="email" class="w-full" disabled />
                <label for="email">Email</label>
            </FloatLabel>
        </div>
        <div class="col-12 lg:col-6 mb-3">
            <FloatLabel>
                <InputText id="address" v-model="address" class="w-full" />
                <label for="address">Address</label>
            </FloatLabel>
        </div>
        <div class="col-12 mb-3 flex justify-content-center">
            <Button type="submit" label="Save" :loading="loading" />
        </div>
    </form>
</template>

<style lang="scss" scoped>
.button {
    background-color: #059669;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}
.img-label {
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 1;
    cursor: pointer;
}
</style>
