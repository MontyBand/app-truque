import Vue from 'vue'
import Router from 'vue-router'
import PageMenuInicio from '@/components/pages/menu-inicio'
import PageInicioJugar from '@/components/pages/inicio-jugar'
import PageInicioPerfil from '@/components/pages/inicio-perfil'
import PageInicioAyuda from '@/components/pages/inicio-ayuda'
import PageAyudaJugar from '@/components/pages/ayuda-jugar'
import PageAyudaCartas from '@/components/pages/ayuda-cartas'
import PageAyudaSenas from '@/components/pages/ayuda-senas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: PageMenuInicio
    },
    {
      path: '/jugar',
      name: 'jugar',
      component: PageInicioJugar
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PageInicioPerfil
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: PageInicioAyuda
    },
    {
      path: '/como-jugar',
      name: 'como-jugar',
      component: PageAyudaJugar
    },
    {
      path: '/cartas',
      name: 'cartas',
      component: PageAyudaCartas
    },
    {
      path: '/senas',
      name: 'senas',
      component: PageAyudaSenas
    }
  ]
})
