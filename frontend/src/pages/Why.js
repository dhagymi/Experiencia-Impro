import WhyListItem from "../components/WhyListItem";

const Why = () => {
	return (
		<section className="why">
			<div className="why__titleContainer">
				<h2 className="why__title">Por qué Impro</h2>
			</div>
			<div className="why__listContainer">
				<ul className="why__list">
					{/* Desktop */}
					<WhyListItem
						dotClassModifier="purple"
						title="Colaboración"
						mainText="En improvisación trabajamos en equipo, buscamos que se luzca la creación colectiva. En escena, somos todos uno y estamos para ayudar a "
						finalText="quien lo necesite."
						mobile="false"
					/>
					<WhyListItem
						dotClassModifier="pink"
						title="Creatividad"
						mainText="Empujamos los límites de nuestra imaginación lo más lejos posible: en escena, las únicas barreras las ponemos "
						finalText="nosotros mismos."
						mobile="false"
					/>
					<WhyListItem
						dotClassModifier="blue"
						title="Integración"
						mainText="Improvisar no es lo único: nos gusta pasarla bien y que el grupo termine en una sala de ensayo, sino que permita a sus participantes encontrar un "
						finalText="grupo de pertenencia."
						mobile="false"
					/>
					{/* Mobile */}
					<WhyListItem
						dotClassModifier="purple"
						title="Colaboración"
						mainText="En improvisación trabajamos en equipo, buscamos que se luzca la "
						finalText="creación colectiva."
						mobile="true"
					/>
					<WhyListItem
						dotClassModifier="pink"
						title="Creatividad"
						mainText="Empujamos los límites de nuestra imaginación lo más "
						finalText="lejos posible."
						mobile="true"
					/>
					<WhyListItem
						dotClassModifier="blue"
						title="Integración"
						mainText="Improvisar no es lo único: nos gusta pasarla bien y que el grupo termine en una sala de ensayo, sino que permita a sus participantes encontrar un grupo "
						finalText="de pertenencia."
						mobile="true"
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
