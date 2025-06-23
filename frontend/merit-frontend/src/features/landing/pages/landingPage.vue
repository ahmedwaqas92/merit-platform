<template>
  <q-page class="landing-page">
    <video 
      class="background-video"
      autoplay 
      muted 
      loop 
      playsinline
      preload="metadata"
      x-webkit-airplay="allow"
      x-webkit-playsinline="true"
      webkit-playsinline="true"
      x5-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      @loadstart="handleVideoLoadStart"
      @canplay="handleVideoCanPlay"
      @error="handleVideoError"
      @click="handleVideoClick"
      
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
      @show-origins="showOriginsSection"
      @show-faqs="showFaqsSection"
    />

    <!-- Merit Page -->
    <MeritPage 
      :is-visible="isMeritVisible"
      @close="closeMeritSection"
    />

    <!-- Origins Page -->
    <OriginsPage
      :is-visible="isOriginsVisible"
      @close="closeOriginsSection"
    />

    <FaqsPage 
      :is-visible="isFaqsVisible"
      @close="closeFaqsSection"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LandingHeader from '../components/landingHeader.vue'
import LandingMenu from '../components/landingMenu.vue'
import MeritPage from '../../merit/pages/meritPage.vue'
import OriginsPage from '../../origins/pages/originsPage.vue'
import FaqsPage from '../../frequentlyaskedquestions/pages/faqsPage.vue'
import { landingService, routeService, menuService } from '../services/landingServices.js'

const router = useRouter()
const route = useRoute()

// Reactive state
const isMenuOpen = ref(false)
const showHero = ref(false)
const isMeritVisible = ref(false)
const isOriginsVisible = ref(false)
const isFaqsVisible = ref(false)


// Initialize landing page
onMounted(() => {
  landingService.initializePage(showHero)
})

// Watch route changes
watch(() => route.path, (newPath) => {
  routeService.handleRouteChange(
    newPath, 
    isMeritVisible, 
    showMeritSection, 
    closeMeritSection,
    isOriginsVisible,
    showOriginsSection,
    closeOriginsSection,
    isFaqsVisible,
    showFaqsSection,
    closeFaqsSection
  )
})

// Route navigation methods
const showMeritSection = () => {
  routeService.showMeritSection(isMeritVisible, router, route)
}

const closeMeritSection = () => {
  routeService.closeMeritSection(isMeritVisible, router, route)
}

const showOriginsSection = () => {
  routeService.showOriginsSection(isOriginsVisible, router, route)
}

const closeOriginsSection = () => {
  routeService.closeOriginsSection(isOriginsVisible, router, route)
}

const showFaqsSection = () => {
  routeService.showFaqsSection(isFaqsVisible, router, route)
}

const closeFaqsSection = () => {
  routeService.closeFaqsSection(isFaqsVisible, router, route)
}

// Menu methods
const toggleMenu = () => {
  isMenuOpen.value = menuService.toggleMenu(isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = menuService.closeMenu()
}

// Button handlers
const handleGetStarted = () => {
  landingService.handleGetStarted()
}
</script>

<style lang="scss">
  @import '../styles/landingStyles.scss';
</style>