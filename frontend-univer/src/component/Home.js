import React from 'react'
import axios from 'axios'

export const Home = () => {

    const createAll = async () => {
        try {
			const response = await axios.get("http://localhost:8080/createAll")			            
            console.log(response.data)
		} catch (err) {
			console.error(err.message)
		}
        
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={ e => createAll()}>Create</button>
        </div>
    )
}
