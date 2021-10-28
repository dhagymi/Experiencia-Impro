import { useRef, useEffect } from "react";

import Home from "../pages/Home";
import Why from "../pages/Why";
import About from "../pages/About";

import { useHomeContext } from "../contexts/HomeContext";

const HomeContainer = () => {
	const {
		containerReference,
		mainReference,
		setPageActive,
		setContainerReference,
		pageActive,
	} = useHomeContext();

	useEffect(() => {
		const addScrollListener = () => {
			const scrollWindowHandler = () => {
				const distanceMainToViewportTop = mainReference
					? -mainReference.getBoundingClientRect().top
					: 0;

				const viewportHeight = containerReference
					? containerReference.offsetHeight
					: 0;

				switch (
					viewportHeight &&
					(distanceMainToViewportTop / (viewportHeight / 4)).toFixed(0)
				) {
					case "0":
						setPageActive(1);
						break;
					case "1":
						setPageActive(2);
						break;
					case "2":
						setPageActive(3);
						break;
					default:
						break;
				}
			};

			window.addEventListener("scroll", scrollWindowHandler);
		};

		addScrollListener();
	}, [containerReference, mainReference, setPageActive]);

	const reference = useRef(null);

	useEffect(() => {
		setContainerReference(reference.current);
	}, [setContainerReference]);
	return (
		<div className="homeContainer">
			<div
				className="homeContainer__pagesContainer"
				style={{ top: `-${(pageActive - 1) * 100}vh` }}
			>
				<div
					ref={reference}
					className="homeContainer__pages homeContainer__pages--1"
				>
					<Home />
				</div>
				<div className="homeContainer__pages homeContainer__pages--2">
					<Why />
				</div>
				<div className="homeContainer__pages homeContainer__pages--3">
					<About />
				</div>
			</div>
		</div>
	);
};

export default HomeContainer;
