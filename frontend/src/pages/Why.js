import WhyListItem from "../components/WhyListItem";

const Why = () => {
	return (
		<section className="why">
			<div className="why__titleContainer">
				<h2 className="why__title">Por qué Impro</h2>
			</div>
			<div className="why__listContainer">
				<ul className="why__list">
					<WhyListItem
						dotClassModifier="purple"
						title="Colaboración"
						mainText="En improvisacion  trabajamos en equipo, buscamos que se luzca la creacion colectiva. En escena, somos todos uno y estamos para ayudar a"
						finalText="quien lo necesite."
					/>
					<WhyListItem
						dotClassModifier="pink"
						title="Creatividad"
						mainText="Empujamos los limites de nuestra imaginacion lo mas lejos posible: en escena, las unicas barreras las ponemos"
						finalText="nosotros mismos."
					/>
					<WhyListItem
						dotClassModifier="blue"
						title="Integración"
						mainText="Improvisar no es lo único: nos gusta pasarla bien y que el grupo termine en una sala de ensayo, sino que permita sus participantes encontrar un"
						finalText="grupo de pertenencia."
					/>
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
