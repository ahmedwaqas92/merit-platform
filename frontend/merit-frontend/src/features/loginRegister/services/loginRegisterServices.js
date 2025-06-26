import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export const authService = {
  // Initialize authentication services
  initializeAuth() {
    console.log('Initializing authentication services...')
    // Initialize Google OAuth
    this.initializeGoogle()
    // Initialize LinkedIn OAuth
    this.initializeLinkedIn()
  },

  // Initialize Google OAuth
  initializeGoogle() {
    // Load Google OAuth script
    if (!window.google) {
      const script = document.createElement('script')
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  },

  // Initialize LinkedIn OAuth
  initializeLinkedIn() {
    // Load LinkedIn OAuth script if needed
    console.log('LinkedIn OAuth initialized')
  },

  // Google authentication methods
  async loginWithGoogle() {
    try {
      // Simulate Google OAuth flow
      console.log('Initiating Google login...')
      
      // In real implementation, use Google OAuth
      return new Promise((resolve) => {
        setTimeout(() => {
          // Mock successful login
          resolve({
            provider: 'google',
            user: {
              id: 'google_123',
              email: 'user@gmail.com',
              name: 'John Doe',
              avatar: 'https://via.placeholder.com/100'
            },
            token: 'mock_google_token'
          })
        }, 1500)
      })
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  },

  async registerWithGoogle() {
    try {
      console.log('Initiating Google registration...')
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            provider: 'google',
            user: {
              id: 'google_new_123',
              email: 'newuser@gmail.com',
              name: 'Jane Doe',
              avatar: 'https://via.placeholder.com/100'
            },
            token: 'mock_google_register_token'
          })
        }, 1500)
      })
    } catch (error) {
      console.error('Google registration error:', error)
      throw error
    }
  },

  // LinkedIn authentication methods
  async loginWithLinkedIn() {
    try {
      console.log('Initiating LinkedIn login...')
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            provider: 'linkedin',
            user: {
              id: 'linkedin_123',
              email: 'user@company.com',
              name: 'John Professional',
              avatar: 'https://via.placeholder.com/100'
            },
            token: 'mock_linkedin_token'
          })
        }, 1500)
      })
    } catch (error) {
      console.error('LinkedIn login error:', error)
      throw error
    }
  },

  async registerWithLinkedIn() {
    try {
      console.log('Initiating LinkedIn registration...')
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            provider: 'linkedin',
            user: {
              id: 'linkedin_new_123',
              email: 'newpro@company.com',
              name: 'Jane Professional',
              avatar: 'https://via.placeholder.com/100'
            },
            token: 'mock_linkedin_register_token'
          })
        }, 1500)
      })
    } catch (error) {
      console.error('LinkedIn registration error:', error)
      throw error
    }
  },

  // Email authentication methods
  async loginWithEmail(loginData) {
    try {
      console.log('Logging in with email:', loginData.email)
      
      // Validate email format
      if (!this.validateEmail(loginData.email)) {
        throw new Error('Invalid email format')
      }
      
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock validation
          if (loginData.email === 'test@merit.com' && loginData.password === 'password123') {
            resolve({
              provider: 'email',
              user: {
                id: 'email_123',
                email: loginData.email,
                name: 'Test User',
                avatar: null
              },
              token: 'mock_email_token',
              rememberMe: loginData.rememberMe
            })
          } else {
            reject(new Error('Invalid credentials'))
          }
        }, 1000)
      })
    } catch (error) {
      console.error('Email login error:', error)
      throw error
    }
  },

  async registerWithEmail(registerData) {
    try {
      console.log('Registering with email:', registerData.email)
      
      // Validate form data
      const validation = this.validateRegistrationData(registerData)
      if (!validation.isValid) {
        throw new Error(validation.error)
      }
      
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          // Mock successful registration
          resolve({
            provider: 'email',
            user: {
              id: 'email_new_123',
              email: registerData.email,
              name: `${registerData.firstName} ${registerData.lastName}`,
              firstName: registerData.firstName,
              lastName: registerData.lastName,
              avatar: null
            },
            token: 'mock_email_register_token',
            subscribeNewsletter: registerData.subscribeNewsletter
          })
        }, 1500)
      })
    } catch (error) {
      console.error('Email registration error:', error)
      throw error
    }
  },

  // Validation methods
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  validateRegistrationData(data) {
    if (!data.firstName || data.firstName.length < 2) {
      return { isValid: false, error: 'First name must be at least 2 characters' }
    }
    
    if (!data.lastName || data.lastName.length < 2) {
      return { isValid: false, error: 'Last name must be at least 2 characters' }
    }
    
    if (!this.validateEmail(data.email)) {
      return { isValid: false, error: 'Invalid email format' }
    }
    
    if (!data.password || data.password.length < 8) {
      return { isValid: false, error: 'Password must be at least 8 characters' }
    }
    
    if (data.password !== data.confirmPassword) {
      return { isValid: false, error: 'Passwords do not match' }
    }
    
    if (!data.agreeToLegal) {
      return { isValid: false, error: 'You must agree to the Terms of Service and Privacy Policy' }
    }
    
    return { isValid: true }
  },

  // Password strength calculator
  calculatePasswordStrength(password) {
    if (!password) {
      return { level: 'weak', percentage: 0, text: '' }
    }
    
    let score = 0
    
    // Length check
    if (password.length >= 8) score += 20
    if (password.length >= 12) score += 10
    
    // Character variety checks
    if (/[a-z]/.test(password)) score += 15
    if (/[A-Z]/.test(password)) score += 15
    if (/[0-9]/.test(password)) score += 15
    if (/[^A-Za-z0-9]/.test(password)) score += 15
    
    // Bonus for good length
    if (password.length >= 16) score += 10
    
    // Determine level and text
    let level, text
    if (score < 30) {
      level = 'weak'
      text = 'Weak'
    } else if (score < 60) {
      level = 'medium'
      text = 'Fair'
    } else if (score < 80) {
      level = 'good'
      text = 'Good'
    } else {
      level = 'strong'
      text = 'Strong'
    }
    
    return {
      level,
      percentage: Math.min(score, 100),
      text
    }
  },

  // Session management
  saveSession(userData) {
    localStorage.setItem('merit_session', JSON.stringify(userData))
  },

  getSession() {
    const session = localStorage.getItem('merit_session')
    return session ? JSON.parse(session) : null
  },

  clearSession() {
    localStorage.removeItem('merit_session')
  },

  // Check if user is authenticated
  isAuthenticated() {
    const session = this.getSession()
    return session && session.token
  }
}

