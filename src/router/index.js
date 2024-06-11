import { createRouter, createWebHistory } from 'vue-router'

import BookLinkView from '../views/BookLinkView.vue'
import BookUpdateView from '../views/BookUpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'book-link',
      component: BookLinkView
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BookUpdateView
    },
    {
      path: '/book/edit/:id',
      name: 'book-edit',
      component: BookUpdateView
    }
  ]
})

export default router
