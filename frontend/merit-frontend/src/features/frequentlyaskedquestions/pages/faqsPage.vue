<template>
  <div class="faqs-page" :class="{ 'visible': isVisible }">
    <div class="faqs-container">
      <FaqsHeader @close="handleClose" />
      
      <div class="faqs-content">
        <div class="faqs-header">
          <h1 class="faqs-title">Frequently Asked Questions</h1>
          <p class="faqs-subtitle">Everything you need to know about Merit</p>
        </div>
        
        <div class="faqs-list">
          <div 
            v-for="faq in faqsData" 
            :key="faq.id"
            class="faq-item"
            :class="{ 'expanded': expandedItems.includes(faq.id) }"
          >
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <h3 class="question-text">{{ faq.question }}</h3>
              <div class="toggle-icon">
                <q-icon 
                  :name="expandedItems.includes(faq.id) ? 'remove' : 'add'" 
                  size="1.5rem" 
                />
              </div>
            </div>
            
            <div class="faq-answer" :class="{ 'show': expandedItems.includes(faq.id) }">
              <div class="answer-content">
                <div v-if="typeof faq.answer === 'string'" class="answer-text">
                  {{ faq.answer }}
                </div>
                <div v-else class="answer-complex">
                  <p v-if="faq.answer.main" class="main-answer">{{ faq.answer.main }}</p>
                  <ul v-if="faq.answer.points" class="answer-points">
                    <li v-for="(point, index) in faq.answer.points" :key="index">
                      <strong v-if="point.title">{{ point.title }}</strong>
                      {{ point.text || point }}
                    </li>
                  </ul>
                  <div v-if="faq.answer.steps" class="answer-steps">
                    <ol>
                      <li v-for="(step, index) in faq.answer.steps" :key="index">
                        <strong>{{ step.title }}</strong> {{ step.description }}
                      </li>
                    </ol>
                  </div>
                  <p v-if="faq.answer.conclusion" class="answer-conclusion">{{ faq.answer.conclusion }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="faqs-footer">
          <p>If you have more questions, just reach out—Merit's community and support are here to help!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FaqsHeader from '../components/faqsHeader.vue'
import { faqsService } from '../services/faqsServices.js'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const router = useRouter()

const expandedItems = ref([])
const faqsData = ref([])

// Load FAQ data
faqsData.value = faqsService.getFaqsData()

const toggleFaq = (faqId) => {
  const index = expandedItems.value.indexOf(faqId)
  if (index > -1) {
    expandedItems.value.splice(index, 1)
  } else {
    expandedItems.value.push(faqId)
  }
}

const handleClose = () => {
  emit('close')
  router.push('/')
}
</script>

<style lang="scss">
  @import '../styles/faqsStyles.scss';
</style>