import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'
import VendorView from '../views/VendorView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import { useLoginStore } from '../stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:tipo?',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: { RequireAuth: true, permLevel: 1 }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { RequireAuth: true, permLevel: 1 }
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorView,
      meta: { RequireAuth: true, permLevel: 2 }
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: NosotrosView
    },
    {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && (!store.isLogin || !store.hasPermission(to.meta.permLevel))) {
    next('/login');
  }
  else {
    next();
  }
})

export default router
