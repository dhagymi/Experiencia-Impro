import { useMemo } from "react";
import { Helmet } from "react-helmet";

import ClassPhoto from "../components/ClassPhoto";

import photo from "../assets/photos/class_photo_1.webp";

const ClassesMain = () => {
	const animationOptions = useMemo(() => {
		return { angularPositionInitial: -10 };
	}, []);

	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Clases</title>
			</Helmet>
			<section className="classesMain">
				<figure className="classesMain__imageContainer">
					<ClassPhoto
						alternative="ph"
						source={photo}
						animationOptions={animationOptions}
					/>
				</figure>
				<div className="classesMain__body">
					<h1 className="classesMain__title">Clases</h1>
					<p className="classesMain__subtitle">Para actores y no actores</p>
					<p className="classesMain__hashtag">#experienciaimpro</p>
					<p className="classesMain__mainText">
						¿Te interesa el teatro y la comedia? Nuestro objetivo es generar un
						espacio de integración entre personas de diferentes nacionalidades
						hispanohablantes, mediante la creación de escenas, personajes y
						juegos (no es necesaria la experiencia previa). Las clases tienen
						capacidad para 10/15 personas (según protocolo COVID) y se dictan
						una vez por{" "}
						<span className="classesMain__finalText">
							semana desde las 19:30.
						</span>
					</p>
				</div>
				<p
					className="classesMain__toDownLink"
					onClick={() => {
						window.scrollTo(0, 3000);
					}}
				>
					+fotos
				</p>
			</section>
		</>
	);
};

export default ClassesMain;
