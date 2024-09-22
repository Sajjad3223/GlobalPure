<template>
  <div class="py-[50px] md:py-[150px]">
    <Head>
      <Title>
        Contact Us | Get in Touch with Global Pure
      </Title>
    </Head>

    <div class="md:container mx-auto flex flex-col-reverse md:flex-row gap-5">
      <div class="container mx-auto flex-1 flex flex-col text-[#504A33]">
        <div class="hidden md:flex w-max relative flex-col">
          <h2 class="text-7xl font-modern" data-aos="fade-right">Contact Us</h2>
          <span class="text-2xl mt-5" data-aos="fade-down" data-aos-delay="200">Our team will be glad to help you!</span>
          <svg class="absolute top-1/4 -right-5 rotate-12" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
          </svg>
          <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="absolute -top-[70%] -right-32 w-[150px] move"/>
        </div>
        <div class="flex flex-col items-center md:items-start gap-2 mt-12 md:mt-28">
          <div class="flex items-center gap-4">
            <svg data-aos="fade-left" data-aos-delay="200"
                class="hidden md:block" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7142 9.57171C20.7142 14.7146 12.9999 20.7146 12.9999 20.7146C12.9999 20.7146 5.28564 14.7146 5.28564 9.57171C5.28564 5.36999 8.79822 1.85742 12.9999 1.85742C17.2016 1.85742 20.7142 5.36999 20.7142 9.57171Z" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.0001 12.1429C14.4203 12.1429 15.5716 10.9916 15.5716 9.57143C15.5716 8.15126 14.4203 7 13.0001 7C11.58 7 10.4287 8.15126 10.4287 9.57143C10.4287 10.9916 11.58 12.1429 13.0001 12.1429Z" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.9897 18.1436H21.5715L24.1429 24.1436H1.85718L4.42861 18.1436H6.01038" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 class="text-3xl md:text-5xl font-modern" data-aos="fade-right">Location</h3>
          </div>
          <div class="flex flex-col gap-1 text-sm md:text-2xl items-center md:items-start md:ml-12 mt-4">
            <span data-aos="fade-down" data-aos-delay="400">
              Unit 1416, wing 1, level 4, building 1, street 504, zone 49, business & innovation Park, ras bufontas, free zone
            </span>
            <span data-aos="fade-down" data-aos-delay="400">
              Doha,Qatar
            </span>
            <span data-aos="fade-down" data-aos-delay="600">
              Tel: +97433817777
            </span>
            <span data-aos="fade-down" data-aos-delay="800">info@GlobalPureTrading.com</span>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-start gap-2 mt-12 md:mt-16">
          <div class="flex items-center gap-4">
            <svg data-aos="fade-left" data-aos-delay="200"
                class="hidden md:block" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 24.1431C19.1541 24.1431 24.1429 19.1544 24.1429 13.0003C24.1429 6.84625 19.1541 1.85742 13 1.85742C6.84601 1.85742 1.85718 6.84625 1.85718 13.0003C1.85718 19.1544 6.84601 24.1431 13 24.1431Z" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 8.71484V13.0006L17.3543 18.0748" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 class="text-3xl md:text-5xl font-modern" data-aos="fade-right">Opening Hours</h3>
          </div>
          <div class="flex flex-col gap-1 text-sm md:text-2xl items-center md:items-start md:ml-12 mt-4">
            <span data-aos="fade-down" data-aos-delay="200">Sunday 8:00 AM – 2:00 PM</span>
          </div>
        </div>
      </div>
      <div class="w-full container mx-auto md:w-1/2 bg-[#FCF6E7] py-5 px-8 md:!p-20" data-aos="fade-left">
        <form action="" class="flex flex-col gap-5">
          <base-g-select data-aos="fade-down" data-aos-delay="200" label="Subject" name="subject" placeholder="Customer Services" required v-model="service" :options="serviceOptions"/>
          <base-g-input data-aos="fade-left" data-aos-delay="400" label="Email" name="email" placeholder="Your@Email.com" type="email" required v-model="email" />
          <base-g-file data-aos="fade-right" data-aos-delay="600" label="Attach File" name="attach" v-model="attachFile" />
          <base-g-input data-aos="zoom-in" data-aos-delay="300" label="Message" name="message" placeholder="How Can We Help?" required v-model="message" multiline/>
          <button data-aos="zoom-in" data-aos-delay="200" class="bg-[#504A33] w-full py-4 flex items-center justify-center">
            <span class="text-white">Send</span>
          </button>
        </form>
      </div>
      <div class="md:hidden flex relative flex-col items-center text-[#504A33]">
        <h2 class="text-4xl font-modern" data-aos="fade-right" >Contact Us</h2>
        <span class="text-sm mt-5" data-aos="fade-down" data-aos-delay="300">Our team will be glad to help you!</span>
        <svg class="absolute top-[15%] right-[15%] w-10" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
        </svg>
        <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="absolute -top-1/2 right-[5%] w-[60px] move"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const email = ref(null);
const message = ref(null);
const service = ref(null);
const attachFile = ref(null);
const serviceOptions = [
  {title:'Buy Issue',value:1},
  {title:'Get Information',value:2},
  {title:'Bug Report',value:3},
]

</script>

<style>
.move{
  transform-origin: 20% 60%;
  animation: moveInSpace 3s ease-in-out infinite;
}

@keyframes moveInSpace {
  0%{
    transform: translate(0px,-5px) rotate(10deg);
  }
  50%{
    transform: translate(0px,5px) rotate(-10deg);
  }
  100%{
    transform: translate(0px,-5px) rotate(10deg);
  }
}
</style>