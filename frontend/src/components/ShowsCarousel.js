import Message from "./Message";
import Loading from "./Loading";
import CarouselDotContainer from "./CarouselDotContainer";
import ShowCardContainer from "./ShowCardContainer";

import { useShowsContext } from "../contexts/ShowsContext";

const ShowsCarousel = ({ isLoading }) => {
	const { shows } = useShowsContext();

	return (
		<div className="showsCarousel">
			{isLoading ? (
				<Loading style={{ marginBottom: "5vh" }} />
			) : shows.length ? (
				<>
					<ShowCardContainer />
					{shows?.length > 1 && <CarouselDotContainer />}
				</>
			) : (
				<Message style={{ marginBottom: "5vh" }}>
					No hay shows en este mes.
				</Message>
			)}
		</div>
	);
};

export default ShowsCarousel;
