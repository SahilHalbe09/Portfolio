import React from "react";
import "./skills.css";
import Mongodb from "../../assets/mongodb.png";
import MySQL from "../../assets/mysql.png";
import PostgreSQL from "../../assets/postgresql.png";
import Firebase from "../../assets/firebase.png";
import AWS from "../../assets/aws.png";

const data = [
	{
		id: 1,
		image: Mongodb,
		title: "MongoDB",
	},
	{
		id: 2,
		image: MySQL,
		title: "MySQL",
	},
	{
		id: 3,
		image: PostgreSQL,
		title: "PostgreSQL",
	},
	{
		id: 4,
		image: Firebase,
		title: "Firebase",
	},
	{
		id: 5,
		image: AWS,
		title: "AWS",
	},
];

const Database = () => {
	return (
		<div className="skills__boxes container">
			<h3 className="skills__heading">Databases</h3>
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

export default Database;
