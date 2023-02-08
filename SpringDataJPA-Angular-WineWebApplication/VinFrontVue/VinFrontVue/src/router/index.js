import Vue from 'vue';
import { createRouter } from 'vue-router';
import App from '../src/App.vue'
const About = { template: '@/views/About.vue' }

const routes = [
    { path: '/', name : 'Home',component: App },
    { path: '/about', component: About },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router


  const app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  app.mount('#app')
  