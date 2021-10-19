import { NavLink } from "react-router-dom";

const NavBar = () => {
	const links = [
		{ to: "/", exact: true, innerText: "Home" },
		{ to: "/aboutus", exact: true, innerText: "Nosotros" },
		{ to: "/classes", exact: true, innerText: "Clases" },
		{ to: "/podcast", exact: true, innerText: "Podcast" },
		{ to: "/shows", exact: true, innerText: "Shows" },
		{ to: "/contact", exact: true, innerText: "Contacto" },
	];

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto expansible">
					{links.map(({ to, exact, innerText }) => {
						return (
							<li className="nav-item" key={to}>
								<NavLink
									className="nav-link type"
									activeClassName="nav-link--active"
									to={to}
									exact={exact}
								>
									{innerText}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
