<template>
  <div class="section-navigation">
    <button 
      v-if="showUpArrow"
      @click="handleNavigate('up')" 
      class="nav-arrow nav-up"
      aria-label="Go to previous section"
    >
      <q-icon name="keyboard_arrow_up" size="2rem" />
    </button>
    <button 
      v-if="showDownArrow"
      @click="handleNavigate('down')" 
      class="nav-arrow nav-down"
      aria-label="Go to next section"
    >
      <q-icon name="keyboard_arrow_down" size="2rem" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { originsService } from '../services/originsServices.js'

const props = defineProps({
  currentSection: {
    type: Number,
    required: true
  },
  totalSections: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['navigate'])

// Computed visibility based on service logic
const navigationVisibility = computed(() => {
  return originsService.getNavigationVisibility(props.currentSection, props.totalSections)
})

const showUpArrow = computed(() => navigationVisibility.value.showUp)
const showDownArrow = computed(() => navigationVisibility.value.showDown)

const handleNavigate = (direction) => {
  emit('navigate', direction)
}
</script>