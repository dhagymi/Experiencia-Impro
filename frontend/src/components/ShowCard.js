const ShowCard = ({ date, stock, place, city }) => {
	const jsDate = date.toDate();

	const day = jsDate.getDate();
	const month = jsDate.getMonth() + 1;
	const year = jsDate.getFullYear();
	const hours = jsDate.getHours();
	const minutes =
		jsDate.getMinutes() < 10 ? `0${jsDate.getMinutes()}` : jsDate.getMinutes();

	return (
		<div className="showCard">
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
