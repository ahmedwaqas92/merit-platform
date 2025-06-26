<template>
  <div class="auth-page">
    <div class="auth-container">
      <!-- Background elements -->
      <div class="auth-background">
        <div class="auth-overlay"></div>
      </div>
      
      <!-- Header with logo -->
      <div class="auth-header">
        <div class="logo-section" @click="goHome">
          <img 
            src="../../../assets/images/merit-logo.png" 
            alt="Merit Logo" 
            class="logo-image"
          />
          <span class="logo-text">Merit</span>
        </div>
      </div>
      
      <!-- Main content -->
      <div class="auth-content">
        <div class="auth-form-container">
          <!-- Toggle buttons -->
          <div class="auth-toggle">
            <button 
              class="toggle-button"
              :class="{ 'active': !isRegisterMode }"
              @click="setLoginMode"
            >
              Login
            </button>
            <button 
              class="toggle-button"
              :class="{ 'active': isRegisterMode }"
              @click="setRegisterMode"
            >
              Register
            </button>
          </div>
          
          <!-- Dynamic form content -->
          <Transition name="form-slide" mode="out-in">
            <LoginForm 
              v-if="!isRegisterMode"
              key="login"
              @switch-to-register="setRegisterMode"
              @login-success="handleLoginSuccess"
            />
            <RegisterForm 
              v-else
              key="register"
              @switch-to-login="setLoginMode"
              @register-success="handleRegisterSuccess"
            />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LoginForm from '../components/loginForm.vue'
import RegisterForm from '../components/registerForm.vue'
import { pageService } from '../services/loginRegisterServices.js'

// Create page state using service
const { router, route, isRegisterMode } = pageService.createPageState()

// Initialize page on mount
onMounted(() => {
  pageService.initializePage(route, isRegisterMode)
})

// Handler methods using service
const setLoginMode = () => pageService.setLoginMode(isRegisterMode, router)
const setRegisterMode = () => pageService.setRegisterMode(isRegisterMode, router)
const goHome = () => pageService.goHome(router)
const handleLoginSuccess = (userData) => pageService.handleLoginSuccess(userData, router)
const handleRegisterSuccess = (userData) => pageService.handleRegisterSuccess(userData, router)
</script>

<style lang="scss">
  @import '../styles/loginRegisterStyles.scss';
</style>