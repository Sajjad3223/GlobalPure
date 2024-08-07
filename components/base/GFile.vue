<template>
  <div class="w-full flex flex-col gap-2">
    <label class="text-xl text-[#493E17]" :for="name">{{ label }}</label>
    <label :for="name" class="cursor-pointer">
      <span class="grid grid-cols-2 gap-4 place-items-center">
        <button type="button" class="pointer-events-none w-full py-2 2xl:py-4 rounded-full border border-[#453F29] flex items-center justify-center">
          <span class="text-[#504A33]">choose File</span>
        </button>
        <span>No File Chosen!</span>
      </span>
    </label>
    <input type="file" :name="name" :id="name" class="opacity-0 h-0" :required="required">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name:string,
  label:string,
  modelValue:string,
  required?:boolean,
}>();

const value = ref(props.modelValue);

</script>