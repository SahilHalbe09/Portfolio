import React from "react";
import "./home.css";

const HeaderSocials = () => {
	return (
		<div className="home__socials">
			{/* Twitter */}
			<a href="https://twitter.com/sahil_halbe" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-twitter"></i>
			</a>

			{/* LinkedIn */}
			<a href="https://www.linkedin.com/in/sahil-halbe-74aa671b2/" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-linkedin"></i>
			</a>

			{/* GitHub */}
			<a href="https://github.com/SahilHalbe09" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-github"></i>
			</a>

			{/* YouTube */}
			<a href="https://www.youtube.com/channel/UC2_LRcj3EALavxNc8cX6-4w" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-youtube"></i>
			</a>

			{/* Medium */}
			<a href="https://medium.com/@sahilhalbe" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-medium"></i>
			</a>

			{/* Mail */}
			<a href="mailto: sahilhalbe.business@gmail.com" className="home__social-link" target="_blank" rel="noreferrer">
				<i className="fa-regular fa-envelope"></i>
			</a>
		</div>
	);
};

export default HeaderSocials;
