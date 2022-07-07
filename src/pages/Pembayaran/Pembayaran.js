import Navbar from "../../components/sections/_navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/sections/_footer/Footer";
import "./Pembayaran.css";
import { Dropdown } from "flowbite-react/lib/esm/components";

export default function Pembayaran() {
	return (
		<>
			<Navbar />
			<section id="cartpage" className="mt-10">
				<div className="cp__wrapper">
					<div className="cp__2cols">
						<div className="cp__product__card__wrapper">
							<div className="cp__card">
								<div className="cp__brand">
									<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
										<img
											src="https://source.unsplash.com/random/?brand"
											alt="brand"
										/>
									</div>
									<div>
										<p className="text-sm font-bold uppercase text-black sm:text-lg">
											Scarlett whitening
										</p>
										<a
											href="#"
											className="text-xs text-brown underline sm:text-[12px]"
										>
											Lihat Katalog Brand
										</a>
									</div>
								</div>
								<div className="my-4 border-b border-brown sm:my-6" />
								<div className="cp__satubrand__input">
									<div className="cp__input">
										<div className="input__img">
											<img
												src="https://source.unsplash.com/random/?skincare"
												alt="cp__product"
											/>
										</div>
										<div className="input__text">
											<p>Brightening Facial Wash – All Skin Type</p>
											<p className="text-slate-400">Size: 100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<p className="rounded-full bg-slate-100 px-3 text-black">
												2 barang
											</p>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
									</div>
									<div className="cp__input">
										<div className="input__img">
											<img
												src="https://source.unsplash.com/random/?skincare"
												alt="cp__product"
											/>
										</div>
										<div className="input__text">
											<p>Essence Toner – Acne </p>
											<p className="text-slate-400">Size: 100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<p className="rounded-full bg-slate-100 px-3 text-black">
												1 barang
											</p>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
									</div>
								</div>

								<div className="cp__brand mt-5">
									<div className="hidden aspect-square h-12 overflow-hidden rounded-md sm:block">
										<img
											src="https://source.unsplash.com/random/?brand"
											alt="brand"
										/>
									</div>
									<div>
										<p className="text-sm font-bold uppercase text-black sm:text-lg">
											Scarlett
										</p>
										<a
											href="#"
											className="text-xs text-brown underline sm:text-[12px]"
										>
											Lihat Katalog Brand
										</a>
									</div>
								</div>
								<div className="my-4 border-b border-brown sm:my-6" />
								<div className="cp__satubrand__input">
									<div className="cp__input">
										<div className="input__img">
											<img
												src="https://source.unsplash.com/random/?skincare"
												alt="cp__product"
											/>
										</div>
										<div className="input__text">
											<p>Brightening Facial Wash – All Skin Type</p>
											<p className="text-slate-400">Size: 100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<p className="rounded-full bg-slate-100 px-3 text-black">
												2 barang
											</p>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
									</div>
								</div>
							</div>
							<div className="cp__card">
								<div className="cp__brand  relative">
									<h1>Metode Pengiriman</h1>
									<button className="absolute right-0 flex w-[100px] items-center rounded-2xl bg-goldie px-4 py-1 text-brown sm:w-[120px] lg:w-[160px]">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.412 0.587999C11.0298 0.222825 10.5216 0.019043 9.993 0.019043C9.46441 0.019043 8.95617 0.222825 8.574 0.587999L0 9.162V12H2.838L11.412 3.426C11.7878 3.04937 11.9988 2.53905 11.9988 2.007C11.9988 1.47495 11.7878 0.964631 11.412 0.587999ZM2.217 10.5H1.5V9.783L7.8265 3.457L8.5435 4.1735L2.217 10.5Z"
												fill="#A67A4A"
											/>
										</svg>
										<p className="ml-1 text-[10px] lg:text-[15px]">
											pilih alamat lain
										</p>
									</button>
								</div>
								<div className="my-4 border-b border-brown sm:my-6"></div>
								<div className="flex">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_1061_3788)">
											<path
												d="M12 0C9.34873 0.0029116 6.80688 1.05742 4.93215 2.93215C3.05742 4.80688 2.00291 7.34873 2 10C2 15.282 10.4 22.533 11.354 23.343L12 23.889L12.646 23.343C13.6 22.533 22 15.282 22 10C21.9971 7.34873 20.9426 4.80688 19.0679 2.93215C17.1931 1.05742 14.6513 0.0029116 12 0V0ZM12 15C11.0111 15 10.0444 14.7068 9.22215 14.1573C8.3999 13.6079 7.75904 12.827 7.3806 11.9134C7.00216 10.9998 6.90315 9.99445 7.09607 9.02455C7.289 8.05464 7.7652 7.16373 8.46447 6.46447C9.16373 5.7652 10.0546 5.289 11.0245 5.09607C11.9945 4.90315 12.9998 5.00216 13.9134 5.3806C14.827 5.75904 15.6079 6.3999 16.1574 7.22215C16.7068 8.0444 17 9.01109 17 10C16.9984 11.3256 16.4711 12.5964 15.5338 13.5338C14.5964 14.4711 13.3256 14.9984 12 15Z"
												fill="#FF5823"
											/>
											<path
												d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
												fill="#FF5823"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1061_3788">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
									<div className="px-5">
										<p className="font-bold text-brown">
											Rumah - Angel (0812345678910)
										</p>
										<p>
											Perumahan Mendut Regency, Jalan Bandung 8 Blok I5,
											Kecamatan Bandung, Kota Bandung, Jawa Barat 16320
										</p>
									</div>
								</div>
								<div className="jasa-kurir mt-4 flex justify-evenly bg-blue-300 lg:justify-self-start">
									<div className="lg:mr-[50%]">
										<p className="font-bold">Pilih Jasa Kurir</p>
										<div className="rounded-full bg-slate-200 px-7">
											<Dropdown label="JNE" inline={true}>
												<Dropdown.Item>JNE</Dropdown.Item>
												<Dropdown.Item>Pos Indonesia</Dropdown.Item>
												<Dropdown.Item>J&T</Dropdown.Item>
												<Dropdown.Item>SiCepat</Dropdown.Item>
											</Dropdown>
										</div>
									</div>
									<div className="">
										<p className="font-bold">Jenis Pengiriman</p>
										<div className="rounded-full bg-slate-200 px-6">
											<Dropdown label="Reguler" inline={true}>
												<Dropdown.Item>Reguler</Dropdown.Item>
												<Dropdown.Item>COD</Dropdown.Item>
												<Dropdown.Item>Cargo</Dropdown.Item>
											</Dropdown>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="cp__output__card__wrapper">
							<div className="cp__card__ringkasan">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
									<div className="flex items-center">
										<div className="w-20 border-b-2 border-brown"></div>
										<div className="h-2 w-2 rounded-full bg-med-brown"></div>
									</div>
								</div>
								<div className="ringkasan__text mb-7 flex flex-col gap-2 text-xs lg:text-base">
									<div className="flex justify-between ">
										<p>Sub Belanja</p>
										<p className="font-bold">Rp 150.000</p>
									</div>
									<div className="flex justify-between">
										<p>Ongkos kirim</p>
										<p className="font-bold">Rp 20.000</p>
									</div>
									<div className="flex justify-between">
										<p>Potongan</p>
										<p className="font-bold">Rp 20.000</p>
									</div>
								</div>
								<button className="btn-grad w-full rounded-full py-2 font-bold uppercase text-white">
									<Link to={"*"}>Proses Pembayaran</Link>
								</button>
								<button className="btn-sec mt-2 w-full rounded-full py-2 font-bold uppercase text-slate-700 hover:text-white">
									<Link to={"/pembayaran"}>Batal</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
