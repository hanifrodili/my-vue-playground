import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Grapesjs from '../views/Grapesjs.vue'
// import VCraftjs from '../views/VCraftjs.vue'
import MyCustom from '../views/MyCustom.vue'
import YezzaBuilder from '../views/YezzaBuilder/index.vue'
import YezzaBuilderPreview from '../views/YezzaBuilder/preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/grapesjs',
    name: 'Grapesjs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grapesjs.vue'),
    // component: Grapesjs
  },
  {
    path: '/vcraftjs',
    name: 'VCraftjs',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCraftjs.vue')
    // component: VCraftjs
  },
  {
    path: '/mycustom',
    name: 'MyCustom',
    component: MyCustom
  },
  {
    path: '/yezzabuilder',
    name: 'YezzaBuilder',
    component: YezzaBuilder
  },
  {
    path: '/yezzabuilder/preview',
    name: 'YezzaBuilderPreview',
    component: YezzaBuilderPreview
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
