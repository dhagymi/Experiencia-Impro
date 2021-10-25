import { useEffect, useState } from "react";

import { useShowsContext } from "../contexts/ShowsContext";

import ShowCard from "./ShowCard";

const ShowsCarousel = () => {
	const { shows } = useShowsContext();

	const [position, setPosition] = useState(0);
	const [showsContainerStyle, setSlidesContainerStyle] = useState({
		width: `${shows.length * 100}%`,
		transform: `translateX(${-(100 / shows.length) * position}%)`,
	});

	useEffect(() => {
		setSlidesContainerStyle({
			width: `${shows.length * 100}%`,
			transform: `translateX(${-(100 / shows.length) * position}%)`,
		});
	}, [position, shows.length]);

	const slideStyle = { width: `${100 / shows.length}%` };

	return (
		<div className="showsCarousel">
			<div className="showsCarousel__mainContainer">
				<div
					className="showsCarousel__showsContainer"
					style={showsContainerStyle}
				>
					{shows.map((show) => {
						return <ShowCard key={show.id} {...show} style={slideStyle} />;
					})}
				</div>
			</div>
			{shows?.length > 1 && (
				<div className="showsCarousel__dotsContainer">
					{shows.map((slide, index) => {
						return (
							<button
								key={index}
								className={`showsCarousel__dot ${
									position === index && "showsCarousel__dot--active"
								}`}
								onClick={() => setPosition(index)}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ShowsCarousel;
