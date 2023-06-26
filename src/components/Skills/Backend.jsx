import React from "react";
import "./skills.css";
import Node from "../../assets/nodejs.png";
import Express from "../../assets/express.png";
import Socket from "../../assets/socket.png";
import Axios from "../../assets/axios.png";

const data = [
	{
		id: 1,
		image: Node,
		title: "Node.js",
	},
	{
		id: 2,
		image: Express,
		title: "Express",
	},
	{
		id: 3,
		image: Socket,
		title: "Socket.io",
	},
	{
		id: 4,
		image: Axios,
		title: "Axios",
	},
];

const Backend = () => {
	return (
		<div className="skills__boxes container">
			<h3 className="skills__heading">Back-End</h3>
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

export default Backend;
