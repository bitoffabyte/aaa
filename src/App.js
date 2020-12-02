import "./App.css";
import Landing from "./Components/Landing";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Error from "./Components/Error";
import Logo from "./Components/Logo";
import Complete from "./Components/Complete";
import { initialize } from "./firebase-codes";
import { useRef, useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	useHistory,
	Switch,
} from "react-router-dom";
// import { TransitionGroup } from "react-transition-group";
initialize();
function App() {
	return (
		<Router className='App'>
			<div style={{ zIndex: 10 }}>
				<Switch>
					<Route path='/' exact key='path'>
						<Landing />
						<Logo />
					</Route>
					<Route path='/signin' exact>
						<Signin />
						{/* <Logo /> */}
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/error'>
						<Error
							a='Error'
							b='Please sign in with VIT email ID ending in @vitstudent.ac.in'
						/>
					</Route>
					<Route path='/done'>
						<Complete />
					</Route>
					<Route>
						<Error a='404' b=' Page Not Found'></Error>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
