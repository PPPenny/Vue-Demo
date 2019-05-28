import Vue from 'vue'
import Router from 'vue-router'
import { HelloWorld,Editor } from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
