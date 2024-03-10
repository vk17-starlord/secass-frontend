<template>
    <div class="bg-[#1E1E1E] flex w-full min-h-48 max-h-80 rounded-md p-3">
        <div class="flex flex-col items-start justify-start w-1/8 h-full mr-4">
            <img
                :src="project.logo"
                height="100"
                alt="project logo"
                class="mr-8 w-20 h-20 rounded-full"
            />
        </div>
        <div class="flex flex-col justify-between w-full px-4">
            <div class="flex flex-col justify-center w-full">
                <h1 class="text-white font-bold">
                    {{ project.name }}
                </h1>
                <p class="text-white text-sm w-full">
                    {{ project.description }}
                </p>
            </div>
            <div class="flex justify-between w-full">
                <span class="text-primary text-sm text-wrap">
                    Created on: {{ project.createdOn }}
                </span>
                <span @click="setActiveProject(project.id)" class="text-primary text-sm text-wrap cursor-pointer">
                    Open
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        project:{
            id: number,
            name: string,
            description: string,
            logo: string,
            createdOn: string
        }

        setActiveProject: (project: any) => void;
    }>();
</script>
<style scoped>
</style>
