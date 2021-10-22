import axios from "axios";

const Contact = () => {
	const formSubmitHandler = async (event) => {
		try {
			event.preventDefault();

			const formData = new FormData(event.target);

			const usefulFormData = {
				name: formData.get("name"),
				email: formData.get("email"),
				message: formData.get("message"),
			};

			const htmlTemplate = `
			<p><b>Nombre y apellido:</b> ${usefulFormData.name}</p>
			<p><b>E-mail:</b> ${usefulFormData.email}</p>
			<p><b>Mensaje:</b> ${usefulFormData.message}</p>`;

			const response = await axios.post("/api/mail", {
				subject: `Mensaje de ${usefulFormData.name} - Experiencia Impro`,
				html: htmlTemplate,
			});

			if (response.status === 200) {
				alert("Tu mensaje fue enviado correctamente!");
				event.target.reset();
			} else {
				alert("El mensaje no pudo ser enviado.");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="contact">
			<h1 className="contact__title">Contactanos</h1>
			<div className="contact__body">
				<div className="contact__card">
					<h2 className="contact__cardTitle">En qué podemos ayudarte?</h2>
					<div className="contact__cardInfoContainer">
						<h3 className="contact__cardSubtitle">WhatsApp</h3>
						<p className="contact__cardInfo">1234567890</p>
						<h3 className="contact__cardSubtitle">Clases</h3>
						<p className="contact__cardInfo">info@gmail.com</p>
						<h3 className="contact__cardSubtitle">Podcast</h3>
						<p className="contact__cardInfo">info@gmail.com</p>
					</div>
					<div className="contact__cardDots">
						<div className="contact__cardDot"></div>
						<div className="contact__cardDot"></div>
						<div className="contact__cardDot"></div>
					</div>
				</div>
				<form className="contact__form" onSubmit={formSubmitHandler}>
					<fieldset className="contact__formFieldset">
						<label className="contact__formLabel" htmlFor="name">
							Nombre y apellido
							<input
								className="contact__formInput"
								id="name"
								name="name"
								required
							/>
						</label>
						<label className="contact__formLabel" htmlFor="email">
							Correo electrónico
							<input
								className="contact__formInput"
								id="email"
								name="email"
								required
							/>
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
								required
							/>
						</label>
						<button className="contact__formButton" type="submit">
							Enviar
						</button>
					</fieldset>
				</form>
			</div>
		</section>
	);
};

export default Contact;
