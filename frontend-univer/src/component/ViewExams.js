import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Exams from './Exams';

const ViewExams = () => {
  const [students, setStudents] = useState([]);
  const [curStudent, setStudent ] = useState('');

  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students")
      const jsonData = response.data;

      setStudents(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getStudents();
  }, [])

  console.log(students)

  return (
    <Fragment>      
      { curStudent === '' &&
        <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} >
              <td>{student.name}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setStudent(student)}
                > Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
     { curStudent !== '' && <Exams student={curStudent} />}
     </Fragment>
  )
}

export default ViewExams
