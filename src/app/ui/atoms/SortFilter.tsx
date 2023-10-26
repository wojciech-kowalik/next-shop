"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SortFilter({ page }: { page?: number }) {
	const router = useRouter();
	const searchParams = useSearchParams()!;

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	return (
		<select
			onChange={(value) => {
				router.push(
					`/products/${page}?${createQueryString("sort", value.target.value)}`,
				);
			}}
			value={searchParams.get("sort") || "name_ASC"}
			className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus-visible:border-gray-300"
		>
			<option value="name_ASC">Name (A-Z)</option>
			<option value="name_DESC">Name (Z-A)</option>
			<option value="price_ASC">Price (Low to High)</option>
			<option value="price_DESC">Price (High to Low)</option>
		</select>
	);
}
