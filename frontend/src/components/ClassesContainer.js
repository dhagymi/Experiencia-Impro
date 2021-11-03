import { useRef, useEffect } from "react";

import ClassesMain from "../pages/ClassesMain";
import ClassesPhotos from "../pages/ClassesPhotos";

import { useClassesContext } from "../contexts/ClassesContext";

import useScrollTransition from "../hooks/useScrollTransition";

const ClassesContainer = () => {
	const {
		containerReference,
		classesMainReference,
		setPageActive,
		setContainerReference,
		pageActive,
	} = useClassesContext();

	useScrollTransition(
		setPageActive,
		containerReference,
		classesMainReference,
		2
	);

	const reference = useRef(null);

	useEffect(() => {
		setContainerReference(reference.current);
	}, [setContainerReference]);
	return (
		<div className="classesContainer">
			<div
				className="classesContainer__pagesContainer"
				style={{ top: `-${(pageActive - 1) * 100}vh` }}
			>
				<div
					ref={reference}
					className="classesContainer__pages classesContainer__pages--1"
				>
					<ClassesMain />
				</div>
				<div className="classesContainer__pages classesContainer__pages--2">
					<ClassesPhotos />
				</div>
			</div>
		</div>
	);
};

export default ClassesContainer;
