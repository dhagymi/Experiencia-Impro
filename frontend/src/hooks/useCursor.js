import { useEffect, useState } from "react";

const useCursor = (delay = 0) => {
	const [style, setStyle] = useState({});
	useEffect(() => {
		const mouseMoveHandle = (event) => {
			const yPosition = event.pageY;
			const xPosition = event.pageX;

			setStyle({
				top: `${yPosition}px`,
				left: `${xPosition}px`,
				transitionDuration: `${delay}s`,
			});
		};
		document.addEventListener("mousemove", mouseMoveHandle);
	}, [delay]);

	return { style };
};

export default useCursor;
