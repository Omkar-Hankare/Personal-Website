import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Anchors from "./Anchors";
import SkillCarousel from "./SkillsCarousel";
import AboutContent from "./AboutContent";
import ContactContent from './ContactContent'
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
								<AboutContent></AboutContent>
							</div>
						)}
						{/* SKILL CONTENT */}
						{props.SectionID === "Skills" && <SkillCarousel></SkillCarousel>}
						{/* CONTACT CONTENT */}
						{props.SectionID === "Contact" && (
							<ContactContent></ContactContent>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Section;
