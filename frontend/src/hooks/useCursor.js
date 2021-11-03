import { useEffect, useState } from "react";

const useCursor = (delay = 0) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		const mouseMoveHandle = (event) => {
			console.log(event);
			let yPosition;
			let xPosition;
			let newDisplay;
			if (event.type === "mousemove") {
				yPosition = event.pageY;
				xPosition = event.pageX;
			} else {
				newDisplay = "none";
			}

			setStyle({
				top: `${yPosition}px`,
				left: `${xPosition}px`,
				transitionDuration: `${delay}s`,
				display: `${newDisplay || "block"}`,
			});
		};
		document.addEventListener("mousemove", mouseMoveHandle);
		document
			.querySelector("main")
			.addEventListener("mousewheel", mouseMoveHandle);
	}, [delay]);

	return { style };
};

export default useCursor;
