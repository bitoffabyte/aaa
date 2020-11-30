import React from "react";
import img from "../assets/err.svg";
import "./Error.css";
const Error = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				marginTop: "20%",
			}}
		>
			<img src={img}></img>
			<div>
				<span className='eer'>Error</span>
				<br />
				<span className='err'>
					Please sign in with VIT email ID ending in
				</span>
				<span className='errr'> 2020@vitstudent.ac.in</span>
			</div>
		</div>
	);
};

export default Error;
