<template>
  <div class="origins-page" :class="{ 'visible': isVisible }">
    <div class="origins-container" ref="originsContainer">
      <!-- Header -->
      <OriginsHeader @close="handleClose" />
      
      <!-- Top Section -->
      <section class="origins-section top-section" ref="topSection">
        <OriginsTop />
      </section>
      
      <!-- Middle Section -->
      <section class="origins-section middle-section" ref="middleSection">
        <OriginsMiddle />
      </section>
      
      <!-- Bottom Section -->
      <section class="origins-section bottom-section" ref="bottomSection">
        <OriginsBottom />
      </section>
      
      <!-- Navigation Arrows -->
      <OriginsNavigation 
        :current-section="currentSection"
        :total-sections="totalSections"
        @navigate="handleSectionNavigation"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import OriginsHeader from '../components/originsHeader.vue'
import OriginsTop from '../components/originsTop.vue'
import OriginsMiddle from '../components/originsMiddle.vue'
import OriginsBottom from '../components/originsBottom.vue'
import OriginsNavigation from '../components/originsNavigation.vue'
import { originsService } from '../services/originsServices.js'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const router = useRouter()

// Reactive state
const currentSection = ref(0)
const totalSections = ref(3)
const originsContainer = ref(null)
let cleanupNavigation = null

// Section refs
const topSection = ref(null)
const middleSection = ref(null)
const bottomSection = ref(null)

onMounted(() => {
  originsService.initializeAnimations()
  setupNavigation()
})

onUnmounted(() => {
  if (cleanupNavigation) {
    cleanupNavigation()
  }
})

const setupNavigation = () => {
  if (!originsContainer.value) return
  
  // Initialize navigation with cleanup function
  cleanupNavigation = originsService.initializeNavigation(originsContainer.value)
  
  // Watch for section changes from service
  const checkSectionChanges = setInterval(() => {
    const serviceCurrentSection = originsService.getCurrentSection()
    if (serviceCurrentSection !== currentSection.value) {
      currentSection.value = serviceCurrentSection
    }
  }, 100)
  
  // Add cleanup for interval
  const originalCleanup = cleanupNavigation
  cleanupNavigation = () => {
    clearInterval(checkSectionChanges)
    if (originalCleanup) originalCleanup()
  }
}

const handleSectionNavigation = (direction) => {
  const newSection = originsService.navigateToSection(direction)
  if (newSection !== currentSection.value) {
    currentSection.value = newSection
  }
}

const handleClose = () => {
  emit('close')
  router.push('/')
}

// Update service when section changes externally
watch(currentSection, (newSection) => {
  originsService.updateCurrentSection(newSection)
})
</script>

<style lang="scss">
  @import '../styles/originsStyles.scss';
</style>