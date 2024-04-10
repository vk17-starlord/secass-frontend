<template>
	<div class="bg-primary rounded-xl  py-5 px-10 grid grid-cols-[3fr,9fr]">
	  <div class="col">
		<div class="bg-white flex justify-center items-center rounded-full w-16 h-16 my-2">
			<div class="text-primary text-2xl" v-html="data.icon"></div>
		</div>
		<h3 v-if="data.totalCount !== undefined">{{ data.totalCount }}</h3>
	  </div>
	  <div class="col flex flex-col justify-start items-start h-full ">
		<h2 class="text-white font-bold text-xl">{{ data.title }}</h2>
		<p class="text-white my-4 opacity-50">{{ data.desc }}</p>
		<RouterLink  v-if="data.link" class="bg-white px-10 py-2 rounded-md text-primary" :to="data.link" >{{ data.btn }}</RouterLink>
		<button v-else @click="onbtnclick" class="bg-white px-10 py-2 rounded-md text-primary">{{data.btn}}</button>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';
  const emits = defineEmits(['button-click']);
  const onbtnclick = ()=>{
	emits('button-click')
  }
  const props = defineProps({
	data: {
	  type: Object as () => ({
		icon: string,
		totalCount: Number,
		title: string,
		desc: string,
		link: string,
		btn: string,
	  }),
	  required: true
	}
  })
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  