import React from "react";
import img from "../assets/robovitics.png";
import { StyledLogo } from "./Logo-style";
const Logo = () => {
	return (
		<StyledLogo>
			<img src={img} />
		</StyledLogo>
	);
};

export default Logo;
