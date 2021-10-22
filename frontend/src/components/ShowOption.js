import { getUsefulDate } from "../utils/auxFuntions";

const ShowOption = ({ id, date, place, className }) => {
	const { day, month, year, hours, minutes } = getUsefulDate(date);
	const innerText = `${day}-${month}-${year} ${hours}:${minutes} hs. - ${place}`;
	const maxLength = 40;
	const finalText =
		innerText.length > maxLength
			? `${innerText.slice(0, maxLength).trim()}...`
			: innerText;

	return (
		<option className={className} value={id}>
			{finalText}
		</option>
	);
};

export default ShowOption;
