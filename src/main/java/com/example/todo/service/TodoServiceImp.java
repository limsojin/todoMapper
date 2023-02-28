package com.example.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.data.TodoDto;
import com.example.todo.mapper.TodoMapper;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TodoServiceImp implements TodoService
{
    @NonNull
    private final TodoMapper todoMapper;

    @Override
    public TodoDto getTodo ( int idx ) throws Exception
    {
        return this.todoMapper.getTodo ( idx );
    }

    @Override
    public List<TodoDto> getTodoList () throws Exception
    {
        return this.todoMapper.getTodoList ();
    }

    @Override
    public int insertTodo ( int idx,
                            TodoDto item ) throws Exception
    {
        return this.todoMapper.insertTodo ( idx, item );
    }

    @Override
    public int updateTodo ( int idx,
                            TodoDto item ) throws Exception
    {
        return this.todoMapper.updateTodo ( idx, item );
    }

    @Override
    public int deleteTodo ( int idx )
    {
        return this.todoMapper.deleteTodo ( idx );
    }
}
