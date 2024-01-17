<template>
<div class="w-full bg-dark  h-screen">
    <div class="relative w-full flex justify-center items-center  h-[60vh] lg:h-[80vh]">
        <div class="flex items-center justify-center min-h-screen">
            <div class="animate-spin rounded-full w-[175px] h-[175px] lg:w-[350px] lg:h-[350px]  border-t-8 lg:border-t-8 border-blue-500 border-solid">

            </div>
            </div>

               <img class=" w-[150px] h-[150px] lg:w-[320px] lg:h-[320px] absolute  object-cover rounded-full" src="../../assets/keyfives.gif" alt="">


    </div>

    
    <div class="w-full text-white font-mono flex justify-center items-center">
        <span class="relative flex h-2 w-2 mx-1 animate-bounce  ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span class="relative flex h-2 w-2 mx-1 transition delay-700 duration-300 ease-in-out ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span class="relative flex h-2 w-2 mx-1 animate-bounce ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>

        <p class="mx-5" > {{ store.keyStatus }} </p><span class="relative flex h-2 w-2 mx-1 animate-bounce  ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span class="relative flex h-2 w-2 mx-1 transition delay-700 duration-300 ease-in-out ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span class="relative flex h-2 w-2 mx-1 animate-bounce ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>

      </div>
</div>

</template>

<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/useAuthStore';
import { onMounted } from 'vue';
const store = useAuthStore()

onMounted(async() => {
 
  const res =   await store.initializeKeys()
  if(res){

   setTimeout(() => {
  
    router.push('/dashboard')

   }, 3000);
  }


    
})

</script>

<style scoped>

</style>