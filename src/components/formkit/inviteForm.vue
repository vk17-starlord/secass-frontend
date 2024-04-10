<script setup lang="ts">
import { ref , Ref } from 'vue';
import customSubmit from '@/components/formkit/customSubmit.vue';
import { createInput } from '@formkit/vue';
import axios from 'axios';
//@ts-ignore
import { InviteService } from '@/services/InviteServiceWrapper';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useAuthStore } from '@/store/useAuthStore';
const props = defineProps({
  organization: {
    type: String,
    default: null,
  },
});

const submitButton = createInput(customSubmit, {
    props: ['text', 'loading']
})

const loading: Ref<boolean> = ref(false)

  const store = useOrganizationStore();
  const authStore = useAuthStore();

function convertDateString(dateString: string): string {
  // Parse the input date string
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript Date object
  const day = parseInt(dateParts[2]);

  // Create a new Date object with the parsed date components
  const date = new Date(year, month, day);

  // Set the desired time components
  date.setHours(9); // Set hours to 09:00
  date.setMinutes(0); // Set minutes to 00
  date.setSeconds(0); // Set seconds to 00
  date.setMilliseconds(0); // Set milliseconds to 00

  // Convert the date to ISO 8601 format (with UTC timezone)
  const isoString = date.toISOString();

  return isoString;
}

const handleSubmit = async(val:any) => {
  console.log(store.currentOrganization);


  const invitePayload = {
    "expiresAt": convertDateString(val.expiryDate),
    "fromUserEmail": authStore.getUserData.value.email,
    "toUserEmail": val.toUserEmail,
    "organizationId": store.currentOrganization.id,
     "symKey": {
            "encryptedData": store.currentOrganization.symKey.encryptedData,
            "alg": "AES-GCM"
      }
  }
  const inviteService =await InviteService.createInvite(invitePayload);

  if(inviteService){
    
  }
 
  
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
  name="organizationId"
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

<FormKit
  type="date"
  name="expiryDate"
  outer-class="w-full"
  input-class="$reset px-4 py-2.5 text-gray-200 bg-dark w-full border-none focus:outline-none !important shadow-none"
  label-class=""
  inner-class="$reset mt-2 rounded-md  overflow-hidden bg-dark w-full border-none focus:outline-none !important shadow-none"
  help="Enter your birth day"
  validation-visibility="live"
/>

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
