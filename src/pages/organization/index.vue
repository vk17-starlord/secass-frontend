<template>
    <navbar/>
    <div class="bg-dark w-full min-h-screen text-white px-4 ">
        <div class="flex justify-between items-center pb-8">
            <breadcrumbs :crumbs="crumbs"/>
            <button
                @click="$router.go(-1)"
            >
                Back
            </button>
        </div>
        <orgDetails
            :orgName="orgName"
            :orgDescription="orgDescription"
            :orgLogo="orgLogo"
        />
        <div v-if="activeProject===0" class="grid grid-cols-3 gap-4 pt-4">
            <projectTile v-for="(project, index) in projects" :key="index" 
                :project="project"
                :setActiveProject="setActiveProject"
            />
        </div>
        <div v-else>
            <projectDetails :secrets="secrets[activeProject]"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import navbar from '@/components/blocks/layout/navbar.vue';
    import orgDetails from '@/components/blocks/organization/orgDetails.vue';
    import breadcrumbs from '@/components/elements/breadcrumbs.vue';
    import projectTile from '@/components/blocks/organization/projectTile.vue';
    import { ref } from 'vue';
    import projectDetails from '@/components/blocks/organization/projectDetails.vue';

    const activeProject = ref(0);
    const setActiveProject = (project:number) => {
        activeProject.value = project;
    }

    const crumbs = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'Organizations',
            route: '/organizations'
        }
    ]

    const projects:Array<any> = [
        {
            id: 1,
            name: 'Project 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 2,
            name: 'Project 2',
            description: 'Project 2 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 3,
            name: 'Project 3',
            description: 'Project 3 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 4,
            name: 'Project 4',
            description: 'Project 4 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 5,
            name: 'Project 5',
            description: 'Project 5 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 6,
            name: 'Project 6',
            description: 'Project 6 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 7,
            name: 'Project 4',
            description: 'Project 4 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 8,
            name: 'Project 5',
            description: 'Project 5 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        },
        {
            id: 9,
            name: 'Project 6',
            description: 'Project 6 description',
            logo: 'https://www.svgrepo.com/show/353800/google-ads.svg',
            createdOn : '7 March 2022'
        }
    ]

    const secrets:Secrets={
        1: [
            {
                id: 1,
                key: 'key1',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user1',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 2,
                key: 'key2',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user2',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 3,
                key: 'key3',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user3',
                lastAccessedOn: '7 March 2022'
            }
        ],
        2: [
            {
                id: 1,
                key: 'key1',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user1',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 2,
                key: 'key2',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user2',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 3,
                key: 'key3',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user3',
                lastAccessedOn: '7 March 2022'
            }
        ],
        3: [
            {
                id: 1,
                key: 'key1',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user1',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 2,
                key: 'key2',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user2',
                lastAccessedOn: '7 March 2022'
            },
            {
                id: 3,
                key: 'key3',
                createdOn: '7 March 2022',
                validTill: '7 March 2023',
                lastAccessedBy: 'user3',
                lastAccessedOn: '7 March 2022'
            }
        ]
    } 

    const orgName = 'Google Ads';
    const orgDescription = 'Google Ads is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content, and generate mobile application installs within the Google ad network to web users.';
    const orgLogo = 'https://www.svgrepo.com/show/353800/google-ads.svg';
</script>
<style scoped>
</style>
