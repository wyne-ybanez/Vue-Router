import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from "../views/jobs/JobDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    /**
     * EXPLANATION:
     * route level code-splitting
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     *
     * component: () => import(/* webpackChunkName: "about"... '../views/About.vue')
     */
  },
  {
    path: "/jobs/",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    /**
     * When we link to a specific component, vue attaches the parameter as a prop to the component.
     * We can just accept it as a prop and we don't need to specify it in the Data object.
    */
    props: true,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
];

// This is what allows us to go forwards and back with our browsers
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
