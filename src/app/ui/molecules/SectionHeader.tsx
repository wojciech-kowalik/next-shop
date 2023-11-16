import { type PropsWithChildren } from "react";

export default function SectionHeader({
	name,
	isFlexLayout = false,
	children,
}: PropsWithChildren<{ name: string; isFlexLayout?: boolean }>) {
	return (
		<section className="mb-4 divide-y divide-gray-200  border-b border-gray-200 bg-slate-50">
			<div
				className={`mx-auto max-w-7xl px-8 py-8 ${
					isFlexLayout ? "flex flex-row items-center justify-between" : ""
				}`}
			>
				<h1 className="text-gray-70 text-2xl font-semibold tracking-tight">
					{name}
				</h1>
				{children}
			</div>
		</section>
	);
}
