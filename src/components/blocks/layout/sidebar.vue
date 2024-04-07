<template>
	<div class="w-8/12 mx-auto min-h-screen sticky left-0 top-0 flex justify-center items-center align-center">
		<div class="sidebar w-full  text-white flex flex-col space-y-6 justify-center items-center bg-input_bg px-5 rounded-full min-h-[50vh]">
			<RouterLink to="/app/dashboard"> <div class="text-xl inline-flex justify-center align-middle items-center w-[42px] h-[42px] hover:bg-dark rounded-full bg-gray-900 text-primary "><i class='bx bxs-home '></i></div> </RouterLink>
			<RouterLink to="/"> <div class="text-xl inline-flex justify-center align-middle items-center w-[42px] h-[42px] hover:bg-dark rounded-full bg-gray-900 text-gray-500 hover:text-primary "><i class='bx bxs-user-pin'></i></div> </RouterLink>
			<RouterLink to="/"> <div class="text-xl inline-flex justify-center align-middle items-center w-[42px] h-[42px] hover:bg-dark rounded-full bg-gray-900 text-gray-500 hover:text-primary "><i class='bx bxs-cog' ></i></div> </RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>