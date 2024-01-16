<template>
    <div class="w-full flex justify-between cursor-pointer relative">
      <input
        :type="currentType"
        :value="props.context?._value"
        :class="props.context?.classes.input"
        :disabled="props.context?.disabled"
        @input="handleInput"
      />
      <FormKitIcon
        class="absolute top-3 right-2 text-gray-500"
        :icon="currentIcon"
        @click="handleIconClick"
        :disabled="props.context?.disabled"
      />
    </div>
    <div
      v-if="props.context?._value && props.context?._value?.length > 0 && !isPasswordValid"
      class="absolute w-full p-2 shadow-md flex-col flex items-center bg-white rounded-md my-2 justify-center"
    >
      <p
        v-for="(error, idx) in errors"
        :key="`error-${idx}`"
        class="my-1 w-full flex justify-start items-center"
      >
        <FormKitIcon :class="[error.condition ? 'text-primary' : 'text-gray-500']" :icon="tick" />
        <span class="mx-2 text-[0.8rem]"> {{ error.message }} </span>
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  // import { getValidationMessages } from '@formkit/validation'
  import { FormKitIcon } from '@formkit/vue';
import { computed } from 'vue';
  // import { getNode } from '@formkit/core'
  import { ref } from 'vue';
  const props = defineProps({
    context: Object
  })
  
  // const messages = ref([])
  
  const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
    </svg>
    `
  const eyeClosed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
    </svg>
    `
  const tick = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-4 h-4">
    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
  </svg>
  `
  
  const currentType = ref('password')
  const currentIcon = ref(eyeIcon)
  const handleIconClick = () => {
    currentIcon.value = currentIcon.value == eyeIcon ? eyeClosed : eyeIcon
    currentType.value = currentType.value === 'password' ? 'text' : 'password'
  }
  
  const errors = computed(() => {
    return [
      {
        message: 'Password should have Lowercase and Uppercase',
        condition: /^(?=.*[a-z])(?=.*[A-Z])/.test(props.context?._value) || false
      },
  
      {
        message: 'Password should have atleast 1 Digit',
        condition: /\d/.test(props.context?._value) || false
      },
      {
        message: 'Password should have atleast 1 Symbol',
        condition: /[^a-zA-Z0-9]/.test(props.context?._value) || false
      },
      {
        message: 'Password should have atleast 8 Characters',
        condition: props.context?._value?.length >= 8 || false
      }
    ]
  })
  
  const handleInput = (e:any) => {
    if (props.context?.disabled) return
  
    props.context?.node.input(e.target.value)
  }
  
  const isPasswordValid = computed(() => {
    return errors.value.every((error) => error.condition)
  })
  </script>
  
  <style scoped></style>
  