import { createContext, useContext, useState } from "react";

const HomeContext = createContext({});

export const useHomeContext = () => {
	return useContext(HomeContext);
};

export const HomeContextProvider = ({ children }) => {
	const [pageActive, setPageActive] = useState(1);
	const [isHome, setIsHome] = useState(false);
	const [homeMainReference, setHomeMainReference] = useState(false);
	const [containerReference, setContainerReference] = useState(false);

	return (
		<HomeContext.Provider
			value={{
				isHome,
				setIsHome,
				pageActive,
				setPageActive,
				homeMainReference,
				setHomeMainReference,
				containerReference,
				setContainerReference,
			}}
		>
			{children}
		</HomeContext.Provider>
	);
};
