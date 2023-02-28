package com.example.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.data.TodoDto;
import com.example.todo.resultvm.EnumResultCode;
import com.example.todo.resultvm.ResultMsgVM;
import com.example.todo.service.TodoService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping ( "/todo" )
public class TodoController
{
    @NonNull
    private final TodoService todoService;

    /**
     * 객체 리턴 시, 이 객체를 JSON형태로 자동으로 return => 클라이언트에게 전달
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param idx
     * @return
     * @throws Exception
     */
    @GetMapping ( "/{idx}" )
    public TodoDto getTodo ( @PathVariable ( "idx" ) int idx ) throws Exception
    {
        return this.todoService.getTodo ( idx );
    }

    /**
     * 조회
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @return
     * @throws Exception
     */
    @GetMapping ( "/all" )
    public List<TodoDto> getTodo () throws Exception
    {
        return this.todoService.getTodoList ();
    }

    /**
     * 등록
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param idx
     * @param item
     * @return
     * @throws Exception
     */
    @PostMapping ( "/{idx}" )
    public Object putTodo ( @PathVariable ( "idx" ) int idx,
                            @RequestBody TodoDto item ) throws Exception
    {
        if ( item.getTodolist ().equals ( "" ) )
        {
            return new ResultMsgVM ( EnumResultCode.TODO_ERROR );
        } else
        {
            return this.todoService.insertTodo ( idx, item );
        }
    }

    /**
     * 수정
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param idx
     * @param item
     * @return
     * @throws Exception
     */
    @PutMapping ( "/{idx}" )
    public Object postTodo ( @PathVariable ( "idx" ) int idx,
                             @RequestBody TodoDto item ) throws Exception
    {
        if ( idx != item.getIdx () )
        {
            return new ResultMsgVM ( EnumResultCode.UPDATE_ERROR );
        } else
        {
            return this.todoService.updateTodo ( idx, item );
        }
    }

    /**
     * 삭제
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param idx
     * @param item
     * @return
     * @throws Exception
     */
    @DeleteMapping ( "/{idx}" )
    public Object deleteTodo ( @PathVariable ( "idx" ) int idx,
                               @RequestBody TodoDto item ) throws Exception
    {
        if ( idx != item.getIdx () )
        {
            return new ResultMsgVM ( EnumResultCode.UPDATE_ERROR );
        } else
        {
            return this.todoService.deleteTodo ( idx );
        }
    }

}
