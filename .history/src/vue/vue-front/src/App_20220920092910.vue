<template>
  <div id="app">
    <h2>" My Todo "</h2>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoEdit></TodoEdit>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoEdit from "./components/TodoEdit.vue";

export default {
 components: {
    //컴포넌트 등록
    TodoHeader,
    TodoInput,
    TodoList,
    TodoEdit,
  },
}
</script>

<style>
ul {
  padding-inline-start: 0px;
}
body {
  background-color: #a490ae;
  text-align: center;
}
input {
  width: 200px;
}
</style>
