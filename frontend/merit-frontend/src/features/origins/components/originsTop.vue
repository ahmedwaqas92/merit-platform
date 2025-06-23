<template>
  <div class="origins-image-container">
    <img 
      :src="topData.imageUrl" 
      alt="Origins Background"
      class="origins-background-image"
    />
    <div class="origins-image-overlay"></div>
  </div>
  
  <div class="origins-content">
    <h1 class="origins-title">{{ topData.title }}</h1>
    <h2 class="origins-subtitle">{{ topData.subtitle }}</h2>
    <div class="origins-description">
      <p v-for="(paragraph, index) in topData.description" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { originsService } from '../services/originsServices.js'

const topData = ref({})

onMounted(() => {
  topData.value = originsService.getTopSectionData()
})
</script>