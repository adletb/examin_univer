package com.univer.exam.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ExamResponce {
    private long id;
    private String title;
    private LocalDate date;
    private String teacher;

}
