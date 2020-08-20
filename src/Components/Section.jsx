import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Anchors from "./Anchors";
import SkillCarousel from "./SkillsCarousel";
function Section(props) {
	return (
		<div id={props.SectionID}>
			<Container fluid>
				<Row>
					<Col bsPrefix={"col-xs-12 col-md-6 " + props.HeadingCol}>
						<h1>{props.heading}</h1>
						<p>{props.quote}</p>
						<Anchors></Anchors>
					</Col>
					<Col bsPrefix={"col " + props.ContentCol}>
						{/* ABOUT CONTENT */}
						{props.SectionID === "About" && (
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum."
								</p>
							</div>
						)}
						{/* SKILL CONTENT */}
						{props.SectionID === "Skills" && (
							<div>
								<SkillCarousel></SkillCarousel>
							</div>
						)}
						{/* CONTACT CONTENT */}
						{props.SectionID === "Contact" && (
							<div>
								<h2>You have unread messages.</h2>
								<p>Omkar Hankare</p>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Section;
