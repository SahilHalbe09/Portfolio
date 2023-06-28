import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
	const form = useRef();

	const [loading, setLoading] = useState(false);

	// console.log(process.env.REACT_APP_YOUR_TEMPLATE_ID, process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_PUBLIC_KEY);

	const sendEmail = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs.sendForm("service_1qld9rq", "template_uvd2anr", form.current, "wRXVxGTYpTv8fmpJN").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<section className="contact container section" id="contact">
			<h2 className="section__title">Get In Touch</h2>
			<div className="contact__container grid">
				<div className="contact__info">
					<h3 className="contact__title">let's have a chat</h3>
					<p className="contact__details">Don't like forms? Send me an email.</p>
				</div>

				<form className="contact__form" ref={form} onSubmit={sendEmail}>
					<div className="contact__form-group">
						<div className="contact__form-div">
							<input type="text" name="user_name" className="contact__form-input" placeholder="Your name" required />
						</div>
						<div className="contact__form-div">
							<input type="email" name="user_email" className="contact__form-input" placeholder="Your email" required />
						</div>
					</div>
					<div className="contact__form-div">
						<input type="text" name="subject" className="contact__form-input" placeholder="Subject line" required />
					</div>
					<div className="contact__form-div contact__form-area">
						<textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Your Message" required></textarea>
					</div>
					<input type="submit" value={loading ? "Sending..." : "Send"} className="btn" />
				</form>
			</div>
		</section>
	);
};

export default Contact;
