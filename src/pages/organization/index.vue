<template>
	<div class="w-full text-white mt-10">
		<div class="w-full">
			<h2 v-if="store.currentOrganization" class="mb-4 text-4xl py-5  text-white font-bold">{{  store.currentOrganization.name }}</h2>
			<p class="opacity-50"></p>
		</div>
		<div class="w-full mt-10">
			<TabGroup>
				<TabList >
				  <Tab class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"> <i class=' mr-2 bx bx-key' ></i> Keys</Tab>
				  <Tab v-if="store.currentOrgRole=='admin'" class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"><i class=' mr-2 bx bxs-user' ></i> Users</Tab>
				  <Tab v-if="store.currentOrgRole=='admin'" class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"><i class=' mr-2 bx bxs-cog' ></i> Settings</Tab>
				</TabList>
				<TabPanels class="w-full">
				  <TabPanel class="w-full bg-cardbg p-4">
					<KeysTable/>
				  </TabPanel>
				  <TabPanel class="w-full bg-cardbg p-4">
					<UsersTable/>
				  </TabPanel>
				  <TabPanel class="w-full bg-cardbg p-4">
					<organizationSettingForm/>
				  </TabPanel>
				</TabPanels>
			  </TabGroup>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import KeysTable from '@/components/blocks/table/KeysTable.vue';
import UsersTable from '@/components/blocks/table/UserTable.vue';
import organizationSettingForm from '@/components/formkit/organizationSettingForm.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useSecretStore } from '@/store/useSecretStore';
// import organizationSettingForm from '../../components/formkit/organizationSettingForm';

const router = useRoute();
const store = useOrganizationStore();

onMounted(async()=>{
	const id = router.params.id;
	console.log(id);
	const org  = store.getOrganizationByID(id);
	console.log(org)
	store.setOrganization(org)
})
</script>

<style scoped>
[data-headlessui-state="selected"] {
	background-color: #0E0E14;
	color:white;
  }
</style>