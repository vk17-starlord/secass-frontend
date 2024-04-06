<template>
	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
	  <div class="table-header w-full grid grid-cols-6 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col flex justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Key</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Created at</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Valid Till</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Last Accessed By</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Last Accessed At</h3>
		</div>
		<div class="col justify-center flex items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
		<div v-for="(row, index) in tableData" :key="index" class="grid grid-cols-6 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.key }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.createdAt }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.validTill }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.lastAccessedBy }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.lastAccessedAt }}</div> <!-- New column -->
		  <div class="col flex px-0 justify-start items-center  py-3">
			<button class="bg-primary w-full px-10 py-2 rounded-md text-white">View</button>
		  </div>
		</div>
	  </div>
	</div>


  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  interface KeyInfo {
	key: string;
	createdAt: string;
	validTill: string;
	lastAccessedBy: string;
	lastAccessedAt: string; // Add the new property
  }
  
  const tableData = ref<KeyInfo[]>([
	{ key: 'Key 1', createdAt: '2022-01-01', validTill: '2023-01-01', lastAccessedBy: 'User 1', lastAccessedAt: '2023-01-01 12:00:00' },
	{ key: 'Key 2', createdAt: '2022-02-01', validTill: '2023-02-01', lastAccessedBy: 'User 2', lastAccessedAt: '2023-02-01 12:00:00' },
	{ key: 'Key 3', createdAt: '2022-03-01', validTill: '2023-03-01', lastAccessedBy: 'User 3', lastAccessedAt: '2023-03-01 12:00:00' },
	{ key: 'Key 4', createdAt: '2022-04-01', validTill: '2023-04-01', lastAccessedBy: 'User 4', lastAccessedAt: '2023-04-01 12:00:00' },
	{ key: 'Key 5', createdAt: '2022-05-01', validTill: '2023-05-01', lastAccessedBy: 'User 5', lastAccessedAt: '2023-05-01 12:00:00' },
	// Add more dummy data as needed
  ]);
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  