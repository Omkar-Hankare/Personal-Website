import React from "react";
import Nav from "react-bootstrap/Nav";

function Anchors() {
	return (
		<div class="Anchors">
			<Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
				<Nav.Item as="li">
					<Nav.Link href="#About">About</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li" className="Anchor_link2">
					<Nav.Link href="#Skills" eventKey="link-1">
						Skills
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link href="#Contact" eventKey="link-2">
						Contact
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}

export default Anchors;
