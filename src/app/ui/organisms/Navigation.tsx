import ActiveLink from "@/ui/atoms/ActiveLink";

export default function Navigation({}) {
	return (
		<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
			<div className="hidden flex-shrink-0 items-center lg:flex">
				<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
					<li className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							activeClassName={`border-blue-500 text-slate-700`}
							className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
							href="/"
							exact={true}
						>
							Home
						</ActiveLink>
					</li>
					<li className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							activeClassName={`border-blue-500 text-slate-700`}
							className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
							href="/products"
						>
							All
						</ActiveLink>
					</li>

					<li className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							activeClassName={`border-blue-500 text-slate-700`}
							className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
							href="/categories/t-shirts"
						>
							T-Shirts
						</ActiveLink>
					</li>
					<li className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							activeClassName={`border-blue-500 text-slate-700`}
							className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
							href="/categories/hoodies"
						>
							Hoodies
						</ActiveLink>
					</li>
					<li className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							activeClassName={`border-blue-500 text-slate-700`}
							className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
							href="/categories/accessories"
						>
							Accessories
						</ActiveLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
