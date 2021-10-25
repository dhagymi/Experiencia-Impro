import { useEffect, useState } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import Message from "../components/Message";
import Modal from "../components/Modal";
import ShowsCarousel from "../components/ShowsCarousel";

import { useModalContext } from "../contexts/ModalContext";
import { useShowsContext } from "../contexts/ShowsContext";

import { getMonthBeginingAndFinishingDate } from "../utils/auxFuntions";

const Shows = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { isModalVisible, toggleIsModalVisible } = useModalContext();
	const { months, setMonths, month, setMonth, shows, setShows } =
		useShowsContext();

	/* Set next 6 months when component is mount */

	useEffect(() => {
		const getMonths = () => {
			const monthsToObject = [
				{ number: 1, word: "ene" },
				{ number: 2, word: "feb" },
				{ number: 3, word: "mar" },
				{ number: 4, word: "abr" },
				{ number: 5, word: "may" },
				{ number: 6, word: "jun" },
				{ number: 7, word: "jul" },
				{ number: 8, word: "ago" },
				{ number: 9, word: "sep" },
				{ number: 10, word: "oct" },
				{ number: 11, word: "nov" },
				{ number: 12, word: "dic" },
			];

			const date = new Date();
			const currentMonth = date.getMonth() + 1;

			const monthsInNumber = [currentMonth];

			for (let i = 1; i < 6; i++) {
				const newMonth = currentMonth + i;

				if (newMonth <= 12) {
					monthsInNumber.push(newMonth);
				} else {
					monthsInNumber.push(newMonth - 12);
				}
			}

			const monthsInObject = monthsInNumber.map((month) => {
				const monthObject = monthsToObject.find(
					(item) => item.number === month
				);
				return monthObject;
			});
			setMonths(monthsInObject);
		};

		getMonths();

		return () => {
			setMonths([]);
		};
	}, [setMonths]);

	/* Get shows from firebase */
	useEffect(() => {
		const getShows = async () => {
			try {
				setIsLoading(true);
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
		<section className="shows">
			<div className="shows__heading">
				<h1 className="shows__title">Próximos shows</h1>
				<p className="shows__subtitle">
					Un show en donde todo puede pasar. Por medio de las sugerencias del
					publico, los actores realizaran escenas completamente improvisadas. De
					la mano de 6 improvisadores,{" "}
					<span className="shows__subtitleFinal">
						te invitamos a que nos conozcas.
					</span>
				</p>
			</div>

			<div className="shows__body">
				<h2 className="shows__bodyTitle">Dónde y qué hora</h2>
				<div className="shows__months">
					{months.length &&
						months.map((item) => (
							<button
								key={item.number}
								className={`shows__monthButton ${
									item.number === month ? "shows__monthButton--active" : ""
								}`}
								onClick={() => setMonth(item.number)}
							>
								{item.word}
							</button>
						))}
				</div>
				<div className="shows__showInfo">
					{isLoading ? (
						<Loading />
					) : shows.length ? (
						<ShowsCarousel />
					) : (
						<Message>No hay shows en este mes.</Message>
					)}
					<button
						className="shows__reserveButton"
						onClick={() => toggleIsModalVisible()}
					>
						Reservar
					</button>
				</div>
			</div>
			{isModalVisible && <Modal />}
		</section>
	);
};

export default Shows;
