import { useRef, useEffect } from "react";

import PodcastMain from "../pages/PodcastMain";
import PodcastVoices from "../pages/PodcastVoices";

import { usePodcastContext } from "../contexts/PodcastContext";

import useScrollTransition from "../hooks/useScrollTransition";

const PodcastContainer = () => {
	const {
		containerReference,
		podcastMainReference,
		setPageActive,
		setContainerReference,
		pageActive,
	} = usePodcastContext();

	useScrollTransition(
		setPageActive,
		containerReference,
		podcastMainReference,
		2
	);

	const reference = useRef(null);

	useEffect(() => {
		setContainerReference(reference.current);
	}, [setContainerReference]);
	return (
		<div className="podcastContainer">
			<div
				className="podcastContainer__pagesContainer"
				style={{ top: `-${(pageActive - 1) * 100}vh` }}
			>
				<div
					ref={reference}
					className="podcastContainer__pages podcastContainer__pages--1"
				>
					<PodcastMain />
				</div>
				<div className="podcastContainer__pages podcastContainer__pages--2">
					<PodcastVoices />
				</div>
			</div>
		</div>
	);
};

export default PodcastContainer;
