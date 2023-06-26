import React from "react";
import "./skills.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import NextJs from "../../assets/nextjs.png";
import TypeScript from "../../assets/typescript.png";

const data = [
	{
		id: 1,
		image: HTML,
		title: "HTML",
	},
	{
		id: 2,
		image: CSS,
		title: "CSS",
	},
	{
		id: 3,
		image: JavaScript,
		title: "JavaScript",
	},
	{
		id: 4,
		image: ReactImg,
		title: "React",
	},
	{
		id: 5,
		image: NextJs,
		title: "NextJS",
	},
	{
		id: 6,
		image: TypeScript,
		title: "TypeScript",
	},
];

const Frontend = () => {
	return (
		<div className="skills__boxes container">
			<h3 className="skills__heading">Front-End</h3>
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

export default Frontend;
