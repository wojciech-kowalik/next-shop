"use client";

import { useTransition } from "react";
import { toast } from "react-toastify";
import { addProductToCartAction } from "./actions";
import Button from "@/ui/atoms/Button";

export default function AddToCartButton({ productId }: { productId: string }) {
	const [isPending, startTransition] = useTransition();

	return (
		<Button
			label="Add to cart"
			data-testid="add-to-cart-button"
			isSubmitting={isPending}
			onClick={() => {
				startTransition(async () => {
					await addProductToCartAction(productId);
					toast.success("Product added to cart");
				});
			}}
		/>
	);
}
