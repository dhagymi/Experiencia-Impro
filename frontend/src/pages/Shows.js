import { memo } from "react";
import { createPortal } from "react-dom";
import { Helmet } from "react-helmet";

import Alert from "../components/Alert";
import Loading from "../components/Loading";

import Modal from "../components/Modal";
import ShowsBody from "../components/ShowsBody";

import { useModalContext } from "../contexts/ModalContext";
import { useAlertContext } from "../contexts/AlertContext";

const Shows = () => {
	const { isModalVisible } = useModalContext();

	const { isLoading, isError, isAlertVisible, toggleIsAlertVisible } =
		useAlertContext();
	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Shows</title>
			</Helmet>
			<section className="shows">
				<div className="shows__heading">
					<h1 className="shows__title">Impro Shows</h1>
					<p className="shows__subtitle">
						Un show en donde todo puede pasar. Por medio de las sugerencias del
						público, los actores realizaran escenas completamente improvisadas.
						Súmate a esta experiencia única, te esperamos en{" "}
						<span className="shows__subtitleFinal">las próximas fechas.</span>
					</p>
				</div>
				<ShowsBody />
				{isLoading ? (
					createPortal(
						<div className="shows__loading">
							<Loading />
						</div>,
						document.getElementById("loading")
					)
				) : isAlertVisible ? (
					isError ? (
						<Alert
							title="Lo sentimos"
							mainText="La reserva no pudo realizarse con éxito. Intente de nuevo más tarde. "
							finalText="Muchas gracias por entender."
							onClose={() => toggleIsAlertVisible(false)}
						/>
					) : (<Alert
						title="Reserva confirmada"
						mainText="Hemos recibido su reserva con éxito. Le enviaremos la confirmación a la brevedad al correo eléctronico proporcionado (revisar también el correo no deseado). "
						finalText="Muchas gracias."
						onClose={() => toggleIsAlertVisible(false)}
					/>)
				) : (
					isModalVisible && <Modal />
				)}
			</section>
		</>
	);
};

export default memo(Shows);
