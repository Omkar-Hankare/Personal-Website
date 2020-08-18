import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FrontEnd, BackEnd, OtherSkills } from "./SkillsList";

function SkillsRender(skill) {
	var s = "";
	for (let i = 0; i < skill.Rating; i++) {
		s += "⭐";
	}
	return (
		<div className="SkillsRender">
			<p>{skill.Name}</p>
			<p>{s}</p>
		</div>
	);
}

function SkillCarousel() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Front End Skills</h1>
						{FrontEnd.map(SkillsRender)}
					</div>

					<Carousel.Caption>
						<h3>First slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Back End Skills</h1>
						{BackEnd.map(SkillsRender)}
					</div>

					<Carousel.Caption>
						<h3>First slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Other technologies</h1>
						{OtherSkills.map(SkillsRender)}
					</div>

					<Carousel.Caption>
						<h3>First slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default SkillCarousel;
