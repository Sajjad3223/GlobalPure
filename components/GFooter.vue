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
      <img src="~/assets/images/legal.png" alt="legal" class="w-5/6">
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Contact</span>
        <div class="flex-1 flex flex-col items-center text-sm font-light gap-4 capitalize">
          <span>Rue Vanderkindere 238</span>
          <span>1180 Uccle</span>
          <a href="mailto:info@globalpuretrading.com">info@globalpuretrading.com</a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <span class="font-modern text-3xl flex-1">Follow Us</span>
        <div class="grid grid-cols-2 text-sm font-light gap-x-8 gap-y-4 capitalize">
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
</template>