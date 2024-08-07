<template>
  <div class="w-full flex flex-col gap-2">
    <label class="text-xl text-[#493E17]" :for="name">{{ label }}</label>
    <div class="relative flex items-center">
      <select :name="name" :id="name" v-model="value" class="appearance-none w-full bg-[#FFFDF6] border border-[#493E17] px-4 py-2 2xl:py-4 focus:outline-none placeholder-[#493E17]/50 text-[#493E17]" :required="required">
        <option :value="null" selected>{{ placeholder }}</option>
        <option v-for="o in options" :value="o.value">{{ o.title }}</option>
      </select>
      <span class="absolute right-4">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
          <path d="M15 1.5L8 8.5L1 1.5" stroke="#493E17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name:string,
  label:string,
  modelValue:any,
  options:any[],
  placeholder?:string,
  required?:boolean,
}>();

const value = ref(props.modelValue);

</script>