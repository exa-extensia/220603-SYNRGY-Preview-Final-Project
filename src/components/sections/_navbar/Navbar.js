import LOTUS from "../../../assets/images/logos/mainlogo-lotus.png";
import { BsHandbag, BsSearch, BsPerson, BsCaretDownFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export default function Navbar() {
	let nav__links = [
		{ name: "Home", url: "/#" },
		{ name: "Kategori", url: "/#" },
		{ name: "Produk Trending", url: "/#" },
		{ name: "Brands", url: "/#" },
		{ name: "Beauty Feed", url: "/#" },
		{ name: "Produk Organik", url: "/#" },
	];

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	const handleClose = () => setNav(!nav);

	return (
		<nav>
			<div className="nav__wrapper">
				<div className="nav__wrapper_top">
					<div className="nav__brand">
						<img className="logo" src={LOTUS} />
						<h1 className="logo__title">Glowing</h1>
					</div>
					<div className="nav__cart-profile">
						<div className="nav__cart">
							<BsHandbag size={20} />
						</div>
						<div className="nav__profile">
							<BsPerson size={20} />
							<p>Angel</p>
							<BsCaretDownFill size={20} />
						</div>
					</div>
				</div>
				<hr className="hidden sm:block" />
				<div className="nav__wrapper_bttm">
					<div className="nav__linkitems">
						{nav__links.map((item) => (
							<li className="item">{item.name}</li>
						))}
					</div>
					<div className="nav__searchbar__wrapper">
						<input className="nav__inputsearch" placeholder="cari produk..." />
						<BsSearch className="input__icon" />
					</div>
				</div>
			</div>
			{/* Nav Mobile */}

			<div className="nav__mobile">
				<div className="nav__brand sm:hidden">
					<img className="logo" src={LOTUS} />
					<h1 className="logo__title">Glowing</h1>
				</div>
				<div className="nav__mobile__right">
					<div className="nav__cart--mobile">
						<BsHandbag size={20} />
					</div>
					<div className="dropdown__icon" onClick={handleClick}>
						{!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
					</div>
					<div className={!nav ? "hidden" : "nav__mobile__dropdown"}>
						{nav__links.map((link__item) => (
							<li className="list__items" onClick={handleClose}>
								{link__item.name}
							</li>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
