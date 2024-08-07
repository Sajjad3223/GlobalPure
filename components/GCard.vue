<template>
  <div class="flex flex-col gap-4 opacity-0">
    <NuxtLink to="/shop/slug" class="group relative w-full aspect-square grid place-items-center">
      <div class="bg-white w-full h-full grid place-items-center">
        <img src="~/assets/images/img.png" alt="Luxury Box" class="w-2/3 group-hover:scale-125 transition-transform duration-300">
      </div>
      <div class="border absolute inset-0 grid place-items-center rotate-3  group-hover:rotate-0 transition-transform duration-300 border-[#453F29] opacity-50"></div>
      <button class="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute left-4 top-4 peer
            border border-[#453F29] w-10 h-10 bg-white grid place-items-center z-[4]">
        <img src="~/assets/images/amazon.png" alt="amazon">
      </button>
      <div class="peer-hover:opacity-100 opacity-0 bg-black/10 transition-all duration-300 peer-hover:backdrop-blur-sm absolute inset-0 grid place-items-center z-[3]">
        <div class="flex flex-col items-center gap-2 font-semibold">
          <span class="text-sm text-white md:text-base">Amazon Price</span>
          <span class="text-lg text-white md:text-3xl">9.99 CAD</span>
        </div>
      </div>
    </NuxtLink>
    <div class="flex flex-col">
      <span class="text-xs md:text-lg text-[#504A33]/50">luxury box</span>
      <NuxtLink to="/shop/slug" class="text-sm md:text-xl text-[#504A33] mt-2">Saffron Cut Filaments (5gr)</NuxtLink>
      <div class="relative flex gap-5 mt-1">
        <span class="text-base font-medium md:text-2xl text-[#504A33]">$10.61</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>