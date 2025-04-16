import { Helmet } from "react-helmet";

const Error = () => {
	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Sitio en construcción</title>
			</Helmet>
			<section className="error">
				<h2 className="error__title">
				Estamos improvisando un nuevo sitio <span className="error__titleSad"> =)</span>
				</h2>
				<div className="error__body">
					<p className="error__paragraph">
						Por suerte tenemos un plan B. Contactanos en nuestro{" "}
						<a
							href="https://www.instagram.com/experienciaimpro/?hl=es"
							target="_blank"
							rel="noreferrer"
							className="contactCard__socialLink"
						>
							Instagram
						</a>{" "}
						o por e-mail a{" "}
						experienciaimpro@gmail.com
					</p>
				</div>
			</section>
		</>
	);
};

export default Error;
