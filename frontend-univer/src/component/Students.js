import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import TestStudent from './TestStudent';


function Students() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('')

  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students")
      setStudents(response.data)
    } catch (err) {
      console.error(err.message)
    }
 }

  useEffect(() => {
    getStudents();
  }, [])

  return (
    <Fragment>
        <h3>Students</h3>
        
        <ul className="list-group cursor" >
          {students.map(student => (
              <li key={student.id} 
                className="list-group-item "
                onClick={ () => setStudent(student)} >
                  {student.name}
            </li>
          ))}
        </ul> 
      { student !== '' && <TestStudent user = {student} role="s" /> }            
    </Fragment>
  )
}

export default Students