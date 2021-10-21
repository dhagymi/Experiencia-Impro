import { useEffect, useState } from "react";
import { getFirestoreData } from "../utils/firebase";
import { Timestamp } from "firebase/firestore";

import ShowCard from "../components/ShowCard";
import Loading from "../components/Loading";
import Message from "../components/Message";

const Shows = () => {
	const [months, setMonths] = useState([]);
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const [shows, setShows] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	/* Set next 6 months when component is mount */

	useState(() => {
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
	}, []);

	/* Get shows from firebase */
	useEffect(() => {
		/* Get begining and finishing date of current month */
		const getMonthBeginingAndFinishingDate = () => {
			const date = new Date();
			const currentMonth = date.getMonth();

			const year =
				month < currentMonth + 1 ? date.getFullYear() + 1 : date.getFullYear();
			const monthBegining = new Date(year, month - 1, 1, 0, 0);
			const monthFinishing = new Date(
				month === 12 ? year + 1 : year,
				month === 12 ? 0 : month,
				1,
				0,
				0
			);

			return {
				begin: Timestamp.fromDate(monthBegining),
				finish: Timestamp.fromDate(monthFinishing),
			};
		};
		const getShows = async () => {
			try {
				setIsLoading(true);
				const { begin, finish } = getMonthBeginingAndFinishingDate();

				const data = await getFirestoreData(
					"shows",
					{
						field: "date",
						compare: ">=",
						value: begin,
					},
					{
						field: "date",
						compare: "<",
						value: finish,
					}
				);

				setShows(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};

		getShows();
	}, [month]);

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
								className="shows__monthButton"
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
						shows.map(({ date, stock, place }, index) => (
							<ShowCard key={index} date={date} stock={stock} place={place} />
						))
					) : (
						<Message>No hay shows en este mes.</Message>
					)}
					<button className="shows__reserveButton">Reservar</button>
				</div>
			</div>
		</section>
	);
};

export default Shows;
