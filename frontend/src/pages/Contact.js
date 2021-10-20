const Contact = () => {
	return (
		<section className="contact">
			<h1 className="contact__title">Contactanos</h1>
			<div className="contact__body">
				<div className="contact__card">
					<h2 className="contact__cardTitle">En qué podemos ayudarte?</h2>
					<h3 className="contact__cardSubtitle">WhatsApp</h3>
					<p className="contact__cardInfo">1234567890</p>
					<h3 className="contact__cardSubtitle">Clases</h3>
					<p className="contact__cardInfo">info@gmail.com</p>
					<h3 className="contact__cardSubtitle">Porcast</h3>
					<p className="contact__cardInfo">info@gmail.com</p>
					<div className="contact__cardDots">
						<div className="contact__cardDot"></div>
						<div className="contact__cardDot"></div>
						<div className="contact__cardDot"></div>
					</div>
				</div>
				<form className="contact__form">
					<fieldset className="contact__formFieldset">
						<label className="contact__formLabel" htmlFor="name">
							Nombre y apellido
							<input className="contact__formInput" id="name" name="name" />
						</label>
						<label className="contact__formLabel" htmlFor="email">
							Correo electrónico
							<input className="contact__formInput" id="email" name="email" />
						</label>
						<label
							className="contact__formLabel contact__formLabel--textArea"
							htmlFor="message"
						>
							Mensaje
							<textarea
								className="contact__formInput contact__formInput--textArea"
								id="message"
								name="message"
							/>
						</label>
						<button className="contact__formButton" type="submit">
							Reservar
						</button>
					</fieldset>
				</form>
			</div>
		</section>
	);
};

export default Contact;
