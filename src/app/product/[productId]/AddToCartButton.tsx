"use client";

import { useTransition } from "react";
import { addProductToCartAction } from "./actions";

export default function AddToCartButton({ productId }: { productId: string }) {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			data-testid="add-to-cart-button"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await addProductToCartAction(productId);
				});
			}}
			className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
		>
			{isPending ? "Adding to cart..." : "Add to cart"}
		</button>
	);
}
