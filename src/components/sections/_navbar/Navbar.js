import LOTUS from "../../../assets/images/logos/mainlogo-lotus.png";
import {
	BsHandbag,
	BsSearch,
	BsPerson,
	BsCaretDownFill,
	BsCaretUpFill,
} from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../redux/auth/authSlice";

import { useState } from "react";

export default function Navbar() {
	let nav__links = [
		{ name: "Home", url: "/" },
		{ name: "Kategori", url: "/kategori" },
		{ name: "Produk Trending", url: "/productlist" },
		{ name: "Brands", url: "/brands" },
		{ name: "Beauty Feed", url: "/feed" },
		{ name: "Produk Organik", url: "/organik" },
	];

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	const handleClose = () => setNav(!nav);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<nav>
			<div className="nav__wrapper">
				<div className="nav__wrapper_top">
					<Link to={`/`}>
						<div className="nav__brand">
							<img className="logo" src={LOTUS} alt="lotus" />
							<h1 className="logo__title">Flambo</h1>
						</div>
					</Link>
					{user ? (
						<div className="nav__cart-profile relative">
							<div className="nav__cart">
								<Link to={`/trial-cart`}>
									<BsHandbag size={20} />
								</Link>
							</div>
							<div className="nav__profile ">
								<BsPerson size={20} />
								<p>
									Welcome,{" "}
									<span className="font-bold text-brown">{user.name}</span> :)
								</p>
								<div className="cursor-pointer" onClick={handleClick}>
									{!nav ? (
										<BsCaretDownFill size={20} />
									) : (
										<BsCaretUpFill size={20} />
									)}
								</div>
								<div className={!nav ? "hidden" : "nav__profile__dropdown"}>
									<li className="mobile__items" onClick={handleClose}>
										Profile
									</li>
									<li className="mobile__items" onClick={onLogout}>
										Logout
									</li>
								</div>
							</div>
						</div>
					) : (
						<div className="nav__login-daftar">
							<Link to={`/login`}>
								<button className="nav__btn btn-sec">Login</button>
							</Link>
							<Link to={`/register`}>
								<button className="nav__btn btn-grad text-white">
									Register
								</button>
							</Link>
						</div>
					)}
				</div>
				<hr className="hidden sm:block" />
				<div className="nav__wrapper_bttm">
					<div className="nav__linkitems">
						{nav__links.map((item) => (
							<Link to={item.url}>
								<li className="item">{item.name}</li>
							</Link>
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
				<Link to={`/`}>
					<div className="nav__brand">
						<img className="logo" src={LOTUS} alt="lotus" />
						<h1 className="logo__title">Flambo</h1>
					</div>
				</Link>
				<div className="nav__mobile__right">
					{user ? (
						<>
							<div className="nav__cart--mobile">
								<Link to={`/trial-cart`}>
									<BsHandbag size={20} />
								</Link>
							</div>
							<div className="dropdown__icon" onClick={handleClick}>
								{!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
							</div>
							<div className={!nav ? "hidden" : "nav__mobile__dropdown"}>
								{nav__links.map((item) => (
									<Link to={item.url}>
										<li className="mobile__items" onClick={handleClose}>
											{item.name}
										</li>
									</Link>
								))}
								<li className="mobile__items" onClick={onLogout}>
									Logout
								</li>
							</div>
						</>
					) : (
						<div className="nav__login-daftar">
							<Link to={`/login`}>
								<button className="nav__btn btn-sec">Login</button>
							</Link>
							<Link to={`/register`}>
								<button className="nav__btn btn-grad hidden text-white sm:block">
									Register
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
