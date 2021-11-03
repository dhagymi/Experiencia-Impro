const ContactCard = () => {
	return (
		<div className="contactCard">
			<h2 className="contactCard__title">¿En qué podemos ayudarte?</h2>
			<div className="contactCard__infoContainer">
				<h3 className="contactCard__subtitle">WhatsApp</h3>
				<p className="contactCard__info">+54 1131061205</p>
				<h3 className="contactCard__subtitle">Clases</h3>
				<p className="contactCard__info">experienciaimpro@gmail.com</p>
				<h3 className="contactCard__subtitle">Podcast</h3>
				<p className="contactCard__info">experienciaimpro@gmail.com</p>
			</div>
			<div className="contactCard__dots">
				<div className="contactCard__dot"></div>
				<div className="contactCard__dot"></div>
				<div className="contactCard__dot"></div>
			</div>
		</div>
	);
};
export default ContactCard;
