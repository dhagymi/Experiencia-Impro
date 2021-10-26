import { useCarouselContext } from "../contexts/CarouselContext";

const CarouselDot = ({ index }) => {
	const { position, setPosition } = useCarouselContext();
	return (
		<button
			className={`carouselDot ${position === index && "carouselDot--active"}`}
			onClick={() => setPosition(index)}
		/>
	);
};
export default CarouselDot;
