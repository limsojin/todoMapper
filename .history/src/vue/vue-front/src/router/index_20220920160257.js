import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
      redirect:'/todo',
      name: 'HelloWorld',
      component: TodoHeader, TodoInput, TodoList, TodoEdit
    }
  ]
})
