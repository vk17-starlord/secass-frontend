<template>
	<div class="w-full cursor-pointer bg-cardbg px-4 py-3 rounded-md my-2.5 grid grid-cols-[2fr,10fr]">
	  <div class="col">
		<div class="icon flex justify-center items-center text-md bg-black rounded-full w-12 h-12">
		  <i class='bx bx-key'></i>
		</div>
	  </div>
	  <div class="col">
		<h2 class="font-semibold  text-md leading-6 text-white mb-2">{{ keyInfo.name }}</h2>
		<div class="flex justify-between">
			<p class="text-gray-500 text-sm">{{ keyInfo.organization }}</p>
			<p class="text-gray-500 text-sm">Created at : {{ keyInfo.createdAt }}</p>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
	keyInfo: {
	  type: Object as () => ({
		name: String,
		organization: String,
		createdAt: String
	  }),
	  required: true
	}
  });
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  