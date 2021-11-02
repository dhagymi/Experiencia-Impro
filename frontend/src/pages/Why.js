import WhyListItem from "../components/WhyListItem";

const Why = () => {
	return (
		<section className="why">
			<div className="why__titleContainer">
				<h2 className="why__title">Por qué Impro</h2>
			</div>
			<div className="why__listContainer">
				<ul className="why__list">
					<WhyListItem dotClassModifier="red" />
					<WhyListItem dotClassModifier="purple" />
					<WhyListItem dotClassModifier="pink" />
					<WhyListItem dotClassModifier="blue" />
				</ul>
			</div>
			<div className="why__questionMarks">
				<span className="why__mark why__mark--open">¿</span>
				<span className="why__mark why__mark--close">?</span>
			</div>
		</section>
	);
};

export default Why;
