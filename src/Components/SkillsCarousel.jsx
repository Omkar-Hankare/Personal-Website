import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FrontEnd, BackEnd, OtherSkills } from "./SkillsList";

function SkillsRender(skill) {
	var s = "";
	for (let i = 0; i < skill.Rating; i++) {
		s += "⭐";
	}
	return (
		<li className= "skill_item">
			<span class="ability-title">{skill.Name}</span>
			<span class="ability-score">
				<span class="glyphicon glyphicon-star filled">{s}</span>
			</span>
		</li>
	);
}

function SkillCarousel() {
	return (
		<div className="SkillCarousel">
			<Carousel>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Front End Skills</h1>
						<ul className="skill_ul">{FrontEnd.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Back End Skills</h1>
						<ul className="skill_ul">{BackEnd.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="FrontEnd_skills">
						<h1>Other technologies</h1>
						<ul className="skill_ul">{OtherSkills.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default SkillCarousel;
