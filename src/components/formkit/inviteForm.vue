<script setup lang="ts">
import { ref , Ref } from 'vue';
import customSubmit from '@/components/formkit/customSubmit.vue';
import { createInput } from '@formkit/vue';

const submitButton = createInput(customSubmit, {
    props: ['text', 'loading']
})
const props = defineProps({
  organization: {
    type: String,
    default: null,
  },
});

const loading: Ref<boolean> = ref(false)

const handleSubmit = (val:any) => {
  console.log('Form submitted:',val);
  // Handle form submission here, potentially using data.value
};
</script>

<template>
  <div class="w-full">
    <FormKit
    id="invite"
    type="form"
    form-class="my-10 w-full flex justify-content items-center flex-col"
    outer-class="w-full flex justify-content items-center flex-col"
    inner-class="w-full flex justify-content items-center flex-col"
    message-class="text-red-500 text-sm mt-2"
    :actions="false"
    submit-label="Invite"
    @submit="handleSubmit"
  >

  <FormKit
  type="email"
  name="toUserEmail"
  outer-class="w-full"
  input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
  label-class=""
  inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
  :delay="1000"
  validation="required|length:5|email"
  message-class="text-red-500 text-sm mt-2"
>
  <template #label>
    <p class="text-md text-gray-200 mb-2">Email <span class="text-primary">*</span></p>
  </template>
</FormKit>

<FormKit
  v-if="!props.organization"
  type="select"
  outer-class="w-full"
  input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
  label-class=""
  inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
  label="Which country is the smallest?"
  name="small_country"
  :options="[
    'Monaco',
    'Vatican City',
    'Maldives',
    'Tuvalu',
  ]"
>
<template #label>
  <p class="text-md text-gray-200 mb-2">Organization <span class="text-primary">*</span></p>
</template>
</FormKit>
<div class="w-full flex text-white justify-center items-center">
  <FormKit
    :loading="loading"
    :type="submitButton"
    input-class="$reset flex justify-center items-center text-center py-2.5  bg-primary w-full"
    inner-class="$reset  rounded-md  overflow-hidden  w-full border-none focus:outline-none !important shadow-none"
    outer-class="w-full"

    text="Invite User"
  >
  </FormKit>
</div>

  </FormKit>

  </div>
</template>
