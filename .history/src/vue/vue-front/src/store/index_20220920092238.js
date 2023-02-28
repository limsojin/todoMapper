import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [],
    todo: "",
    planPick: "",
    doneTodo: "", // 완료된 투두 개수
    totalTodo: "", // 총 투두 개수 
    radioCheckTodo: "", // todolist.vue에서 넘어온 selected todo값 
    radioCheckIdx: "", //tolist.vue에서 selected index값
    showEditModal: false, // selected 값 일치하면 띄울 모달
    showWarningModal: false, // 불일치하면 띄울 모달
    showAddModal: false, // underAddBtn 눌리면 띄울 모달
    todoEditText: "", // 수정으로 받아올 텍스트
    pList: [{ text: "공부", value: "1" }, { text: "일", value: "2" }, { text: "취미", value: "3" }, { text: "운동", value: "4" }]
  },

  getters: {
    todoList: (state) => {
      return state.todoList
    },
    todo: (state) => {
      return state.todo
    },
    totalTodo: (state) => {
      return state.todoList.filter(todoList => todoList.done); //todolist를 순회하면서 false 개수 셈 -> 총 개수
    },
    totalTodoCount: (state, getters) => {
      return getters.totalTodo.length;
    },
    doneTodo: (state) => {
      return state.todoList.filter(todoList => !todoList.done);
    },
    doneTodoCount: (state, getters) => {
      return getters.todoList.length;
    },
    showEditModal: (state) => {
      return state.showEditModal;
    },
    showWarningModal: (state) => {
      return state.showWarningModal;
    },
    showAddModal: (state) => {
      return state.showAddModal;
    },
    todoEditText: (state) => {
      return state.todoEditText;
    },
    planPick: (state) => {
      return state.planPick;
    },
    pList: (state) => {
      return state.pList;
    },
  },
  actions: {
    setTodoEditText: ({ commit }, payload) => {
      commit("setTodoEditTextA", payload)
    },
    setShowAddModal: ({ commit }, payload) => {
      commit("setShowAddModalA", payload)
    },
    setShowWarningModal: ({ commit }, payload) => {
      commit("setShowWarningModalA", payload)
    },
    setShowEditModal: ({ commit }, payload) => {
      commit("setShowEditModalA", payload);
    },
    setTodo: ({ commit }, payload) => {
      commit("setTodoA", payload)
    },
    setPlanPickVal: ({ commit }, payload) => {
      commit("setPlanPickValA", payload)
    },
    addTodo: ({ commit }, payload) => {
      commit("addTodoA", payload)
    },
    underAddBtn: ({ commit }, payload) => {
      commit("underAddBtnA", payload)
    },
    newCreated: ({ commit }) => {
      commit("newCreatedA")
    },
    deleteTodo: ({ commit }, payload) => {
      commit("deleteTodoA", payload)
    },
    underDeleteBtn: ({ commit }) => {
      commit("underDeleteBtnA")
    },
    doneToggle: ({ commit }, payload) => {
      commit("doneToggleA", payload)
    },
    underClearBtn: ({ commit }) => {
      commit("deleteAllA")
    },
    underEditBtn: ({ commit }, payload) => {
      commit("underEditBtnA", payload)
    },
    exportSelected: ({ commit }, payload) => {
      commit("exportSelectedA", payload)
    },
    saveNewTodo: ({ commit }, payload) => {
      commit("saveNewTodoA", payload)
    },
    selectPlan: ({ commit }, payload) => {
      commit("selectPlanA", payload)
    },
  },

  mutations: { // -> actions, getters로 가져오고 mutations은 아래에서 호출(변경되는 내용) 사용
    setShowEditModalA: (state, payload) => {
      state.showEditModal = payload; // 수정모달 setter
    },
    setShowWarningModalA: (state, payload) => { //경고모달 setter
      state.showWarningModal = payload;
    },
    setPlanPickValA: (state, payload) => {
      state.planPick = payload;
    },
    setTodoA: (state, payload) => {
      state.todo = payload;
    },
    setTodoEditTextA: (state, payload) => { //수정텍스트 setter
      state.todoEditText = payload;
    },
    setShowAddModalA: (state, payload) => { //등록모달 setter
      state.showAddModal = payload;
    },

    addTodoA: (state, payload) => {
      if (payload !== '') {
        localStorage.setItem(payload + 'key', JSON.stringify({
          todo: payload,
          key: payload + 'key',
          done: false,
          planPick: state.planPick,
        }));
        console.debug("addTodo");
        state.todoList.push({
          todo: payload,
          key: payload + 'key',
          done: false,
          planPick: state.planPick,

        });
        state.todo = '';
        state.radioCheckIdx = false;
        state.showAddModal = false;
        state.planPick = '';
      } else {
        alert('할 일을 입력해주세요!');
      }

    },

    underAddBtnA: (state) => {
      state.showAddModal = !state.showAddModal;
    },

    doneToggleA: (state, payload) => {

      state.todoList[payload.index].done = !state.todoList[payload.index].done;

      /*localStorage[payload.todo + 'key'] = JSON.stringify({
        todo: payload.todo,
        key: payload.todo + 'key',
        done: state.todoList[payload.index].done,
        planPick: state.todoList[payload.index].planPick,
      });*/

      localStorage.setItem(state.todoList[payload.index].key, JSON.stringify({
        todo: payload.todo,
        key: payload.todo + 'key',
        done: state.todoList[payload.index].done,
        planPick: state.todoList[payload.index].planPick,
      }));
    },

    deleteAllA: (state) => {
      localStorage.clear();
      state.todoList = [];
    },

    deleteTodoA: (state, payload) => {
      localStorage.removeItem(payload.todo);
      state.todoList.splice(payload.index, 1);
    },

    underDeleteBtnA: (state) => {
      localStorage.removeItem(state.radioCheckTodo);
      console.log(state.radioCheckTodo);
      state.todoList.splice(state.radioCheckIdx, 1);

      if (state.radioCheckTodo == '') {
        state.showWarningModal = !state.showWarningModal;
      }
    },

    exportSelectedA: (state, payload) => { // Todolist.vue의 radioChange에서 넘어온 값
      state.radioCheckTodo = payload.todo;
      state.radioCheckIdx = payload.idx;
    },

    underEditBtnA: (state) => { // 모달을 불러옴
      console.log("모달띄움")
      console.log(state.radioCheckTodo);

      if (state.radioCheckTodo !== '') { // todo가 비어있으면 모달 켜지지 않도록 
        state.showEditModal = !state.showEditModal;
      } else {
        state.showWarningModal = !state.showWarningModal;
      }
    },

    saveNewTodoA: (state, payload) => { //수정
      console.debug("payload: ", payload);
      state.todoList[state.radioCheckIdx].todo = payload; // text받아옴
      let beforeTodo = state.todoList[state.radioCheckIdx].todo; // 변수로 넣어 깔끔하게

      state.showEditModal = !state.showEditModal;
      localStorage.setItem(state.todoList[state.radioCheckIdx].key, JSON.stringify({
        todo: beforeTodo,
        key: state.todoList[state.radioCheckIdx].key,
        done: state.todoList[state.radioCheckIdx].done,
        planPick: state.planPick
      }));
      state.todoList[state.radioCheckIdx].planPick = state.planPick;
      console.debug("왜 안나와ㅠㅠ", state.planPick);
    },

    selectPlanA: (state, payload) => { // plan 선택  
      state.planPick = payload;
      console.debug("state planPick: ", state.planPick);
    },

    newCreatedA: (state) => {
      for (let i = 0; i < localStorage.length; i++) {
        const localKey = localStorage.key(i);
        if (localKey === 'loglevel:webpack-dev-server') continue;
        state.todoList.push(JSON.parse(localStorage.getItem(localKey)));
        console.debug("todo: ", state.todoList);
        console.debug("localstro:", localStorage.getItem(localKey))
      }

    }
  },
}
);

export default store;
