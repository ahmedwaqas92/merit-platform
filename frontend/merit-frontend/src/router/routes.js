const routes = [
  {
    path: '/',
    component: () => import('src/layouts/landingLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('src/features/landing/pages/landingPage.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/features/error/pages/errorPage.vue')
  }
]

export default routes