import { useEffect } from "react";

const useScrollTransition = (
	setPageActive,
	containerReference,
	mainReference,
	screens
) => {
	useEffect(() => {
		const scrollWindowHandler = () => {
			const distanceMainToViewportTop = mainReference
				? -mainReference.getBoundingClientRect().top
				: 0;

			const containerHeight = containerReference
				? containerReference.offsetHeight / screens
				: 0;

			setPageActive(
				containerHeight
					? Math.floor(
							(distanceMainToViewportTop + containerHeight / 2) /
								containerHeight +
								1
					  )
					: 0
			);
		};
		window.addEventListener("scroll", scrollWindowHandler);

		return () => {
			window.scrollTo(0, 0);
		};
	}, [containerReference, mainReference, screens, setPageActive]);
};

export default useScrollTransition;
