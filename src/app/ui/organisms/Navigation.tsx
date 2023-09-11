import { type PropsWithChildren } from "react";

export default function Navigation(props: PropsWithChildren<{}>) {
	return (
		<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
			<div className="hidden flex-shrink-0 items-center lg:flex">
				<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
					{props.children}
				</ul>
			</div>
		</nav>
	);
}
