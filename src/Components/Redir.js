import firebase from "firebase";
import { useHistory } from "react-router-dom";
export const Redir = () => {
	const history = useHistory();
	if (!firebase.auth().currentUser.email.includes("2019@vitstudent.ac.in")) {
		firebase.auth().signOut();
		history.push("/error");
	} else {
		console.log("oioi");
		history.push("/register");
	}
};
/*
export const Redir = () => {
	const history = useHistory();
	if (!firebase.auth().currentUser.email.includes("2019@vitstudent.ac.in")) {
		firebase.auth().signOut();
		console.log(firebase.auth().currentUser.email);
		history.push("/error");
	} else {
		// Api call to check if user exists
		// if (!checkIfExists(firebase.auth().currentUser.email)) {
		// 	history.push("/register");
		// } else {
		// 	history.push("/error");
		// }
		history.push("/register");
	}
};
*/
