"use client";

import { type UrlObject } from "url";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export default function ActiveLink<T extends string>({
	activeClassName,
	className,
	href,
	exact = false,
	children,
}: {
	className?: string;
	activeClassName?: string;
	href: Route<T> | UrlObject;
	exact?: boolean;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const stringPathname = typeof href === "object" ? href.pathname || "" : href;
	const isActive = exact
		? pathname === stringPathname
		: pathname.includes(stringPathname);

	return (
		<Link
			role="link"
			aria-current={isActive ? "page" : undefined}
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
}
