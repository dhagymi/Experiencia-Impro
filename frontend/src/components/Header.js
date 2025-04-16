import Logo from "./Logo";
// import NavBar from './NavBar';
// import BurguerMenu from './BurguerMenu';
import { useMenuContext } from "../contexts/MenuContext";

const Header = () => {
	const { open } = useMenuContext();

	return (
		<header className={`header ${open && "header--activedMenu"}`}>
			<Logo />
			{/* <BurguerMenu /> */}
			{/* <NavBar /> */}
		</header>
	);
};

export default Header;
