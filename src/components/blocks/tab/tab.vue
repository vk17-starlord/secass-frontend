<template>
	<div>
	  <div class="flex">
		<div
		  v-for="(tab, index) in tabs"
		  :key="index"
		  @click="activeTab = index"
		  :class="{ 'bg-gray-200': activeTab === index }"
		  class="py-2 px-4 cursor-pointer"
		>
		  {{ tab.label }}
		</div>
	  </div>
	  <div class="mt-4">
		<slot :tab="tabs[activeTab]"></slot>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface TabItem {
	label: string;
	content: string;
  }
  
  const tabs = ref<TabItem[]>([]);
  const activeTab = ref<number>(0);
  
  const addTab = (tab: TabItem) => {
	tabs.value.push(tab);
  };
  
  </script>
  