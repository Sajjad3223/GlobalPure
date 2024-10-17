<template>
  <div class="flex flex-col">
    <div class="flex flex-col" dir="ltr">
      <div class="relative w-full h-[5px] z-[1] top-[3px]">
        <div ref="progress" id="progress" class="absolute bg-[#504A33] h-[5px] rounded-full pointer-events-none"></div>
        <div class="flex items-center justify-between absolute inset-x-0 top-4 text-xs font-light">
          <span class="">
          {{getPriceUnitSymbol(globalStore.currentCurrency)}}{{ min }}
        </span>
        <span>
          {{getPriceUnitSymbol(globalStore.currentCurrency)}}{{ max }}
        </span>
        </div>
      </div>
      <div class="range-input">
        <input type="range"
               class="min-range"
               :min="min"
               :max="max"
               id="min-range-slider"
               name="min-range-slider"
               v-model="valueData.minValue"
               @input="minValueChanged"
               step="1">
        <input type="range"
               class="max-range"
               :min="min"
               :max="max"
               id="max-range-slider"
               name="max-range-slider"
               v-model="valueData.maxValue"
               @input="maxValueChanged"
               step="1">
      </div>
    </div>
    <hr class="mt-12">
    <div class="flex items-center justify-between mt-4 range-field">
      <div class="flex items-center gap-2">
        <span class="opacity-80">From</span>
        <div class="flex items-center gap-1">
          <span>$</span>
          <input v-model="minValueInput" @input="(e)=>valueData.minValue = e.target.value" type="number" class="bg-white border border-[#453F29]/10 py-1 text-center max-w-10 text-xs">
        </div>
        <span class="opacity-80">To</span>
        <div class="flex items-center gap-1">
          <span>$</span>
          <input v-model="maxValueInput" @input="(e)=>valueData.maxValue = e.target.value" type="number" class="bg-white border border-[#453F29]/10 py-1 text-center max-w-10 text-xs">
        </div>
      </div>
      <button class="text-xs opacity-50 hover:opacity-80">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getPriceUnitSymbol} from "../../models/commonTypes";

const props = defineProps<{
  min:number,
  max:number,
  modelValue:object
}>();
const emits = defineEmits(['update:modelValue']);

const globalStore = useGlobalStore();

const valueData = reactive({
  minValue: props.modelValue.minValue,
  maxValue: props.modelValue.maxValue
})
const minValueInput = ref(props.modelValue.minValue);
const maxValueInput = ref(props.modelValue.maxValue);
const getValues = ()=> valueData;

watch(valueData,()=>emits('update:modelValue',valueData))

const minValueChanged = (event)=>{
  valueData.minValue = event.target.value;
  minValueInput.value = event.target.value;

}
const maxValueChanged = (event)=>{
  valueData.maxValue = event.target.value;
  maxValueInput.value = event.target.value;
}

const progress = ref();
const priceGap = 10

onMounted(()=>{
  const ranges = document.querySelectorAll('.range-input input');
  ranges.forEach(r=>{
    r.addEventListener('input',(e:any)=>{
      //@ts-ignore
      let minValue = parseInt(ranges[0].value),
          //@ts-ignore
          maxValue = parseInt(ranges[1].value);

      //@ts-ignore
      if((maxValue - minValue >= priceGap) && maxValue <= ranges[1].max){
        if(e.target.className === "min-range"){
          //@ts-ignore
          ranges[0].value = minValue;
          //@ts-ignore
          progress.value.style.left = ((minValue / ranges[1].max) * 100) + '%';
        }
        else{
          //@ts-ignore
          ranges[1].value = maxValue;
          //@ts-ignore
          progress.value.style.right =100-((maxValue / ranges[0].max) * 100) + '%';
        }
      }
      else{
        if(e.target.className === "min-range"){
          //@ts-ignore
          ranges[0].value = maxValue - priceGap;
          valueData.minValue = maxValue - priceGap;
        }else{
          //@ts-ignore
          ranges[1].value = minValue + priceGap;
          valueData.maxValue = minValue + priceGap;
        }
      }

    })
  })
  //@ts-ignore
  progress.value.style.left = ((ranges[0].value / ranges[1].max) * 100) + '%';
  //@ts-ignore
  progress.value.style.right =100-((ranges[1].value / ranges[0].max) * 100) + '%';
})

defineExpose({
  getValues
})

</script>

<style lang="scss">
/* Remove Arrows/Spinners */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.range-input {
  position: relative;
  height: 4px;
  background-color: #504A3333;
}

.range-input input {
  position: absolute;
  width: 100%;
  height: 1px;
  background: none;
  pointer-events: none;
  cursor: pointer;
  -webkit-appearance: none;
  z-index: 2;
}

/* Styles for the range thumb in WebKit browsers */
input[type="range"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  background: #504A33;
  border: 0.7px white solid;
  pointer-events: auto;
  -webkit-appearance: none;
  rotate: 45deg;
}

</style>