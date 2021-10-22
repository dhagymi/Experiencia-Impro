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

export const getUsefulDate = (firebaseTimestamp) => {
	const jsDate = firebaseTimestamp.toDate();

	const day = jsDate.getDate();
	const month = jsDate.getMonth() + 1;
	const year = jsDate.getFullYear();
	const hours =
		jsDate.getHours() < 10 ? `0${jsDate.getHours()}` : jsDate.getHours();
	const minutes =
		jsDate.getMinutes() < 10 ? `0${jsDate.getMinutes()}` : jsDate.getMinutes();
	const seconds =
		jsDate.getSeconds() < 10 ? `0${jsDate.getSeconds()}` : jsDate.getSeconds();

	return { day, month, year, hours, minutes, seconds };
};
