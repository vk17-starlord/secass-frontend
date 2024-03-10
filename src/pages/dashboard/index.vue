<template>
    <div class="bg-dark w-full min-h-screen">
        <navbar/>
        <div class="w-full flex flex-col">
            <h1 class="text-white text-4xl font-bold p-5">
                Welcome Meta
            </h1>
            <div class="flex items-center justify-center">
                <orgTable
                    :data="orgs"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import orgTable from '@/components/blocks/dashboard/orgTable.vue';
import navbar from '@/components/blocks/layout/navbar.vue';

type OrgData = {
    name: string,
    email: string,
    admin: string
}

const orgs:Array<OrgData> = [
    {
        name: 'Google Ads',
        email: 'ads@google.com',
        admin: 'Kunal Barve'
    },
    {
        name: 'Youtube',
        email: 'yt@gmail.com',
        admin: 'Kunal Barve'
    },
    {
        name: 'Google Drive',
        email: 'drive@gmail.com',
        admin: 'Kunal Barve'
    },
    {
        name: 'Google Search',
        email: 'search@google.com',
        admin: 'Kunal Barve'
    }
]

</script>

<style scoped>

</style>