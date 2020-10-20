package com.univer.exam.repository;

import com.univer.exam.dto.ExamResponce;
import com.univer.exam.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    @Query("SELECT new com.univer.exam.dto.ExamResponce " +
            "(e.id, e.title, e.date, t.name) " +
            "FROM Exam e INNER JOIN Teacher t ON t.id = e.teacher")
    List<ExamResponce> getExamsJoinTeacher();
}
