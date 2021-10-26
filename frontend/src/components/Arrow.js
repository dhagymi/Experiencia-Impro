import leftArrow from "../assets/icons/left_arrow.svg";
import rightArrow from "../assets/icons/right_arrow.svg";

import { useCarouselContext } from "../contexts/CarouselContext";

const Arrow = ({ direction }) => {
	const { position, setPosition } = useCarouselContext();

	return (
		<img
			src={direction === "left" ? leftArrow : rightArrow}
			alt={direction}
			onClick={() =>
				setPosition(direction === "left" ? position - 1 : position + 1)
			}
			className={`showsCarouselContainer__arrow ${
				direction && `showsCarouselContainer__arrow--${direction}`
			}`}
		/>
	);
};

export default Arrow;
