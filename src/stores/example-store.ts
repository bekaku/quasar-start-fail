import { defineStore } from 'pinia';
import { PrefixKey } from '@/utils/constants';
import { computed, ref } from 'vue';
export const useCounterStore = defineStore('counter', () => {
  console.log('useCounterStore', PrefixKey);
  const counter = ref(0);
  const doubleCount = computed(() => counter.value * 2)
  const increment = () => {
    counter.value++;
  }
  return {
    counter,
    doubleCount,
    increment
  }
});
