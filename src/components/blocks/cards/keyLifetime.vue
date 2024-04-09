<template>
    <div class="bg-cardbg p-3 max-w-[460px] h-[140px] rounded-lg mt-3">
        <div class="flex justify-between">
            <img src="../../../assets/keyLifetime.png" alt="Key" class="w-[46px] h-[44px] rounded-full">
            <p>
                Key Lifetime
            </p>
            <div 
                class="w-[36px] max-h-[36px] rounded-full bg-[#0E0E14] flex justify-center items-center cursor-pointer"
                @click="handleEditIconClick"
            >
                <i v-if="!isEditing" class='bx bxs-pencil'></i>
                <i v-else class='bx bxs-save'></i>
            </div>
        </div>
        <div class="w-[68%] flex flex-col items-start justify-between pl-2 pt-3">
            <div class="w-[100%] flex justify-between items-center">
                <p class="text-[14px] font-medium">
                    Created At
                </p>
                <p class="text-[#5D5FEF]">
                    {{ props.createdAt }}
                </p>
            </div>
            <div class="w-[100%] flex justify-between items-center">
                <p class="text-[14px] font-medium">
                    Valid Till
                </p>
                <p class="text-[#5D5FEF]">
                    {{ props.validTill }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps<{
        createdAt: string,
        validTill: string
    }>()

    const isEditing = ref(false)

    const handleEditIconClick = () => {
        isEditing.value = !isEditing.value
    }
</script>

<style scoped>

</style>