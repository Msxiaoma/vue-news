import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/page/home'], resolve),
      children:[{
        path: 'newlist',
        component: resolve => require(['@/page/childrenList'], resolve)
      }],
      redirect: '/newlist'
    }, {
      path: '/channels',
      component: resolve => require(['@/page/channels'], resolve)
    },{
      path: '/search',
      component: resolve => require(['@/page/search'], resolve)
    }]
})
