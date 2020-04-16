import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [  
    {
      path: '/brand',
      name: 'brand',
      component: () => import('../views/Brand.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/local',
      name: 'local',
      component: () => import('../views/Local.vue')
    },
    {
      path: '/lookbook',
      name: 'lookbook',
      component: () => import('../views/Lookbook.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
