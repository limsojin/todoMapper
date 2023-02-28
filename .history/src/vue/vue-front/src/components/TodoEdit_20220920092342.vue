<template>
  <div>
    <!--등록, 수정, 삭제, 모두삭제 버튼-->
    <button class="init" @click="onClickUnderAddBtn()">
      Add
    </button>
    <button class="edit" @click="onClickUnderEditBtn()">
      Edit
    </button>
    <button class="delete" @click="onClickUnderDeleteBtn()" >
      Delete
    </button>
    <button class="clear" @click="onClickUnderClearBtn()">
      Clear
    </button>

    <!--등록 모달-->
    <modal v-model="valueShowAddModal" v-show="showAddModal">
      <h3 slot="header"> 등록 </h3>
      <div slot="body">
        <select v-model="planPickVal" @change="onClickSelectPlan()">
          <option v-for="p in pList" :key="p.value" :value="p.text">
        {{ p.text }}
          </option>
        </select>
        <input type="textarea" @keypress.enter="onClickAddTodo(todo)" v-model="todoVal" placeholder="할 일을 입력하세요"> </input>       
      </div>
      <span slot="footer">
        <i class="fa fa-check-circle" @click="onClickAddTodo(todo)" aria-hidden="true"></i>
        <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="setShowAddModal(false)"></i>
      </span>
    </modal>

    <!--수정 모달-->
    <modal v-model="valueShowEditModal" v-show="showEditModal">
      <h3 slot="header"> 수정 </h3>
      <div slot="body">
        <select v-model="planPickVal" @change="onClickSelectPlan">
          <option v-for="p in pList" :key="p.value" :value="p.text">
        {{ p.text }}
          </option>
        </select>
        <input type="textarea" @keypress.enter="saveNewTodo(todoEditText)" v-model="todoEditTextVal" placeholder="수정할 내용을 입력하세요"> </input>       
      </div>
      <span slot="footer">
        <i class="fa fa-check-circle" @click="saveNewTodo(todoEditText)" aria-hidden="true"></i>
        <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="setShowEditModal(false)"></i>
      </span>
    </modal>

    <!--경고 모달-->
    <modal v-model="valueShowWarningModal" v-show="showWarningModal">
      <h3 slot="header"> 경고 </h3>
      <span slot="body">
      항목을 선택해야합니다!
      </span>
      <span slot="footer">
        <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="setShowWarningModal(false)"></i>
      </span>
    </modal>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./common/Modal.vue";
export default {
  computed: {
    ...mapGetters([
      "showAddModal",
      "showEditModal",
      "showWarningModal",
      "todoEditText",
      "todo",
      "planPick",
      "pList",
    ]),
    //todo's getter setter
    todoVal: {
      get() {
        return this.todo;
      },
      set(val) {
        this.setTodo(val);
      },
    },

    //planPick's getter setter
    planPickVal: {
      get() {
        return this.planPick;
      },
      set(val) {
        this.setPlanPickVal(val);
      },
    },

    //등록 모달 getter setter
    valueShowAddModal: {
      get() {
        return this.showAddModal;
      },
      set(val) {
        this.setShowAddModal(val);
      },
    },

    // 수정 모달 getter setter
    valueShowEditModal: {
      get() {
        return this.showEditModal;
      },
      set(val) {
        this.setShowEditModal(val);
      },
    },

    // 수정 or 삭제에서 라디오버튼 미선택 시, 모달 getter setter
    valueShowWarningModal: {
      get() {
        return this.ShowWarningModal;
      },
      set(val) {
        this.setShowWarningModal(val);
      },
    },

    // 수정된 text 값의 getter setter
    todoEditTextVal: {
      get() {
        return this.todoEditText;
      },
      set(val) {
        this.setTodoEditText(val);
      },
    },
  },

  methods: {
    ...mapActions([
      "setShowAddModal",
      "setShowEditModal",
      "setShowWarningModal",
      "underEditBtn",
      "saveNewTodo",
      "setTodoEditText",
      "underClearBtn",
      "underDeleteBtn",
      "underAddBtn",
      "setTodo",
      "addTodo",
      "selectPlan",
      "setPlanPickVal",
    ]),

    onClickUnderEditBtn() {
      this.underEditBtn();
    },
    onClickUnderDeleteBtn() {
      this.underDeleteBtn();
    },
    onClickUnderClearBtn() {
      this.underClearBtn();
    },
    onClickUnderAddBtn() {
      this.underAddBtn();
    },
    onClickSelectPlan() {
      this.selectPlan(this.planPickVal);
    },
    onClickAddTodo() {
      this.addTodo(this.todoVal);
      console.log("gd", this.todoVal);
    },
    /*clickEditBtn() {
      console.debug("항목 선택 상태 : ", this.chk); // 라디오 버트 체크상태 확인
      if (this.chk === true) {
        // 라디오 버튼이 체크되어 있으면 모달 띄우기
        this.showModal = !this.showModal;
      } // 체크 안되어 있으면 체크하세요 모달
      else {
        this.showCkList = !this.showCkList;
      }
    },*/
  },

  components: {
    Modal,
  },
};
</script>
<style scoped>
#clear-all {
  width: 20%;
  margin: 0 auto 0.5rem auto;
  height: 2.5rem;
  background-color: rgb(219, 219, 219);
  border-radius: 5px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-size: 1.1rem;
  color: #de4343;
  font-weight: 700;
}
.fas {
  color: red;
}
input {
  height: 25px;
  width: 250px;
  text-align: center;
}

.edit {
  width: 80px;
  height: 40px;
  color: #fff;
  background: #6193ff;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0px 0px rgba(104, 104, 104, 0.3);
  transition: 0.3s;
  left: 50%;
  font-weight: 700;
}
.edit:focus {
  outline: 0;
}
.edit:hover {
  background: rgba(111, 111, 111, 0.9);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
}

.clear {
  width: 80px;
  height: 40px;
  color: #fff;
  background: #954077;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0px 0px rgba(104, 104, 104, 0.3);
  transition: 0.3s;
  left: 50%;
  font-weight: 700;
}
.clear:focus {
  outline: 0;
}
.clear:hover {
  background: rgba(111, 111, 111, 0.9);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
}

.delete {
  width: 80px;
  height: 40px;
  color: #fff;
  background: #6da33b;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0px 0px rgba(104, 104, 104, 0.3);
  transition: 0.3s;
  left: 50%;
  font-weight: 700;
}
.delete:focus {
  outline: 0;
}
.delete:hover {
  background: rgba(111, 111, 111, 0.9);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
}

.init {
  width: 80px;
  height: 40px;
  color: #fff;
  background: #b69743;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0px 0px rgba(104, 104, 104, 0.3);
  transition: 0.3s;
  left: 50%;
  font-weight: 700;
}
.init:focus {
  outline: 0;
}
.init:hover {
  background: rgba(111, 111, 111, 0.9);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
}
</style>
