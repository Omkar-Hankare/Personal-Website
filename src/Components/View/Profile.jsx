import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Anchors from "./Anchors";
import TypingCarousel from "./typingCarousel";
function Profile() {
	return (
		<div className="Profile">
			<div className="Profile1">
				<Container fluid>
					<Row>
						<Col xs={12} md={12}>
							<h1>Omkar Hankare</h1>
							<TypingCarousel></TypingCarousel>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="Profile2">
				<Container fluid>
					<Row>
						<Col>
							<a href="#About">
								<div class="arrow">
									<span></span>
									<span></span>
								</div>
							</a>

							<Anchors></Anchors>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Profile;
