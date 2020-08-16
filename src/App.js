import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Section from "./Components/Section";
function App() {
	return (
		<div>
			<Profile></Profile>

			<Section
				SectionID="About"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="About"
				quote="Something chessy"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			></Section>
			<Section
				SectionID="Skills"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="Skills"
				quote="Something chessy"
				content="A Carousel with front end and Back End skills"
			></Section>
			<Section
				SectionID="Contact"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="Contact"
				quote="Something chessy"
				content="Details"
			></Section>
		</div>
	);
}

export default App;
