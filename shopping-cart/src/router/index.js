import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Shopcart from '../components/Shopcart'
import GoodsList from '../components/GoodsList'

const router = new VueRouter({
  routes: [
    {
     path: '/shopcart',
     name: 'Shopcart',
     component: Shopcart
    },
    {
      path:"/",
      name:'GoodsList',
      component:GoodsList
    }
  ]
})
export default router