import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '@/views/BookListView.vue'
import DonateView from '../views/DonateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonateView
    },
    {
      path: '/bookList',
      name: 'BookList',
      component: BookListView
    },
  ]
})

export default router
