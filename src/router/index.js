import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage.vue";
import ProjectView from "@/views/ProjectView";
import ContactView from '../views/ContactView.vue'
import PartnersView from '../views/PartnersView.vue'
import ResourcesView from '../views/ResourcesView.vue'


export const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  {
    path: '/partners',
    name: 'Partners',
    component: PartnersView
  },
  {
    path: '/resources',
    name: 'Resources',
    component: ResourcesView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
