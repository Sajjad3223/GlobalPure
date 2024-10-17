<template>
  <div class="w-full flex flex-col gap-2 relative">
    <label class="text-xl text-[#493E17]" :for="name">{{ label }}</label>
    <div class="flex items-center w-full flex-1 gap-4 justify-between">
      <label :for="name" class="cursor-pointer w-1/2">
        <button type="button" class="pointer-events-none w-full py-2 2xl:py-4 rounded-full border border-[#453F29] flex items-center justify-center">
          <span class="text-[#504A33]">choose File</span>
        </button>
      </label>
      <span v-if="value == null">No File Chosen!</span>
      <span v-else class="flex items-center gap-5 ml-auto">
          <span>{{value.name}}</span>
          <button class="px-4 py-2" @click="value = null">X</button>
        </span>
      <input type="file" @input="fileSelected" :name="name" :id="name" class="opacity-0 h-0 absolute" :required="required">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name:string,
  label:string,
  modelValue:File,
  required?:boolean,
}>();

const emits = defineEmits(['update:modelValue']);

const value:Ref<File | null> = ref(props.modelValue);

watch(
    ()=>props.modelValue,
    ()=>value.value = props.modelValue
)

const fileSelected = (e)=>{
  value.value = e.target.files[0];
  emits('update:modelValue',value.value);
}

</script>