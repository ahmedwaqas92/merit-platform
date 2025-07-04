export const landingService = {
  // Initialize viewport settings
  initializeViewport() {
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no'
    }
  },

  // Check if PWA
  isPWA() {
    return window.navigator.standalone === true || 
           window.matchMedia('(display-mode: standalone)').matches
  },

  // Check if iOS
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  },

  initializePage(showHero) {
    this.initializeViewport()
    
    setTimeout(() => {
      showHero.value = true
    }, 500)
  },

  // Handle Get Started button click
  handleGetStarted(router) {
    console.log('Get Started clicked!')
    if (router) {
      router.push('/login')
    } else {
      // Fallback for direct navigation
      window.location.href = '/login'
    }
  }
}


export const routeService = {
  // Handle route changes and Merit section visibility
  handleRouteChange(newPath, 
                    isMeritVisible, 
                    showMeritCallback, 
                    closeMeritCallback, 
                    isOriginsVisible, 
                    showOriginsCallback, 
                    closeOriginsCallback,
                    isFaqsVisible,
                    showFaqsCallback,
                    closeFaqsCallback,
                    isPricingVisible,
                    showPricingCallback,
                    closePricingCallback) {
    if (newPath === '/merit' && !isMeritVisible.value) {
      showMeritCallback()
    } else if (newPath === '/origins' && !isOriginsVisible.value) {
      showOriginsCallback()
    } else if (newPath === '/faqs' && !isFaqsVisible.value) {
      showFaqsCallback()
    } else if (newPath === '/pricing' && !isPricingVisible.value) {
      showPricingCallback() 
    } else if (newPath === '/' && (isMeritVisible.value || isOriginsVisible.value || isFaqsVisible.value || isPricingVisible.value)) {
      closeMeritCallback()
      closeOriginsCallback()
      closeFaqsCallback()
      closePricingCallback()
    }
  },

  // Show Merit section
  showMeritSection(isMeritVisible, router, route) {
    isMeritVisible.value = true
    if (route.path !== '/merit') {
      router.push('/merit')
    }
  },

  // Close Merit section
  closeMeritSection(isMeritVisible, router, route) {
    isMeritVisible.value = false
    if (route.path !== '/') {
      router.push('/')
    }
  },

  // Show Origins section
  showOriginsSection(isOriginsVisible, router, route) {
    isOriginsVisible.value = true
    if (route && route.path !== '/origins') {
      router.push('/origins')
    }
  },

  // Close Origins section
  closeOriginsSection(isOriginsVisible, router, route) {
    isOriginsVisible.value = false
    if (route && route.path !== '/') {
      router.push('/')
    }
  },

  showFaqsSection(isFaqsVisible, router, route) {
    isFaqsVisible.value = true
    if (route && route.path !== '/faqs') {
      router.push('/faqs')
    }
  },

  closeFaqsSection(isFaqsVisible, router, route) {
    isFaqsVisible.value = false
    if (route && route.path !== '/') {
      router.push('/')
    }
  },

  showPricingSection(isPricingVisible, router, route) {
    isPricingVisible.value = true
    if (route && route.path !== '/pricing') {
      router.push('/pricing')
    }
  },

  closePricingSection(isPricingVisible, router, route) {
    isPricingVisible.value = false
    if (route && route.path !== '/') {
      router.push('/')
    }
  },
}


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
      { id: 3, label: 'FAQs', url: '#faqs', type: 'link' },
      { id: 4, label: 'Pricing', url: '#pricing', type: 'link' }
    ]
  },

  // Handle menu item navigation
  handleNavigation(item, callback) {
    if (item.label === 'Merit' && callback) {
      callback('show-merit')
      return { type: 'section', section: 'merit' }
    } else if (item.label === 'Origins' && callback) {
      callback('show-origins')
      return { type: 'section', section: 'origins' }
    } else if (item.label === 'FAQs' && callback) {
      callback('show-faqs') // Add this
      return { type: 'section', section: 'faqs' }
    } else if (item.label === 'Pricing' && callback) {
      callback('show-pricing') // Add this
      return { type: 'section', section: 'pricings' }
    } else if (item.type === 'link') {
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