import { cookies } from "next/headers";
import { graphqlFetch } from "@api/fetch";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
	CartUpdateItemDocument,
	ProductGetByIdDocument,
} from "@gql/graphql";

export async function createCart() {
	const { createOrder: cart } = await graphqlFetch({
		query: CartCreateDocument,
		next: {
			tags: ["cart"],
		},
	});
	if (!cart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.id);

	return cart;
}

export async function getOrCreateCart() {
	const cart = await getCartByIdFromCookies();
	if (cart) {
		return cart;
	}

	return createCart();
}

export async function updateCartItemOrAddToCart(
	orderId: string,
	productId: string,
) {
	const cart = await graphqlFetch({
		query: CartGetByIdDocument,
		variables: { id: orderId },
	});

	if (!cart) {
		throw new Error(`Cart with id ${orderId} not found`);
	}

	const items = cart.order?.orderItems;

	if (items) {
		const orderItem = cart.order?.orderItems.find(
			(item) => item?.product?.id === productId,
		);

		if (orderItem) {
			const newQuantity = orderItem.quantity + 1;
			await graphqlFetch({
				query: CartUpdateItemDocument,
				variables: {
					productId: orderItem.id,
					quantity: newQuantity,
					total: orderItem.product ? orderItem.product.price * newQuantity : 0,
				},
			});
			return;
		}
	}

	await addProductToCart(orderId, productId);
}

export async function getCartByIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return;
	}

	const { order: cart } = await graphqlFetch({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
	if (!cart) {
		throw new Error("Cart not found");
	}

	return cart;
}

export async function addProductToCart(orderId: string, productId: string) {
	const { product } = await graphqlFetch({
		query: ProductGetByIdDocument,
		variables: { id: productId },
		next: {
			tags: ["cart"],
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await graphqlFetch({
		query: CartAddItemDocument,
		variables: { orderId, productId, total: product.price },
		next: {
			tags: ["cart"],
		},
	});
}

export async function changeItemQuantity(
	itemId: string,
	quantity: number,
	total: number,
) {
	await graphqlFetch({
		query: CartUpdateItemDocument,
		variables: { productId: itemId, quantity, total },
		next: { tags: ["cart"] },
	});
}

export async function removeItemFromCart(itemId: string) {
	return graphqlFetch({
		query: CartRemoveItemDocument,
		variables: { itemId },
		next: { tags: ["cart"] },
	});
}
