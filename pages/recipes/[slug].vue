<template>
  <div class="container mx-auto py-10 2xl:py-20">
    <Head>
      <Title>Saffron Shrimp Pappardelle | Premium Saffron</Title>
    </Head>

    <div class="flex flex-col md:flex-row items-start gap-6 md:w-5/6 2xl:w-3/4 mx-auto">
      <div class="flex-1 flex flex-col">
        <img src="~/assets/images/article1.png" alt="article banner" class="w-full aspect-video object-cover z-[2]" data-aos="fade-up">
        <div class="flex flex-col bg-[#FCF6E7] p-4 md:p-6">
          <h1 class="text-2xl md:text-4xl font-modern" data-aos="fade-down" data-aos-delay="100">Saffron Shrimp Pappardelle</h1>
          <div class="flex flex-col mt-3 md:flex-row md:items-center gap-2 justify-between">
            <span class="capitalize text-xs md:text-lg text-[#46AEAE] opacity-90" data-aos="fade-down" data-aos-delay="200">Seafood pasta in a cream sauce with zucchini</span>
            <span class="capitalize text-xs md:text-lg opacity-50" data-aos="fade-right" data-aos-delay="300">125 view</span>
          </div>
          <hr class="my-4 border-[#453F29]/10">
          <div class="flex flex-col" data-aos="fade-right">
            <p class="text-xs md:text-base text-justify opacity-60">
              Shrimp Pappardelle with a Saffron Cream Sauce makes a perfect romantic dinner, but you can enjoy this one anytime. The secret to the magic flavour is to use the real Spanish Saffron, fake powders just don’t cut it. The luscious and silky cream sauce with the shallot and white wine and seafood flavour will take you to paradise and back. It’s also quite quick and easy to make, so make it today, but share this Saffron Shrimp with someone you love.
            </p>
          </div>
        </div>
      </div>
      <div class="hidden w-1/4 bg-[#FCF6E7] p-6 md:flex flex-col gap-12 h-full">
        <span class="text-2xl" data-aos="fade-down">By Admin</span>
        <div class="flex flex-col divide-y divide-[#453F29]/10 [&>div]:py-3 [&>div>span]:text-sm">
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="100">preparation time:</span>
            <span data-aos="fade-right" data-aos-delay="200">10min</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="200">cook time:</span>
            <span data-aos="fade-right" data-aos-delay="300">20min</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="300">ready time:</span>
            <span data-aos="fade-right" data-aos-delay="400">25min</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="400">serving:</span>
            <span data-aos="fade-right" data-aos-delay="500">2</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="500">cuisine:</span>
            <span data-aos="fade-right" data-aos-delay="600">Italian</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="600">category:</span>
            <span data-aos="fade-right" data-aos-delay="700">Pasta</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="capitalize" data-aos="fade-right" data-aos-delay="700">difficulty level:</span>
            <div class="flex items-center gap-2" data-aos="fade-right" data-aos-delay="800">
             <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-70"></div>
             <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-20"></div>
             <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      <TransitionGroup tag="div" name="details" :class="['md:hidden fixed bottom-0 inset-x-0 transition-all overflow-hidden h-max duration-300 bg-white/40 backdrop-blur-lg flex items-center justify-center border-t border-black/20 drop-shadow-lg',
                showDetails ? 'min-h-[450px]' : 'min-h-[60px]']">
        <div v-if="!showDetails" @click="showDetails = true" class="w-full h-full flex items-center">
          <button class="w-full py-2">Details</button>
        </div>
        <div v-else v-click-outside="closeDetails" class="w-full p-6 flex flex-col gap-12 h-full">
          <div class="flex items-center justify-between">
            <span class="text-2xl">By Admin</span>
            <button @click="closeDetails" class="p-2">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0404 1.72949L6.4987 7.27116L0.957031 1.72949" stroke="#493E17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="flex flex-col divide-y divide-[#453F29]/10 [&>div]:py-3 [&>div>span]:text-sm">
            <div class="flex items-center justify-between">
              <span class="capitalize">preparation time:</span>
              <span>10min</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">cook time:</span>
              <span>20min</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">ready time:</span>
              <span>25min</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">serving:</span>
              <span>2</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">cuisine:</span>
              <span>Italian</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">category:</span>
              <span>Pasta</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="capitalize">difficulty level:</span>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-70"></div>
                <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-20"></div>
                <div class="w-4 h-4 rotate-45 bg-[#504A33] opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

  </div>
</template>
<script setup lang="ts">

const showDetails = ref(false);

const closeDetails = ()=>{
  showDetails.value = false;
}

</script>

<style>
.details-move,
.details-enter-active,
.details-leave-active{
  @apply transition-all duration-300 absolute;
}
.details-enter-from,
.details-leave-to{
  @apply opacity-0 blur translate-y-8;
}
</style>