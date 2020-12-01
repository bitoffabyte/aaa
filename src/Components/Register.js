import React, { useRef, useState, useEffect } from "react";
import { email as mail } from "../firebase-codes";
import $ from "jquery";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { checkIfExists } from "./Checks";

import "./Styles/Register.css";
const Register = () => {
	const history = useHistory();
	if (firebase.auth().currentUser) {
		// history.push("/signin");
	}
	if (firebase.auth().currentUser)
		if (checkIfExists(firebase.auth().currentUser.email)) {
		}
	console.log("sdfgijabg");
	const phno = useRef();
	const reg = useRef();
	const rea = useRef();
	const [phck, updatePhck] = useState(true);
	const [rgck, updatergck] = useState(true);
	const [reck, updatereck] = useState(true);
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
			!phno.current.value.length !== 10 &&
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
			$.post("http://127.0.0.1:5000/register", det, (data, err) => {
				console.log(data);
			});
			// post req
		}
	};
	// firebase.auth().signOut();

	return (
		<div styld={{ width: "100vw", height: "100vh" }}>
			<div className='reg'>
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
			</div>
		</div>
	);
};

export default Register;
