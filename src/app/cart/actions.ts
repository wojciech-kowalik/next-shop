"use server";

import Stripe from "stripe";
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

export async function paymentByStripe(_formData: FormData) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	const _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
	});
}
