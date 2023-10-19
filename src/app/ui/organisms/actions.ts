"use server";

import { revalidateTag } from "next/cache";
import { createReview } from "@api/review";
import { addProductToCart, getOrCreateCart } from "@api/cart";
import { type FormValues } from "@/types";

export async function addReviewToProductAction(
	data: FormValues,
	productId: string,
) {
	await createReview(data, productId);

	revalidateTag("product");
}

export async function addProductToCartAction(productId: string) {
	const cart = await getOrCreateCart();

	await addProductToCart(cart.id, productId);

	revalidateTag("cart");
}
