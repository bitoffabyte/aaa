import React from "react";
import img from "../assets/tick.svg";
import "./Styles/Comp.css";
const Complete = () => {
	return (
		<div className='laaa'>
			<div className='laad'>
				<img src={img} className='iiimg' />
				<div>
					<span className='rc'>Registration Complete!!!</span>
					<br />
					<span className='ffd'>
						For further details, please check your email.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Complete;
