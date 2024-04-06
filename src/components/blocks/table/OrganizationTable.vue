<template>
	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
	  <div class="table-header w-full grid grid-cols-4 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Organization</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Email</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Admin</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
		<div v-for="(row, index) in tableData" :key="index" class="grid grid-cols-4 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.organization }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.email }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.admin }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">
			<button class="bg-primary px-10 py-2 rounded-md text-white">View </button>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const tableData = ref([
	{ organization: 'Org 1', email: 'org1@example.com', admin: 'Admin 1' },
	{ organization: 'Org 2', email: 'org2@example.com', admin: 'Admin 2',  },
	{ organization: 'Org 3', email: 'org3@example.com', admin: 'Admin 3' },
	{ organization: 'Org 4', email: 'org4@example.com', admin: 'Admin 4' },
	{ organization: 'Org 5', email: 'org5@example.com', admin: 'Admin 5' },
	{ organization: 'Org 6', email: 'org6@example.com', admin: 'Admin 6' },
	// Add more dummy data as needed
  ]);
  </script>
  <style scoped>
  /* Add your scoped styles here */
  </style>
  