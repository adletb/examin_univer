import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Test from './Test';


function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState('')

  const getTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/teachers")
      setTeachers(response.data)
    } catch (err) {
      console.error(err.message)
    }
 }

  useEffect(() => {
    getTeachers();
  }, [])

  return (
    <Fragment>
        <h3>Teachers</h3>
        
        <ul className="list-group cursor" >
          {teachers.map( teacher=> (
              <li key={teacher.id} 
                className="list-group-item "
                onClick={ () => setTeacher(teacher)} >
                  {teacher.name}
            </li>
          ))}
        </ul> 
      { teacher !== '' && <Test user = {teacher} role="t" /> }            
    </Fragment>
  )
}

export default Teachers