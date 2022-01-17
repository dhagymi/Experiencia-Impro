import { createContext, useContext, useState } from "react";

const AlertContext = createContext({});

export const useAlertContext = () => {
	return useContext(AlertContext);
};

export const AlertContextProvider = ({ children }) => {
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [alertClass, setAlertClass] = useState("alert");

	const toggleIsAlertVisible = () => {
		if (isAlertVisible) {
			setAlertClass("alert");
			setTimeout(() => {
				setIsAlertVisible(false);
			}, 300);
		} else {
			setIsAlertVisible(true);
			setAlertClass("alert alert--visible");
		}
	};

	return (
		<AlertContext.Provider
			value={{
				isAlertVisible,
				setIsAlertVisible,
				setAlertClass,
				toggleIsAlertVisible,
				isLoading,
				setIsLoading,
				isError,
				setIsError,
				alertClass,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};
