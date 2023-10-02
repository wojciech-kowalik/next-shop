"use server";

import { graphqlFetch } from "@api/fetch";
import { CartSetProductQuantityDocument } from "@gql/graphql";

export async function changeItemQuantity(itemId: string, quantity: number) {
	return graphqlFetch({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity },
		next: { tags: ["cart"] },
	});
}
