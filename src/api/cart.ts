import { cookies } from "next/headers";
import { graphqlFetch } from "@api/fetch";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@gql/graphql";

export async function getOrCreateCart() {
	const cart = await getCartByIdFromCookies();
	if (cart) {
		return cart;
	}

	return createCart();
}

export async function createCart() {
	const { createOrder: cart } = await graphqlFetch(CartCreateDocument, {});
	if (!cart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.id);
	return cart;
}

export async function getCartByIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return createCart();
	}

	const { order: cart } = await graphqlFetch(CartGetByIdDocument, {
		id: cartId,
	});
	if (!cart) {
		throw new Error("Cart not found");
	}

	return cart;
}

export async function addProductToCart(orderId: string, productId: string) {
	const { product } = await graphqlFetch(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await graphqlFetch(CartAddItemDocument, {
		orderId,
		productId,
		total: product.price,
	});
}
