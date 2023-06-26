import React from "react";
import "./about.css";
import AboutImg from "../../assets/avatar-2.svg";

const About = () => {
	return (
		<section className="about container" id="about">
			<h2 className="section__title">About Me</h2>
			<div className="about__container grid">
				<img src={AboutImg} alt="" className="about__img" />

				<div className="about__data grid">
					<div className="about__info">
						<p className="about__description">
							I'm Sahil, a <b>full-stack web developer</b> based in Pune, India, with extensive experience in web development, design, and customization. <br />
							<br /> Proficient in frontend technologies like <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and frameworks such as <b>React</b>, <b>NextJS</b>, and <b>TypeScript</b>, I
							create visually stunning and responsive websites. On the backend, I specialize in <b>Node.js</b>, <b>Express</b>, and databases like <b>MongoDB</b>, <b>Firebase</b>, and{" "}
							<b>Postgres</b>. <br />
							<br /> With a track record of successful full-stack projects, I deliver scalable and user-centric applications. Explore my portfolio to witness my expertise in crafting
							exceptional digital experiences. Let's{" "}
							<a href="#contact" className="contact__btn">
								connect
							</a>{" "}
							and bring your ideas to life.
						</p>
						<a href="" download="Resume-Sahil-Halbe" className="btn">
							Download CV
						</a>
					</div>

					<div className="about__skills grid">
						<div className="skills__data">
							<div className="skills__titles">
								<h3 className="skills__name">Front-End Development</h3>
								<span className="skills__number">90%</span>
							</div>

							<div className="skills__bar">
								<span className="skills__percentage frontend"></span>
							</div>
						</div>

						<div className="skills__data">
							<div className="skills__titles">
								<h3 className="skills__name">Back-End Development</h3>
								<span className="skills__number">80%</span>
							</div>

							<div className="skills__bar">
								<span className="skills__percentage backend "></span>
							</div>
						</div>

						<div className="skills__data">
							<div className="skills__titles">
								<h3 className="skills__name">UI/UX Design</h3>
								<span className="skills__number">60%</span>
							</div>

							<div className="skills__bar">
								<span className="skills__percentage uiux"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
