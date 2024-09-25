<template>
<button
    :class="['bg-[#453F29] py-3 px-5 w-full flex items-center justify-center gap-2 text-white']"
    :type="type">
  <slot></slot>
</button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?:string,
}>(),{
  type:'button'
})
</script>