import { useEffect, useRef } from "react";

import { ModalContextProvider } from "../contexts/ModalContext";
import { useHomeContext } from "../contexts/HomeContext";

const Main = ({ children }) => {
	const { isHome, setMainReference } = useHomeContext();

	const reference = useRef();

	useEffect(() => {
		setMainReference(reference.current);
	}, [setMainReference]);

	return (
		<ModalContextProvider>
			<main ref={reference} className={`main ${isHome ? "main--home" : ""}`}>
				{children}
			</main>
		</ModalContextProvider>
	);
};
export default Main;
