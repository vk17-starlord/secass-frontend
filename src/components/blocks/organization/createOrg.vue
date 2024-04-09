<template>
	<div class="w-full">
	  <FormKit
		id="createOrganization"
		type="form"
		form-class="my-10 w-full flex justify-content items-center flex-col"
		outer-class="w-full flex justify-content items-center flex-col"
		inner-class="w-full flex justify-content items-center flex-col"
		message-class="text-red-500 text-sm mt-2"
		:actions="false"
		submit-label="Create Organization"
		@submit="handleSubmit"
	  >
		<FormKit
		  type="text"
		  name="name"
		  outer-class="w-full"
		  input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
		  label-class=""
		  inner-class="$reset mt-2 rounded-md overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
		  validation="required"
		  message-class="text-red-500 text-sm mt-2"
		>
		  <template #label>
			<p class="text-md text-gray-200 mb-2">Organization Name <span class="text-primary">*</span></p>
		  </template>
		</FormKit>
  
		<FormKit
		  type="textarea"
		  name="description"
		  outer-class="w-full"
		  input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
		  label-class=""
		  inner-class="$reset mt-2 rounded-md overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
		  validation="required"
		  message-class="text-red-500 text-sm mt-2"
		>
		  <template #label>
			<p class="text-md text-gray-200 mb-2">Organization Description <span class="text-primary">*</span></p>
		  </template>
		</FormKit>
		
		<!-- Other form fields go here if needed -->
  
		<div class="w-full flex text-white justify-center items-center">
		  <FormKit
			:loading="loading"
			:type="submitButton"
			input-class="$reset flex justify-center items-center text-center py-2.5 bg-primary w-full"
			inner-class="$reset rounded-md overflow-hidden w-full border-none focus:outline-none !important shadow-none"
			outer-class="w-full"
			text="Create Organization"
		  >
		  </FormKit>
		</div>
	  </FormKit>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref, Ref } from 'vue';
  //@ts-ignore
  import customSubmit from '@/components/formkit/customSubmit.vue';
  import { createInput } from '@formkit/vue';
import { useOrganizationStore } from '@/store/useOrganizationStore';
  
  const submitButton = createInput(customSubmit, {
	props: ['text', 'loading']
  });
  
  const loading: Ref<boolean> = ref(false);
  const orgStore = useOrganizationStore();
  
  const handleSubmit = ( val: any ) => {
	console.log('Form submitted:', val);
	orgStore.createOrganization(val);
	// Handle form submission here, potentially using formData.value
  };
  </script>
  