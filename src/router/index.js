import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '@/App'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
Vue.use(Router)

const routes = [

  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  },
  {
    path: '/',
    name: 'index',
    redirect: '/goods'
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
