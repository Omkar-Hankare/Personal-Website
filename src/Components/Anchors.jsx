import React from "react";
import Nav from "react-bootstrap/Nav";

function Anchors() {
	return (
		<Nav defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Nav.Link href="/home">About</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li" className="Anchor_link2">
				<Nav.Link eventKey="link-1">Skills</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-2">Contact</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Anchors;
