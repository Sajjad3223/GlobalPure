<template>
<div class="flex items-center gap-2 accent-[#504A33]">
  <input type="checkbox" :name="name" :id="name" v-model="value" class="w-4 h-4">
  <label :for="name">{{label}}</label>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name:string,
  label:string,
  modelValue:string,
}>();

const value = ref(props.modelValue);
</script>