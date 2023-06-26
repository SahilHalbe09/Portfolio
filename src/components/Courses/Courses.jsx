import "./courses.css";
import Udemy from "../../assets/Udemy.png";
import JPMorgan from "../../assets/JPMorgan.png";
import Coursera from "../../assets/Coursera.png";

const Courses = () => {
	return (
		<section className="courses section container" id="certificates">
			<h2 className="section__title">Courses & Certificates</h2>
			<div className="course__container">
				<div className="course__card">
					<img src={Udemy} alt="" className="course__img" />
					<div className="course__desc">
						<h3 className="course__title">The Complete 2023 Web Development Bootcamp | Udemy</h3>
						<a href="https://www.udemy.com/certificate/UC-29401313-00cc-4eef-ab12-91118f75f599/" className="course__button" target="_blank" rel="noreferrer">
							<i className="icon-action-redo course__button-icon"></i>
							<span className="course__button-name">Verify</span>
						</a>
					</div>
				</div>
				<div className="course__card">
					<img src={Coursera} alt="" className="course__img" />
					<div className="course__desc">
						<h3 className="course__title">Introduction to Front-End Development | Coursera & Meta</h3>
						<a href="https://www.coursera.org/account/accomplishments/verify/3PYQ677TWZSL" className="course__button" target="_blank" rel="noreferrer">
							<i className="icon-action-redo course__button-icon"></i>
							<span className="course__button-name">Verify</span>
						</a>
					</div>
				</div>
				<div className="course__card">
					<img src={JPMorgan} alt="" className="course__img" />
					<div className="course__desc">
						<h3 className="course__title">J.P.Morgan Software Engineering Virtual Experience | Forage</h3>
						<a href="#home" className="course__button" target="_blank" rel="noreferrer">
							<i className="icon-action-redo course__button-icon"></i>
							<span className="course__button-name">Verify</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Courses;
