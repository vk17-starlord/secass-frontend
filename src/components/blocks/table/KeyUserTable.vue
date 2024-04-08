<template>
    <div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
      <div class="flex justify-between items-center pt-4">
        <h2 class="text-white font-semibold text-2xl">Users</h2>
        <button class="bg-primary px-12 py-1 rounded-md text-white">Add User</button>
      </div>
	  <div class="table-header w-full grid grid-cols-4 border-2 border-transparent py-5 mb-5 border-b-gray-400 ">
		<div class="col justify-start items-center ">
		  <h3 class="text-white font-semibold text-lg">Name</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Last Accessed</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Created On</h3>
		</div>
		<div class="col justify-start items-center">
		  <h3 class="text-white font-semibold text-lg">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
		<div v-for="(row, index) in tableData" :key="index" class="grid grid-cols-4 text-gray-500 ">
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.name }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.lastAccessed }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">{{ row.createdOn }}</div>
		  <div class="col flex px-0 justify-start items-center  py-3">
			<button class="bg-danger px-12 py-1 rounded-md text-white">Remove</button>
		  </div>
		</div>
	  </div>
	</div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const tableData = ref([
        { name:"Github PAT", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Digital Ocean", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Database Password", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Redis Password", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"AWS Access Key", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"GCP Key", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Github PAT", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Digital Ocean", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Database Password", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"Redis Password", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"AWS Access Key", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" },
        { name:"GCP Key", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" }
    ])
</script>

<style scoped>

</style>