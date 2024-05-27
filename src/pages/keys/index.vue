<template>
	<div class="w-full h-full text-white">
		<div class="w-full mb-5">
			<h2 class="mb-4 text-4xl py-5  text-white font-bold">{{ getCurrentOrg.name || ""}}</h2>
			<p class="opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae id, voluptatem fugiat labore qui velit vel blanditiis molestias, ea aut, sed laudantium natus facere! Blanditiis asperiores, impedit atque soluta ea a cum accusantium aperiam, quia quisquam veritatis voluptatibus. Nihil explicabo repellendus accusamus quibusdam libero earum est consectetur, dolore corrupti!</p>
		</div>
		<div class="flex gap-5 justify-between w-full mt-4 " v-if="iskeyAdmin">
			<div v-if="currentKey"  class="flex flex-col justify-between min-h-[70vh] ">
				<KeyDesc  :title="currentKey.name" :organization="getCurrentOrg.name" :description="currentKey.description"/>
				<KeyValue :canEdit="iskeyAdmin" :keyTitle="currentKey.name" :keyName="currentKey.name" :keyValue="currentKey.encryptedData"/>
				<KeyLifetime :createdAt="currentKey.createdAt" :validTill="currentKey.expiresAt" />
			</div>
			<div class="w-[60%]">
				<KeyUserTable  />
			</div>
		</div>
		<div  class="w-full grid-cols-3 grid gap-5 min-h-[70vh] " v-else>
			<KeyDesc  :title="currentKey.name" :organization="getCurrentOrg.name" :description="currentKey.description"/>
			<KeyValue :canEdit="iskeyAdmin || iskeyEditor" :keyTitle="currentKey.name" :keyName="currentKey.name" :keyValue="currentKey.encryptedData"/>
			<KeyLifetime  :createdAt="currentKey.createdAt" :validTill="currentKey.expiresAt" />
		</div> 
	</div>
</template>

<script setup lang="ts">
import KeyDesc from '@/components/blocks/cards/keyDesc.vue';
import KeyLifetime from '@/components/blocks/cards/keyLifetime.vue';
import KeyValue from '@/components/blocks/cards/keyValue.vue';
import KeyUserTable from '@/components/blocks/table/KeyUserTable.vue';
import { useAuthStore } from '@/store/useAuthStore';
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

const authStore = useAuthStore();
const currentUser = authStore.getUserData;
const keyAdmin = keyStore.getAdminByKeyID(router.params.keyId);


const iskeyAdmin = computed(()=>{
	console.log(currentUser.value.email , keyAdmin)
	return currentUser.value.email == keyAdmin
})
const iskeyEditor = computed(()=>{
	return currentKey?.user.role=='editor';
})
console.log(iskeyAdmin.value ,'here');
</script>

<style scoped>

</style>