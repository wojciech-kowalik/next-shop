import { OrdersGetByEmailDocument } from "@gql/graphql";
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
