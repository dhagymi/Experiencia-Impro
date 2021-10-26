import { useState, useEffect } from "react";
import axios from "axios";

import ShowsCarousel from "../components/ShowsCarousel";

import { useModalContext } from "../contexts/ModalContext";
import { useShowsContext } from "../contexts/ShowsContext";

import { getMonthBeginingAndFinishingDate } from "../utils/auxFuntions";
import { CarouselContextProvider } from "../contexts/CarouselContext";
const ShowsCarouselContainer = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { isModalVisible, toggleIsModalVisible } = useModalContext();
	const { month, setShows } = useShowsContext();

	/* Get shows from firebase */
	useEffect(() => {
		const getShows = async () => {
			try {
				setIsLoading(true);
				setShows([]);
				const { begin, finish } = getMonthBeginingAndFinishingDate(month);

				const { data } = await axios.post("/api/shows", {
					where: [
						{ field: "date", operator: ">=", value: begin },
						{ field: "date", operator: "<", value: finish },
						{ field: "date", operator: ">=", value: new Date() },
					],
				});

				const showsWithStock = data.filter((show) => show.stock > 0);

				setShows(showsWithStock);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};
		if (!isModalVisible) {
			getShows();
		}

		return () => {
			if (isModalVisible) {
				setShows([]);
			}
		};
	}, [isModalVisible, month, setShows]);

	return (
		<div className="showsCarouselContainer">
			<CarouselContextProvider>
				<ShowsCarousel isLoading={isLoading} />
				<button
					className="showsCarouselContainer__reserveButton"
					onClick={() => toggleIsModalVisible()}
				>
					Reservar
				</button>
			</CarouselContextProvider>
		</div>
	);
};
export default ShowsCarouselContainer;
