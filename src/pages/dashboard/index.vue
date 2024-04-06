<template>

	<div class="w-full py-10 relative">

	  <div class="grid grid-cols-3 gap-4 w-full">
		<infoCard v-for="(infoCard, index) in infoCardsData" :key="index" :data="infoCard" />
	  </div>

	  <div class="grid grid-cols-[8fr,4fr] gap-5 py-10">
		
		<div class="col w-full">
			<h2 class="text-xl text-white font-bold mb-5">Organizations</h2>
			<OrganizationTable/>
		</div>
		<div class="col w-full text-white">
			<h2 class="text-xl font-bold mb-5">Recently Created Keys</h2>
			<div v-for="(dummyKey, index) in dummyKeys" :key="index">
				<keyMetaCard :key="index" :keyInfo="dummyKey" />
			</div>
		</div>
	  </div>
	  
	</div>
  </template>
  
  <script setup lang="ts">
  import { Ref, ref } from 'vue';
  import InfoCard from '@/components/blocks/cards/infoCard.vue';
  import keyMetaCard from '@/components/blocks/cards/keyMetaCard.vue';
  import OrganizationTable from '@/components/blocks/table/OrganizationTable.vue';
   // Import the InfoCard component
  

	interface KeyInfo {
	name: string;
	organization: string;
	createdAt: string;
	}

	const dummyKeys: KeyInfo[] = [
	{ name: 'Key 1', organization: 'Org 1', createdAt: '2022-01-01' },
	{ name: 'Key 2', organization: 'Org 2', createdAt: '2022-02-01' },
	{ name: 'Key 3', organization: 'Org 3', createdAt: '2022-03-01' },
	{ name: 'Key 4', organization: 'Org 3', createdAt: '2022-03-01' },
	{ name: 'Key 5', organization: 'Org 3', createdAt: '2022-03-01' },
	];
  const infoCardsData: Ref<any> = ref([
	{
	  icon: "<i class='bx bxs-server'></i>",
	  title: 'Organization',
	  desc: 'Create and manage Organization credentials securely ',
	  total: 0,
	  btn: 'Create',
	  link: '',
	},
	{
	  icon: "<i class='bx bxs-user-plus'></i>",
	  title: 'Invite Users',
	  desc: "Invite users to your organization and distribute keys.",
	  total: null,
	  btn: 'Invite',
	  link: '',
	},
	{
	  icon: "<i class='bx bxs-file-blank'></i>",
	  title: 'SDK Documentation',
	  desc: "Access Keys via SDK directly into Your codebase with ease",
	  total: null,
	  btn: 'Read More',
	  link: '',
	},
  ])
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  