import { createContext, useContext, useState } from "react";

const ClassesContext = createContext({});

export const useClassesContext = () => {
	return useContext(ClassesContext);
};

export const ClassesContextProvider = ({ children }) => {
	const [pageActive, setPageActive] = useState(1);
	const [classesMainReference, setClassesMainReference] = useState(false);
	const [containerReference, setContainerReference] = useState(false);

	return (
		<ClassesContext.Provider
			value={{
				pageActive,
				setPageActive,
				classesMainReference,
				setClassesMainReference,
				containerReference,
				setContainerReference,
			}}
		>
			{children}
		</ClassesContext.Provider>
	);
};
