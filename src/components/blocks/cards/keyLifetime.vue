<template>
    <div class="bg-cardbg p-3 max-w-[460px] h-[140px] rounded-lg mt-3">
        <div class="flex justify-between">
            <img src="../../../assets/keyLifetime.png" alt="Key" class="w-[46px] h-[44px] rounded-full">
            <p>
                Key Lifetime
            </p>
        </div>
        <div class="w-[68%] flex flex-col items-start justify-between pl-2 pt-3">
            <div class="w-[100%] flex justify-between items-center">
                <p class="text-[14px] font-medium">
                    Created At
                </p>
                <p class="text-[#5D5FEF] text-right">
                    {{ formatDate(props.createdAt) }}
                </p>
            </div>
            <div class="w-[100%] flex justify-between items-center">
                <span class="text-[14px] font-medium">
                    Valid Till
                </span>
                <span class="text-[#5D5FEF] t">
                    {{ formatDate(props.validTill) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    function formatDate(isoString: string): string {
    // Convert the ISO string to a Date object
    const date = new Date(isoString);

    // Define options for the date format
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-GB', options).format(date);
    }
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