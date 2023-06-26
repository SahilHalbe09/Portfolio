import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);

	const filterItem = (category) => {
		const updateItems = Menu.filter((CurrentElem) => {
			return CurrentElem.category === category;
		});

		setItems(updateItems);
	};

	return (
		<section className="work section container" id="portfolio">
			<h2 className="section__title">Recent Projects</h2>
			<div className="work__filters">
				<span className="work__item" onClick={() => setItems(Menu)}>
					Everything
				</span>
				<span className="work__item" onClick={() => filterItem("FullStack")}>
					Fullstack
				</span>
				<span className="work__item" onClick={() => filterItem("Frontend")}>
					Frontend
				</span>
				<span className="work__item" onClick={() => filterItem("Backend")}>
					Backend
				</span>
				<span className="work__item" onClick={() => filterItem("Design")}>
					Design
				</span>
			</div>

			<div className="work__container grid">
				{items.map((element) => {
					const { id, image, title, category, live, code } = element;
					return (
						<div className="work__card" key={id}>
							<div className="work__thumbnail">
								<img src={image} alt="" className="work__img" />
								<div className="work__mask"></div>
							</div>

							<span className="work__category">{category}</span>
							<h3 className="work__title">{title}</h3>
							<div className="work__buttons">
								<a href={live} className="work__button" target="_blank" rel="noreferrer">
									<i className="icon-link work__button-icon"></i>
									<span className="work__button-name">Live</span>
								</a>
								<a href={code} className="work__button" target="_blank" rel="noreferrer">
									<i className="icon-folder-alt work__button-icon"></i>
									<span className="work__button-name">Code</span>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
