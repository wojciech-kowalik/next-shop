"use client";

import { useRouter } from "next/navigation";

export function Overlay() {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 bg-slate-800 bg-opacity-75"
		/>
	);
}
