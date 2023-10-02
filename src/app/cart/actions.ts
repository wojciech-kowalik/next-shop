"use server";

import { graphqlFetch } from "@api/fetch";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
} from "@gql/graphql";

export async function removeItemFromCart(itemId: string) {
	return graphqlFetch({
		query: CartRemoveProductDocument,
		variables: { itemId },
		next: { tags: ["cart"] },
	});
}

export async function changeItemQuantity(itemId: string, quantity: number) {
	return graphqlFetch({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity },
		next: { tags: ["cart"] },
	});
}
