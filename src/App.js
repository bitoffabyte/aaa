import "./App.css";
import Landing from "./Components/Landing";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Quiz from "./Components/Quiz";
import Error from "./Components/Error";
import { initialize } from "./firebase-codes";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
initialize();
function App() {
	const history = useHistory();
	return (
		<Router className='App'>
			<Route path='/' exact>
				<Landing />
			</Route>
			<Route path='/signin' exact>
				<Signin />
			</Route>
			<Route path='/quiz'>
				<Quiz />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
			<Route path='/error'>
				<Error />
			</Route>
		</Router>
	);
}

export default App;
