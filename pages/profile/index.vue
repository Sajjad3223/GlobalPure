<template>
<div class="container mx-auto pt-20">
  <Head>
    <Title>Dashboard | Premium Saffron</Title>
  </Head>
  <div class="flex md:w-max mx-auto relative z-[1] flex-row md:flex-col items-center justify-center text-[#504A33]">
    <h2 class="text-4xl md:text-7xl font-modern" data-aos="fade-up">Dashboard</h2>
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
    <div class="hidden md:flex w-1/4 border border-[#453F29]/50 py-6 flex-col items-stretch justify-between">
      <ul>
        <li>
          <NuxtLink to="/profile/dashboard" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="activePanel">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.57227 9.14244L9.00084 1.71387L16.4294 9.14244" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.85742 6.85645V14.285H14.1431V6.85645" stroke="#453F29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/information" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="opacity-100 ">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00167 10.143C10.5796 10.143 11.8588 8.86381 11.8588 7.28585C11.8588 5.7079 10.5796 4.42871 9.00167 4.42871C7.42372 4.42871 6.14453 5.7079 6.14453 7.28585C6.14453 8.86381 7.42372 10.143 9.00167 10.143Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12109 14.5997C4.63108 13.7626 5.34785 13.0707 6.20248 12.5907C7.05711 12.1106 8.02085 11.8584 9.00109 11.8584C9.98133 11.8584 10.9451 12.1106 11.7997 12.5907C12.6544 13.0707 13.3711 13.7626 13.8811 14.5997" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.00084 16.4284C13.1036 16.4284 16.4294 13.1026 16.4294 8.99986C16.4294 4.89717 13.1036 1.57129 9.00084 1.57129C4.89815 1.57129 1.57227 4.89717 1.57227 8.99986C1.57227 13.1026 4.89815 16.4284 9.00084 16.4284Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Information</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/orders" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="opacity-100 ">
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
          <NuxtLink to="/profile/vouchers" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="opacity-100 ">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.82294 11.7327L6.26865 16.1784C6.42937 16.3389 6.64723 16.4291 6.87437 16.4291C7.10151 16.4291 7.31937 16.3389 7.48008 16.1784L16.3029 7.35556C16.3473 7.31318 16.3816 7.26142 16.4033 7.20407C16.4251 7.14673 16.4337 7.08525 16.4286 7.02413L15.7544 2.64698C15.7489 2.54268 15.705 2.4441 15.6312 2.37025C15.5572 2.29639 15.4587 2.25248 15.3544 2.24698L10.9772 1.5727C10.9161 1.56763 10.8546 1.57628 10.7973 1.59803C10.7399 1.61978 10.6882 1.65408 10.6458 1.69841L1.82294 10.5213C1.66243 10.682 1.57227 10.8998 1.57227 11.127C1.57227 11.3541 1.66243 11.572 1.82294 11.7327Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.3019 6.26981C11.9863 6.26981 11.7305 6.01397 11.7305 5.69838C11.7305 5.38279 11.9863 5.12695 12.3019 5.12695C12.6175 5.12695 12.8733 5.38279 12.8733 5.69838C12.8733 6.01397 12.6175 6.26981 12.3019 6.26981Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Vouchers</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/wishlist" class="px-8 py-3 hover:bg-[#F0E9D8] flex items-center gap-3 opacity-70" exact-active-class="opacity-100 ">
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
      <div class="flex flex-col md:flex-row items-stretch gap-4">
        <div class="w-full md:w-3/4 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-y-10">
          <div class="border border-[#453F29]/10 flex p-6 h-max md:flex-col items-start justify-center">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12.8571L16.4571 15.0857" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.845 14.5717C21.6841 19.4861 17.2693 23.1431 12.0003 23.1431C5.84625 23.1431 0.857422 18.1544 0.857422 12.0003C0.857422 5.84625 5.84625 0.857422 12.0003 0.857422C16.2992 0.857422 20.0297 3.2919 21.8879 6.85742" stroke="#504A33" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M23.1431 3.42871V7.71442H18.8574" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="font-modern text-5xl">16</span>
            </div>
            <div class="flex items-center gap-4">
              <svg opacity="0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12.8571L16.4571 15.0857" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.845 14.5717C21.6841 19.4861 17.2693 23.1431 12.0003 23.1431C5.84625 23.1431 0.857422 18.1544 0.857422 12.0003C0.857422 5.84625 5.84625 0.857422 12.0003 0.857422C16.2992 0.857422 20.0297 3.2919 21.8879 6.85742" stroke="#504A33" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M23.1431 3.42871V7.71442H18.8574" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex flex-col gap-2">
                <span class="opacity-70 font-light">Recently View</span>
                <span class="text-[#46AEAE] text-xs font-light">See Details</span>
              </div>
            </div>
          </div>
          <div class="border border-[#453F29]/10 flex p-6 h-max md:flex-col items-start justify-center">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1431 6.00028V19.7146C17.1431 20.6238 16.7819 21.4959 16.1389 22.1389C15.4959 22.7819 14.6239 23.1431 13.7146 23.1431H0.857422C1.76673 23.1431 2.6388 22.7819 3.28178 22.1389C3.92478 21.4959 4.28599 20.6238 4.28599 19.7146V4.28599C4.28599 3.37668 4.64721 2.50461 5.2902 1.86163C5.93318 1.21865 6.80526 0.857422 7.71456 0.857422H20.1431" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.1426 0.857422C20.9382 0.857422 21.7012 1.17349 22.2638 1.7361C22.8265 2.29871 23.1426 3.06177 23.1426 3.85742V5.14314C23.1426 5.37047 23.0522 5.58849 22.8916 5.74922C22.7308 5.90997 22.5127 6.00028 22.2854 6.00028H17.1426V3.85742C17.1426 3.06177 17.4587 2.29871 18.0213 1.7361C18.5839 1.17349 19.347 0.857422 20.1426 0.857422Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.2852 6.85742H12.8566" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.57227 12H12.858" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.57227 17.1436H12.858" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="font-modern text-5xl">24</span>
            </div>
            <div class="flex items-center gap-4">
              <svg opacity="0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1431 6.00028V19.7146C17.1431 20.6238 16.7819 21.4959 16.1389 22.1389C15.4959 22.7819 14.6239 23.1431 13.7146 23.1431H0.857422C1.76673 23.1431 2.6388 22.7819 3.28178 22.1389C3.92478 21.4959 4.28599 20.6238 4.28599 19.7146V4.28599C4.28599 3.37668 4.64721 2.50461 5.2902 1.86163C5.93318 1.21865 6.80526 0.857422 7.71456 0.857422H20.1431" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.1426 0.857422C20.9382 0.857422 21.7012 1.17349 22.2638 1.7361C22.8265 2.29871 23.1426 3.06177 23.1426 3.85742V5.14314C23.1426 5.37047 23.0522 5.58849 22.8916 5.74922C22.7308 5.90997 22.5127 6.00028 22.2854 6.00028H17.1426V3.85742C17.1426 3.06177 17.4587 2.29871 18.0213 1.7361C18.5839 1.17349 19.347 0.857422 20.1426 0.857422Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.2852 6.85742H12.8566" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.57227 12H12.858" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.57227 17.1436H12.858" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex flex-col gap-2">
                <span class="opacity-70 font-light">Recently View</span>
                <span class="text-[#46AEAE] text-xs font-light">See Details</span>
              </div>
            </div>
          </div>
          <div class="border border-[#453F29]/10 flex p-6 h-max md:flex-col items-start justify-center">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2852 22.7148H13.7137" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.858 9.85714C18.858 8.03851 18.1356 6.29438 16.8496 5.00841C15.5636 3.72245 13.8195 3 12.0008 3C10.1822 3 8.43807 3.72245 7.1521 5.00841C5.86615 6.29438 5.14369 8.03851 5.14369 9.85714V15.8571C5.14369 16.5391 4.87277 17.1933 4.39054 17.6755C3.90831 18.1577 3.25424 18.4286 2.57227 18.4286H21.4294C20.7475 18.4286 20.0933 18.1577 19.6111 17.6755C19.1288 17.1933 18.858 16.5391 18.858 15.8571V9.85714Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.857422 9.6347C0.858346 8.00294 1.24748 6.39482 1.99269 4.94317C2.73789 3.49151 3.81777 2.23799 5.14314 1.28613" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.1431 9.6347C23.1423 8.00294 22.7531 6.39482 22.0079 4.94317C21.2627 3.49151 20.1827 2.23799 18.8574 1.28613" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="font-modern text-5xl">+2</span>
            </div>
            <div class="flex items-center gap-4">
              <svg opacity="0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2852 22.7148H13.7137" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.858 9.85714C18.858 8.03851 18.1356 6.29438 16.8496 5.00841C15.5636 3.72245 13.8195 3 12.0008 3C10.1822 3 8.43807 3.72245 7.1521 5.00841C5.86615 6.29438 5.14369 8.03851 5.14369 9.85714V15.8571C5.14369 16.5391 4.87277 17.1933 4.39054 17.6755C3.90831 18.1577 3.25424 18.4286 2.57227 18.4286H21.4294C20.7475 18.4286 20.0933 18.1577 19.6111 17.6755C19.1288 17.1933 18.858 16.5391 18.858 15.8571V9.85714Z" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.857422 9.6347C0.858346 8.00294 1.24748 6.39482 1.99269 4.94317C2.73789 3.49151 3.81777 2.23799 5.14314 1.28613" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.1431 9.6347C23.1423 8.00294 22.7531 6.39482 22.0079 4.94317C21.2627 3.49151 20.1827 2.23799 18.8574 1.28613" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex flex-col gap-2">
                <span class="opacity-70 font-light">Recently View</span>
                <span class="text-[#46AEAE] text-xs font-light">See Details</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-full flex flex-col gap-4">
            <span class="font-modern text-2xl md:text-4xl">The Most Viewer Product</span>
            <hr class="border-[#504A33]/10">
            <div class="w-full h-32 flex items-center bg-[#46AEAE]/20 rounded-lg justify-center">
              <span>The Chart</span>
            </div>
            <hr class="border-[#504A33]/10">
            <div class="flex flex-col w-full gap-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-6">
                  <div class="w-4 h-4 rotate-45 bg-[#FFC224] border border-[#453F29]"></div>
                  <div class="flex flex-col md:flex-row md:items-center md:gap-6">
                    <span class="capitalize text-xs md:text-base opacity-50">luxury box Saffron Cut Filaments</span>
                    <span class="capitalize text-xs md:text-base opacity-50 font-light">total (987 view)</span>
                  </div>
                </div>
                <span class="text-[#46AEAE] underline underline-offset-4">View</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-6">
                  <div class="w-4 h-4 rotate-45 bg-[#8B7526] border border-[#453F29]"></div>
                  <div class="flex flex-col md:flex-row md:items-center md:gap-6">
                    <span class="capitalize text-xs md:text-base opacity-50">pocket pack Saffron Cut Filaments</span>
                    <span class="capitalize text-xs md:text-base opacity-50 font-light">total (932 view)</span>
                  </div>
                </div>
                <span class="text-[#46AEAE] underline underline-offset-4">View</span>
              </div>
            </div>
          </div>
        </div>
        <div dir="ltr" class="w-full md:w-1/4 border border-[#453F29]/10 flex p-6 flex-col gap-4">
          <span class="capitalize font-light opacity-60">the price of product</span>
          <svg class="w-full" viewBox="0 0 186 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 56.5L19 33L37.5 45L57.5 27H71L89.5 1L126.5 43L145 23.5L168 33L185.5 13" stroke="#35D66B"/>
            <path opacity="0.3" d="M19 33L0.5 56.5V89H185.5V13L168 33L145 23.5L126.5 43L89.5 1L71 27H57.5L37.5 45L19 33Z" fill="url(#paint0_linear_222_219)"/>
            <defs>
              <linearGradient id="paint0_linear_222_219" x1="93" y1="1" x2="93" y2="89" gradientUnits="userSpaceOnUse">
                <stop stop-color="#35D66B"/>
                <stop offset="1" stop-color="#FFFDF6" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="flex items-center gap-3">
            <span class="font-modern text-4xl">+4.2%</span>
            <span class="text-xs opacity-80 font-light">from 1 week ago</span>
          </div>
          <hr class="border-[#453F29]/10">
          <span class="capitalize font-light opacity-60">the price of saffron</span>
          <svg class="w-full" viewBox="0 0 186 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M19 27L0.5 50.5V83H185.5V1.5L167.5 19.5L144.5 1L126.5 37L89.5 13L71 21H57.5L37.5 39L19 27Z" fill="url(#paint0_linear_224_265)"/>
            <path d="M0.5 50.5L19 27L37.5 39L57.5 21H71L89.5 12.5L126.5 37L145 1L168 19.5L185.5 1" stroke="#35D66B"/>
            <defs>
              <linearGradient id="paint0_linear_224_265" x1="93" y1="-5.00001" x2="93" y2="83" gradientUnits="userSpaceOnUse">
                <stop stop-color="#35D66B"/>
                <stop offset="1" stop-color="#FFFDF6" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="flex items-center gap-3">
            <span class="font-modern text-4xl">+8%</span>
            <span class="text-xs opacity-80 font-light">from 1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'profile',
})

const authStore = useAuthStore();
const LogOut = ()=>{
  authStore.logOut();
}
</script>

<style>
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