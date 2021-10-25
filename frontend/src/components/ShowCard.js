import { getUsefulDate } from "../utils/auxFuntions";
const ShowCard = ({ date, stock, place, city, style }) => {
	const { day, month, year, hours, minutes } = getUsefulDate(date);

	return (
		<div className="showCard" style={style}>
			<div className="showCard__mainInfo">
				<div className="showCard__date">
					<p className="showCard__dateItem">
						{day}-{month}-{year}
					</p>
					<p className="showCard__dateItem">
						{hours}:{minutes} hs.
					</p>
				</div>
				<div className="showCard__stock">
					<p className="showCard__stockNumber">{stock}</p>
					<p className="showCard__stockText">Entradas disponibles</p>
				</div>
			</div>
			<p className="showCard__place">
				{place} - {city}
			</p>
		</div>
	);
};
export default ShowCard;
