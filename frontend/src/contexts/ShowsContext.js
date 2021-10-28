import { createContext, useContext, useState } from "react";

const ShowsContext = createContext({});

export const useShowsContext = () => {
	return useContext(ShowsContext);
};

export const ShowsContextProvider = ({ children }) => {
	const [months, setMonths] = useState([]);
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const [shows, setShows] = useState([]);

	return (
		<ShowsContext.Provider
			value={{ months, setMonths, month, setMonth, shows, setShows }}
		>
			{children}
		</ShowsContext.Provider>
	);
};
