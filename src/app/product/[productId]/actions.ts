"use server";

import { revalidateTag } from "next/cache";
import { updateCartItemOrAddToCart, getOrCreateCart } from "@api/cart";

export async function addProductToCartAction(productId: string) {
	const cart = await getOrCreateCart();

	await updateCartItemOrAddToCart(cart.id, productId);

	revalidateTag("cart");
}
