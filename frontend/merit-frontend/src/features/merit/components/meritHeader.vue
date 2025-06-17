<template>
  <header class="merit-header">
    <button class="close-merit" @click="$emit('close')">
      <q-icon name="close" size="md" />
    </button>
  </header>
</template>

<script setup>
  defineEmits(['close'])
</script>