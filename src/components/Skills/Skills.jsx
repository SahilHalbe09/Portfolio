import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Framworks from "./Framworks";
import Backend from "./Backend";
import Database from "./Database";

const Skills = () => {
	return (
		<div className="skills container section" id="skills">
			<h2 className="section__title">Technical Skills</h2>
			<Frontend />
			<Framworks />
			<Backend />
			<Database />
		</div>
	);
};

export default Skills;
