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
              @click="handleMenuClick(item)"
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

const emit = defineEmits(['close-menu'])

const menuItems = menuService.getMenuItems()

const handleMenuClick = (item) => {
  // Handle navigation
  menuService.handleNavigation(item)
  // Close menu
  emit('close-menu')
}
</script>