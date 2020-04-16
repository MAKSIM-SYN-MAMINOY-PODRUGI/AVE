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
      meta: {layout: 'main'},
      component: () => import('../views/Brand.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'empty'},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/local',
      name: 'local',
      meta: {layout: 'main'},
      component: () => import('../views/Local.vue')
    },
    {
      path: '/lookbook',
      name: 'lookbook',
      meta: {layout: 'main'},
      component: () => import('../views/Lookbook.vue')
    },
    {
      // path: '/product/:id',
      path: '/product',
      name: 'product',
      meta: {layout: 'main'},
      component: () => import('../views/Product.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'main'},
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
