<template>
  <button
      :class="['py-3 px-5 w-full flex items-center justify-center gap-2 text-white transition-colors duration-200',
    outline ? 'border border-[#453f29] !text-primary hover:bg-primary/20':'bg-primary']"
      :type="type" :disabled="disabled || isLoading">
    <slot v-if="!isLoading"></slot>
    <span v-else :class="[outline ? 'text-primary' : 'text-white']">
      <span :class="['newtons-cradle',outline ? 'text-primary' : 'text-white']">
        <span class="newtons-cradle__dot"></span>
        <span class="newtons-cradle__dot"></span>
        <span class="newtons-cradle__dot"></span>
        <span class="newtons-cradle__dot"></span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string,
  outline?: boolean,
  isLoading?: boolean,
  disabled?: boolean
}>(), {
  type: 'button',
  outline: false,
  isLoading: false,
  disabled: false
})
</script>

<style scoped>
.newtons-cradle {
  --uib-size: 30px;
  --uib-speed: 1.2s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: var(--uib-size);
  height: var(--uib-size);
}

.newtons-cradle__dot {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;
  color: inherit;
}

.newtons-cradle__dot::after {
  content: '';
  display: block;
  width: 100%;
  height: 25%;
  border-radius: 50%;
  background-color: currentColor;
}

.newtons-cradle__dot:first-child {
  animation: swing var(--uib-speed) linear infinite;
}

.newtons-cradle__dot:last-child {
  animation: swing2 var(--uib-speed) linear infinite;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
}

@keyframes swing2 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
}

</style>