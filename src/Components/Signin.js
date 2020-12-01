import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./Styles/Signin.css";
import img from "../assets/robovitics.png";
import { checkIfExists } from "./Checks";
import img2 from "../assets/google.png";
import { useHistory } from "react-router-dom";
import { Redir } from "./Redir";
import { CSSTransition } from "react-transition-group";
import { signIn } from "../firebase-codes";
const Signin = () => {
	const history = useHistory();
	const [auth, updateAuth] = useState(false);
	const [a, ua] = useState(false);
	if (auth && history.location.pathname === "/signin") {
		Redir();
	}
	useEffect(() => {
		const uns = firebase.auth().onAuthStateChanged((user) => {
			updateAuth(!!user);
		});
		setTimeout(() => ua(true), 50);

		return () => {
			uns();
			setTimeout(() => ua(false), 800);
		};
	}, []);
	return (
		<CSSTransition in={a} unmountOnExit classNames='signIn' timeout={500}>
			<div className='qwe'>
				{/* <img src={img} className='landingLogo' /> */}
				<br />
				<img className='googleImg' src={img2} onClick={signIn} />
				<br />
				<span className='vitE'>Please sign in with VIT email ID</span>
			</div>
		</CSSTransition>
	);
};

export default Signin;
