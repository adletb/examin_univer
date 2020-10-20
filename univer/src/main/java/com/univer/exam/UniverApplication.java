package com.univer.exam;


import com.univer.exam.model.Exam;
import com.univer.exam.model.Student;
import com.univer.exam.model.Teacher;
import com.univer.exam.model.Test;
import com.univer.exam.repository.ExamRepository;
import com.univer.exam.repository.StudentRepository;
import com.univer.exam.repository.TeacherRepository;
import com.univer.exam.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

@SpringBootApplication
public class UniverApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(UniverApplication.class, args);
    }

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired
    ExamRepository examRepository;
    @Autowired
    TestRepository testRepository;

    @Override
    public void run(String... args) throws Exception {


    }
}
