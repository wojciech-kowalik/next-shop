"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export default function ActiveLink<T extends string>({
	href,
	children,
}: {
	href: Route<T> | URL;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`,
				isActive && `border-blue-500 text-slate-700`,
			)}
		>
			{children}
		</Link>
	);
}
