import { useEffect } from "react";

import ShowCard from "./ShowCard.js";

import { useCarouselContext } from "../contexts/CarouselContext";
import { useShowsContext } from "../contexts/ShowsContext";

const ShowCardContainer = () => {
	const { position, showsContainerStyle, setShowsContainerStyle } =
		useCarouselContext();
	const { shows } = useShowsContext();

	useEffect(() => {
		setShowsContainerStyle({
			width: `${shows.length * 100 + 1}%`,
			transform: `translateX(${-(100 / shows.length) * position}%)`,
		});
	}, [position, setShowsContainerStyle, shows.length]);

	return (
		<div className="showCardContainer">
			<div
				className="showCardContainer__showsContainer"
				style={showsContainerStyle}
			>
				{shows.map((show) => {
					return <ShowCard key={show.id} {...show} />;
				})}
			</div>
		</div>
	);
};
export default ShowCardContainer;
