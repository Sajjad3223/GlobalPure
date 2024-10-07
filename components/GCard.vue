<template>
  <div class="flex flex-col gap-4 opacity-0">
    <NuxtLink :to="`/product/${product.slug}`" class="group relative w-full aspect-square grid place-items-center">
      <div class="bg-white w-full h-full grid place-items-center">
        <img :src="`${SITE_URL}/product/images/${product.mainImage}`" alt="Luxury Box" class="w-2/3 group-hover:scale-125 transition-transform duration-300">
      </div>
      <div class="border absolute inset-0 grid place-items-center rotate-3  group-hover:rotate-0 transition-transform duration-300 border-[#453F29] opacity-50"></div>
      <button class="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute left-4 top-4 peer
            border border-[#453F29] w-10 h-10 bg-white grid place-items-center z-[4]">
        <img src="~/assets/images/amazon.png" alt="amazon">
      </button>
      <div class="peer-hover:opacity-100 opacity-0 bg-black/10 transition-all duration-300 peer-hover:backdrop-blur-sm absolute inset-0 grid place-items-center z-[3]">
        <div class="flex flex-col items-center gap-2 font-semibold">
          <span class="text-sm text-white md:text-base">Amazon Price</span>
          <span class="text-lg text-white md:text-3xl">{{ product.amazonPrice.amount }} {{getPriceUnitSymbol(product.amazonPrice.unit)}}</span>
        </div>
      </div>
    </NuxtLink>
    <div class="flex flex-col">
      <span class="text-xs md:text-lg text-[#504A33]/50">luxury box</span>
      <NuxtLink :to="`/product/${product.slug}`" class="text-sm md:text-xl truncate text-[#504A33] mt-2" :title="product.title">{{ product.title }}</NuxtLink>
      <div class="relative flex gap-5 mt-1">
        <span class="text-base font-medium md:text-2xl text-[#504A33]">{{getPrice}}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {ProductFilterData} from "~/models/products/productData";
import {SITE_URL} from "~/utilities/api.config";
import {getPriceUnitSymbol, PriceUnit} from "~/models/commonTypes";
import {useGlobalStore} from "~/stores/global.store";

const props = defineProps<{
  product:ProductFilterData
}>();

const globalStore = useGlobalStore();

const getPrice = computed(()=>{
  const price = props.product.prices.find(p=>p.price.unit == globalStore.currentCurrency)!.price;
  return `${price.amount} ${getPriceUnitSymbol(price.unit)}`;
})
</script>