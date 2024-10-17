<script setup lang="ts">
import {SendTetherPaymentRequest} from "~/services/cart.service";
import {PriceUnit} from "~/models/commonTypes";

const cartStore = useCartStore();

const walletId = 'TJTFMojRMjUuCLsPQh2PdPeCYDiJkSairz';
const copied = ref(false);

const copyWalletId = async ()=>{
  await navigator.clipboard.writeText(walletId)
  copied.value = true;
}

const txId = ref('');
const loading = ref(false);
const trackingCode = ref('');

const totalPrice = ref('');
const discount = ref('');
const finalPrice = ref('');

onMounted(()=>{
  const tempTotalPrice = cartStore.getTotalPriceInUnit(PriceUnit.USDT);
  totalPrice.value = tempTotalPrice.toFixed(2);
  const discountAmount = (cartStore.getTotalPriceInUnit(PriceUnit.USDT) * (cartStore.PendingOrder!.discount.amount  / 100));
  discount.value = discountAmount.toFixed(2);
  finalPrice.value = (tempTotalPrice - discountAmount).toFixed(2);
})

const sendRequest = async ()=>{
  loading.value = true;

  const result = await SendTetherPaymentRequest({
    txId:txId.value,
    orderId: cartStore.PendingOrder!.id
  });
  if(result.isSuccess){
    trackingCode.value = result.data!;
  }

  loading.value = false;
}

</script>

