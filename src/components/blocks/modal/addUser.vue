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
                  <FormKit
                  id="createKey"
                  type="form"
                  form-class="my-10 text-white  w-full flex justify-content items-center flex-col"
                  outer-class="w-full flex justify-content items-center flex-col"
                  inner-class="w-full flex justify-content items-center flex-col"
                  message-class="text-red-500 text-sm mt-2"
                  :actions="false"
                  submit-label="Create Key"
                  @submit="handleSubmit"
                  >
                  <FormKit
                  outer-class="w-full text-white font-xl"
                  option-class="text-white"
                  input-class="text-white"
                  inner-class="w-full bg-gray-200 text-white font-xl"
                   message-class="text-red-500 text-sm mt-2"
                   type="select"
                   label="Select User"
                   name="id"
                   :options="users"
                 />
 
                   <FormKit
                    outer-class="w-full  text-white font-xl"
                   inner-class="w-full bg-gray-200 text-white font-xl"
                   message-class="text-red-500 text-sm mt-2"
                     type="select"
                     label="Select Role"
                     name="role"
                     :options="[
                       'editor',
                       'viewer',
                     ]"
                   />
 
                   <div class="w-full flex text-white justify-center items-center">
                     <FormKit
                     :loading="loading"
                     :type="submitButton"
                     input-class="$reset flex justify-center items-center text-center py-2.5 bg-primary w-full"
                     inner-class="$reset rounded-md overflow-hidden w-full border-none focus:outline-none !important shadow-none"
                     outer-class="w-full"
                     text="Share Key"
                     >
                     </FormKit>
                   </div>

                  </FormKit>
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
import { useSecretStore } from '@/store/useSecretStore';
import { FormKit, createInput } from '@formkit/vue';
//@ts-ignore
import customSubmit from '@/components/formkit/customSubmit.vue';
import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'
import { Ref } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const loading = ref(false);

const submitButton = createInput(customSubmit, {
	props: ['text', 'loading']
  });
    const { isOpen } = defineProps({
        isOpen: Boolean,
    });


    const emits = defineEmits(['close']);

    const keyID = useRoute().params.keyId;

    const handleSubmit = (val:any)=>{
      loading.value=false;
      secretStore.shareSecret([val],keyID);
      alert('Key shared successfully !!')
      emits('close');
    }

    // Function to close the modal
    function closeModal() {
        emits('close');
    }

    const orgStore = useOrganizationStore();
    const secretStore = useSecretStore();
    
    const users:Ref<any> = ref([]);

    const currentOrganization = orgStore.currentOrganization;

    const key = useRoute().params.keyId;
    const adminEmail = secretStore.getAdminByKeyID(key);

    onMounted(async() => {
      const orgusers = await orgStore.getOrganizationUsers(currentOrganization?.id);
      if(orgusers && Array.isArray(orgusers)){
        users.value = orgusers.map((ele)=>{
          return {
            value:ele.id,
            label:ele.name,
            email:ele.email,
          }
        }).filter(ele=>ele.email !== adminEmail);
      }
    });


    </script>
    <style scoped>
    select.formkit-input option{
      color: white !important;
    }
  </style>
  