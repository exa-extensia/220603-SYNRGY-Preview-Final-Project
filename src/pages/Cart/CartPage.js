import Navbar from "../../components/sections/_navbar/Navbar";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-CartPage";
import {
	HiMinusSm,
	HiPlusSm,
	HiOutlineTrash,
	HiOutlineScissors,
	HiOutlineTicket,
	HiOutlineChevronRight,
} from "react-icons/hi";

export default function CartPage() {
	return (
		<>
			<Navbar />
			<section id="cartpage">
				<div className="cp__wrapper">
					<div className="cp__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="cp__totalqty mt-10 mb-6 w-full bg-cream p-4 font-bold text-brown xl:px-8">
						<p>3 Produk Terpilih</p>
					</div>
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
											Scarlett
										</p>
										<a
											href="#"
											className="text-xs text-brown underline sm:text-[12px]"
										>
											Kunjungi Katalog Brand
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
											<p>100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<div>
												<HiMinusSm />
											</div>
											<p>2</p>
											<div>
												<HiPlusSm />
											</div>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
										<div className="input__del ">
											<HiOutlineTrash />
										</div>
									</div>
									{/* DELETE -- CONTOH COMPONENT  */}
									<div className="cp__input">
										<div className="input__img">
											<img
												src="https://source.unsplash.com/random/?skincare"
												alt="cp__product"
											/>
										</div>
										<div className="input__text">
											<p>Brightening Facial Wash – All Skin Type</p>
											<p>100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<div>
												<HiMinusSm />
											</div>
											<p>2</p>
											<div>
												<HiPlusSm />
											</div>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
										<div className="input__del ">
											<HiOutlineTrash />
										</div>
									</div>
									{/* DELETE -- CONTOH COMPONENT  */}
								</div>
							</div>
							{/* DELETE -- CONTOH CARD BANYAK  */}
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
											Scarlett
										</p>
										<a
											href="#"
											className="text-xs text-brown underline sm:text-[12px]"
										>
											Kunjungi Katalog Brand
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
											<p>100ml</p>
											<p>Rp 75.000</p>
										</div>
										<div className="input__qty ">
											<div>
												<HiMinusSm />
											</div>
											<p>2</p>
											<div>
												<HiPlusSm />
											</div>
										</div>
										<div className="input__price ">
											<p>Rp 150.000</p>
										</div>
										<div className="input__del ">
											<HiOutlineTrash />
										</div>
									</div>
								</div>
							</div>
							{/* DELETE -- CONTOH CARD BANYAK  */}
						</div>
						<div className="cp__output__card__wrapper">
							<div className="cp__card__voucher">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Voucher Diskon</p>
									<div className="w-20 border-b-2 border-brown" />
								</div>
								<p className="mb-2 text-sm">
									Pilih dan masukkan voucher diskon untuk mendapatkan potongan
									harga.
								</p>
								<div className="voucher__kode mb-2 flex items-center gap-8 border border-brown p-2">
									<HiOutlineScissors size={28} color="#A67A4A" />
									<p className="text-xs lg:text-base">Masukan Kode Promo</p>
									<div className=" bg-brown py-1 px-2 font-semibold text-white">
										Klaim
									</div>
								</div>
								<div className="voucher__list mb-2 flex items-center gap-8 border border-brown p-2">
									<HiOutlineTicket color="#A67A4A" size={28} />
									<p className="w-56 text-xs lg:text-base">
										Lihat voucher diskon yang tersedia untukmu
									</p>
									<HiOutlineChevronRight color="#A67A4A" size={28} />
								</div>
							</div>
							<div className="cp__card__ringkasan">
								<div className="mb-7">
									<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
									<div className="w-20 border-b-2 border-brown" />
								</div>
								<div className="ringkasan__text mb-7 flex flex-col gap-2 text-xs lg:text-base">
									<div className="flex justify-between ">
										<p>Total Belanja</p>
										<p className="font-bold">Rp 445.000</p>
									</div>
									<div className="flex justify-between">
										<p>Diskon</p>
										<p className="font-bold">-</p>
									</div>
									<div className="flex justify-between">
										<p>Jumlah Pembayaran</p>
										<p className="font-bold">Rp 445.000</p>
									</div>
								</div>
								<button className="w-full rounded-full bg-brown py-2 font-bold uppercase text-white">
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
