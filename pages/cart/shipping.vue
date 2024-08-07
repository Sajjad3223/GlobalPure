<template>
<div class="container mx-auto py-10 2xl:py-20">
  <Head>
    <Title>Shipping | Global Pure</Title>
  </Head>
  <div class="flex w-full relative md:flex-col items-center text-[#504A33]">
    <h2 class="w-full text-center text-4xl md:text-7xl font-modern" data-aos="fade-up">Shop Information</h2>
    <NuxtLink to="/" class="md:hidden absolute left-2">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path d="M8.5 15L1.5 8L8.5 1" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    </NuxtLink>
    <svg class="hidden md:block absolute md:top-[60%] right-[0%] scale-50 md:scale-100 origin-left md:origin-center md:right-[24%] 2xl:right-[28%] rotate-[20deg]" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
    </svg>
    <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="hidden md:block absolute -top-[80%]  md:right-[16%] 2xl:right-[22%] w-[150px] move"/>
  </div>

  <hr class="mt-14 hidden md:block">
  <div class="grid grid-cols-2 absolute inset-0 -z-[1]">
    <div></div>
    <div class="w-full h-full bg-[#F8F4EA]/0"></div>
  </div>

  <div class="items-stretch flex flex-col md:flex-row md:justify-between gap-4 mt-16">
    <div class="flex-1 flex flex-col gap-10">
      <!-- Order Details Mobile -->
      <div :class="['flex pt-5 md:hidden overflow-hidden -mx-5 px-5 flex-col bg-[#F8F4EA]/50 border-y border-[#453F29]/10']">
        <button class="flex items-center justify-between" @click="showDetails = !showDetails">
          <span class="flex items-center gap-2">
            <span class="text-sm text-[#E9B638]">Show Order Summary</span>
            <svg :class="[{'rotate-180':showDetails}]" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1.25L4 4.75L0.5 1.25" stroke="#E9B638" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="font-semibold">$120.99</span>
        </button>
        <div class="mt-4 transition-all duration-300" :style="{maxHeight:`${showDetails ? 410 : 0}px`}">
          <div class="flex pb-5 flex-col gap-4">
            <ul class="flex flex-col gap-4 max-h-[220px] overflow-y-auto pr-4">
              <li class="flex items-center justify-between" v-for="i in 2">
                <div class="flex items-center gap-5">
                  <div class="flx grid place-items-center border rounded-lg bg-white max-w-[20%] aspect-square">
                    <img src="~/assets/images/gp-product.png" alt="product" class="h-2/3">
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="w-3/4 text-xs">Saffron In Cut Filaments Box Pack </span>
                    <span class="font-light text-[10px] opacity-80">6Pes × 5gr</span>
                  </div>
                </div>
                <span class="text-sm font-semibold">$120.99</span>
              </li>
            </ul>
            <hr>
            <div class="flex flex-col gap-4 [&>div>span]:font-light [&>div>span]:text-sm opacity-80">
              <div class="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$120.99</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Discount</span>
                <span>$0.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <hr>
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="font-semibold">Total</span>
                <span class="text-xs font-light opacity-60">Including $2.99 in Taxes</span>
              </div>
              <div class="flex items-end gap-2">
                <span class="font-light text-xs opacity-60">USD</span>
                <span class="font-semibold">$120.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="font-modern text-2xl md:text-3xl">Contact</span>
        <BaseGInput2 label="Email" name="email" required/>
      </div>
      <div class="flex flex-col gap-3">
        <span class="font-modern text-2xl md:text-3xl">Delivery</span>
        <div class="flex flex-col gap-3">
          <div class="relative w-full flex items-center">
            <select name="" id="" class="appearance-none w-full bg-[#FFFDF6] peer border rounded-lg border-[#453F29]/30 py-3 focus:outline-none px-4">
              <option value="" selected>Country</option>
            </select>
            <svg class="absolute right-4" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0423 1.72949L6.50065 7.27116L0.958984 1.72949" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="relative w-full flex items-center">
            <select name="" id="" class="appearance-none w-full bg-[#FFFDF6] peer border rounded-lg border-[#453F29]/30 py-3 focus:outline-none px-4">
              <option value="" selected>City</option>
            </select>
            <svg class="absolute right-4" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0423 1.72949L6.50065 7.27116L0.958984 1.72949" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-3">
            <BaseGInput2 label="First Name" name="firstName" required/>
            <BaseGInput2 label="Last Name" name="lastName" required/>
          </div>
          <BaseGInput2 label="Company (Optional)" name="company"/>
          <BaseGInput2 label="Address" name="address" required/>
          <BaseGInput2 label="Apartment, Suite, etc, (Optional)" name="apartment"/>
          <BaseGInput2 label="Postal Code" name="postalCode" required/>
          <BaseGInput2 label="Phone Number" name="phone" required/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="font-modern text-2xl md:text-3xl">Payment</span>
        <div class="flex flex-col gap-3">
          <div class="relative w-full flex items-center gap-3">
            <input type="radio" name="payment" id="credit">
            <label for="credit">Credit Card</label>
          </div>
          <div class="relative w-full flex items-center gap-3">
            <input type="radio" name="payment" id="paypal">
            <label for="credit">PayPal </label>
            <img src="~/assets/images/paypal-logo.png" alt="paypal logo" class="max-w-5">
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="font-modern text-2xl md:text-3xl">Post Tracking</span>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <input type="radio" name="post" id="dhl" class="opacity-0 absolute peer">
            <label for="dhl" class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
              <img src="~/assets/images/dhl.png" alt="dhl" class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
              <span class="select-none text-xs md:text-base pointer-events-none flex-1">DHL Express</span>
            </label>
          </div>
          <div>
            <input type="radio" name="post" id="ups" class="opacity-0 absolute peer">
            <label for="ups" class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
              <img src="~/assets/images/ups.png" alt="dhl" class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
              <span class="select-none text-xs md:text-base pointer-events-none flex-1">UPS Tracking</span>
            </label>
          </div>
          <div>
            <input type="radio" name="post" id="fedEx" class="opacity-0 absolute peer">
            <label for="fedEx" class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
              <img src="~/assets/images/fedex.png" alt="dhl" class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
              <span class="select-none text-xs md:text-base pointer-events-none flex-1">FedEX Express</span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="font-modern text-2xl md:text-3xl">Remember</span>
        <BaseGCheckbox label="Save my information for a faster check out" name="remember" />
      </div>
      <BaseGButton class="hidden md:block rounded-lg">
        Pay Now
      </BaseGButton>
    </div>
    <div class="w-1/6 h-full flex items-center flex-col">
      <div class="w-px bg-black/10 h-full"></div>
    </div>
    <div class="flex-1 sticky top-10 flex flex-col gap-5 overflow-y-visible bg-[#F8F4EA]/50 border-y border-[#453F29]/10 md:bg-transparent md:border-none -mx-5 p-5 md:m-0 md:p-0">
      <div class="flex md:hidden flex-col">
        <span class="font-modern text-2xl md:text-3xl">Order Summary</span>
        <span class="text-xs font-light opacity-50">you are $20 away from free shipping!</span>
      </div>
      <div class="flex flex-col gap-5 md:gap-8">
        <ul class="flex flex-col gap-4 max-h-[220px] md:max-h-[450px] overflow-y-auto pr-4">
          <li class="flex items-center justify-between" v-for="i in 2">
            <div class="flex items-center gap-5">
              <div class="flx grid place-items-center border rounded-lg bg-white max-w-[20%] md:max-w-[25%] aspect-square">
                <img src="~/assets/images/gp-product.png" alt="product" class="h-2/3">
              </div>
              <div class="flex flex-col gap-3">
                <span class="w-3/4 text-xs md:text-xl">Saffron In Cut Filaments Box Pack </span>
                <span class="font-light text-xs md:text-base">6Pes × 5gr</span>
              </div>
            </div>
            <span class="text-sm md:text-lg font-semibold">$120.99</span>
          </li>
        </ul>
        <div class="flex items-center gap-3">
          <BaseGInput2 label="Discount Code Or Gift Card" name="discount" />
          <BaseGButton class="!w-1/4 rounded-lg h-full">
            Apply
          </BaseGButton>
        </div>
        <hr>
        <div class="flex flex-col gap-4 [&>div>span]:font-light [&>div>span]:text-sm md:[&>div>span]:text-base opacity-80">
          <div class="flex items-center justify-between">
            <span>Subtotal</span>
            <span>$120.99</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Discount</span>
            <span>$0.0</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <hr>
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <span class="md:text-2xl font-semibold">Total</span>
            <span class="text-xs md:text-sm font-light opacity-60">Including $2.99 in Taxes</span>
          </div>
          <div class="flex items-end gap-2">
            <span class="font-light text-xs opacity-60">USD</span>
            <span class="md:text-2xl font-semibold">$120.99</span>
          </div>
        </div>
        <BaseGButton class="md:hidden rounded-lg">
          Pay Now
        </BaseGButton>
      </div>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
const showDetails = ref(false);
</script>