<template>
	<TransitionRoot appear :show="isOpen" as="template" class="text-white">
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
				   <i class='bx mr-5 bxs-user-plus'></i> Add User
				</DialogTitle>
                <div class="mt-4 flex flex-col justify-between">
                    <div class="flex justify-around items-center">
                        <p>User</p>
                        <select class="bg-dark px-10 py-1 rounded-md" name="Select User" id="user">
                            <option v-for="(user,idx) in users">{{ user.name }}</option>
                        </select>
                    </div>
                    <div class="flex justify-around items-center mt-4">
                        <p>Access</p>
                        <select class="bg-dark px-10 py-1 rounded-md" name="Select User" id="user">
                            <option value="Editor">Editor</option>
                            <option value="Viewer">Viewer</option>
                        </select>
                    </div>
                    <button @click="closeModal" class="bg-primary w-[50%] py-2 h-max rounded-md text-white mt-5 mx-auto">Add User</button>
                </div>
			  </DialogPanel>
			</TransitionChild>
		  </div>
		</div>
	  </Dialog>
	</TransitionRoot>
  </template>
  
  <script setup lang="ts">

    import { useOrganizationStore } from '@/store/useOrganizationStore';
import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'

    const { isOpen } = defineProps({
        isOpen: Boolean,
    });

    const emits = defineEmits(['close']);

    // Function to close the modal
    function closeModal() {
        emits('close');
    }

    const orgStore = useOrganizationStore();
    const currentOrganization = orgStore.currentOrganization;

    const orgusers = await orgStore.getOrganizationUsers(currentOrganization?.id);
    console.log(orgusers);
    
    const users:{
        id: number,
        name: string,
    }[] = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' }
    ];

    </script>
  