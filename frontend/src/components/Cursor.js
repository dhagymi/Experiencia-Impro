import useCursor from "../hooks/useCursor";
const Cursor = () => {
	const { style: outterCircleStyle } = useCursor();
	const { style: innerCircleStyle } = useCursor(0.2);
	return (
		<>
			<div className="cursor" style={outterCircleStyle}></div>
			<div className="cursor__innerCircle" style={innerCircleStyle}></div>
		</>
	);
};

export default Cursor;
