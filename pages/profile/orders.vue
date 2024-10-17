<template>
  <div>
    <Head>
      <Title>My Orders | Premium Saffron</Title>
    </Head>

  </div>
</template>

<script setup lang="ts">
import type {Order, OrderFilterParams} from "~/models/cart/orderData";
import {GetUserOrders} from "~/services/cart.service";

definePageMeta({
  layout: 'profile',
  title: 'Orders'
})

const loading = ref(false);

const orders:Ref<Order[]> = ref([]);
const pageId = ref(1);

const ordersFilterParams:OrderFilterParams = reactive({
  take:10,
  pageId:pageId.value,
  search:undefined,
  orderStatus:undefined
})

onMounted(async ()=>{
  await getData();
})

const toast = useToast();
const getData = async () => {
  loading.value = true;

  const result = await GetUserOrders(ordersFilterParams);
  if(result.isSuccess){
    orders.value = result.data?.data! ?? [];
  }else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>
