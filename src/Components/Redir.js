import firebase from "firebase";
import { useHistory } from "react-router-dom";
export const Redir = () => {
	const history = useHistory();
	console.log(firebase.auth().currentUser.email);
	if (
		firebase.auth().currentUser.email.includes("2019@vitstudent.ac.in") ||
		firebase.auth().currentUser.email.includes("2018@vitstudent.ac.in")
	) {
		history.push("/register");
	} else {
		console.log("asdasdpp");
		history.push("/error");
		firebase.auth().signOut();
	}
};
