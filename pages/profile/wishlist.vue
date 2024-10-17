<template>
  <div>
    <Head>
      <Title>Wishlist | Premium Saffron</Title>
    </Head>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="pr-4 border-r pb-4 border-b h-full flex flex-col gap-4" v-for="w in wishlist" :key="w.id">
        <NuxtLink :to="`/product/${w.wishlistProduct.slug}`">
          <img :src="`${SITE_URL}/product/images/${w.wishlistProduct.image}`" :alt="w.title" class="mx-auto h-[200px] object-contain">
        </NuxtLink>
        <NuxtLink :to="`/product/${w.wishlistProduct.slug}`">{{w.wishlistProduct.title}}</NuxtLink>
        <div class="flex items-center gap-2 mt-auto">
          <GButton @click="cartStore.addToCart(w.wishlistProduct.id,w.wishlistProduct.slug,1)">Add To Cart</GButton>
          <GButton outline @click="removeWishlist(w.id)">Delete</GButton >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GetWishlist,
  ToggleWishlist
} from "~/services/user.service";
import type {WishlistDto} from "~/models/users/userDto";
import {SITE_URL} from "~/utilities/api.config";
import GButton from "~/components/base/GButton.vue";

definePageMeta({
  layout: 'profile',
  title: 'My Wishlist'
})

const cartStore = useCartStore();
const loading = ref(false);

const {data,pending} = await useAsyncData('GetUserData',()=>GetWishlist());
if(!data.value?.isSuccess)
{
  if(process.server)
    throw createError({statusCode:404});
}

const wishlist:Ref<WishlistDto[]> = ref(data.value?.data!);

const toast = useToast();
const removeWishlist = async (id:number) => {
  loading.value = true;

  const result = await ToggleWishlist(id);
  if(result.isSuccess){
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>
