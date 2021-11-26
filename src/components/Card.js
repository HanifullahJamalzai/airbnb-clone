import React from "react";
import zaferes_photo from "../images/katie-zaferes.png";
import ranking_photo from "../images/star.png";
export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "Online";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img
				// src={require("../images/" + img)}
				// src={zaferes_photo}
				// src="../images/katie-zaferes.png"
				// src={`../images/${props.img}`}
				src={process.env.PUBLIC_URL + `/images/${props.coverImg}`}
				alt="Katie Zaferes"
				className="card--image"
			/>

			<div className="card--stats">
				<img src={ranking_photo} alt="card star" className="card--star" />
				<span>{props.stats.rating}</span>
				<span className="gray">({props.stats.reviewCount}) .</span>
				<span className="gray">{props.location}</span>
			</div>
			<p className="card--title">{props.title}</p>
			<p className="card--price">
				<span className="bold">From ${props.price} </span> / person
			</p>
		</div>
	);
}
