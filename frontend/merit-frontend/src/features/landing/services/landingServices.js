export const menuService = {
  // Toggle menu open/close
  toggleMenu(currentState) {
    return !currentState
  },

  // Close menu
  closeMenu() {
    return false
  },

  // Toggle hamburger animation
  toggleHamburger(currentState) {
    return !currentState
  },

  // Get menu items - Updated with your specific pages
  getMenuItems() {
    return [
      { id: 1, label: 'Merit', url: '#merit', type: 'link' },
      { id: 2, label: 'Origins', url: '#origins', type: 'link' },
      { id: 3, label: 'Value Plans', url: '#value-plans', type: 'link' },
      { id: 4, label: 'Reach Out', url: '#reach-out', type: 'link' }
    ]
  },

  // Handle menu item navigation
  handleNavigation(item) {
    if (item.type === 'route') {
      return { type: 'route', url: item.url }
    } else {
      // Handle anchor link - smooth scroll to section
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
      return { type: 'link', url: item.url }
    }
  },

  // Scroll to section (can be used directly)
  scrollToSection(sectionId) {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}