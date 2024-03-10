<template>
    <nav aria-label="breadcrumb">
        <span v-for="(crumb,index) in crumbs" :key = "index">
            <a :href="crumb.route" class="text-white">
                {{ crumb.label }}
                <span v-if="index !== crumbs.length - 1" class="text-color-grey">> </span>
            </a>
        </span>
    </nav>
</template>
  
<script setup lang="ts">
    import { useAuthStore } from '@/store/useAuthStore';
    const store = useAuthStore()

    type Crumb = {
        label: string,
        route: string
    }

    const props = defineProps<{
        crumbs: Array<Crumb>,
    }>();

</script>

<style scoped></style>
