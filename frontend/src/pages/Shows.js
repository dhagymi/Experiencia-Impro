import Modal from "../components/Modal";
import ShowsBody from "../components/ShowsBody";

import { useModalContext } from "../contexts/ModalContext";

import useSEO from "../hooks/useSEO";

const Shows = () => {
	const { isModalVisible } = useModalContext();

	useSEO({ title: "Shows" });

	return (
		<section className="shows">
			<div className="shows__heading">
				<h1 className="shows__title">Próximos shows</h1>
				<p className="shows__subtitle">
					Un show en donde todo puede pasar. Por medio de las sugerencias del
					publico, los actores realizaran escenas completamente improvisadas. De
					la mano de 6 improvisadores,{" "}
					<span className="shows__subtitleFinal">
						te invitamos a que nos conozcas.
					</span>
				</p>
			</div>
			<ShowsBody />
			{isModalVisible && <Modal />}
		</section>
	);
};

export default Shows;
