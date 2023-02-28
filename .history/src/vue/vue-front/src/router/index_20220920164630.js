import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes= [
    {
      path: '/todo',
      name: 'todo',
      component: TodoHeader, TodoInput, TodoList, TodoEdit
    },{
      path: '/todo:id',
      name: 'todo-cud',
      component: TodoHeader, TodoInput, TodoList, TodoEdit
    },
    {
      path:'/todo/all',
      name: 'todo-r',
      component: TodoHeader, TodoInput, TodoList, TodoEdit
    }
];

  const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
