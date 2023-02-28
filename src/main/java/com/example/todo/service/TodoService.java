package com.example.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.data.TodoDto;

@Service
public interface TodoService // 데베에 접근해 DAO결과값을 받아옴, DAO는 데베에 접속하여 필요한 쿼리를 호출
{

    TodoDto getTodo ( int idx ) throws Exception;

    List<TodoDto> getTodoList () throws Exception;

    int insertTodo ( int idx,
                     TodoDto item ) throws Exception;

    int updateTodo ( int idx,
                     TodoDto item ) throws Exception;

    int deleteTodo ( int idx ) throws Exception;

}
