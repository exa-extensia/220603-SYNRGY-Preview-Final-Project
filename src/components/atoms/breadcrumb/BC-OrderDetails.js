export default function Breadcrumb() {
	return (
		<div class="flex" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a
						href="/"
						class="inline-flex items-center text-sm font-medium text-brown hover:cursor-pointer hover:font-bold"
					>
						<svg
							class="mr-2 h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
						</svg>
						Home
					</a>
				</li>
				<li>
					<div class="flex items-center">
						<svg
							class="h-6 w-6 text-brown"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
						<a
							href="/productlist"
							class="ml-1 text-sm font-medium text-brown hover:cursor-pointer hover:font-bold md:ml-2"
						>
							User Profile
						</a>
					</div>
				</li>
				<li aria-current="page">
					<div class="flex items-center">
						<svg
							class="h-6 w-6 text-brown"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="-2 ml-1 text-sm font-medium text-brown">
							Order Details
						</span>
					</div>
				</li>
			</ol>
		</div>
	);
}
