export const pricingService = {
  // Get pricing data
  getPricingData() {
    return {
      intro: {
        title: "Transparent Pricing",
        subtitle: "No hidden fees, no surprises—just honest, fair pricing",
        description: "Joining and operating on Merit is 100% free, today and always. No subscription fees, no hidden charges, and no forced KYC—just simple, borderless access to global freelance opportunities."
      },
      transactionFees: {
        buyerFee: "0.5%",
        freelancerFee: "0.5%",
        totalFee: "1%"
      },
      nftFees: {
        badgeFeePerPerson: "$0.02 USD",
        badgesPerJob: 2,
        totalBadgeFees: "$0.04 USD"
      },
      sampleBreakdown: {
        jobValue: "$20.00",
        buyerTotal: "$20.12",
        freelancerNet: "$19.88"
      }
    }
  },

  // Initialize pricing animations
  initializeAnimations() {
    // Add any initialization logic here
  }
}