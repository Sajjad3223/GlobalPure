<template>
  <div class="container mx-auto py-10 2xl:py-20">
    <Head>
      <Title>Shop | Premium Saffron</Title>
    </Head>

    <div v-if="!pending">
      <div class="flex flex-col md:flex-row items-stretch gap-5 md:gap-16">
        <div class="md:w-2/5 2xl:w-1/3 border border-[#453F29]/30 aspect-square flex items-center justify-center" data-aos="zoom-in">
          <img :src="`${SITE_URL}/product/images/${product.mainImage}`" :alt="product.title" class="w-full" data-aos="fade-right" data-aos-delay="400">
        </div>
        <div class="w-1/12 hidden 2xl:block"></div>
        <div class="flex-1 flex flex-col">
          <div class="flex flex-col gap-4">
            <span class="uppercase text-xs md:text-lg" data-aos="fade-down" data-aos-delay="400">SKU: {{ product.serial }}</span>
            <strong class="md:text-3xl" data-aos="fade-up">{{ product.title }}</strong>
            <div class="flex items-center gap-4" >
              <strong class="text-lg md:text-3xl" data-aos="fade-right" data-aos-delay="200">{{getPrice}}</strong>
              <span class="text-sm md:text-2xl font-light opacity-70" data-aos="fade-right" data-aos-delay="400">Tax Included</span>
            </div>
          </div>
          <div class="flex flex-col mt-12 md:mt-auto">
            <div class="flex flex-col gap-5">
              <span class="text-2xl" data-aos="fade-right" data-aos-delay="200">Quantity</span>
              <div class="flex items-center gap-5">
                <button @click="decreaseQuantity" data-aos="fade-right" data-aos-delay="400">
                  <svg class="w-5" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div class="relative" data-aos="zoom-in" data-aos-delay="200">
                  <input type="number" class="w-14 h-14 grid text-2xl place-items-center text-center bg-transparent" v-model="quantity" />
                  <div class="absolute border border-[#453F29]/50 inset-1 rotate-45"></div>
                </div>
                <button @click="increaseQuantity" data-aos="fade-left" data-aos-delay="400">
                  <svg class="w-5" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1.85742V24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4 mt-4">
              <button @click="cartStore.addToCart(product.id,product.slug,quantity)"
                      class="text-white py-4 md:text-2xl bg-[#504A33] flex items-center justify-center gap-3" data-aos="zoom-in">
                <svg class="w-4 md:w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8836 12.8576H6.86077L5.14648 4.28613H22.2893C22.4148 4.2866 22.5384 4.31454 22.6519 4.36802C22.7652 4.42149 22.8655 4.4992 22.9455 4.59565C23.0257 4.69208 23.0837 4.80493 23.1154 4.9262C23.1471 5.04748 23.1519 5.17424 23.1293 5.29756L21.7236 12.1547C21.6908 12.353 21.588 12.5329 21.4339 12.6619C21.2797 12.7908 21.0845 12.8603 20.8836 12.8576Z" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.14606 4.28599L4.42606 1.54314C4.38655 1.34953 4.28134 1.17552 4.12828 1.05057C3.97521 0.925613 3.78367 0.857381 3.58606 0.857422H0.860352" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.86035 12.8574L7.58035 16.4574C7.61987 16.651 7.72507 16.825 7.87814 16.95C8.03121 17.0749 8.22276 17.1431 8.42035 17.1431H18.8603" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.0036 23.143C17.5303 23.143 17.1465 22.7592 17.1465 22.2859C17.1465 21.8125 17.5303 21.4287 18.0036 21.4287C18.4771 21.4287 18.8608 21.8125 18.8608 22.2859C18.8608 22.7592 18.4771 23.143 18.0036 23.143Z" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.43136 23.143C8.95798 23.143 8.57422 22.7592 8.57422 22.2859C8.57422 21.8125 8.95798 21.4287 9.43136 21.4287C9.90474 21.4287 10.2885 21.8125 10.2885 22.2859C10.2885 22.7592 9.90474 23.143 9.43136 23.143Z" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-current">Add To Cart</span>
              </button>
              <button class="md:text-2xl border py-4 border-[#453F29] items-center justify-center gap-3" data-aos="fade-right" data-aos-delay="400">
                <span>Buy Now</span>
              </button>
              <button data-aos="fade-down" data-aos-delay="800"
                  class="hidden group relative col-span-full py-4 text-2xl border border-[#453F29]/20 hover:border-[#453F29] md:grid place-items-center gap-3 transition-all duration-500">
                <span class="group-hover:opacity-0 group-hover:blur transition-all duration-500">Amazon Price</span>
                <span class="absolute blur opacity-0 group-hover:opacity-100 group-hover:blur-0 transition-all duration-500">{{ product.amazonPrice.amount }} {{getPriceUnitSymbol(product.amazonPrice.unit)}}</span>
              </button>
            </div>
            <div class="hidden md:flex w-full items-center justify-between mt-10">
              <button class="flex items-center gap-2" data-aos="fade-right" data-aos-delay="400">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.27051 12.0413L1.72884 6.49967L7.27051 0.958008" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xl">Back</span>
              </button>
              <button class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="400">
                <span class="text-xl">Next</span>
                <svg class="rotate-180" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.27051 12.0413L1.72884 6.49967L7.27051 0.958008" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-start gap-16 mt-10 md:mt-20">
        <div class="md:w-2/5 2xl:w-1/3 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-delay="200">
              <span class="md:text-2xl font-medium">Product Info</span>
            </div>
            <div data-aos="fade-right" data-aos-delay="400">
              <span class="md:text-2xl font-medium opacity-50">Refunds</span>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
              <span class="md:text-2xl font-medium opacity-50">Shipping</span>
            </div>
          </div>
          <hr class="border-[#453F29]/20">
          <div v-html="product.description"></div>
        </div>
        <div class="w-1/12 hidden 2xl:block"></div>
        <div class="w-full md:w-auto flex-1 flex flex-col gap-4">
          <span class="md:text-2xl font-medium" data-aos="fade-right" data-aos-delay="200">Features</span>
          <hr class="border-[#453F29]/20">
          <div class="flex flex-col w-full">
            <div data-aos="fade-right" :data-aos-delay="i * 200" v-for="(f,i) in product.features"
                class="w-full grid grid-cols-2 px-4 py-2 text-xs md:text-lg opacity-80 even:bg-[#F8F5ED]">
              <span>{{ f.key }}</span>
              <span>{{ f.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {useAsyncData} from "#app";
import {GetProductBySlug} from "~/services/product.service";
import {SITE_URL} from "~/utilities/api.config";
import type {ProductDto} from "~/models/products/productData";
import {useGlobalStore} from "~/stores/global.store";
import {getPriceUnitSymbol} from "~/models/commonTypes";

const quantity = ref(1);
const route = useRoute();
const router = useRouter();
const slug:string = route.params.slug;
const {data,pending} = await useAsyncData(`GetProduct-${slug}`,()=>GetProductBySlug(slug));
if(!data.value?.isSuccess){
  if(process.server){
    throw createError("404 not found");
  }else{
    router.push('/shop');
  }
}

const cartStore = useCartStore();

const product:Ref<ProductDto> = ref(data.value!.data!);

const globalStore = useGlobalStore();

const getPrice = computed(()=>{
  const price = product.value.prices.find(p=>p.price.unit == globalStore.currentCurrency)!.price;
  return `${price.amount} ${getPriceUnitSymbol(price.unit)}`;
})

const decreaseQuantity = ()=>{
  if(quantity.value > 1) quantity.value--;
}
const increaseQuantity = ()=>{
  if(quantity.value < 10) quantity.value++;
}

</script>