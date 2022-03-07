import desktop_map_image from "../assets/background/desktop_map.svg";
import tablet_map_image from "../assets/background/tablet_map.svg";
import mobile_map_image from "../assets/background/mobile_map.svg";

const About = () => {
	return (
		<section className="about">
			<h2 className="about__title">¿QUÉ ES IMPROVISACIÓN?</h2>
			<div className="about__body">
				<div className="about__textContainer">
					<p className="about__text">
						La improvisación es una disciplinada del teatro en dónde los actores
						y actrices realizan escenas sin guion ni escenografía, tan solo con
						su mente y{" "}
						<span className="about__finalText">a gran velocidad.</span>
					</p>
					<h3 className="about__subtitle about__subtitle--desktop">
						DE ARGENTINA <span className="about__finalText">A MÚNICH</span>
					</h3>
					<p className="about__text about__text--desktop">
						¡Hola! Somos Mica y Mati, nos encanta la comedia, el teatro y los
						procesos creativos. Nacimos en Buenos Aires y en el año 2018 vivimos
						una temporada en el sur de Argentina. Durante ese tiempo queríamos
						continuar estudiando improvisación, pero en el lugar en dónde
						viviamos la oferta de clases era casi nula. Fue ahí que surgió la
						idea de dejar de ser alumnos y comenzar a enseñar comedia
						improvisada. La experiencia fue un éxito y cuando llegamos a Múnich
						en el 2019 (y ante la inexistencia de espacios en donde practicar
						improvisación en español) decidimos repetirla y es así{" "}
						<span className="about__finalText">
							como nació EXPERIENCIA IMPRO.
						</span>
					</p>
				</div>
			</div>
			<h2 className="about__title about__title--mobile">
				DE ARGENTINA A MÚNICH
			</h2>
			<div className="about__body about__body--mobile">
				<div className="about__textContainer">
					<p className="about__text">
						Hola, somos Mica y Mati (argentinos) y en el 2018 surgió la primer
						aparición de Experiencia Impro en la Patagonia Argentina ante la
						falta de este tipo de espacios. Creemos que es fundamental expandir
						la improvisación por cada lugar en el que vivimos y es por eso que
						dimos inicio a las clases en Múnich en el año 2019, siendo la primer
						escuela hispanohablante{" "}
						<span className="about__finalText">en la ciudad.</span>
					</p>
				</div>
			</div>
			<div className="about__background">
				<img
					alt="background-map"
					src={desktop_map_image}
					className="about__backgroundImage about__backgroundImage--desktop"
				/>
				<img
					alt="background-map"
					src={tablet_map_image}
					className="about__backgroundImage about__backgroundImage--tablet"
				/>
				<img
					alt="background-map"
					src={mobile_map_image}
					className="about__backgroundImage about__backgroundImage--mobile"
				/>
			</div>
		</section>
	);
};

export default About;
