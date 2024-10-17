<script setup lang="ts">
import {type TetherPaymentDto, TetherPaymentStatus} from "~/models/cart/orderData";
  import {GetPaymentWithCode} from "~/services/cart.service";

  const request:Ref<TetherPaymentDto | null> = ref(null)
  const code = ref('');

  const loading = ref(false);
  const getPayment = async ()=>{
    loading.value = true;
    const result = await GetPaymentWithCode(code.value);
    if(result.isSuccess){
      request.value = result.data;
    }
    loading.value = false;
  }
</script>

<template>
  <div class="container mx-auto my-20">
    <h2 class="text-4xl mb-10">Track Your Payment</h2>
    <div class="grid grid-cols-2 gap-5">
      <form @submit.prevent="getPayment" class="flex flex-col gap-4">
        <BaseGInput label="Tracking Code" name="code" placeholder="Enter Your Code: e.g. 012345" v-model="code"/>
        <BaseGButton type="submit">
          Track Payment
        </BaseGButton>
      </form>
      <div class="flex flex-col p-4 bg-primary/10 gap-5" v-if="request != null">
        <div class="flex items-center justify-between">
          <span class="opacity-70">Order Number</span>
          <strong>{{request.orderId}}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="opacity-70">Tracking Code</span>
          <strong>{{request.trackingCode}}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="opacity-70">Tx ID</span>
          <strong>{{request.txID}}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="opacity-70">Status</span>
          <strong class="px-4 py-2 bg-primary/10 rounded-md">{{TetherPaymentStatus[request.status]}}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span class="opacity-70">Modified At:</span>
          <strong>{{request.modifiedAt != null ? new Date(request.modifiedAt).toDateString() + ' - ' + new Date(request.modifiedAt).toLocaleTimeString() : 'Not Modified'}}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>