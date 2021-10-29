import { createContext, useContext, useState } from "react";

const PodcastContext = createContext({});

export const usePodcastContext = () => {
	return useContext(PodcastContext);
};

export const PodcastContextProvider = ({ children }) => {
	const [pageActive, setPageActive] = useState(1);
	const [isPodcast, setIsPodcast] = useState(false);
	const [podcastMainReference, setPodcastMainReference] = useState(false);
	const [containerReference, setContainerReference] = useState(false);

	return (
		<PodcastContext.Provider
			value={{
				isPodcast,
				setIsPodcast,
				pageActive,
				setPageActive,
				podcastMainReference,
				setPodcastMainReference,
				containerReference,
				setContainerReference,
			}}
		>
			{children}
		</PodcastContext.Provider>
	);
};
