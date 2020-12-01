import React from "react";
import img from "../assets/err.svg";
import "./Styles/Comp.css";
const Error = () => {
	return (
		<div className='laaa'>
			<div className='laad'>
				<img src={img} className='iiimg' />
				<div style={{ textAlign: "left" }}>
					<span className='rc'>Error</span>
					<br />
					<span className='ffd'>
						For further details, please check your email.
					</span>
				</div>
			</div>
		</div>
	);
};
export default Error;
