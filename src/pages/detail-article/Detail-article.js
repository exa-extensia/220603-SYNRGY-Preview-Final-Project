import Footer from "../../components/sections/_footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/sections/_navbar/Navbar";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";
import Breadcrumb from "../../components/atoms/breadcrumb/BC-ArticleDetail";
import { HiClock } from "react-icons/hi";
import illst from "../../assets/images/articledetail-bg.svg";
import Skeleton from "@mui/material/Skeleton";

export default function DetailArticle() {
	const params = useParams();
	const [oneArticle, setOneArticle] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		scrollTop();
		axios
			.get(`https://cosmetic-b.herokuapp.com/api/v1/article/${params.id}`)
			.then((res) => {
				setLoading(false);
				setOneArticle(res.data.data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				setError(true);
			});
	}, [params.id]);
	return (
		<>
			<Navbar />
			<section className="mb-20 flex w-full items-center justify-center">
				<div className="container mx-4 mb-10 sm:max-w-[688px] lg:max-w-[864px] xl:max-w-[1200px]">
					<div className="cp__breadcrumbs mb-10">
						<Breadcrumb />
					</div>
					{!loading && error && <p>error</p>}
					{loading && (
						<div className="my-10 flex w-full flex-col items-center justify-center">
							<Skeleton
								variant="rectangular"
								className="h-[300px] w-full"
								animation="wave"
							/>
						</div>
					)}
					{!loading && !error && oneArticle && (
						<div className="my-10 flex w-full flex-col items-center justify-center">
							<h1 className="text-center text-2xl">{oneArticle.title}</h1>
							<div className="my-4 flex gap-2">
								<div className="inline rounded-full bg-cream px-2 py-1 text-xs uppercase text-brown">
									tips dan trik
								</div>
								<div className="inline rounded-full bg-cream px-2 py-1 text-xs uppercase text-brown">
									PERAWATAN CANTIK
								</div>
							</div>
							<div className="flex flex-row items-center gap-2 text-xs">
								<HiClock />
								<p>{oneArticle.date}</p>
							</div>
							<div className="relative ">
								<div className="absolute top-0 left-0 z-10 aspect-video w-2/3 translate-x-[25%] translate-y-[15%] overflow-hidden rounded-md bg-cream">
									<img
										src={oneArticle.photo}
										alt="artikel"
										className="h-full w-full bg-cover bg-center"
									/>
								</div>
								<div className="hidden items-center justify-center sm:flex sm:h-[400px] xl:h-[600px]">
									<img
										src={illst}
										alt="detail artikel bg"
										className="h-full w-full"
									/>
								</div>
							</div>
							<p className="hidden px-4 text-justify indent-52 text-base sm:block">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
								exercitationem, asperiores tempora iure similique neque
								provident harum! Voluptatem, tempora quisquam magni nisi quod
								reiciendis quibusdam eaque unde sint deleniti praesentium ut
								voluptatibus labore magnam accusantium sed fugiat corporis
								similique, veritatis reprehenderit officia quos culpa modi.
								Beatae sed similique illo enim? Quaerat, accusamus reprehenderit
								quo ipsum ducimus suscipit hic non delectus eius iusto
								necessitatibus, sunt quisquam aliquid alias. Quia totam
								perferendis voluptatibus natus assumenda amet adipisci minus
								ipsa aperiam. Error, in corporis impedit soluta saepe, labore
								rerum amet, beatae recusandae quam reiciendis assumenda maiores
								dicta veniam porro similique officiis. Ducimus tenetur
								laboriosam quam veritatis in debitis magni aliquam laudantium
								doloremque. Fugiat aliquid nam repellat delectus dolores maxime,
								libero soluta esse dignissimos neque obcaecati. Consequatur
								expedita provident qui reprehenderit, numquam architecto in enim
								deserunt? Earum omnis repudiandae, eius id sint rerum dolores
								facilis cupiditate officia sunt, magnam placeat ducimus modi?
								Vero in quos alias consequuntur eveniet voluptatem, eligendi
								laboriosam incidunt odit tenetur molestiae sed, doloribus
								voluptates eos et earum nemo aperiam pariatur, assumenda illum?
								Quam cumque exercitationem molestias quos? Suscipit facere
								inventore modi dicta quam eos ea! Maiores corrupti ad nam
								doloribus tempore modi tempora aut molestias fuga error a
								accusamus placeat, similique voluptatum velit iste neque fugit,
								dolorem sunt deleniti quibusdam quas? Magni optio ea nisi natus
								dolor dignissimos incidunt, nesciunt ad libero voluptatibus!
								Alias tenetur quidem repellat inventore harum magnam itaque
								exercitationem consequatur vitae fuga, veritatis, eos at,
								mollitia error beatae nemo id ipsum perspiciatis delectus.
								Veritatis necessitatibus ex iusto omnis mollitia doloremque
								aperiam voluptates unde delectus excepturi tenetur laboriosam
								saepe error perspiciatis nesciunt, corrupti ratione odit placeat
								esse quibusdam nihil repellendus? Numquam dignissimos quia enim
								dolore atque asperiores maxime, quo nemo doloribus quas?
								Suscipit atque voluptatem animi veniam neque totam,
								reprehenderit ad maiores iure consectetur nisi vero velit
								consequuntur?
							</p>
							<div className="my-[75px] flex w-full">
								<div className="mx-auto aspect-video w-2/3  overflow-hidden rounded-md bg-cream">
									<img
										src={oneArticle.photo}
										alt="artikel"
										className="h-full w-full bg-cover bg-center"
									/>
								</div>
							</div>
							<p className="px-4 text-justify indent-52 text-base">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
								exercitationem, asperiores tempora iure similique neque
								provident harum! Voluptatem, tempora quisquam magni nisi quod
								reiciendis quibusdam eaque unde sint deleniti praesentium ut
								voluptatibus labore magnam accusantium sed fugiat corporis
								similique, veritatis reprehenderit officia quos culpa modi.
								Beatae sed similique illo enim? Quaerat, accusamus reprehenderit
								quo ipsum ducimus suscipit hic non delectus eius iusto
								necessitatibus, sunt quisquam aliquid alias. Quia totam
								perferendis voluptatibus natus assumenda amet adipisci minus
								ipsa aperiam. Error, in corporis impedit soluta saepe, labore
								rerum amet, beatae recusandae quam reiciendis assumenda maiores
								dicta veniam porro similique officiis. Ducimus tenetur
								laboriosam quam veritatis in debitis magni aliquam laudantium
								doloremque. Fugiat aliquid nam repellat delectus dolores maxime,
								libero soluta esse dignissimos neque obcaecati. Consequatur
								expedita provident qui reprehenderit, numquam architecto in enim
								deserunt? Earum omnis repudiandae, eius id sint rerum dolores
								facilis cupiditate officia sunt, magnam placeat ducimus modi?
								Vero in quos alias consequuntur eveniet voluptatem, eligendi
								laboriosam incidunt odit tenetur molestiae sed, doloribus
								voluptates eos et earum nemo aperiam pariatur, assumenda illum?
								Quam cumque exercitationem molestias quos? Suscipit facere
								inventore modi dicta quam eos ea! Maiores corrupti ad nam
								doloribus tempore modi tempora aut molestias fuga error a
								accusamus placeat, similique voluptatum velit iste neque fugit,
								dolorem sunt deleniti quibusdam quas? Magni optio ea nisi natus
								dolor dignissimos incidunt, nesciunt ad libero voluptatibus!
								Alias tenetur quidem repellat inventore harum magnam itaque
								exercitationem consequatur vitae fuga, veritatis, eos at,
								mollitia error beatae nemo id ipsum perspiciatis delectus.
								Veritatis necessitatibus ex iusto omnis mollitia doloremque
								aperiam voluptates unde delectus excepturi tenetur laboriosam
								saepe error perspiciatis nesciunt, corrupti ratione odit placeat
								esse quibusdam nihil repellendus? Numquam dignissimos quia enim
								dolore atque asperiores maxime, quo nemo doloribus quas?
								Suscipit atque voluptatem animi veniam neque totam,
								reprehenderit ad maiores iure consectetur nisi vero velit
								consequuntur?
							</p>
						</div>
					)}

					<ProdukTrending />
				</div>
			</section>
			{/* <Breadcrumb />
			<div>
				{oneArticle ? (
					<div className="hero container mx-auto max-w-screen-lg pb-10">
						<h1 className="my-4 text-center">{oneArticle.title}</h1>
						<img
							className="mx-auto max-w-[50%] object-center"
							src={oneArticle.photo}
						/>
						<p>{oneArticle.content}</p>
					</div>
				) : (
					""
				)}
			</div>
			<ProdukTrending /> */}
			<Footer />
		</>
	);
}
