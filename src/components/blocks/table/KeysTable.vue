<template>
	<createKey  @close="closeModal" :isOpen="isOpen"/>
	
	<div v-if="orgStore.currentOrgRole == 'admin'"  class="w-full flex items-center justify-between">
		<h2 class="text-xl font-bold my-auto" >Organization Keys</h2>
		<button @click="openModal" class="bg-primary px-20 py-2 h-max rounded-md text-white">Add Key</button>
	</div>
	<div class="w-full flex justify-between space-x-5 my-10">
		<input class="w-full bg-dark rounded-md px-5 text-white py-3" placeholder="Search Keys" :onChange="changeSearchText"/>
		<!-- <button class="bg-primary px-20 py-2 rounded-md text-white" :onClick="search">Search</button> -->
	</div>

	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10"  v-if="secretStore.Secrets">
	  <div class="table-header w-full grid grid-cols-5 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col flex justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Key</h3>
		 
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Created at</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Value</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Type</h3>
		</div>
		<div class="col justify-center flex items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
	
		<div v-if="secretStore.Secrets" v-for="(row, index) in secretStore.Secrets" :key="index" class="grid grid-cols-5 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.name }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ formatDate(row.createdAt) }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ truncateWithEllipsis(row.encryptedData,15) }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.type }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">
			<RouterLink :to="currentRoute+'/keys/'+row.id" class="bg-primary w-full px-10 py-2 rounded-md text-center text-white">View</RouterLink>
		  </div>
		</div>
	  </div>
	</div>
	<div class="w-full text-white rounded-lg" v-else>
	  <h2 class="text-center text-white text-lg">No keys found</h2>	
	</div>


  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  import createKey from '../modal/createKey.vue';
  import { ref } from 'vue';
  import { useOrganizationStore } from '@/store/useOrganizationStore';
  import { onMounted } from 'vue';
  import { useSecretStore } from '@/store/useSecretStore';
  interface KeyInfo {
	id:number;
	key: string;
	createdAt: string;
	validTill: string;
	lastAccessedBy: string;
	lastAccessedAt: string; // Add the new property
  }
  function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
  }

  function truncateWithEllipsis(str:string, maxLength:number):string {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  }

  const orgStore = useOrganizationStore();
  const secretStore = useSecretStore();
  const currentRoute = useRoute().path;

  const searchText = ref('');
  function changeSearchText(event: any) {
	searchText.value = event.target.value;
	secretStore.searchSecrets(searchText.value);
  }
  const isOpen = ref(false);

  function closeModal() {
	isOpen.value = false
  }
  function openModal() {
	isOpen.value = true
  }
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  