import { Helmet } from "react-helmet";
import { createPortal } from "react-dom";

import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Alert from "../components/Alert";
import Loading from "../components/Loading";

import { useAlertContext } from "../contexts/AlertContext";

const Contact = () => {
	const { isLoading, isError, toggleIsAlertVisible, isAlertVisible } =
		useAlertContext();
	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Contacto</title>
			</Helmet>
			<section className="contact">
				<h1 className="contact__title">Contacto</h1>
				<div className="contact__body">
					<ContactCard />
					<ContactForm />
					{isLoading
						? createPortal(
								<div className="contact__loading">
									<Loading />
								</div>,
								document.getElementById("loading")
						  )
						: isAlertVisible &&
						  (isError ? (
								<Alert
									title="Lo sentimos"
									mainText="El mensaje no pudo enviarse con éxito. Intente de nuevo más tarde. "
									finalText="Muchas gracias por entender."
									onClose={() => toggleIsAlertVisible(false)}
								/>
						  ) : (
								<Alert
									title="Mensaje recibido"
									mainText="Gracias por comunicarte con nosotros. Nos pondremos en contacto contigo a "
									finalText="la mayor brevedad posible."
									onClose={() => toggleIsAlertVisible(false)}
								/>
						  ))}
				</div>
			</section>
		</>
	);
};

export default Contact;
