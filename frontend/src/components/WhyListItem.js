const WhyListItem = ({ dotClassModifier }) => {
	return (
		<li className="whyListItem">
			<div className="whyListItem__itemHeading">
				<div
					className={`whyListItem__dot ${
						dotClassModifier && `whyListItem__dot--${dotClassModifier}`
					}`}
				></div>
				<p className="whyListItem__itemTitle">Creatividad</p>
			</div>
			<p className="whyListItem__itemBody">
				Es una disciplina ligada al teatro pero con un carácter principalmente{" "}
				<span className="whyListItem__finalText">cómico en dónde los</span>
			</p>
		</li>
	);
};
export default WhyListItem;
