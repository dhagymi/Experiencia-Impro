import { Helmet } from "react-helmet";

const Error = () => {
	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Error</title>
			</Helmet>
			<section class="error">
				<h2 class="error__title">
					Sorry <span className="error__titleSad"> =(</span>
				</h2>
				<div class="error__body">
					<p class="error__paragraph">A veces hay errores en escena</p>
					<p class="error__paragraph">
						Por suerte tenemos un plan B, contactanos en{" "}
						<span className="error__finalText">
							@experienciaimpro o WhatsApp
						</span>
					</p>
				</div>
			</section>
		</>
	);
};

export default Error;
