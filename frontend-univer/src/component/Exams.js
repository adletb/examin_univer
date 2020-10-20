import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'


function Exams({ student }) {
    const [exams, setExams] = useState([]);
    const [date, setDate] = useState(new Date())

    const getExams = async () => {
        try {
            const response = await axios.get("http://localhost:8080/exams")
            setExams(response.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getExams();
    }, [])

        
    const newTest = async (id) => {
        await axios.post(`http://localhost:8080/addTest/${id}/${student.id}`)
        .then(response => {
            // console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        window.location = "/students"
    }
   

    return (
        <Fragment>
            <h3 className="text-center mt-5">Find exam for {student.name} - {student.id}</h3>
            <input className="text-center mt-2"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />

            <h2 className="text-center mt-5">All exams</h2>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Date exam</th>
                        <th>Title</th>
                        <th>Teacher</th>
                        <th>Start Test</th>
                    </tr>
                </thead>
                <tbody >
                    {exams.map(exam => (
                        <tr key={exam.id} >
                            <td>{exam.date}</td>
                            <td>{exam.title}</td>
                            <td>{exam.teacher}</td>
                            <td>
                                {exam.date === date && <button
                                    className="btn btn-warning"
                                    onClick={() => newTest(exam.id)}
                                > Start Test
                            </button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>

    )
}

export default Exams
