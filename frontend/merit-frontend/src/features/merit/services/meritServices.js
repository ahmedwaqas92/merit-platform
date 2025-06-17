export const meritService = {
  // Get Hero section data
  getHeroData() {
    return {
      title: "What is Merit?",
      description: [
        "Merit is a revolutionary Web3 platform powered by Solana’s blazing-fast blockchain, breaking down geographical barriers for freelancers and clients worldwide. By leveraging Solana’s ultra-low fees and lightning-speed finality, Merit ensures secure, transparent, and instant transactions across borders.",
        "Our platform empowers freelancers to work without boundaries while giving clients direct access to global talent pools, all backed by trustless smart contracts and decentralized governance."
      ]
    }
  },

  // Get Features data - Updated with detailed info
  getFeatures() {
    return [
      {
        id: 1,
        icon: "account_balance_wallet",
        title: "Signup & Wallet Onboarding",
        description: "Instantly connect your Solana wallet—or let Merit generate one for you—so you can start right away without lengthy sign-ups.",
        detail: "Seamless wallet integration means you’re set up in seconds, with secure key management and zero friction.",
        colorClass: "purple-box"
      },
      {
        id: 2,
        icon: "payments",
        title: "Tiered Funding & AI Matching",
        description: "Fund your account to post jobs or apply as a Freelancer. Our tiered system and AI-driven rotation ensure every freelancer gets a fair shot.",
        detail: "Smart algorithms balance visibility across tiers, preventing oversaturation and keeping opportunities flowing.",
        colorClass: "blue-box"
      },
      {
        id: 3,
        icon: "stars",
        title: "Jinnah NFT Rewards",
        description: "Deliver dispute-free work and earn exclusive Jinnah NFTs that boost your tier and unlock perks.",
        detail: "Experience near-zero fees and instant Solana transfers—fully open-source and transparently governed.",
        colorClass: "teal-box"
      }
    ]
  },

  // Handle page animations
  initializeAnimations() {
    return {
      fadeIn: 'merit-fade-in',
      slideUp: 'merit-slide-up'
    }
  },

  // Handle section transitions
  handleSectionTransition(direction = 'in') {
    return direction === 'in' ? 'slide-in' : 'slide-out'
  }
}