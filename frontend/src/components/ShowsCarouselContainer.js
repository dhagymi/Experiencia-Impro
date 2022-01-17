import { useEffect, memo } from "react";
import axios from "axios";

import ShowsCarousel from "../components/ShowsCarousel";
import Arrow from "../components/Arrow";

import { useModalContext } from "../contexts/ModalContext";
import { useShowsContext } from "../contexts/ShowsContext";
import { useAlertContext } from "../contexts/AlertContext";
import {
	CarouselContextProvider,
	useCarouselContext,
} from "../contexts/CarouselContext";

import { getMonthBeginingAndFinishingDate } from "../utils/auxFuntions";
const ShowsCarouselContainer = () => {
	const { isModalVisible, toggleIsModalVisible } = useModalContext();
	const { isAlertVisible, isLoading } = useAlertContext();
	const { month, setShows, shows } = useShowsContext();
	const { position, setIsLoading } = useCarouselContext();

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
		if (!isModalVisible && !isAlertVisible && !isLoading) {
			getShows();
		}
	}, [
		isAlertVisible,
		isLoading,
		isModalVisible,
		month,
		setIsLoading,
		setShows,
	]);

	return (
		<div className="showsCarouselContainer">
			<ShowsCarousel />
			<button
				className="showsCarouselContainer__reserveButton"
				onClick={() => toggleIsModalVisible()}
			>
				Reservar
			</button>
			{shows?.length > 0 && (
				<>
					{position === 0 || <Arrow direction="left" />}
					{position === shows.length - 1 || <Arrow direction="right" />}
				</>
			)}
		</div>
	);
};

const MemoizedCarouselContainer = memo(ShowsCarouselContainer);
const CarouselContainerWrapper = () => {
	return (
		<CarouselContextProvider>
			<MemoizedCarouselContainer />
		</CarouselContextProvider>
	);
};

export default CarouselContainerWrapper;
