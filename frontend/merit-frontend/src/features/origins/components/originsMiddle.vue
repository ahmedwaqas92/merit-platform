<template>
  <h2 class="middle-section-title">{{ middleData.title }}</h2>
  <div class="cards-grid">
    <div 
      v-for="card in middleData.cards" 
      :key="card.id"
      class="info-card"
      :class="card.colorClass"
    >
      <div class="card-icon">
        <q-icon :name="card.icon" size="2.5rem" />
      </div>
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-description">{{ card.description }}</p>
      <p class="card-detail">{{ card.detail }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { originsService } from '../services/originsServices.js'

const middleData = ref({})

onMounted(() => {
  middleData.value = originsService.getMiddleSectionData()
})
</script>