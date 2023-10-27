import Image from "next/image";

export default function Footer() {
	return (
		<footer className="m-4 rounded-lg border-t bg-white shadow ">
			<div className="mx-auto w-full max-w-screen-xl p-4 ">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Image
						priority
						src="/images/logo.svg"
						height={120}
						width={120}
						alt=""
					/>

					<ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
						<li>
							<a href="/about" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="/policy" className="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="/regulations" className="mr-4 hover:underline md:mr-6 ">
								Regulations
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-4 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
				<div className=" bg-white antialiased  sm:flex sm:items-center sm:justify-between ">
					<p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
						&copy; 2023. Next shop
					</p>
					<div className="flex items-center justify-center space-x-1">
						<a
							target="_blank"
							href="https://github.com/wojciech-kowalik/next-shop"
							data-tooltip-target="tooltip-github"
							className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<Image
								priority
								width={16}
								height={16}
								src="/images/github.svg"
								alt=""
							/>
							<span className="sr-only">Github</span>
						</a>
						<div
							id="tooltip-github"
							role="tooltip"
							className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
						>
							Star us on GitHub
							<div className="tooltip-arrow" data-popper-arrow></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
