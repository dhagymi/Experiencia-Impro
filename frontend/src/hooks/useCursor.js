import { useEffect, useState } from "react";

const useCursor = () => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		const mouseMoveHandle = (event) => {
			let yPosition;
			let xPosition;
			let newDisplay;

			yPosition = event.clientY;
			xPosition = event.clientX;

			setStyle({
				top: `${yPosition}px`,
				left: `${xPosition}px`,
				display: `${newDisplay || "block"}`,
			});
		};
		document.addEventListener("mousemove", mouseMoveHandle);
	}, []);

	return { style };
};

export default useCursor;
