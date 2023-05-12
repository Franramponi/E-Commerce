import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'
import VendorView from '../views/VendorView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorView
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFoundView
    }
  ]
})

export default router
