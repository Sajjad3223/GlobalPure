<template>
<div>
  <header class="bg-white h-[90px] md:h-[100px] flex sticky top-0 z-50 items-center justify-center" style="box-shadow: 0 3px 15px 0 rgba(0,0,0,0.25)">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="~/assets/images/logo.png" alt="logo" class="max-h-[60px] opacity-0" data-aos="zoom-in" data-aos-once="true">
        <div class="flex flex-col justify-center text-lg md:text-3xl leading-tight">
          <span class="font-modern opacity-0" data-aos="zoom-in" data-aos-once="true" >Global Pure</span>
          <span class="text-sm opacity-0" data-aos="zoom-in-right" data-aos-delay="100" data-aos-once="true">Trading</span>
        </div>
      </div>
      <ul class="hidden md:flex items-center gap-12 uppercase text-[#504A33] font-medium">
        <li class="opacity-0" data-aos="fade-left" data-aos-once="true">
          <NuxtLink to="/" class="opacity-70" exact-active-class="activeNavLink">Home</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="100" data-aos-once="true">
          <NuxtLink class="opacity-70">Shop</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <NuxtLink class="opacity-70">Our Story</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
          <NuxtLink class="opacity-70">Quality</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
          <NuxtLink class="opacity-70">Recipes</NuxtLink>
        </li>
        <li class="opacity-0" data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
          <NuxtLink class="opacity-70">Contact Us</NuxtLink>
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <button class="hidden md:block text-[#493E17] opacity-0" data-aos="zoom-in" data-aos-delay="300" data-aos-once="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1701 20.4129C12.9492 21.6223 11.0585 21.6223 9.83766 20.4129L2.55667 13.1992C-2.31418 8.32829 4.04629 -2.43337 12.0038 5.52419C19.9474 -2.41938 26.3079 8.34244 21.451 13.1992L14.1701 20.4129Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="hidden md:block text-[#493E17] opacity-0" data-aos="zoom-in" data-aos-delay="400" data-aos-once="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8831 12.8571H6.86028L5.146 4.28571H22.2888C22.4143 4.28617 22.5379 4.31411 22.6514 4.3676C22.7647 4.42107 22.865 4.49877 22.945 4.59522C23.0253 4.69165 23.0832 4.8045 23.1149 4.92577C23.1466 5.04705 23.1514 5.17381 23.1288 5.29713L21.7231 12.1543C21.6903 12.3525 21.5875 12.5325 21.4334 12.6614C21.2793 12.7904 21.084 12.8598 20.8831 12.8571Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.146 4.28572L4.426 1.54286C4.38649 1.34926 4.28128 1.17525 4.12821 1.05029C3.97515 0.925338 3.78361 0.857106 3.586 0.857147H0.860291" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.86029 12.8571L7.58029 16.4571C7.6198 16.6508 7.72501 16.8248 7.87808 16.9497C8.03115 17.0747 8.2227 17.1429 8.42029 17.1429H18.8602" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0031 23.1429C17.5298 23.1429 17.1459 22.759 17.1459 22.2857C17.1459 21.8124 17.5298 21.4286 18.0031 21.4286C18.4766 21.4286 18.8602 21.8124 18.8602 22.2857C18.8602 22.759 18.4766 23.1429 18.0031 23.1429Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.43173 23.1429C8.95834 23.1429 8.57458 22.759 8.57458 22.2857C8.57458 21.8124 8.95834 21.4286 9.43173 21.4286C9.90511 21.4286 10.2889 21.8124 10.2889 22.2857C10.2889 22.759 9.90511 23.1429 9.43173 23.1429Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="relative">
          <button @click="showLanguages = !showLanguages" class="border rounded-full px-3 py-2 flex items-center gap-2 opacity-0" data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
            <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-7 h-7 rounded-full ">
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M12.0416 1.72916L6.49998 7.27082L0.958313 1.72916" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
          <Transition name="slideDown">
            <div v-if="showLanguages" v-click-outside="closeLanguages" class="absolute left-0 md:left-auto md:right-0 translate-y-2 w-max top-full flex flex-col gap-1 bg-[#FEFCF8] rounded-xl border border-[#453F29]/20 p-2">
              <button class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">English</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">French</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">Dutch</span>
              </button>
              <button class="flex items-center gap-2 py-1 px-2 hover:bg-[#453F29]/20 rounded">
                <img src="~/assets/images/USA-Flag.png" alt="USA Flag" class="w-5 h-5 rounded-full ">
                <span class="text-sm md:text-xs font-light uppercase">Arabic</span>
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
        <ul class="capitalize flex flex-col nav-links text-white gap-5" dir="rtl">
          <li data-animation-offset="0.2">
            <NuxtLink>Home</NuxtLink>
          </li>
          <li data-animation-offset="0.3">
            <NuxtLink>shop</NuxtLink>
          </li>
          <li data-animation-offset="0.4">
            <NuxtLink>our story</NuxtLink>
          </li>
          <li data-animation-offset="0.5">
            <NuxtLink>quality</NuxtLink>
          </li>
          <li data-animation-offset="0.6">
            <NuxtLink>recipes</NuxtLink>
          </li>
          <li data-animation-offset="0.7">
            <NuxtLink>contact us</NuxtLink>
          </li>
          <li data-animation-offset="0.8">
            <NuxtLink>Dashboard</NuxtLink>
          </li>
          <li data-animation-offset="0.9">
            <NuxtLink>log in/sign up</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
  <slot></slot>
  <footer class="bg-[#FCF6E7] py-[60px]">
    <div class="hidden md:flex container mx-auto flex-col">
      <div class="w-full flex items-center justify-between text-[#504A33] text-2xl">
        <span class="font-modern w-1/5 opacity-0" data-aos="fade-left" data-aos-delay="200">Useful Links</span>
        <span class="font-modern flex-1 opacity-0" data-aos="fade-left" data-aos-delay="400">Contact</span>
        <span class="font-modern flex-1 opacity-0" data-aos="fade-left" data-aos-delay="600">Follow Us</span>
        <span class="font-modern flex-1 opacity-0" data-aos="fade-left" data-aos-delay="800">Legal</span>
      </div>
      <hr class="w-full my-4 opacity-0" data-aos="zoom-in" >
      <div class="w-full flex items-center justify-between">
        <div class="w-1/5 flex flex-col gap-4 opacity-0" data-aos="fade-right" data-aos-delay="200">
          <NuxtLink>Home</NuxtLink>
          <NuxtLink>Shop</NuxtLink>
          <NuxtLink>Recipes</NuxtLink>
        </div>
        <div class="flex-1 flex flex-col gap-4 capitalize opacity-0" data-aos="fade-right" data-aos-delay="400">
          <span>Rue Vanderkindere 238</span>
          <span>1180 Uccle</span>
          <a href="mailto:info@globalpuretrading.com">info@globalpuretrading.com</a>
        </div>
        <div class="flex-1 flex gap-10 flex-wrap capitalize opacity-0" data-aos="fade-right" data-aos-delay="600">
          <div class="flex flex-col gap-4">
            <a href="#">facebook</a>
            <a href="#">youtube</a>
            <a href="#">instagram</a>
          </div>
          <div class="flex flex-col gap-4">
            <a href="#">pinterest</a>
            <a href="#">x (twitter)</a>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-4 capitalize opacity-0" data-aos="fade-right" data-aos-delay="800">
          <span>Global Pure  © 2023 </span>
          <span>designed and developed by GP</span>
          <img src="~/assets/images/legal.png" alt="legal">
        </div>
      </div>
    </div>
    <div class="md:hidden container mx-auto flex flex-col items-center gap-16">
      <img src="~/assets/images/legal.png" alt="legal">
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Contact</span>
        <div class="flex-1 flex flex-col items-center text-sm font-light gap-4 capitalize">
          <span>Rue Vanderkindere 238</span>
          <span>1180 Uccle</span>
          <a href="mailto:info@globalpuretrading.com">info@globalpuretrading.com</a>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <span class="font-modern text-3xl flex-1">Follow Us</span>
        <div class="flex flex-col items-center text-sm font-light gap-4">
          <a href="#">facebook</a>
          <a href="#">youtube</a>
          <a href="#">instagram</a>
          <a href="#">pinterest</a>
          <a href="#">x (twitter)</a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Legal</span>
        <div class="flex-1 flex flex-col items-center text-sm font-light gap-4 capitalize">
          <span>Global Pure  © 2023 </span>
          <span>designed and developed by GP</span>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script setup lang="ts">
const showMobileNavbar = ref(false);
const showLanguages = ref(false);

const closeNavbar = ()=>{
  showMobileNavbar.value = false;
}
const closeLanguages = ()=>{
  showLanguages.value = false;
}

</script>

<style>
*{
  @apply font-inter;
}
.activeNavLink{
  @apply !opacity-100 relative flex flex-col items-center before:absolute before:w-3 before:h-3 before:bg-[#453F29] before:rotate-[45deg] before:top-[110%];
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

</style>