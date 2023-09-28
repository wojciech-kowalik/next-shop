"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddToCartButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			data-testid="add-to-cart-button"
			className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
		>
			{status.pending ? "Processing ..." : "Add to cart"}
		</button>
	);
}
