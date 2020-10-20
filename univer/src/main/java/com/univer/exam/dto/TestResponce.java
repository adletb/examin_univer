package com.univer.exam.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TestResponce {
    private long id;
    private String started;
    private String answear;
    private long exam_id;
    private String exam;
    private long student_id;
    private String student;
    private long teaher_id;
    private String teacher;
}
