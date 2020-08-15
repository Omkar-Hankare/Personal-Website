import React from "react";

function TypingCarousel() {
	return (
		<div>
			<p className="TypingCarousel">
				I am a{" "}
				<span
					class="txt-rotate"
					data-period="2000"
					data-rotate='[ "Web developer. ", "Web Designer. ", "programmer."]'
				></span>
			</p>
		</div>
	);
}

export default TypingCarousel;
