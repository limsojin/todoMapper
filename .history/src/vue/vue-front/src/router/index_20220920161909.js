import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: TodoHeader, TodoInput, TodoList, TodoEdit
    },{
      path: '/todo:id',
      name: 'todo-add',
      component: TodoInput, TodoEdit
    },
    {
      path:'/todo/'
    }
  ]
})
