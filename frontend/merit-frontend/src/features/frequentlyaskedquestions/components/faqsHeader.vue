<template>
  <div class="faqs-header-component">
    <button 
      class="close-faqs"
      @click="$emit('close')"
      aria-label="Close FAQ"
    >
      <q-icon name="close" size="1.8rem" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>