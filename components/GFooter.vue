<template>
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
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/shop">Shop</NuxtLink>
          <NuxtLink to="/recipes">Recipes</NuxtLink>
          <NuxtLink to="/track-payment">Track Payment</NuxtLink>
        </div>
        <div class="flex-1 flex flex-col gap-4 capitalize opacity-0" data-aos="fade-right" data-aos-delay="400">
          <p class="w-1/2">{{globalStore.siteSettings?.companyAddress?.shortAddress}}</p>
          <a :href="`mailto:${globalStore.siteSettings.companyAddress.email}`">{{globalStore.siteSettings?.companyAddress?.email}}</a>
        </div>
        <div class="flex-1 flex gap-10 flex-wrap capitalize opacity-0" data-aos="fade-right" data-aos-delay="600">
          <div class="grid grid-cols-2 text-sm font-light gap-x-8 gap-y-4 capitalize" v-if="globalStore.siteSettings?.socialNetworks?.length > 0">
            <a v-for="network in globalStore.siteSettings.socialNetworks" :key="network.id" :href="network.link">{{network.title}}</a>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-4 capitalize opacity-0" data-aos="fade-right" data-aos-delay="800">
          <span>Global Pure  © {{ new Date().getFullYear() }} </span>
          <span>designed and developed by GP</span>
          <img src="~/assets/images/legal.png" alt="legal">
        </div>
      </div>
    </div>
    <div class="md:hidden container mx-auto flex flex-col items-center gap-16">
      <img src="~/assets/images/legal.png" alt="legal" class="w-5/6">
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Contact</span>
        <div class="flex-1 flex flex-col items-center text-sm font-light gap-4 capitalize">
          <p>{{globalStore.siteSettings?.companyAddress?.shortAddress}}</p>
          <a :href="`mailto:${globalStore.siteSettings.companyAddress.email}`">{{ globalStore.siteSettings?.companyAddress?.email }}</a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Follow Us</span>
        <div class="grid grid-cols-2 text-sm font-light gap-x-8 gap-y-4 capitalize" v-if="globalStore.siteSettings?.socialNetworks?.length > 0">
          <a v-for="network in globalStore.siteSettings.socialNetworks" :key="network.id" :href="network.link">{{network.title}}</a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Legal</span>
        <div class="flex-1 flex flex-col items-center text-sm font-light gap-4 capitalize">
          <span>Global Pure  © {{ new Date().getFullYear() }} </span>
          <span>designed and developed by GP</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const globalStore = useGlobalStore();
</script>