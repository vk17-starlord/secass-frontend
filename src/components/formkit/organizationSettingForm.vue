<script setup lang="ts">
import { ref , Ref } from 'vue';
//@ts-ignore
import customSubmit from '@/components/formkit/customSubmit.vue';
import { createInput } from '@formkit/vue';
import { useRoute } from 'vue-router';
import { useOrganizationStore } from '@/store/useOrganizationStore';

const submitButton = createInput(customSubmit, {
    props: ['text', 'loading']
})

const loading: Ref<boolean> = ref(false)

const router = useRoute()
const store = useOrganizationStore();
const currentOrg = store.getOrganizationByID(router.params.id) 
console.log(currentOrg,'org');
const formData = ref({
  fromUserEmail: '',
  toUserEmail: '',
  organization: '',
  description: '',
  orgAccessKey: '',
  sdkAccess: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  // Handle form submission here, potentially using formData.value
};
</script>

<template>
  <div class="w-full mx-auto">
    <FormKit
      id="invite"
      type="form"
      form-class="my-10 mx-auto w-full grid grid-cols-2"
      outer-class="w-full flex justify-content items-center flex-col"
      inner-class="w-full flex justify-content items-center flex-col"
      message-class="text-red-500 text-sm mt-2"
      :actions="false"
      submit-label="Invite"
      @submit="handleSubmit"
    >
      <!-- Organization Name Field -->
      <FormKit
        type="text"
        name="organization"
        outer-class="w-full"
        input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
        label-class=""
        inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
        validation="required"
        message-class="text-red-500 text-sm mt-2"
        :value="currentOrg?.name || ''"
        :disabled="true"
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">Organization Name <span class="text-primary">*</span></p>
        </template>
      </FormKit>

      <!-- Organization Access Key Field -->
      <FormKit
        type="text"
        name="orgAccessKey"
        outer-class="w-full"
        input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
        label-class=""
        inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
        validation="required"
        message-class="text-red-500 text-sm mt-2"
        :disabled="true"
        :value="currentOrg?.symKey.encryptedData || ''"
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">Organization Access Key <span class="text-primary">*</span></p>
        </template>
      </FormKit>

      <!-- SDK Access Field -->
      <FormKit
        type="checkbox"
        label="Terms and Conditions"
        name="terms"
        :value="currentOrg?.sdkAccess || true"
        outer-class="flex justify-start items-start text-white"
        wrapper-class="flex text-white"
        :disabled="true"
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">SDK Access <span class="text-primary">*</span></p>
        </template>
      </FormKit>

    </FormKit>
  </div>
</template>

<style scoped>
.formkit-wrapper, .formkit-fieldset{
	width: 100% !important;
}
</style>