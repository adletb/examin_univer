package com.univer.exam.repository;

import com.univer.exam.dto.TeacherResponce;
import com.univer.exam.dto.TestResponce;
import com.univer.exam.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    @Query("Select new com.univer.exam.dto.TeacherResponce" +
            "( id, name) FROM Teacher")
    public List<TeacherResponce> getTeachers();

}

