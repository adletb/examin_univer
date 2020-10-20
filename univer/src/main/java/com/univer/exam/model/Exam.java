package com.univer.exam.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "exams")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "exam_fid", referencedColumnName = "id")
//    private Set<Test>  tests = new HashSet<>();

    public Exam() {
    }

    public Exam(String title, LocalDate date, Teacher teacher) {
        this.title = title;
        this.date = date;
        this.teacher = teacher;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
