import { useEffect, useState } from "react";
import img from "../assets/tick.svg";
import "./Styles/Comp.css";
import { CSSTransition } from "react-transition-group";
import "./Styles/Landing.css";
const Complete = () => {
	const [aa, ua] = useState(false);
	useEffect(() => {
		setTimeout(() => ua(true), 50);
		return () => {
			setTimeout(() => ua(false), 800);
		};
	}, []);
	return (
		<CSSTransition in={aa} unmountOnExit classNames='my-node' timeout={500}>
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
		</CSSTransition>
	);
};

export default Complete;
