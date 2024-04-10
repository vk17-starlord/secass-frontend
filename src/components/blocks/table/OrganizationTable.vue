<template>
	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
	  <div class="table-header w-full grid grid-cols-4 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Organization</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Created At</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Admin</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
		<div v-for="(row, index) in store.organizations" :key="index" class="grid grid-cols-4 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.name }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ formatDate(row.createdAt)	}}</div>
		  <div class="col flex px-0 justify-start items-center text-sm py-3">{{ row.adminEmail	 }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">
			<router-link :to="'/app/organization/' + row.id" class="bg-primary w-full text-center px-10 py-2 rounded-md text-white">View</router-link>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '@/store/useAuthStore';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useSecretStore } from '@/store/useSecretStore';
import { onMounted } from 'vue';
import { ref } from 'vue';
  

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}


  const store = useOrganizationStore();
  const secretStore = useSecretStore();
  onMounted(async() => {
	await store.getOrganizations();
  })

  </script>
  <style scoped>
  /* Add your scoped styles here */
  </style>
  