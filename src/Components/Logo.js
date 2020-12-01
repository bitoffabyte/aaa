import img from "../assets/robovitics.png";
import "./Styles/Logo.css";
import { useHistory } from "react-router-dom";
const Logo = () => {
	const history = useHistory();
	return (
		<div>
			<img
				style={{
					opacity: `${
						history.location.pathname === "/signin" ||
						history.location.pathname === "/"
							? 1
							: 0
					} `,
				}}
				src={img}
				className='logo'
			/>
		</div>
	);
};

export default Logo;
