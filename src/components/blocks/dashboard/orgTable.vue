<template>
    <table class="w-full text-white rounded text-left bg-input_bg">
        <thead class="table-header-border">
            <tr>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Name
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Email
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Admin
                    </p>
                </th>
                <th class="px-4 py-4 text-center">
                    <p class="text-color-grey font-bold">
                        Actions
                    </p>
                </th>
            </tr>
        </thead>
        <tbody class="text-left">
            <tr v-for="(org, index) in data" :key="index">
                <td class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        {{ org.name }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ org.email }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ org.admin }}
                    </p>
                </td>
                <td class="flex justify-center items-center px-4 py-4 ">
                    <button class="action-btn" @click="goToOrganization">
                        <img width="16" height="16" class="mr-2" src="../../../assets/eye.svg" alt="edit" />
                        View Secrets
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import router from '@/router';


  const props = defineProps<{
    data: Array<any>,
  }>();

  const goToOrganization = () => {
    router.push('/organization');
  }
</script>
<style scoped>
    .table-header-border {
        border-bottom: 1px solid #1f1f1f
    }
    .text-color-grey {
        color: #8B8B8B
    }
    .action-btn {
        width: 200px;
        height: 33px;
        top: 548px;
        left: 886px;
        border-radius: 8px;
        background-color: #396BBE;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
</style>
