import { memo } from "react";

const WhyListItem = ({ dotClassModifier, title, mainText, finalText }) => {
	return (
		<li className="whyListItem">
			<div className="whyListItem__itemHeading">
				<div
					className={`whyListItem__dot ${
						dotClassModifier && `whyListItem__dot--${dotClassModifier}`
					}`}
				></div>
				<p className="whyListItem__itemTitle">{title}</p>
			</div>
			<p className="whyListItem__itemBody">
				{mainText} <span className="whyListItem__finalText">{finalText}</span>
			</p>
		</li>
	);
};
export default memo(WhyListItem);
