import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'


function Test({user}) {
	const [tests, setTests] = useState([]);


	const getTests = async () => {
		try {
			const response = await axios.get("http://localhost:8080/tests")
			const testAll = response.data
			setTests(testAll.filter(test => test.teaher_id === user.id))
		    console.log(tests)
		} catch (err) {
			console.error(err.message)
		}
	}

	useEffect(() => {
		getTests()
	}, [user])


	const startTest = async (id) => {
		await axios.put(`http://localhost:8080/started/${id}`)
			.then(response => {
				// console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		// window.location = "/teachers"
	    getTests()
	}

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
						
					</tr>
				</thead>
				<tbody>
					{tests.map(test => (
						<tr key={test.id}>
							<td>{ test.started } </td>
							<td>{test.answear}</td>
							<td>{test.exam}</td>
							<td>{test.student}</td>
							<td>{test.teacher}</td>
							<td>{ test.started === 'wait' && 
							<button 
								className="btn btn-danger"
								onClick={() => startTest(test.id)}
								>Start
							</button>}                   
							</td>
						</tr>
					))}
				</tbody>
			</table>

		</Fragment>
	)
}

export default Test
