import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secondary from './views/Secondary.vue';
import Project from "./views/Project";
import Resources from "./views/Resources";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/secondary',
      name: 'secondary',
      component: Secondary
    },{
      path: '/project',
      name: 'project',
      component: Project
    },{
      path: '/resources',
      name: 'resources',
      component: Resources
    },

  ],
  mode: 'history'
});
