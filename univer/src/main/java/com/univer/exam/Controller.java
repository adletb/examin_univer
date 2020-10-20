package com.univer.exam;


import com.univer.exam.dto.ExamResponce;
import com.univer.exam.dto.TeacherResponce;
import com.univer.exam.dto.TestResponce;
import com.univer.exam.model.Exam;
import com.univer.exam.model.Student;
import com.univer.exam.model.Teacher;
import com.univer.exam.model.Test;
import com.univer.exam.repository.ExamRepository;
import com.univer.exam.repository.StudentRepository;
import com.univer.exam.repository.TeacherRepository;
import com.univer.exam.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired TestRepository testRepository;

    @GetMapping("exams")
    public @ResponseBody  List<ExamResponce> getExams(){
        return examRepository.getExamsJoinTeacher();
    }

    @GetMapping("students")
    public @ResponseBody List<Student> getStudents() { return studentRepository.findAll();}

    @GetMapping("teachers")
    public @ResponseBody List<TeacherResponce> getTeachers() {
        return teacherRepository.getTeachers();
    }

    @GetMapping("tests")
    public @ResponseBody List<TestResponce> getTests(){
        return testRepository.getTest();
    }


    @PostMapping("addTest/{exam_id}/{student_id}")
    public Test newUser(@PathVariable long exam_id, @PathVariable long student_id) {
        Exam exam = examRepository.findById(exam_id).get();
        Long teacher_id = exam.getTeacher().getId();
        Teacher teacher = teacherRepository.findById(teacher_id).get();
        Student student = studentRepository.findById(student_id).get();
        Test test = new Test(exam, student, teacher);
        return testRepository.save(test);
    }

    @PutMapping("started/{id}")
    public Test startTest(@PathVariable long id){
        Test test = testRepository.findById(id).get();
        test.setStarted("started");
        return testRepository.save(test);
    }

    @PutMapping("ansewar/{id}")
    public Test saveAnswear(@RequestBody String answear, @PathVariable long id){
        Test test = testRepository.findById(id).get();
        test.setAnswear(answear);
        test.setStarted("pass");
        return testRepository.save(test);
    }

    //// For test

    @GetMapping("createAll")
    public String  addTeachers() {

        Student studentA = new Student("Nurlat");
        Student studentB = new Student("Nikita");
        Student studentC = new Student("Ilias");

        studentRepository.save(studentA);
        studentRepository.save(studentB);
        studentRepository.save(studentC);
        /////////////////////////////////////////////

        Teacher teacherA = new Teacher("Beisen");
        Teacher teacherB = new Teacher("Aleksandr");

        teacherRepository.save(teacherA);
        teacherRepository.save(teacherB);

        Exam examA = new Exam("Chimics First", LocalDate.of(2020, 10, 03), teacherA);
        Exam examB = new Exam("Chimics Second", LocalDate.of(2020, 11, 21), teacherA);
        Exam examC = new Exam("Chimics Third", LocalDate.of(2020, 12, 12), teacherA);
        Exam examD = new Exam("Phithiks First", LocalDate.of(2020, 10, 03), teacherB);
        Exam examE = new Exam("Phithiks Second",  LocalDate.of(2020, 11, 21), teacherB);
        Exam examF = new Exam("Phithiks Third", LocalDate.of(2020, 12, 12), teacherB);

        examRepository.save(examA);
        examRepository.save(examB);
        examRepository.save(examC);
        examRepository.save(examD);
        examRepository.save(examE);
        examRepository.save(examF);

        teacherA.getExams().add(examA);
        teacherA.getExams().add(examB);
        teacherA.getExams().add(examC);

        teacherB.getExams().add(examD);
        teacherB.getExams().add(examE);
        teacherB.getExams().add(examF);

        teacherRepository.save(teacherA);
        teacherRepository.save(teacherB);

        return "create ...";
    }

}
