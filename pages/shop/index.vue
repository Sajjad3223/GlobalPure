<template>
<div class="container mx-auto py-20">
  <Head>
    <Title>Shop | Premium Saffron</Title>
  </Head>
  <div class="flex w-max mx-auto relative flex-col items-center text-[#504A33]">
    <h2 class="text-4xl md:text-7xl font-modern" data-aos="fade-up">Shop</h2>
    <svg class="absolute md:top-[60%] -right-[110%] scale-50 md:scale-100 origin-left md:origin-center md:-right-[60%] rotate-[20deg]" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
    </svg>
    <img src="../../assets/images/saffron-flower.png" alt="saffron flower" class="absolute -top-[80%] -right-[130%] w-[150px] move"/>
  </div>

  <!-- Filters -->
  <div class="filters mt-10">
    <div class="relative z-10 flex items-center justify-center gap-5">
      <div class="relative w-max py-5" data-aos="fade-left" data-aos-delay="200">
        <button @click="showOrderBy = !showOrderBy" class="flex items-center gap-2">
          <span>Sort By</span>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M12.0413 1.72949L6.49967 7.27116L0.958008 1.72949" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <Transition name="slideDown">
          <div v-if="showOrderBy" v-click-outside="closeOrderBy" class="absolute inset-x-0 right-auto top-full flex flex-col gap-1 bg-[#FEFCF8] border border-[#453F29] py-1">
            <button class="flex items-center gap-2 py-2 px-4 hover:bg-[#453F29]/20 ">
              <span class="text-sm md:text-xs uppercase">Date</span>
            </button>
            <button class="flex items-center gap-2 py-2 px-4 hover:bg-[#453F29]/20 ">
              <span class="text-sm md:text-xs uppercase">Price</span>
            </button>
          </div>
        </Transition>
      </div>
      <div class="relative py-5" data-aos="fade-left" data-aos-delay="400">
        <button @click="showPriceFilter = !showPriceFilter" class="flex items-center gap-2">
          <span>Filter Price</span>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M12.0413 1.72949L6.49967 7.27116L0.958008 1.72949" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>

        <Transition name="slideDown">
          <div v-if="showPriceFilter" v-click-outside="closePriceFilter" class="absolute left-1/2 -translate-x-1/2 w-max min-w-[300px] p-6 right-auto top-full flex flex-col gap-1 bg-[#FEFCF8] border border-[#453F29]">
            <GRange min="0" max="100" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <hr class="border border-[#453F29] opacity-20">
  <!-- Products -->
  <div class="relative grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
    <GCard v-for="i in 8" data-aos="fade-left" :data-aos-delay="200 * i" />
  </div>
  <!-- Pagination -->
  <div class="flex items-center justify-center pt-20">
    <div class="flex items-center gap-10">
      <button class="flex items-center gap-3 opacity-50" disabled>
        <svg class="rotate-180" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M1.72949 0.958659L7.27116 6.50033L1.72949 12.042" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
        <span>Previous</span>
      </button>
      <div class="flex items-center gap-6">
        <div class="flex w-9 h-9 border border-[#453F29]/20 bg-[#453F29] rotate-45 items-center justify-center">
          <span class="-rotate-45 text-white">1</span>
        </div>
        <div class="flex w-9 h-9 border border-[#453F29]/20 rotate-45 items-center justify-center">
          <span class="-rotate-45 ">2</span>
        </div>
      </div>
      <button class="flex items-center gap-3">
        <span>Next</span>
        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M1.72949 0.958659L7.27116 6.50033L1.72949 12.042" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    </div>
  </div>

</div>
</template>
<script setup lang="ts">
import GRange from "~/components/base/GRange.vue";

const showOrderBy = ref(false);
const showPriceFilter = ref(false);


const closeOrderBy = ()=>{
  setTimeout(()=>{
    if(showOrderBy.value)
      showOrderBy.value = false;
  },100);
}
const closePriceFilter = ()=>{
  setTimeout(()=>{
    if(showPriceFilter.value)
      showPriceFilter.value = false;
  },100);
}
</script>