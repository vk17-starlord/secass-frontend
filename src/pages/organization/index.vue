<template>
	<div class="w-full text-white mt-10">
		<div class="w-full">
			<h2 class="mb-4 text-4xl py-5  text-white font-bold">Github</h2>
			<p class="opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae id, voluptatem fugiat labore qui velit vel blanditiis molestias, ea aut, sed laudantium natus facere! Blanditiis asperiores, impedit atque soluta ea a cum accusantium aperiam, quia quisquam veritatis voluptatibus. Nihil explicabo repellendus accusamus quibusdam libero earum est consectetur, dolore corrupti!</p>
		</div>
		<div class="w-full mt-10">
			<TabGroup>
				<TabList >
				  <Tab class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"> <i class=' mr-2 bx bx-key' ></i> Keys</Tab>
				  <Tab class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"><i class=' mr-2 bx bxs-user' ></i> Users</Tab>
				  <Tab class="px-24  focus:outline-none !important rounded-tl-lg rounded-tr-lg py-4 text-gray-500"><i class=' mr-2 bx bxs-cog' ></i> Settings</Tab>
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
// import organizationSettingForm from '../../components/formkit/organizationSettingForm';
</script>

<style scoped>
[data-headlessui-state="selected"] {
	background-color: #0E0E14;
	color:white;
  }
</style>