<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-2 gap-5">
      <div class="flex flex-col items-center gap-4">
        <div class="grid place-items-center">
          <svg width="200" height="200">
            <defs>
              <clipPath id="clip-path-dot-color">
                <path d="M 1 49v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,4,52)"></path>
                <rect x="1" y="55" width="6" height="6" transform="rotate(0,4,58)"></rect>
                <rect x="1" y="61" width="6" height="6" transform="rotate(0,4,64)"></rect>
                <path d="M 1 67v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,4,70)"></path>
                <circle cx="4" cy="82" r="3" transform="rotate(0,4,82)"></circle>
                <path d="M 1 91v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,4,94)"></path>
                <path d="M 1 97v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,4,100)"></path>
                <circle cx="4" cy="118" r="3" transform="rotate(0,4,118)"></circle>
                <path d="M 1 133v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,4,136)"></path>
                <path d="M 1 139v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,4,142)"></path>
                <path d="M 7 49v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,10,52)"></path>
                <rect x="7" y="55" width="6" height="6" transform="rotate(0,10,58)"></rect>
                <rect x="7" y="61" width="6" height="6" transform="rotate(0,10,64)"></rect>
                <rect x="7" y="67" width="6" height="6" transform="rotate(0,10,70)"></rect>
                <path d="M 7 73v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,10,76)"></path>
                <rect x="7" y="97" width="6" height="6" transform="rotate(0,10,100)"></rect>
                <path d="M 7 103v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,10,106)"></path>
                <path d="M 7 127v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,10,130)"></path>
                <path d="M 7 133v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,10,136)"></path>
                <path d="M 13 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,16,58)"></path>
                <rect x="13" y="73" width="6" height="6" transform="rotate(0,16,76)"></rect>
                <rect x="13" y="79" width="6" height="6" transform="rotate(0,16,82)"></rect>
                <rect x="13" y="85" width="6" height="6" transform="rotate(0,16,88)"></rect>
                <rect x="13" y="91" width="6" height="6" transform="rotate(0,16,94)"></rect>
                <rect x="13" y="97" width="6" height="6" transform="rotate(0,16,100)"></rect>
                <rect x="13" y="103" width="6" height="6" transform="rotate(0,16,106)"></rect>
                <path d="M 13 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,16,112)"></path>
                <circle cx="16" cy="124" r="3" transform="rotate(0,16,124)"></circle>
                <path d="M 13 139v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,16,142)"></path>
                <path d="M 13 145v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,16,148)"></path>
                <path d="M 19 73v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,22,76)"></path>
                <path d="M 19 79v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,22,82)"></path>
                <path d="M 25 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,28,58)"></path>
                <rect x="25" y="61" width="6" height="6" transform="rotate(0,28,64)"></rect>
                <path d="M 25 67v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,28,70)"></path>
                <circle cx="28" cy="88" r="3" transform="rotate(0,28,88)"></circle>
                <path d="M 25 97v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,28,100)"></path>
                <path d="M 25 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,28,112)"></path>
                <circle cx="28" cy="148" r="3" transform="rotate(0,28,148)"></circle>
                <path d="M 31 67v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,34,70)"></path>
                <path d="M 31 73v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,34,76)"></path>
                <rect x="31" y="97" width="6" height="6" transform="rotate(0,34,100)"></rect>
                <rect x="31" y="109" width="6" height="6" transform="rotate(0,34,112)"></rect>
                <path d="M 31 121v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,34,124)"></path>
                <path d="M 31 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,34,136)"></path>
                <circle cx="40" cy="52" r="3" transform="rotate(0,40,52)"></circle>
                <path d="M 37 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,40,64)"></path>
                <path d="M 37 73v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,40,76)"></path>
                <circle cx="40" cy="88" r="3" transform="rotate(0,40,88)"></circle>
                <rect x="37" y="97" width="6" height="6" transform="rotate(0,40,100)"></rect>
                <rect x="37" y="109" width="6" height="6" transform="rotate(0,40,112)"></rect>
                <path d="M 37 121v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,40,124)"></path>
                <path d="M 37 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,40,136)"></path>
                <path d="M 37 145v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,40,148)"></path>
                <path d="M 43 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,46,58)"></path>
                <path d="M 43 61v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,46,64)"></path>
                <circle cx="46" cy="82" r="3" transform="rotate(0,46,82)"></circle>
                <path d="M 43 97v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,46,100)"></path>
                <path d="M 43 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,46,112)"></path>
                <rect x="43" y="145" width="6" height="6" transform="rotate(0,46,148)"></rect>
                <path d="M 49 7v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,52,10)"></path>
                <path d="M 49 37v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,52,40)"></path>
                <rect x="49" y="43" width="6" height="6" transform="rotate(0,52,46)"></rect>
                <rect x="49" y="49" width="6" height="6" transform="rotate(0,52,52)"></rect>
                <path d="M 49 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,52,58)"></path>
                <path d="M 49 85v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,52,88)"></path>
                <path d="M 49 91v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,52,94)"></path>
                <circle cx="52" cy="106" r="3" transform="rotate(0,52,106)"></circle>
                <circle cx="52" cy="136" r="3" transform="rotate(0,52,136)"></circle>
                <path d="M 49 145v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,52,148)"></path>
                <path d="M 49 151v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,52,154)"></path>
                <path d="M 49 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,52,190)"></path>
                <path d="M 49 193v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,52,196)"></path>
                <path d="M 55 7v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,58,10)"></path>
                <path d="M 55 25v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,58,28)"></path>
                <path d="M 55 31v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,58,34)"></path>
                <path d="M 55 43v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,58,46)"></path>
                <path d="M 55 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,58,64)"></path>
                <rect x="55" y="67" width="6" height="6" transform="rotate(0,58,70)"></rect>
                <rect x="55" y="73" width="6" height="6" transform="rotate(0,58,76)"></rect>
                <rect x="55" y="79" width="6" height="6" transform="rotate(0,58,82)"></rect>
                <path d="M 55 85v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,58,88)"></path>
                <path d="M 55 109v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,58,112)"></path>
                <path d="M 55 115v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,58,118)"></path>
                <path d="M 55 151v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,58,154)"></path>
                <rect x="55" y="157" width="6" height="6" transform="rotate(0,58,160)"></rect>
                <rect x="55" y="163" width="6" height="6" transform="rotate(0,58,166)"></rect>
                <path d="M 55 169v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,58,172)"></path>
                <path d="M 55 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,58,196)"></path>
                <path d="M 61 1v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,64,4)"></path>
                <circle cx="64" cy="16" r="3" transform="rotate(0,64,16)"></circle>
                <rect x="61" y="31" width="6" height="6" transform="rotate(0,64,34)"></rect>
                <path d="M 61 37v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,64,40)"></path>
                <path d="M 61 49v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,64,52)"></path>
                <path d="M 61 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,64,58)"></path>
                <path d="M 61 79v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,64,82)"></path>
                <circle cx="64" cy="100" r="3" transform="rotate(0,64,100)"></circle>
                <path d="M 61 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,64,112)"></path>
                <circle cx="64" cy="130" r="3" transform="rotate(0,64,130)"></circle>
                <path d="M 61 163v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,64,166)"></path>
                <rect x="61" y="169" width="6" height="6" transform="rotate(0,64,172)"></rect>
                <path d="M 61 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,64,190)"></path>
                <rect x="67" y="1" width="6" height="6" transform="rotate(0,70,4)"></rect>
                <circle cx="70" cy="22" r="3" transform="rotate(0,70,22)"></circle>
                <rect x="67" y="31" width="6" height="6" transform="rotate(0,70,34)"></rect>
                <rect x="67" y="55" width="6" height="6" transform="rotate(0,70,58)"></rect>
                <circle cx="70" cy="70" r="3" transform="rotate(0,70,70)"></circle>
                <path d="M 67 85v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,70,88)"></path>
                <path d="M 67 91v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,70,94)"></path>
                <path d="M 67 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,70,136)"></path>
                <circle cx="70" cy="154" r="3" transform="rotate(0,70,154)"></circle>
                <path d="M 67 169v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,70,172)"></path>
                <rect x="67" y="175" width="6" height="6" transform="rotate(0,70,178)"></rect>
                <rect x="67" y="181" width="6" height="6" transform="rotate(0,70,184)"></rect>
                <rect x="67" y="187" width="6" height="6" transform="rotate(0,70,190)"></rect>
                <path d="M 73 1v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,76,4)"></path>
                <rect x="73" y="7" width="6" height="6" transform="rotate(0,76,10)"></rect>
                <path d="M 73 13v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,76,16)"></path>
                <rect x="73" y="31" width="6" height="6" transform="rotate(0,76,34)"></rect>
                <rect x="73" y="37" width="6" height="6" transform="rotate(0,76,40)"></rect>
                <path d="M 73 43v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,76,46)"></path>
                <rect x="73" y="55" width="6" height="6" transform="rotate(0,76,58)"></rect>
                <path d="M 73 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,76,64)"></path>
                <rect x="73" y="133" width="6" height="6" transform="rotate(0,76,136)"></rect>
                <rect x="73" y="139" width="6" height="6" transform="rotate(0,76,142)"></rect>
                <path d="M 73 145v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,76,148)"></path>
                <path d="M 73 157v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,76,160)"></path>
                <path d="M 73 163v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,76,166)"></path>
                <rect x="73" y="181" width="6" height="6" transform="rotate(0,76,184)"></rect>
                <path d="M 73 187v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,76,190)"></path>
                <path d="M 79 7v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,82,10)"></path>
                <path d="M 79 13v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,82,16)"></path>
                <path d="M 79 25v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,82,28)"></path>
                <path d="M 79 31v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,82,34)"></path>
                <rect x="79" y="43" width="6" height="6" transform="rotate(0,82,46)"></rect>
                <rect x="79" y="55" width="6" height="6" transform="rotate(0,82,58)"></rect>
                <path d="M 79 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,82,136)"></path>
                <path d="M 79 157v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,82,160)"></path>
                <path d="M 79 163v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,82,166)"></path>
                <path d="M 79 175v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,82,178)"></path>
                <rect x="79" y="181" width="6" height="6" transform="rotate(0,82,184)"></rect>
                <path d="M 85 1v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,88,4)"></path>
                <path d="M 85 19v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,88,22)"></path>
                <rect x="85" y="25" width="6" height="6" transform="rotate(0,88,28)"></rect>
                <path d="M 85 37v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,88,40)"></path>
                <rect x="85" y="43" width="6" height="6" transform="rotate(0,88,46)"></rect>
                <rect x="85" y="49" width="6" height="6" transform="rotate(0,88,52)"></rect>
                <path d="M 85 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,88,58)"></path>
                <path d="M 85 139v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,88,142)"></path>
                <path d="M 85 145v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,88,148)"></path>
                <path d="M 85 169v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,88,172)"></path>
                <rect x="85" y="181" width="6" height="6" transform="rotate(0,88,184)"></rect>
                <path d="M 85 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,88,190)"></path>
                <rect x="91" y="1" width="6" height="6" transform="rotate(0,94,4)"></rect>
                <path d="M 91 7v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,94,10)"></path>
                <rect x="91" y="25" width="6" height="6" transform="rotate(0,94,28)"></rect>
                <rect x="91" y="43" width="6" height="6" transform="rotate(0,94,46)"></rect>
                <circle cx="94" cy="64" r="3" transform="rotate(0,94,64)"></circle>
                <rect x="91" y="139" width="6" height="6" transform="rotate(0,94,142)"></rect>
                <rect x="91" y="169" width="6" height="6" transform="rotate(0,94,172)"></rect>
                <rect x="91" y="175" width="6" height="6" transform="rotate(0,94,178)"></rect>
                <path d="M 91 181v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,94,184)"></path>
                <circle cx="94" cy="196" r="3" transform="rotate(0,94,196)"></circle>
                <rect x="97" y="1" width="6" height="6" transform="rotate(0,100,4)"></rect>
                <path d="M 97 7v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,100,10)"></path>
                <path d="M 97 19v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,100,22)"></path>
                <rect x="97" y="25" width="6" height="6" transform="rotate(0,100,28)"></rect>
                <path d="M 97 37v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,100,40)"></path>
                <rect x="97" y="43" width="6" height="6" transform="rotate(0,100,46)"></rect>
                <path d="M 97 49v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,100,52)"></path>
                <path d="M 97 133v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,100,136)"></path>
                <rect x="97" y="139" width="6" height="6" transform="rotate(0,100,142)"></rect>
                <circle cx="100" cy="154" r="3" transform="rotate(0,100,154)"></circle>
                <path d="M 97 163v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,100,166)"></path>
                <path d="M 97 169v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,100,172)"></path>
                <path d="M 97 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,100,190)"></path>
                <rect x="103" y="1" width="6" height="6" transform="rotate(0,106,4)"></rect>
                <path d="M 103 13v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,106,16)"></path>
                <rect x="103" y="19" width="6" height="6" transform="rotate(0,106,22)"></rect>
                <path d="M 103 25v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,106,28)"></path>
                <circle cx="106" cy="64" r="3" transform="rotate(0,106,64)"></circle>
                <path d="M 103 133v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,106,136)"></path>
                <rect x="103" y="139" width="6" height="6" transform="rotate(0,106,142)"></rect>
                <path d="M 103 163v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,106,166)"></path>
                <path d="M 103 175v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,106,178)"></path>
                <rect x="103" y="181" width="6" height="6" transform="rotate(0,106,184)"></rect>
                <path d="M 103 187v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,106,190)"></path>
                <rect x="109" y="1" width="6" height="6" transform="rotate(0,112,4)"></rect>
                <path d="M 109 13v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,112,16)"></path>
                <circle cx="112" cy="40" r="3" transform="rotate(0,112,40)"></circle>
                <path d="M 109 49v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,112,52)"></path>
                <path d="M 109 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,112,58)"></path>
                <path d="M 109 139v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,112,142)"></path>
                <path d="M 109 151v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,112,154)"></path>
                <rect x="109" y="175" width="6" height="6" transform="rotate(0,112,178)"></rect>
                <rect x="109" y="181" width="6" height="6" transform="rotate(0,112,184)"></rect>
                <path d="M 109 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,112,196)"></path>
                <path d="M 115 1v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,118,4)"></path>
                <path d="M 115 7v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,118,10)"></path>
                <circle cx="118" cy="28" r="3" transform="rotate(0,118,28)"></circle>
                <path d="M 115 43v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,118,46)"></path>
                <path d="M 115 55v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,118,58)"></path>
                <path d="M 115 61v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,118,64)"></path>
                <rect x="115" y="151" width="6" height="6" transform="rotate(0,118,154)"></rect>
                <path d="M 115 163v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,118,166)"></path>
                <rect x="115" y="169" width="6" height="6" transform="rotate(0,118,172)"></rect>
                <rect x="115" y="175" width="6" height="6" transform="rotate(0,118,178)"></rect>
                <rect x="115" y="181" width="6" height="6" transform="rotate(0,118,184)"></rect>
                <rect x="115" y="187" width="6" height="6" transform="rotate(0,118,190)"></rect>
                <path d="M 115 193v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,118,196)"></path>
                <path d="M 121 13v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,124,16)"></path>
                <path d="M 121 19v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,124,22)"></path>
                <path d="M 121 37v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,124,40)"></path>
                <path d="M 121 43v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,124,46)"></path>
                <path d="M 121 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,124,64)"></path>
                <path d="M 121 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,124,136)"></path>
                <path d="M 121 145v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,124,148)"></path>
                <rect x="121" y="151" width="6" height="6" transform="rotate(0,124,154)"></rect>
                <path d="M 121 181v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,124,184)"></path>
                <path d="M 127 1v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,130,4)"></path>
                <path d="M 127 19v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,130,22)"></path>
                <circle cx="130" cy="34" r="3" transform="rotate(0,130,34)"></circle>
                <circle cx="130" cy="52" r="3" transform="rotate(0,130,52)"></circle>
                <path d="M 127 79v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,130,82)"></path>
                <rect x="127" y="85" width="6" height="6" transform="rotate(0,130,88)"></rect>
                <rect x="127" y="91" width="6" height="6" transform="rotate(0,130,94)"></rect>
                <rect x="127" y="97" width="6" height="6" transform="rotate(0,130,100)"></rect>
                <path d="M 127 103v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,130,106)"></path>
                <path d="M 127 121v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,130,124)"></path>
                <path d="M 127 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,130,136)"></path>
                <rect x="127" y="145" width="6" height="6" transform="rotate(0,130,148)"></rect>
                <rect x="127" y="151" width="6" height="6" transform="rotate(0,130,154)"></rect>
                <path d="M 127 163v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,130,166)"></path>
                <path d="M 127 169v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,130,172)"></path>
                <path d="M 127 187v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,130,190)"></path>
                <path d="M 127 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,130,196)"></path>
                <rect x="133" y="1" width="6" height="6" transform="rotate(0,136,4)"></rect>
                <path d="M 133 13v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,136,16)"></path>
                <circle cx="136" cy="40" r="3" transform="rotate(0,136,40)"></circle>
                <path d="M 133 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,136,64)"></path>
                <rect x="133" y="67" width="6" height="6" transform="rotate(0,136,70)"></rect>
                <path d="M 133 73v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,136,76)"></path>
                <rect x="133" y="85" width="6" height="6" transform="rotate(0,136,88)"></rect>
                <rect x="133" y="91" width="6" height="6" transform="rotate(0,136,94)"></rect>
                <rect x="133" y="97" width="6" height="6" transform="rotate(0,136,100)"></rect>
                <rect x="133" y="103" width="6" height="6" transform="rotate(0,136,106)"></rect>
                <path d="M 133 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,136,112)"></path>
                <path d="M 133 121v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,136,124)"></path>
                <path d="M 133 127v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,136,130)"></path>
                <rect x="133" y="145" width="6" height="6" transform="rotate(0,136,148)"></rect>
                <rect x="133" y="151" width="6" height="6" transform="rotate(0,136,154)"></rect>
                <path d="M 133 157v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,136,160)"></path>
                <rect x="133" y="169" width="6" height="6" transform="rotate(0,136,172)"></rect>
                <rect x="133" y="175" width="6" height="6" transform="rotate(0,136,178)"></rect>
                <rect x="133" y="181" width="6" height="6" transform="rotate(0,136,184)"></rect>
                <path d="M 133 187v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,136,190)"></path>
                <rect x="139" y="1" width="6" height="6" transform="rotate(0,142,4)"></rect>
                <path d="M 139 13v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,142,16)"></path>
                <path d="M 139 25v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,142,28)"></path>
                <circle cx="142" cy="58" r="3" transform="rotate(0,142,58)"></circle>
                <path d="M 139 67v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,142,70)"></path>
                <rect x="139" y="73" width="6" height="6" transform="rotate(0,142,76)"></rect>
                <rect x="139" y="79" width="6" height="6" transform="rotate(0,142,82)"></rect>
                <rect x="139" y="85" width="6" height="6" transform="rotate(0,142,88)"></rect>
                <rect x="139" y="91" width="6" height="6" transform="rotate(0,142,94)"></rect>
                <rect x="139" y="97" width="6" height="6" transform="rotate(0,142,100)"></rect>
                <rect x="139" y="103" width="6" height="6" transform="rotate(0,142,106)"></rect>
                <path d="M 139 139v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,142,142)"></path>
                <rect x="139" y="145" width="6" height="6" transform="rotate(0,142,148)"></rect>
                <rect x="139" y="151" width="6" height="6" transform="rotate(0,142,154)"></rect>
                <rect x="139" y="169" width="6" height="6" transform="rotate(0,142,172)"></rect>
                <rect x="139" y="175" width="6" height="6" transform="rotate(0,142,178)"></rect>
                <rect x="139" y="181" width="6" height="6" transform="rotate(0,142,184)"></rect>
                <path d="M 139 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,142,196)"></path>
                <path d="M 145 1v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,148,4)"></path>
                <path d="M 145 7v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,148,10)"></path>
                <path d="M 145 25v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,148,28)"></path>
                <circle cx="148" cy="40" r="3" transform="rotate(0,148,40)"></circle>
                <path d="M 145 49v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,148,52)"></path>
                <circle cx="148" cy="64" r="3" transform="rotate(0,148,64)"></circle>
                <path d="M 145 73v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,148,76)"></path>
                <path d="M 145 79v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,148,82)"></path>
                <path d="M 145 103v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,148,106)"></path>
                <rect x="145" y="109" width="6" height="6" transform="rotate(0,148,112)"></rect>
                <path d="M 145 115v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,148,118)"></path>
                <circle cx="148" cy="130" r="3" transform="rotate(0,148,130)"></circle>
                <rect x="145" y="145" width="6" height="6" transform="rotate(0,148,148)"></rect>
                <rect x="145" y="151" width="6" height="6" transform="rotate(0,148,154)"></rect>
                <rect x="145" y="157" width="6" height="6" transform="rotate(0,148,160)"></rect>
                <rect x="145" y="163" width="6" height="6" transform="rotate(0,148,166)"></rect>
                <rect x="145" y="169" width="6" height="6" transform="rotate(0,148,172)"></rect>
                <rect x="145" y="175" width="6" height="6" transform="rotate(0,148,178)"></rect>
                <rect x="145" y="181" width="6" height="6" transform="rotate(0,148,184)"></rect>
                <rect x="145" y="187" width="6" height="6" transform="rotate(0,148,190)"></rect>
                <path d="M 145 193v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,148,196)"></path>
                <rect x="151" y="49" width="6" height="6" transform="rotate(0,154,52)"></rect>
                <path d="M 151 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,154,58)"></path>
                <circle cx="154" cy="100" r="3" transform="rotate(0,154,100)"></circle>
                <path d="M 151 115v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,154,118)"></path>
                <path d="M 151 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,154,136)"></path>
                <rect x="151" y="139" width="6" height="6" transform="rotate(0,154,142)"></rect>
                <rect x="151" y="145" width="6" height="6" transform="rotate(0,154,148)"></rect>
                <rect x="151" y="169" width="6" height="6" transform="rotate(0,154,172)"></rect>
                <rect x="151" y="175" width="6" height="6" transform="rotate(0,154,178)"></rect>
                <path d="M 151 181v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,154,184)"></path>
                <path d="M 157 49v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,160,52)"></path>
                <path d="M 157 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,160,64)"></path>
                <rect x="157" y="67" width="6" height="6" transform="rotate(0,160,70)"></rect>
                <rect x="157" y="73" width="6" height="6" transform="rotate(0,160,76)"></rect>
                <rect x="157" y="79" width="6" height="6" transform="rotate(0,160,82)"></rect>
                <path d="M 157 85v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,160,88)"></path>
                <circle cx="160" cy="106" r="3" transform="rotate(0,160,106)"></circle>
                <circle cx="160" cy="130" r="3" transform="rotate(0,160,130)"></circle>
                <rect x="157" y="145" width="6" height="6" transform="rotate(0,160,148)"></rect>
                <circle cx="160" cy="160" r="3" transform="rotate(0,160,160)"></circle>
                <rect x="157" y="169" width="6" height="6" transform="rotate(0,160,172)"></rect>
                <path d="M 157 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,160,190)"></path>
                <path d="M 163 67v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,166,70)"></path>
                <rect x="163" y="73" width="6" height="6" transform="rotate(0,166,76)"></rect>
                <rect x="163" y="79" width="6" height="6" transform="rotate(0,166,82)"></rect>
                <path d="M 163 85v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,166,88)"></path>
                <circle cx="166" cy="124" r="3" transform="rotate(0,166,124)"></circle>
                <path d="M 163 139v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,166,142)"></path>
                <rect x="163" y="145" width="6" height="6" transform="rotate(0,166,148)"></rect>
                <rect x="163" y="169" width="6" height="6" transform="rotate(0,166,172)"></rect>
                <rect x="163" y="175" width="6" height="6" transform="rotate(0,166,178)"></rect>
                <rect x="163" y="181" width="6" height="6" transform="rotate(0,166,184)"></rect>
                <rect x="163" y="187" width="6" height="6" transform="rotate(0,166,190)"></rect>
                <path d="M 163 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,166,196)"></path>
                <circle cx="172" cy="64" r="3" transform="rotate(0,172,64)"></circle>
                <rect x="169" y="73" width="6" height="6" transform="rotate(0,172,76)"></rect>
                <rect x="169" y="79" width="6" height="6" transform="rotate(0,172,82)"></rect>
                <path d="M 169 97v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,172,100)"></path>
                <path d="M 169 109v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,172,112)"></path>
                <path d="M 169 115v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,172,118)"></path>
                <circle cx="172" cy="130" r="3" transform="rotate(0,172,130)"></circle>
                <path d="M 169 145v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,172,148)"></path>
                <rect x="169" y="151" width="6" height="6" transform="rotate(0,172,154)"></rect>
                <rect x="169" y="157" width="6" height="6" transform="rotate(0,172,160)"></rect>
                <rect x="169" y="163" width="6" height="6" transform="rotate(0,172,166)"></rect>
                <rect x="169" y="169" width="6" height="6" transform="rotate(0,172,172)"></rect>
                <path d="M 169 181v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,172,184)"></path>
                <path d="M 169 187v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,172,190)"></path>
                <path d="M 175 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,178,58)"></path>
                <rect x="175" y="73" width="6" height="6" transform="rotate(0,178,76)"></rect>
                <path d="M 175 79v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,178,82)"></path>
                <rect x="175" y="97" width="6" height="6" transform="rotate(0,178,100)"></rect>
                <path d="M 175 121v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,178,124)"></path>
                <path d="M 175 133v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,178,136)"></path>
                <rect x="175" y="151" width="6" height="6" transform="rotate(0,178,154)"></rect>
                <rect x="175" y="169" width="6" height="6" transform="rotate(0,178,172)"></rect>
                <path d="M 175 193v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(180,178,196)"></path>
                <path d="M 181 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,184,58)"></path>
                <path d="M 181 73v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,184,76)"></path>
                <path d="M 181 91v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,184,94)"></path>
                <path d="M 181 97v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,184,100)"></path>
                <rect x="181" y="121" width="6" height="6" transform="rotate(0,184,124)"></rect>
                <rect x="181" y="127" width="6" height="6" transform="rotate(0,184,130)"></rect>
                <rect x="181" y="133" width="6" height="6" transform="rotate(0,184,136)"></rect>
                <path d="M 181 139v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,184,142)"></path>
                <path d="M 181 151v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,184,154)"></path>
                <path d="M 181 169v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,184,172)"></path>
                <path d="M 181 175v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(180,184,178)"></path>
                <path d="M 181 187v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,184,190)"></path>
                <path d="M 181 193v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,184,196)"></path>
                <circle cx="190" cy="52" r="3" transform="rotate(0,190,52)"></circle>
                <circle cx="190" cy="70" r="3" transform="rotate(0,190,70)"></circle>
                <rect x="187" y="91" width="6" height="6" transform="rotate(0,190,94)"></rect>
                <path d="M 187 109v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(-90,190,112)"></path>
                <rect x="187" y="115" width="6" height="6" transform="rotate(0,190,118)"></rect>
                <path d="M 187 121v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,190,124)"></path>
                <rect x="187" y="133" width="6" height="6" transform="rotate(0,190,136)"></rect>
                <rect x="187" y="139" width="6" height="6" transform="rotate(0,190,142)"></rect>
                <circle cx="190" cy="166" r="3" transform="rotate(0,190,166)"></circle>
                <path d="M 187 175v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,190,178)"></path>
                <path d="M 187 181v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,190,184)"></path>
                <path d="M 193 55v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,196,58)"></path>
                <path d="M 193 61v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,196,64)"></path>
                <path d="M 193 73v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(-90,196,76)"></path>
                <path d="M 193 79v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,196,82)"></path>
                <path d="M 193 91v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(0,196,94)"></path>
                <path d="M 193 109v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,196,112)"></path>
                <path d="M 193 115v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(90,196,118)"></path>
                <path d="M 193 133v 6h 6a 6 6, 0, 0, 0, -6 -6" transform="rotate(0,196,136)"></path>
                <rect x="193" y="139" width="6" height="6" transform="rotate(0,196,142)"></rect>
                <path d="M 193 145v 6h 3a 3 3, 0, 0, 0, 0 -6" transform="rotate(90,196,148)"></path>
                <circle cx="196" cy="160" r="3" transform="rotate(0,196,160)"></circle>
                <circle cx="196" cy="172" r="3" transform="rotate(0,196,172)"></circle>
                <circle cx="196" cy="190" r="3" transform="rotate(0,196,190)"></circle>
              </clipPath>
              <clipPath id="clip-path-corners-square-color-0-0">
                <path clip-rule="evenodd"
                      d="M 1 16v 12a 15 15, 0, 0, 0, 15 15h 12a 15 15, 0, 0, 0, 15 -15v -12a 15 15, 0, 0, 0, -15 -15h -12a 15 15, 0, 0, 0, -15 15M 16 7h 12a 9 9, 0, 0, 1, 9 9v 12a 9 9, 0, 0, 1, -9 9h -12a 9 9, 0, 0, 1, -9 -9v -12a 9 9, 0, 0, 1, 9 -9"
                      transform="rotate(0,22,22)"></path>
              </clipPath>
              <clipPath id="clip-path-corners-dot-color-0-0">
                <rect x="13" y="13" width="18" height="18" transform="rotate(0,22,22)"></rect>
              </clipPath>
              <clipPath id="clip-path-corners-square-color-1-0">
                <path clip-rule="evenodd"
                      d="M 157 16v 12a 15 15, 0, 0, 0, 15 15h 12a 15 15, 0, 0, 0, 15 -15v -12a 15 15, 0, 0, 0, -15 -15h -12a 15 15, 0, 0, 0, -15 15M 172 7h 12a 9 9, 0, 0, 1, 9 9v 12a 9 9, 0, 0, 1, -9 9h -12a 9 9, 0, 0, 1, -9 -9v -12a 9 9, 0, 0, 1, 9 -9"
                      transform="rotate(90,178,22)"></path>
              </clipPath>
              <clipPath id="clip-path-corners-dot-color-1-0">
                <rect x="169" y="13" width="18" height="18" transform="rotate(90,178,22)"></rect>
              </clipPath>
              <clipPath id="clip-path-corners-square-color-0-1">
                <path clip-rule="evenodd"
                      d="M 1 172v 12a 15 15, 0, 0, 0, 15 15h 12a 15 15, 0, 0, 0, 15 -15v -12a 15 15, 0, 0, 0, -15 -15h -12a 15 15, 0, 0, 0, -15 15M 16 163h 12a 9 9, 0, 0, 1, 9 9v 12a 9 9, 0, 0, 1, -9 9h -12a 9 9, 0, 0, 1, -9 -9v -12a 9 9, 0, 0, 1, 9 -9"
                      transform="rotate(-90,22,178)"></path>
              </clipPath>
              <clipPath id="clip-path-corners-dot-color-0-1">
                <rect x="13" y="169" width="18" height="18" transform="rotate(-90,22,178)"></rect>
              </clipPath>
            </defs>
            <rect x="0" y="0" height="200" width="200" clip-path="url('#clip-path-background-color')" fill="#fff"></rect>
            <rect x="0" y="0" height="200" width="200" clip-path="url('#clip-path-dot-color')" fill="#000"></rect>
            <rect x="1" y="1" height="42" width="42" clip-path="url('#clip-path-corners-square-color-0-0')"
                  fill="#000"></rect>
            <rect x="13" y="13" height="18" width="18" clip-path="url('#clip-path-corners-dot-color-0-0')"
                  fill="#000"></rect>
            <rect x="157" y="1" height="42" width="42" clip-path="url('#clip-path-corners-square-color-1-0')"
                  fill="#000"></rect>
            <rect x="169" y="13" height="18" width="18" clip-path="url('#clip-path-corners-dot-color-1-0')"
                  fill="#000"></rect>
            <rect x="1" y="157" height="42" width="42" clip-path="url('#clip-path-corners-square-color-0-1')"
                  fill="#000"></rect>
            <rect x="13" y="169" height="18" width="18" clip-path="url('#clip-path-corners-dot-color-0-1')"
                  fill="#000"></rect>
          </svg>
          <img class="absolute" src="~/assets/images/trust-wallet.svg" alt="trust wallet">
        </div>
        <div class="flex flex-col gap-2">
          <span>Wallet ID: <span class="text-xs opacity-60">(Click to Copy)</span></span>
          <span class="text-lg tracking-widest cursor-pointer px-4 py-2 hover:bg-primary/30 transition-colors duration-200 rounded-lg bg-primary/20 text-primary" @click="copyWalletId">
            {{walletId}}
          </span>
          <Transition>
            <span v-if="copied" data-aos="fade-right" class="text-primary">Address Copied!</span>
          </Transition>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="p-4 bg-primary/10 flex flex-col rounded-lg gap-4">
          <div class="flex items-center justify-between">
            <span class="text-sm opacity-70">Total Price</span>
            <strong class="text-lg">${{totalPrice}} <span class="text-sm font-light">USDT</span></strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm opacity-70">Discount Amount</span>
            <strong class="text-lg">${{ discount }} <span class="text-sm font-light">USDT</span></strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm opacity-70">Final Price</span>
            <strong class="text-lg">${{ finalPrice }} <span class="text-sm font-light">USDT</span></strong>
          </div>
        </div>
        <div class="bg-primary/20 text-primary capitalize px-4 py-2 rounded-lg border-primary border">
          <span class="mr-2 opacity-60">Alert</span> Make sure you transfer over the <b class="text-lg">Tron</b> network
        </div>
        <form @submit.prevent="sendRequest" class="flex flex-col gap-2">
          <label for="TxID">Enter Your Transaction ID:</label>
          <BaseGInput2 label="TxID" name="TxID" type="text" required v-model="txId" />
          <BaseGButton type="submit" :is-loading="loading">
            Send Request
          </BaseGButton>
          <span v-if="trackingCode" data-aos="fade-down" class="capitalize">Request Sent Successfully! <br> We Will Check it and if it be correct we will finalize your Order :) <br> <br> Your Tracking Code: <b class="m-2 text-lg">{{ trackingCode }}</b></span>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>