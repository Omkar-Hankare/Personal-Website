import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Notion from "../Images/notion.png";
function AboutContent() {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">
				I use 'Notion' for <br /> managing workflow
			</Popover.Title>
			<Popover.Content>
				<img src={Notion} alt= "Notion"></img>
			</Popover.Content>
		</Popover>
	);
	return (
		<div className="aboutContent">
			<div className="div1">
				<h1>Hi there! ༼ つ ◕‿◕ ༽つ </h1>
				{/* 〜(꒪꒳꒪)〜  */}
				<p>I like Anime, Games & fried chicken.</p>
				<p>
					I am a Web Designer/developer based in Mumbai,
					<br />
					who enjoys creating beautiful websites and helping others bring their
					ideas to life as well.
				</p>
			</div>
			<div className="div1">
				<h3>How will I tackle your projects?</h3>
				<p>
					I found out that it is difficult to keep track of things like
					functionality and design. Since web-design in all its complexity and
					colourfullness can overwhelming, so I created my own{" "}
					<OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
						<span className="highlight">workflow</span>
					</OverlayTrigger>{" "}
					which focuses on one thing at a time. It is as follows:
				</p>
				<ol>
					<li>Research and Material gathering.</li>
					<li>Creating rough draft of project on paper.</li>
					<li>Creating Skeleton Website & implementing functionalities.</li>
					<li>Redesigning.</li>
				</ol>
			</div>
		</div>
	);
}

export default AboutContent;
