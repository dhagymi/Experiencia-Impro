import { Helmet } from "react-helmet";

import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
				</div>
			</section>
		</>
	);
};

export default Contact;
