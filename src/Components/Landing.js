import React, { useState, useEffect } from "react";
import "./Styles/Landing.css";
import Signin from "./Signin";

import img from "../assets/robovitics.png";
import img2 from "../assets/play.svg";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

const Landing = ({ match }) => {
	const history = useHistory();
	const [a, ua] = useState(false);
	useEffect(() => {
		setTimeout(() => ua(true), 50);
		return () => {
			setTimeout(() => ua(false), 800);
		};
	}, []);
	return (
		<div className='asd'>
			<div className='dsa'>
				<CSSTransition
					in={a}
					timeout={800}
					classNames='my-node'
					unmountOnExit
				>
					<div
						className='dib'
						// style={{ transform: `translateY(${-aaa + "px"}) ` }}
					>
						<span className='ccs'>
							Core Committee Selection - 2020
						</span>
					</div>
				</CSSTransition>

				{/* <CSSTransition in={true} timeout={800} classNames='logoAni'> */}
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
				{/* </CSSTransition> */}

				<br />
				<CSSTransition in={true} timeout={800} unmountOnExit>
					<img
						src={img2}
						className='play'
						onClick={() => {
							history.push("/signin");
						}}
						// style={{ top: `${aaa.y + "px"}` }}
					/>
				</CSSTransition>
				{/* <Route path='/signin'>
				<Signin />
			</Route> */}
			</div>
		</div>
	);
};

export default Landing;
