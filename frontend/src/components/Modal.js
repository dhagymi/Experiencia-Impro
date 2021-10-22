import { useEffect, useState } from "react";

import ShowOption from "./ShowOption";

import { useModalContext } from "../contexts/ModalContext";

import { getFirestoreData } from "../utils/firebase";

const Modal = () => {
	const [shows, setShows] = useState([]);
	const [currentShow, setCurrentShow] = useState("");
	const [currentShowStock, setCurrentShowStock] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const { setIsModalVisible } = useModalContext();

	useEffect(() => {
		try {
			const getStock = () => {
				setCurrentShowStock(0);

				const { stock } = shows?.find((show) => show.id === currentShow) || {
					stock: 0,
				};

				setCurrentShowStock(stock ?? 0);

				quantity > stock && setQuantity(stock);
			};

			getStock();
			return () => {
				setCurrentShowStock(0);
			};
		} catch (error) {
			console.log(error);
		}
	}, [currentShow, quantity, shows]);

	useEffect(() => {
		try {
			const getShows = async () => {
				const data = await getFirestoreData("shows");

				setShows(data);
			};

			getShows();

			return () => {
				setShows([]);
			};
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="modal" onClick={() => setIsModalVisible(false)}>
			<form
				className="modal__form"
				onClick={(event) => event.stopPropagation()}
			>
				<fieldset className="modal__fieldset">
					<legend className="modal__legend">Reservá tu entrada</legend>
					<label className="modal__label" htmlFor="name">
						Nombre y apellido
					</label>
					<input className="modal__input" name="name" id="name" required />
					<label className="modal__label" htmlFor="email">
						Correo electrónico
					</label>
					<input
						className="modal__input"
						name="email"
						id="email"
						required
						type="email"
					/>
					<label className="modal__label" htmlFor="quantity">
						Cantidad
					</label>
					<input
						className="modal__input"
						name="quantity"
						id="quantity"
						required
						type="number"
						value={quantity}
						onChange={({ target: { value } }) => {
							const newValue =
								value > currentShowStock
									? currentShowStock
									: value < 1
									? 1
									: value;
							return setQuantity(newValue);
						}}
					/>
					<label className="modal__label" htmlFor="show">
						Fecha y horario
					</label>
					<select
						className="modal__input"
						name="show"
						id="show"
						required
						value={currentShow}
						onChange={({ target: { value } }) => {
							setCurrentShow(value);
						}}
					>
						<option className="modal__showOption" value="">
							Show
						</option>
						{shows.map(({ date, id, place }) => (
							<ShowOption
								key={id}
								date={date}
								id={id}
								place={place}
								className="modal__showOption"
							/>
						))}
					</select>
					<div className="modal__info">
						<p className="modal__infoTitle">Importante</p>
						<p className="modal__infoBody">
							<span className="modal__infoImportantText">
								SE APLICARA LA POLITICA 3G PARA ESTE ESPECTACULO.
							</span>{" "}
							Será obligatorio presentar: certificado de vacunación completo,
							test negativo o{" "}
							<span className="modal__infoFinalText">
								recuperación de la enfermedad.
							</span>
						</p>
					</div>

					<button className="modal__submitButton" type="submit">
						Finalizar reserva
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Modal;
