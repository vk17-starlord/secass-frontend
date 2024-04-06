<template>
	<div class="w-full">
		<Navbar></Navbar>
	</div>
	<div class="w-full min-h-screen bg-dark grid grid-cols-[1fr,11fr]">
		<div class="col">
			<Sidebar/>
		</div>
		<div class="col px-14">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
//@ts-ignore
import Navbar from '@/components/blocks/layout/navbar.vue';
import Sidebar from '@/components/blocks/layout/sidebar.vue';
</script>