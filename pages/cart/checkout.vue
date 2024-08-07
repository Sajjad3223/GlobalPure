<template>
<div class="container mx-auto py-10 2xl:py-20">
  <Head>
    <Title>Checkout | Global Pure</Title>
  </Head>
  <div class="flex w-full relative md:flex-col items-center text-[#504A33]">
    <h2 class="w-full text-center text-4xl md:text-7xl font-modern" data-aos="fade-up">Shop Cart</h2>
    <NuxtLink to="/" class="md:hidden absolute left-2">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path d="M8.5 15L1.5 8L8.5 1" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    </NuxtLink>
    <svg class="hidden md:block absolute md:top-[60%] right-[0%] scale-50 md:scale-100 origin-left md:origin-center md:right-[33%] 2xl:right-[35%] rotate-[20deg]" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
    </svg>
    <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="hidden md:block absolute -top-[80%]  md:right-[25%] 2xl:right-[28%] w-[150px] move"/>
  </div>

  <div class="hidden md:flex items-stretch gap-10 py-10 md:py-20">
    <div class="flex-1">
      <div class="w-full flex items-center gap-5">
        <span class="flex-1 text-2xl">Product</span>
        <span class="w-1/6 2xl:w-1/5 text-2xl">Type</span>
        <span class="w-1/5 2xl:w-1/4 text-2xl">Quantity</span>
        <span class="w-1/6 2xl:w-1/5 text-2xl">Price</span>
      </div>
      <hr class="w-full border-[#453F29] opacity-40 mt-4">
      <div class="w-full flex items-center py-3 gap-5 relative border-b last:border-none" v-for="i in 3" :key="i">
        <button class="absolute -left-5 2xl:-left-12">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4294 0.571289L0.572266 15.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.572266 0.571289L15.4294 15.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="flex-1 flex items-center">
          <img src="~/assets/images/gp-product.png" alt="product" class="max-w-[120px] ">
          <NuxtLink to="/shop/slug">
            Saffron In Cut Filaments  6Pes × 5gr
          </NuxtLink>
        </div>
        <div class="w-1/6 2xl:w-1/5">Box pack</div>
        <div class="w-1/5 2xl:w-1/4">
          <div class="flex items-center gap-5">
            <button data-aos="fade-right" data-aos-delay="400">
              <svg class="w-3" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="relative" data-aos="zoom-in" data-aos-delay="200">
              <input type="number" class="w-9 h-9 grid place-items-center text-center bg-transparent" value="1" />
              <div class="absolute border border-[#453F29]/50 inset-1 rotate-45"></div>
            </div>
            <button data-aos="fade-left" data-aos-delay="400">
              <svg class="w-3" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1.85742V24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="w-1/6 2xl:w-1/5">$120.99</div>
      </div>
    </div>
    <div class="w-1/5 p-6 border border-[#453F29]/40 flex flex-col gap-4">
      <span class="font-modern text-3xl">Total Price</span>
      <div class="w-full flex items-center justify-between opacity-50">
        <span>3 Item(s)</span>
        <span>$327.97</span>
      </div>
      <hr class="border-black/10">
      <div class="w-full flex items-center justify-between opacity-50">
        <span>Shipping</span>
        <span>$0</span>
      </div>
      <div class="w-full flex items-center justify-between">
        <span>TOTAL</span>
        <span>$362.97</span>
      </div>
      <NuxtLink to="/cart/shipping" class="mt-auto w-full text-center py-3 bg-[#504A33] text-white">Checkout</NuxtLink>
    </div>
  </div>

  <div class="md:hidden flex flex-col items-center mt-5 pb-20">
    <ul class="w-full flex flex-col items-center flex-1 shrink-0 overflow-y-auto">
      <li class="flex items-center w-full border-b last:border-none py-4" v-for="i in 5" data-aos="fade-right" :data-aos-delay="i * 200">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-4">
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4294 1.57129L1.57227 16.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.57227 1.57129L16.4294 16.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="flex flex-col items-center">
              <img src="~/assets/images/gp-product.png" alt="gp products" class="max-w-[100px]">
            </div>
            <div class="flex flex-col gap-1">
              <span>Saffron In Cut Filaments Box Pack 6Pes × 5gr</span>
              <strong >$120.99</strong>
            </div>
          </div>
          <div class="flex items-center ml-8 gap-5">
            <button data-aos="fade-right" data-aos-delay="400">
              <svg class="w-3" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="relative" data-aos="zoom-in" data-aos-delay="200">
              <input type="text" class="w-9 h-9 grid place-items-center text-center bg-transparent" value="1" />
              <div class="absolute border border-[#453F29]/50 inset-1 rotate-45"></div>
            </div>
            <button data-aos="fade-left" data-aos-delay="400">
              <svg class="w-3" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1.85742V24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.85742 12.9316H24.1431" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <NuxtLink to="/shop" class="my-5 text-[#46AEAE]">Add More</NuxtLink>

    <div class="fixed bottom-0 z-10 inset-x-0 py-4 bg-white border-t border-[#453F2933]">
      <div class="container mx-auto h-full flex items-center justify-center">
        <div v-if="showDetails" class="w-full flex flex-col gap-4">
          <div class="w-full flex items-center justify-between opacity-50">
            <span>3 item</span>
            <span>$234.97</span>
          </div>
          <div class="w-full flex items-center justify-between opacity-50">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div class="w-full flex items-center justify-between">
            <span>Total</span>
            <span>$234.97</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <button @click="showDetails = false">Details</button>
            <BaseGButton>
              Check Out
            </BaseGButton>
          </div>
        </div>
        <div v-else class="flex w-full h-full items-center justify-between">
          <div class="flex flex-col">
            <span class="text-xs font-light">TOTAL</span>
            <span class="text-lg">$362.97</span>
          </div>
          <div class="flex items-center gap-6">
            <button @click="showDetails = true">Details</button>
            <NuxtLink to="/cart/shipping" class="w-full text-center px-4 py-2 bg-[#504A33] text-white">Checkout</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
const showDetails = ref(false);
</script>