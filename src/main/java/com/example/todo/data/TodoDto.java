package com.example.todo.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto // 각 계층이 데이터를 주고받을 때 사용하는 객체
{
    private int idx;
    private String todolist;
    private Boolean isCompleted;
}
