<template>
    <table class="w-full text-white rounded text-left bg-input_bg">
        <thead class="table-header-border">
            <tr>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Key
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Created At
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Valid Till
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Last Accessed
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        Last Accessed By
                    </p>
                </th>
                <th class="px-4 py-4">
                    <p class="text-color-grey text-center font-bold">
                        Action
                    </p>
                </th>
            </tr>
        </thead>
        <tbody class="text-left">
            <tr v-for="(secret, index) in secrets" :key="index">
                <td class="px-4 py-4">
                    <p class="text-color-grey font-bold">
                        {{ secret.key }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ secret.createdOn }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ secret.validTill }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ secret.lastAccessedOn }}
                    </p>
                </td>
                <td class="px-4 py-4">
                    <p class="text-color-grey">
                        {{ secret.lastAccessedBy }}
                    </p>
                </td>
                <td class="flex justify-center items-center px-4 py-4">
                    <button class="w-[158px] h-[30px] bg-red-700 rounded-md">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    const props = defineProps<{
        secrets: Secret[];
    }>();
    console.log(props.secrets);
</script>

<style scoped>
    .table-header-border {
        border-bottom: 1px solid #fff
    }
    .text-color-grey {
        color: #8B8B8B
    }
</style>