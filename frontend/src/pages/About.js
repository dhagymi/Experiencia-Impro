import map_image from "../assets/background/map.svg";
import line_image from "../assets/background/line.svg";
import icons_image from "../assets/background/icons.svg";

const About = () => {
	return (
		<section className="about">
			<h1 className="about__title">De qué se trata?</h1>
			<div className="about__body">
				<div className="about__textContainer">
					<p className="about__text">
						Es una disciplina ligada al teatro pero con un carácter
						principalmente cómico en dónde los actores y actrices realizan
						escenas sin guión y sin escenografía, tan solo con su mente y a gran
						velocidad. Las herramientas imprescindibles para lograr escenas
						únicas son: la conexión entre los miembros del grupo, técnicas{" "}
						<span className="about__finalText">
							lúdicas y por supuesto, el público.
						</span>
					</p>
					<h2 className="about__subtitle">EN EL 2018...TODO EMPEZABA</h2>
					<p className="about__text">
						Hola! Somos Mica y Mati, nos encanta la comedia, el teatro y
						enseñar. Si bien somos oriundos de Buenos Aires, durante el año 2018
						vivimos una temporada en el sur de Argentina. Durante ese tiempo
						queriamos seguir estudiando improvisación, pero nos encontramos con
						una limitante, en el lugar en dónde estabamos viviendo la oferta de
						clases era casi nula. Entonces se nos ocurrió la idea de dejar de
						ser alumnos y comenzar a enseñar comedia improvisada. La experiencia
						fue tan bien recibida por los alumnos que cuando llegamos a Múnich
						(y ante la inexistencia de espacios en donde practicar impro en
						español) decidimos repertila. Nuevamente nos llevamos la sorpresa de
						una excelente{" "}
						<span className="about__finalText">
							recepción por parte de los alumnos.
						</span>
					</p>
				</div>
			</div>
			<div className="about__background">
				<img
					alt="background-map"
					src={map_image}
					className="about__backgroundImage"
				/>
				<img
					alt="background-line"
					src={line_image}
					className="about__backgroundImage about__backgroundImage--line"
				/>
				<img
					alt="background-icons"
					src={icons_image}
					className="about__backgroundImage about__backgroundImage--icons"
				/>
			</div>
		</section>
	);
};

export default About;