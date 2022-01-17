import axios from "axios";
import { useCallback } from "react";

import { useAlertContext } from "../contexts/AlertContext";

const ContactForm = () => {
	const { setIsLoading, setIsError, toggleIsAlertVisible } = useAlertContext();
	const formSubmitHandler = useCallback(
		async (event) => {
			try {
				setIsLoading(true);
				setIsError(false);
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

				response.status === 200 || setIsError(true);
				response.status === 200 && event.target.reset();

				toggleIsAlertVisible(true);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
				toggleIsAlertVisible(true);
				setIsLoading(false);
				console.log(error);
			}
		},
		[setIsError, setIsLoading, toggleIsAlertVisible]
	);
	return (
		<form className="contactForm" onSubmit={formSubmitHandler}>
			<fieldset className="contactForm__fieldset">
				<label className="contactForm__label" htmlFor="name">
					Nombre y apellido
					<input
						className="contactForm__input"
						id="name"
						name="name"
						required
					/>
				</label>
				<label className="contactForm__label" htmlFor="email">
					Correo electrónico
					<input
						className="contactForm__input"
						id="email"
						name="email"
						required
					/>
				</label>
				<label
					className="contactForm__label contactForm__label--textArea"
					htmlFor="message"
				>
					Mensaje
					<textarea
						className="contactForm__input contactForm__input--textArea"
						id="message"
						name="message"
						required
					/>
				</label>
				<button className="contactForm__button" type="submit">
					Enviar
				</button>
			</fieldset>
		</form>
	);
};

export default ContactForm;
