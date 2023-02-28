import axios from 'axios'

const instance = acious.create({
  baseUrl: 'http://192.168.50.217:5432/',
})

/**
 * 
 * @param {*} params 
 * @returns 
 */
function getTodoListAPI(params){
  return instance.get('/todo/all', params)
}

/**
 * 
 * @param {*} params 
 * @returns 
 */
function insertTodoAPI(params){
  return instance.post('/todo/insert', null, params)
}
