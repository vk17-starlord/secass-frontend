<template>
  <div
    class="bg-[#0A0A10] w-full text-white px-10 py-4 flex justify-between items-center"
  >
    <img src="../../../assets/logo.svg" />

    <div class="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
      <span class="mx-5"> {{ store.userData.name}} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/useAuthStore';
const store = useAuthStore()


</script>

<style scoped></style>
