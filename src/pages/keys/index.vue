<template>
	<div class="w-full h-full text-white"> 
		<div class="w-full">
			<h2 class="mb-4 text-4xl py-5  text-white font-bold">Github</h2>
			<p class="opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae id, voluptatem fugiat labore qui velit vel blanditiis molestias, ea aut, sed laudantium natus facere! Blanditiis asperiores, impedit atque soluta ea a cum accusantium aperiam, quia quisquam veritatis voluptatibus. Nihil explicabo repellendus accusamus quibusdam libero earum est consectetur, dolore corrupti!</p>
		</div>
		<div class="flex justify-between w-full mt-4">
			<div class="flex flex-col justify-start w-[41%]">
				<KeyDesc title="Key 1" organization="Github" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae id, voluptatem fugiat labore qui velit vel blanditiis molestias, ea aut, sed laudantium natus facere! Blanditiis asperiores, impedit atque soluta ea a cum accusantium aperiam."/>
				<KeyValue keyTitle="Key 1" keyName="Key Name" keyValue="Key Value"/>
				<KeyLifetime createdAt="12 January 2024" validTill="12 January 2024"/>
			</div>
			<div class="w-[55%]">
				<KeyUserTable/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import KeyDesc from '@/components/blocks/cards/keyDesc.vue';
import KeyLifetime from '@/components/blocks/cards/keyLifetime.vue';
import KeyValue from '@/components/blocks/cards/keyValue.vue';
import KeyUserTable from '@/components/blocks/table/keyUserTable.vue';


</script>

<style scoped>

</style>