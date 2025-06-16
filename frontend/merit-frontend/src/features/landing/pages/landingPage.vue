<template>
  <q-page class="landing-page">
    <video 
      class="background-video"
      autoplay 
      muted 
      loop 
      playsinline
    >
      <source src="../../../assets/videos/background-video.mp4" type="video/mp4">
    </video>

    <!-- Header with logo and hamburger menu - Pass menu state -->
    <LandingHeader 
      :is-menu-open="isMenuOpen"
      @toggle-menu="toggleMenu" 
    />

    <!-- Hero Section with Slogan -->
    <div class="hero-section">
      <div class="hero-content" :class="{ 'animate-in': showHero }">
        <h1 class="hero-slogan">
          <span class="slogan-line-1" :class="{ 'animate-slide-up': showHero }">
            Freelance Without Borders
          </span>
          <span class="slogan-line-2" :class="{ 'animate-slide-up-delay': showHero }">
            Merit: the Web3 platform for everyone, everywhere.
          </span>
        </h1>
        <button 
          class="get-started-btn" 
          :class="{ 'animate-button-pop': showHero }"
          @click="handleGetStarted"
        >
          Get Started
        </button>
      </div>
    </div>

    <!-- Right slide panel -->
    <LandingMenu 
      :is-open="isMenuOpen" 
      @close-menu="closeMenu" 
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LandingHeader from '../components/LandingHeader.vue'
import LandingMenu from '../components/LandingMenu.vue'
import { menuService } from '../services/landingServices.js'

const isMenuOpen = ref(false)
const showHero = ref(false)

onMounted(() => {
  setTimeout(() => {
    showHero.value = true
  }, 500) // Start animation 500ms after component mounts
})

const toggleMenu = () => {
  isMenuOpen.value = menuService.toggleMenu(isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = menuService.closeMenu()
}

const handleGetStarted = () => {
  // Add your get started logic here
  console.log('Get Started clicked!')
  // For example: router.push('/register') or scroll to a section
}
</script>

<style lang="scss">
  @import '../styles/landingStyles.scss';
</style>