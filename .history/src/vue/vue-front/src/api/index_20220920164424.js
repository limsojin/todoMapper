import axios from 'axios'

const instance = acious.create({
  baseUrl: 'http://192.168.50.217:5432/',
})

/**
 * 투두 목록 조회
 * @param {*} params 
 * @returns 
 */
function getTodoListAPI(params){
  return instance.get('/todo/all', params)
}

/**
 * 투두 등록
 * @param {*} params 
 * @returns 
 */
function insertTodoAPI(params){
  return instance.post('/todo/insert', null, params)
}

/**
 * 투두 수정
 * @param {*} params 
 * @returns 
 */
function updateTodoAPI(params){
  return instance.post('/todo/update', null, params)
}

function deleteTodoAPI(params){
  return instance.delete('/todo/delete', null, params)
}
