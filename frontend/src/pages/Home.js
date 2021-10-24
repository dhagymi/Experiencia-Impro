import { useEffect, useState } from "react";
import axios from "axios";

import { useHomeContext } from "../contexts/HomeContext";

import {
	getMonthBeginingAndFinishingDate,
	getUsefulDate,
} from "../utils/auxFuntions";
const Home = () => {
	const [nextShow, setNextShow] = useState({});
	const { setIsHome, setPageActive } = useHomeContext();

	const titleOne = "Comedia en español -";
	const titleTwo = "Teatro sin guiones - no existen errores -";

	useEffect(() => {
		setIsHome(true);
		const getNextShow = async () => {
			try {
				const { begin, finish } = getMonthBeginingAndFinishingDate(
					new Date().getMonth() + 1
				);

				const {
					data: [{ date, city }],
				} = await axios.post("/api/shows", {
					where: [
						{ field: "date", operator: ">=", value: begin },
						{ field: "date", operator: "<", value: finish },
					],
					limit: 1,
					orderBy: [{ field: "date" }],
				});

				const { day, month, year } = getUsefulDate(date);

				setNextShow({ day, month, year, city });
			} catch (error) {
				console.log(error);
			}
		};

		getNextShow();

		return () => {
			setIsHome(false);
			setNextShow({});
			setPageActive(1);
		};
	}, [setIsHome, setPageActive]);

	return (
		<section className="home">
			<div className="home__heading">
				<h1 className="home__title">
					improv<span className="home__titleSmile"> =)</span>
				</h1>
				{nextShow?.day && (
					<div className="home__nextShowInfo">
						<h2 className="home__nextShowText home__nextShowText--pink">
							Proximo show
						</h2>

						<p className="home__nextShowText">
							{nextShow.day}.{nextShow.month}.{nextShow.year} - {nextShow.city}
						</p>
					</div>
				)}
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
	);
};

export default Home;
