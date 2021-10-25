import { useMenuContext } from "../contexts/MenuContext.js";

import menuImg from "../assets/icons/burguer_menu.svg";

const BurguerMenu = () => {
	const { open, setOpen, setNavBarClassActive } = useMenuContext();

	const menuClickHandler = () => {
		if (open) {
			setNavBarClassActive(" navbar--closing");
			setTimeout(() => {
				setNavBarClassActive(" navbar--final");
			}, 500);
			setOpen(!open);
		} else {
			setNavBarClassActive(" navbar--open");
			setOpen(!open);
		}
	};

	return (
		<div className="burguerMenu">
			<img
				src={menuImg}
				alt="menu"
				className="burguerMenu__img"
				onClick={menuClickHandler}
			/>
		</div>
	);
};

export default BurguerMenu;
