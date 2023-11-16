import {
	CartGetByIdDocument,
	OrderUpdateDatalByIdDocument,
	OrdersGetByEmailDocument,
} from "../gql/graphql";
import { graphqlFetch } from "@api/fetch";

export async function getOrdersByEmail(email: string) {
	const response = await graphqlFetch({
		query: OrdersGetByEmailDocument,
		variables: { email },
		cache: "no-store",
		next: {
			tags: ["order"],
		},
	});
	if (!response.orders) {
		throw new Error("Orders not found");
	}

	return response.orders;
}

export async function updateOrderDataById(
	id: string,
	data: { email: string; total: number; stripeCheckoutId: string },
) {
	const { email, total, stripeCheckoutId } = data;
	const response = await graphqlFetch({
		query: OrderUpdateDatalByIdDocument,
		variables: { id, email, total, stripeCheckoutId },
		cache: "no-store",
		next: {
			tags: ["order"],
		},
	});

	return response.updateOrder?.id;
}

export async function getOrderById(id: string) {
	const { order } = await graphqlFetch({
		query: CartGetByIdDocument,
		variables: { id },
	});
	if (!order) {
		throw new Error("Order not found");
	}

	return order;
}
