package com.example.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.type.JdbcType;

import com.example.todo.data.TodoDto;

@Mapper
public interface TodoMapper
{
    @Select ( "SELECT * FROM TODO_TB WHERE idx=#{idx}" )
    @Result ( property = "idx", column = "idx", id = true, jdbcType = JdbcType.INTEGER )
    TodoDto getTodo ( @Param ( "idx" ) int idx );

    @Select ( "SELECT * FROM TODO_TB" )
    @Result ( property = "idx", column = "idx", id = true, jdbcType = JdbcType.INTEGER )
    List<TodoDto> getTodoList ();

    @Options ( keyColumn = "idx", keyProperty = "idx", useGeneratedKeys = true )
    @Insert ( "INSERT INTO TODO_TB VALUES(#{idx}, #{item.todolist})" )
    int insertTodo ( @Param ( "idx" ) int idx,
                     @Param ( "item" ) TodoDto item );

    @Update ( "UPDATE TODO_TB SET todolist=#{item.todolist} WHERE idx=#{idx} " )
    int updateTodo ( @Param ( "idx" ) int idx,
                     @Param ( "item" ) TodoDto item );

    @Delete ( "DELETE FROM TODO_TB WHERE idx=#{idx}" )
    int deleteTodo ( @Param ( "idx" ) int idx );

}
