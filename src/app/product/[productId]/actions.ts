import { addProductToCart, getOrCreateCart } from "@api/cart";

// server action
export async function addProductToCartAction(formData: FormData) {
	"use server";

	const cart = await getOrCreateCart();
	const productId = formData.get("productId")?.toString();
	await addProductToCart(cart.id, productId!);
}
