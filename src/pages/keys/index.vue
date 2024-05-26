<template>
	<div class="w-full h-full text-white">
		<div class="w-full mb-5">
			<h2 class="mb-4 text-4xl py-5  text-white font-bold">{{ getCurrentOrg.name || ""}}</h2>
			<p class="opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae id, voluptatem fugiat labore qui velit vel blanditiis molestias, ea aut, sed laudantium natus facere! Blanditiis asperiores, impedit atque soluta ea a cum accusantium aperiam, quia quisquam veritatis voluptatibus. Nihil explicabo repellendus accusamus quibusdam libero earum est consectetur, dolore corrupti!</p>
		</div>
		<div class="flex justify-between w-full mt-4 ">
			<div v-if="currentKey" class="flex flex-col justify-between min-h-[70vh]  w-[41%]">
				<KeyDesc  :title="currentKey.name" :organization="getCurrentOrg.name" :description="currentKey.description"/>
				<KeyValue :keyTitle="currentKey.name" :keyName="currentKey.name" :keyValue="currentKey.encryptedData"/>
				<KeyLifetime :createdAt="currentKey.createdAt" :validTill="currentKey.expiresAt" />
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
import KeyUserTable from '@/components/blocks/table/KeyUserTable.vue';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useSecretStore } from '@/store/useSecretStore';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const orgStore = useOrganizationStore();
const getCurrentOrg  = computed(()=>{
	return orgStore.currentOrganization;
});
const router = useRoute();
const keyStore = useSecretStore();
console.log(router.params);
const currentKey = keyStore.getSecretbyID(router.params.keyId);
console.log(currentKey);

</script>

<style scoped>

</style>