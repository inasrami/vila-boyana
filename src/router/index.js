import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home Page</div>' }
const Accommodation = { template: '<div>Accommodation Page</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/accommodation', component: Accommodation },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router