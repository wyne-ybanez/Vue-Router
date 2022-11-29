import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    /**
     * route level code-splitting
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     * component: () => import(/* webpackChunkName: "about"... '../views/About.vue')
    */
  },
  {
    path: '/jobs/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

// This is what allows us to go forwards and back with our browsers
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
