<template>
    <div class="bg-cardbg p-3 max-w-[460px] h-[186px] rounded-lg mb-3">
        <div class="flex items-center">
            <img src="../../../assets/key.jpeg" alt="Key" class="w-[68px] h-[68px] rounded-full">
            <div class="ml-2">
                <p class="font-medium">
                    {{ props.title }}
                </p>
                <p class="text-[#5D5FEF]">
                    {{ props.organization }}
                </p>
            </div>
        </div>
        <p class="text-[14px] overflow-hidden whitespace-no-wrap pl-2 pt-2">
            {{ props.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string,
        description: string,
        organization: string
    }>()
</script>

<style scoped>

</style>