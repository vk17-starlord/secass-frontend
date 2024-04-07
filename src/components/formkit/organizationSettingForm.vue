<script setup lang="ts">
import { ref , Ref } from 'vue';
//@ts-ignore
import customSubmit from '@/components/formkit/customSubmit.vue';
import { createInput } from '@formkit/vue';

const submitButton = createInput(customSubmit, {
    props: ['text', 'loading']
})

const loading: Ref<boolean> = ref(false)

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
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">Organization Name <span class="text-primary">*</span></p>
        </template>
      </FormKit>

      <!-- Description Field -->
      <FormKit
        type="textarea"
        name="description"
        outer-class="w-full"
        input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
        label-class=""
        inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
        validation="required"
        message-class="text-red-500 text-sm mt-2"
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">Description <span class="text-primary">*</span></p>
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
      :value="true"
	  outer-class="flex justify-start items-start text-white"
	  wrapper-class="flex text-white"
      >
        <template #label>
          <p class="text-md text-gray-200 my-4">SDK Access <span class="text-primary">*</span></p>
        </template>
      </FormKit>

      <!-- Submit Button -->
      <div class="w-full flex mt-5 col-span-2 text-white justify-center items-center">
        <FormKit
          :loading="loading"
          :type="submitButton"
          input-class="$reset flex w-full justify-center items-center text-center py-2.5  bg-primary w-full"
          inner-class="$reset w-full  rounded-md  overflow-hidden  w-full border-none focus:outline-none !important shadow-none"
          outer-class="w-full"
		  wrapper-class="w-full !important"
          text="Save Settings"
        >
        </FormKit>
      </div>
    </FormKit>
  </div>
</template>

<style scoped>
.formkit-wrapper, .formkit-fieldset{
	width: 100% !important;
}
</style>