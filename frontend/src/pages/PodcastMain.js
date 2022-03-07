import { Helmet } from "react-helmet";

import PodcastIframe from "../components/PodcastIframe";

const PodcastMain = () => {
	return (
		<>
			<Helmet>
				<title>Experiencia Impro | Podcast</title>
			</Helmet>
			<section className="podcastMain">
				<h1 className="podcastMain__title">La Paeya Podcast</h1>
				<p className="podcastMain__mainText">
					Somos improvisación teatral en formato podcast. En cada episodio,
					debatiremos temáticas de actualidad, analizaremos banalidades y
					contaremos anécdotas, que servirán de inspiración para escenas de
					teatro sin un solo guion. De la mano de Mati Degiuseppe, Emi Gregorace
					y Sandra Guerrero,{" "}
					<span className="podcastMain__finalText">
						La Paeya Podcast llegó para quedarse.
					</span>
				</p>
				<h2 className="podcastMain__subtitle">Escuchanos en Spotify</h2>
				<PodcastIframe />
			</section>
		</>
	);
};

export default PodcastMain;
