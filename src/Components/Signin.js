import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./Signin.css";
import img from "../assets/google.png";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { signIn, auth } from "../firebase-codes";
const Signin = ({ match }) => {
	const history = useHistory();
	const [auth, updateAuth] = useState(false);
	if (auth && history.location.pathname === "/signin") {
		history.push("/redir");
	}
	if (auth) {
		console.log("lol");
	}
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			updateAuth(!!user);
			console.log("user", firebase.auth().currentUser.email);
		});
	}, []);
	return (
		<CSSTransition
			in={match}
			unmountOnExit
			classNames='signIn'
			timeout={1300}
		>
			<div style={{ textAlign: "center" }}>
				<img className='googleImg' src={img} onClick={signIn} />
				<br />
				<span className='vitE'>Please sign in with VIT email ID</span>
			</div>
		</CSSTransition>
	);
};

export default Signin;
