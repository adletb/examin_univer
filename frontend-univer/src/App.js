import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import { Home } from './component/Home';
import ViewExams from './component/ViewExams';
import Students from './component/Students';
import Teachers from './component/Teachers';

function App() {
    return (
			<Router>
				<div className="container mt-5">                    
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/view">ViewExams</Link>
							</li>
							<li>
								<Link to="/teachers">Teachers</Link>
							</li>
							<li>
								<Link to="/students">Students</Link>
							</li>
						</ul>
						<Switch>
								<Route path="/" exact component={Home}/>
								<Route path="/view" exact component={ViewExams}/>
								<Route path="/teachers" exact component={Teachers}/>
								<Route path="/students" exact component={Students}/>
						</Switch>
					</nav>
				</div>
			</Router>
    );
}

export default App;
