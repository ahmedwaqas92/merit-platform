<template>
  <div class="merit-features">
    <div class="features-grid">
      <div 
        v-for="feature in features" 
        :key="feature.id"
        class="feature-box"
        :class="feature.colorClass"
      >
        <div class="feature-icon">
          <q-icon :name="feature.icon" size="2.5rem" />
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
        <p class="feature-detail">{{ feature.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { meritService } from '../services/meritServices.js'

const features = ref([])

onMounted(() => {
  features.value = meritService.getFeatures()
})
</script>