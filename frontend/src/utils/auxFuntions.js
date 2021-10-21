import { Timestamp } from "firebase/firestore";

/* Get begining and finishing date of current month */
export const getMonthBeginingAndFinishingDate = (month) => {
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
