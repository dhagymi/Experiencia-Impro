import { useEffect, useState, useRef, memo } from "react";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

const ClassPhoto = ({ source, alternative, animationOptions }) => {
	const [isMouseOver, setIsMouseOver] = useState(false);
	const [photoElement, setPhotoElement] = useState(null);

	const photoReference = useRef();
	const { current } = photoReference;

	useEffect(() => {
		photoReference && setPhotoElement(current);
		photoElement &&
			window.addEventListener("mousemove", (event) => {
				const mouseX = event.x;
				const mouseY = event.y;

				const { x, y, offsetHeight, offsetWidth } = photoElement;

				if (
					mouseX <= x + offsetWidth * 1.2 &&
					mouseX >= x - offsetWidth * 0.2 &&
					mouseY >= y - offsetHeight * 0.2 &&
					mouseY <= y + offsetHeight * 1.2
				) {
					setIsMouseOver(true);
				} else if (!isMouseOver) {
					setIsMouseOver(false);
				}
			});
	}, [current, isMouseOver, photoElement]);

	const { style } = useFloatingAnimation(animationOptions);

	return (
		<img
			className={`classPhoto ${isMouseOver ? "classPhoto--mouseover" : ""}`}
			ref={photoReference}
			src={source}
			alt={alternative}
			style={style}
		/>
	);
};
export default memo(ClassPhoto);
