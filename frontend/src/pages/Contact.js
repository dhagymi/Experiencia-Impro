import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<section className="contact">
			<h1 className="contact__title">Contactanos</h1>
			<div className="contact__body">
				<ContactCard />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
