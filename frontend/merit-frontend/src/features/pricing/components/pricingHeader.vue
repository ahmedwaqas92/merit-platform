<template>
  <div class="pricing-header-component">
    <button 
      class="close-pricing"
      @click="$emit('close')"
      aria-label="Close Pricing"
    >
      <q-icon name="close" size="1.8rem" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>