import { Helmet } from "react-helmet";

import Modal from "../components/Modal";
import ShowsBody from "../components/ShowsBody";

import { useModalContext } from "../contexts/ModalContext";

const Shows = () => {
	const { isModalVisible } = useModalContext();

	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Shows</title>
			</Helmet>
			<section className="shows">
				<div className="shows__heading">
					<h1 className="shows__title">Próximos shows</h1>
					<p className="shows__subtitle">
						Un show en donde todo puede pasar. Por medio de las sugerencias del
						publico, los actores realizaran escenas completamente improvisadas.
						De la mano de 6 improvisadores,{" "}
						<span className="shows__subtitleFinal">
							te invitamos a que nos conozcas.
						</span>
					</p>
				</div>
				<ShowsBody />
			</section>
			{isModalVisible && <Modal />}
		</>
	);
};

export default Shows;
