import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MyCustom from '../views/MyCustom.vue'
import BuilderHome from '../views/MyPageBuilder/index.vue'
import MyPageBuilderPreview from '../views/MyPageBuilder/preview/_id.vue'
import Builder from '../views/MyPageBuilder/builder/_id.vue'
import GatherPage from '../views/Page/Gather/Index.vue'

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
    path: '/builderio',
    name: 'BuilderIO',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuilderIO.vue'),
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
    path: '/page/gather',
    name: 'GatherPage',
    component: GatherPage
  },
  {
    path: '/mypagebuilder',
    name: 'BuilderHome',
    component: BuilderHome
  },
  {
    path: '/mypagebuilder/preview/:id',
    name: 'MyPageBuilderPreview',
    component: MyPageBuilderPreview
  },
  {
    path: '/mypagebuilder/builder/:id',
    name: 'Builder',
    component: Builder
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
