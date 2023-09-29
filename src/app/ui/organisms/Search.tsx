"use client";

import {
	useState,
	type ChangeEvent,
	type KeyboardEvent,
	useEffect,
} from "react";
import { SearchCheckIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@hooks/useDebounce";

export default function Search() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const [value, setValue] = useState(query || "");
	const debouncedValue = useDebounce(value, 500);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | KeyboardEvent,
	) => {
		const target = event.target as HTMLInputElement;
		if (!target) return;
		setValue(target.value || "");
	};

	useEffect(() => {
		if (!debouncedValue) return;
		router.push(`/search?query=${debouncedValue}`);
	}, [debouncedValue, router]);

	return (
		<div className="relative">
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<SearchCheckIcon className="h-5 w-5 text-slate-300" />
			</div>
			<input
				value={value}
				onChange={handleChange}
				onKeyDown={(event) => {
					if (event.key === "Enter") router.push(`/search?query=${value}`);
				}}
				role="searchbox"
				type="search"
				name="search"
				className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
			/>
		</div>
	);
}
