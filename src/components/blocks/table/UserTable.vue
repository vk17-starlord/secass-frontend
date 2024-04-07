<template>
	<inviteUser @close="closeModal" :isOpen="isOpen"/>
	<div class="w-full flex items-center justify-between">
		<h2 class="text-xl font-bold " >Organization Users</h2>
		<button @click="openModal" class="bg-primary px-20 py-2 h-max rounded-md text-white">Invite User</button>
	</div>
	<div class="w-full flex justify-between space-x-5 my-10">
		<input class="w-full bg-dark rounded-md px-5 text-white py-2.5" placeholder="Search Users" />
		<button class="bg-primary px-20  rounded-md text-white">Search</button>
	</div>
	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
	  <div class="table-header w-full grid grid-cols-7 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col flex justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Name</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Email</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Invitation</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Status</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Org. Key</h3>
		</div>
		<div class="col justify-center flex items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
		<div class="col justify-center flex items-center">
			<h3 class="text-white font-semibold text-lg">Delete</h3>
		  </div>
	  </div>
	  <div class="table-body">
		<div v-for="(user, index) in users" :key="index" class="grid grid-cols-7 gap-2.5 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center py-3">{{ user.name }}</div>
		  <div class="col flex px-0 justify-start items-center py-3">{{ user.email }}</div>
		  <div class="col flex px-0 justify-start items-center py-3">{{ user.role }}</div>
		  <div :data-status="user.status" class="col flex px-0 justify-start items-center py-3"> <i class='bx mr-4 bx-bolt-circle'></i> {{ user.status }}</div>
		  <div   class="col flex px-0 justify-start items-center py-3"><button  :data-key-status="user.key" class="w-full py-2 rounded-md text-white">{{ user.key }}</button></div>
		  <div class="col flex px-0 justify-start items-center py-3">
			<button class="bg-primary w-full px-10 py-2 rounded-md text-white">View</button>
		  </div>
		  <div class="col flex px-0 justify-start items-center py-3">
			<button class="bg-[#921616] w-full px-10 py-2 rounded-md text-white">Remove</button>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
//@ts-ignore
import inviteUser from '@/components/blocks/modal/inviteUser.vue';
import { ref } from 'vue'
  interface User {
	name: string;
	email: string;
	role: string;
	status: string;
	lastLogin: string;
  }
  

  const users = ref<User[]>([
	{ name: 'John Doe', email: 'john@example.com', role: 'Accepted', status: 'Active', key: 'Activated' },
	{ name: 'Jane Doe', email: 'jane@example.com', role: 'Pending', status: 'Active', key:  'Deactivated' },
	{ name: 'Alice Smith', email: 'alice@example.com', role: 'Rejected', status: 'Inactive', key: 'Generate' },
	// Add more users as needed
  ]);

  const isOpen = ref(false);

  function closeModal() {
	isOpen.value = false
  }
  function openModal() {
	isOpen.value = true
  }

  </script>
  
  <style scoped>
  /* Style for the element with data-status="Active" */
  [data-status="Active"] {
    color: cyan; /* Change color to green */
    font-weight: bold; /* Make text bold */
  }

  /* Style for the element with data-status="Inactive" */
  [data-status="Inactive"] {
    color: #921616; /* Change color to red */
  }

    /* Style for the element with data-status="Inactive" */
	[data-key-status="Activated"] {
		color: cyan; /* Change color to green */
		background-color: rgba(0, 255, 255, 0.109);
	  }

	  [data-key-status="Deactivated"] {
		color: gray; 
		background-color: rgba(128, 128, 128, 0.077);
	  }
	  [data-key-status="Generate"] {
		color: white; 
		background-color: rgb(31, 181, 181);
	  }
  </style>
  