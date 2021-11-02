import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

import useSEO from "../hooks/useSEO";

const Contact = () => {
	useSEO({ title: "Contacto" });

	return (
		<section className="contact">
			<h1 className="contact__title">Contacto</h1>
			<div className="contact__body">
				<ContactCard />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
