<template>
<div>
  <Head>
    <Title>Global Pure | Premium Saffron</Title>
  </Head>
  <div class="relative z-0 w-full flex items-center justify-center h-[calc(100vh-90px)] md:h-[calc(100vh-100px)] " ><!--bg-[url(/images/landing-bg.png)]  bg-no-repeat bg-cover bg-bottom md:bg-top bg-fixed">-->
    <div class="absolute inset-0 flex overflow-x-hidden">
      <div class="flex transition-transform duration-1000" ref="imagesContainer" :style="{transform:`translateX(${-100 * currentImage}%)`}">
        <img src="/public/images/landing-bg.png" alt="landing" class="h-full object-cover w-screen shrink-0">
        <img src="/public/images/landing-bg2.png" alt="landing" class="h-full object-cover w-screen shrink-0">
        <img src="/public/images/landing-bg4.png" alt="landing" class="h-full object-cover w-screen shrink-0">
      </div>
    </div>
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative gap-4 md:gap-10 w-full md:w-2/3 flex flex-col items-center justify-center text-center">
      <h1 class="text-3xl text-white md:text-7xl font-modern capitalize opacity-0" data-aos="fade-up">
        {{ $t('indexHeader') }}
      </h1>
      <span class="max-w-[90%] capitalize text-white text-xs sm:text-sm md:text-xl font-light opacity-0" data-aos="zoom-in" data-aos-delay="200">
        {{ $t('indexSubHeader') }}
      </span>
      <div class="mt-10 opacity-0" data-aos="fade-down" data-aos-delay="400">
        <NuxtLink to="/shop" class="text-lg py-3 px-9 border border-white hover:bg-white text-white hover:text-black font-modern transition-all duration-300">
          {{ $t('shop_now') }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="py-10 md:py-20 flex flex-col items-center gap-8 md:gap-12">
    <h2 class="text-3xl md:text-6xl text-[#504A33] font-modern opacity-0" data-aos="zoom-in-up">Category</h2>
    <div class="container mx-auto grid grid-cols-3 gap-5 md:flex items-center justify-center md:gap-[100px]">
      <div class="flex flex-col items-center gap-4 opacity-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        <div class="group relative w-[80px] md:w-[200px] h-[80px] md:h-[200px] flex items-center justify-center">
          <div class="absolute inset-0 bg-[#FCF6E7] grid place-items-center">
            <svg class="w-[50%] h-[50%]" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect opacity="0.4" width="100" height="100" fill="url(#pattern0_120_210)"/>
              <defs>
                <pattern id="pattern0_120_210" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_120_210" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_120_210" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA71JREFUeAHtnT1v1EAQhq10CIkiSOebdw5KGhqgoKLkB1AAJaJCgoaSH5CAaOmpKPkBpKClp6JEaUAUlERCSiQ+Fp3HK+P13eV82bHvjWTdeO3czj6PPf7IXVwU/CEBEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEvBEQFWviMgjTjWDwCSbI1V9COA3p5pBYEIhjjYKCnEkI1QKCqGQukLyGFIfO6rjqNc95ERVP495AnBSSYhfvQo5rPejcUYADmMRVUwhmXxTSCbwqW4pJEUmUzuFZAKf6pZCUmQytVNIJvCpbikkRSZTO4VkAp/qlkJSZDK1U0gm8KluKSRFJlM7hSTAi8gNVX0RJgDXE6v13kwhLUhV9X7jrmu4y3yvZdXemyikBSmAb9Vd1up1Op1+bVm19yYKaSBV1YuVhOZrWNZYvffZoQk5EpG92Wx2syiKnd5pzN8wwx6yE8YUxgbgqLkhhHmvfw+JPxoUysprAHfKsjzfp5xwvGg5htzts4+Qc8h9Pob/SmRTyhCEmBwR+amq71T1MYBLfYALZ1aq+nw+XevpPS+FHEOuIecm9K75QQlpGcgnAC8B3NpkaVtG0nQ6vQrgGYAPAH615GobVteyoQuJB/ldVd+EMrS7u3thGYjrrDObzc79hX8bwCsR+dIFeZVlYxJickKZEJH3IvIUwOV1wMe/O5lMSlV9AOAtgB+rgF52Xa9CjletvV0DFpGPIrJ/irO26qxoP7xHVx+rLJuP7bjtd7wKOdxUSQDQWdrOqt+hXYc0P5dVbal7G9hSDwA8mU8HG9gzW6+nhi4kLuVFWZaTTdfytnKyqG2VY9eohMR2Nlhi7CRhgYjOEhjnGsejFRIPMsR9XQ8skLD29c/WCIkFNU5TW+8dLQD/by9ZpRTF/XfFWykkBnKK0naqUhT32RVvvZAmnERpW7sUNftJzVNIikxRFOFqvs8r+o6ubBGFGAofAYX48GBZUIih8BFQiA8PlgWFGAofAYX48GBZUIih8BFQiA8PlgWFGAofAYX48GBZUIih8BFQiA8PlgWFGAofAYX48GBZUIih8BFQiA8PlgWFGAofAYX48GBZUIih8BFQiA8PlgWFGAofAYX48GBZUIih8BFQiA8PlsXQhPAfKZu6MwzC17eW+bDzNq3j9Stty343Y3TrUQifjlDXRJas4TwdYXSlaNnjYO6SxYeCNR6KlvWhYHXxYkQCJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJFAT+AMbLUqgvW56IgAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
          </div>
          <div class="border absolute inset-0 grid place-items-center rotate-6 group-hover:rotate-0 transition-transform duration-300 border-[#453F29] opacity-50"></div>
        </div>
        <span class="md:text-2xl text-[#504A33] font-modern">Pocket Box</span>
      </div>
      <div class="flex flex-col items-center gap-4 opacity-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
        <div class="group relative w-[80px] md:w-[200px] h-[80px] md:h-[200px] grid place-items-center">
          <div class="absolute inset-0 bg-[#FCF6E7] grid place-items-center">
            <svg class="w-[50%] h-[50%]" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect opacity="0.4" width="100" height="100" fill="url(#pattern0_120_209)"/>
              <defs>
                <pattern id="pattern0_120_209" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_120_209" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_120_209" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA8xJREFUeAHtnD1rFVEQhpdEURuFVDvvbHEJQVAbMYXa+QeMGNFWBbEWLAUrP8DOwtpSxN8kMV0QsUmCQoLKSDY3H3M2N1fvzsnJG7jszezdnZnnOWd3uR9bVfwjARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARLIiYCqnheRx3wMGRiTMEeq+gDAbz6GDIwJhWQ0KCgkIxl2pKAQChkeIXkOGZ472vNo6AwRkTuq+nnvA8ByW6CzXN77+lz/H6cPYzIcspk8q+t64Ij4ezVm6zIp88AySumjKqWRUvqgkAPnXs8vKGVkldIHZ0jPE+DAdKWMrFL66JwhdimZ22UugDfeKCtCyMzMzFkAr1OXvZnG3x9WiPVovXrbZRNT1XsAVjKF3vWu9DhCbH8rqno3GwE7CwHw/AiKaCWNK8S2/6Wqz3ayCH8uIo+OsAyD+i9CWqkPw0VYAaraAFgrUcjc3Nwpm/ki8n2E/taaptFwKQDedRVrzYjIi5w/5m2a5kYXyNnZ2XMjinnbtZ+Jr5ufnz/ZMXo2VPWlNTPxQnpKYL2o6isAG94gFJFvVVWd6Kmc/WlE5IpXmMVE5Mn+LcqIqOrTVN+qejmsS3vv3ytMRH7Y8TessAknHgwGp0XkZ6L3xQmnT+9eVe97RQH4kt6qjDXWo9e7MQnrsOMj3KWwonpKDGApISTLrwFRSE8DY1cazpDMvuRAIRSya4ZG/sNzSCR9JzeFOFAiQxQSSd/JTSEOlMgQhUTSd3JTiAMlMkQhkfSd3BTiQIkMUUgkfSc3hThQIkMUEknfyU0hDpTIEIVE0ndyU4gDJTJEIZH0ndwU4kCJDFFIJH0nN4U4UCJDFBJJ38lNIQ6UyBCFRNJ3clOIAyUyRCGR9J3cFOJAiQxRSCR9JzeFOFAiQxQSSd/JTSEOlMgQhUTSd3JTiAMlMkQhkfSd3FkKSf0KF8B6VVXTTh+lhKatR+83hiJyO6xJVb3uFbUVuxlW2IQTA7iV6rtpmqsTTp/efdM0Zzruc/IVwEJhM8VmxgIA66296czO5ar9hj1NrIc1AD4mimsLXc/tDnLj1pM6TLX913X9oQfk3SlE5ELq3h9tocdkuVnX9aVuWj2tPYK39Gtn739b2o12esI9UpopEfl0TGbCPonWe1VVUyOR6vFFU1szZfMYidncmhnZydj2bsdRO7kBWC1YzKr1WNf1xe3Gc39il3+qek1EFnO+m9wha1u0nsIvbXOXz/pIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIIC8CfwArnHltDGWg0wAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
          </div>
          <div class="border absolute inset-0 grid place-items-center rotate-6 group-hover:rotate-0 transition-transform duration-300 border-[#453F29] opacity-50"></div>
        </div>
        <span class="md:text-2xl text-[#504A33] font-modern">Glass Box</span>
      </div>
      <div class="flex flex-col items-center gap-4 opacity-0" data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
        <div class="group relative w-[80px] md:w-[200px] h-[80px] md:h-[200px] grid place-items-center">
          <div class="absolute inset-0 bg-[#FCF6E7] grid place-items-center">
            <svg class="h-[50%]" width="68" height="101" viewBox="0 0 68 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <mask id="path-1-inside-1_120_211" fill="white">
                  <rect width="68" height="101" rx="2"/>
                </mask>
                <rect width="68" height="101" rx="2" stroke="black" stroke-width="12" mask="url(#path-1-inside-1_120_211)"/>
              </g>
              <rect opacity="0.4" x="23" y="37" width="22" height="28" rx="3" fill="black" stroke="black" stroke-width="2"/>
              <line x1="46" y1="45" x2="22" y2="45" stroke="#FCF6E7" stroke-width="6"/>
              <line x1="68" y1="9" x2="62" y2="9" stroke="#FCF6E7" stroke-width="6"/>
            </svg>
          </div>
          <div class="border absolute inset-0 grid place-items-center rotate-6 group-hover:rotate-0 transition-transform duration-300 border-[#453F29] opacity-50"></div>
        </div>
        <span class="md:text-2xl text-[#504A33] font-modern">Luxury Box</span>
      </div>
    </div>
  </div>
  <div  class="bg-[#FCF6E7] py-10 md:py-20">
    <div class="container mx-auto flex flex-col">
      <div class="w-full flex items-end justify-between text-[#504A33]">
        <h3 class="text-3xl md:text-6xl font-modern opacity-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Best Sellers</h3>
        <button class="md:text-3xl font-modern opacity-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">See All</button>
      </div>
      <hr class="border-[#453F29]/50 mt-5 mb-10 opacity-0" data-aos="zoom-in">
      <index-last-products />
    </div>
  </div>
  <div class="py-[100px] flex items-center justify-center">
    <div class="container mx-auto flex flex-col items-center">
      <h2 class="text-3xl md:text-6xl text-[#504A33] font-modern opacity-0" data-aos="zoom-in-up">Recipes</h2>
      <div class="w-full flex flex-col md:flex-row items-center md:justify-between text-[#504A33] mt-10 md:mt-28 gap-12">
        <div class="w-max flex flex-col items-center order-2 md:order-none gap-4">
          <h3 class="text-8xl md:text-[200px] font-modern opacity-0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">+50</h3>
          <span class="text-sm text-center md:text-left md:text-lg opacity-0" data-aos="zoom-in" data-aos-duration="500">
            New recipes and whole new food scene <br>
            are coming to your neighborhood.
          </span>
        </div>
        <div class="relative flex order-1 md:order-none">
          <div class="opacity-0 z-0" data-aos="zoom-in" data-aos-duration="1000">
            <div class="border border-[#504A33] w-[200px] md:w-[350px] xl:w-[400px] h-[290px] md:h-[500px] xl:h-[570px]  rotate-6" ></div>
          </div>
          <div class="absolute w-fit h-fit opacity-0 z-[1]" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
            <img src="~/assets/images/food2.png" alt="food 2" class="w-[200px] md:w-[350px] xl:w-[400px] h-[290px] md:h-[500px] xl:h-[570px] border-4 border-white  -rotate-3">
          </div>
          <div class="absolute w-fit h-fit opacity-0 z-[2]" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
            <img src="~/assets/images/pasta.png" alt="pasta" class="w-[200px] md:w-[350px] xl:w-[400px] h-[290px] md:h-[500px] xl:h-[570px] border-4 border-white  -rotate-12">
          </div>
        </div>
        <div class="w-max flex flex-col items-center md:items-start gap-8 order-3 md:order-none">
          <span class="text-2xl md:text-3xl text-center md:text-left font-modern opacity-0" data-aos="zoom-in"  data-aos-duration="500">
            Discover the Golden Spice: <br>
            A guide to cooking <br class="hidden md:block">
            with saffron
          </span>
          <button class="md:text-2xl border border-[#453F29] hover:bg-[#453F29] text-[#504A33] py-3 md:py-5 px-9 hover:text-white w-max transition-colors duration-300 opacity-0" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500">
            View All
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="py-[100px] bg-[#FCF6E7]">
    <div class="container mx-auto overflow-hidden">
      <h2 class="text-4xl md:text-6xl w-max text-[#504A33] font-modern capitalize opacity-0" data-aos="zoom-in-up" data-aos-duration="500">most popular articles</h2>
      <div class="relative">
        <div class="mt-20 flex flex-col md:flex-row gap-10 md:gap-20 overflow-x-auto px-5"
             style="scrollbar-width: none;">
          <div class="flex flex-col gap-6 shrink-0 opacity-0" data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
            <img src="~/assets/images/article1.png" alt="article1" class="w-full max-w-[500px] max-h-[500px] aspect-square">
            <span class="text-2xl md:text-3xl text-[#504A33] font-modern">
            Roasted Chicken, Corn, and <br>
            Saffron Soup
          </span>
          </div>
          <div class="flex flex-col gap-6 shrink-0 opacity-0" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
            <img src="~/assets/images/article2.png" alt="article2" class="w-full max-w-[500px] max-h-[500px] aspect-square">
            <span class="text-2xl md:text-3xl text-[#504A33] font-modern">
            Roasted Chicken, Corn, and <br>
            Saffron Soup
          </span>
          </div>
          <div class="flex flex-col gap-6 shrink-0 opacity-0" data-aos="fade-left" data-aos-delay="700" data-aos-duration="500">
            <img src="~/assets/images/article3.png" alt="article3" class="w-full max-w-[500px] max-h-[500px] aspect-square">
            <span class="text-2xl md:text-3xl text-[#504A33] font-modern">
            Roasted Chicken, Corn, and <br>
            Saffron Soup
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-10 md:py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-10">
      <div class="hidden md:flex w-1/2 justify-center">
        <div class="relative w-max grid place-items-center">
          <img src="~/assets/images/saffron.png" alt="saffron" class="w-[500px] opacity-0" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
          <div class="absolute inset-0 -z-[1] border border-[#504A33] !rotate-6 opacity-0" data-aos="fade-up" data-aos-duration="500"></div>
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-16">
        <h2 class="text-4xl md:text-7xl text-[#504A33] font-modern capitalize text-center md:text-left opacity-0" data-aos="fade-down" data-aos-duration="500">
          subscribe newsletter
          & get latest news
        </h2>
        <div class="w-3/4 mx-auto md:hidden relative grid place-items-center" >
          <img src="~/assets/images/saffron.png" alt="saffron" class="w-[500px]">
          <div class="absolute inset-0 -z-[1] border border-[#504A33] rotate-6"></div>
        </div>
        <form @submit.prevent="subscribe" class="flex w-full md:w-2/3 flex-col gap-4 md:gap-6 font-inter ">
          <BaseGInput label="Name" type="text" name="fullName" v-model="newsletterCommand.fullName" :required="false" placeholder="Your Name Here" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"/>
          <BaseGInput label="Email" type="email" name="email" v-model="newsletterCommand.email" required placeholder="Your Email Here" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"/>
          <BaseGButton type="submit">Subscribe</BaseGButton>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import type {SubscribeNewsletterCommand} from "~/models/newsletter/subscribeCommand";
import {SubscribeNewsletter} from "~/services/newsletter.service";

const imagesContainer = ref(null);
const imagesCount = ref(0);
const currentImage = ref(0);

onMounted(()=>{
  setInterval(moveImages,5000);
  imagesCount.value = imagesContainer.value?.childElementCount;
})

const moveImages = ()=>{
  currentImage.value++;
  if(currentImage.value == (imagesCount.value))
    currentImage.value = 0;
}

const newsletterCommand:SubscribeNewsletterCommand = reactive({
  fullName:'',
  email:''
})

const toast = useToast();
const subscribe = async ()=>{
  const result = await SubscribeNewsletter(newsletterCommand);
  if(result.isSuccess){
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }
}

</script>