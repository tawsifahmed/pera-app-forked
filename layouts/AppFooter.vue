<script setup>
import { useLayout } from './composables/layout';
import { computed } from 'vue';
const { layoutConfig } = useLayout();
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="layout-footer">
        <div class="flex justify-content-center gap-2" style="visibility: hidden">
            <a href="https://play.google.com/store/apps/details?id=com.singularity.the.pera.app" target="_blank">
                <img src="/appleBtn.webp" height="30" alt="Image" class="" />
            </a>

            <a href="https://apps.apple.com/us/app/the-pera/id6505035655" target="_blank">
                <img src="/googleBtn.webp" height="30" alt="Image" class="" />
            </a>
        </div>
        <div class="flex justify-content-center gap-3 align-items-center">
            <div class="flex align-items-center">
                <img src="/demo/images/login/avatar.svg" alt="Logo" height="20" class="mr-2" />
            by<span class="font-medium">Singularity</span>
            </div>
            <NuxtLink to="/privacy-policy" class="" style="text-decoration: none; text-decoration: underline;">Privacy Policy</NuxtLink>
        </div>

        <div class="flex justify-content-center gap-2">
            <a href="https://apps.apple.com/us/app/the-pera/id6505035655" target="_blank">
                <img src="/appleBtn.webp" height="30" alt="Image" class="" />
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.singularity.the.pera.app" target="_blank">
                <img src="/googleBtn.webp" height="30" alt="Image" class="" />
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.font-medium {
    margin-left: 0.35rem !important;
}
</style>
