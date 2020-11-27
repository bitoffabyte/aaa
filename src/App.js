import "./App.css";
import Landing from "./Components/Landing";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Quiz from "./Components/Quiz";
import { initialize } from "./firebase-codes";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
initialize();
function App() {
	const history = useHistory();
	return (
		<Router className='App'>
			<Route path='/' exact>
				{({ match }) => <Landing a={match != null} />}
			</Route>
			<Route path='/signin' exact>
				{({ match }) => <Signin match={match} />}
			</Route>
			<Route path='/quiz'>
				<Quiz />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
		</Router>
	);
}

export default App;
