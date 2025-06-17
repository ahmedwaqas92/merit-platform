<template>
  <div class="merit-page" :class="{ 'visible': isVisible }">
    <div class="merit-container">
      <MeritHeader @close="handleClose" />
      
      <div class="merit-layout">
        <!-- Left side: What is Merit -->
        <div class="merit-intro">
          <MeritHero />
        </div>
        
        <!-- Right side: Feature boxes -->
        <div class="merit-features-section">
          <MeritFeatures />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import MeritHeader from '../components/meritHeader.vue'
import MeritHero from '../components/meritHero.vue'
import MeritFeatures from '../components/meritFeatures.vue'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const router = useRouter()

const handleClose = () => {
  emit('close')
  router.push('/')
}
</script>

<style lang="scss">
  @import '../styles/meritStyles.scss';
</style>