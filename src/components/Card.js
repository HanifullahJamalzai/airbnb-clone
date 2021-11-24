import React from "react";
import zaferes_photo from "../images/katie-zaferes.png";
import ranking_photo from "../images/star.png";
export default function Card() {
	return (
		<div className="card">
			<img src={zaferes_photo} alt="Katie Zaferes" className="card--image" />
			<div className="card--stats">
				<img src={ranking_photo} alt="card star" className="card--star" />
				<span>5.0</span>
				<span className="gray">(6) .</span>
				<span className="gray">USA</span>
			</div>
			<p>Life Lessons with Katie Zaferes</p>
			<p>
				<span className="bold">From $136 </span> / person
			</p>
		</div>
	);
}
