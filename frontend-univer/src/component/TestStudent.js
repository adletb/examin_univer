import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import Answear from './Answear';


function TestStudent({user}) {
	const [tests, setTests] = useState([]);

	const getTests = async () => {
		try {
			const response = await axios.get("http://localhost:8080/tests")
			const testAll = response.data
			setTests(testAll.filter(test => test.student_id === user.id))
		    console.log(tests)	
		}
		 catch (err) {
			console.error(err.message)
		}
	}

	useEffect(() => {
		getTests()
	}, [user])

	return (
		<Fragment>
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Status</th>
						<th>Answear</th>
						<th>Exam</th>
						<th>Student</th>
						<th>Teacher</th>
						<th>Write Answear</th>
					</tr>
				</thead>
				<tbody>
					{tests.map(test => (
						<tr key={test.id}>
							<td>{ test.started} </td>
                            <td>{test.answear}</td>
							<td>{test.exam}</td>
							<td>{test.student}</td>
							<td>{test.teacher}</td>
                            { test.started === "started" && 
							<td><Answear test={test} getTests={getTests}/></td>}							
						</tr>
					))}
				</tbody>
			</table>

		</Fragment>
	)
}

export default TestStudent
