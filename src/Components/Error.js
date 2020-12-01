import { useState, useEffect } from "react";
import img from "../assets/err.svg";
import "./Styles/Comp.css";
import { CSSTransition } from "react-transition-group";
import "./Styles/Landing.css";
const Error = ({ a, b }) => {
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
					<div style={{ textAlign: "left" }}>
						<span className='rc'>{a}</span>
						<br />
						<span className='ffd'>{b}</span>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};
export default Error;
