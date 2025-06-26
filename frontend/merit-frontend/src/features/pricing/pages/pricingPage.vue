<template>
  <div class="pricing-page" :class="{ 'visible': isVisible }">
    <div class="pricing-container">
      <PricingHeader @close="handleClose" />
      
      <div class="pricing-content">
        <div class="pricing-header">
          <h1 class="pricing-title">Transparent Pricing</h1>
          <p class="pricing-subtitle">No hidden fees, no surprises—just honest, fair pricing</p>
        </div>
        
        <div class="pricing-intro">
          <p class="intro-text">
            Joining and operating on Merit is <strong>100% free</strong>, today and always. No subscription fees, no hidden charges, and <strong>no forced KYC</strong>—just simple, borderless access to global freelance opportunities.
          </p>
        </div>
        
        <div class="pricing-sections">
          <!-- Transaction Fees Section -->
          <div class="pricing-section">
            <h2 class="section-title">Transaction Fees</h2>
            <p class="section-description">Merit's transaction fees are razor-thin and fully transparent:</p>
            
            <div class="fee-cards">
              <div class="fee-card buyer-card">
                <div class="fee-icon">
                  <q-icon name="shopping_cart" size="2.5rem" />
                </div>
                <div class="fee-details">
                  <h3 class="fee-title">Buyer Fee</h3>
                  <div class="fee-amount">0.5%</div>
                  <p class="fee-description">of the job value</p>
                </div>
              </div>
              
              <div class="fee-card freelancer-card">
                <div class="fee-icon">
                  <q-icon name="work" size="2.5rem" />
                </div>
                <div class="fee-details">
                  <h3 class="fee-title">Freelancer Fee</h3>
                  <div class="fee-amount">0.5%</div>
                  <p class="fee-description">of the job value</p>
                </div>
              </div>
            </div>
            
            <div class="total-fee-highlight">
              <strong>Total Transaction Fee: 1% (0.5% from each side)</strong>
            </div>
          </div>
          
          <!-- NFT Badge Fees Section -->
          <div class="pricing-section">
            <h2 class="section-title">NFT Badge Minting Fees</h2>
            <p class="section-description">
              Every successful, dispute-free job issues two on-chain Jinnah NFT badges—one for the buyer, one for the freelancer:
            </p>
            
            <div class="nft-fee-grid">
              <div class="nft-fee-item">
                <div class="nft-icon">
                  <q-icon name="verified" size="2rem" />
                </div>
                <div class="nft-info">
                  <h4>Badge Fee (per person)</h4>
                  <span class="nft-amount">$0.02 USD</span>
                  <p class="nft-note">(covers Solana gas + artwork/service markup)</p>
                </div>
              </div>
              
              <div class="nft-fee-item">
                <div class="nft-icon">
                  <q-icon name="groups" size="2rem" />
                </div>
                <div class="nft-info">
                  <h4>Badges per Job</h4>
                  <span class="nft-amount">2</span>
                  <p class="nft-note">One for buyer, one for freelancer</p>
                </div>
              </div>
              
              <div class="nft-fee-total">
                <h4>Total Badge Fees</h4>
                <div class="calculation">$0.02 × 2 = <strong>$0.04 USD</strong></div>
              </div>
            </div>
          </div>
          
          <!-- Sample Cost Breakdown -->
          <div class="pricing-section">
            <h2 class="section-title">Sample Cost Breakdown for a $20 Job</h2>
            
            <div class="breakdown-table">
              <div class="breakdown-header">
                <div class="party-col">Party</div>
                <div class="description-col">Fee Description</div>
                <div class="amount-col">Amount</div>
              </div>
              
              <!-- Buyer Section -->
              <div class="breakdown-group buyer-group">
                <div class="breakdown-row primary">
                  <div class="party-col buyer-label">Buyer Pays</div>
                  <div class="description-col">Job value</div>
                  <div class="amount-col">$20.00</div>
                </div>
                <div class="breakdown-row">
                  <div class="party-col"></div>
                  <div class="description-col">Buyer Fee (0.5%)</div>
                  <div class="amount-col">$0.10</div>
                </div>
                <div class="breakdown-row">
                  <div class="party-col"></div>
                  <div class="description-col">Buyer Badge Fee</div>
                  <div class="amount-col">$0.02</div>
                </div>
                <div class="breakdown-row total">
                  <div class="party-col buyer-total">Buyer Total</div>
                  <div class="description-col"></div>
                  <div class="amount-col total-amount">$20.12</div>
                </div>
              </div>
              
              <!-- Freelancer Section -->
              <div class="breakdown-group freelancer-group">
                <div class="breakdown-row primary">
                  <div class="party-col freelancer-label">Freelancer Receives</div>
                  <div class="description-col">Job payout</div>
                  <div class="amount-col">$20.00</div>
                </div>
                <div class="breakdown-row deduction">
                  <div class="party-col">less</div>
                  <div class="description-col">Freelancer Fee (0.5%)</div>
                  <div class="amount-col">-$0.10</div>
                </div>
                <div class="breakdown-row deduction">
                  <div class="party-col">less</div>
                  <div class="description-col">Freelancer Badge Fee</div>
                  <div class="amount-col">-$0.02</div>
                </div>
                <div class="breakdown-row total">
                  <div class="party-col freelancer-total">Freelancer Net</div>
                  <div class="description-col"></div>
                  <div class="amount-col total-amount">$19.88</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pricing-footer">
          <p>Simple, transparent, and fair—that's the Merit way.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PricingHeader from '../components/pricingHeader.vue'
import { pricingService } from '../services/pricingServices.js'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const router = useRouter()

const pricingData = ref([])

// Load pricing data
pricingData.value = pricingService.getPricingData()

const handleClose = () => {
  emit('close')
  router.push('/')
}
</script>

<style lang="scss">
  @import '../styles/pricingStyles.scss';
</style>