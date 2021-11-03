import { useRef, useEffect } from "react";

import Home from "../pages/Home";
import Why from "../pages/Why";
import About from "../pages/About";

import { useHomeContext } from "../contexts/HomeContext";

import useScrollTransition from "../hooks/useScrollTransition";

const HomeContainer = () => {
	const {
		containerReference,
		homeMainReference,
		setPageActive,
		setContainerReference,
		pageActive,
	} = useHomeContext();

	useScrollTransition(setPageActive, containerReference, homeMainReference, 3);

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
