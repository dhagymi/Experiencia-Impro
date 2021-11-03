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
					contaremos anécdotas, que servirán de inspiración para escenas de{" "}
					<span className="podcastMain__finalText">
						teatro totalmente improvisadas.
					</span>
				</p>
				<h2 className="podcastMain__subtitle">
					Escuchá nuestros episodios en Spotify
				</h2>
				<PodcastIframe />
			</section>
		</>
	);
};

export default PodcastMain;
