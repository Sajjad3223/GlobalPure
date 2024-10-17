<template>
  <header class="bg-white h-[90px] md:h-[100px] flex sticky top-0 z-50 items-center justify-center" style="box-shadow: 0 3px 15px 0 rgba(0,0,0,0.05)">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="~/assets/images/logo.png" alt="logo" class="max-h-[50px] 2xl:max-h-[60px] opacity-0" data-aos="zoom-in" data-aos-once="true">
        <div class="flex flex-col justify-center text-lg md:text-xl 2xl:text-3xl leading-tight">
          <span class="font-modern opacity-0" data-aos="zoom-in" data-aos-once="true" >Global Pure</span>
          <span class="text-xs font-light 2xl:text-sm opacity-0" data-aos="zoom-in-right" data-aos-delay="100" data-aos-once="true">Trading</span>
        </div>
      </NuxtLink>
      <ul class="hidden md:flex items-center text-xs 2xl:text-base gap-8 2xl:gap-12 uppercase text-[#504A33] font-medium">
        <li class="opacity-0" data-aos="fade-left" data-aos-once="true">
          <NuxtLink to="/" class="opacity-70 hover:opacity-100 transition-opacity duration-200" exact-active-class="activeNavLink">
            {{ $t('home') }}
          </NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="100" data-aos-once="true">
          <NuxtLink to="/shop" class="opacity-70 hover:opacity-100 transition-opacity duration-200" exact-active-class="activeNavLink">{{ $t('shop') }}</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <NuxtLink to="/about-us" class="opacity-70 hover:opacity-100 transition-opacity duration-200" exact-active-class="activeNavLink">{{ $t('ourStory') }}</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
          <NuxtLink to="/recipes" class="opacity-70 hover:opacity-100 transition-opacity duration-200" exact-active-class="activeNavLink">{{ $t('recipes') }}</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
          <NuxtLink to="/contact-us" class="opacity-70 hover:opacity-100 transition-opacity duration-200" exact-active-class="activeNavLink">{{ $t('contactus') }}</NuxtLink>
        </li>
      </ul>
      <div class="flex items-center gap-4 2xl:gap-6">
        <!--  User Account  -->
        <NuxtLink :to="authStore.isLoggedIn ? '/profile' : '/auth'" class="opacity-0" data-aos="zoom-in" data-aos-delay="300" data-aos-once="true">
          <svg class="w-4 2xl:w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0006 13.715C14.3675 13.715 16.2863 11.7962 16.2863 9.42927C16.2863 7.06234 14.3675 5.14355 12.0006 5.14355C9.63363 5.14355 7.71484 7.06234 7.71484 9.42927C7.71484 11.7962 9.63363 13.715 12.0006 13.715Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.67969 20.4001C5.44467 19.1444 6.51982 18.1065 7.80176 17.3865C9.0837 16.6663 10.5293 16.2881 11.9997 16.2881C13.47 16.2881 14.9157 16.6663 16.1976 17.3865C17.4796 18.1065 18.5546 19.1444 19.3197 20.4001" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0003 23.1431C18.1544 23.1431 23.1431 18.1544 23.1431 12.0003C23.1431 5.84625 18.1544 0.857422 12.0003 0.857422C5.84625 0.857422 0.857422 5.84625 0.857422 12.0003C0.857422 18.1544 5.84625 23.1431 12.0003 23.1431Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <!--  Favorites  -->
        <NuxtLink to="/profile/wishlist" v-if="authStore.isLoggedIn" class="hidden md:block text-[#493E17] opacity-0" data-aos="zoom-in" data-aos-delay="400" data-aos-once="true">
          <svg class="w-4 2xl:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1701 20.4129C12.9492 21.6223 11.0585 21.6223 9.83766 20.4129L2.55667 13.1992C-2.31418 8.32829 4.04629 -2.43337 12.0038 5.52419C19.9474 -2.41938 26.3079 8.34244 21.451 13.1992L14.1701 20.4129Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <!--  Cart  -->
        <button @click="showCart = !showCart,getPendingOrder()" class="text-[#493E17] opacity-0" data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
          <svg class="w-5 md:w-4 2xl:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8831 12.8571H6.86028L5.146 4.28571H22.2888C22.4143 4.28617 22.5379 4.31411 22.6514 4.3676C22.7647 4.42107 22.865 4.49877 22.945 4.59522C23.0253 4.69165 23.0832 4.8045 23.1149 4.92577C23.1466 5.04705 23.1514 5.17381 23.1288 5.29713L21.7231 12.1543C21.6903 12.3525 21.5875 12.5325 21.4334 12.6614C21.2793 12.7904 21.084 12.8598 20.8831 12.8571Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.146 4.28572L4.426 1.54286C4.38649 1.34926 4.28128 1.17525 4.12821 1.05029C3.97515 0.925338 3.78361 0.857106 3.586 0.857147H0.860291" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.86029 12.8571L7.58029 16.4571C7.6198 16.6508 7.72501 16.8248 7.87808 16.9497C8.03115 17.0747 8.2227 17.1429 8.42029 17.1429H18.8602" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0031 23.1429C17.5298 23.1429 17.1459 22.759 17.1459 22.2857C17.1459 21.8124 17.5298 21.4286 18.0031 21.4286C18.4766 21.4286 18.8602 21.8124 18.8602 22.2857C18.8602 22.759 18.4766 23.1429 18.0031 23.1429Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.43173 23.1429C8.95834 23.1429 8.57458 22.759 8.57458 22.2857C8.57458 21.8124 8.95834 21.4286 9.43173 21.4286C9.90511 21.4286 10.2889 21.8124 10.2889 22.2857C10.2889 22.759 9.90511 23.1429 9.43173 23.1429Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="relative">
          <button @click="showCurrency = !showCurrency" class="text-xs p-1 2xl:px-3 2xl:py-2 flex items-center gap-2 opacity-0" data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
            <span>{{ PriceUnit[globalStore.currentCurrency] }}</span>
            <svg :class="['w-2 2xl:w-3 transition-transform duration-200',{'-rotate-180':showCurrency}]" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M12.0416 1.72916L6.49998 7.27082L0.958313 1.72916" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
          <Transition name="slideDown">
            <div v-if="showCurrency" v-click-outside="closeCurrency" class="absolute left-auto right-0 translate-y-2 w-max min-w-[100px] top-full flex flex-col gap-1 bg-[#FEFCF8] border border-[#453F29]/20 py-1">
              <button class="flex items-center gap-2 py-1 px-3 hover:bg-[#453F29]/20 " @click="setCurrency(PriceUnit.USD)">
                <img src="~/assets/images/USA-Flag.png" alt="canada flag" class="w-5 object-cover aspect-square rounded-full">
                <span class="text-sm md:text-xs font-light uppercase">USD</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-3 hover:bg-[#453F29]/20 " @click="setCurrency(PriceUnit.CAD)">
                <img src="~/assets/images/countries/canada.png" alt="canada flag" class="w-5 object-cover aspect-square rounded-full">
                <span class="text-sm md:text-xs font-light uppercase">CAD</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-3 hover:bg-[#453F29]/20 " @click="setCurrency(PriceUnit.EUR)">
                <img src="~/assets/images/countries/eur.png" alt="canada flag" class="w-5 object-cover aspect-square rounded-full">
                <span class="text-sm md:text-xs font-light uppercase">Eur</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-3 hover:bg-[#453F29]/20 " @click="setCurrency(PriceUnit.QAR)">
                <img src="~/assets/images/countries/qatar.png" alt="canada flag" class="w-5 object-cover aspect-square rounded-full">
                <span class="text-sm md:text-xs font-light uppercase">QAR</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-3 hover:bg-[#453F29]/20 " @click="setCurrency(PriceUnit.USDT)">
                <img src="~/assets/images/countries/tether.png" alt="canada flag" class="w-5 object-cover aspect-square rounded-full">
                <span class="text-sm md:text-xs font-light uppercase" title="Tether">USDT</span>
              </button>
            </div>
          </Transition>
        </div>
        <div class="relative">
          <button @click="showLanguages = !showLanguages"
                  class="hidden md:flex rounded-full p-1 2xl:px-3 2xl:py-2 items-center gap-2 opacity-0" data-aos="zoom-in" data-aos-delay="600" data-aos-once="true">
<!--            <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 2xl:w-7 2xl:h-7 rounded-full ">-->
            <span class="text-xs font-light pl-1">EN</span>
            <svg :class="['w-2 2xl:w-3 transition-transform duration-200',{'-rotate-180':showLanguages}]" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M12.0416 1.72916L6.49998 7.27082L0.958313 1.72916" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
          <Transition name="slideDown">
            <div v-if="showLanguages" v-click-outside="closeLanguages" class="absolute left-auto right-0 translate-y-2 w-max top-full flex flex-col gap-1 bg-[#FEFCF8] rounded-xl border border-[#453F29]/20 p-2">
              <button @click="setLocale('en')" class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">English</span>
              </button>
              <button @click="setLocale('ar')" class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">Arabic</span>
              </button>
              <button @click="setLocale('fr')" class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">French</span>
              </button>
              <button @click="setLocale('du')" class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">Dutch</span>
              </button>
            </div>
          </Transition>
        </div>
        <button class="flex md:hidden items-center justify-center" @click="showMobileNavbar = !showMobileNavbar">
          <svg v-if="!showMobileNavbar" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.964233 3.21387H17.0357" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.964233 14.7852H17.0357" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.964233 9H17.0357" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_164_138)">
              <path d="M17.3571 0.642578L0.642822 17.3569" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0.642822 0.642578L17.3571 17.3569" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_164_138">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </header>
  <Transition name="slide">
    <div v-if="showMobileNavbar" v-click-outside="closeNavbar" class="navbar fixed top-[90px] -bottom-full right-0 left-2/5 bg-[#1D1C1C]/80 backdrop-blur-sm z-50">
      <div class="flex flex-col p-12">
        <ul class="capitalize flex flex-col nav-links [&>li>a]:text-white gap-5 [&>li>a]:opacity-50" dir="rtl">
          <li data-animation-offset="0.2">
            <NuxtLink to="/" exact-active-class="activeMobileNavLink" @click="closeNavbar">Home</NuxtLink>
          </li>
          <li data-animation-offset="0.3">
            <NuxtLink to="/shop" exact-active-class="activeMobileNavLink" @click="closeNavbar">shop</NuxtLink>
          </li>
          <li data-animation-offset="0.4">
            <NuxtLink to="/about-us" exact-active-class="activeMobileNavLink" @click="closeNavbar">our story</NuxtLink>
          </li>
          <li data-animation-offset="0.5">
            <NuxtLink to="/quality" exact-active-class="activeMobileNavLink" @click="closeNavbar">quality</NuxtLink>
          </li>
          <li data-animation-offset="0.6">
            <NuxtLink to="/recipes" exact-active-class="activeMobileNavLink" @click="closeNavbar">recipes</NuxtLink>
          </li>
          <li data-animation-offset="0.7">
            <NuxtLink to="/contact-us" exact-active-class="activeMobileNavLink" @click="closeNavbar">contact us</NuxtLink>
          </li>
          <li data-animation-offset="0.9">
            <NuxtLink to="/auth" exact-active-class="activeMobileNavLink" @click="closeNavbar">log in/sign up</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
  <Transition name="slide">
    <div v-if="showCart" v-click-outside="closeCart" class="pointer-events-auto fixed top-0 bottom-0 right-0 left-0 md:left-[70%] 2xl:left-[75%] border border-[#453F29]/50 bg-[#FFFDF8] z-50">
      <div class="h-full flex flex-col items-center gap-5 p-8 2xl:p-12">
        <div class="w-full flex items-center justify-between">
          <span class="text-4xl font-modern">Shop Cart</span>
          <button @click="closeCart">
            <svg class="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.1431 0.857422L0.857422 23.1431" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0.857422 0.857422L23.1431 23.1431" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <ul class="flex flex-col items-center gap-5 flex-1 shrink-0 overflow-y-auto">
          <li class="flex items-center w-full gap-4" v-for="(item,index) in cartStore.PendingOrder?.orderItems">
            <button @click="cartStore.removeItem(item.id)">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4294 1.57129L1.57227 16.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.57227 1.57129L16.4294 16.4284" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="relative max-w-[100px]">
              <img :src="`${SITE_URL}/product/images/${item.productData.image}`" alt="gp products" class="w-full">
              <span v-if="item.quantity > 1" class="absolute text-xs font-bold w-5 left-0 top-0 aspect-square rounded-full bg-[#504A33]/20 text-[#504A33] grid place-items-center">
                {{item.quantity}}
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs md:text-base" :title="item.productData.title">{{ item.productData.title.substring(0,35) }}</span>
              <strong class="text-sm md:text-lg">{{ getPrice(item) }}</strong>
            </div>
          </li>
        </ul>
        <NuxtLink to="/shop" class="hidden md:block text-[#46AEAE]/80">Add More</NuxtLink>
        <hr class="w-full border-[#453F29]/20 mt-auto">
        <div class="w-full flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <span class="opacity-70">{{ cartStore.cartItemsCount }} item</span>
            <span class="opacity-70">{{ cartStore.getTotalPrice }} {{getPriceUnitSymbol(globalStore.currentCurrency)}}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="opacity-70">Shipping</span>
            <span class="opacity-70">$0</span>
          </div>
          <div class="flex items-center justify-between">
            <span>TOTAL</span>
            <span>{{ cartStore.getTotalPrice }} {{getPriceUnitSymbol(globalStore.currentCurrency)}}</span>
          </div>
        </div>
        <hr class="w-full border-[#453F29]/20">
        <NuxtLink to="/cart/shipping" class="w-full text-center py-3 bg-[#504A33] text-white">Checkout</NuxtLink>
        <NuxtLink to="/cart/checkout" @click="closeCart">View Shop Cart</NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {getPriceUnitSymbol, PriceUnit} from "~/models/commonTypes";
import {useGlobalStore} from "~/stores/global.store";
import type {Order, OrderItem} from "~/models/cart/orderData";
import {SITE_URL} from "~/utilities/api.config";

const showMobileNavbar = ref(false);
const showLanguages = ref(false);
const showCurrency = ref(false);
const showCart = ref(false);

const globalStore = useGlobalStore();

const setCurrency = (unit:PriceUnit)=>{
  globalStore.setCurrency(unit);
  showCurrency.value = false;
}

const cartStore = useCartStore();
const getPendingOrder = async ():Promise<Order>=>{
  await cartStore.refreshCart();
  return cartStore.PendingOrder!;
}

const getPrice = (item:OrderItem):string=>{
  const price = item.prices.find(i=>i.unit == globalStore.currentCurrency)!;
  return `${(price.amount * item.quantity).toFixed(2)} ${getPriceUnitSymbol(price.unit)}`;
}

const {locale,setLocale } = useI18n();

const closeNavbar = ()=>{
  setTimeout(()=>{
    if(showMobileNavbar.value)
      showMobileNavbar.value = false;
  },100);
}
const closeLanguages = ()=>{
  setTimeout(()=>{
    if(showLanguages.value)
      showLanguages.value = false;
  },100);
}
const closeCurrency = ()=>{
  setTimeout(()=>{
    if(showCurrency.value)
      showCurrency.value = false;
  },100);
}
const closeCart = ()=>{
  setTimeout(()=>{
    if(showCart.value)
      showCart.value = false;
  },100);
}

const authStore = useAuthStore();
</script>

<style>
.activeNavLink{
  @apply !opacity-100 relative flex flex-col items-center before:absolute before:w-3 before:h-3 before:bg-[#453F29] before:rotate-[45deg] before:top-[120%];
}
.activeMobileNavLink{
  @apply font-black !opacity-100 relative flex items-center before:w-2 before:h-2 before:bg-white before:absolute before:-right-4 before:rotate-45;
}

.slide-enter-active,
.slide-leave-active{
  @apply transition-all duration-300;
}

.slide-enter-from,
.slide-leave-to{
  @apply translate-x-full opacity-0;
}

.slideDown-enter-active,
.slideDown-leave-active{
  @apply transition-all duration-300;
}

.slideDown-enter-from,
.slideDown-leave-to{
  @apply -translate-y-8 opacity-0 scale-0 origin-top;
}

.navbar .nav-links li{
  @apply transition-all duration-200;
  transform: translateY(100px);
  opacity:0;
  animation: fadeUp 0.5s ease forwards;
  //animation-delay: calc(1s * attr(data-animation-offset));
}
.navbar .nav-links li:nth-child(1){animation-delay: 0.1s;}
.navbar .nav-links li:nth-child(2){animation-delay: 0.2s;}
.navbar .nav-links li:nth-child(3){animation-delay: 0.3s;}
.navbar .nav-links li:nth-child(4){animation-delay: 0.4s;}
.navbar .nav-links li:nth-child(5){animation-delay: 0.5s;}
.navbar .nav-links li:nth-child(6){animation-delay: 0.6s;}
.navbar .nav-links li:nth-child(7){animation-delay: 0.7s;}
.navbar .nav-links li:nth-child(8){animation-delay: 0.8s;}

@keyframes fadeUp {
  0%{
    transform: translateY(100px);
    opacity:0;
  }
  100%{
    transform: translateY(0);
    opacity:100%;
  }
}

.scrollbox {
  background: /* Shadow covers */
      linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
      radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background: /* Shadow covers */
      linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
      radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background-repeat: no-repeat;
  background-color: #FFFDF8 !important;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
}

</style>