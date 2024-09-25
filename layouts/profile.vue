<template>
<div>
  <GHeader />
  <div class="container mx-auto py-20">
    <div class="flex md:w-max mx-auto relative z-[1] flex-row md:flex-col items-center justify-center text-[#504A33]">
      <h2 class="text-4xl md:text-7xl font-modern" data-aos="fade-up">{{ route.meta.title }}</h2>
      <button class="md:hidden absolute left-0">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M8.5 15L1.5 8L8.5 1" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
      <svg class="hidden md:block absolute md:top-[60%] -right-[75%] scale-50 md:scale-100 origin-left md:origin-center md:-right-[25%] rotate-[20deg]" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
      </svg>
      <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="hidden md:block absolute md:-top-[80%] -top-[150%] -right-[110%] md:-right-[60%] w-[150px] move"/>
    </div>

    <div class="flex items-stretch gap-4 mt-10">
      <div class="hidden md:flex w-1/4 min-h-[450px] border border-[#453F29]/50 py-6 flex-col items-stretch justify-between">
        <ul>
          <li>
            <NuxtLink to="/profile" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57227 9.14244L9.00084 1.71387L16.4294 9.14244" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.85742 6.85645V14.285H14.1431V6.85645" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Dashboard</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/information" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00167 10.143C10.5796 10.143 11.8588 8.86381 11.8588 7.28585C11.8588 5.7079 10.5796 4.42871 9.00167 4.42871C7.42372 4.42871 6.14453 5.7079 6.14453 7.28585C6.14453 8.86381 7.42372 10.143 9.00167 10.143Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.12109 14.5997C4.63108 13.7626 5.34785 13.0707 6.20248 12.5907C7.05711 12.1106 8.02085 11.8584 9.00109 11.8584C9.98133 11.8584 10.9451 12.1106 11.7997 12.5907C12.6544 13.0707 13.3711 13.7626 13.8811 14.5997" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.00084 16.4284C13.1036 16.4284 16.4294 13.1026 16.4294 8.99986C16.4294 4.89717 13.1036 1.57129 9.00084 1.57129C4.89815 1.57129 1.57227 4.89717 1.57227 8.99986C1.57227 13.1026 4.89815 16.4284 9.00084 16.4284Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Information</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/change-password" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg class="w-[18px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5.5H3C2.44772 5.5 2 5.94772 2 6.5V12.5C2 13.0523 2.44772 13.5 3 13.5H11C11.5523 13.5 12 13.0523 12 12.5V6.5C12 5.94772 11.5523 5.5 11 5.5Z" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 5.5V4C10.5 3.07174 10.1313 2.1815 9.47487 1.52513C8.8185 0.868749 7.92826 0.5 7 0.5C6.07174 0.5 5.1815 0.868749 4.52513 1.52513C3.86875 2.1815 3.5 3.07174 3.5 4V5.5" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10C7.27614 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.27614 9 7 9C6.72386 9 6.5 9.22386 6.5 9.5C6.5 9.77614 6.72386 10 7 10Z" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Change Password</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/orders" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.14369 3.42899C2.45928 3.42899 2.71512 3.17315 2.71512 2.85756C2.71512 2.54197 2.45928 2.28613 2.14369 2.28613C1.8281 2.28613 1.57227 2.54197 1.57227 2.85756C1.57227 3.17315 1.8281 3.42899 2.14369 3.42899Z" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.14453 2.85742H16.4302" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.14369 8.57157C2.45928 8.57157 2.71512 8.31573 2.71512 8.00014C2.71512 7.68455 2.45928 7.42871 2.14369 7.42871C1.8281 7.42871 1.57227 7.68455 1.57227 8.00014C1.57227 8.31573 1.8281 8.57157 2.14369 8.57157Z" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.14453 8H16.4302" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.14369 13.7151C2.45928 13.7151 2.71512 13.4592 2.71512 13.1437C2.71512 12.8282 2.45928 12.5723 2.14369 12.5723C1.8281 12.5723 1.57227 12.8282 1.57227 13.1437C1.57227 13.4592 1.8281 13.7151 2.14369 13.7151Z" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.14453 13.1436H16.4302" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Orders</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/vouchers" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.82294 11.7327L6.26865 16.1784C6.42937 16.3389 6.64723 16.4291 6.87437 16.4291C7.10151 16.4291 7.31937 16.3389 7.48008 16.1784L16.3029 7.35556C16.3473 7.31318 16.3816 7.26142 16.4033 7.20407C16.4251 7.14673 16.4337 7.08525 16.4286 7.02413L15.7544 2.64698C15.7489 2.54268 15.705 2.4441 15.6312 2.37025C15.5572 2.29639 15.4587 2.25248 15.3544 2.24698L10.9772 1.5727C10.9161 1.56763 10.8546 1.57628 10.7973 1.59803C10.7399 1.61978 10.6882 1.65408 10.6458 1.69841L1.82294 10.5213C1.66243 10.682 1.57227 10.8998 1.57227 11.127C1.57227 11.3541 1.66243 11.572 1.82294 11.7327Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3019 6.26981C11.9863 6.26981 11.7305 6.01397 11.7305 5.69838C11.7305 5.38279 11.9863 5.12695 12.3019 5.12695C12.6175 5.12695 12.8733 5.38279 12.8733 5.69838C12.8733 6.01397 12.6175 6.26981 12.3019 6.26981Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Vouchers</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/wishlist" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4475 13.6089C9.63366 14.4151 8.37315 14.4151 7.55927 13.6089L2.70528 8.79977C-0.541951 5.55248 3.69836 -1.62196 9.0034 3.68308C14.2991 -1.61263 18.5395 5.56191 15.3015 8.79977L10.4475 13.6089Z" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>My Wishlist</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="flex flex-col gap-3">
          <hr class="mx-8">
          <button @click="LogOut" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.858 12.9999V15.2856C11.858 15.5887 11.7376 15.8794 11.5232 16.0937C11.3089 16.308 11.0182 16.4284 10.7151 16.4284H2.71512C2.41201 16.4284 2.12133 16.308 1.907 16.0937C1.69267 15.8794 1.57227 15.5887 1.57227 15.2856V2.71415C1.57227 2.41104 1.69267 2.12035 1.907 1.90602C2.12133 1.6917 2.41201 1.57129 2.71512 1.57129H10.7151C11.0182 1.57129 11.3089 1.6917 11.5232 1.90602C11.7376 2.12035 11.858 2.41104 11.858 2.71415V4.99986" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.42969 9H16.4297" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.1445 6.71387L16.4302 8.99958L14.1445 11.2853" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>
      <div class="flex-1 md:border border-[#453F29]/50 md:p-6">
        <slot></slot>
      </div>
    </div>

  </div>
  <GFooter v-if="false" />
</div>
</template>

<script setup lang="ts">

const route = useRoute();

const authStore = useAuthStore();
const LogOut = ()=>{
  authStore.logOut();
}
</script>

<style>
*{
  @apply font-inter;
}

.activePanel{
  @apply !opacity-100 relative;
}
.activePanel:before{
  content:'';
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 16px solid #504A33;
  border-bottom: 10px solid transparent;
  position: absolute;
  left: 0;
}
</style>