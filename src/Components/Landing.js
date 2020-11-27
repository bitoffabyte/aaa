import React, { useState, useEffect } from "react";
import "./Landing.css";
import img from "../assets/robovitics.png";
import img2 from "../assets/play.svg";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

const Landing = ({ a }) => {
	const history = useHistory();
	console.log(a);
	return (
		<div style={{ width: "100vw", textAlign: "center" }}>
			<CSSTransition
				in={a}
				timeout={800}
				classNames='my-node'
				unmountOnExit
			>
				<div className='dib'>
					<span className='wel'>WELCOME</span>
					<span className='to'>to</span>
					<br />
					<span className='ccs'>Core Committee Selection - 2020</span>
				</div>
			</CSSTransition>

			<CSSTransition in={a} timeout={800} classNames='logoAni'>
				<img
					src={img}
					className={`${
						history.location.pathname == "/signin" ||
						history.location.pathname == "/"
							? history.location.pathname == "/signin"
								? "landingLogo logo2"
								: "landingLogo"
							: "logoGone"
					}`}
				/>
			</CSSTransition>

			<br />
			<CSSTransition in={a} timeout={800} unmountOnExit>
				<img
					src={img2}
					className='play'
					onClick={() => {
						history.push("/signin");
					}}
				/>
			</CSSTransition>
		</div>
	);
};

export default Landing;
