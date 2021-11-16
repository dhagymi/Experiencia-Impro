import { useEffect, useState } from "react";

const useCursor = (delay = 0) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		const mouseMoveHandle = (event) => {
			let yPosition;
			let xPosition;
			let newDisplay;

			console.log(event);
			yPosition = event.clientY;
			xPosition = event.clientX;

			setStyle({
				top: `${yPosition}px`,
				left: `${xPosition}px`,
				transitionDuration: `${delay}s`,
				display: `${newDisplay || "block"}`,
			});
		};
		document.addEventListener("mousemove", mouseMoveHandle);
	}, [delay]);

	return { style };
};

export default useCursor;
