import React from "react";
import airbnb_logo from "../images/airbnb-logo.png";

export default function Navbar() {
	return (
		<nav>
			<img src={airbnb_logo} alg="logo" className="nav--logo" />
		</nav>
	);
}
