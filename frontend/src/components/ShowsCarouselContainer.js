import { useState, useEffect } from "react";
import axios from "axios";

import ShowsCarousel from "../components/ShowsCarousel";

import { useModalContext } from "../contexts/ModalContext";
import { useShowsContext } from "../contexts/ShowsContext";

import { getMonthBeginingAndFinishingDate } from "../utils/auxFuntions";
import {
	CarouselContextProvider,
	useCarouselContext,
} from "../contexts/CarouselContext";

import leftArrow from "../assets/icons/left_arrow.svg";
import rightArrow from "../assets/icons/right_arrow.svg";
const ShowsCarouselContainer = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { isModalVisible, toggleIsModalVisible } = useModalContext();
	const { month, setShows, shows } = useShowsContext();
	const { position, setPosition } = useCarouselContext();

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
			<ShowsCarousel isLoading={isLoading} />
			<button
				className="showsCarouselContainer__reserveButton"
				onClick={() => toggleIsModalVisible()}
			>
				Reservar
			</button>
			{position === 0 || (
				<img
					src={leftArrow}
					alt="left"
					onClick={() => setPosition(position - 1)}
					className="showsCarouselContainer__arrow showsCarouselContainer__arrow--left"
				/>
			)}
			{position === shows.length - 1 || (
				<img
					src={rightArrow}
					alt="right"
					onClick={() => setPosition(position + 1)}
					className="showsCarouselContainer__arrow showsCarouselContainer__arrow--right"
				/>
			)}
		</div>
	);
};

const CarouselContainerWrapper = () => {
	return (
		<CarouselContextProvider>
			<ShowsCarouselContainer />
		</CarouselContextProvider>
	);
};

export default CarouselContainerWrapper;
