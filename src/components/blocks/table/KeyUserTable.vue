<template>
	<addUser @close="closeAddUserModal" :isOpen="isAddUserOpen"/>
    <div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10 max-h-[70vh] overflow-scroll">
      <div class="flex justify-between items-center pt-4">
        <h2 class="text-white font-semibold text-2xl">Users</h2>
        <button @click="openAddUserModal" class="bg-primary px-12 py-1 rounded-md text-white">Add User</button>
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
    import { onMounted, ref } from 'vue';
	import addUser from '../modal/addUser.vue';
	import { useOrganizationStore } from '@/store/useOrganizationStore';
	import { useRoute } from 'vue-router';
import { useSecretStore } from '@/store/useSecretStore';

	const keyID = useRoute().params.keyId;
	const orgId = useRoute().params.id;
	const store = useSecretStore();

    const tableData = ref([
        { name:"Github PAT", lastAccessed: "10:10 24 April 2024", createdOn: "10:10 24 April 2024" }
    ])

	function formatDate(isoString: string): string {
	// Convert the ISO string to a Date object
	const date = new Date(isoString);

	// Check if the date is valid
	if (isNaN(date.getTime())) {
		return "Invalid Date";
	}

	// Define options for the date format
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	};

	// Format the date using Intl.DateTimeFormat
	return new Intl.DateTimeFormat('en-GB', options).format(date);
	}

	onMounted(async()=>{
		const data = await store.getSecretUsers(keyID,orgId);
		console.log(data);
		if(data){
			tableData.value = data.map((ele:any)=>{
				console.log(ele);
				return {
					 name: ele.name == "" ? ele.creatorEmail.substr(0,16) : ele.name,
					 lastAccessed:formatDate(ele.createdAt),
					 createdOn: formatDate(ele.updatedAt)
				}
			});
			console.log(data)
		}
	})

	const isAddUserOpen = ref(false);

	function closeAddUserModal() {
		isAddUserOpen.value = false
	}
	function openAddUserModal() {
		isAddUserOpen.value = true
	}

</script>

<style scoped>

</style>