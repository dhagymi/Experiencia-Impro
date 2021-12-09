import { memo } from "react";
import MonthButtonContainer from "./MonthButtonContainer";
import ShowsCarouselContainer from "./ShowsCarouselContainer";

const ShowsBody = () => {
	return (
		<div className="showsBody">
			<h2 className="showsBody__title">¿Dónde y qué hora?</h2>
			<MonthButtonContainer />
			<ShowsCarouselContainer />
		</div>
	);
};
export default memo(ShowsBody);
