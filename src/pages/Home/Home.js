import PO from "../../assets/icons/produkoriginal.png";
import BB from "../../assets/icons/banyakbrand.png";
import Aman from "../../assets/icons/aman.png";
import GP from "../../assets/icons/gratispengembalian.png";
import PM from "../../assets/icons/pembayaranmudah.png";
import Navbar from "../../components/sections/_navbar/Navbar";

export default function Jumbotron() {
	return (
		<>
			{/* Navbar  */}
			<Navbar />
			{/* Header */}
			<header></header>
			{/* Produk Trending */}
			<section id="produktrending"></section>
			{/* Kategori Produk */}
			<section id="kategoriproduk"></section>
			{/* Ribuan Brand */}
			<section id="ribuanbrand"></section>
			{/* Kenapa Flambo */}
			<section id="kenapaflambo"></section>
			{/* Footer */}
			<footer></footer>
		</>
	);
}
