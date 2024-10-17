<template>
  <div>
    <Head>
      <Title>My Orders | Premium Saffron</Title>
    </Head>
    <div class="flex flex-col gap-4">
      <div class="hidden md:flex flex-col">
        <div class="grid grid-cols-6 gap-4 text-sm opacity-70 p-3 bg-primary/10 text-primary border-b border-primary/30">
          <span class="col-span-2">FullName</span>
          <span>ItemsCount</span>
          <span>Status</span>
          <span>FinallyDate</span>
          <span>Actions</span>
        </div>
        <div class="grid grid-cols-6 gap-4 px-3 items-center py-4 border-b last:border-none" v-for="order in orders" :key="order.id">
          <div class="flex items-center gap-2 col-span-2">
            <div class="relative flex items-center justify-center">
              <img :src="`${SITE_URL}/product/images/${order.orderItems[0].productData.image}`" alt="" class="w-16 aspect-square rounded-full border border-primary/30 relative z-[3]">
              <img :src="`${SITE_URL}/product/images/${order.orderItems[1].productData.image}`" alt="" class="w-14 aspect-square rounded-full border border-primary/20 absolute -translate-x-4 z-[2]" v-if="order.orderItems.length > 1">
              <img :src="`${SITE_URL}/product/images/${order.orderItems[2].productData.image}`" alt="" class="w-12 aspect-square rounded-full border border-primary/10 absolute -translate-x-8 z-[1]" v-if="order.orderItems.length > 2">
            </div>
            <div class="flex flex-col gap-1">
              <span>{{order.fullName}}</span>
              <span class="text-sm opacity-70">Order #{{order.id}}</span>
            </div>
          </div>
          <span>{{order.orderItems.length}}</span>
          <span class="text-xs bg-primary/10 px-3 py-1 rounded-md w-max" v-if="order.status != OrderStatus.Paid">{{OrderStatus[order.status]}}</span>
          <span class="text-xs bg-primary/80 text-white px-3 py-1 rounded-md w-max" v-else>{{OrderStatus[order.status]}}</span>
          <span>{{order.finallyDate != null ? new Date(order.finallyDate).toLocaleDateString() : 'Not Paid'}}</span>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/cart/checkout" class="text-sm bg-primary/10 px-3 py-1 rounded-md w-max" v-if="order.status == OrderStatus.Pending">Pay Now</NuxtLink>
            <button class="text-left text-sm" @click="selectedOrder = order">Show Details</button>
          </div>
        </div>

      </div>
      <div class="md:hidden flex flex-col gap-4">
        <div class="flex flex-col rounded-2xl gap-2 bg-white p-4 border border-primary/20" v-for="order in orders" :key="order.id">
          <div class="w-full flex items-center">
            <img :src="`${SITE_URL}/product/images/${order.orderItems[0].productData.image}`" class="w-1/2">
            <div class="flex flex-col items-center gap-2">
              <span>Order #{{order.id}}</span>
              <span>{{order.fullName}}</span>
              <span class="text-xs bg-primary/10 px-3 py-1 rounded-md w-max" v-if="order.status != OrderStatus.Paid">{{OrderStatus[order.status]}}</span>
              <span class="text-xs bg-primary/80 text-white px-3 py-1 rounded-md w-max" v-else>{{OrderStatus[order.status]}}</span>
              <span>{{order.finallyDate != null ? new Date(order.finallyDate).toLocaleDateString() : 'Not Paid'}}</span>
            </div>
          </div>
          <NuxtLink to="/cart/checkout" v-if="order.status == OrderStatus.Pending" class="bg-primary/10 rounded-md py-2 text-center">
            Pay Now
          </NuxtLink>
          <GButton outline @click="selectedOrder = order" class="rounded-xl">
            Show Details
          </GButton>
        </div>
      </div>
    </div>
    <Transition name="order">
      <div v-if="selectedOrder" @click.self="selectedOrder = null" class="fixed inset-0 bg-black/10 backdrop-blur flex items-center justify-center z-50">
        <div class="bg-white md:rounded-xl w-full md:w-4/5 h-full md:h-4/5 flex flex-col p-5 md:p-10 gap-4">
          <div class="flex items-center justify-between">
            <h4 class="font-modern text-4xl">Order #{{selectedOrder.id}}</h4>
            <button @click="selectedOrder = null">
              <svg class="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1431 0.857422L0.857422 23.1431" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.857422 0.857422L23.1431 23.1431" stroke="#504A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <hr>
          <div class="flex flex-col md:grid grid-cols-3 gap-5 overflow-y-auto">
            <div class="h-max flex flex-col md:grid col-span-2 grid-cols-2 gap-4">
              <div class="flex items-center gap-4" v-for="i in selectedOrder.orderItems" :key="i.id">
                <img :src="`${SITE_URL}/product/images/${i.productData.image}`" alt="" class="w-1/4 border border-primary/30 rounded-xl">
                <div class="flex flex-col h-full justify-between py-2">
                  <span>{{i.productData.title}}</span>
                  <span>Count: {{i.quantity}}</span>
                </div>
              </div>
            </div>
            <hr class="md:hidden">
            <div class="grid grid-cols-2 gap-4 pl-4 border-l">
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">receiver name</span>
                <span>{{selectedOrder.address.fullName}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">phone number</span>
                <span>{{selectedOrder.address.phoneNumber}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">country</span>
                <span>{{selectedOrder.address.country}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">city</span>
                <span>{{selectedOrder.address.city}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">company</span>
                <span>{{selectedOrder.address.company}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">apartment</span>
                <span>{{selectedOrder.address.apartment}}</span>
              </div>
              <div class="flex flex-col col-span-full">
                <span class="text-xs font-semibold opacity-40 uppercase">address</span>
                <span>{{selectedOrder.address.completeAddress}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">postal code</span>
                <span>{{selectedOrder.address.postalCode}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">order status</span>
                <span class="px-4 py-2 text-sm bg-primary/10 rounded-md w-max">{{OrderStatus[selectedOrder.status]}}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold opacity-40 uppercase">finally date</span>
                <span :class="[{'opacity-60':selectedOrder.finallyDate == null}]">{{selectedOrder.finallyDate != null ? new Date(selectedOrder.finallyDate).toLocaleDateString() : 'Not Paid'}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import {type Order, type OrderFilterParams, OrderStatus} from "~/models/cart/orderData";
import {GetUserOrders} from "~/services/cart.service";
import {SITE_URL} from "~/utilities/api.config";
import GButton from "~/components/base/GButton.vue";

definePageMeta({
  layout: 'profile',
  title: 'Orders'
})

const loading = ref(false);

const orders:Ref<Order[]> = ref([]);
const pageId = ref(1);
const selectedOrder:Ref<Order> | null = ref(null);

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
    orders.value = result.data?.data!.filter(o=>o.orderItems.length > 0) ?? [];
  }else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>

<style>
.order-enter-active,
.order-leave-active{
  @apply transition-all duration-300;
}

.order-enter-from,
.order-leave-to{
  @apply scale-50 opacity-0;
}
</style>