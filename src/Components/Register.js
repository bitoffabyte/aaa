import React, { useRef, useState, useEffect } from "react";
import { email as mail } from "../firebase-codes";
import $ from "jquery";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { checkIfExists, chkUser } from "./Checks";
import Complete from "./Complete";
import "./Styles/Register.css";
import { CSSTransition } from "react-transition-group";
import "./Styles/Signin.css";
const Register = () => {
	const history = useHistory();
	const phno = useRef();
	const reg = useRef();
	const rea = useRef();
	const [aa, ua] = useState(false);
	const [phck, updatePhck] = useState(true);
	const [rgck, updatergck] = useState(true);
	const [reck, updatereck] = useState(true);
	const [suc, updateSuc] = useState(false);
	// This is initiall false to see reg form make it false until backend is done
	// once backend is done add useState(false)

	useEffect(() => {
		// console.log(!!firebase.auth().currentUser, "asdasd");
		setTimeout(() => ua(true), 50);

		const uns = firebase.auth().onAuthStateChanged((user) => {
			console.log(!!user);
			if (!user) {
				history.push("/signin");
			} else if (chkUser(user.email)) {
				chkUser(true);
			}
		});
		return () => {
			uns();
			setTimeout(() => ua(false), 800);
		};

		// try {
		// 	const user = await firebase.auth().currentUser;
		// 	console.log(user, "asdasdasdasd");

		// 	if (!user) {
		// 		history.push("/");
		// 	} else if (suc != chkUser(user.email))
		// 		updateSuc(chkUser(user.email));
		// } catch (err) {
		// 	console.log(err);
		// }
	}, []);
	const submitHandler = async (e) => {
		e.preventDefault();
		if (
			phno.current.value.length !== 10 ||
			!/^\d+$/.test(phno.current.value)
		) {
			updatePhck(false);
		} else {
			updatePhck(true);
		}
		if (
			!/20[A-Z][A-Z][A-Z]\d\d\d\d/.test(
				reg.current.value.toUpperCase()
			) ||
			reg.current.value.length !== 9
		) {
			updatergck(false);
		} else {
			updatergck(true);
		}
		if (
			rea.current.value.split(" ").length < 100 ||
			rea.current.value.split(" ").length > 200
		) {
			updatereck(false);
		} else {
			updatereck(true);
		}
		if (
			phno.current.value.length === 10 &&
			/^\d+$/.test(phno.current.value) &&
			reg.current.value.length === 9 &&
			/20[A-Z][A-Z][A-Z]\d\d\d\d/.test(reg.current.value.toUpperCase()) &&
			!(
				rea.current.value.split(" ").length < 100 ||
				rea.current.value.split(" ").length > 200
			)
		) {
			console.log(reck);
			const email = await mail();
			const phone = phno.current.value;
			const regno = reg.current.value.toUpperCase();
			const reason = rea.current.value;
			const det = {
				email,
				phone,
				regno,
				reason,
			};
			console.log("post", det);
			$.post("http://ccs-robovitics.herokuapp.com/register", det, (data, err) => {
				window.location.replace('/done');
			});
			// post req
			// once a 200 res is recieved
			// updateSuc(true);
		}
	};
	// firebase.auth().signOut();

	return !suc ? (
		<CSSTransition in={aa} unmountOnExit classNames='asddsa' timeout={500}>
			{/* <div
				styld={{
					width: "100vw",
					height: "100vh",
					overflow: "auto",
					display: "flex",
					justifyContent: "center",
				}}
			> */}
			{/* <div className='reg'> */}
			<div className='abc'>
				<span className='head1'>One last step..</span>
				<br />
				<span className='head2'>Fill the details carefully</span>
				<br />
				<br />

				<form onSubmit={submitHandler}>
					<label className='formLabel'>Phone Number</label>
					<span className='ermsg'>
						{!phck ? "Enter a valid Phone Number" : ""}
					</span>

					<br />
					<input
						type='tel'
						className={`${phck ? "input1" : "input1 er"}`}
						placeholder='Phone Number'
						ref={phno}
						name='phone'
					/>
					<br />
					<br />
					<label className='formLabel'>Registration Number</label>
					<span className='ermsg'>
						{!rgck ? "Enter a valid Registration Number" : ""}
					</span>
					<br />
					<input
						type='text'
						className={`${rgck ? "input1" : "input1 er"}`}
						placeholder='Registration Number'
						ref={reg}
						name='regno'
						style={{ textTransform: "uppercase" }}
					/>

					<br />
					<br />
					<label className='formLabel'>
						Why do you want to join RoboVITics?
					</label>
					<span className='ermsg'>
						{!reck ? "Please keep it 100 - 200 words" : ""}
					</span>
					<br />
					<textarea
						type='text'
						className={`${reck ? "input3" : "input3 er"}`}
						placeholder='Answer in 100-200 words'
						ref={rea}
						name='reason'
					/>

					<br />
					<br />
					<button type='submit' className='subBtn'>
						Submit
					</button>
				</form>
			</div>
			{/* </div> */}
			{/* </div> */}
		</CSSTransition>
	) : (
		<Complete />
	);
};

export default Register;
