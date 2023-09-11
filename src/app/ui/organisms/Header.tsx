import { type PropsWithChildren } from "react";

export default function Header(props: PropsWithChildren<{}>) {
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					{props.children}
				</div>
			</div>
		</header>
	);
}
