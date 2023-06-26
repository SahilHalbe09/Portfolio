import React from "react";
import "./skills.css";
import Boostrap from "../../assets/bootstrap.png";
import Tailwind from "../../assets/tailwind.png";
import SaSS from "../../assets/sass.png";
import Material from "../../assets/material.png";
import Chakra from "../../assets/chakra-ui.svg";

const data = [
	{
		id: 1,
		image: Boostrap,
		title: "Bootstrap",
	},
	{
		id: 2,
		image: Tailwind,
		title: "Tailwind",
	},
	{
		id: 3,
		image: SaSS,
		title: "SaSS",
	},
	{
		id: 4,
		image: Material,
		title: "Material UI",
	},
	{
		id: 5,
		image: Chakra,
		title: "Chakra UI",
	},
];

const Framworks = () => {
	return (
		<div className="skills__boxes container">
			<h3 className="skills__heading">CSS Frameworks</h3>
			<div className="skills__container grid">
				{data.map(({ id, image, title }) => {
					return (
						<div className="skills__box" key={id}>
							<img src={image} alt="" className="skills__img" />
							<h3 className="skills__title">{title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Framworks;
