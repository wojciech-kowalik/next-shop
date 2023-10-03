import { revalidateTag } from "next/cache";
import { addProductToCart, getOrCreateCart } from "@api/cart";

export async function addProductToCartAction(formData: FormData) {
	"use server";

	const productId = formData.get("productId")?.toString();
	const cart = await getOrCreateCart();

	await addProductToCart(cart.id, productId!);

	revalidateTag("cart");
}
