import { useEffect } from "react";

import { usePodcastContext } from "../contexts/PodcastContext";

const PodcastMain = () => {
	const { setIsPodcast } = usePodcastContext();
	useEffect(() => {
		setIsPodcast(true);

		return () => {
			setIsPodcast(false);
		};
	}, [setIsPodcast]);

	return (
		<section className="podcastMain">
			<h1 className="podcastMain__title">La Paella Podcast</h1>
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
			<iframe
				src="https://open.spotify.com/embed/show/2G0HRZba65w6T9NDNScNK2?utm_source=generator&theme=0"
				width="100%"
				height="232"
				frameBorder="0"
				allowFullScreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				title="La paella podcast"
			></iframe>
		</section>
	);
};

export default PodcastMain;
