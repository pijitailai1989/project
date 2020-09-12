import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import('@/view/index.vue')
const visualManagement = ()=>import('@/view/visualManagement/index.vue')
const allOrders = ()=>import('@/view/orderManagement/allOrders.vue')
const Login = ()=>import('@/view/login')

Vue.use(Router)
const originalPush = Router.prototype.push ;

Router.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',name: 'login',component: Login
    },
    {
      path: '/',name: 'home',
      component: Home,
      children:[
        {
          path:'/visualManagement/index',name:'visualIndex',
          component:visualManagement
        },
        {
          path:'/orderManagement/allOrders',name:'allOrders',
          component:allOrders
        }
      ]
    }
  ]
})
