<template>
    <div class="w-full grid grid-cols-2 bg-dark">
       <div class="w-full min-h-screen flex justify-center items-center">

        <Loginform></Loginform>
       </div>
       <div class="w-full min-h-screen flex justify-center items-center bg_img">
 
       </div>
    </div>
</template>

<script setup lang="ts">
import Loginform from '@/components/blocks/auth/loginform.vue';


</script>

<style scoped>
.bg_img{
    background-image: url('../../assets/hero_bg.png');
    background-size: cover;
    background-position: center;
}
</style>