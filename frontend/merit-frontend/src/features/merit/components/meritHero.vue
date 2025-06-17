<template>
  <div class="merit-hero">
    <h2 class="merit-title">{{ heroData.title }}</h2>
    <div class="merit-description">
      <p v-for="(paragraph, index) in heroData.description" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { meritService } from '../services/meritServices.js'

const heroData = ref({})

onMounted(() => {
  heroData.value = meritService.getHeroData()
})
</script>