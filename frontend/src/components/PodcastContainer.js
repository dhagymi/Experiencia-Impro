import { useRef, useEffect } from "react";

import PodcastMain from "../pages/PodcastMain";
import PodcastVoices from "../pages/PodcastVoices";

import { usePodcastContext } from "../contexts/PodcastContext";

import useScrollTransition from "../hooks/useScrollTransition";

const PodcastContainer = () => {
	const {
		containerReference,
		classesMainReference,
		setPageActive,
		setContainerReference,
		pageActive,
	} = usePodcastContext();

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
					<PodcastMain />
				</div>
				<div className="classesContainer__pages classesContainer__pages--2">
					<PodcastVoices />
				</div>
			</div>
		</div>
	);
};

export default PodcastContainer;
