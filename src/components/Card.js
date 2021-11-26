import React from "react";
import zaferes_photo from "../images/katie-zaferes.png";
import ranking_photo from "../images/star.png";
export default function Card(props) {
	let badgeText;
	if (props.item.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.item.location === "Online") {
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
				src={process.env.PUBLIC_URL + `/images/${props.item.coverImg}`}
				alt="Katie Zaferes"
				className="card--image"
			/>

			<div className="card--stats">
				<img src={ranking_photo} alt="card star" className="card--star" />
				<span>{props.item.stats.rating}</span>
				<span className="gray">({props.item.stats.reviewCount}) .</span>
				<span className="gray">{props.item.location}</span>
			</div>
			<p className="card--title">{props.item.title}</p>
			<p className="card--price">
				<span className="bold">From ${props.item.price} </span> / person
			</p>
		</div>
	);
}
