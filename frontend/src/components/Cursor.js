import { createPortal } from "react-dom";
import useCursor from "../hooks/useCursor";
const Cursor = () => {
	const { style: outterCircleStyle } = useCursor();
	const { style: innerCircleStyle } = useCursor();
	return (
		<div className="cursor">
			<div className="cursor__outerCircle" style={outterCircleStyle}></div>
			<div className="cursor__innerCircle" style={innerCircleStyle}></div>
		</div>
	);
};

const CursorWrapper = () => {
	return createPortal(<Cursor />, document.getElementById("cursor"));
};

export default CursorWrapper;
