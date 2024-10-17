<template>
  <div class="w-full flex flex-col gap-2">
    <label class="text-base 2xl:text-xl text-[#493E17]" :for="name">{{ label }}</label>
    <input v-if="!multiline" @change="updateData" :type="type" :placeholder="placeholder" :name="name" :id="name" v-model="value" class="bg-[#FFFDF6] border border-[#493E17] px-4 py-2 2xl:py-4 text-sm 2xl:text-base focus:outline-none placeholder-[#493E17]/50 text-[#493E17]" :required="required">
    <textarea v-else rows="5" @change="updateData" :placeholder="placeholder" v-model="value" :name="name" :id="name" class="bg-[#FFFDF6] border border-[#493E17] px-4 py-2 2xl:py-4 placeholder-[#493E17]/50 text-[#493E17]" :required="required"></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name:string,
  label:string,
  modelValue:string,
  type?:'text' | 'email' | 'password' | 'number'| 'phone'| 'tel',
  placeholder?:string,
  required?:boolean,
  multiline?:boolean
}>();

const emits = defineEmits(['update:modelValue'])
const value = ref(props.modelValue);

watch(
    ()=>props.modelValue,
    ()=>value.value = props.modelValue
)

const updateData = (e)=>{
  emits('update:modelValue',e.target.value);
}

</script>