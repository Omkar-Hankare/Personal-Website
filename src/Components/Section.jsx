import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Anchors from "./Anchors";
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
						{props.content}
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
