import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Partners from './views/Partners.vue';
// import Project from "./views/Project";
import Resources from "./views/Resources";
import Contact from "./views/Contact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: Project
    // },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

  ],
  mode: 'history'
});
