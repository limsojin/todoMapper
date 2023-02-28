package com.example.todo.resultvm;

public enum EnumResultCode
{
    /**
     * 성공 / 실패 여부
     */
    TODO_SUCCESS(true, "200", "todolist 내용 들어옴"), TODO_ERROR(false, "400", "todolist 내용 안 들어옴"), UPDATE_SUCCESS(true, "202",
                    "업데이트 완료"), UPDATE_ERROR(false, "404", "업데이트 실패 idx를 확인하세요");

    private final boolean isSuccess;
    private final String isResultCd;
    private final String getMessage;

    private EnumResultCode ( boolean isSuccess,
                             String isResultCd,
                             String getMessage )
    {
        this.isSuccess = isSuccess;
        this.isResultCd = isResultCd;
        this.getMessage = getMessage;
    }

    public boolean isSuccess ()
    {
        return this.isSuccess;
    }

    public String getMessage ()
    {
        return this.getMessage;
    }

    public String isResultCd ()
    {
        return this.isResultCd;
    }
}
