<template>
  <q-page class="landing-page">
    <video 
      class="background-video"
      autoplay 
      muted 
      loop 
      playsinline
      preload="auto"
    >
      <source src="../../../assets/videos/background-video.webm" type="video/webm">
    </video>

    <!-- Header with logo and hamburger menu -->
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
      @show-merit="showMeritSection"
    />

    <!-- Merit Page -->
    <MeritPage 
      :is-visible="isMeritVisible"
      @close="closeMeritSection"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LandingHeader from '../components/landingHeader.vue'
import LandingMenu from '../components/landingMenu.vue'
import MeritPage from '../../merit/pages/meritPage.vue'
import { menuService, landingService } from '../services/landingServices.js'

const router = useRouter()
const route = useRoute()

const isMenuOpen = ref(false)
const showHero = ref(false)
const isMeritVisible = ref(false)

// Initialize landing page
onMounted(() => {
  landingService.initializeViewport()
  
  setTimeout(() => {
    showHero.value = true
  }, 500)
  
  // Show Merit section if route is /merit
  // if (route.path === '/merit') {
  //   setTimeout(() => {
  //     isMeritVisible.value = true
  //   }, 800)
  // }
})

// Watch route changes
watch(() => route.path, (newPath) => {
  if (newPath === '/merit' && !isMeritVisible.value) {
    // Only show if user navigated directly to /merit URL
    showMeritSection()
  } else if (newPath === '/' && isMeritVisible.value) {
    // Only close if Merit was open and user navigated to home
    closeMeritSection()
  }
})

const showMeritSection = () => {
  isMeritVisible.value = true
  // Update route to /merit
  if (route.path !== '/merit') {
    router.push('/merit')
  }
}

const closeMeritSection = () => {
  isMeritVisible.value = false
  // Return to home route
  if (route.path !== '/') {
    router.push('/')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = menuService.toggleMenu(isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = menuService.closeMenu()
}

const handleGetStarted = () => {
  console.log('Get Started clicked!')
  // Add your logic here
}
</script>

<style lang="scss">
  @import '../styles/landingStyles.scss';
</style>