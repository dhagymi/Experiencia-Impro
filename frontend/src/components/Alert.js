import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useAlertContext } from "../contexts/AlertContext";

import cross from "../assets/icons/cross.svg";

const Alert = ({
	title,
	mainText,
	finalText,
	onClose: closeButtonClickHandle,
}) => {
	const { alertClass, toggleIsAlertVisible } = useAlertContext();

	const [alertClassVisibility, setAlertClassVisibility] = useState("alert");

	useEffect(() => {
		setAlertClassVisibility(alertClass);
	}, [alertClass]);
	return (
		<div
			className={alertClassVisibility}
			onClick={() => toggleIsAlertVisible()}
		>
			<div className="alert__body" onClick={(event) => event.stopPropagation()}>
				<h3 className="alert__title">{title}</h3>
				<p className="alert__mainText">
					{mainText}
					<span className="alert__finalText">{finalText}</span>
				</p>
				<p className="alert__staff">Equipo Experiencia Impro</p>
				<button className="alert__button" onClick={closeButtonClickHandle}>
					<img src={cross} alt="Cerrar" className="alert__buttonImage" />
				</button>
			</div>
		</div>
	);
};

const PortalAlert = (props) => {
	return createPortal(<Alert {...props} />, document.getElementById("alert"));
};

export default PortalAlert;
