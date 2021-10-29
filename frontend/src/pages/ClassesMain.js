import { useEffect } from "react";

import ClassPhoto from "../components/ClassPhoto";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

import { useClassesContext } from "../contexts/ClassesContext";

import photo from "../assets/photos/photo.png";

const ClassesMain = () => {
	const { setIsClasses } = useClassesContext();
	useEffect(() => {
		setIsClasses(true);

		return () => {
			setIsClasses(false);
		};
	}, [setIsClasses]);

	const { style } = useFloatingAnimation({
		angularPositionInitial: -10,
	});
	return (
		<section className="classesMain">
			<div className="classesMain__imageContainer">
				<ClassPhoto alternative="ph" source={photo} style={style} />
			</div>
			<div className="classesMain__body">
				<h1 className="classesMain__title">Clases</h1>
				<p className="classesMain__subtitle">Para actores y no actores</p>
				<p className="classesMain__hashtag">#noexperiencerequired</p>
				<p className="classesMain__mainText">
					No es necesario tener experiencia previa para participar y divertirse.
					Nuestro objetivo es generar un espacio de integración entre personas
					de diferentes nacionalidades, mediente la improvisación, la creación
					de escenas, personajes y juegos. Los talleres tienen capacidad para 10
					y 15 persona, se dictan una vez por semana y la duración de las{" "}
					<span className="classesMain__finalText">clases es de 2 horas</span>
				</p>
			</div>
		</section>
	);
};

export default ClassesMain;
