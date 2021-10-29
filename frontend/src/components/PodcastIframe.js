import { memo } from "react";

const PodcastIframe = () => {
	return (
		<iframe
			className="podcastIframe"
			src="https://open.spotify.com/embed/show/2G0HRZba65w6T9NDNScNK2?utm_source=generator&theme=0"
			width="100%"
			height="232"
			frameBorder="0"
			allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			title="La paeya podcast"
		></iframe>
	);
};

export default memo(PodcastIframe);
