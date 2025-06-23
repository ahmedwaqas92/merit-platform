<template>
  <!-- Overlay -->
  <div 
    v-if="isOpen"
    class="menu-overlay"
    @click="$emit('close-menu')"
  ></div>

  <!-- Right slide panel -->
  <div 
    class="menu-panel"
    :class="{ 'is-open': isOpen }"
  >
    <div class="menu-content">
      <!-- Close button -->
      <button 
        class="close-button"
        @click="$emit('close-menu')"
      >
        <q-icon name="close" size="md" />
      </button>

      <!-- Navigation menu -->
      <nav class="menu-nav">
        <ul class="menu-list">
          <li 
            v-for="item in menuItems" 
            :key="item.id"
            class="menu-item"
          >
            <a 
              :href="item.url" 
              @click="handleMenuClick(item, $event)"
              class="menu-link"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { menuService } from '../services/landingServices.js'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-menu', 'show-merit', 'show-origins'])

const menuItems = menuService.getMenuItems()

const handleMenuClick = (item, event) => {
  event.preventDefault()
  
  // Handle navigation with callback
  menuService.handleNavigation(item, (action) => {
    if (action === 'show-merit') {
      emit('show-merit')
    } else if (action === 'show-origins') {
      emit('show-origins')
    }
  })
  
  // Close menu
  emit('close-menu')
}
</script>