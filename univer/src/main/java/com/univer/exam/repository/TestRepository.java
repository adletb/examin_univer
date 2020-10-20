package com.univer.exam.repository;


import com.univer.exam.dto.TestResponce;
import com.univer.exam.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TestRepository extends JpaRepository<Test, Long> {

    @Query("SELECT new com.univer.exam.dto.TestResponce " +
            "(ts.id, ts.started, ts.answear, ex.id, ex.title, st.id, st.name, th.id, th.name) " +
            "FROM Test ts  " +
            "INNER JOIN  Exam ex ON ex.id = ts.exam " +
            "INNER JOIN Student st ON st.id = ts.student " +
            "INNER JOIN Teacher th ON th.id = ts.teacher ")
    List<TestResponce> getTest();


}