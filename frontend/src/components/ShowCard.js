import { useState, useEffect } from "react";

import { useShowsContext } from "../contexts/ShowsContext";
import { useCarouselContext } from "../contexts/CarouselContext";

import { getUsefulDate } from "../utils/auxFuntions";
const ShowCard = ({ date, stock, place, city }) => {
	const { day, month, year, hours, minutes } = getUsefulDate(date);
	const { shows } = useShowsContext();
	const { setPosition } = useCarouselContext();

	const [slideStyle, setSlideStyle] = useState({
		width: `${100 / shows?.length}%`,
	});

	useEffect(() => {
		setSlideStyle({ width: `${100 / shows?.length}%` });
		return () => {
			setSlideStyle({});
			setPosition(0);
		};
	}, [setPosition, shows?.length]);

	return (
		<div className="showCard" style={slideStyle}>
			<div className="showCard__mainInfo">
				<div className="showCard__date">
					<p className="showCard__dateItem">
						{day}-{month}-{year}
					</p>
					<p className="showCard__dateItem">
						{hours}:{minutes} hs.
					</p>
				</div>
				<div className="showCard__stock">
					<p className="showCard__stockNumber">{stock}</p>
					<p className="showCard__stockText">Entradas disponibles</p>
				</div>
			</div>
			<p className="showCard__place">
				{place} - {city}
			</p>
		</div>
	);
};
export default ShowCard;
