import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Anchors from "./Anchors";
import TypingCarousel from "./typingCarousel";
function Profile() {
	return (
		<div class="Profile">
			<Container fluid>
				{/* Stack the columns on mobile by making one full-width and the other half-width */}
				<Row>
					<Col xs={12} md={12}>
						<h1>Omkar Hankare</h1>
						<TypingCarousel></TypingCarousel>
						<Anchors></Anchors>
						<Button variant="outline-dark">Dark</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Profile;
