import { createRouter, createWebHistory } from 'vue-router'
// import ProductDetails from '@/components/ProductDetails.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/card',
    //   name: 'card',
    //   component: () => import('../views/Card.vue'),
    // },
    {
      path: '/',
      name: 'home',
      // component: HomeView.vue,
      component: () => import('../views/HomeView.vue'),
      // component: () => import('../'),

    },
    // {
    //   path: '/buynow/:id',  // dynamic route 
    //   name: 'buynow',
    //   component: () => import('../views/BuyNow.vue'),
    // },
    {
      path: '/header',
      name: 'header',
      component: () => import('../views/Header.vue'),
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import('../views/Hero.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/all-product',
      name: 'allproduct',
      component: () => import('../views/All-Product.vue'),
    },
    {
      path: '/i-phone',
      name: 'iphone',
      component: () => import('../views/I-Phone.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../views/Footer.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },


    {
      path: '/product/:index',
      name: 'ProductDetails',
      component: () => import('@/views/ProductDetails.vue')
}
  ],
})

export default router
