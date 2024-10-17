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
            <path d="M8.5 15L1.5 8L8.5 1" stroke="#504A33" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </g>
        </svg>
      </NuxtLink>
      <svg
          class="hidden md:block absolute md:top-[60%] right-[0%] scale-50 md:scale-100 origin-left md:origin-center md:right-[24%] 2xl:right-[28%] rotate-[20deg]"
          width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513"
            stroke="#493E17" stroke-dasharray="8 8"/>
      </svg>
      <img src="~/assets/images/saffron-flower.png" alt="saffron flower"
           class="hidden md:block absolute -top-[80%]  md:right-[16%] 2xl:right-[22%] w-[150px] move"/>
    </div>

    <hr class="mt-14 hidden md:block">
    <div class="grid grid-cols-2 absolute inset-0 -z-[1]">
      <div></div>
      <div class="w-full h-full bg-[#F8F4EA]/0"></div>
    </div>

    <div class="items-stretch flex flex-col md:flex-row md:justify-between gap-4 mt-16">
      <form @submit.prevent="startPayment" class="flex-1 flex flex-col gap-10">
        <!-- Order Details Mobile -->
        <div
            :class="['flex pt-5 md:hidden overflow-hidden -mx-5 px-5 flex-col bg-[#F8F4EA]/50 border-y border-[#453F29]/10']">
          <button class="flex items-center justify-between" @click="showDetails = !showDetails">
          <span class="flex items-center gap-2">
            <span class="text-sm text-[#E9B638]">Show Order Summary</span>
            <svg :class="[{'rotate-180':showDetails}]" width="8" height="6" viewBox="0 0 8 6" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1.25L4 4.75L0.5 1.25" stroke="#E9B638" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
            <span
                class="font-semibold">{{ cartStore.getTotalPrice }} {{ getPriceUnitSymbol(globalStore.currentCurrency) }}</span>
          </button>
          <div class="mt-4 transition-all duration-300" :style="{maxHeight:`${showDetails ? 450 : 0}px`}">
            <div class="flex pb-5 flex-col gap-4">
              <ul class="flex flex-col gap-4 max-h-[220px] overflow-y-auto pr-4" v-if="!cartStore.cartLoading">
                <li class="flex items-center justify-between" v-for="item in cartStore.PendingOrder?.orderItems"
                    :key="item.id">
                  <div class="flex items-center gap-5">
                    <div
                        class="flx relative grid place-items-center border rounded-lg bg-white max-w-[20%] aspect-square">
                      <img :src="`${SITE_URL}/product/images/${item.productData.image}`" :alt="item.productData.title"
                           class="h-2/3">
                      <span v-if="item.quantity > 1"
                            class="absolute text-xs font-bold w-5 left-0 top-0 aspect-square rounded-full bg-[#504A33]/20 text-[#504A33] grid place-items-center">
                        {{ item.quantity }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-1">
                      <span class="w-3/4 text-xs">{{ item.productData.title }}</span>
                    </div>
                  </div>
                  <span class="text-sm font-semibold text-nowrap">{{ getPrice(item) }}</span>
                </li>
              </ul>
              <hr>
              <div class="flex flex-col gap-4 [&>div>span]:font-light [&>div>span]:text-sm opacity-80">
                <div class="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{{ cartStore.getTotalPrice }} {{ getPriceUnitSymbol(globalStore.currentCurrency) }}</span>
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
                  <span class="font-light text-xs opacity-60">{{ PriceUnit[globalStore.currentCurrency] }}</span>
                  <span
                      class="font-semibold">{{ cartStore.getTotalPrice }} {{ getPriceUnitSymbol(globalStore.currentCurrency) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3" v-if="!authStore.isLoggedIn">
          <span class="font-modern text-2xl md:text-3xl">Contact</span>
          <BaseGInput2 label="Email" name="email" required v-model="addressData.email"/>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-modern text-2xl md:text-3xl">Delivery</span>
          <div class="flex flex-col gap-3">
            <div class="relative w-full flex items-center">
              <select name="country" id="country" v-model="addressData.country"
                      class="appearance-none w-full bg-[#FFFDF6] peer border rounded-lg border-[#453F29]/30 py-3 focus:outline-none px-4">
                <option value="" selected>Select Your Country</option>
                <option value="United States"> United States</option>
                <option value="Qatar">Qatar</option>
                <option value="England">England</option>
              </select>
              <svg class="absolute right-4" width="13" height="9" viewBox="0 0 13 9" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0423 1.72949L6.50065 7.27116L0.958984 1.72949" stroke="#493E17" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="relative w-full flex items-center">
              <select name="city" id="city" v-model="addressData.city"
                      class="appearance-none w-full bg-[#FFFDF6] peer border rounded-lg border-[#453F29]/30 py-3 focus:outline-none px-4">
                <option value="" selected>Select Your City</option>
                <option value="New York">New York</option>
                <option value="Canada">Canada</option>
                <option value="Doha">Doha</option>
              </select>
              <svg class="absolute right-4" width="13" height="9" viewBox="0 0 13 9" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0423 1.72949L6.50065 7.27116L0.958984 1.72949" stroke="#493E17" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-3">
              <BaseGInput2 label="First Name" name="firstName" required v-model="addressData.firstName"/>
              <BaseGInput2 label="Last Name" name="lastName" required v-model="addressData.lastName"/>
            </div>
            <BaseGInput2 label="Company (Optional)" name="company" v-model="addressData.company"/>
            <BaseGInput2 label="Address" name="address" required v-model="addressData.completeAddress"/>
            <BaseGInput2 label="Apartment, Suite, etc, (Optional)" name="apartment" v-model="addressData.apartment"/>
            <BaseGInput2 label="Postal Code" name="postalCode" required v-model="addressData.postalCode"/>
            <BaseGInput2 label="Phone Number" name="phone" required v-model="addressData.phoneNumber"/>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-modern text-2xl md:text-3xl">Payment</span>
          <div class="flex flex-col gap-3">
            <div class="relative w-full flex items-center gap-3">
              <input type="radio" name="paymentType" :value="0" id="credit" v-model="addressData.paymentType">
              <label for="credit">Credit Card</label>
            </div>
            <div class="relative w-full flex items-center gap-3">
              <input type="radio" name="paymentType" :value="1" id="paypal" v-model="addressData.paymentType">
              <label for="paypal">PayPal </label>
              <img src="~/assets/images/paypal-logo.png" alt="paypal logo" class="max-w-5">
            </div>
            <div class="relative w-full flex items-center gap-3">
              <input type="radio" name="paymentType" :value="2" id="tether" v-model="addressData.paymentType">
              <label for="tether">Tether </label>
              <img src="~/assets/images/countries/tether.png" alt="tether logo" class="max-w-5">
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-modern text-2xl md:text-3xl">Post Tracking</span>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <input type="radio" name="trackingPost" id="dhl" class="opacity-0 absolute peer" :value="0" v-model="addressData.trackingPost">
              <label for="dhl"
                     class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
                <img src="~/assets/images/dhl.png" alt="dhl"
                     class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
                <span class="select-none text-xs md:text-base pointer-events-none flex-1">DHL Express</span>
              </label>
            </div>
            <div>
              <input type="radio" name="trackingPost" id="ups" class="opacity-0 absolute peer" :value="1" v-model="addressData.trackingPost">
              <label for="ups"
                     class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
                <img src="~/assets/images/ups.png" alt="dhl"
                     class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
                <span class="select-none text-xs md:text-base pointer-events-none flex-1">UPS Tracking</span>
              </label>
            </div>
            <div>
              <input type="radio" name="trackingPost" id="fedEx" class="opacity-0 absolute peer" :value="2" v-model="addressData.trackingPost">
              <label for="fedEx"
                     class="bg-transparent peer-checked:bg-[#E9B638]/10 peer-checked:border-[#E9B638] cursor-pointer transition-colors duration-200 p-2 flex items-center gap-2.5 border rounded-lg border-[#453F29]/10">
                <img src="~/assets/images/fedex.png" alt="dhl"
                     class="max-w-9 md:max-w-12 rounded-lg aspect-square object-cover object-center select-none pointer-events-none">
                <span class="select-none text-xs md:text-base pointer-events-none flex-1">FedEX Express</span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-modern text-2xl md:text-3xl">Remember</span>
          <BaseGCheckbox label="Save my information for a faster check out" name="remember" v-model="addressData.remember"/>
        </div>
        <BaseGButton type="submit" class="hidden md:block rounded-lg">
          Pay Now
        </BaseGButton>
      </form>
      <div class="w-1/6 h-full flex items-center flex-col">
        <div class="w-px bg-black/10 h-full"></div>
      </div>
      <div
          class="flex-1 sticky top-10 flex flex-col gap-5 overflow-y-visible bg-[#F8F4EA]/50 border-y border-[#453F29]/10 md:bg-transparent md:border-none -mx-5 p-5 md:m-0 md:p-0">
        <div class="flex md:hidden flex-col">
          <span class="font-modern text-2xl md:text-3xl">Order Summary</span>
          <span class="text-xs font-light opacity-50">you are $20 away from free shipping!</span>
        </div>
        <div class="flex flex-col gap-5 md:gap-8">
          <ul class="flex flex-col gap-4 max-h-[220px] md:max-h-[450px] overflow-y-auto pr-4">
            <li class="flex items-center justify-between" v-for="item in cartStore.PendingOrder?.orderItems"
                :key="item.id">
              <div class="flex items-center gap-5">
                <div
                    class="grid relative place-items-center border rounded-lg bg-white max-w-[20%] md:max-w-[25%] aspect-square">
                  <img :src="`${SITE_URL}/product/images/${item.productData.image}`" alt="product" class="h-full">
                  <span v-if="item.quantity > 1"
                        class="absolute text-xs font-bold w-5 left-2 top-2 aspect-square rounded-full bg-[#504A33]/20 text-[#504A33] grid place-items-center">
                        {{ item.quantity }}
                      </span>
                </div>
                <div class="flex flex-col gap-3">
                  <span class="w-3/4 text-xs md:text-xl">{{ item.productData.title }}</span>
                </div>
              </div>
              <span class="text-sm md:text-lg font-semibold">{{ getPrice(item) }}</span>
            </li>
          </ul>
          <div class="flex items-center gap-3">
            <BaseGInput2 label="Discount Code Or Gift Card" name="discount"/>
            <BaseGButton class="!w-1/4 rounded-lg h-full">
              Apply
            </BaseGButton>
          </div>
          <hr>
          <div
              class="flex flex-col gap-4 [&>div>span]:font-light [&>div>span]:text-sm md:[&>div>span]:text-base opacity-80">
            <div class="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{{ cartStore.getTotalPrice }} {{ getPriceUnitSymbol(globalStore.currentCurrency) }}</span>
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
              <span class="font-light text-xs opacity-60">{{ PriceUnit[globalStore.currentCurrency] }}</span>
              <span
                  class="md:text-2xl font-semibold">{{ cartStore.getTotalPrice }} {{ getPriceUnitSymbol(globalStore.currentCurrency) }}</span>
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
import {useGlobalStore} from "~/stores/global.store";
import {
  type CompleteOrderDataCommand,
  type OrderItem,
  type OrderItemData,
  PaymentType,
  TrackingPost
} from "~/models/cart/orderData";
import {getPriceUnitSymbol, PriceUnit} from "~/models/commonTypes";
import {SITE_URL} from "~/utilities/api.config";
import {CompleteOrderData, GetOrder} from "~/services/cart.service";

const showDetails = ref(false);

const cartStore = useCartStore();
const globalStore = useGlobalStore();
const authStore = useAuthStore();
const toast = useToast();

const addressData:CompleteOrderDataCommand = reactive({
  email:'',
  orderId: undefined,
  country:'',
  city:'',
  completeAddress:'',
  firstName:'',
  lastName:'',
  company:'',
  apartment:'',
  postalCode:'',
  phoneNumber:'',
  paymentType:PaymentType.PayPal,
  trackingPost:TrackingPost.DHL,
  remember:false,
  currency:globalStore.currentCurrency,
  orderItems:[]
})

const getPrice = (item: OrderItem): string => {
  const price = item.prices.find(i => i.unit == globalStore.currentCurrency)!;
  return `${(price.amount * item.quantity).toFixed(2)}${getPriceUnitSymbol(price.unit)}`;
}

onMounted(async () => {
  await cartStore.refreshCart();
  const result = await GetOrder(cartStore.PendingOrder.id);
  if(result.isSuccess){
    addressData.country = result.data?.address?.country ?? '';
    addressData.city = result.data?.address?.city ?? '';
    addressData.completeAddress = result.data?.address?.completeAddress ?? '';
    addressData.firstName = result.data?.address?.fullName.split(' ')[0] ?? '';
    addressData.lastName = result.data?.address?.fullName.split(' ')[1] ?? '';
    addressData.company = result.data?.address?.company ?? '';
    addressData.apartment = result.data?.address?.apartment ?? '';
    addressData.postalCode = result.data?.address?.postalCode ?? '';
    addressData.phoneNumber = result.data?.address?.phoneNumber ?? '';
    addressData.orderId = result.data?.id ?? undefined
  }
})

const router = useRouter();
const startPayment = async ()=>{
  if(!authStore.isLoggedIn){
    addressData.orderItems = cartStore.PendingOrder?.orderItems.map(i=>{
      return {
        data:i.productData,
        count:i.quantity
      } as OrderItemData
    }) ?? [];
  }
  const result = await CompleteOrderData(addressData);
  if(result.isSuccess){
    toast.showToast(result.metaData.message);

    if(!authStore.isLoggedIn)
      cartStore.setOrderId(result.data!);

    switch (addressData.paymentType){
      case PaymentType.CreditCard:
        return;
      case PaymentType.PayPal:
        return;
      case PaymentType.Tether:
        await router.push('/cart/pay-with-tether');
    }
  }
}

</script>