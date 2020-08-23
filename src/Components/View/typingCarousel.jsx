import React from "react";

function TypingCarousel() {
	return (
		<div>
			<p className="TypingCarousel">
				I am a{" "}
				<span
					className="txt-rotate"
					data-period="2000"
					data-rotate='[ " Web Developer. ", " Web Designer. ", " Programmer."]'
				></span>
			</p>
		</div>
	);
}

export default TypingCarousel;
