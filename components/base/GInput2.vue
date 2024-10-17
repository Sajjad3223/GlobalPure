<template>
  <div class="relative w-full flex items-center">
    <input :type="type" :name="name" :id="name" :required="required" v-model="value" placeholder=" " @input="updateData">
    <label :for="name">
      {{ label }}
    </label>
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

<style scoped>
input{
  @apply w-full bg-[#FFFDF6] border text-xs md:text-base rounded-lg border-[#453F29]/30 pt-5 pb-2 focus:outline-none px-4;
}
label{
  @apply absolute left-4 pointer-events-none opacity-50 md:text-lg text-sm top-3 transition-all duration-200
}
input:focus
{
  @apply border-[#E9B638];
}
input:focus ~ label,
input:not(:placeholder-shown) ~ label
{
  @apply text-xs top-1;
}
</style>