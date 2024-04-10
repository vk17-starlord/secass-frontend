<template>
	<TransitionRoot appear :show="isOpen" as="template">
	  <Dialog as="div" @close="closeModal" class="relative z-10">
		<TransitionChild
		  as="template"
		  enter="duration-300 ease-out"
		  enter-from="opacity-0"
		  enter-to="opacity-100"
		  leave="duration-200 ease-in"
		  leave-from="opacity-100"
		  leave-to="opacity-0"
		>
		  <div class="fixed inset-0 bg-black/25" />
		</TransitionChild>
  
		<div class="fixed inset-0 overflow-y-auto bg-black/30">
		  <div
			class="flex bg-cardb min-h-full items-center justify-center p-4 text-center"
		  >
			<TransitionChild
			  as="template"
			  enter="duration-300 ease-out"
			  enter-from="opacity-0 scale-95"
			  enter-to="opacity-100 scale-100"
			  leave="duration-200 ease-in"
			  leave-from="opacity-100 scale-100"
			  leave-to="opacity-0 scale-95"
			>
			  <DialogPanel
				class="w-full max-w-md transform overflow-hidden rounded-2xl bg-input_bg p-6 text-left align-middle shadow-xl transition-all"
			  >
				<DialogTitle
				  as="h3"
				  class="text-2xl inline-flex justify-center items-center text-center font-semibold leading-6 text-white"
				>
				   <i class='bx mr-5 bxs-user-plus'></i> Invite Users
				</DialogTitle>

				<inviteForm :organization="organization"/>
  
			  </DialogPanel>
			</TransitionChild>
		  </div>
		</div>
	  </Dialog>
	</TransitionRoot>
  </template>
  
  <script setup lang="ts">

  import { ref } from 'vue'
  import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
  } from '@headlessui/vue'
import InviteForm from '@/components/formkit/inviteForm.vue';



// Define props
const { isOpen ,organization } = defineProps({
  isOpen: Boolean,
  organization: {
    type: String,
    default: null,
  },
});

const emits = defineEmits(['close']);

// Function to close the modal
function closeModal() {
  emits('close');
}
</script>
  