import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import MaHome from '@/views/MaHome.vue'
import MaAbout from '@/views/MaAbout.vue'
import MesVins from '@/views/MesVins.vue'
import MaProducteurs from '@/views/MaProducteurs.vue'
import MaConnexion from '@/views/MaConnexion.vue'
import MonInscription from '@/views/MonInscription.vue'
import MaCarte from '@/views/ViewCarte.vue'
import Profile from '@/views/Profile.vue'
import VinsProducteurs from '@/views/VinsProducteurs.vue'


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
    },
    {
      path: '/vins',
      component: MesVins
    },
    {
      path: '/producteurs',
      component: MaProducteurs
    },
    {
      path: '/connexion',
      component: MaConnexion
    },
    {
      path: '/inscription',
      component: MonInscription
    },
    {
      path: '/carte',
      component: MaCarte
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/vinsproducteurs',
      component: VinsProducteurs
    }
  ] 
})
export default router

