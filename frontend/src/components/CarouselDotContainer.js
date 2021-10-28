import CarouselDot from "./CarouselDot";

import { useShowsContext } from "../contexts/ShowsContext";

const CarouselDotContainer = () => {
	const { shows } = useShowsContext();
	return (
		<div className="carouselDotContainer">
			{shows.map((slide, index) => {
				return <CarouselDot key={index} index={index} />;
			})}
		</div>
	);
};
export default CarouselDotContainer;
