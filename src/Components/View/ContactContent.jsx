import React from "react";
function ContactContent(params) {
	return (
		<div className="ContactContent">
			<a href="https://www.linkedin.com/in/omkar-hankare/">
				<i class="fab fa-linkedin fa-5x"></i>
			</a>
			<a href="https://www.instagram.com/omkar_hankare_/">
				<i class="fab fa-instagram fa-5x"></i>
			</a>
			<a href="https://twitter.com/Omkar_Hankare_">
				<i class="fab fa-twitter fa-5x"></i>
			</a>

			<a href="#Contact">
				<div class="dropdown">
					<i class="far fa-envelope fa-5x"></i>
					<div class="dropdown-content">
						<p>omkarhankare1268@gmail.com</p>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ContactContent;
