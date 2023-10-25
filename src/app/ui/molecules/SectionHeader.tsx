import { type PropsWithChildren } from "react";

export default function SectionHeader({
	name,
	children,
}: PropsWithChildren<{ name: string }>) {
	return (
		<div className="bg-slate-50">
			<div className="mx-auto max-w-7xl px-8 py-8">
				<h1 className="text-gray-70 text-2xl font-semibold tracking-tight">
					{name}
				</h1>
				{children}
			</div>
		</div>
	);
}
