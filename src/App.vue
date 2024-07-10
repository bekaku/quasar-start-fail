<template>
  <router-view />
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/example-store'
defineOptions({
  name: 'App'
});

const counterStore = useCounterStore();
console.log('counterStore', counterStore.counter);
</script>
