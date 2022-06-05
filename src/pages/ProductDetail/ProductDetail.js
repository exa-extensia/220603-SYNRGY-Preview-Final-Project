import Breadcrumb from "../../components/atoms/breadcrumb/Breadcrumb";
import Navbar from "../../components/sections/_navbar/Navbar";
import { Rating, Tabs } from "flowbite-react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

export default function ProductDetail() {
	return (
		<>
			<Navbar />
			<section id="productdetail">
				<div className="pd__wrapper">
					<div className="pd__breadcrumbs">
						<Breadcrumb />
					</div>
					<div className="pd__3cols">
						<div className="pd__img">
							<div className="img__main">
								<img
									src="https://source.unsplash.com/random/?cosmetic"
									alt="pd"
								/>
							</div>
							<div className="img__others">
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
								<div className="img__other">
									<img
										src="https://source.unsplash.com/random/?cosmetic"
										alt="pd"
									/>
								</div>
							</div>
						</div>
						<div className="h-3/12 col-span-4 aspect-[4/3]  sm:col-span-5 lg:col-span-6">
							<h2 className="mb-3 text-xl lg:text-[24px]">
								Brightening Facial Wash – All Skin Type
							</h2>
							<p className="price mb-3 text-xl font-bold text-brown">
								Rp75.000
							</p>
							<div className="pd__rating">
								<Rating>
									<Rating.Star />
									<Rating.Star />
									<Rating.Star />
									<Rating.Star />
									<Rating.Star filled={false} />
								</Rating>
							</div>
							<div className="pd__brand mb-10 mt-10 flex w-full items-center gap-4 rounded-lg bg-cream py-4 px-4 pt-3 lg:w-3/4 xl:w-2/4">
								<div className="aspect-square h-12 overflow-hidden rounded-md">
									<img
										src="https://source.unsplash.com/random/?brand"
										alt="brand"
									/>
								</div>
								<div>
									<p className="text-lg font-bold uppercase text-black">
										Scarlett
									</p>
									<a href="#" className="text-[12px] text-brown underline">
										Kunjungi Katalog Brand
									</a>
								</div>
							</div>
							<Tabs.Group aria-label="Tabs with icons" style="underline">
								<Tabs.Item active={true} title="Deskripsi">
									<ol>
										<li>
											Di dalam Scarlett Whitening Facial Wash terdapat kandungan
											Glutathione, Vitamin E, Rose Petals dan Aloe Vera yang
											sangat bagus untuk :
										</li>
										<li>1. Membantu mencerahkan wajah.</li>
										<li>
											2. Membantu menutrisi serta mengecilkan pori-pori di
											wajah.
										</li>
										<li>
											3. Membantu mengontrol kadar minyak berlebih di wajah.
										</li>
										<li>
											4. Membantu menghilangkan beruntus/jerawat di wajah.
										</li>
										<li>
											5. Membantu meregenerasi kulit wajah agar tampak lebih
											fresh.
										</li>
									</ol>
								</Tabs.Item>
								<Tabs.Item title="Cara Penggunaan">
									<ol>
										<li>1. Basuh wajah dengan air</li>
										<li>
											2. Tuang Facial Wash Scarlett pada tangan lalu usapkan
											pada wajah.
										</li>
										<li>3. Bilas dengan air bersih.</li>
										<li>
											Gunakan secara rutin sehari dua kali pada pagi dan malam
											hari. Untuk hasil maksimal gunakan juga rangkaiannya,
											seperti Brightening Moisturizer Scarlett.
										</li>
									</ol>
								</Tabs.Item>
								<Tabs.Item title="Komposisi">
									<ol>
										<li>1. Glutathione</li>
										<li>2. TOCOPHEROL</li>
										<li>3. Lauryl Betaine</li>
										<li>4. Water</li>
										<li>5. Tetrahydroxypropyl Ethylenediamine</li>
										<li>6. Dmdm hydantoin</li>
									</ol>
								</Tabs.Item>
							</Tabs.Group>
						</div>
						<div className="pd__input col-span-4 flex h-fit w-full flex-col bg-white p-5 sm:col-span-5 sm:col-start-4 lg:col-span-3 lg:col-start-10">
							<div className="mb-7">
								<p className="mb-3 text-lg font-bold">Ringkasan Belanja</p>
								<div className="w-20 border border-brown"></div>
							</div>

							<div className="mb-7">
								<p className="mb-3 text-[16px] font-semibold">Jumlah</p>
								<div className="input__jumlah flex items-center gap-6">
									<div className="flex aspect-square w-7 items-center justify-center rounded-full  bg-cream text-brown">
										<HiMinusSm />
									</div>
									<p className="font-bold text-brown">1</p>
									<div className="flex aspect-square w-7 items-center justify-center rounded-full  bg-cream text-brown">
										<HiPlusSm />
									</div>
								</div>
							</div>
							<div className="mb-7">
								<p className="mb-3 text-[16px] font-semibold">Subtotal</p>
								<p className="text-[20px] font-bold text-brown">Rp 75.000</p>
							</div>
							<div className="flex gap-4 lg:flex-col 2xl:flex-row">
								<button className="w-full rounded-full bg-cream py-2 px-5 text-xs">
									Add to Cart
								</button>
								<button className="w-full rounded-full border py-2 px-5 text-xs">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
