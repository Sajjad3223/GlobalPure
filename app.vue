<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style>
body{
  @apply w-[100vw] overflow-x-hidden bg-[#FFFDF8];
}
*{
  scrollbar-width: thin;
  color: #504A33;
}
.container{
  @apply px-5 md:px-0;
}
</style>