<template>
<div class="container mx-auto py-20">
  <Head>
    <Title>Recipes | Premium Saffron</Title>
  </Head>
  <div class="flex w-max mx-auto relative z-[1] flex-col items-center text-[#504A33]">
    <h2 class="text-4xl md:text-7xl font-modern" data-aos="fade-up">Recipes</h2>
    <svg class="absolute md:top-[60%] -right-[75%] scale-50 md:scale-100 origin-left md:origin-center md:-right-[60%] rotate-[20deg]" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
    </svg>
    <img src="../../assets/images/saffron-flower.png" alt="saffron flower" class="absolute md:-top-[80%] -top-[150%] -right-[110%] md:-right-[110%] w-[150px] move"/>
  </div>

  <!-- Search Box -->
  <div class="w-full md:w-1/3 mx-auto mt-10 -z-[1]" data-aos="fade-down" data-aos-delay="200">
    <div class="relative flex items-center">
      <input type="text" placeholder="Search in Recipes" class="border placeholder-[#453F29]/50 border-[#453F29]/20 text-center w-full py-3">
      <svg class="absolute left-4 opacity-80" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.85798 13.1427C10.3295 13.1427 13.1437 10.3285 13.1437 6.857C13.1437 3.38549 10.3295 0.571289 6.85798 0.571289C3.38647 0.571289 0.572266 3.38549 0.572266 6.857C0.572266 10.3285 3.38647 13.1427 6.85798 13.1427Z" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.4297 15.4287L11.4297 11.4287" stroke="#504A33" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>

  <!-- Recipes -->
  <div class="relative flex flex-col md:grid grid-cols-3 gap-10 mt-10">
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="200">
      <img src="~/assets/images/article1.png" alt="recipes1" class="aspect-video object-bottom object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="300">
      <img src="~/assets/images/article2.png" alt="recipes2" class="aspect-video object-center object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="400">
      <img src="~/assets/images/article3.png" alt="recipes3" class="aspect-video object-center object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="500">
      <img src="~/assets/images/article1.png" alt="recipes1" class="aspect-video object-bottom object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="600">
      <img src="~/assets/images/article2.png" alt="recipes2" class="aspect-video object-center object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="700">
      <img src="~/assets/images/article3.png" alt="recipes3" class="aspect-video object-center object-cover">
      <span class="text-2xl md:text-3xl font-modern mt-5">Baked Saffron Potatoes</span>
      <p class="text-xs md:text-base opacity-60 mt-3">
        Heat oven to 350°F. Arrange potatoes in single layer in large round earthenware or ceramic baking dish, measuring about 10” in diameter...
      </p>
      <div class="flex items-center justify-between w-full mt-4">
        <NuxtLink class="text-[#46AEAE] text-xs md:text-base">
          Read More
        </NuxtLink>
        <span class="text-xs md:text-base opacity-50">265 Views</span>
      </div>
    </div>
  </div>
  <!-- Pagination -->
  <div class="flex items-center justify-center pt-20">
    <div class="flex items-center gap-10">
      <button class="flex items-center gap-3 opacity-50" disabled data-aos="fade-right">
        <svg class="rotate-180" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M1.72949 0.958659L7.27116 6.50033L1.72949 12.042" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
        <span>Previous</span>
      </button>
      <div class="flex items-center gap-6" data-aos="fade-right" data-aos-delay="200">
        <div
            class="flex w-9 h-9 border border-[#453F29]/20 bg-[#453F29] !rotate-45 items-center justify-center">
          <span class="-rotate-45 text-white">1</span>
        </div>
        <div
            class="flex w-9 h-9 border border-[#453F29]/20 !rotate-45 items-center justify-center">
          <span class="-rotate-45 ">2</span>
        </div>
      </div>
      <button class="flex items-center gap-3" data-aos="fade-right" data-aos-delay="600">
        <span>Next</span>
        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M1.72949 0.958659L7.27116 6.50033L1.72949 12.042" stroke="#504A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    </div>
  </div>

</div>
</template>
<script setup lang="ts">
</script>