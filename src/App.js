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
				quote=" 'Delusions create the most compelling Beliefs.' "
			></Section>
			<Section
				SectionID="Skills"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="Skills"
				quote="Set your heart upon your work, but never it's reward."
			></Section>
			<Section
				SectionID="Contact"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="Contact"
				quote="'It is the encounter with people that make life worth living'"
			></Section>
		</div>
	);
}

export default App;
