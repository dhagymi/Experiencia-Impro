import { memo, useEffect } from "react";

import MonthButton from "./MonthButton";

import { useShowsContext } from "../contexts/ShowsContext";

const MonthButtonContainer = () => {
	const { months, setMonths } = useShowsContext();

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

	return (
		<div className="monthButtonContainer">
			{months.length &&
				months.map((item) => <MonthButton key={item.number} item={item} />)}
		</div>
	);
};
export default memo(MonthButtonContainer);
