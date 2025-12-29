import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/aboutUs.vue'
import Services from '../views/services.vue'
import Gallery from '../views/Gallery.vue'
import Sauna from '../views/sauna.vue'
import Dining from '../views/dining.vue'
import Events from '../views/freeTime.vue'
import Meetings from '../views/meetings.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/sauna', name: 'Sauna', component: Sauna },
  { path: '/dining', name: 'Dining', component: Dining },
  { path: '/events', name: 'Events', component: Events },
  { path: '/meetings', name: 'Meetings', component: Meetings },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  }
})

export default router