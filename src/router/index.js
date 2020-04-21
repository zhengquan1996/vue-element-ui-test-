import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图书管理',
    redirect: '/bookManger',
    component: Index,
    show: true,
    children: [
      {
        path: '/bookManger',
        name: '图书查询',
        component: () => import('../views/BookManger')
      },
      {
        path: '/bookAdd',
        name: '添加图书馆',
        component: () => import('../views/BookAdd')
      }
    ]
  },
  {
    path: "/bookUpdate",
    name: '修改页面',
    show: false,
    component: () => import('../views/BookUpdate')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
