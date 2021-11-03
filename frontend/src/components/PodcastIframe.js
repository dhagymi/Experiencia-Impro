import { memo, useCallback, useState } from "react";

import Loading from "./Loading";
import Message from "./Message";

const PodcastIframe = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const loadingHanlde = useCallback(() => {
		setIsLoading(false);
	}, []);

	const errorHandle = useCallback(() => {
		setIsError(true);
		setIsLoading(false);
	}, []);

	return (
		<div className="podcastIframe">
			<iframe
				className="podcastIframe__iframe"
				src="https://open.spotify.com/embed/show/2qiEe52INU2Pq8mgnIfTcD?utm_source=generator&theme=0"
				width="100%"
				height="232"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				title="La paeya podcast"
				onLoad={loadingHanlde}
				onError={errorHandle}
				style={isLoading ? { display: "none" } : {}}
			></iframe>
			{isLoading ? (
				<Loading style={{ height: "100%" }} />
			) : (
				isError && (
					<Message>
						Lo sentimos, el podcast no está disponible por el momento.
					</Message>
				)
			)}
		</div>
	);
};

export default memo(PodcastIframe);
