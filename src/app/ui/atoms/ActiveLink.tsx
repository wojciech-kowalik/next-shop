"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export default function ActiveLink<T extends string>({
	activeClassName,
	className,
	href,
	children,
}: {
	className?: string;
	activeClassName?: string;
	href: Route<T> | URL;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
}
