<template>
  
    <button @click="incrementCount" class="bg-green-600 text-black shadow-xs hover:bg-green-600/90 h-9 px-4 rounded-md">{{ title }}</button>
 
</template>

<script setup>
import { ref } from 'vue';

// Props with default values
const props = defineProps({
  title: {
    type: String,
    default: 'Vue!'
  },

});

// Reactive state
const count = ref(0);

// Methods
const incrementCount = () => {
  count.value++;
};
</script>
