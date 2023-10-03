"use server";

import { env } from "process";
import Stripe from "stripe";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { graphqlFetch } from "@api/fetch";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
} from "@gql/graphql";
import { getCartByIdFromCookies } from "@api/cart";

export async function removeItemFromCartAction(itemId: string) {
	return graphqlFetch({
		query: CartRemoveProductDocument,
		variables: { itemId },
		next: { tags: ["cart"] },
	});
}

export async function changeItemQuantityAction(
	itemId: string,
	quantity: number,
) {
	return graphqlFetch({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity },
		next: { tags: ["cart"] },
	});
}

export async function paymentByStripeAction(_formData: FormData) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const cart = await getCartByIdFromCookies();
	if (!cart) {
		return;
	}

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems
			.map((item) =>
				item.product
					? {
							price_data: {
								currency: "usd",
								product_data: {
									name: item.product.name,
									description: item.product.description ?? "",
									images: item.product.images.map((i) => i.url),
								},
								unit_amount: item.product.price,
							},
							quantity: item.quantity,
					  }
					: {},
			)
			.filter(Boolean),
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/canceled`,
	});

	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
}
