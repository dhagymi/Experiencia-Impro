import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

import ShowOption from "./ShowOption";

import { useModalContext } from "../contexts/ModalContext";
import { useAlertContext } from "../contexts/AlertContext";

import { createOrderEmailTemplate } from "../utils/auxFuntions";

import cross from "../assets/icons/cross.svg";

const Modal = () => {
    const [shows, setShows] = useState([]);
    const [currentShow, setCurrentShow] = useState("");
    const [currentShowStock, setCurrentShowStock] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [modalClassVisibility, setModalClassVisibility] = useState("modal");

    const { modalClass, toggleIsModalVisible } = useModalContext();
    const { setIsLoading, setIsError, toggleIsAlertVisible } =
        useAlertContext();

    const submitFormHandler = useCallback(
        async (event) => {
            try {
                toggleIsModalVisible();
                setIsLoading(true);
                setIsError(false);
                event.preventDefault();

                const formData = new FormData(event.target);
                const documentRefId = formData.get("show");

                const newDocument = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    quantity: parseInt(formData.get("quantity")),
                    show: { ref: documentRefId },
                };

                const { data: id } = await axios.post(
                    "/api/orders",
                    newDocument
                );

                const showObject = shows?.find(
                    (show) => show.id === documentRefId
                );

                if (id) {
                    const oldStock = showObject.stock;
                    await axios.put(`/api/shows/${currentShow}`, {
                        stock: oldStock - quantity,
                    });
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

                response.status === 200 || setIsError(true);

                toggleIsAlertVisible(true);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                toggleIsAlertVisible(true);
                setIsLoading(false);
                console.log(error);
            }
        },
        [
            currentShow,
            quantity,
            setIsError,
            setIsLoading,
            shows,
            toggleIsAlertVisible,
            toggleIsModalVisible,
        ]
    );
    useEffect(() => {
        try {
            const getStock = () => {
                setCurrentShowStock(0);

                const { stock } = shows?.find(
                    (show) => show.id === currentShow
                ) || {
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
                const { data } = await axios.post("/api/shows", {
                    where: [
                        { field: "date", operator: ">=", value: new Date() },
                    ],
                });

                const finalData = data.filter((show) => show.stock);

                setShows(finalData);
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
                    <legend className="modal__legend">
                        Reservá tu entrada
                    </legend>
                    <label className="modal__label" htmlFor="name">
                        Nombre y apellido
                    </label>
                    <input
                        className="modal__input"
                        name="name"
                        id="name"
                        required
                    />
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
                            Elegí el show
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
                    <div className="modal__info">
                        <p className="modal__infoTitle">Importante</p>
                        <p className="modal__infoBody">
                            <span className="modal__infoImportantText">
                                SE APLICARÁ LA POLÍTICA 2G PARA ESTE
                                ESPECTÁCULO.
                            </span>{" "}
                            Para el ingreso es obligatorio presentar comprobante
                            de vacunación o recuperación{" "}
                            <span className="modal__infoFinalText">
                                y una identificación personal.
                            </span>
                        </p>
                    </div>

                    <button className="modal__submitButton" type="submit">
                        Finalizar reserva
                    </button>
                </fieldset>
                <button
                    className="modal__closeButton"
                    onClick={() => toggleIsModalVisible()}
                >
                    <img
                        alt="cerrar"
                        src={cross}
                        className="modal__closeIcon"
                    />
                </button>
            </form>
        </div>
    );
};

const PortalModal = () => {
    return createPortal(<Modal />, document.getElementById("modal"));
};

export default PortalModal;
