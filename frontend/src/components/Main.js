import { ModalContextProvider } from "../contexts/ModalContext";

const Main = ({ children }) => {
	return (
		<ModalContextProvider>
			<main className="main">{children}</main>
		</ModalContextProvider>
	);
};
export default Main;
