import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
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
      path: '/main',
      name: 'main',
      component: Main
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
    },
    {
      path: '*',
      redirect: 'main'
    }
  ]
})
