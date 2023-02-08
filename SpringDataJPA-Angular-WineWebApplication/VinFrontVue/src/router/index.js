import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import MaHome from '@/views/MaHome.vue'
import MaAbout from '@/views/MaAbout.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MaHome
    },
    {
      path: '/about',
      component: MaAbout
    }
  ] 
})
export default router

