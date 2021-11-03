import { Link } from "react-router-dom";

import useFooterTransition from "../hooks/useFooterTransition";

const Footer = () => {
	const { active } = useFooterTransition();

	return (
		<footer className={`footer ${active && "footer--active"}`}>
			<div className="footer__generalContainer">
				<div className="footer__mainContainer">
					<h2 className="footer__title">¿Te ayudamos?</h2>

					<p className="footer__paragraph">
						Comunicate con nosotros ante cualquier duda o sugerencia, todas las
						opiniones nos{" "}
						<span className="footer__finalText">
							permiten mejorar día a día.
						</span>
					</p>

					<Link to="/contacto">
						<button className="footer__button">Contactanos</button>
					</Link>
				</div>
				<div className="footer__listContainer footer__listContainer--info">
					<ul className="footer__list">
						<li className="footer__listItem">Calle Falsa 123</li>
						<li className="footer__listItem">Múnich-Alemania</li>
						<li className="footer__listItem">+54 1131061205</li>
						<li className="footer__listItem">experienciaimpro@gmail.com</li>
					</ul>
				</div>
				<div className="footer__listContainer footer__listContainer--nav">
					<ul className="footer__list">
						<li className="footer__listItem">
							<Link to="/clases">Clases</Link>
						</li>
						<li className="footer__listItem">
							<Link to="/podcast">Podcast</Link>
						</li>
						<li className="footer__listItem">
							<Link to="/shows">Shows</Link>
						</li>
					</ul>
				</div>
				<div className="footer__listContainer">
					<ul className="footer__list">
						<li className="footer__listItem">
							<Link
								className="footer__link"
								to="https://www.facebook.com/impro.experiencia"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</Link>
						</li>
						<li className="footer__listItem">
							<Link
								className="footer__link"
								to="https://www.instagram.com/experienciaimpro/"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</Link>
						</li>
						<li className="footer__listItem">
							<Link
								className="footer__link"
								to="https://open.spotify.com/show/2qiEe52INU2Pq8mgnIfTcD?si=jB5_Mcb-QCCymiXCkWUeNg"
								target="_blank"
								rel="noreferrer"
							>
								Spotify
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
