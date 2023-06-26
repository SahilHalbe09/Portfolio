import React, { useState } from "react";
import "./slidebar.css";
import Logo from "../../assets/logo.png";
import { AiOutlineHome, AiOutlineUser, AiOutlineCode } from "react-icons/ai";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { SlBubble } from "react-icons/sl";
import { PiCertificate } from "react-icons/pi";

const Slidebar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<aside className={toggle ? "show-menu" : "aside"}>
				<a href="#home" className="nav__logo">
					<img src={Logo} alt="" />
				</a>

				<nav className="nav">
					<div className="nav__menu">
						<ul className="nav__list">
							<li className="nav__item">
								<a href="#home" className="nav__link">
									{/* <i className="icon-home"></i> */}
									<div className="tooltip">
										<AiOutlineHome />
										<span className="tooltiptext">Home</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link">
									{/* <i className="icon-user"></i> */}
									<div className="tooltip">
										<AiOutlineUser />
										<span className="tooltiptext">About Me</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#skills" className="nav__link">
									{/* <i className="icon-briefcase"></i> */}
									<div className="tooltip">
										<AiOutlineCode />
										<span className="tooltiptext">My Skills</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#certificates" className="nav__link">
									{/* <i className="icon-bubble"></i> */}
									<div className="tooltip">
										<PiCertificate />
										<span className="tooltiptext">Certificates</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#portfolio" className="nav__link">
									{/* <i className="icon-layers"></i> */}
									<div className="tooltip">
										<BsCodeSlash />
										<span className="tooltiptext">Projects</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#resume" className="nav__link">
									{/* <i className="icon-graduation"></i> */}
									<div className="tooltip">
										<BsBriefcase />
										<span className="tooltiptext">Experience</span>
									</div>
								</a>
							</li>
							<li className="nav__item">
								<a href="#contact" className="nav__link">
									{/* <i className="icon-bubble"></i> */}
									<div className="tooltip">
										<SlBubble />
										<span className="tooltiptext">Contact Me</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div className="nav__footer">
					<span className="copyright">&copy; 2022 - 2023.</span>
				</div>
			</aside>

			<div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => setToggle(!toggle)}>
				<i className="icon-menu"></i>
			</div>
		</>
	);
};

export default Slidebar;
