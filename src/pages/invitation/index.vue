<template>
	<div class="w-full bg-cardbg pb-5 text-white rounded-lg px-10">
	  <div class="table-header w-full grid grid-cols-5 border-2 border-transparent py-5 mb-5 border-b-gray-400">
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-sm">Created at</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-sm">Valid Till</h3>
		</div>
		<div class="col flex justify-start items-center">
		  <h3 class="text-white font-semibold text-sm">Organization ID</h3>
		</div>
		<div class="col flex justify-start items-start">
		  <h3 class="text-white font-semibold text-sm">From User Email</h3>
		</div>
		<div class="col justify-start flex items-center">
		  <h3 class="text-white font-semibold text-sm">Action</h3>
		</div>
	  </div>
	  <div class="table-body">
		<div v-if="userStore.Invites" v-for="(row, index) in userStore.Invites" :key="index" class="grid grid-cols-5 text-gray-500">
		  <div class="col flex px-0 justify-start items-center py-3">{{ formatDate(row.createdAt)	 }}</div>
		  <div class="col flex px-0 justify-start items-center py-3">{{ formatDate(row.expiresAt) }}</div>
	      <div class="col flex px-0 justify-start items-center py-3">{{ row.organizationId.substring(0,10) }}</div>
		  <div class="col flex px-0 justify-start items-center py-3">{{ row.fromUserEmail }}</div>
		  <div>
			<select @change="handleSelection" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
				<option selected>Choose Action</option>
				<option :value="'accept,'+row.id">Accept</option>
				<option :value="'reject,'+row.id">Reject</option>
	
			  </select>
		</div>
		</div>
	  </div>
	</div>
  </template>
  
<script setup lang="ts">
import { onMounted,ref } from 'vue';
// @ts-ignore
import { useUserStore } from '@/store/useUserStore';
import { submitForm } from '@formkit/vue';
const userStore = useUserStore()
onMounted(async()=>{
	await userStore.getInvites();
})

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const selectedValue = ref('');

function handleSelection(event: Event) {
  const target = event.target as HTMLSelectElement;
  const selectedOption = target.value.split(',');
  const action = selectedOption[0];
  if(action == 'accept'){
	console.log(selectedOption[1]);
	userStore.acceptInvite(selectedOption[1]);
  }else{
	userStore.deleteInvite(selectedOption[1]);
  }
  // Call your function with the selected valu
}


</script>

<style scoped>

</style>