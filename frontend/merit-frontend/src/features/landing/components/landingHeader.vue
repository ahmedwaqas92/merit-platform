<template>
  <header class="landing-header">
    <!-- Logo and Merit text -->
    <div class="logo-section">
      <img 
        src="../../../assets/images/merit-logo.png" 
        alt="Merit Logo" 
        class="logo-image"
      />
      <span class="logo-text">Merit</span>
    </div>

    <!-- Animated hamburger menu -->
    <button 
      class="hamburger-menu" 
      :class="{ 'is-active': isMenuOpen }"
      @click="handleToggle"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </header>
</template>

<script setup>
// Accept the menu state as a prop
defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-menu'])

const handleToggle = () => {
  emit('toggle-menu')
}
</script>