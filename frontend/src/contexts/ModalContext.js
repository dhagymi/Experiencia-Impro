import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const useModalContext = () => {
	return useContext(ModalContext);
};

export const ModalContextProvider = ({ children }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
			{children}
		</ModalContext.Provider>
	);
};
