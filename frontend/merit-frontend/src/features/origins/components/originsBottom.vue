<template>
  <div class="bottom-content">
    <h2 class="bottom-title">{{ bottomData.title }}</h2>
    <h3 class="bottom-subtitle">{{ bottomData.subtitle }}</h3>
    <div class="bottom-description">
      <p v-for="(paragraph, index) in bottomData.description" :key="index">
        {{ paragraph }}
      </p>
    </div>
    
    <div class="stats-grid">
      <div 
        v-for="(stat, index) in bottomData.stats" 
        :key="index"
        class="stat-item"
      >
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-subtitle">{{ stat.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { originsService } from '../services/originsServices.js'

const bottomData = ref({})

onMounted(() => {
  bottomData.value = originsService.getBottomSectionData()
})
</script>