import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import { useHomeContext } from "../contexts/HomeContext";

import {
	getMonthBeginingAndFinishingDate,
	getUsefulDate,
} from "../utils/auxFuntions";
import Message from "../components/Message";
const Home = () => {
	const [nextShow, setNextShow] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { setPageActive } = useHomeContext();

	const titleOne = "Comedia en español -";
	const titleTwo = "Teatro sin guiones - no existen errores -";

	useEffect(() => {
		setIsLoading(true);
		const getNextShow = async (nextShowMonth, nextShowYear) => {
			try {
				const { begin, finish } = getMonthBeginingAndFinishingDate(
					nextShowMonth,
					nextShowYear
				);

				const response = await axios.post("/api/shows", {
					where: [
						{ field: "date", operator: ">=", value: begin },
						{ field: "date", operator: "<", value: finish },
						{ field: "date", operator: ">=", value: new Date() },
					],
					limit: 1,
					orderBy: [{ field: "date" }],
				});
				const data = response?.data[0];
				const date = data?.date || null;
				const city = data?.city || null;

				const { day, month, year } = getUsefulDate(date);

				if (date) {
					setNextShow({ day, month, year, city });

					setIsLoading(false);
				} else {
					nextShowYear < new Date().getFullYear() + 2
						? getNextShow(
							nextShowMonth === 12 ? 1 : nextShowMonth + 1,
							nextShowMonth === 12 ? nextShowYear + 1 : nextShowYear
						)
						: setIsLoading(false);
				}
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};

		getNextShow(new Date().getMonth() + 1, new Date().getFullYear());

		return () => {
			setNextShow({});
			setPageActive(1);
		};
	}, [setPageActive]);

	return (
		<>
			<Helmet>
				<title>
					Experiencia Impro | Comedia en español totalmente improvisada
				</title>
			</Helmet>
			<section className="home">
				<div className="home__heading">
					<h1 className="home__title">
						improv<span className="home__titleSmile"> =)</span>
					</h1>
					<div className="home__nextShowInfo">
						{isLoading ? null : nextShow?.day ? (
							<>
								<h2 className="home__nextShowText home__nextShowText--pink">
									Proximo show
								</h2>

								<p className="home__nextShowText">
									{nextShow.day}.{nextShow.month}.{nextShow.year} -{" "}
									{nextShow.city}
								</p>
							</>
						) : (
							<Message>No hay shows programados</Message>
						)}
					</div>
				</div>
				<div className="home__floatTitle">
					<p className="home__floatTitleText home__floatTitleText--left">
						<span className="home__floatTitleSpan home__floatTitleSpan--left">
							{titleOne}
						</span>
						<span className="home__floatTitleSpan home__floatTitleSpan--left">
							{titleOne}
						</span>
						<span className="home__floatTitleSpan home__floatTitleSpan--left">
							{titleOne}
						</span>
					</p>
				</div>
				<div className="home__floatTitle">
					<p className="home__floatTitleText home__floatTitleText--right">
						<span className="home__floatTitleSpan home__floatTitleSpan--right">
							{titleTwo}
						</span>
						<span className="home__floatTitleSpan home__floatTitleSpan--right">
							{titleTwo}
						</span>
					</p>
				</div>
			</section>
		</>
	);
};

export default Home;
