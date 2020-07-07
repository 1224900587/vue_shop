import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import '../plugins/element'
import '../assets/css/giobal.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
