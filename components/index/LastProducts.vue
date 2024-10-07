<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-10" v-if="!isLoading">
    <GCard v-for="(p,i) in products" :key="p.id" :product="p" data-aos="fade-left" :data-aos-delay="200 * i" />
  </div>
</template>

<script setup lang="ts">
import {type ProductFilterData, type ProductFilterParams, SortBy, SortType} from "~/models/products/productData";
import {GetAllProducts} from "~/services/product.service";

const pageId = ref(1);

const filterParams:ProductFilterParams = reactive({
  pageId:pageId.value,
  take:4,
  search:undefined,
  maxPrice:undefined,
  minPrice:undefined,
  sortBy:SortBy.Date,
  sortType:SortType.Descending
});

const isLoading = ref(false);
const products:Ref<ProductFilterData[]> = ref([]);

onMounted( async ()=>{
  await getData();
})

const getData = async ()=>{
  isLoading.value = true;

  const result = await GetAllProducts(filterParams);
  if(result.isSuccess){
    products.value = result.data?.data ?? [];
  }

  isLoading.value = false;
}
</script>