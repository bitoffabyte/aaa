import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./Signin.css";
import img from "../assets/robovitics.png";
import { checkIfExists } from "./Checks";
import img2 from "../assets/google.png";
import { useHistory } from "react-router-dom";
import { Redir } from "./Redir";
// import { CSSTransition } from "react-transition-group";
import { signIn } from "../firebase-codes";
const Signin = () => {
	const history = useHistory();
	const [auth, updateAuth] = useState(false);
	if (auth && history.location.pathname === "/signin") {
		Redir();
	}
	console.log(auth);
	useEffect(() => {
		const uns = firebase.auth().onAuthStateChanged((user) => {
			updateAuth(!!user);
		});
		return () => uns();
	}, []);
	return (
		// <CSSTransition
		// 	in={match}
		// 	unmountOnExit
		// 	classNames='signIn'
		// 	timeout={1500}
		// >
		<div className='qwe'>
			<img src={img} className='landingLogo' />
			<br />
			<img className='googleImg' src={img2} onClick={signIn} />
			<br />
			<span className='vitE'>Please sign in with VIT email ID</span>
		</div>
		// </CSSTransition>
	);
};

export default Signin;
