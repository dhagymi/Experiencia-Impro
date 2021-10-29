import { useEffect } from "react";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

import { useClassesContext } from "../contexts/ClassesContext";

import image from "../assets/img.jpg";

const ClassesMain = () => {
	const { setIsClasses } = useClassesContext();
	useEffect(() => {
		setIsClasses(true);

		return () => {
			setIsClasses(false);
		};
	}, [setIsClasses]);

	const { style } = useFloatingAnimation({
		maxDeltaDegAngularAccForCs: 0.002,
		maxDeltaPorcLinearAccForCs: 0.002,
		maxDeltaDegAngularVelForCs: 0.2,
		maxDeltaPorcLinearVelForCs: 0.2,
		maxDeltaDegAngularPos: 20,
		maxDeltaPorcLinearPos: 20,
		deltaTimeMs: 2000,
		expCoeficient: 4,
		angularPositionInitial: 30,
	});
	return (
		<section className="classesMain">
			<div className="classesMain__imageContainer">
				<img className="classesMain__image" alt="" src={image} style={style} />
			</div>
		</section>
	);
};

export default ClassesMain;
