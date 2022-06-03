import PO from "../../../assets/icons/produkoriginal.png";
import BB from "../../../assets/icons/banyakbrand.png";
import Aman from "../../../assets/icons/aman.png";
import GP from "../../../assets/icons/gratispengembalian.png";
import PM from "../../../assets/icons/pembayaranmudah.png";

export default function Header() {
	return (
		<header>
			<div className="header__wrapper">
				<div className="header__main">
					<div className="header__main__wrapper">
						<div className="header__carousel">carousel</div>
						<div className="header__article"> artikel </div>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__bottom__wrapper">
						<div className="header__tagline">
							<img className="header__icon" src={PO} />
							<h3 className="header__text">Produk Original</h3>
						</div>
						<div className="header__tagline">
							<img className="header__icon" src={BB} />
							<h3 className="header__text">Banyak Brand</h3>
						</div>
						<div className="header__tagline">
							<img className="header__icon" src={Aman} />
							<h3 className="header__text">Aman</h3>
						</div>
						<div className="header__tagline">
							<img className="header__icon" src={GP} />
							<h3 className="header__text">Gratis Pengembalian</h3>
						</div>
						<div className="header__tagline">
							<img className="header__icon" src={PM} />
							<h3 className="header__text">Pembayaran Mudah</h3>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