// Login Form Service
export const loginFormService = {
  // Create reactive state for login form
  createLoginState() {
    const isLoading = ref(false)
    const showPassword = ref(false)
    
    const loginData = ref({
      email: '',
      password: '',
      rememberMe: false
    })
    
    const isFormValid = computed(() => {
      return loginData.value.email && 
             loginData.value.password && 
             loginData.value.email.includes('@')
    })
    
    return {
      isLoading,
      showPassword,
      loginData,
      isFormValid
    }
  },

  // Handle Google login
  async handleGoogleLogin(isLoading) {
    isLoading.value = true
    try {
      const result = await authService.loginWithGoogle()
      console.log('Google login result:', result)
      return result
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  },

  // Handle LinkedIn login
  async handleLinkedInLogin(isLoading) {
    isLoading.value = true
    try {
      const result = await authService.loginWithLinkedIn()
      console.log('LinkedIn login result:', result)
      return result
    } catch (error) {
      console.error('LinkedIn login error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  },

  // Handle email login
  async handleEmailLogin(loginData, isLoading) {
    isLoading.value = true
    try {
      const result = await authService.loginWithEmail(loginData.value)
      console.log('Email login result:', result)
      return result
    } catch (error) {
      console.error('Email login error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  },

  // Handle forgot password
  handleForgotPassword() {
    console.log('Forgot password clicked')
    // Handle forgot password logic here
  }
}

// Register Form Service
export const registerFormService = {
  // Create reactive state for register form
  createRegisterState() {
    const isLoading = ref(false)
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    
    const registerData = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToLegal: false,
      subscribeNewsletter: false
    })
    
    const passwordStrength = ref({
      level: 'weak',
      percentage: 0,
      text: ''
    })
    
    const isFormValid = computed(() => {
      return registerData.value.firstName &&
             registerData.value.lastName &&
             registerData.value.email && 
             registerData.value.email.includes('@') &&
             registerData.value.password &&
             registerData.value.confirmPassword &&
             registerData.value.password === registerData.value.confirmPassword &&
             registerData.value.agreeToLegal
    })
    
    return {
      isLoading,
      showPassword,
      showConfirmPassword,
      registerData,
      passwordStrength,
      isFormValid
    }
  },

  // Validate password and update strength
  validatePassword(password, passwordStrength) {
    const strength = authService.calculatePasswordStrength(password)
    passwordStrength.value = strength
  },

  // Handle Google registration
  async handleGoogleRegister(isLoading) {
    isLoading.value = true
    try {
      const result = await authService.registerWithGoogle()
      console.log('Google register result:', result)
      return result
    } catch (error) {
      console.error('Google register error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  },

  // Handle LinkedIn registration
  async handleLinkedInRegister(isLoading) {
    isLoading.value = true
    try {
      const result = await authService.registerWithLinkedIn()
      console.log('LinkedIn register result:', result)
      return result
    } catch (error) {
      console.error('LinkedIn register error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  },

  // Handle email registration
  async handleEmailRegister(registerData, isLoading, isFormValid) {
    if (!isFormValid.value) return
    
    isLoading.value = true
    try {
      const result = await authService.registerWithEmail(registerData.value)
      console.log('Email register result:', result)
      return result
    } catch (error) {
      console.error('Email register error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }
}

// Page Service for loginRegisterPage
export const pageService = {
  // Create page state
  createPageState() {
    const router = useRouter()
    const route = useRoute()
    const isRegisterMode = ref(false)
    
    return {
      router,
      route,
      isRegisterMode
    }
  },

  // Initialize page
  initializePage(route, isRegisterMode) {
    // Check route to determine initial mode
    if (route.path.includes('register')) {
      isRegisterMode.value = true
    }
    
    // Initialize auth services
    authService.initializeAuth()
  },

  // Set login mode
  setLoginMode(isRegisterMode, router) {
    isRegisterMode.value = false
    router.push('/login')
  },

  // Set register mode
  setRegisterMode(isRegisterMode, router) {
    isRegisterMode.value = true
    router.push('/register')
  },

  // Go to home
  goHome(router) {
    router.push('/')
  },

  // Handle login success
  handleLoginSuccess(userData, router) {
    console.log('Login successful:', userData)
    // Handle successful login - redirect to dashboard/home
    router.push('/dashboard') // or wherever you want to redirect
  },

  // Handle register success
  handleRegisterSuccess(userData, router) {
    console.log('Registration successful:', userData)
    // Handle successful registration
    router.push('/dashboard') // or wherever you want to redirect
  }
}