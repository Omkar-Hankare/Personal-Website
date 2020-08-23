import React from "react";
import "./App.css";
import Profile from "./Components/View/Profile";
import Section from "./Components/View/Section";
import Button from "react-bootstrap/Button";
function App() {
	var day = new Date();
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
				quote=" 'Set your heart upon your work, but never it's reward.' "
			></Section>
			<Section
				SectionID="Contact"
				HeadingCol="HeadingCol"
				ContentCol="ContentCol"
				heading="Contact"
				quote="'It is the encounter with people that make life worth living'"
			></Section>
			<footer>
				<a href= "#">
					<Button variant="outline-light">Back to the top</Button>
				</a>
				<p>Made with ❤ by Omkar Hankare </p>
				<p>© Copyright {day.getFullYear()}</p>
			</footer>
		</div>
	);
}

export default App;
