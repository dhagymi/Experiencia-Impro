import { memo } from "react";

import { useShowsContext } from "../contexts/ShowsContext";

const MonthButton = ({ item: { number, word } }) => {
	const { month, setMonth } = useShowsContext();
	return (
		<button
			className={`monthButton ${number === month ? "monthButton--active" : ""}`}
			onClick={() => setMonth(number)}
		>
			{word}
		</button>
	);
};
export default memo(MonthButton);
