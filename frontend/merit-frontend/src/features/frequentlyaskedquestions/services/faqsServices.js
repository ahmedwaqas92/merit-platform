export const faqsService = {
  // Get FAQ data
  getFaqsData() {
    return [
      {
        id: 1,
        question: "What is Merit and how is it different from other freelance platforms?",
        answer: "Merit is a Web3 freelancing marketplace built on Solana. We break down borders so you can work or hire anywhere in the world, with super-low 0.5% fees, instant payments, and transparent smart contracts—no hidden commissions, no delays."
      },
      {
        id: 2,
        question: "Do I need a crypto wallet to use Merit?",
        answer: {
          main: "You have two easy options:",
          points: [
            { title: "Connect your own Solana wallet", text: "(e.g. Phantom) in one click." },
            { title: "Let Merit create a wallet for you", text: "automatically—no crypto experience needed." }
          ],
          conclusion: "Either way, you'll be up and running in under five minutes."
        }
      },
      {
        id: 3,
        question: "How do I post or apply for a job?",
        answer: {
          steps: [
            { title: "Fund your account", description: "with SOL (via exchange withdrawal, in-app on-ramp, or P2P)." },
            { title: "Choose your tier", description: "to post a job or apply." },
            { title: "Our AI rotation", description: "ensures fair visibility—no one gets lost in the crowd." }
          ]
        }
      },
      {
        id: 4,
        question: "How fast will I get paid?",
        answer: "Thanks to Solana's lightning-speed finality, payments settle in seconds, not days. No more 1–2 business-day waits—your funds appear almost instantly."
      },
      {
        id: 5,
        question: "What fees does Merit charge?",
        answer: {
          points: [
            "0.5% of the transaction value from buyers",
            "0.5% from freelancers"
          ],
          conclusion: "We keep fees razor-thin so more money goes into your pocket."
        }
      },
      {
        id: 6,
        question: "What are Jinnah NFTs and why do they matter?",
        answer: {
          main: "Complete work without disputes and earn exclusive Jinnah NFTs. These badges:",
          points: [
            "Elevate your tier for more job visibility",
            "Serve as verifiable on-chain proof of your reliability",
            "Come with a small mint-fee markup to cover art generation"
          ]
        }
      },
      {
        id: 7,
        question: "What happens if there's a dispute?",
        answer: {
          main: "If a job is disputed:",
          points: [
            "Platform fees jump to 5% to cover mediation costs",
            "No NFTs are minted"
          ],
          conclusion: "Our goal is to resolve issues fairly—and reward flawless work."
        }
      },
      {
        id: 8,
        question: "How does escrow protect me?",
        answer: {
          main: "All payments go into a smart-contract escrow until work is approved. This ensures:",
          points: [
            "Freelancers know funds are reserved",
            "Buyers only release payments when they're satisfied"
          ]
        }
      },
      {
        id: 9,
        question: "Can I see my balance in USD?",
        answer: "Yes—once you connect your wallet, Merit fetches your SOL balance and converts it in real time so you always know its USD equivalent."
      },
      {
        id: 10,
        question: "How do I withdraw my earnings?",
        answer: {
          main: "Withdraw to any exchange that supports Solana:",
          steps: [
            { title: "Copy your exchange's SOL deposit address", description: "" },
            { title: "From your Merit wallet, send your SOL", description: "" },
            { title: "Cash out to fiat", description: "via the exchange's standard withdrawal flow" }
          ]
        }
      }
    ]
  },

  // Initialize FAQ animations
  initializeAnimations() {
    // Add any initialization logic here
  }
}