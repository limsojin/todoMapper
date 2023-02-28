import axios from 'axios'

const instance = acious.create({
  baseUrl: 'http://192.168.50.217:5432/',
})

/**
 * 투두 목록 조회
 * @param {*} params
 */
function getTodoListAPI(params){
  return instance.get('/todo/all', params)
}
