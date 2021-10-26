import { NavLink } from "react-router-dom";

import { useMenuContext } from "../contexts/MenuContext";

const NavBar = () => {
	const { navBarClassActive, setNavBarClassActive, setOpen, open } =
		useMenuContext();

	const navBarClickHandler = async () => {
		setNavBarClassActive(" navbar--closing");
		setTimeout(() => {
			setNavBarClassActive("");
		}, 300);
		setOpen(!open);
	};

	const links = [
		{ to: "/", exact: true, innerText: "Home" },
		{ to: "/classes", exact: true, innerText: "Clases" },
		{ to: "/podcast", exact: true, innerText: "Podcast" },
		{ to: "/shows", exact: true, innerText: "Shows" },
		{ to: "/contact", exact: true, innerText: "Contacto" },
	];

	return (
		<nav className={`navbar ${navBarClassActive}`}>
			<ul className="navbar__list">
				{links.map(({ to, exact, innerText }) => {
					return (
						<li className="navbar__listItem" key={to}>
							<NavLink
								onClick={open ? navBarClickHandler : null}
								className="navbar__link"
								activeClassName="navbar__link navbar__link--active"
								to={to}
								exact={exact}
							>
								{innerText}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
