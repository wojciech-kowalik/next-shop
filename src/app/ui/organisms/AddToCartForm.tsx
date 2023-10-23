"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { addProductToCartAction } from "@/ui/organisms/actions";

export default function AddToCartForm({ productId }: { productId: string }) {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<{ productId: string }>();

	const onSubmit: SubmitHandler<{ productId: string }> = async (data) => {
		await addProductToCartAction(data.productId);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				hidden
				{...register("productId")}
				name="productId"
				value={productId}
				readOnly
			/>
			<button
				data-testid="add-to-cart-button"
				type="submit"
				disabled={isSubmitting}
				className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
			>
				{isSubmitting ? "Adding to cart..." : "Add to cart"}
			</button>
		</form>
	);
}
