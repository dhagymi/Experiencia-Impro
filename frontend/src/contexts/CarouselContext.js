import { createContext, useContext, useState } from "react";

import { useShowsContext } from "./ShowsContext";

const CarouselContext = createContext({});

export const useCarouselContext = () => {
	return useContext(CarouselContext);
};

export const CarouselContextProvider = ({ children }) => {
	const { shows } = useShowsContext();

	const [position, setPosition] = useState(0);
	const [showsContainerStyle, setShowsContainerStyle] = useState({
		width: `${shows.length * 100}%`,
		transform: `translateX(${-(100 / shows.length) * position}%)`,
	});

	return (
		<CarouselContext.Provider
			value={{
				position,
				setPosition,
				showsContainerStyle,
				setShowsContainerStyle,
			}}
		>
			{children}
		</CarouselContext.Provider>
	);
};
