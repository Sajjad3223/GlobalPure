<template>
<div class="container mx-auto py-20">
  <Head>
    <Title>Our Story | Premium Saffron</Title>
  </Head>
  <div class="flex w-max mx-auto relative flex-col items-center text-[#504A33]">
    <div class="flex flex-col items-center w-max gap-4">
      <h2 class="text-4xl md:text-7xl font-modern" data-aos="fade-up">Our Story</h2>
      <span class="text-sm md:text-2xl" data-aos="fade-down" data-aos-delay="200">Discover the passion behind Global Pure</span>
    </div>
    <div class="absolute right-0 top-1/4">
      <svg class="absolute right-0 rotate-12" width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.9382 1.31903C30.1076 45.3597 -27.9309 -0.954034 18.06 1.40905C64.0509 3.77213 40.9978 45.2283 2.28287 53.8513" stroke="#493E17" stroke-dasharray="8 8"/>
      </svg>
    </div>
    <img src="~/assets/images/saffron-flower.png" alt="saffron flower" class="absolute scale-50 md:scale-75 -right-[27%] md:-right-[25%] -top-[110%] md:-top-[70%] w-[150px] move"/>
  </div>

  <hr class="border border-[#453F29] opacity-0 md:opacity-20 my-9 md:my-16">

  <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
    <div class="w-full md:w-1/3 2xl:w-1/2">
      <div class="relative mx-auto 2xl:w-2/3">
        <img src="~/assets/images/about-us.png" alt="about us" data-aos="fade-right" data-aos-delay="400"
             class="w-full mx-auto aspect-square object-cover object-right">
        <div class="absolute inset-0 -z-[1]" data-aos="zoom-in">
          <div class="border border-[#453F29] -z-[1] absolute inset-0 rotate-6"></div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <p class="text-sm md:text-2xl text-justify" data-aos="fade-left" data-aos-delay="800">
        At Global Pure, we're committed to providing the finest saffron products to our customers while upholding the highest ethical standards. We work directly with farmers and suppliers around the world to ensure that our saffron is sustainably sourced and of the highest quality. Our team of experts is dedicated to the craft of saffron, and we're proud to offer our customers a range of products that reflects our commitment to excellence. As a company, we believe in transparency, honesty, and integrity, and we strive to build long-lasting relationships with our customers based on trust and mutual respect. We're constantly exploring new ways to innovate and improve, and we look forward to sharing our passion for saffron with you.
      </p>
    </div>
  </div>

  <div class="flex flex-col items-center gap-16 my-10 md:my-20">
    <h3 class="font-modern text-4xl md:text-7xl" data-aos="fade-up">Our Values</h3>
    <div class="grid md:grid-cols-3 gap-14">
      <div class="bg-[#FCF6E7] relative md:aspect-square p-10 flex flex-col items-center gap-9" data-aos="fade-left" data-aos-delay="200">
        <h4 class="text-3xl md:text-4xl font-modern" data-aos="fade-up" data-aos-delay="400">Quality</h4>
        <p class="text-xs md:text-lg text-center" data-aos="fade-down" data-aos-delay="600">
          At Global Pure, we're committed to providing our customers with the highest-quality saffron products. We carefully select each strand of saffron to ensure that it meets our rigorous standards for color, taste, and aroma.
        </p>
        <img src="~/assets/images/aboutus-quality.png" alt="quality" class="absolute right-0 bottom-0 w-1/3" data-aos="fade-left" data-aos-delay="800">
      </div>
      <div class="bg-[#FCF6E7] relative md:aspect-square p-10 flex flex-col items-center gap-9" data-aos="fade-left" data-aos-delay="400">
        <h4 class="text-3xl md:text-4xl font-modern" data-aos="fade-up" data-aos-delay="600">Sustainability</h4>
        <p class="text-xs md:text-lg text-center" data-aos="fade-down" data-aos-delay="800">
          We believe in responsible sourcing and are committed to supporting farmers and suppliers who use sustainable and ethical farming practices. Our saffron is sourced directly from farmers and suppliers around the world, and we work hard to build long-lasting relationships based on trust and respect.
        </p>
        <img src="~/assets/images/aboutus-sustainability.png" alt="sustainability" class="absolute right-0 bottom-0 w-1/3" data-aos="fade-left" data-aos-delay="1000">
      </div>
      <div class="bg-[#FCF6E7] relative md:aspect-square p-10 flex flex-col items-center gap-9" data-aos="fade-left" data-aos-delay="600">
        <h4 class="text-3xl md:text-4xl font-modern" data-aos="fade-up" data-aos-delay="800">Innovation</h4>
        <p class="text-xs md:text-lg text-center" data-aos="fade-down" data-aos-delay="1000">
          We're passionate about saffron and are constantly exploring new ways to innovate and improve our products. Our team of experts is dedicated to the craft of saffron and is always searching for new and exciting ways to incorporate this exotic spice into our customers' lives.
        </p>
        <img src="~/assets/images/aboutus-innovation.png" alt="innovation" class="absolute right-0 bottom-0 w-1/3" data-aos="fade-left" data-aos-delay="1200">
      </div>
    </div>
  </div>

</div>
</template>
<script setup lang="ts">

</script>