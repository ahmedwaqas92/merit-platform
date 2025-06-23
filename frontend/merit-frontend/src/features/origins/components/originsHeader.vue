<template>
  <header class="origins-header">
    <button class="close-origins" @click="$emit('close')">
      <q-icon name="close" size="md" />
    </button>
  </header>
</template>

<script setup>
  defineEmits(['close'])
</script>