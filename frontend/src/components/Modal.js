import { useEffect, useState } from "react";
import { where } from "firebase/firestore";
import axios from "axios";

import ShowOption from "./ShowOption";

import { useModalContext } from "../contexts/ModalContext";

import { createOrderEmailTemplate } from "../utils/auxFuntions";

import {
	getFirestoreData,
	addFirestoreData,
	getDocRef,
	setFirestoreData,
} from "../utils/firebase";

const Modal = () => {
	const [shows, setShows] = useState([]);
	const [currentShow, setCurrentShow] = useState("");
	const [currentShowStock, setCurrentShowStock] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [modalClassVisibility, setModalClassVisibility] = useState("modal");

	const { modalClass, toggleIsModalVisible } = useModalContext();

	const submitFormHandler = async (event) => {
		try {
			event.preventDefault();

			const formData = new FormData(event.target);
			const documentRefId = formData.get("show");

			const docuementRef = getDocRef("shows", documentRefId);

			const newDocument = {
				name: formData.get("name"),
				email: formData.get("email"),
				quantity: parseInt(formData.get("quantity")),
				show: docuementRef,
			};

			const id = await addFirestoreData("orders", newDocument);

			const showObject = shows?.find((show) => show.id === documentRefId);

			if (id) {
				const oldStock = showObject.stock;
				setFirestoreData("shows", { stock: oldStock - quantity }, currentShow);
			}

			const htmlTemplate = createOrderEmailTemplate(
				id,
				newDocument.quantity,
				showObject
			);

			const response = await axios.post("/api/mail", {
				to: newDocument.email,
				subject: "Tu reserva - Experiencia Impro",
				html: htmlTemplate,
			});

			if (response.status === 200) {
				alert("Enviamos tu reserva por correo electrónico!");
			} else {
				alert("La reserva no pudo realizarse");
			}

			toggleIsModalVisible();
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		try {
			const getStock = () => {
				setCurrentShowStock(0);

				const { stock } = shows?.find((show) => show.id === currentShow) || {
					stock: 0,
				};

				setCurrentShowStock(stock ?? 0);

				currentShow && quantity > stock && setQuantity(stock);
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
				const data = await getFirestoreData("shows", where("stock", ">", 0));

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

	useEffect(() => {
		setModalClassVisibility(modalClass);
	}, [modalClass]);
	return (
		<div
			className={modalClassVisibility}
			onClick={() => toggleIsModalVisible()}
		>
			<form
				className="modal__form"
				onClick={(event) => event.stopPropagation()}
				onSubmit={submitFormHandler}
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
						disabled={currentShow === ""}
						onChange={({ target: { value } }) => {
							const newValue =
								value > currentShowStock && value
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
