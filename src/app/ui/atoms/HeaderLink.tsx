import { type UrlObject } from "url";
import Link from "next/link";
import { type PropsWithChildren } from "react";

export default function HeaderLink({
	children,
	href,
}: PropsWithChildren<{ href: UrlObject }>) {
	return (
		<Link
			className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500  hover:text-slate-700"
			href={href}
		>
			{children}
		</Link>
	);
}
