<template>
    <div class="flex justify-center items-center w-full min-h-48 rounded-md bg-primary">
        <div>
            <div class="flex justify-around">
                <img :src="orgLogo"
                    width="100" height="100" class="mr-8" alt="organization logo" 
                />
                <div class="flex flex-col justify-center w-[912px]">
                    <h1 class="text-white font-bold">{{orgName}}</h1>
                    <p class="text-white text-sm text-wrap">{{orgDescription}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        orgName: string,
        orgDescription: string,
        orgLogo: string
    }>()
</script>

<style scoped>
</style>
