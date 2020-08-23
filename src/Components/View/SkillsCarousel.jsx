import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FrontEnd, BackEnd, OtherSkills, Tools } from "../SkillsList";

function CreateRating(num) {
	return <i class="far fa-star"></i>;
}

function SkillsRender(skill) {
	var r = [];

	for (let i = 0; i < skill.Rating; i++) {
		var rating = {};
		rating.key = i + 1;
		rating.score = i + 1;
		r.push(rating);
	}
	return (
		<li className="skill_item">
			<span class="ability-title">{skill.Name}</span>
			<span class="ability-score">
				<span>{r.map(CreateRating)}</span>
			</span>
		</li>
	);
}

function SkillCarousel() {
	return (
		<div className="SkillCarousel">
			<Carousel>
				<Carousel.Item>
					<h1>Front End Skills</h1>
					<div className="FrontEnd_skills">
						<ul className="skill_ul">{FrontEnd.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<h1>Back End Skills</h1>
					<div className="FrontEnd_skills">
						<ul className="skill_ul">{BackEnd.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<h1>Other technologies</h1>
					<div className="FrontEnd_skills">
						<h2>Programming Languages</h2>
						<ul className="skill_ul">{OtherSkills.map(SkillsRender)}</ul>
						<h2>Tools I use:</h2>
						<ul className="skill_ul">{Tools.map(SkillsRender)}</ul>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default SkillCarousel;
