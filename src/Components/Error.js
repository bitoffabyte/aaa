import React from "react";
import img from "../assets/err.svg";
import "./Styles/Comp.css";
const Error = ({ a, b }) => {
	return (
		<div className='laaa'>
			<div className='laad'>
				<img src={img} className='iiimg' />
				<div style={{ textAlign: "left" }}>
					<span className='rc'>{a}</span>
					<br />
					<span className='ffd'>{b}</span>
				</div>
			</div>
		</div>
	);
};
export default Error;
