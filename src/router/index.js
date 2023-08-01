import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from "../views/AboutView.vue";
import EventView from '@/views/EventView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event',
      component: EventListView
    },
    {
      path: '/event/123',
      name: 'eventview',
      component: EventView
    }, 
    {
      path: '/event/:id',
      name: 'event-view',
      component: EventView
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')\
      component: AboutView
    }
  ]
})

export default router
