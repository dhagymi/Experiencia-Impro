import { useState } from "react";

const Shows = () => {
	const [months, setMonths] = useState([]);
	const [shows, setShows] = useState([]);

	/* Set next 6 months when component is mount */

	useState(() => {
		const getMonths = () => {
			const monthsToWord = [
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

			const monthsInWord = monthsInNumber.map((month) => {
				const monthObject = monthsToWord.find((item) => item.number === month);
				return monthObject.word;
			});
			setMonths(monthsInWord);
		};

		getMonths();
	}, []);

	return (
		<section className="shows">
			<div className="shows__heading">
				<h1 className="shows__title">Próximos shows</h1>
				<p className="shows__subtitle"></p>
			</div>

			<div className="shows__body">
				<h2 className="shows__bodyTitle">Dónde y qué hora</h2>
				<div className="shows__months">
					{months.length &&
						months.map((month) => (
							<button className="shows__monthButton">{month}</button>
						))}
				</div>
				<div className="shows__showInfo">
					<div className="shows__bodyDot"></div>
					<div className="shows__bodyDot"></div>
					<div className="shows__bodyDot"></div>
				</div>
			</div>
		</section>
	);
};

export default Shows;
