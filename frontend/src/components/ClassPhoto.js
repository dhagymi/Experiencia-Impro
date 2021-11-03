import { useRef, memo } from "react";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

const ClassPhoto = ({
	source,
	alternative,
	animationOptions,
	hoverClass = "",
}) => {
	const photoReference = useRef();

	const { style } = useFloatingAnimation(animationOptions);

	return (
		<img
			className={`classPhoto ${hoverClass ? `classPhoto--${hoverClass}` : ""}`}
			ref={photoReference}
			src={source}
			alt={alternative}
			style={style}
		/>
	);
};
export default memo(ClassPhoto);
