import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Tests from '@/components/Tests/Index'
import CreateTest from '@/components/CreateTest'
import EditTest from '@/components/EditTest'
import ViewTest from '@/components/ViewTest/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/tests',
      name: 'tests',
      component: Tests
    },
    {
      path: '/tests/create',
      name: 'tests-create',
      component: CreateTest
    },
    {
      path: '/tests/:testId',
      name: 'test',
      component: ViewTest
    },
    {
      path: '/tests/:testId/edit',
      name: 'test-edit',
      component: EditTest
    }
  ]
})
