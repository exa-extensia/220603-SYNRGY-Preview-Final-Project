import img from "../../../assets/images/homepage/kenapaHarus.png";

export default function KenapaFlambo() {
	return (
		<section className="flex w-full items-center justify-center py-10">
			<div
				className="container mx-4  flex flex-col gap-6 py-4 sm:max-w-[688px] sm:flex-row  lg:max-w-[864px] xl:max-w-[1200px]"
				id="kenapa-flambo"
			>
				<img
					src={img}
					alt="not found"
					className="flex w-full items-center justify-center object-contain sm:w-[50%]"
				/>
				<div className="flex flex-col justify-center gap-4 xl:gap-10">
					<h1 className="text-center sm:text-left lg:text-2xl 2xl:text-3xl">
						Kenapa harus beli di Flambo?
					</h1>
					<p className="text-justify text-sm lg:text-base 2xl:text-lg">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						fugiat quo voluptas nulla pariatur?
					</p>
				</div>
			</div>
		</section>
	);
}
