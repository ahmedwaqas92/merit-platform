import originsBackgroundImage from '../../../assets/images/origins-background.png'

export const originsService = {
  // Get Top section data
  getTopSectionData() {
    return {
      title: "Our Origins",
      subtitle: "",
      description: [
        "We started with a simple but powerful belief: talent knows no borders. Time and again, we watched gifted freelancers held back by invisible walls — from payment delays and sky-high platform commissions to saturation in crowded marketplaces and opaque processes that bred distrust. Clients faced their own frustrations: navigating countless profiles, worrying about security, and waiting days (sometimes weeks) for funds to clear.",
        "In those moments, we asked: What if there were a better way? What if we could tear down gatekeepers, cut out hidden fees, and build a system so transparent that every step — from onboarding to payout — felt effortless and fair?"
      ],
      imageUrl: originsBackgroundImage
    }
  },

  // Get Middle section cards data
  getMiddleSectionData() {
    return {
      title: "Why Merit Exists",
      cards: [
        {
          id: 1,
          icon: "public",
          title: "To Smash Geographic Barriers",
          description: "Whether you're in Karachi, Kigali, or Kansas City, Merit connects you directly.",
          detail: "No middlemen, no red tape—just a global stage for your skills.",
          colorClass: "purple-box"
        },
        {
          id: 2,
          icon: "attach_money",
          title: "To Champion Fair Fees",
          description: "Gig economy giants take up to 20% of your earnings. Merit keeps fees at a razor-thin 0.5% for both buyers and freelancers.",
          detail: "More of every dollar stays where it belongs.",
          colorClass: "blue-box"
        },
        {
          id: 3,
          icon: "speed",
          title: "To Speed Up Payments",
          description: "Say goodbye to 1–2 business-day waits. On Solana, payments settle in seconds.",
          detail: "Every transaction is visible on-chain for total peace of mind.",
          colorClass: "teal-box"
        },
        {
          id: 4,
          icon: "verified",
          title: "To Build Trust with NFTs",
          description: "Our Jinnah badges reward dispute-free work with unique on-chain credentials.",
          detail: "Earn the trust you deserve and climb tiers without fear of oversaturation.",
          colorClass: "green-box"
        },
        {
          id: 5,
          icon: "groups",
          title: "To Empower Through Community",
          description: "Merit isn't a faceless corporation—it's a DAO where every stakeholder has a voice.",
          detail: "Shaping our future together.",
          colorClass: "orange-box"
        }
      ]
    }
  },

  // Get Bottom section data
  getBottomSectionData() {
    return {
      title: "Our Commitment",
      subtitle: "",
      description: [
        "Merit was born from the conviction that the future of work should be borderless, transparent, and owned by its community. We're not just building a platform—we're forging a movement that puts people before profit, and possibility before paywalls.",
        "Welcome to Merit. The world's talent marketplace — rewritten."
      ],
      stats: [
        { number: "∞", label: "Borderless Access", subtitle: "No geographic limitations" },
        { number: "100%", label: "Transparent", subtitle: "Open-source & auditable" },
        { number: "Community", label: "Owned", subtitle: "Built by & for talent" },
        { number: "People", label: "Before Profit", subtitle: "Values-driven platform" }
      ]
    }
  },

  // Navigation state management
  navigationState: {
    currentSection: 0,
    totalSections: 3,
    isScrolling: false,
    touchStartY: 0,
    touchEndY: 0
  },

  // Initialize animations (keep your existing method)
  initializeAnimations() {
    // Your existing animation logic here
  },

  // Initialize navigation functionality
  initializeNavigation(container) {
    if (!container) return

    // Reset state
    this.navigationState.currentSection = 0
    this.navigationState.isScrolling = false

    // Add event listeners
    const wheelHandler = this.handleWheel.bind(this)
    const touchStartHandler = this.handleTouchStart.bind(this)
    const touchMoveHandler = this.handleTouchMove.bind(this)
    const keydownHandler = this.handleKeydown.bind(this)

    container.addEventListener('wheel', wheelHandler, { passive: false })
    container.addEventListener('touchstart', touchStartHandler, { passive: true })
    container.addEventListener('touchmove', touchMoveHandler, { passive: false })
    window.addEventListener('keydown', keydownHandler)

    return () => {
      // Cleanup function
      container.removeEventListener('wheel', wheelHandler)
      container.removeEventListener('touchstart', touchStartHandler)
      container.removeEventListener('touchmove', touchMoveHandler)
      window.removeEventListener('keydown', keydownHandler)
    }
  },

  // Get navigation button visibility
  getNavigationVisibility(currentSection, totalSections) {
    return {
      showUp: currentSection > 0,
      showDown: currentSection < totalSections - 1
    }
  },

  // Handle section navigation
  handleSectionNavigation(currentSection, direction, totalSections) {
    if (direction === 'down' && currentSection < totalSections - 1) {
      return currentSection + 1
    } else if (direction === 'up' && currentSection > 0) {
      return currentSection - 1
    }
    return currentSection
  },

  // Handle mouse wheel scrolling
  handleWheel(event) {
    if (this.navigationState.isScrolling) {
      event.preventDefault()
      return
    }
    
    event.preventDefault()
    
    if (event.deltaY > 0) {
      this.navigateToSection('down')
    } else {
      this.navigateToSection('up')
    }
  },

  // Handle touch start for mobile
  handleTouchStart(event) {
    this.navigationState.touchStartY = event.touches[0].clientY
  },

  // Handle touch move for mobile swipe
  handleTouchMove(event) {
    if (this.navigationState.isScrolling) {
      event.preventDefault()
      return
    }
    
    this.navigationState.touchEndY = event.touches[0].clientY
    const touchDiff = this.navigationState.touchStartY - this.navigationState.touchEndY
    
    // Minimum swipe distance to trigger navigation
    if (Math.abs(touchDiff) > 50) {
      event.preventDefault()
      
      if (touchDiff > 0) {
        // Swiped up (navigate down)
        this.navigateToSection('down')
      } else {
        // Swiped down (navigate up)
        this.navigateToSection('up')
      }
    }
  },

  // Handle keyboard navigation
  handleKeydown(event) {
    if (this.navigationState.isScrolling) return
    
    switch (event.key) {
      case 'ArrowDown':
      case ' ':
        event.preventDefault()
        this.navigateToSection('down')
        break
      case 'ArrowUp':
        event.preventDefault()
        this.navigateToSection('up')
        break
    }
  },

  // Navigate to section with direction
  navigateToSection(direction) {
    if (this.navigationState.isScrolling) return this.navigationState.currentSection
    
    const newSection = this.handleSectionNavigation(
      this.navigationState.currentSection,
      direction,
      this.navigationState.totalSections
    )
    
    if (newSection !== this.navigationState.currentSection) {
      this.navigationState.currentSection = newSection
      this.scrollToSectionSmooth(newSection)
      return newSection
    }
    
    return this.navigationState.currentSection
  },

  // Smooth scroll to specific section
  scrollToSectionSmooth(sectionIndex) {
    if (this.navigationState.isScrolling) return
    
    this.navigationState.isScrolling = true
    const sections = document.querySelectorAll('.origins-section')
    
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        this.navigationState.isScrolling = false
      }, 1000)
    }
  },

  // Get current navigation state
  getCurrentSection() {
    return this.navigationState.currentSection
  },

  // Update current section (for external updates)
  updateCurrentSection(sectionIndex) {
    this.navigationState.currentSection = Math.max(0, Math.min(sectionIndex, this.navigationState.totalSections - 1))
    return this.navigationState.currentSection
  }
}