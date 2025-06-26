const routes = [
  {
    path: '/',
    component: () => import('src/layouts/landingLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('src/features/landing/pages/landingPage.vue') 
      },
      { 
        path: 'merit', 
        component: () => import('src/features/landing/pages/landingPage.vue') 
      },
      { 
        path: 'origins', 
        component: () => import('src/features/landing/pages/landingPage.vue') 
      },
      { 
        path: 'faqs', 
        component: () => import('src/features/landing/pages/landingPage.vue')
      },
      { 
        path: 'pricing', 
        component: () => import('src/features/landing/pages/landingPage.vue')
      }
    ]
  },

   // Authentication routes
  {
    path: '/login',
    component: () => import('src/features/loginRegister/pages/loginRegisterPage.vue')
  },
  {
    path: '/register',
    component: () => import('src/features/loginRegister/pages/loginRegisterPage.vue')
  },

  // Protected routes (add later)
  // {
  //   path: '/dashboard',
  //   component: () => import('src/features/dashboard/pages/dashboardPage.vue'), // Create this later
  //   meta: { requiresAuth: true }
  // },


  {
    path: '/:catchAll(.*)*',
    component: () => import('src/features/error/pages/errorPage.vue')
  }
]

export default routes