"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SortFilter({ page = 1 }: { page?: number }) {
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
			className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		>
			<option value="name_ASC">Name (A-Z)</option>
			<option value="name_DESC">Name (Z-A)</option>
			<option value="price_ASC">Price (Low to High)</option>
			<option value="price_DESC">Price (High to Low)</option>
		</select>
	);
}
