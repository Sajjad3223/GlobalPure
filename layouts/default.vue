<template>
<div>
  <GHeader />
  <div class="w-screen overflow-x-hidden">
    <slot></slot>
  </div>
  <GFooter />
</div>
</template>

<script setup lang="ts">


</script>

<style>
*{
  @apply font-inter;
}
</style>