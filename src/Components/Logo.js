import img from "../assets/robovitics.png";
import "./Styles/Logo.css";
import { useHistory } from "react-router-dom";
const Logo = () => {
	const a = { display: "none" };
	const b = { display: "block" };
	const history = useHistory();
	return (
		<div>
			<img
				// style={}
				src={img}
				className='logo'
			/>
		</div>
	);
};

export default Logo;
