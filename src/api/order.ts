import { graphqlFetch } from "@api/fetch";
import {
	OrderUpdateDatalByIdDocument,
	OrdersGetByEmailDocument,
} from "@gql/graphql";

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
	email: string,
	total: number,
) {
	const response = await graphqlFetch({
		query: OrderUpdateDatalByIdDocument,
		variables: { id, email, total },
		cache: "no-store",
		next: {
			tags: ["order"],
		},
	});

	return response.updateOrder?.id;
}
