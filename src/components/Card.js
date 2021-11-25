import React from "react";
import zaferes_photo from "../images/katie-zaferes.png";
import ranking_photo from "../images/star.png";
export default function Card({
	img,
	rating,
	reviewCount,
	country,
	title,
	price,
}) {
	return (
		<div className="card">
			<img
				// src={require("../images/" + img)}
				src={zaferes_photo}
				// src="../images/katie-zaferes.png"
				// src={`../images/${props.img}`}
				alt="Katie Zaferes"
				className="card--image"
			/>

			<div className="card--stats">
				<img src={ranking_photo} alt="card star" className="card--star" />
				<span>{rating}</span>
				<span className="gray">({reviewCount}) .</span>
				<span className="gray">{country}</span>
			</div>
			<p>{title}</p>
			<p>
				<span className="bold">From ${price} </span> / person
			</p>
		</div>
	);
}
