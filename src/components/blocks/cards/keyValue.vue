<template>
    <div class="bg-cardbg p-3 max-w-[460px] h-[186px] rounded-lg mt-3 mb-3">
        <div class="flex justify-between">
            <img src="../../../assets/key.jpeg" alt="Key" class="w-[52px] h-[52px] rounded-full">
            <p>
                About {{ props.keyTitle }}
            </p>
            <div 
                class="w-[36px] max-h-[36px] rounded-full bg-[#0E0E14] flex justify-center items-center cursor-pointer"
                @click="handleEditIconClick"
            >
                <i v-if="!isEditing" class='bx bxs-pencil'></i>
                <i v-else class='bx bxs-save'></i>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-start items-center">
                <div class="text-[14px] font-medium flex justify-start items-center pl-2 w-[40%]">
                    <span>
                        Key Name
                    </span>
                </div>
                <FormKit
                    type="text"
                    name="keyName"
                    outer-class="w-full mb-0"
                    input-class="$reset px-4 py-2.5 text-gray-200  bg-input_light w-full border-none focus:outline-none !important shadow-none"
                    label-class=""
                    inner-class="$reset mt-2 rounded-md  overflow-hidden bg-input_light w-full border-none focus:outline-none !important shadow-none"
                    :delay="1000"
                    validation="required|length:5"
                    message-class="text-red-500 text-sm mt-2"
                    :value="props.keyName"
                    :disabled="!isEditing"
                >

                </FormKit>
            </div>
            <div class="flex justify-start items-center">
                <div class="text-[14px] font-medium flex justify-start items-center pl-2 w-[40%]">
                    Key Value
                </div>
                <FormKit
                    :type="valueInputType"
                    name="keyName"
                    outer-class="w-full m-0"
                    input-class="$reset px-4 py-2.5 text-gray-200  bg-input_light w-full border-none focus:outline-none !important shadow-none"
                    label-class=""
                    inner-class="$reset mt-2 rounded-md  overflow-hidden bg-input_light w-full border-none focus:outline-none !important shadow-none"
                    :delay="1000"
                    validation="required|length:5"
                    message-class="text-red-500 text-sm mt-2"
                    :value="props.keyValue"
                    :disabled="!isEditing"
                >
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{
        keyTitle: string,
        keyName: string,
        keyValue: string
    }>()

    const isEditing = ref(false)
    const valueInputType = ref('password')

    const handleEditIconClick = () => {
        isEditing.value = !isEditing.value
        valueInputType.value = isEditing.value ? 'text' : 'password'
    }

</script>

<style scoped>

</style>