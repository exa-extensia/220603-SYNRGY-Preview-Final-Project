export default function Error404() {
	return (
		<>
			<div class="max-w-screen flex max-h-screen items-center justify-center">
				<div class="my-20 flex h-full w-full flex-wrap items-center justify-center gap-4 lg:gap-4">
					<div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
						<h1 class="text-9xl font-bold text-brown">404</h1>
						<p class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
							<span class="text-red-500">Oops!</span> Page not found
						</p>
						<p class="mb-8 text-center text-gray-500 md:text-lg">
							The page you’re looking for doesn’t exist.
						</p>
						<a
							href="/"
							class="bg-cream px-6 py-2 text-sm font-semibold text-brown"
						>
							Go home
						</a>
					</div>
					<div class="mt-4 h-80 w-80 overflow-hidden">
						<img
							src="https://source.unsplash.com/random/600x600/?cosmetic"
							alt="error-img"
							class=" bg-cover bg-center bg-no-repeat object-cover"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
