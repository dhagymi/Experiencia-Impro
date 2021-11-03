const Error = () => {
	return (
		<section class="error">
			<h2 class="error__title">Error 404</h2>
			<div class="error__body">
				<p class="error__paragraph">
					Lo siento, la página a la que está intentando{" "}
					<span className="error__finalText">acceder no existe</span>
				</p>
				<p class="error__paragraph">
					Por favor, corrobore la URL o vuelva{" "}
					<span className="error__finalText">a la página anterior</span>
				</p>
			</div>
		</section>
	);
};

export default Error;
